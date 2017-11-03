/// <reference path="./carousel.extend.d.ts" />

import * as b from "bobril";
import { Elem, IBaseData, IElementBobrilNode } from "./element";
import { Ol } from "./ol";
import { Li } from "./li";
import { A } from "./a";
import { Glyphicon, GlyphIcon } from "./glyphicon";
import { Span } from "./span";
import { helpers } from "./helpers";

export interface ICarouselItem {
  image: b.IBobrilNode;
  captionContent?: b.IBobrilChildren;
}

export enum CarouselPauseOn {
  Hover,
  MouseEnter,
  MouseLeave
}

export interface ICarouselData extends IBaseData {
  id: string;
  items: ICarouselItem[];
  srOnlyNext?: string;
  srOnlyPrev?: string;
  slideTo?: number;
  interval?: number;
  pauseOn?: CarouselPauseOn;
  wrap?: boolean;
  keyboard?: boolean;
  onSlide?: () => void;
}

interface ICarouselCtx extends b.IBobrilCtx {
  data: ICarouselData;
  initialSlideChanged?: boolean;
  paused?: boolean;
}

export const carouselStyles = {
  active: b.styleDef("active"),
  carousel: b.styleDef("carousel"),
  carouselCaption: b.styleDef("carousel-caption"),
  carouselIndicators: b.styleDef("carousel-indicators"),
  carouselInner: b.styleDef("carousel-inner"),
  carouselControl: b.styleDef("carousel-control"),
  item: b.styleDef("item"),
  left: b.styleDef("left"),
  right: b.styleDef("right"),
  slide: b.styleDef("slide")
};

export const Carousel = b.createDerivedComponent<ICarouselData>(Elem, {
  id: "bobrilstrap-carousel",
  render(ctx: ICarouselCtx, me: IElementBobrilNode) {
    b.style(me, carouselStyles.carousel, carouselStyles.slide);
    me.attrs["id"] = ctx.data.id;

    if (!(ctx.data.data && ctx.data.data.ride))
      me.attrs["data-ride"] = "carousel";

    const initialSlide = ctx.data.slideTo === undefined ? 0 : ctx.data.slideTo;

    me.children = [
      b.style(
        Ol(
          {},
          ctx.data.items.map((_item, idx) => {
            return b.style(
              Li({ data: { target: `#${ctx.data.id}`, slideTo: idx } }),
              !ctx.initialSlideChanged &&
                idx === initialSlide &&
                carouselStyles.active
            );
          })
        ),
        carouselStyles.carouselIndicators
      ),
      Elem(
        { style: carouselStyles.carouselInner, attrs: { role: "listbox" } },
        ctx.data.items.map((item, idx) =>
          Elem(
            {
              style: [
                carouselStyles.item,
                !ctx.initialSlideChanged &&
                  idx === initialSlide &&
                  carouselStyles.active
              ]
            },
            [
              item.image,
              !!item.captionContent &&
                Elem(
                  { style: carouselStyles.carouselCaption },
                  item.captionContent
                )
            ]
          )
        )
      ),
      A(
        {
          style: [carouselStyles.left, carouselStyles.carouselControl],
          href: `#${ctx.data.id}`,
          attrs: { role: "button" },
          data: { slide: "prev" }
        },
        [
          Glyphicon({ icon: GlyphIcon.ChevronLeft, aria: { hidden: true } }),
          ctx.data.srOnlyPrev &&
            Span({ style: helpers.srOnly }, ctx.data.srOnlyPrev)
        ]
      ),
      A(
        {
          style: [carouselStyles.right, carouselStyles.carouselControl],
          href: `#${ctx.data.id}`,
          attrs: { role: "button" },
          data: { slide: "next" }
        },
        [
          Glyphicon({ icon: GlyphIcon.ChevronRight, aria: { hidden: true } }),
          ctx.data.srOnlyNext &&
            Span({ style: helpers.srOnly }, ctx.data.srOnlyNext)
        ]
      )
    ];
  },
  postInitDom(ctx: ICarouselCtx, _me: b.IBobrilNode, element: HTMLElement) {
    const jqueryElement = $(element);
    jqueryElement.carousel({
      interval: ctx.data.interval,
      pause:
        ctx.data.pauseOn !== undefined
          ? CarouselPauseOn[ctx.data.pauseOn].toLowerCase()
          : undefined,
      wrap: ctx.data.wrap,
      keyboard: ctx.data.keyboard
    } as CarouselOptions);
    jqueryElement.on("slide.bs.Carousel", () => {
      ctx.initialSlideChanged = true;
      if (ctx.data.onSlide) ctx.data.onSlide();
    });

    handleSlideTo(ctx, jqueryElement);
  },
  postUpdateDom(ctx: ICarouselCtx, _me: b.IBobrilNode, element: HTMLElement) {
    handleSlideTo(ctx, $(element));
  },
  onSwipeLeft(ctx: ICarouselCtx) {
    const element = b.getDomNode(ctx.me) as HTMLElement;
    $(element).carousel("next");
    return true;
  },
  onSwipeRight(ctx: ICarouselCtx) {
    const element = b.getDomNode(ctx.me) as HTMLElement;
    $(element).carousel("prev");
    return true;
  }
});

function handleSlideTo(ctx: ICarouselCtx, jqueryElement: JQuery) {
  if (ctx.data.slideTo !== undefined) {
    jqueryElement.carousel(ctx.data.slideTo);
  }
}

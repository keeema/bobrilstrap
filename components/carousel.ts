import * as b from 'bobril';
import { elem, IBaseData, IElementBobrilNode } from './element';
import { ol } from './ol';
import { li } from './li';
import { a } from './a';
import { glyphicon, GlyphIcon } from './glyphicon';
import { span } from './span';
import { helpers } from './helpers';

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
    keybord?: boolean;
    onSlide?: () => void;
}

interface ICarouselCtx extends b.IBobrilCtx {
    data: ICarouselData;
    initialSlideChanged?: boolean;
    paused?: boolean;
}

export const carouselStyles = {
    active: b.styleDef('active'),
    carousel: b.styleDef('carousel'),
    carouselIndicators: b.styleDef('carousel-indicators'),
    carouselInner: b.styleDef('carousel-inner'),
    carouselControl: b.styleDef('carousel-control'),
    item: b.styleDef('item'),
    left: b.styleDef('left'),
    right: b.styleDef('right'),
    slide: b.styleDef('slide'),
};

export const carousel = b.createDerivedComponent<ICarouselData>(elem, {
    id: 'bobrilstrap-carousel',
    render(ctx: ICarouselCtx, me: IElementBobrilNode) {
        b.style(me, carouselStyles.carousel, carouselStyles.slide);
        me.attrs['id'] = ctx.data.id;

        if (!(ctx.data.data && ctx.data.data.ride))
            me.attrs['data-ride'] = 'carousel';

        const initialSlide = ctx.data.slideTo === undefined ? 0 : ctx.data.slideTo;

        me.children = [
            b.style(
                ol({}, ctx.data.items.map((_item, idx) => {
                    return b.style(
                        li({ data: { target: `#${ctx.data.id}`, slideTo: idx } }),
                        !ctx.initialSlideChanged && idx === initialSlide && carouselStyles.active
                    );
                })),
                carouselStyles.carouselIndicators
            ),
            elem(
                { style: carouselStyles.carouselInner, attrs: { role: 'listbox' } },
                ctx.data.items.map((item, idx) => elem(
                    { style: [carouselStyles.item, !ctx.initialSlideChanged && idx === initialSlide && carouselStyles.active] },
                    [item.image, item.captionContent])
                )
            ),
            a(
                {
                    style: [carouselStyles.left, carouselStyles.carouselControl],
                    href: `#${ctx.data.id}`,
                    attrs: { role: 'button' },
                    data: { slide: 'prev' }
                },
                [
                    glyphicon({ icon: GlyphIcon.ChevronLeft, aria: { hidden: true } }),
                    ctx.data.srOnlyPrev && span({ style: helpers.srOnly }, ctx.data.srOnlyPrev)
                ]
            ),
            a(
                {
                    style: [carouselStyles.right, carouselStyles.carouselControl],
                    href: `#${ctx.data.id}`,
                    attrs: { role: 'button' },
                    data: { slide: 'next' }
                },
                [
                    glyphicon({ icon: GlyphIcon.ChevronRight, aria: { hidden: true } }),
                    ctx.data.srOnlyNext && span({ style: helpers.srOnly }, ctx.data.srOnlyNext)
                ]
            )
        ];
    },
    postInitDom(ctx: ICarouselCtx, _me: b.IBobrilNode, element: HTMLElement) {
        const jqueryElement = $(element);
        jqueryElement.carousel({
            interval: ctx.data.interval,
            pause: ctx.data.pauseOn !== undefined ? CarouselPauseOn[ctx.data.pauseOn].toLowerCase() : undefined,
            wrap: ctx.data.wrap,
            keybord: ctx.data.keybord,
        });
        jqueryElement.on('slide.bs.carousel', () => {
            ctx.initialSlideChanged = true;
            if (ctx.data.onSlide)
                ctx.data.onSlide();
        });

        handleSlideTo(ctx, jqueryElement);
    },
    postUpdateDom(ctx: ICarouselCtx, _me: b.IBobrilNode, element: HTMLElement) {
        handleSlideTo(ctx, $(element));
    }
});

function handleSlideTo(ctx: ICarouselCtx, jqueryElement: JQuery) {
    if (ctx.data.slideTo !== undefined) {
        jqueryElement.carousel(ctx.data.slideTo);
    }
}
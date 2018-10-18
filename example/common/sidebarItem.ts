import * as b from "bobril";
import * as bs from "../../index";
import { sideBarItems } from "./sidebarItems";

export interface IItemData {
  targetId: string;
  nextId?: string;
  title: string;
  subs?: IItemData[];
}

interface ICtx extends b.IBobrilCtx {
  data: IItemData;
  top: number;
  bottom: number;
  active: boolean;
}

export const sideBarItem = b.createVirtualComponent<IItemData>({
  id: "bs-example-sidebar-item",
  init(ctx: ICtx) {
    const onScrollListener = getScrollListener(ctx);
    b.addOnScroll(onScrollListener);
    b.addDisposable(ctx, () => b.removeOnScroll(onScrollListener));
  },
  render(ctx: ICtx, me: b.IBobrilNode) {
    me.children = bs.Li(
      {
        active: !endSwith(ctx.data.targetId, "-top") && ctx.active
      },
      [
        b.link(
          bs.A(
            {
              onClick: () => {
                if (endSwith(ctx.data.targetId, "-top")) window.scrollTo(0, 0);
              }
            },
            ctx.data.title
          ),
          ctx.data.targetId
        ),
        !!ctx.data.subs &&
          sideBarItems({ items: ctx.data.subs, nextId: ctx.data.nextId })
      ]
    );
  },
  postInitDom(ctx: ICtx) {
    handlePosition(ctx);
  }
});

export interface IItemsData {
  items?: IItemData[];
  nextId?: string;
  isTop?: boolean;
}

function getScrollListener(
  ctx: ICtx
): (scrollInfo: b.IBobrilScroll | undefined) => void {
  return (scrollInfo: b.IBobrilScroll | undefined) => {
    if (!scrollInfo || scrollInfo.node) return;

    handlePosition(ctx);
  };
}

function handlePosition(ctx: ICtx) {
  const scrollTop =
  document.documentElement && document.documentElement.scrollTop || document.body.scrollTop;
  const topElement = document.getElementById(ctx.data.targetId);
  const top = topElement ? topElement.offsetTop : 0;
  let bottom = 0;
  if (ctx.data.nextId) {
    const nextElement = document.getElementById(ctx.data.nextId);
    const nextOffsetTop = nextElement
      ? nextElement.offsetTop + nextElement.clientHeight
      : document.body.scrollHeight;
    bottom = nextOffsetTop;
  } else {
    bottom = document.body.scrollHeight;
  }

  const active = scrollTop >= top && scrollTop < bottom;
  const changeState = active !== ctx.active;
  ctx.active = active;

  if (changeState) {
    b.invalidate(ctx);
  }
}

function endSwith(value: string, searchString: string, position?: number) {
  const subjectString = value.toString();
  if (
    typeof position !== "number" ||
    !isFinite(position) ||
    Math.floor(position) !== position ||
    position > subjectString.length
  ) {
    position = subjectString.length;
  }
  position -= searchString.length;
  const lastIndex = subjectString.indexOf(searchString, position);
  return lastIndex !== -1 && lastIndex === position;
}

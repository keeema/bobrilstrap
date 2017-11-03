import * as b from "bobril";

export enum PopoverPlacement {
  Left,
  Top,
  Bottom,
  Right,
  Auto
}

export enum PopoverTrigger {
  Click,
  Hover,
  Focus,
  Manual
}

export interface IPopoverOptions {
  title: string | (() => string);
  content: string | (() => string);
  placement?: PopoverPlacement;
  animation?: boolean;
  trigger?: PopoverTrigger[];
}

export interface IPopoverData extends IPopoverOptions {
  children?: b.IBobrilNode;
}

interface IPopoverCtx extends b.IBobrilCtx {
  data: IPopoverData;
  popoveredElement: HTMLElement | undefined;
  visible: boolean;
  lastTitle: string;
  lastContent: string;
}

export const Popover = b.createVirtualComponent<IPopoverData>({
  id: "bobrilstrap-popover",
  render(ctx: IPopoverCtx, me: b.IBobrilNode) {
    me.children = ctx.data.children;
  },
  postInitDom(ctx: IPopoverCtx) {
    registerNewPopover(ctx);
  },
  postUpdateDom(ctx: IPopoverCtx) {
    registerNewPopover(ctx);
  },
  destroy(ctx: IPopoverCtx) {
    unregister(ctx);
  }
});

function registerNewPopover(ctx: IPopoverCtx) {
  const element = b.getDomNode(ctx.me) as HTMLElement;
  if (!element) {
    ctx.popoveredElement = undefined;
    return;
  }

  const jQueryElement = $(element);

  if (!ctx.popoveredElement) {
    jQueryElement.popover({
      title: ctx.data.title,
      content: ctx.data.content,
      animation: ctx.data.animation,
      placement:
        ctx.data.placement !== undefined
          ? PopoverPlacement[ctx.data.placement].toLowerCase()
          : undefined,
      trigger: ctx.data.trigger
        ? ctx.data.trigger
            .map(value => PopoverTrigger[value].toLowerCase())
            .join(" ")
        : undefined
    });
    jQueryElement.on("shown.bs.Popover", () => (ctx.visible = true));
    jQueryElement.on("hidden.bs.Popover", () => (ctx.visible = false));
    ctx.popoveredElement = element;
  }

  const newTitle =
    typeof ctx.data.title === "function" ? ctx.data.title() : ctx.data.title;
  const newContent =
    typeof ctx.data.content === "function"
      ? ctx.data.content()
      : ctx.data.content;

  if (
    (ctx.lastTitle !== undefined && ctx.lastTitle !== newTitle) ||
    (ctx.lastContent !== undefined && ctx.lastContent !== newContent)
  ) {
    jQueryElement.popover("setContent");

    if (ctx.visible) jQueryElement.popover("show");
  }

  ctx.lastTitle =
    typeof ctx.data.title === "function" ? ctx.data.title() : ctx.data.title;
  ctx.lastContent =
    typeof ctx.data.content === "function"
      ? ctx.data.content()
      : ctx.data.content;
}

function unregister(ctx: IPopoverCtx) {
  if (ctx.popoveredElement) {
    $(ctx.popoveredElement).popover("destroy");
    ctx.popoveredElement = undefined;
  }
}

export default Popover;

import * as b from "bobril";

export enum TooltipPlacement {
  Left,
  Top,
  Bottom,
  Right,
  Auto
}

export enum TooltipTrigger {
  Click,
  Hover,
  Focus,
  Manual
}

export interface ITooltipOptions {
  title: string | (() => string);
  placement?: TooltipPlacement;
  animation?: boolean;
  trigger?: TooltipTrigger[];
}

export interface ITooltipData extends ITooltipOptions {
  children?: b.IBobrilNode;
}

interface ITooltipCtx extends b.IBobrilCtx {
  data: ITooltipData;
  tooltipedElement: HTMLElement | undefined;
  visible: boolean;
  lastTitle: string;
}

export const Tooltip = b.createVirtualComponent<ITooltipData>({
  id: "bobrilstrap-tooltip",
  render(ctx: ITooltipCtx, me: b.IBobrilNode) {
    me.children = ctx.data.children;
  },
  postInitDom(ctx: ITooltipCtx) {
    registerNewTooltip(ctx);
  },
  postUpdateDom(ctx: ITooltipCtx) {
    registerNewTooltip(ctx);
  },
  destroy(ctx: ITooltipCtx) {
    unregister(ctx);
  }
});

function registerNewTooltip(ctx: ITooltipCtx) {
  const element = b.getDomNode(ctx.me) as HTMLElement;
  if (!element) {
    ctx.tooltipedElement = undefined;
    return;
  }

  const jQueryElement = $(element);

  if (!ctx.tooltipedElement) {
    jQueryElement.tooltip({
      title: ctx.data.title,
      animation: ctx.data.animation,
      placement:
        ctx.data.placement !== undefined
          ? TooltipPlacement[ctx.data.placement].toLowerCase()
          : undefined,
      trigger: ctx.data.trigger
        ? ctx.data.trigger
            .map(value => TooltipTrigger[value].toLowerCase())
            .join(" ")
        : undefined
    });
    jQueryElement.on("shown.bs.Tooltip", () => (ctx.visible = true));
    jQueryElement.on("hidden.bs.Tooltip", () => (ctx.visible = false));
    ctx.tooltipedElement = element;
  }

  if (ctx.lastTitle !== undefined) {
    const newTitle =
      typeof ctx.data.title === "function" ? ctx.data.title() : ctx.data.title;
    if (ctx.lastTitle !== newTitle) {
      jQueryElement.attr("title", newTitle).tooltip("fixTitle");

      if (ctx.visible) jQueryElement.tooltip("show");
    }
  }

  ctx.lastTitle =
    typeof ctx.data.title === "function" ? ctx.data.title() : ctx.data.title;
}

function unregister(ctx: ITooltipCtx) {
  if (ctx.tooltipedElement) {
    $(ctx.tooltipedElement).tooltip("destroy");
    ctx.tooltipedElement = undefined;
  }
}

export default Tooltip;

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
  visible?: boolean;
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
  const newTitle =
    typeof ctx.data.title === "function" ? ctx.data.title() : ctx.data.title;

  if (!ctx.tooltipedElement) {
    jQueryElement.tooltip({
      title: newTitle,
      animation: ctx.data.animation,
      placement:
        ctx.data.placement !== undefined
          ? (TooltipPlacement[
              ctx.data.placement
            ].toLowerCase() as BootstrapPlacement)
          : undefined,
      trigger: ctx.data.trigger
        ? (ctx.data.trigger
            .map(value => TooltipTrigger[value].toLowerCase())
            .join(" ") as BootstrapTrigger)
        : undefined
    });
    jQueryElement.on("shown.bs.tooltip", () => (ctx.visible = true));
    jQueryElement.on("hidden.bs.tooltip", () => (ctx.visible = false));
    ctx.tooltipedElement = element;
  }

  if (isManualTrigger(ctx) && !!ctx.visible !== !!ctx.data.visible) {
    ctx.visible = !!ctx.data.visible;
    jQueryElement.tooltip(ctx.visible ? "show" : "hide");
  }

  if (ctx.lastTitle !== undefined && ctx.lastTitle !== newTitle) {
    jQueryElement.attr("data-original-title", newTitle);
    if (ctx.visible) jQueryElement.tooltip("show");
  }

  ctx.lastTitle = newTitle;
}

function isManualTrigger(ctx: ITooltipCtx) {
  return (
    ctx.data.trigger !== undefined &&
    ctx.data.trigger.length === 1 &&
    ctx.data.trigger[0] === TooltipTrigger.Manual
  );
}

function unregister(ctx: ITooltipCtx) {
  if (ctx.tooltipedElement) {
    $(ctx.tooltipedElement).tooltip("destroy");
    ctx.tooltipedElement = undefined;
  }
}

export default Tooltip;

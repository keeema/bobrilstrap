import * as b from "bobril";

export const collapseStyles = {
  collapse: b.styleDef("collapse"),
  in: b.styleDef("in"),
  collapsed: b.styleDef("collapsed")
};

export interface ICollapseData {
  children?: b.IBobrilNode;
  collapsed: boolean;
  onCollapsed?: () => void;
  onExpanded?: () => void;
}

interface ICollapseCtx extends b.IBobrilCtx {
  data: ICollapseData;
  collapsedElement: HTMLElement;
  collapsed: boolean;
}

export const Collapse = b.createVirtualComponent<ICollapseData>({
  id: "bobrilstrap-collapse",
  render(ctx: ICollapseCtx, me: b.IBobrilNode) {
    me.children = ctx.data.children;
  },
  postInitDom(ctx: ICollapseCtx) {
    registerNewCollapse(ctx);
  },
  postUpdateDom(ctx: ICollapseCtx) {
    registerNewCollapse(ctx);
    handleToggle(ctx);
  }
});

function registerNewCollapse(ctx: ICollapseCtx) {
  const element = b.getDomNode(ctx.me) as HTMLElement;
  if (!element || ctx.collapsedElement === element) return;

  ctx.collapsedElement = element;
  $(element).collapse({ toggle: !ctx.data.collapsed });
  ctx.collapsed = ctx.data.collapsed;
  $(element).on("hidden.bs.Collapse", () => {
    if (ctx.data.onCollapsed) ctx.data.onCollapsed();
  });
  $(element).on("shown.bs.Collapse", () => {
    if (ctx.data.onExpanded) ctx.data.onExpanded();
  });
}

function handleToggle(ctx: ICollapseCtx) {
  const element = b.getDomNode(ctx.me) as HTMLElement;
  if (!!ctx.collapsed !== !!ctx.data.collapsed) {
    ctx.collapsed = !!ctx.data.collapsed;
    $(element).collapse(ctx.collapsed ? "hide" : "show");
  }
}

export default Collapse;

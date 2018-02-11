import * as b from "bobril";
import { toLowerWithDashes } from "./bobrilHelpers";

export interface IAria {
  [key: string]: string | boolean | undefined | number;
  activedescendant?: string;
  atomic?: boolean;
  autocomplete?: string;
  busy?: boolean | string;
  checked?: boolean | string;
  controls?: string;
  describedby?: string;
  disabled?: boolean;
  dropeffect?: string;
  expanded?: boolean;
  flowto?: string;
  grabbed?: boolean;
  haspopup?: boolean;
  hidden?: boolean;
  invalid?: boolean;
  label?: string;
  labelledby?: string;
  level?: number;
  live?: string;
  multiline?: boolean;
  multiselectable?: boolean;
  orientation?: string;
  owns?: string;
  posinset?: number;
  pressed?: boolean | string;
  readonly?: boolean;
  relevant?: string;
  required?: boolean;
  selected?: boolean;
  setsize?: number;
  sort?: string;
  valuemax?: number | string;
  valuemin?: number | string;
  valuenow?: number | string;
  valuetext?: string;
  xMsAriaFlowfrom?: string;
}

export interface IData {
  [key: string]: string | boolean | undefined | number;
  toggle?: string;
  target?: string;
  dismiss?: string;
  ride?: string;
  slide?: string;
  slideTo?: number;
}

export type ValueType =
  | number
  | string
  | string[]
  | boolean
  | Object
  | undefined;

export interface IBaseData<TValueType = ValueType> {
  key?: string;
  id?: string;
  children?: b.IBobrilChildren;
  style?: b.IBobrilStyles;
  aria?: IAria;
  attrs?: { [key: string]: string | number | boolean };
  title?: string;
  data?: IData;

  onClick?: (event: b.IBobrilMouseEvent) => boolean | void;
  onChange?: (value: TValueType) => void;
  onKeyPress?: (event: b.IKeyPressEvent) => boolean;
}

export interface IElementBobrilNodeCommon extends b.IBobrilNodeCommon {
  attrs: b.IBobrilAttributes;
  component: IElementBobrilComponent;
}

export interface IElementBobrilComponent extends b.IBobrilComponent {
  super: IElementBobrilComponent;
  onChange: (ctx: ICtx, value: string | string[] | boolean) => void;
  render(
    ctx: b.IBobrilCtx,
    me: b.IBobrilNode,
    oldMe?: b.IBobrilCacheNode
  ): void;
}

export type IElementBobrilNode = IElementBobrilNodeCommon & b.IBobrilNode;
export type IElementBobrilCacheNode = IElementBobrilNodeCommon &
  b.IBobrilCacheNode;

export interface IElementData extends IBaseData {
  tag?: string;
}

export interface ICtx extends b.IBobrilCtx {
  data: IElementData;
}

export const E = b.createVirtualComponent<IElementData>({
  id: "bobrilstrap-element",
  render(ctx: ICtx, me: IElementBobrilNode) {
    me.tag = ctx.data.tag || "div";
    me.children = ctx.data.children;
    me.attrs = ctx.data.attrs || {};
  },
  postRender(ctx: ICtx, me: IElementBobrilNode): void {
    let aria = ctx.data.aria || {};
    let dataAttrs = ctx.data.data || {};

    if (ctx.data.id) me.attrs.id = ctx.data.id;

    if (ctx.data.key) b.withKey(me, ctx.data.key);

    if (ctx.data.title) me.attrs["title"] = ctx.data.title;

    Object.keys(aria).forEach(key => {
      me.attrs[`aria-${toLowerWithDashes(key)}`] = aria[key];
    });

    Object.keys(dataAttrs).forEach(key => {
      me.attrs[`data-${toLowerWithDashes(key)}`] = dataAttrs[key];
    });

    b.style(me, ctx.data.style);
  },
  onClick(ctx: ICtx, event: b.IBobrilMouseEvent): boolean {
    if (!ctx.data.onClick) return false;

    return !!ctx.data.onClick(event);
  },
  onChange(ctx: ICtx, value: string): void {
    if (ctx.data.onChange) ctx.data.onChange(value);
  },
  onKeyPress(ctx: ICtx, event: b.IKeyPressEvent): boolean {
    if (ctx.data.onKeyPress) {
      return ctx.data.onKeyPress(event);
    }

    return false;
  }
});

export const Element = E;
export const Elem = E;
export default E;

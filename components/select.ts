import * as b from "bobril";
import {
  Elem,
  IBaseData,
  IElementBobrilNode,
  IElementBobrilCacheNode
} from "./element";
import { Option, IOptionsData as IOptionData } from "./option";
import { createDictionary, IDictionary } from "./bobrilHelpers";

export interface ISelectData extends IBaseData<string | string[]> {
  value?: string | string[];
  options: IOptionData[];
  multiple?: boolean;
  rows?: number;
  size?: SelectSize;
  disabled?: boolean;
}

interface ICtx extends b.IBobrilCtx {
  data: ISelectData;
  value: string | string[];
  me: IElementBobrilCacheNode;
}

export const selectStyles = {
  formControl: b.styleDef("form-control"),
  lg: b.styleDef("input-lg"),
  sm: b.styleDef("input-sm")
};

export enum SelectSize {
  Lg,
  Default,
  Sm
}

export const selectSizeStyles: IDictionary<
  SelectSize,
  b.IBobrilStyle
> = createDictionary<SelectSize, b.IBobrilStyle>();
selectSizeStyles(SelectSize.Lg, selectStyles.lg);
selectSizeStyles(SelectSize.Default, false);
selectSizeStyles(SelectSize.Sm, selectStyles.sm);

export const Select = b.createOverridingComponent<ISelectData>(Elem, {
  id: "bobrilstrap-select",
  render(ctx: ICtx, me: IElementBobrilNode) {
    me.component.super.render(ctx, me);

    me.tag = "select";

    if (ctx.data.value !== undefined) {
      ctx.value = ctx.data.value;
    } else if (ctx.value === undefined && ctx.data.multiple) {
      ctx.value = [];
    }

    me.attrs.value = ctx.value;
    b.style(me, selectStyles.formControl);
    b.style(me, ctx.data.size !== undefined && selectSizeStyles(ctx.data.size));
    me.children = ctx.data.options.map(optionData => Option(optionData));

    if (ctx.data.rows) me.attrs["size"] = ctx.data.rows.toString();

    if (ctx.data.disabled) me.attrs["disabled"] = "disabled";

    if (ctx.data.multiple) me.attrs["multiple"] = "multiple";
  },
  onChange(ctx: ICtx, value: string | string[]): void {
    ctx.value = value;
    ctx.me.component.super.onChange(ctx, value);
  }
});

export default Select;

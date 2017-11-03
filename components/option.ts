import * as b from "bobril";
import { Elem, IBaseData, IElementBobrilNode } from "./element";

export interface IOptionsData extends IBaseData {
  value: string;
  label?: string;
  disabled?: boolean;
}

interface ICtx extends b.IBobrilCtx {
  data: IOptionsData;
}

export const Option = b.createDerivedComponent<IOptionsData>(Elem, {
  id: "bobrilstrap-option",
  render(ctx: ICtx, me: IElementBobrilNode) {
    me.tag = "option";
    me.attrs.value = ctx.data.value;
    me.children = ctx.data.label || ctx.data.value;

    if (ctx.data.disabled) me.attrs["disabled"] = "disabled";
  }
});

export default Option;

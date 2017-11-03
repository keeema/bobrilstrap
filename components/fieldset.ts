import * as b from "bobril";
import { Elem, IBaseData, IElementBobrilNode } from "./element";

export interface IFieldSetData extends IBaseData {
  disabled?: boolean;
}

interface ICtx extends b.IBobrilCtx {
  data: IFieldSetData;
}

export const Fieldset = b.createDerivedComponent<IFieldSetData>(Elem, {
  id: "bobrilstrap-fieldset",
  render(ctx: ICtx, me: IElementBobrilNode) {
    me.tag = "fieldset";
    if (ctx.data.disabled) me.attrs["disabled"] = "disabled";
  }
});

export default Fieldset;

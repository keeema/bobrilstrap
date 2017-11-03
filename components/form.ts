import * as b from "bobril";
import { Elem, IBaseData } from "./element";

export interface IFormData extends IBaseData {
  horizontal?: boolean;
  inline?: boolean;
}

interface ICtx extends b.IBobrilCtx {
  data: IFormData;
}

export const formStyles = {
  formHorizontal: b.styleDef("form-horizontal"),
  formInline: b.styleDef("form-inline")
};

export const Form = b.createDerivedComponent<IFormData>(Elem, {
  id: "bobrilstrap-form",
  render(ctx: ICtx, me: b.IBobrilNode) {
    me.tag = "form";
    b.style(me, !!ctx.data.horizontal && formStyles.formHorizontal);
    b.style(me, !!ctx.data.inline && formStyles.formInline);
  }
});

export default Form;

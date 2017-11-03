import * as b from "bobril";
import { Elem, IBaseData } from "./element";
import { Label, ILabeldData as ILabelData } from "./label";
import { InputCheckbox, IInputCheckBoxData } from "./inputCheckbox";

export interface ICheckboxData extends IBaseData {
  label?: ILabelData;
  inputCheckbox?: IInputCheckBoxData;
  inline?: boolean;
}

interface ICtx extends b.IBobrilCtx {
  data: ICheckboxData;
}

export const checkboxStyles = {
  checkbox: b.styleDef("checkbox"),
  checkboxInline: b.styleDef("checkbox-inline"),
  disabled: b.styleDef("disabled")
};

export const Checkbox = b.createDerivedComponent<ICheckboxData>(Elem, {
  id: "bobrilstrap-checkbox",
  render(ctx: ICtx, me: b.IBobrilNode) {
    b.style(me, checkboxStyles.checkbox);

    let inputCheckboxNode = InputCheckbox(ctx.data.inputCheckbox || {});
    let lbl = Label(ctx.data.label || {}, inputCheckboxNode);

    if (ctx.data.inline) {
      me.tag = undefined;
      b.style(lbl, checkboxStyles.checkboxInline);
    } else if (ctx.data.inputCheckbox && ctx.data.inputCheckbox.disabled) {
      b.style(me, checkboxStyles.disabled);
    }

    me.children = lbl;
  }
});

export default Checkbox;

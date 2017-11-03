import * as b from "bobril";
import { Elem, IBaseData } from "./element";
import { Label, ILabeldData as ILabelData } from "./label";
import { InputRadio, IInputRadioData } from "./inputRadio";

export interface IRadioData extends IBaseData {
  label?: ILabelData;
  inputRadio?: IInputRadioData;
  inline?: boolean;
}

interface ICtx extends b.IBobrilCtx {
  data: IRadioData;
}

export const radioStyles = {
  radio: b.styleDef("radio"),
  radioInline: b.styleDef("radio-inline"),
  disabled: b.styleDef("disabled")
};

export const Radio = b.createDerivedComponent<IRadioData>(Elem, {
  id: "bobrilstrap-radio",
  render(ctx: ICtx, me: b.IBobrilNode) {
    b.style(me, radioStyles.radio);

    let inputRadioNode = InputRadio(ctx.data.inputRadio);
    let lbl = Label(ctx.data.label || {}, inputRadioNode);

    if (ctx.data.inline) {
      me.tag = undefined;
      b.style(lbl, radioStyles.radioInline);
    } else if (ctx.data.inputRadio && ctx.data.inputRadio.disabled) {
      b.style(me, radioStyles.disabled);
    }

    me.children = lbl;
  }
});

export default Radio;

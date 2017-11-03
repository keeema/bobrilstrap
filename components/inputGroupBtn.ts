import * as b from "bobril";
import { Elem, IElementData } from "./element";

export interface IInputGroupBtnData extends IElementData {}

interface ICtx extends b.IBobrilCtx {
  data: IInputGroupBtnData;
}

export const inputGroupBtnStyles = {
  inputGroupBtn: b.styleDef("input-group-btn")
};

export const InputGroupBtn = b.createDerivedComponent(Elem, {
  id: "bobrilstrap-input-group-button",
  render(_ctx: ICtx, me: b.IBobrilNode) {
    b.style(me, inputGroupBtnStyles.inputGroupBtn);
  }
});

export default InputGroupBtn;

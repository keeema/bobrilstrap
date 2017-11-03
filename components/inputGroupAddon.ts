import * as b from "bobril";
import { Elem, IBaseData } from "./element";

export interface IInputGroupAddonData extends IBaseData {}

interface ICtx extends b.IBobrilCtx {
  data: IInputGroupAddonData;
}

export const inputGroupAddonStyle = b.styleDef("input-group-addon");

export const InputGroupAddon = b.createDerivedComponent<
  IInputGroupAddonData
>(Elem, {
  id: "bobrilstrap-input-group-addon",
  render(_ctx: ICtx, me: b.IBobrilNode) {
    me.tag = "span";
    b.style(me, inputGroupAddonStyle);
  }
});

export default InputGroupAddon;

import * as b from "bobril";
import { Elem, IBaseData, IElementBobrilNode } from "./element";

export const buttonToolbarStyles = {
  btnGroup: b.styleDef("btn-toolbar")
};

export const ButtonToolbar = b.createDerivedComponent<IBaseData>(Elem, {
  id: "bobrilstrap-button-toolbar",
  render(_ctx: b.IBobrilCtx, me: IElementBobrilNode) {
    b.style(me, buttonToolbarStyles.btnGroup);
    me.attrs["role"] = "toolbar";
  }
});

export default ButtonToolbar;

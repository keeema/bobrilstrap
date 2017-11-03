import * as b from "bobril";
import { Elem, IBaseData } from "./element";

export const helpTextStyle = b.styleDef("help-block");

export const HelpText = b.createDerivedComponent<IBaseData>(Elem, {
  id: "bobrilstrap-help-text",
  render(_ctx: b.IBobrilCtx, me: b.IBobrilNode) {
    me.tag = "span";
    b.style(me, helpTextStyle);
  }
});

export default HelpText;

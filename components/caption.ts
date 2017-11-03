import * as b from "bobril";
import { Elem, IBaseData } from "./element";

export const Caption = b.createDerivedComponent<IBaseData>(Elem, {
  id: "bobrilstrap-caption",
  render(_ctx: b.IBobrilCtx, me: b.IBobrilNode) {
    me.tag = "caption";
  }
});

export default Caption;

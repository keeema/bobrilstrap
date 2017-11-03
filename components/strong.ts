import * as b from "bobril";
import { Elem, IBaseData } from "./element";

export const Strong = b.createDerivedComponent<IBaseData>(Elem, {
  id: "bobrilstrap-strong",
  render(_ctx: b.IBobrilCtx, me: b.IBobrilNode) {
    me.tag = "strong";
  }
});

export default Strong;

import * as b from "bobril";
import { Elem, IBaseData } from "./element";

export const Mark = b.createDerivedComponent<IBaseData>(Elem, {
  id: "bobrilstrap-mark",
  render(_ctx: b.IBobrilCtx, me: b.IBobrilNode) {
    me.tag = "mark";
  }
});

export default Mark;

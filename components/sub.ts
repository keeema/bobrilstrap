import * as b from "bobril";
import { Elem, IBaseData } from "./element";

export const Sub = b.createDerivedComponent<IBaseData>(Elem, {
  id: "bobrilstrap-sub",
  render(_ctx: b.IBobrilCtx, me: b.IBobrilNode) {
    me.tag = "sub";
  }
});

export default Sub;

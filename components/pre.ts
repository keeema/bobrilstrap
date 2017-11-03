import * as b from "bobril";
import { Elem, IBaseData } from "./element";

export const Pre = b.createDerivedComponent<IBaseData>(Elem, {
  id: "bobrilstrap-pre",
  render(_ctx: b.IBobrilCtx, me: b.IBobrilNode) {
    me.tag = "pre";
  }
});

export default Pre;

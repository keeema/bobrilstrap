import * as b from "bobril";
import { Elem, IBaseData } from "./element";

export const Kbd = b.createDerivedComponent<IBaseData>(Elem, {
  id: "bobrilstrap-kbd",
  render(_ctx: b.IBobrilCtx, me: b.IBobrilNode) {
    me.tag = "kbd";
  }
});

export default Kbd;

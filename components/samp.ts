import * as b from "bobril";
import { Elem, IBaseData } from "./element";

export const Samp = b.createDerivedComponent<IBaseData>(Elem, {
  id: "bobrilstrap-samp",
  render(_ctx: b.IBobrilCtx, me: b.IBobrilNode) {
    me.tag = "samp";
  }
});

export default Samp;

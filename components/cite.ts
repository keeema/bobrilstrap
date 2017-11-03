import * as b from "bobril";
import { Elem, IBaseData } from "./element";

export const Cite = b.createDerivedComponent<IBaseData>(Elem, {
  id: "bobrilstrap-cite",
  render(_ctx: b.IBobrilCtx, me: b.IBobrilNode) {
    me.tag = "cite";
  }
});

export default Cite;

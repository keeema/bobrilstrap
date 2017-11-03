import * as b from "bobril";
import { Elem, IBaseData } from "./element";

export const Dd = b.createDerivedComponent<IBaseData>(Elem, {
  id: "bobrilstrap-dd",
  render(_ctx: b.IBobrilCtx, me: b.IBobrilNode) {
    me.tag = "dd";
  }
});

export default Dd;

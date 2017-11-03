import * as b from "bobril";
import { Elem, IBaseData } from "./element";

export const Dt = b.createDerivedComponent<IBaseData>(Elem, {
  id: "bobrilstrap-dt",
  render(_ctx: b.IBobrilCtx, me: b.IBobrilNode) {
    me.tag = "dt";
  }
});

export default Dt;

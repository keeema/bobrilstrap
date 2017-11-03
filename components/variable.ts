import * as b from "bobril";
import { Elem, IBaseData } from "./element";

export const Variable = b.createDerivedComponent<IBaseData>(Elem, {
  id: "bobrilstrap-variable",
  render(_ctx: b.IBobrilCtx, me: b.IBobrilNode) {
    me.tag = "var";
  }
});

export const V = Variable;

export default Variable;

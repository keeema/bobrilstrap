import * as b from "bobril";
import { Elem, IBaseData } from "./element";

export const Figure = b.createDerivedComponent<IBaseData>(Elem, {
  id: "bobrilstrap-figure",
  render(_ctx: b.IBobrilCtx, me: b.IBobrilNode) {
    me.tag = "figure";
  }
});

export default Figure;

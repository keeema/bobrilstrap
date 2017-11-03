import * as b from "bobril";
import { Elem, IBaseData } from "./element";

export const Italics = b.createDerivedComponent<IBaseData>(Elem, {
  id: "bobrilstrap-italics",
  render(_ctx: b.IBobrilCtx, me: b.IBobrilNode) {
    me.tag = "em";
  }
});

export const Em = Italics;

export default Italics;

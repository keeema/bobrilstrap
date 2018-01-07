import * as b from "bobril";
import { Element, IElementData } from "./element";

export const Main = b.createDerivedComponent<IElementData>(Element, {
  id: "bobrilstrap-main",
  render(_ctx: b.IBobrilCtx, me: b.IBobrilNode) {
    me.tag = "main";
  }
});

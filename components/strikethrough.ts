import * as b from "bobril";
import { Elem, IBaseData } from "./element";

export const Strikethrough = b.createDerivedComponent<IBaseData>(Elem, {
  id: "bobrilstrap-strikethrough",
  render(_ctx: b.IBobrilCtx, me: b.IBobrilNode) {
    me.tag = "s";
  }
});

export const S = Strikethrough;

export default Strikethrough;

import * as b from "bobril";
import { Elem, IBaseData } from "./element";

export const Code = b.createDerivedComponent<IBaseData>(Elem, {
  id: "bobrilstrap-code",
  render(_ctx: b.IBobrilCtx, me: b.IBobrilNode) {
    me.tag = "code";
  }
});

export default Code;

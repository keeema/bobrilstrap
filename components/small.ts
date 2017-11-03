import * as b from "bobril";
import { Elem, IBaseData } from "./element";

export const Small = b.createDerivedComponent<IBaseData>(Elem, {
  id: "bobrilstrap-small",
  render(_ctx: b.IBobrilCtx, me: b.IBobrilNode) {
    me.tag = "small";
  }
});

export default Small;

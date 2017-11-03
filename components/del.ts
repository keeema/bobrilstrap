import * as b from "bobril";
import { Elem, IBaseData } from "./element";

export const Del = b.createDerivedComponent<IBaseData>(Elem, {
  id: "bobrilstrap-del",
  render(_ctx: b.IBobrilCtx, me: b.IBobrilNode) {
    me.tag = "del";
  }
});

export default Del;

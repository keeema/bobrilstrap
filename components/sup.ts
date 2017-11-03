import * as b from "bobril";
import { Elem, IBaseData } from "./element";

export const Sup = b.createDerivedComponent<IBaseData>(Elem, {
  id: "bobrilstrap-sup",
  render(_ctx: b.IBobrilCtx, me: b.IBobrilNode) {
    me.tag = "sup";
  }
});

export default Sup;

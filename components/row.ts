import * as b from "bobril";
import { Elem, IBaseData } from "./element";

export const rowStyle = b.styleDef("row");

export const Row = b.createDerivedComponent<IBaseData>(Elem, {
  id: "bobrilstrap-row",
  render(_ctx: b.IBobrilCtx, me: b.IBobrilNode) {
    b.style(me, rowStyle);
  }
});

export default Row;

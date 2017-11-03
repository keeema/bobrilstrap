import * as b from "bobril";
import { Elem, IBaseData } from "./element";

export interface IJumbotronData extends IBaseData {}

interface IJumbotronCtx extends b.IBobrilCtx {
  data: IJumbotronData;
}

export const jumbotronStyle = b.styleDef("jumbotron");

export const Jumbotron = b.createDerivedComponent<IJumbotronData>(Elem, {
  id: "bobrilstrap-jumbotron",
  render(_ctx: IJumbotronCtx, me: b.IBobrilNode) {
    b.style(me, jumbotronStyle);
  }
});

export default Jumbotron;

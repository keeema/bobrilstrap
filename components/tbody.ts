import * as b from "bobril";
import { Elem, IBaseData } from "./element";
import { Tr, ITrData } from "./tr";

export interface ITBodyData extends IBaseData {
  rows?: ITrData[];
}

interface ICtx extends b.IBobrilCtx {
  data: ITBodyData;
}

export const TBody = b.createDerivedComponent<IBaseData>(Elem, {
  id: "bobrilstrap-tbody",
  render(ctx: ICtx, me: b.IBobrilNode) {
    me.tag = "tbody";

    if (ctx.data.rows) me.children = ctx.data.rows.map(row => Tr(row));
  }
});

export default TBody;

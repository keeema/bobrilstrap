import * as b from "bobril";
import { Elem, IBaseData } from "./element";
import { Tr, ITrData } from "./tr";

export interface ITHeadData extends IBaseData {
  row?: ITrData;
}

interface ICtx extends b.IBobrilCtx {
  data: ITHeadData;
}

export const THead = b.createDerivedComponent<ITHeadData>(Elem, {
  id: "bobrilstrap-thead",
  render(ctx: ICtx, me: b.IBobrilNode) {
    me.tag = "thead";

    if (ctx.data.row) me.children = Tr(ctx.data.row);
  }
});

export default THead;

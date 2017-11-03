import * as b from "bobril";
import { Elem, IBaseData } from "./element";
import { typography } from "./typography";

export interface IDlData extends IBaseData {
  horizontal?: boolean;
}

interface ICtx extends b.IBobrilCtx {
  data: IDlData;
}

export const Dl = b.createDerivedComponent<IDlData>(Elem, {
  id: "bobrilstrap-dl",
  render(ctx: ICtx, me: b.IBobrilNode) {
    me.tag = "dl";
    b.style(me, !!ctx.data.horizontal && typography.dlHorizontal);
  }
});

export default Dl;

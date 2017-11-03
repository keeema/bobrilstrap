import * as b from "bobril";
import { Elem, IBaseData, IElementBobrilNode } from "./element";

export interface IThData extends IBaseData {
  colspan?: number;
}

interface ICtx extends b.IBobrilCtx {
  data: IThData;
}

export const Th = b.createDerivedComponent<IThData>(Elem, {
  id: "bobrilstrap-th",
  render(ctx: ICtx, me: IElementBobrilNode) {
    me.tag = "th";
    if (ctx.data.colspan) me.attrs["colspan"] = ctx.data.colspan.toString();
  }
});

export default Th;

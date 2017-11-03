import * as b from "bobril";
import { Elem, IBaseData, IElementBobrilNode } from "./element";

export enum OlType {
  num,
  a,
  A,
  i,
  I
}

export interface IOlData extends IBaseData {
  type?: OlType;
}

interface IOlCtx extends b.IBobrilCtx {
  data: IOlData;
}

export const Ol = b.createDerivedComponent<IOlData>(Elem, {
  id: "bobrilstrap-ol",
  render(ctx: IOlCtx, me: IElementBobrilNode) {
    me.tag = "ol";
    if (ctx.data.type !== undefined) {
      me.attrs["type"] =
        ctx.data.type === OlType.num ? "1" : OlType[ctx.data.type];
    }
  }
});

export default Ol;

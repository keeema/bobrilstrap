import * as b from "bobril";
import { Elem, IBaseData } from "./element";
import { typography } from "./typography";

export interface IBlockquoteData extends IBaseData {
  reverse?: boolean;
}

interface ICtx extends b.IBobrilCtx {
  data: IBlockquoteData;
}

export const Blockquote = b.createDerivedComponent<IBlockquoteData>(Elem, {
  id: "bobrilstrap-blockquote",
  render(ctx: ICtx, me: b.IBobrilNode) {
    me.tag = "blockquote";
    b.style(me, !!ctx.data.reverse && typography.blockquoteReverse);
  }
});

export default Blockquote;

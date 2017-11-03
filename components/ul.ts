import * as b from "bobril";
import { Elem, IBaseData } from "./element";
import { typography } from "./typography";

export interface IUlData extends IBaseData {
  unstyled?: boolean;
  inline?: boolean;
}

interface ICtx extends b.IBobrilCtx {
  data: IUlData;
}

export const Ul = b.createDerivedComponent<IUlData>(Elem, {
  id: "bobrilstrap-ul",
  render(ctx: ICtx, me: b.IBobrilNode) {
    me.tag = "ul";
    b.style(me, !!ctx.data.unstyled && typography.listUnstyled);
    b.style(me, !!ctx.data.inline && typography.listInline);
  }
});

export default Ul;

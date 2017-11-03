import * as b from "bobril";
import { Elem, IBaseData } from "./element";
import { typography } from "./typography";

export interface IAbbreviationData extends IBaseData {
  initialism?: boolean;
}

interface ICtx extends b.IBobrilCtx {
  data: IAbbreviationData;
}

export const Abbreviation = b.createDerivedComponent<IAbbreviationData>(Elem, {
  id: "bobrilstrap-abbreviation",
  render(ctx: ICtx, me: b.IBobrilNode) {
    me.tag = "abbr";
    b.style(me, !!ctx.data.initialism && typography.initialism);
  }
});

export const Abbr = Abbreviation;

export default Abbreviation;

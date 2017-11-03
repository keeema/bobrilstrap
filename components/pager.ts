import * as b from "bobril";
import { Elem, IBaseData } from "./element";
import { Ul, IUlData } from "./ul";

export interface IPagerData extends IBaseData {
  ul?: IUlData;
}

interface IPagerCtx extends b.IBobrilCtx {
  data: IPagerData;
}

export const pagerStyles = {
  pager: b.styleDef("pager")
};

export const Pager = b.createDerivedComponent<IPagerData>(Elem, {
  id: "bobrilstrap-pager",
  render(ctx: IPagerCtx, me: b.IBobrilNode) {
    me.tag = "nav";
    me.children = b.style(
      Ul(ctx.data.ul || {}, ctx.data.children),
      pagerStyles.pager
    );
  }
});

export default Pager;

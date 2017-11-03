import * as b from "bobril";
import { Li, ILiData } from "./li";
import { navStyles } from "./nav";
import { IElementBobrilNode } from "./element";

export interface ITabData extends ILiData {
  dropdown?: boolean;
}

interface ITabCtx extends b.IBobrilCtx {
  data: ITabData;
}

export const Tab = b.createDerivedComponent<ITabData>(Li, {
  id: "bobrilstrap-tab",
  render(ctx: ITabCtx, me: IElementBobrilNode) {
    b.style(me, !!ctx.data.dropdown && navStyles.dropdown);
    me.attrs["role"] = "presentation";
  }
});

export default Tab;

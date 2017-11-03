import * as b from "bobril";
import { Elem, IBaseData } from "./element";

export interface IPageHeaderData extends IBaseData {}

export const pageHeaderStyle = b.styleDef("page-header");

interface IPanelHeadingCtx extends b.IBobrilCtx {
  data: IPageHeaderData;
}

export const PageHeader = b.createDerivedComponent<IPageHeaderData>(Elem, {
  id: "bobrilstrap-page-header",
  render(_ctx: IPanelHeadingCtx, me: b.IBobrilNode) {
    b.style(me, pageHeaderStyle);
  }
});

export default PageHeader;

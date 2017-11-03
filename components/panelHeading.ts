import * as b from "bobril";
import { Elem, IBaseData } from "./element";
import { panelStyles } from "./panel";

export interface IPanelHeadingData extends IBaseData {}

interface IPanelHeadingCtx extends b.IBobrilCtx {
  data: IPanelHeadingData;
}

export const PanelHeading = b.createDerivedComponent<IPanelHeadingData>(Elem, {
  id: "bobrilstrap-panel-heading",
  render(_ctx: IPanelHeadingCtx, me: b.IBobrilNode) {
    b.style(me, panelStyles.panelHeading);
  }
});

export default PanelHeading;

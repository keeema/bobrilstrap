import * as b from "bobril";
import { Elem, IBaseData } from "./element";
import { panelStyles } from "./panel";

export interface IPanelFooterData extends IBaseData {}

interface IPanelFooterCtx extends b.IBobrilCtx {
  data: IPanelFooterData;
}

export const PanelFooter = b.createDerivedComponent<IPanelFooterData>(Elem, {
  id: "bobrilstrap-panel-footer",
  render(_ctx: IPanelFooterCtx, me: b.IBobrilNode) {
    b.style(me, panelStyles.panelFooter);
  }
});

export default PanelFooter;

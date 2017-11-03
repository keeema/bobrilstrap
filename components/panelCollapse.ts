import * as b from "bobril";
import { Elem, IBaseData } from "./element";
import { panelStyles } from "./panel";
import { collapseStyles } from "./collapse";

export interface IPanelCollapseData extends IBaseData {}

interface IPanelCollapseCtx extends b.IBobrilCtx {
  data: IPanelCollapseData;
}

export const PanelCollapse = b.createDerivedComponent<IPanelCollapseData>(
  Elem,
  {
    id: "bobrilstrap-panel-collapse",
    render(_ctx: IPanelCollapseCtx, me: b.IBobrilNode) {
      b.style(me, panelStyles.panelCollapse, collapseStyles.collapse);
    }
  }
);

export default PanelCollapse;

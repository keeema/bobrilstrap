import * as b from "bobril";
import { Elem, IBaseData } from "./element";
import { panelStyles } from "./panel";

export interface IPanelBodyData extends IBaseData {}

interface IPanelBodyCtx extends b.IBobrilCtx {
  data: IPanelBodyData;
}

export const PanelBody = b.createDerivedComponent<IPanelBodyData>(Elem, {
  id: "bobrilstrap-panel-body",
  render(_ctx: IPanelBodyCtx, me: b.IBobrilNode) {
    b.style(me, panelStyles.panelBody);
  }
});

export default PanelBody;

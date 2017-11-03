import * as b from "bobril";
import { IBaseData } from "./element";
import { panelStyles } from "./panel";
import { H1, H2, H3, H4, H5, H6 } from "./headings";

export interface IPanelTitleData extends IBaseData {}

interface IPanelTitleCtx extends b.IBobrilCtx {
  data: IPanelTitleData;
}

export const PanelTitle1 = b.createDerivedComponent<IPanelTitleData>(H1, {
  id: "bobrilstrap-panel-title-h1",
  render(_ctx: IPanelTitleCtx, me: b.IBobrilNode) {
    b.style(me, panelStyles.panelTitle);
  }
});

export const PanelTitle2 = b.createDerivedComponent<IPanelTitleData>(H2, {
  id: "bobrilstrap-panel-title-h2",
  render(_ctx: IPanelTitleCtx, me: b.IBobrilNode) {
    b.style(me, panelStyles.panelTitle);
  }
});

export const PanelTitle3 = b.createDerivedComponent<IPanelTitleData>(H3, {
  id: "bobrilstrap-panel-title-h3",
  render(_ctx: IPanelTitleCtx, me: b.IBobrilNode) {
    b.style(me, panelStyles.panelTitle);
  }
});

export const PanelTitle4 = b.createDerivedComponent<IPanelTitleData>(H4, {
  id: "bobrilstrap-panel-title-h4",
  render(_ctx: IPanelTitleCtx, me: b.IBobrilNode) {
    b.style(me, panelStyles.panelTitle);
  }
});

export const PanelTitle5 = b.createDerivedComponent<IPanelTitleData>(H5, {
  id: "bobrilstrap-panel-title-h5",
  render(_ctx: IPanelTitleCtx, me: b.IBobrilNode) {
    b.style(me, panelStyles.panelTitle);
  }
});

export const PanelTitle6 = b.createDerivedComponent<IPanelTitleData>(H6, {
  id: "bobrilstrap-panel-title-h6",
  render(_ctx: IPanelTitleCtx, me: b.IBobrilNode) {
    b.style(me, panelStyles.panelTitle);
  }
});

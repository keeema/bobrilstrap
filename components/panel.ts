import * as b from "bobril";
import { Elem, IBaseData } from "./element";
import {
  createDictionary,
  IDictionary,
  mergeToChildren
} from "./bobrilHelpers";
import { PanelHeading } from "./panelHeading";
import { PanelBody } from "./panelBody";
import { PanelFooter } from "./panelFooter";

export const panelStyles = {
  panel: b.styleDef("panel"),
  panelGroup: b.styleDef("panel-group"),
  panelDefault: b.styleDef("panel-default"),
  panelPrimary: b.styleDef("panel-primary"),
  panelSuccess: b.styleDef("panel-success"),
  panelWarning: b.styleDef("panel-warning"),
  panelDanger: b.styleDef("panel-danger"),
  panelInfo: b.styleDef("panel-info"),
  panelHeading: b.styleDef("panel-heading"),
  panelBody: b.styleDef("panel-body"),
  panelFooter: b.styleDef("panel-footer"),
  panelTitle: b.styleDef("panel-title"),
  panelCollapse: b.styleDef("panel-collapse")
};

export enum PanelContext {
  Default,
  Primary,
  Success,
  Warning,
  Danger,
  Info
}

export const panelContextStyles: IDictionary<
  PanelContext,
  b.IBobrilStyle
> = createDictionary<PanelContext, b.IBobrilStyle>();
panelContextStyles(PanelContext.Default, panelStyles.panelDefault);
panelContextStyles(PanelContext.Primary, panelStyles.panelPrimary);
panelContextStyles(PanelContext.Success, panelStyles.panelSuccess);
panelContextStyles(PanelContext.Warning, panelStyles.panelWarning);
panelContextStyles(PanelContext.Danger, panelStyles.panelDanger);
panelContextStyles(PanelContext.Info, panelStyles.panelInfo);

export interface IPanelData extends IBaseData {
  context?: PanelContext;
  heading?: b.IBobrilChildren;
  body?: b.IBobrilChildren;
  footer?: b.IBobrilChildren;
}

interface IPanelCtx extends b.IBobrilCtx {
  data: IPanelData;
}

export const Panel = b.createDerivedComponent<IPanelData>(Elem, {
  id: "bobrilstrap-panel",
  render(ctx: IPanelCtx, me: b.IBobrilNode) {
    b.style(me, panelStyles.panel);
    b.style(
      me,
      (ctx.data.context !== undefined &&
        panelContextStyles(ctx.data.context)) ||
        panelStyles.panelDefault
    );

    if (ctx.data.body) mergeToChildren(me, PanelBody({}, ctx.data.body), true);

    if (ctx.data.heading)
      mergeToChildren(me, PanelHeading({}, ctx.data.heading), true);

    if (ctx.data.footer) mergeToChildren(me, PanelFooter({}, ctx.data.heading));
  }
});

export default Panel;

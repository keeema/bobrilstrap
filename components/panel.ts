import * as b from 'bobril';
import { elem, IBaseData } from './element';
import { createDictionary } from './bobrilHelpers';
import { panelHeading } from './panelHeading';
import { panelBody } from './panelBody';
import { panelFooter } from './panelFooter';
import { mergeToChildren } from './bobrilHelpers';

export const panelStyles = {
    panel: b.styleDef('panel '),
    panelDefault: b.styleDef('panel-default'),
    panelPrimary: b.styleDef('panel-primary'),
    panelSuccess: b.styleDef('panel-success'),
    panelWarning: b.styleDef('panel-warning'),
    panelDanger: b.styleDef('panel-danger'),
    panelInfo: b.styleDef('panel-info'),
    panelHeading: b.styleDef('panel-heading'),
    panelBody: b.styleDef('panel-body'),
    panelFooter: b.styleDef('panel-footer'),
    panelTitle: b.styleDef('panel-title')
};

export enum PanelContext {
    Default,
    Primary,
    Success,
    Warning,
    Danger,
    Info
}

export const panelContextStyles = createDictionary<PanelContext, b.IBobrilStyle>();
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

export const panel = b.createDerivedComponent<IPanelData>(elem, {
    id: 'bobrilstrap-panel',
    render(ctx: IPanelCtx, me: b.IBobrilNode) {
        b.style(me, panelStyles.panel);
        b.style(me, (ctx.data.context !== undefined && panelContextStyles(ctx.data.context)) || panelStyles.panelDefault);

        if (ctx.data.body)
            mergeToChildren(me, panelBody({}, ctx.data.body), true);

        if (ctx.data.heading)
            mergeToChildren(me, panelHeading({}, ctx.data.heading), true);

        if (ctx.data.footer)
            mergeToChildren(me, panelFooter({}, ctx.data.heading));
    }
});

export default panel;
import * as b from 'bobril';
import { IBaseData } from './element';
import { panelStyles } from './panel';
import { h1, h2, h3, h4, h5, h6 } from './headings';

export interface IPanelTitleData extends IBaseData {
}

interface IPanelTitleCtx extends b.IBobrilCtx {
    data: IPanelTitleData;
}

export const panelTitle1 = b.createDerivedComponent<IPanelTitleData>(h1, {
    id: 'bobrilstrap-panel-title-h1',
    render(_ctx: IPanelTitleCtx, me: b.IBobrilNode) {
        b.style(me, panelStyles.panelTitle);
    }
});

export const panelTitle2 = b.createDerivedComponent<IPanelTitleData>(h2, {
    id: 'bobrilstrap-panel-title-h2',
    render(_ctx: IPanelTitleCtx, me: b.IBobrilNode) {
        b.style(me, panelStyles.panelTitle);
    }
});

export const panelTitle3 = b.createDerivedComponent<IPanelTitleData>(h3, {
    id: 'bobrilstrap-panel-title-h3',
    render(_ctx: IPanelTitleCtx, me: b.IBobrilNode) {
        b.style(me, panelStyles.panelTitle);
    }
});

export const panelTitle4 = b.createDerivedComponent<IPanelTitleData>(h4, {
    id: 'bobrilstrap-panel-title-h4',
    render(_ctx: IPanelTitleCtx, me: b.IBobrilNode) {
        b.style(me, panelStyles.panelTitle);
    }
});

export const panelTitle5 = b.createDerivedComponent<IPanelTitleData>(h5, {
    id: 'bobrilstrap-panel-title-h5',
    render(_ctx: IPanelTitleCtx, me: b.IBobrilNode) {
        b.style(me, panelStyles.panelTitle);
    }
});

export const panelTitle6 = b.createDerivedComponent<IPanelTitleData>(h6, {
    id: 'bobrilstrap-panel-title-h6',
    render(_ctx: IPanelTitleCtx, me: b.IBobrilNode) {
        b.style(me, panelStyles.panelTitle);
    }
});
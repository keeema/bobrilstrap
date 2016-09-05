import * as b from 'bobril';
import { elem, IBaseData } from './element';
import { panelStyles } from './panel';

export interface IPanelTitleData extends IBaseData {
}

interface IPanelTitleCtx extends b.IBobrilCtx {
    data: IPanelTitleData;
}

export const panelTitle = b.createDerivedComponent<IPanelTitleData>(elem, {
    id: 'bobrilstrap-panel-title',
    render(ctx: IPanelTitleCtx, me: b.IBobrilNode) {
        b.style(me, panelStyles.panelTitle);
    }
});

export default panelTitle;
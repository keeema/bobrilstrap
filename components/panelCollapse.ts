import * as b from 'bobril';
import { elem, IBaseData } from './element';
import { panelStyles } from './panel';
import { collapseStyles } from './collapse';

export interface IPanelCollapseData extends IBaseData {

}

interface IPanelCollapseCtx extends b.IBobrilCtx {
    data: IPanelCollapseData;
}

export const panelCollapse = b.createDerivedComponent<IPanelCollapseData>(elem, {
    id: 'bobrilstrap-panel-collapse',
    render(_ctx: IPanelCollapseCtx, me: b.IBobrilNode) {
        b.style(me, panelStyles.panelCollapse, collapseStyles.collapse);
    }
});

export default panelCollapse;
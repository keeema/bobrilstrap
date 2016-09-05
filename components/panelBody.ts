import * as b from 'bobril';
import { elem, IBaseData } from './element';
import { panelStyles } from './panel';

export interface IPanelBodyData extends IBaseData {

}

interface IPanelBodyCtx extends b.IBobrilCtx {
    data: IPanelBodyData;
}

export const panelBody = b.createDerivedComponent<IPanelBodyData>(elem, {
    id: 'bobrilstrap-panel-body',
    render(ctx: IPanelBodyCtx, me: b.IBobrilNode) {
        b.style(me, panelStyles.panelBody);
    }
});

export default panelBody;
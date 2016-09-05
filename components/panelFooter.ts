import * as b from 'bobril';
import { elem, IBaseData } from './element';
import { panelStyles } from './panel';

export interface IPanelFooterData extends IBaseData {

}

interface IPanelFooterCtx extends b.IBobrilCtx {
    data: IPanelFooterData;
}

export const panelFooter = b.createDerivedComponent<IPanelFooterData>(elem, {
    id: 'bobrilstrap-panel-footer',
    render(ctx: IPanelFooterCtx, me: b.IBobrilNode) {
        b.style(me, panelStyles.panelFooter);
    }
});

export default panelFooter;
import * as b from 'bobril';
import { elem, IBaseData } from './element';
import { panelStyles } from './panel';

export interface IPanelHeadingData extends IBaseData {

}

interface IPanelHeadingCtx extends b.IBobrilCtx {
    data: IPanelHeadingData;
}

export const panelHeading = b.createDerivedComponent<IPanelHeadingData>(elem, {
    id: 'bobrilstrap-panel-heading',
    render(ctx: IPanelHeadingCtx, me: b.IBobrilNode) {
        b.style(me, panelStyles.panelHeading);
    }
});

export default panelHeading;
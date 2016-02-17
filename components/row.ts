import * as b from 'bobril';
import elem, { IBaseData } from './element';

export const rowStyle = b.styleDef('row');

export let row = b.createDerivedComponent<IBaseData>(elem, {
    id: 'bobrilstrap-row',
    render(ctx: b.IBobrilCtx, me: b.IBobrilNode) {
        b.style(me, rowStyle);
    }
});

export default row;
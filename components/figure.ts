import * as b from 'bobril';
import elem, { IBaseData } from './element';
import typography from './typography';

export let figure = b.createDerivedComponent<IBaseData>(elem, {
    id: 'bobrilstrap-figure',
    render(ctx: b.IBobrilCtx, me: b.IBobrilNode) {
        me.tag = 'figure';
    }
});

export default figure;
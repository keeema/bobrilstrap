import * as b from 'bobril';
import elem, { IBaseData } from './element';

export let strong = b.createDerivedComponent<IBaseData>(elem, {
    id: 'bobrilstrap-strong',
    render(ctx: b.IBobrilCtx, me: b.IBobrilNode) {
        me.tag = 'strong';
    }
});

export default strong;
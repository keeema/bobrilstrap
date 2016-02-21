import * as b from 'bobril';
import elem, { IBaseData } from './element';

export let ins = b.createDerivedComponent<IBaseData>(elem, {
    id: 'bobrilstrap-ins',
    render(ctx: b.IBobrilCtx, me: b.IBobrilNode) {
        me.tag = 'ins';
    }
});

export default ins;
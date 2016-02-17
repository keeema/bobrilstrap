import * as b from 'bobril';
import elem, { IBaseData } from './element';

export let li = b.createDerivedComponent<IBaseData>(elem, {
    id: 'bobrilstrap-li',
    render(ctx: b.IBobrilCtx, me: b.IBobrilNode) {
        me.tag = 'li';
    }
});

export default li;

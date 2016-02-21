import * as b from 'bobril';
import elem, { IBaseData } from './element';

export let dd = b.createDerivedComponent<IBaseData>(elem, {
    id: 'bobrilstrap-dd',
    render(ctx: b.IBobrilCtx, me: b.IBobrilNode) {
        me.tag = 'dd';
    }
});

export default dd;
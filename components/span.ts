import * as b from 'bobril';
import elem, { IBaseData } from './element';

export let span = b.createDerivedComponent<IBaseData>(elem, {
    id: 'bobrilstrap-span',
    render(ctx: b.IBobrilCtx, me: b.IBobrilNode) {
        me.tag = 'span';
    }
});

export default span;

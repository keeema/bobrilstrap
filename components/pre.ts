import * as b from 'bobril';
import elem, { IBaseData } from './element';

export const pre = b.createDerivedComponent<IBaseData>(elem, {
    id: 'bobrilstrap-pre',
    render(ctx: b.IBobrilCtx, me: b.IBobrilNode) {
        me.tag = 'pre';
    }
});

export default pre;
import * as b from 'bobril';
import { elem, IBaseData } from './element';

export const samp = b.createDerivedComponent<IBaseData>(elem, {
    id: 'bobrilstrap-samp',
    render(ctx: b.IBobrilCtx, me: b.IBobrilNode) {
        me.tag = 'samp';
    }
});

export default samp;
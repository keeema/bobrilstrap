import * as b from 'bobril';
import { elem, IBaseData } from './element';

export const sub = b.createDerivedComponent<IBaseData>(elem, {
    id: 'bobrilstrap-sub',
    render(ctx: b.IBobrilCtx, me: b.IBobrilNode) {
        me.tag = 'sub';
    }
});

export default sub;
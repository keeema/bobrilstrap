import * as b from 'bobril';
import { elem, IBaseData } from './element';

export const del = b.createDerivedComponent<IBaseData>(elem, {
    id: 'bobrilstrap-del',
    render(ctx: b.IBobrilCtx, me: b.IBobrilNode) {
        me.tag = 'del';
    }
});

export default del;
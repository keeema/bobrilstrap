import * as b from 'bobril';
import { elem, IBaseData } from './element';

export const ins = b.createDerivedComponent<IBaseData>(elem, {
    id: 'bobrilstrap-ins',
    render(_ctx: b.IBobrilCtx, me: b.IBobrilNode) {
        me.tag = 'ins';
    }
});

export default ins;
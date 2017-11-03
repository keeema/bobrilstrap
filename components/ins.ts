import * as b from 'bobril';
import { Elem, IBaseData } from './element';

export const Ins = b.createDerivedComponent<IBaseData>(Elem, {
    id: 'bobrilstrap-ins',
    render(_ctx: b.IBobrilCtx, me: b.IBobrilNode) {
        me.tag = 'ins';
    }
});

export default Ins;
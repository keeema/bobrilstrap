import * as b from 'bobril';
import { elem, IBaseData } from './element';

export const sup = b.createDerivedComponent<IBaseData>(elem, {
    id: 'bobrilstrap-sup',
    render(_ctx: b.IBobrilCtx, me: b.IBobrilNode) {
        me.tag = 'sup';
    }
});

export default sup;

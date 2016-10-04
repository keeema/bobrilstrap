import * as b from 'bobril';
import { elem, IBaseData } from './element';

export const address = b.createDerivedComponent<IBaseData>(elem, {
    id: 'bobrilstrap-address',
    render(_ctx: b.IBobrilCtx, me: b.IBobrilNode) {
        me.tag = 'address';
    }
});

export default address;
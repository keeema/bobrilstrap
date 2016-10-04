import * as b from 'bobril';
import { elem, IBaseData } from './element';

export const small = b.createDerivedComponent<IBaseData>(elem, {
    id: 'bobrilstrap-small',
    render(_ctx: b.IBobrilCtx, me: b.IBobrilNode) {
        me.tag = 'small';
    }
});

export default small;
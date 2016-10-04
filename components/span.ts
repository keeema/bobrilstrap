import * as b from 'bobril';
import { elem, IBaseData } from './element';

export const span = b.createDerivedComponent<IBaseData>(elem, {
    id: 'bobrilstrap-span',
    render(_ctx: b.IBobrilCtx, me: b.IBobrilNode) {
        me.tag = 'span';
    }
});

export default span;

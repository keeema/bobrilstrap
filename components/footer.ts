import * as b from 'bobril';
import { elem, IBaseData } from './element';

export const footer = b.createDerivedComponent<IBaseData>(elem, {
    id: 'bobrilstrap-footer',
    render(_ctx: b.IBobrilCtx, me: b.IBobrilNode) {
        me.tag = 'footer';
    }
});

export default footer;
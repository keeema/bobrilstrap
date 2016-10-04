import * as b from 'bobril';
import { elem, IBaseData } from './element';

export const caption = b.createDerivedComponent<IBaseData>(elem, {
    id: 'bobrilstrap-caption',
    render(_ctx: b.IBobrilCtx, me: b.IBobrilNode) {
        me.tag = 'caption';
    }
});

export default caption;
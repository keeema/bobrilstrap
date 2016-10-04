import * as b from 'bobril';
import { elem, IBaseData } from './element';

export const dt = b.createDerivedComponent<IBaseData>(elem, {
    id: 'bobrilstrap-dt',
    render(_ctx: b.IBobrilCtx, me: b.IBobrilNode) {
        me.tag = 'dt';
    }
});

export default dt;
import * as b from 'bobril';
import { elem, IBaseData } from './element';

export const mark = b.createDerivedComponent<IBaseData>(elem, {
    id: 'bobrilstrap-mark',
    render(ctx: b.IBobrilCtx, me: b.IBobrilNode) {
        me.tag = 'mark';
    }
});

export default mark;
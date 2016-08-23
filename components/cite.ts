import * as b from 'bobril';
import { elem, IBaseData } from './element';

export const cite = b.createDerivedComponent<IBaseData>(elem, {
    id: 'bobrilstrap-cite',
    render(ctx: b.IBobrilCtx, me: b.IBobrilNode) {
        me.tag = 'cite';
    }
});

export default cite;
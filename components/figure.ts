import * as b from 'bobril';
import { elem, IBaseData } from './element';

export const figure = b.createDerivedComponent<IBaseData>(elem, {
    id: 'bobrilstrap-figure',
    render(_ctx: b.IBobrilCtx, me: b.IBobrilNode) {
        me.tag = 'figure';
    }
});

export default figure;
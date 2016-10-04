import * as b from 'bobril';
import { elem, IBaseData } from './element';

export const variable = b.createDerivedComponent<IBaseData>(elem, {
    id: 'bobrilstrap-variable',
    render(_ctx: b.IBobrilCtx, me: b.IBobrilNode) {
        me.tag = 'var';
    }
});

export const v = variable;

export default variable;
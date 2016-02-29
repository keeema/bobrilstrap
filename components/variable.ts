import * as b from 'bobril';
import elem, { IBaseData } from './element';

export let variable = b.createDerivedComponent<IBaseData>(elem, {
    id: 'bobrilstrap-variable',
    render(ctx: b.IBobrilCtx, me: b.IBobrilNode) {
        me.tag = 'var';
    }
});

export let v = variable;

export default variable;
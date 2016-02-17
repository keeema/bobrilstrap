import * as b from 'bobril';
import elem, { IBaseData } from './element';

export let small = b.createDerivedComponent<IBaseData>(elem, {
    id: 'bobrilstrap-small',
    render(ctx: b.IBobrilCtx, me: b.IBobrilNode) {
        me.tag = 'small';
    }
});

export default small;
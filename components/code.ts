import * as b from 'bobril';
import elem, { IBaseData } from './element';

export let code = b.createDerivedComponent<IBaseData>(elem, {
    id: 'bobrilstrap-code',
    render(ctx: b.IBobrilCtx, me: b.IBobrilNode) {
        me.tag = 'code';
    }
});

export default code;
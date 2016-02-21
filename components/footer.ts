import * as b from 'bobril';
import elem, { IBaseData } from './element';

export let footer = b.createDerivedComponent<IBaseData>(elem, {
    id: 'bobrilstrap-footer',
    render(ctx: b.IBobrilCtx, me: b.IBobrilNode) {
        me.tag = 'footer';
    }
});

export default footer;
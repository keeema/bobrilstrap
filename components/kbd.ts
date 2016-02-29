import * as b from 'bobril';
import elem, { IBaseData } from './element';

export let kbd = b.createDerivedComponent<IBaseData>(elem, {
    id: 'bobrilstrap-kbd',
    render(ctx: b.IBobrilCtx, me: b.IBobrilNode) {
        me.tag = 'kbd';
    }
});

export default kbd;
import * as b from 'bobril';
import elem, { IBaseData } from './element';

export let caption = b.createDerivedComponent<IBaseData>(elem, {
    id: 'bobrilstrap-caption',
    render(ctx: b.IBobrilCtx, me: b.IBobrilNode) {
        me.tag = 'caption';
    }
});

export default caption;
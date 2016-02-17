import * as b from 'bobril';
import elem, { IBaseData } from './element';

export let ol = b.createDerivedComponent<IBaseData>(elem, {
    id: 'bobrilstrap-ol',
    render(ctx: b.IBobrilCtx, me: b.IBobrilNode) {
        me.tag = 'ol';
    }
});

export default ol;
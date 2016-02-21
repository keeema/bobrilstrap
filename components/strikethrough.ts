import * as b from 'bobril';
import elem, { IBaseData } from './element';

export let strikethrough = b.createDerivedComponent<IBaseData>(elem, {
    id: 'bobrilstrap-strikethrough',
    render(ctx: b.IBobrilCtx, me: b.IBobrilNode) {
        me.tag = 's';
    }
});

export let s = strikethrough;

export default strikethrough;
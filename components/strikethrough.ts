import * as b from 'bobril';
import elem, { IBaseData } from './element';

export const strikethrough = b.createDerivedComponent<IBaseData>(elem, {
    id: 'bobrilstrap-strikethrough',
    render(ctx: b.IBobrilCtx, me: b.IBobrilNode) {
        me.tag = 's';
    }
});

export const s = strikethrough;

export default strikethrough;
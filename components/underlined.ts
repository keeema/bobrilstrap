import * as b from 'bobril';
import { elem, IBaseData } from './element';

export const underlined = b.createDerivedComponent<IBaseData>(elem, {
    id: 'bobrilstrap-underlined',
    render(ctx: b.IBobrilCtx, me: b.IBobrilNode) {
        me.tag = 'u';
    }
});

export const u = underlined;

export default underlined;
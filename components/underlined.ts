import * as b from 'bobril';
import elem, { IBaseData } from './element';

export let underlined = b.createDerivedComponent<IBaseData>(elem, {
    id: 'bobrilstrap-underlined',
    render(ctx: b.IBobrilCtx, me: b.IBobrilNode) {
        me.tag = 'u';
    }
});

export let u = underlined;

export default underlined;
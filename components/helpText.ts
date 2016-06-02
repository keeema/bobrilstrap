import * as b from 'bobril';
import elem, { IBaseData } from './element';

export const helpTextStyle = b.styleDef('help-block');

export const helpText = b.createDerivedComponent<IBaseData>(elem, {
    id: 'bobrilstrap-help-text',
    render(ctx: b.IBobrilCtx, me: b.IBobrilNode) {
        me.tag = 'span';
        b.style(me, helpTextStyle);
    }
});

export default helpText;
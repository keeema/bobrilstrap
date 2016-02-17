import * as b from 'bobril';
import elem, { IBaseData } from './element';

export interface ILabeldData extends IBaseData {
    for?: string;
    srOnly?: boolean;
    controlLabel?: boolean;
}

interface ICtx extends b.IBobrilCtx {
    data: ILabeldData;
}

export const labelStyles = {
    srOnly: b.styleDef('sr-only'),
    controlLabel: b.styleDef('controlLabel')
};

export let label = b.createDerivedComponent<ILabeldData>(elem, {
    id: 'bobrilstrap-label',
    render(ctx: ICtx, me: b.IBobrilNode) {
        me.tag = 'label';

        b.style(me, !!ctx.data.srOnly && labelStyles.srOnly);
        b.style(me, !!ctx.data.controlLabel && labelStyles.controlLabel);

        if (ctx.data.for)
            me.attrs['for'] = ctx.data.for;
    }
});

export default label;
import * as b from 'bobril';
import elem, { IBaseData } from 'bobrilstrap-element';

export interface IData extends IBaseData {
    for?: string;
    srOnly?: boolean;
    controlLabel?: boolean;
}

interface ICtx extends b.IBobrilCtx {
    data: IData;
}

export let labelStyles = {
    srOnly: b.styleDef('sr-only'),
    controlLabel: b.styleDef('controlLabel')
};

export default b.createDerivedComponent<IData>(elem, {
    id: 'bobrilstrap-label',
    render(ctx: ICtx, me: b.IBobrilNode) {
        me.tag = 'label';

        b.style(me, !!ctx.data.srOnly && labelStyles.srOnly);
        b.style(me, !!ctx.data.controlLabel && labelStyles.controlLabel);

        if (ctx.data.for)
            me.attrs['for'] = ctx.data.for;
    }
});

import * as b from 'bobril';
import elem, { IBaseData } from 'bobrilstrap-element';

export interface IData extends IBaseData {
    for?: string;
    srOnly?: boolean;
}

interface ICtx extends b.IBobrilCtx {
    data: IData;
}

export let labelStyles = {
    srOnly: b.styleDef('sr-only')
};

export default b.createDerivedComponent<IData>(elem, {
    id: 'bobrilstrap-label',
    render(ctx: ICtx, me: b.IBobrilNode) {
        me.tag = 'label';

        b.style(me, !!ctx.data.srOnly && labelStyles.srOnly);

        if (ctx.data.for)
            me.attrs['for'] = ctx.data.for;
    }
});

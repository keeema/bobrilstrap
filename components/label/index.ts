import * as b from 'bobril';
import elem, { IBaseData } from 'bobrilstrap-element';

export interface IData extends IBaseData {
    for?: string;
}

interface ICtx extends b.IBobrilCtx {
    data: IData;
}

export default b.createDerivedComponent<IData>(elem, {
    id: 'bobrilstrap-label',
    render(ctx: ICtx, me: b.IBobrilNode) {
        me.tag = 'label';

        if (ctx.data.for)
            me.attrs['for'] = ctx.data.for;
    }
});

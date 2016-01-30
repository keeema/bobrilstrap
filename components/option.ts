import * as b from 'bobril';
import elem, { IBaseData } from './element';

export interface IOptionsData extends IBaseData {
    value: string;
    title?: string;
    disabled?: boolean;
}

interface ICtx extends b.IBobrilCtx {
    data: IOptionsData;
}

export default b.createDerivedComponent<IOptionsData>(elem, {
    id: 'bobrilstrap-option',
    render(ctx: ICtx, me: b.IBobrilNode) {
        me.tag = 'option';
        me.attrs.value = ctx.data.value;
        me.children = ctx.data.title || ctx.data.value;

        if (ctx.data.disabled)
            me.attrs['disabled'] = 'disabled';
    } 
});


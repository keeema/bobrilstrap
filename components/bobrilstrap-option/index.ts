import * as b from 'bobril';
import elem, { IBaseData } from 'bobrilstrap-element';

export interface IData extends IBaseData {
    value: string;
    title?: string;
    disabled?: boolean;
}

interface ICtx extends b.IBobrilCtx {
    data: IData;
}

export let create = b.createDerivedComponent<IData>(elem, {
    id: 'bobrilstrap-option',
    render(ctx: ICtx, me: b.IBobrilNode) {
        me.tag = 'option';
        me.attrs.value = ctx.data.value;
        me.children = ctx.data.title || ctx.data.value;

        if (ctx.data.disabled)
            me.attrs['disabled'] = 'disabled';
    } 
});

export default create;



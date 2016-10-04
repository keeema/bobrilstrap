import * as b from 'bobril';
import { elem, IBaseData } from './element';

export interface IOptionsData extends IBaseData {
    value: string;
    label?: string;
    disabled?: boolean;
}

interface ICtx extends b.IBobrilCtx {
    data: IOptionsData;
}

export const option = b.createDerivedComponent<IOptionsData>(elem, {
    id: 'bobrilstrap-option',
    render(ctx: ICtx, me: b.IBobrilNode) {
        me.tag = 'option';
        me.attrs!.value = ctx.data.value;
        me.children = ctx.data.label || ctx.data.value;

        if (ctx.data.disabled)
            me.attrs!['disabled'] = 'disabled';
    }
});

export default option;
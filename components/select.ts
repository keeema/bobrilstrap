import * as b from 'bobril';
import elem, { IBaseData } from './element';
import option, { IOptionsData as IOptionData } from './option';

export interface ISelectData extends IBaseData {
    value: string | string[];
    options: IOptionData[];
    multiple?: boolean;
    rows?: number;
    size?: SelectSize;
    disabled?: boolean;
    onChange?: (values: string | string[]) => void;
}

interface ICtx extends b.IBobrilCtx {
    data: ISelectData;
}

export const selectStyles = {
    formControl: b.styleDef('form-control')
};

export class SelectSize {
    static lg: string = 'lg';
    static sm: string = 'sm';
}

export const selectSizeStyles = {
    [SelectSize.lg]: b.styleDef('input-lg'),
    [SelectSize.sm]: b.styleDef('input-sm')
};

export let select = b.createDerivedComponent<ISelectData>(elem, {
    id: 'bobrilstrap-option',
    render(ctx: ICtx, me: b.IBobrilNode) {
        me.tag = 'select';
        me.attrs.value = ctx.data.value;
        b.style(me, selectStyles.formControl);
        b.style(me, !!ctx.data.size && selectSizeStyles[ctx.data.size.toString()]);
        me.children = ctx.data.options.map(optionData => option(optionData));

        if (ctx.data.rows)
            me.attrs['size'] = ctx.data.rows.toString();

        if (ctx.data.disabled)
            me.attrs['disabled'] = 'disabled';

        if (ctx.data.multiple)
            me.attrs['multiple'] = 'multiple';
    }
});

export default select;
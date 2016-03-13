import * as b from 'bobril';
import elem, { IBaseData } from './element';
import option, { IOptionsData as IOptionData } from './option';

export interface ISelectData extends IBaseData {
    value?: string | string[];
    options: IOptionData[];
    multiple?: boolean;
    rows?: number;
    size?: SelectSize;
    disabled?: boolean;
    onChange?: (values: string | string[]) => void;
}

interface ICtx extends b.IBobrilCtx {
    data: ISelectData;
    value: string | string[];
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
    id: 'bobrilstrap-select',
    render(ctx: ICtx, me: b.IBobrilNode) {
        me.tag = 'select';

        if (ctx.data.value !== undefined) {
            ctx.value = ctx.data.value;
        } else if (ctx.value === undefined && ctx.data.multiple) {
            ctx.value = [];
        }

        me.attrs.value = ctx.value;
        b.style(me, selectStyles.formControl);
        b.style(me, !!ctx.data.size && selectSizeStyles[ctx.data.size.toString()]);
        me.children = ctx.data.options.map(optionData => option(optionData));

        if (ctx.data.rows)
            me.attrs['size'] = ctx.data.rows.toString();

        if (ctx.data.disabled)
            me.attrs['disabled'] = 'disabled';

        if (ctx.data.multiple)
            me.attrs['multiple'] = 'multiple';
    },
    onChange(ctx: ICtx, value: string | string[]): void {
        ctx.value = value;
        if (ctx.data.onChange)
            !!ctx.data.onChange(value);
    }
});

export default select;
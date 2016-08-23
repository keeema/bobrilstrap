import * as b from 'bobril';
import { elem, IBaseData } from './element';
import { option, IOptionsData as IOptionData } from './option';
import { createDictionary } from './bobrilHelpers';

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
    formControl: b.styleDef('form-control'),
    lg: b.styleDef('input-lg'),
    sm: b.styleDef('input-sm')
};

export enum SelectSize {
    Lg,
    Default,
    Sm
}

export const selectSizeStyles = createDictionary<SelectSize, b.IBobrilStyle>();
selectSizeStyles(SelectSize.Lg, selectStyles.lg);
selectSizeStyles(SelectSize.Default, false);
selectSizeStyles(SelectSize.Sm, selectStyles.sm);

export const select = b.createOverridingComponent<ISelectData>(elem, {
    id: 'bobrilstrap-select',
    render(ctx: ICtx, me: b.IBobrilNode) {
        ctx.me.component.super.render(ctx, me);

        me.tag = 'select';

        if (ctx.data.value !== undefined) {
            ctx.value = ctx.data.value;
        } else if (ctx.value === undefined && ctx.data.multiple) {
            ctx.value = [];
        }

        me.attrs.value = ctx.value;
        b.style(me, selectStyles.formControl);
        b.style(me, selectSizeStyles(ctx.data.size));
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
        ctx.me.component.super.onChange(ctx, value);
    }
});

export default select;
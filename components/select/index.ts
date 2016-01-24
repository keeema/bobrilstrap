import * as b from 'bobril';
import elem, { IBaseData } from 'bobrilstrap-element';
import option, { IData as IOptionData } from 'bobrilstrap-option';

export interface IData extends IBaseData {
    value: string | string[];
    options: IOptionData[];
    multiple?: boolean;
    rows?: number;
    size?: Size;
    disabled?: boolean;
    onChange?: (values: string | string[]) => void;
}

interface ICtx extends b.IBobrilCtx {
    data: IData;
}

export let selectStyles = {
    formControl: b.styleDef('form-control')
};

export class Size {
    static lg: string = 'lg';
    static sm: string = 'sm';
}

export let selectSizeStyles = {
    [Size.lg]: b.styleDef('input-lg'),
    [Size.sm]: b.styleDef('input-sm')
};

export let create = b.createDerivedComponent<IData>(elem, {
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

export default create;
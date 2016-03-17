import * as b from 'bobril';
import elem, { IBaseData } from './element';

export class InputTextType {
    static color: string = 'color';
    static date: string = 'date';
    static datetime: string = 'datetime';
    static datetimeLocal: string = 'datetime-local';
    static email: string = 'email';
    static month: string = 'month';
    static number: string = 'number';
    static password: string = 'password';
    static range: string = 'range';
    static search: string = 'search';
    static tel: string = 'tel';
    static text: string = 'text';
    static time: string = 'time';
    static url: string = 'url';
    static week: string = 'week';
}

export interface IInputTextData extends IBaseData {
    value?: string;
    placeholder?: string;
    size?: InputTextSize;
    type?: InputTextType;
    disabled?: boolean;
    readonly?: boolean;
    onChange?: (value: string) => void;
}

interface ICtx extends b.IBobrilCtx {
    data: IInputTextData;
    value: string;
}

export const inputTextStyles = {
    formControl: b.styleDef('form-control'),
    inputLg: b.styleDef('input-lg'),
    inputSm: b.styleDef('input-sm')
};

export class InputTextSize {
    static lg: string = 'lg';
    static default: string = 'default';
    static sm: string = 'sm';
}

export const inputTextSizeStyles = {
    [InputTextSize.lg]: b.styleDef('input-lg'),
    [InputTextSize.default]: false,
    [InputTextSize.sm]: b.styleDef('input-sm')
};

export let inputText = b.createOverridingComponent<IInputTextData>(elem, {
    id: 'bobrilstrap-input-text',
    render(ctx: ICtx, me: b.IBobrilNode) {
        ctx.me.component.super.render(ctx, me);
        if (ctx.data.value !== undefined) {
            ctx.value = ctx.data.value;
        }

        me.tag = 'input';
        me.attrs['type'] = ctx.data.type || 'text';
        me.attrs.value = ctx.value;
        b.style(me, inputTextStyles.formControl);
        b.style(me, !!ctx.data.size && inputTextSizeStyles[ctx.data.size.toString()]);

        if (ctx.data.placeholder)
            me.attrs['placeholder'] = ctx.data.placeholder;

        if (ctx.data.disabled)
            me.attrs['disabled'] = 'disabled';

        if (ctx.data.readonly)
            me.attrs['readonly'] = 'readonly';
    },
    onChange(ctx: ICtx, value: string): void {
        ctx.value = value;
        ctx.me.component.super.onChange(ctx, value);
    }
});

export default inputText;
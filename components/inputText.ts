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
    value: string;
    placeholder?: string;
    size?: InputTextSize;
    type?: InputTextType;
    disabled?: boolean;
    readonly?: boolean;
    onChange?: (value: string) => void;
}

interface ICtx extends b.IBobrilCtx {
    data: IInputTextData;
}

export const inputTextStyles = {
    formControl: b.styleDef('form-control'),
    inputLg: b.styleDef('input-lg'),
    inputSm: b.styleDef('input-sm')
};

export class InputTextSize {
    static lg: string = 'lg';
    static sm: string = 'sm';
}

export const inputTextSizeStyles = {
    [InputTextSize.lg]: b.styleDef('input-lg'),
    [InputTextSize.sm]: b.styleDef('input-sm')
};

export let inputText = b.createDerivedComponent<IInputTextData>(elem, {
    id: 'bobrilstrap-input-text',
    render(ctx: ICtx, me: b.IBobrilNode) {
        me.tag = 'input';
        me.attrs['type'] = ctx.data.type || 'text';
        me.attrs.value = ctx.data.value;
        b.style(me, inputTextStyles.formControl);
        b.style(me, !!ctx.data.size && inputTextSizeStyles[ctx.data.size.toString()]);

        if (ctx.data.placeholder)
            me.attrs['placeholder'] = ctx.data.placeholder;

        if (ctx.data.disabled)
            me.attrs['disabled'] = 'disabled';

        if (ctx.data.readonly)
            me.attrs['readonly'] = 'readonly';
    }
});

export default inputText;
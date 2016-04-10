import * as b from 'bobril';
import elem, { IBaseData } from './element';
import { createDictionary, toLowerWithDashes } from './bobrilHelpers';

export enum InputTextType {
    Color,
    Date,
    Datetime,
    DatetimeLocal,
    Email,
    Month,
    Number,
    Password,
    Range,
    Search,
    Tel,
    Text,
    Time,
    Url,
    Week
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
    lg: b.styleDef('input-lg'),
    sm: b.styleDef('input-sm')
};

export enum InputTextSize {
    Lg,
    Default,
    Sm
}

export const inputTextSizeStyles = createDictionary<InputTextSize, b.IBobrilStyle>();
inputTextSizeStyles(InputTextSize.Lg, inputTextStyles.lg);
inputTextSizeStyles(InputTextSize.Default, false);
inputTextSizeStyles(InputTextSize.Sm, inputTextStyles.sm);

export let inputText = b.createOverridingComponent<IInputTextData>(elem, {
    id: 'bobrilstrap-input-text',
    render(ctx: ICtx, me: b.IBobrilNode) {
        ctx.me.component.super.render(ctx, me);
        if (ctx.data.value !== undefined) {
            ctx.value = ctx.data.value;
        }

        me.tag = 'input';
        me.attrs['type'] = toLowerWithDashes(ctx.data.type !== undefined
            ? InputTextType[ctx.data.type]
            : InputTextType[InputTextType.Text]);
        me.attrs.value = ctx.value;
        b.style(me, inputTextStyles.formControl);
        b.style(me, inputTextSizeStyles(ctx.data.size));

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
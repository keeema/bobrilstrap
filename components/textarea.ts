import * as b from 'bobril';
import elem, { IBaseData } from './element';

export interface ITextareaData extends IBaseData {
    value?: string;
    placeholder?: string;
    rows?: number;
    fixedSize?: boolean;
    disabled?: boolean;
    readonly?: boolean;
    onChange?: (value: string) => void;
}

interface ICtx extends b.IBobrilCtx {
    data: ITextareaData;
    value: string;
}

export const textareaStyles = {
    formControl: b.styleDef('form-control'),
    fixedSize: b.styleDef({ resize: 'none' })
};

export let textarea = b.createDerivedComponent<ITextareaData>(elem, {
    id: 'bobrilstrap-textare',
    render(ctx: ICtx, me: b.IBobrilNode) {
        me.tag = 'textarea';

        if (ctx.data.value !== undefined) {
            ctx.value = ctx.data.value;
        }

        me.attrs.value = ctx.value;
        b.style(me, textareaStyles.formControl);

        b.style(me, !!ctx.data.fixedSize && textareaStyles.fixedSize);

        if (ctx.data.rows)
            me.attrs['rows'] = ctx.data.rows.toString();

        if (ctx.data.placeholder)
            me.attrs['placeholder'] = ctx.data.placeholder.toString();

        if (ctx.data.disabled)
            me.attrs['disabled'] = 'disabled';

        if (ctx.data.readonly)
            me.attrs['readonly'] = 'readonly';
    },
    onChange(ctx: ICtx, value: string): void {
        ctx.value = value;
        if (ctx.data.onChange)
            !!ctx.data.onChange(value);
    }
});

export default textarea;
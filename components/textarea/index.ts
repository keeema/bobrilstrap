import * as b from 'bobril';
import elem, { IBaseData } from 'bobrilstrap-element';

export interface IData extends IBaseData {
    value: string;
    placeholder?: string;
    rows?: number;
    fixedSize?: boolean;
    disabled?: boolean;
    readonly?: boolean;
    onChange?: (value: string) => void;
}

interface ICtx extends b.IBobrilCtx {
    data: IData;
}

export let textareaStyles = {
    formControl: b.styleDef('form-control'),
    fixedSize: b.styleDef({ resize: 'none' })
};

export let create = b.createDerivedComponent<IData>(elem, {
    id: 'bobrilstrap-textare',
    render(ctx: ICtx, me: b.IBobrilNode) {
        me.tag = 'textarea';
        me.attrs.value = ctx.data.value;
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
    }
});

export default create;
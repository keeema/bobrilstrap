import * as b from 'bobril';
import elem, { IBaseData } from 'bobrilstrap-element';

export class Type {
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

export interface IData extends IBaseData {
    value: string;
    placeholder?: string;
    type?: Type;
    disabled?: boolean;
    readonly?: boolean;
    onChange?: (value: string) => void;
}

interface ICtx extends b.IBobrilCtx {
    data: IData;
}

export let inputTextStyles = {
    formControl: b.styleDef('form-control')
};

export let create = b.createDerivedComponent<IData>(elem, {
    id: 'bobrilstrap-input-text',
    render(ctx: ICtx, me: b.IBobrilNode) {
        me.tag = 'input';
        me.attrs['type'] = ctx.data.type || 'text';
        me.attrs.value = ctx.data.value;
        b.style(me, inputTextStyles.formControl);
        
        if (ctx.data.placeholder)
            me.attrs['placeholder'] = ctx.data.placeholder;

        if (ctx.data.disabled)
            me.attrs['disabled'] = 'disabled';

        if (ctx.data.readonly)
            me.attrs['readonly'] = 'readonly';
    }
});

export default create;
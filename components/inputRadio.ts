import * as b from 'bobril';
import elem, { IBaseData } from './element';

export interface IInputRadioData extends IBaseData {
    value: string;
    checkedValue?: string;
    checked?: boolean;
    name: string;
    disabled?: boolean;
    readonly?: boolean;
    onChecked?: (value: string) => void;
    onUnChecked?: (value: string) => void;
    onChange?: (checked: boolean) => void;
}

interface ICtx extends b.IBobrilCtx {
    data: IInputRadioData;
}

export let inputRadio = b.createDerivedComponent<IInputRadioData>(elem, {
    id: 'bobrilstrap-input-radio',
    render(ctx: ICtx, me: b.IBobrilNode) {
        me.tag = 'input';
        me.attrs['type'] = 'radio';
        me.attrs.value = (!!ctx.data.value && ctx.data.value === ctx.data.checkedValue) || !!ctx.data.checked;

        me.attrs['name'] = ctx.data.name;

        if (ctx.data.disabled)
            me.attrs['disabled'] = 'disabled';

        if (ctx.data.readonly)
            me.attrs['readonly'] = 'readonly';
    },
    onChange(ctx: ICtx, value: boolean): void {
        if (ctx.data.onChange)
            ctx.data.onChange(value);

        if (value && ctx.data.onChecked)
            ctx.data.onChecked(ctx.data.value);

        if (!value && ctx.data.onUnChecked)
            ctx.data.onUnChecked(ctx.data.value);
    }
});

export default inputRadio;
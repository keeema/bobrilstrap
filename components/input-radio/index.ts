import * as b from 'bobril';
import elem, { IBaseData } from 'bobrilstrap-element';

export interface IData extends IBaseData {
    value: any;
    checkedValue?: any;
    checked?: boolean;
    name: string;
    disabled?: boolean;
    readonly?: boolean;
    onChecked?: (value: any) => void;
    onUnChecked?: (value: any) => void;
    onChange?: (checked: boolean) => void;
}

interface ICtx extends b.IBobrilCtx {
    data: IData;
}

export let create = b.createDerivedComponent<IData>(elem, {
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
    onChange(ctx: ICtx, value: any): void {
        if (ctx.data.onChange)
            ctx.data.onChange(value);

        if (value && ctx.data.onChecked)
            ctx.data.onChecked(ctx.data.value);

        if (!value && ctx.data.onUnChecked)
            ctx.data.onUnChecked(ctx.data.value);
    }
});

export default create;



import * as b from 'bobril';
import { elem, IBaseData } from './element';

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
    checked: boolean;
}

export const inputRadio = b.createOverridingComponent<IInputRadioData>(elem, {
    id: 'bobrilstrap-input-radio',
    render(ctx: ICtx, me: b.IBobrilNode) {
        ctx.me.component!.super!.render!(ctx, me);

        if (ctx.data.value !== undefined && (ctx.data.checked !== undefined || ctx.data.checkedValue !== undefined)) {
            ctx.checked = (!!ctx.data.value && ctx.data.value === ctx.data.checkedValue) || !!ctx.data.checked;
        } else if (ctx.checked === undefined) {
            ctx.checked = false;
        }

        me.tag = 'input';
        me.attrs!['type'] = 'radio';
        me.attrs!.value = ctx.checked;

        me.attrs!['name'] = ctx.data.name;

        if (ctx.data.disabled)
            me.attrs!['disabled'] = 'disabled';

        if (ctx.data.readonly)
            me.attrs!['readonly'] = 'readonly';
    },
    onChange(ctx: ICtx, value: boolean): void {
        ctx.checked = value;
        ctx.me.component!.super!.onChange!(ctx, value);

        if (value && ctx.data.onChecked)
            ctx.data.onChecked(ctx.data.value);

        if (!value && ctx.data.onUnChecked)
            ctx.data.onUnChecked(ctx.data.value);
    }
});

export default inputRadio;
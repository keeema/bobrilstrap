import * as b from 'bobril';
import elem, { IBaseData } from './element';

export interface IInputCheckBoxData extends IBaseData {
    checked?: boolean;
    disabled?: boolean;
    readonly?: boolean;
    onChange?: (value: boolean) => void;
}

interface ICtx extends b.IBobrilCtx {
    data: IInputCheckBoxData;
    checked: boolean;
}

export const inputCheckbox = b.createOverridingComponent<IInputCheckBoxData>(elem, {
    id: 'bobrilstrap-input-checkbox',
    render(ctx: ICtx, me: b.IBobrilNode) {
        ctx.me.component.super.render(ctx, me);
        
        if (ctx.data.checked !== undefined) {
            ctx.checked = !!ctx.data.checked;
        } else if (ctx.checked === undefined) {
            ctx.checked = false;
        }

        me.tag = 'input';
        me.attrs['type'] = 'checkbox';
        me.attrs.value = ctx.checked;

        if (ctx.data.disabled)
            me.attrs['disabled'] = 'disabled';

        if (ctx.data.readonly)
            me.attrs['readonly'] = 'readonly';
    },
    onChange(ctx: ICtx, value: boolean): void {
        ctx.checked = value;
        ctx.me.component.super.onChange(ctx, value);
    }
});

export default inputCheckbox;
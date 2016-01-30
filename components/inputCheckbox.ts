import * as b from 'bobril';
import elem, { IBaseData } from './element';

export interface IInputCheckBoxData extends IBaseData {
    checked: boolean;
    disabled?: boolean;
    readonly?: boolean;
    onChange?: (value: boolean) => void;
}

interface ICtx extends b.IBobrilCtx {
    data: IInputCheckBoxData;
}

export default b.createDerivedComponent<IInputCheckBoxData>(elem, {
    id: 'bobrilstrap-input-checkbox',
    render(ctx: ICtx, me: b.IBobrilNode) {
        me.tag = 'input';
        me.attrs['type'] = 'checkbox';
        me.attrs.value = !!ctx.data.checked;

        if (ctx.data.disabled)
            me.attrs['disabled'] = 'disabled';

        if (ctx.data.readonly)
            me.attrs['readonly'] = 'readonly';
    }
});
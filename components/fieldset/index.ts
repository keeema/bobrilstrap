import * as b from 'bobril';
import elem, { IBaseData } from 'bobrilstrap-element';

export interface IData extends IBaseData {
    disabled?: boolean;
}

interface ICtx extends b.IBobrilCtx {
    data: IData;
}

export let create = b.createDerivedComponent<IData>(elem, {
    id: 'bobrilstrap-fieldset',
    render(ctx: ICtx, me: b.IBobrilNode) {
        me.tag = 'fieldset';
        if (ctx.data.disabled)
            me.attrs['disabled'] = 'disabled';
    }
});

export default create;

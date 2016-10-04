import * as b from 'bobril';
import { elem, IBaseData, IElementBobrilNode } from './element';

export interface IFieldSetData extends IBaseData {
    disabled?: boolean;
}

interface ICtx extends b.IBobrilCtx {
    data: IFieldSetData;
}

export const fieldset = b.createDerivedComponent<IFieldSetData>(elem, {
    id: 'bobrilstrap-fieldset',
    render(ctx: ICtx, me: IElementBobrilNode) {
        me.tag = 'fieldset';
        if (ctx.data.disabled)
            me.attrs['disabled'] = 'disabled';
    }
});

export default fieldset;
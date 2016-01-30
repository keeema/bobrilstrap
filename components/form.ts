import * as b from 'bobril';
import elem, { IBaseData } from './element';

export interface IFormData extends IBaseData {
    horizontal?: boolean;
    inline?: boolean;
}

interface ICtx extends b.IBobrilCtx {
    data: IFormData;
}

export let formStyles = {
    formHorizontal: b.styleDef('form-horizontal'),
    formInline: b.styleDef('form-inline')
};

export default b.createDerivedComponent<IFormData>(elem, {
    id: 'bobrilstrap-form',
    render(ctx: ICtx, me: b.IBobrilNode) {
        me.tag = 'form';
        b.style(me, !!ctx.data.horizontal && formStyles.formHorizontal);
        b.style(me, !!ctx.data.inline && formStyles.formInline);
    }
});
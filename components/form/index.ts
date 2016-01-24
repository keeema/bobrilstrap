import * as b from 'bobril';
import elem, { IBaseData } from 'bobrilstrap-element';

export interface IData extends IBaseData {
    horizontal?: boolean;
    inline?: boolean;
}

interface ICtx extends b.IBobrilCtx {
    data: IData;
}

export let formStyles = {
    formHorizontal: b.styleDef('form-horizontal'),
    formInline: b.styleDef('form-inline')
};

export let create = b.createDerivedComponent<IData>(elem, {
    id: 'bobrilstrap-form',
    render(ctx: ICtx, me: b.IBobrilNode) {
        me.tag = 'form';
        b.style(me, !!ctx.data.horizontal && formStyles.formHorizontal);
        b.style(me, !!ctx.data.inline && formStyles.formInline);
    }
});

export default create;
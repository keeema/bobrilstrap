import * as b from 'bobril';
import elem, { IBaseData } from './element';

export const buttonGroupStyles = {
    btnGroup: b.styleDef('btn-group')
};

export let buttonGroup = b.createDerivedComponent<IBaseData>(elem, {
    id: 'bobrilstrap-button-group',
    render(ctx: b.IBobrilCtx, me: b.IBobrilNode) {
        b.style(me, buttonGroupStyles.btnGroup);
        me.attrs['role'] = 'group';
    }
});

export default buttonGroup;
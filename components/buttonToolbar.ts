import * as b from 'bobril';
import { elem, IBaseData } from './element';

export const buttonToolbarStyles = {
    btnGroup: b.styleDef('btn-toolbar')
};

export const buttonToolbar = b.createDerivedComponent<IBaseData>(elem, {
    id: 'bobrilstrap-button-toolbar',
    render(ctx: b.IBobrilCtx, me: b.IBobrilNode) {
        b.style(me, buttonToolbarStyles.btnGroup);
        me.attrs['role'] = 'toolbar';
    }
});

export default buttonToolbar;
import * as b from 'bobril';
import { li, ILiData } from './li';
import { navStyles } from './nav';
import { IElementBobrilNode } from './element';

export interface ITabData extends ILiData {
    disabled?: boolean;
    dropdown?: boolean;
}

interface ITabCtx extends b.IBobrilCtx {
    data: ITabData;
}

export const tab = b.createDerivedComponent<ITabData>(li, {
    id: 'bobrilstrap-tab',
    render(ctx: ITabCtx, me: IElementBobrilNode) {
        b.style(me, !!ctx.data.disabled && navStyles.disabled);
        b.style(me, !!ctx.data.dropdown && navStyles.dropdown);
        me.attrs['role'] = 'presentation';
    }
});

export default tab;
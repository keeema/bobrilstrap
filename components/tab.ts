import * as b from 'bobril';
import { li, ILiData } from './li';
import { navStyles } from './nav';

export interface ITabData extends ILiData {
    active?: boolean;
    disabled?: boolean;
    dropdown?: boolean;
}

interface ITabCtx extends b.IBobrilCtx {
    data: ITabData;
}

export const tab = b.createDerivedComponent<ITabData>(li, {
    id: 'bobrilstrap-tab',
    render(ctx: ITabCtx, me: b.IBobrilNode) {
        b.style(me, ctx.data.active && navStyles.active);
        b.style(me, ctx.data.disabled && navStyles.disabled);
        b.style(me, ctx.data.dropdown && navStyles.dropdown);
        me.attrs['role'] = 'presentation';
    }
});

export default tab;
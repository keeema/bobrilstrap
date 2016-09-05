import * as b from 'bobril';
import { elem, IBaseData } from './element';
import { navStyles, NavbarAlignment } from './nav';

export interface INavbarHeaderData extends IBaseData {
    alignment?: NavbarAlignment;
}

interface INavbarHeaderCtx extends b.IBobrilCtx {
    data: INavbarHeaderData;
}

export const navbarHeader = b.createDerivedComponent<INavbarHeaderData>(elem, {
    id: 'bobrilstrap-navbar-header',
    render(ctx: INavbarHeaderCtx, me: b.IBobrilNode) {
        b.style(me, navStyles.navbarHeader);
        b.style(me, ctx.data.alignment === NavbarAlignment.Right && navStyles.navbarRight);
        b.style(me, ctx.data.alignment === NavbarAlignment.Left && navStyles.navbarLeft);
    }
});

export default navbarHeader;
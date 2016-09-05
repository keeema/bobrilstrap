import * as b from 'bobril';
import { ul, IUlData } from './ul';
import { navStyles, NavbarAlignment } from './nav';

export interface INavbarNavDadta extends IUlData {
    justified?: boolean;
    alignment?: NavbarAlignment;
}

interface INavbarNavCtx extends b.IBobrilCtx {
    data: INavbarNavDadta;
}

export const navbarNav = b.createDerivedComponent<INavbarNavDadta>(ul, {
    id: 'bobrilstrap-navbar-nav',
    render(ctx: INavbarNavCtx, me: b.IBobrilNode) {
        b.style(me, navStyles.nav);
        b.style(me, navStyles.navbarNav);
        b.style(me, ctx.data.justified && navStyles.navJustified);
        b.style(me, ctx.data.alignment === NavbarAlignment.Right && navStyles.navbarRight);
        b.style(me, ctx.data.alignment === NavbarAlignment.Left && navStyles.navbarLeft);
    }
});

export default navbarNav;
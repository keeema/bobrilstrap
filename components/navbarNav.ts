import * as b from "bobril";
import { Ul, IUlData } from "./ul";
import { navStyles, NavbarAlignment } from "./nav";

export interface INavbarNavData extends IUlData {
    justified?: boolean;
    alignment?: NavbarAlignment;
}

interface INavbarNavCtx extends b.IBobrilCtx {
    data: INavbarNavData;
}

export const NavbarNav = b.createDerivedComponent<INavbarNavData, IUlData>(Ul, {
    id: "bobrilstrap-navbar-nav",
    render(ctx: INavbarNavCtx, me: b.IBobrilNode) {
        b.style(me, navStyles.nav);
        b.style(me, navStyles.navbarNav);
        b.style(me, !!ctx.data.justified && navStyles.navJustified);
        b.style(me, ctx.data.alignment === NavbarAlignment.Right && navStyles.navbarRight);
        b.style(me, ctx.data.alignment === NavbarAlignment.Left && navStyles.navbarLeft);
    }
});

export default NavbarNav;

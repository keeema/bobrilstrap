import * as b from "bobril";
import { Elem, IBaseData } from "./element";
import { navStyles, NavbarAlignment } from "./nav";

export interface INavbarHeaderData extends IBaseData {
  alignment?: NavbarAlignment;
}

interface INavbarHeaderCtx extends b.IBobrilCtx {
  data: INavbarHeaderData;
}

export const NavbarHeader = b.createDerivedComponent<INavbarHeaderData>(Elem, {
  id: "bobrilstrap-navbar-header",
  render(ctx: INavbarHeaderCtx, me: b.IBobrilNode) {
    b.style(me, navStyles.navbarHeader);
    b.style(
      me,
      ctx.data.alignment === NavbarAlignment.Right && navStyles.navbarRight
    );
    b.style(
      me,
      ctx.data.alignment === NavbarAlignment.Left && navStyles.navbarLeft
    );
  }
});

export default NavbarHeader;

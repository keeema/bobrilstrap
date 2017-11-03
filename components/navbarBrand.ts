import * as b from "bobril";
import { A, IAnchorData } from "./a";
import { navStyles, NavbarAlignment } from "./nav";

export interface INavbarBrandData extends IAnchorData {
  justified?: boolean;
  alignment?: NavbarAlignment;
}

interface INavbarBrandCtx extends b.IBobrilCtx {
  data: INavbarBrandData;
}

export const NavbarBrand = b.createDerivedComponent<INavbarBrandData>(A, {
  id: "bobrilstrap-navbar-brand",
  render(ctx: INavbarBrandCtx, me: b.IBobrilNode) {
    b.style(me, navStyles.navbarBrand);
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

export default NavbarBrand;

import * as b from "bobril";
import { Elem, IBaseData } from "./element";
import { navStyles } from "./nav";
import { collapseStyles } from "./collapse";

export interface INavbarCollapseData extends IBaseData {}

interface INavbarCollapseCtx extends b.IBobrilCtx {
  data: INavbarCollapseData;
}

export const NavbarCollapse = b.createDerivedComponent<
  INavbarCollapseData
>(Elem, {
  id: "bobrilstrap-navbar-collapse",
  render(_ctx: INavbarCollapseCtx, me: b.IBobrilNode) {
    b.style(me, navStyles.navbarCollapse, collapseStyles.collapse);
  }
});

export default NavbarCollapse;

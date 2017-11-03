import * as b from "bobril";
import { Elem, IBaseData } from "./element";

export const navStyles = {
  navbar: b.styleDef("navbar"),
  navbarDefault: b.styleDef("navbar-default"),
  navbarCollapse: b.styleDef("navbar-collapse"),
  navbarHeader: b.styleDef("navbar-header"),
  navbarToggle: b.styleDef("navbar-toggle"),
  navbarBrand: b.styleDef("navbar-brand"),
  navbarNav: b.styleDef("navbar-nav"),
  nav: b.styleDef("nav"),
  navbarForm: b.styleDef("navbar-form"),
  navbarLeft: b.styleDef("navbar-left"),
  navbarRight: b.styleDef("navbar-right"),
  navbarBtn: b.styleDef("navbar-btn"),
  navbarText: b.styleDef("navbar-text"),
  navbarLink: b.styleDef("navbar-link"),
  navbarFixedTop: b.styleDef("navbar-fixed-top"),
  navbarFixedBottom: b.styleDef("navbar-fixed-bottom"),
  navbarStaticTop: b.styleDef("navbar-static-top"),
  navbarInverse: b.styleDef("navbar-inverse"),
  navbTabs: b.styleDef("nav-tabs"),
  navStacked: b.styleDef("nav-stacked"),
  navJustified: b.styleDef("nav-justified"),
  navPills: b.styleDef("nav-pills"),
  dropdown: b.styleDef("dropdown"),
  disabled: b.styleDef("disabled"),
  collapse: b.styleDef("collapse"),
  iconBar: b.styleDef("icon-bar")
};

export enum NavbarStatic {
  Top = 0
}
export enum NavbarFixed {
  Top = 0,
  Bottom = 1
}
export enum NavbarAlignment {
  Left = 0,
  Right = 1
}

export interface INavbarData extends IBaseData {
  inverse?: boolean;
  static?: NavbarStatic;
  fixed?: NavbarFixed;
  alignment?: NavbarAlignment;
  header?: boolean;
}

interface INavbarCtx extends b.IBobrilCtx {
  data: INavbarData;
}

export const Nav = b.createDerivedComponent<INavbarData>(Elem, {
  id: "bobrilstrap-navbar",
  render(ctx: INavbarCtx, me: b.IBobrilNode) {
    me.tag = ctx.data.header ? "header" : "nav";
    b.style(me, navStyles.navbar);
    b.style(
      me,
      ctx.data.inverse ? navStyles.navbarInverse : navStyles.navbarDefault
    );
    b.style(
      me,
      ctx.data.static === NavbarStatic.Top && navStyles.navbarStaticTop
    );
    b.style(me, ctx.data.fixed === NavbarFixed.Top && navStyles.navbarFixedTop);
    b.style(
      me,
      ctx.data.fixed === NavbarFixed.Bottom && navStyles.navbarFixedBottom
    );
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

export const Navbar = Nav;

export default Nav;

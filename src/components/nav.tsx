import * as b from "bobril";
import { IBaseElementData, BaseElement } from "../../index";
import { pick } from "../../helpers/objectHelper";
import { NavItem } from "./navItem";
import { NavLink } from "./navLink";

export const navStyles = {
    nav: b.styleDef("nav"),
    navbarNav: b.styleDef("navbar-nav"),
    pills: b.styleDef("nav-pills"),
    fill: b.styleDef("nav-fill"),
    justified: b.styleDef("nav-justifed"),
    tabs: b.styleDef("nav-tabs"),
};

interface INavElementData {
    as?: "nav" | "ul" | "ol" | "div";
    pills?: boolean;
    fill?: boolean;
    justified?: boolean;
    tabs?: boolean;
    navbar?: boolean;
}

export type INavData = INavElementData & IBaseElementData;

export class Nav extends BaseElement<INavData> {
    static id: string = "bobrilstrap-nav";

    static Item = NavItem;
    static Link = NavLink;

    readonly componentProperties: (keyof INavElementData)[] = ["pills", "fill", "justified", "tabs", "navbar"];

    readonly tag: string = "nav";

    get componentSpecificStyles(): b.IBobrilStyleArray {
        const data = pick(this.data, ...this.componentProperties);
        return [
            data.navbar ? navStyles.navbarNav : navStyles.nav,
            data.pills && navStyles.pills,
            data.fill && navStyles.fill,
            data.justified && navStyles.justified,
            data.tabs && navStyles.tabs,
        ];
    }
}

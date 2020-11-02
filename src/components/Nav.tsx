import * as b from "bobril";
import { IBaseElementData, BaseElement } from "./BaseElement";
import { pick } from "../../helpers/objectHelper";
import { NavItem } from "./NavItem";
import { NavLink } from "./NavLink";

export const navStyles = {
    nav: b.styleDef("nav"),
    navbarNav: b.styleDef("navbar-nav"),
    pills: b.styleDef("nav-pills"),
    fill: b.styleDef("nav-fill"),
    justified: b.styleDef("nav-justifed"),
    tabs: b.styleDef("nav-tabs"),
    cardHeaderTabs: b.styleDef("card-header-tabs"),
    cardHeaderPills: b.styleDef("card-header-pills"),
};

interface INavElementData {
    as?: "nav" | "ul" | "ol" | "div";
    pills?: boolean;
    fill?: boolean;
    justified?: boolean;
    tabs?: boolean;
    "card-header-tabs"?: boolean;
    "card-header-pills"?: boolean;
    navbar?: boolean;
}

export type INavData = INavElementData & IBaseElementData;

export class Nav extends BaseElement<INavData> {
    static id: string = "bobrilstrap-nav";

    static Item = NavItem;
    static Link = NavLink;

    readonly componentProperties: (keyof INavElementData)[] = [
        "pills",
        "card-header-pills",
        "fill",
        "justified",
        "tabs",
        "card-header-tabs",
        "navbar",
    ];

    get tag(): string {
        return "nav";
    }

    componentSpecificStyles(): b.IBobrilStyleArray {
        const data = pick(this.data, ...this.componentProperties);
        return [
            data.navbar ? navStyles.navbarNav : navStyles.nav,
            data.pills && navStyles.pills,
            data.fill && navStyles.fill,
            data.justified && navStyles.justified,
            data.tabs && navStyles.tabs,
            data["card-header-tabs"] && navStyles.cardHeaderTabs,
            data["card-header-pills"] && navStyles.cardHeaderPills,
        ];
    }
}

import * as b from "bobril";
import { Tags } from "../../utils/tags";
import { IBaseElementDataWithChildren, BaseElement, IAllAttrs } from "./BaseElement";
import { NavItem } from "./NavItem";
import { NavLink } from "./NavLink";

export const navStyles = {
    nav: b.styleDef("nav"),
    navbarNav: b.styleDef("navbar-nav"),
    pills: b.styleDef("nav-pills"),
    fill: b.styleDef("nav-fill"),
    justified: b.styleDef("nav-justified"),
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

export type INavData = INavElementData & IBaseElementDataWithChildren;

export class Nav extends BaseElement<INavData> {
    static id: string = "bobrilstrap-nav";

    static Item = NavItem;
    static Link = NavLink;

    componentProperties = (): (keyof INavData)[] => [
        "pills",
        "card-header-pills",
        "fill",
        "justified",
        "tabs",
        "card-header-tabs",
        "navbar",
    ];

    get tag(): Tags {
        return "ul";
    }

    componentAdditionalAttributes(): IAllAttrs {
        return {
            ...super.componentAdditionalAttributes(),
            role: this.data.role || (this.data.tabs ? "tablist" : undefined),
        };
    }

    componentSpecificStyles(): b.IBobrilStyleArray {
        const data = this.data;
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

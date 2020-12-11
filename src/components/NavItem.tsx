import * as b from "bobril";
import { Tags } from "../../utils/tags";
import { IBaseElementDataWithChildren, BaseElement } from "./BaseElement";

export const navItemStyles = {
    navItem: b.styleDef("nav-item"),
};

interface INavItemElementData {}

export type INavItemData = INavItemElementData & IBaseElementDataWithChildren;

export class NavItem extends BaseElement<INavItemData> {
    static id: string = "bobrilstrap-nav-item";
    componentProperties = (): (keyof INavItemData)[] => [];

    get tag(): Tags {
        return "li";
    }

    componentSpecificStyles(): b.IBobrilStyleArray {
        return [navItemStyles.navItem];
    }
}

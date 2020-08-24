import * as b from "bobril";
import { IBaseElementData, BaseElement } from "../../index";

export const navItemStyles = {
    navItem: b.styleDef("nav-item"),
};

interface INavItemElementData {}

export type INavItemData = INavItemElementData & IBaseElementData;

export class NavItem extends BaseElement<INavItemData> {
    static id: string = "bobrilstrap-nav-item";
    readonly componentProperties: (keyof INavItemElementData)[] = [];

    get tag(): string {
        return "li";
    }

    get componentSpecificStyles(): b.IBobrilStyleArray {
        return [navItemStyles.navItem];
    }
}

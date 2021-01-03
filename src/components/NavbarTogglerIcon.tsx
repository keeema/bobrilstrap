import * as b from "bobril";
import { Tags } from "../../utils/tags";
import { IBaseElementDataWithChildren, BaseElement } from "./BaseElement";

export const navbarTogglerIconStyles = {
    navbarTogglerIcon: b.styleDef("navbar-toggler-icon"),
};

export interface INavbarTogglerIconData extends IBaseElementDataWithChildren {}

export class NavbarTogglerIcon extends BaseElement<INavbarTogglerIconData> {
    static id: string = "bobrilstrap-navbar-toggler-icon";

    get tag(): Tags {
        return "span";
    }

    componentProperties(): (keyof INavbarTogglerIconData)[] {
        return [];
    }

    componentSpecificStyles(): b.IBobrilStyleArray {
        return [navbarTogglerIconStyles.navbarTogglerIcon];
    }
}

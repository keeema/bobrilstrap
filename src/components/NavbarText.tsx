import * as b from "bobril";
import { IBaseElementDataWithChildren, BaseElement } from "./BaseElement";

export const navbarTextStyles = {
    navbarText: b.styleDef("navbar-text"),
};

export interface INavbarTextData extends IBaseElementDataWithChildren {}

export class NavbarText extends BaseElement<INavbarTextData> {
    static id: string = "bobrilstrap-navbar-text";

    componentProperties(): (keyof INavbarTextData)[] {
        return [];
    }

    componentSpecificStyles(): b.IBobrilStyleArray {
        return [navbarTextStyles.navbarText];
    }
}

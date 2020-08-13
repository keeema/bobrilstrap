import * as b from "bobril";
import { IBaseElementData, BaseElement } from "../../index";

export const navbarTogglerStyles = {
    navbarToggler: b.styleDef("navbar-toggler"),
};

interface INavbarTogglerElementData {}

export type INavbarTogglerData = INavbarTogglerElementData & IBaseElementData;

export class NavbarToggler extends BaseElement<INavbarTogglerData> {
    static id: string = "bobrilstrap-navbar-toggler";
    readonly componentProperties: (keyof INavbarTogglerElementData)[] = [];

    readonly tag: string = "button";

    get componentSpecificStyles(): b.IBobrilStyleArray {
        return [navbarTogglerStyles.navbarToggler];
    }
}

import * as b from "bobril";
import { IBaseElementData, BaseElement } from "./BaseElement";

export const navbarTogglerStyles = {
    navbarToggler: b.styleDef("navbar-toggler"),
};

interface INavbarTogglerElementData {}

export type INavbarTogglerData = INavbarTogglerElementData & IBaseElementData;

export class NavbarToggler extends BaseElement<INavbarTogglerData> {
    static id: string = "bobrilstrap-navbar-toggler";
    readonly componentProperties: (keyof INavbarTogglerElementData)[] = [];

    get tag(): string {
        return "button";
    }

    componentSpecificStyles(): b.IBobrilStyleArray {
        return [navbarTogglerStyles.navbarToggler];
    }
}

import * as b from "bobril";
import { Tags } from "../../utils/tags";
import { IBaseElementDataWithChildren, BaseElement } from "./BaseElement";
import { NavbarTogglerIcon } from "./NavbarTogglerIcon";

export const navbarTogglerStyles = {
    navbarToggler: b.styleDef("navbar-toggler"),
};

interface INavbarTogglerElementData {}

export type INavbarTogglerData = INavbarTogglerElementData & IBaseElementDataWithChildren;

export class NavbarToggler extends BaseElement<INavbarTogglerData> {
    static id: string = "bobrilstrap-navbar-toggler";
    static Icon = NavbarTogglerIcon;

    componentProperties = (): (keyof INavbarTogglerData)[] => [];

    get tag(): Tags {
        return "button";
    }

    componentSpecificStyles(): b.IBobrilStyleArray {
        return [navbarTogglerStyles.navbarToggler];
    }
}

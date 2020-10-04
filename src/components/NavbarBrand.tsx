import * as b from "bobril";
import { IBaseElementData, BaseElement } from "./BaseElement";

export const navbarBrandStyles = {
    navbarBrand: b.styleDef("navbar-brand"),
};

interface INavbarBrandElementData {
    href?: string;
}

export type INavbarBrandData = INavbarBrandElementData & IBaseElementData;

export class NavbarBrand extends BaseElement<INavbarBrandData> {
    static id: string = "bobrilstrap-navbar-brand";
    readonly componentProperties: (keyof INavbarBrandElementData)[] = ["href"];

    get tag(): string {
        return "a";
    }

    get componentAdditionalAttributes(): INavbarBrandData {
        return { href: this.data.href ?? "javascript:void(0)" };
    }

    get componentSpecificStyles(): b.IBobrilStyleArray {
        return [navbarBrandStyles.navbarBrand];
    }
}

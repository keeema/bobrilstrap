import * as b from "bobril";
import { IBaseElementDataWithChildren, BaseElement } from "./BaseElement";

export const navbarBrandStyles = {
    navbarBrand: b.styleDef("navbar-brand"),
};

interface INavbarBrandElementData {
    href?: string;
}

export type INavbarBrandData = INavbarBrandElementData & IBaseElementDataWithChildren;

export class NavbarBrand extends BaseElement<INavbarBrandData> {
    static id: string = "bobrilstrap-navbar-brand";
    componentProperties = (): (keyof INavbarBrandData)[] => ["href"];

    get tag(): string {
        return "a";
    }

    componentAdditionalAttributes(): INavbarBrandData {
        return { ...super.componentAdditionalAttributes(), href: this.data.href ?? "javascript:void(0)" };
    }

    componentSpecificStyles(): b.IBobrilStyleArray {
        return [navbarBrandStyles.navbarBrand];
    }
}

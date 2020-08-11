import * as b from "bobril";
import { IBaseElementData, BaseElement } from "../../index";
import { IAllAttrs } from "./baseElement";

export const navbarTogglerStyles = {
    navbarToggler: b.styleDef("navbar-toggler"),
};

interface INavbarTogglerElementData {
    target: string;
}

export type INavbarTogglerData = INavbarTogglerElementData & IBaseElementData;

export class NavbarToggler extends BaseElement<INavbarTogglerData> {
    static id: string = "bobrilstrap-navbar-toggler";
    readonly componentProperties: (keyof INavbarTogglerElementData)[] = ["target"];

    readonly tag: string = "button";

    get componentAdditionalAttributes(): IAllAttrs {
        return this.data["target"] ? { type: "button", "data-target": this.data["target"], "data-toggle": "collapse" } : { type: "button" };
    }

    get componentSpecificStyles(): b.IBobrilStyleArray {
        return [navbarTogglerStyles.navbarToggler];
    }
}

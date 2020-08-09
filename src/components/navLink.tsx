import * as b from "bobril";
import { IBaseElementData, BaseElement } from "../../index";

export const navLinkStyles = {
    navLink: b.styleDef("nav-link"),
    disabled: b.styleDef("disabled"),
    active: b.styleDef("active"),
};

interface INavLinkElementData {
    disabled?: boolean;
    active?: boolean;
    href?: string;
}

export type INavLinkData = INavLinkElementData & IBaseElementData;

export class NavLink extends BaseElement<INavLinkData> {
    static id: string = "bobrilstrap-nav-link";
    readonly componentProperties: (keyof INavLinkElementData)[] = ["disabled", "active", "href"];

    readonly tag: string = "a";

    get componentAdditionalAttributes(): INavLinkData {
        return { href: this.data.href ?? "javascript:void(0)" };
    }

    get componentSpecificStyles(): b.IBobrilStyleArray {
        return [navLinkStyles.navLink, this.data.disabled && navLinkStyles.disabled, this.data.active && navLinkStyles.active];
    }
}

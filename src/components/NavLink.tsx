import * as b from "bobril";
import { IBaseElementData, BaseElement, IAllAttrs } from "./BaseElement";

export const navLinkStyles = {
    navLink: b.styleDef("nav-link"),
    disabled: b.styleDef("disabled"),
};

interface INavLinkElementData {
    disabled?: boolean;
    active?: boolean;
    href?: string;
}

export type INavLinkData = INavLinkElementData & IBaseElementData;

export class NavLink extends BaseElement<INavLinkData> {
    static id: string = "bobrilstrap-nav-link";
    readonly componentProperties: (keyof INavLinkElementData)[] = ["disabled" /* , "href" */];

    get tag(): string {
        return "a";
    }

    componentAdditionalAttributes(): IAllAttrs {
        return { href: this.data.href ?? "javascript:void(0)" };
    }

    componentSpecificStyles(): b.IBobrilStyleArray {
        return [navLinkStyles.navLink, this.data.disabled && navLinkStyles.disabled];
    }
}

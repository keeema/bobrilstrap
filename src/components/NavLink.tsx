import * as b from "bobril";
import { Tags } from "../../helpers/tags";
import { IBaseElementDataWithChildren, BaseElement, IAllAttrs } from "./BaseElement";

export const navLinkStyles = {
    navLink: b.styleDef("nav-link"),
    disabled: b.styleDef("disabled"),
};

interface INavLinkElementData {
    disabled?: boolean;
    active?: boolean;
    href?: string;
}

export type INavLinkData = INavLinkElementData & IBaseElementDataWithChildren;

export class NavLink extends BaseElement<INavLinkData> {
    static id: string = "bobrilstrap-nav-link";
    componentProperties = (): (keyof INavLinkData)[] => ["disabled" /* , "href" */];

    get tag(): Tags {
        return "a";
    }

    componentAdditionalAttributes(): IAllAttrs {
        return { ...super.componentAdditionalAttributes(), href: this.data.href ?? "javascript:void(0)" };
    }

    componentSpecificStyles(): b.IBobrilStyleArray {
        return [navLinkStyles.navLink, this.data.disabled && navLinkStyles.disabled];
    }
}

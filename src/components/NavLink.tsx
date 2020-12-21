import * as b from "bobril";
import * as bootstrap from "bootstrap";
import { Tags } from "../../utils/tags";
import { IBaseElementDataWithChildren, BaseElement, IAllAttrs } from "./BaseElement";
import { ITab } from "./ListGroupItem";

export const navLinkStyles = {
    navLink: b.styleDef("nav-link"),
    disabled: b.styleDef("disabled"),
};

interface INavLinkElementData {
    href?: string;
    tab?: boolean;
    toggleable?: boolean;
    onHidden?: () => void;
    onHide?: () => void;
    onShown?: () => void;
    onShow?: () => void;
    "get-instance"?: (tab: ITab) => void;
}

export type INavLinkData = INavLinkElementData & IBaseElementDataWithChildren;

export class NavLink extends BaseElement<INavLinkData> {
    static id: string = "bobrilstrap-nav-link";
    componentProperties = (): (keyof INavLinkData)[] => [
        /* , "href" */
        "tab",
        "toggleable",
        "onShow",
        "onShown",
        "onHide",
        "onHidden",
        "get-instance",
    ];

    get tag(): Tags {
        return "a";
    }

    componentAdditionalAttributes(): IAllAttrs {
        return {
            ...super.componentAdditionalAttributes(),
            href: this.data.href ?? "javascript:void(0)",
            role: this.data.role ?? (this.data.tab ? "tab" : undefined),
            ["data-bs-toggle"]: this.data["data-bs-toggle"] ?? (this.data.tab && this.data.toggleable ? "list" : undefined),
        };
    }

    componentSpecificStyles(): b.IBobrilStyleArray {
        return [navLinkStyles.navLink, this.data.disabled && navLinkStyles.disabled];
    }

    postInitDom(): void {
        const tab = new bootstrap.Tab(this.element);
        this.data["get-instance"] && this.data["get-instance"](tab);

        this.registerCallbacks();
    }

    postUpdateDom(): void {
        this.registerCallbacks();
    }

    private registerCallbacks(): void {
        this.registerEvent("hide.bs.tab", () => this.data.onHide && this.data.onHide());
        this.registerEvent("hidden.bs.tab", () => this.data.onHidden && this.data.onHidden());
        this.registerEvent("show.bs.tab", () => this.data.onShow && this.data.onShow());
        this.registerEvent("shown.bs.tab", () => this.data.onShown && this.data.onShown());
    }
}

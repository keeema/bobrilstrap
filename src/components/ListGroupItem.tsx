import * as b from "bobril";
import $ from "jquery";
import bootstrap from "bootstrap";
import { createFilledDictionary } from "../../helpers/dict";
import { Tags } from "../../helpers/tags";
import { IBaseElementDataWithChildren, BaseElement, IAllAttrs } from "./BaseElement";

export type ListGroupItemVariant = "primary" | "secondary" | "success" | "danger" | "warning" | "info" | "light" | "dark";

export type ITab = bootstrap.Tab;

export const listGroupItemVariants: ListGroupItemVariant[] = [
    "primary",
    "secondary",
    "success",
    "danger",
    "warning",
    "info",
    "light",
    "dark",
];

export const listGroupItemStyles = {
    listGroupItem: b.styleDef("list-group-item"),
    disabled: b.styleDef("disabled"),
    action: b.styleDef("list-group-item-action"),
    variants: createFilledDictionary(listGroupItemVariants.map((variant) => [variant, b.styleDef(`list-group-item-${variant}`)])),
};

export interface IListGroupItemData extends IBaseElementDataWithChildren {
    action?: boolean;
    variant?: ListGroupItemVariant;
    tab?: boolean;
    toggleable?: boolean;
    onHidden?: () => void;
    onHide?: () => void;
    onShown?: () => void;
    onShow?: () => void;
    onItemCreated?: (tab: ITab, element: JQuery<HTMLElement>) => void;
}

export class ListGroupItem extends BaseElement<IListGroupItemData> {
    static id: string = "bobrilstrap-list-group-item";
    componentProperties = (): (keyof IListGroupItemData)[] => [
        "action",
        "variant",
        "tab",
        "toggleable",
        "onShow",
        "onShown",
        "onHide",
        "onHidden",
    ];

    get tag(): Tags {
        return this.data.href || this.data.action ? "a" : "li";
    }

    componentSpecificStyles(): b.IBobrilStyleArray {
        return [
            listGroupItemStyles.listGroupItem,
            this.data.disabled && listGroupItemStyles.disabled,
            this.data.action && listGroupItemStyles.action,
            this.data.variant && listGroupItemStyles.variants(this.data.variant),
        ];
    }

    private get isButton(): boolean {
        return this.recognizedTag === "button";
    }

    private get isAnchor(): boolean {
        return this.recognizedTag === "a";
    }

    componentAdditionalAttributes(): IAllAttrs {
        return {
            ...super.componentAdditionalAttributes(),
            type: this.data.type ?? (this.isButton ? "button" : undefined),
            href: this.data.href ?? (this.isAnchor ? "javascript:void(0)" : undefined),
            role: this.data.role ?? (this.data.tab ? "tab" : undefined),
            ["data-bs-toggle"]: this.data["data-bs-toggle"] ?? (this.data.tab && this.data.toggleable ? "list" : undefined),
        };
    }

    postInitDom(): void {
        const element = b.getDomNode(this.me) as HTMLDivElement;
        const jQueryElement = $(element);
        const tab = new bootstrap.Tab(element);
        jQueryElement.on("hide.bs.tab", () => this.data.onHide && this.data.onHide());
        jQueryElement.on("hidden.bs.tab", () => this.data.onHidden && this.data.onHidden());
        jQueryElement.on("show.bs.tab", () => this.data.onShow && this.data.onShow());
        jQueryElement.on("shown.bs.tab", () => this.data.onShown && this.data.onShown());
        this.data.onItemCreated && this.data.onItemCreated(tab, jQueryElement);
    }
}

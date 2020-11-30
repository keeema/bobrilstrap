import * as b from "bobril";
import $ from "jquery";
import { createFilledDictionary } from "../../helpers/dict";
import { Tags } from "../../helpers/tags";
import { IBaseElementDataWithChildren, BaseElement, IAllAttrs } from "./BaseElement";

export type ListGroupItemVariant = "primary" | "secondary" | "success" | "danger" | "warning" | "info" | "light" | "dark";

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
    "toggle-tab"?: boolean;
    fade?: boolean;
    onHidden?: () => void;
    onHide?: () => void;
    onShown?: () => void;
    onShow?: () => void;
}

export class ListGroupItem extends BaseElement<IListGroupItemData> {
    static id: string = "bobrilstrap-list-group-item";
    componentProperties = (): (keyof IListGroupItemData)[] => [
        "action",
        "variant",
        "tab",
        "toggle-tab",
        "fade",
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
            ["data-toggle"]: this.data["data-toggle"] ?? (this.data.tab && this.data["toggle-tab"] ? "list" : undefined),
        };
    }

    postInitDom(): void {
        const element = $(b.getDomNode(this.me) as HTMLDivElement);
        element.on("hide.bs.tab", () => this.data.onHide && this.data.onHide());
        element.on("hidden.bs.tab", () => this.data.onHidden && this.data.onHidden());
        element.on("show.bs.tab", () => this.data.onShow && this.data.onShow());
        element.on("shown.bs.tab", () => this.data.onShown && this.data.onShown());
    }
}

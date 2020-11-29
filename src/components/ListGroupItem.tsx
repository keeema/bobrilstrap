import * as b from "bobril";
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
    fade: b.styleDef("fade"),
    show: b.styleDef("show"),
    variants: createFilledDictionary(listGroupItemVariants.map((variant) => [variant, b.styleDef(`list-group-item-${variant}`)])),
};

export interface IListGroupItemData extends IBaseElementDataWithChildren {
    action?: boolean;
    variant?: ListGroupItemVariant;
    tab?: boolean;
    fade?: boolean;
}

export class ListGroupItem extends BaseElement<IListGroupItemData> {
    static id: string = "bobrilstrap-list-group-item";
    componentProperties = (): (keyof IListGroupItemData)[] => ["action", "variant", "tab", "fade"];

    get tag(): Tags {
        return this.data.href ? "a" : "li";
    }

    componentSpecificStyles(): b.IBobrilStyleArray {
        return [
            listGroupItemStyles.listGroupItem,
            this.data.disabled && listGroupItemStyles.disabled,
            this.data.action && listGroupItemStyles.action,
            this.data.variant && listGroupItemStyles.variants(this.data.variant),
            this.data.fade && listGroupItemStyles.fade,
            this.data.active && this.data.fade && listGroupItemStyles.show,
        ];
    }

    private get isButton(): boolean {
        return this.data.as === "button";
    }

    private get isAnchor(): boolean {
        return this.tag === "a" || this.data.as === "a";
    }

    componentAdditionalAttributes(): IAllAttrs {
        return {
            ...super.componentAdditionalAttributes(),
            type: this.data.type ?? (this.isButton ? "button" : undefined),
            href: this.data.href ?? (this.isAnchor ? "javascript:void(0)" : undefined),
            role: this.data.role ?? (this.data.tab ? "tab" : undefined),
            ["data-toggle"]: this.data["data-toggle"] ?? (this.data.tab ? "list" : undefined),
        };
    }
}

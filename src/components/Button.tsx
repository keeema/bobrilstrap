import * as b from "bobril";
import { IBaseElementDataWithChildren, BaseElement, IAllAttrs } from "./BaseElement";
import { Breakpoint, breakpoints } from "../layouts/breakpoint";
import { createFilledDictionary } from "../../utils/dict";
import { ButtonToolbar } from "./ButtonToolbar";
import { ButtonGroup } from "./ButtonGroup";
import { Tags } from "../../utils/tags";

export type ButtonVariant =
    | "primary"
    | "secondary"
    | "success"
    | "warning"
    | "danger"
    | "light"
    | "dark"
    | "link"
    | "outline-primary"
    | "outline-secondary"
    | "outline-success"
    | "outline-warning"
    | "outline-danger"
    | "outline-light"
    | "outline-dark"
    | "outline-link";

export const buttonStyles = {
    btn: b.styleDef("btn"),
    disabled: b.styleDef("disabled"),
    primary: b.styleDef("btn-primary"),
    secondary: b.styleDef("btn-secondary"),
    success: b.styleDef("btn-success"),
    warning: b.styleDef("btn-warning"),
    danger: b.styleDef("btn-danger"),
    light: b.styleDef("btn-light"),
    dark: b.styleDef("btn-dark"),
    link: b.styleDef("btn-link"),
    "outline-primary": b.styleDef("btn-outline-primary"),
    "outline-secondary": b.styleDef("btn-outline-secondary"),
    "outline-success": b.styleDef("btn-outline-success"),
    "outline-warning": b.styleDef("btn-outline-warning"),
    "outline-danger": b.styleDef("btn-outline-danger"),
    "outline-light": b.styleDef("btn-outline-light"),
    "outline-dark": b.styleDef("btn-outline-dark"),
    "outline-link": b.styleDef("btn-outline-link"),
    sizes: createFilledDictionary(breakpoints.map((breakpoint) => [breakpoint, b.styleDef(`btn-${breakpoint}`)])),
};

export interface IButtonData extends IBaseElementDataWithChildren {
    variant?: ButtonVariant;
    href?: string;
    size?: Breakpoint;
    type?: "button" | "submit" | "reset";
    dismiss?: "alert" | "toast" | "modal";
}

// TODO: Check behavior of disabled link in old browsers
export class Button<TData extends IButtonData> extends BaseElement<TData> {
    static id: string = "bobrilstrap-button";

    static Toolbar = ButtonToolbar;
    static Group = ButtonGroup;

    // Note: keep synced with all derived components
    componentProperties(): (keyof TData)[] {
        return ["variant", "size" /* , "href" */, "type", "dismiss"];
    }

    get tag(): Tags {
        return this.data.href ? "a" : "button";
    }

    private get isButtonOrInput(): boolean {
        return this.recognizedTag === "button" || this.recognizedTag === "input";
    }

    private get isAnchor(): boolean {
        return this.recognizedTag === "a";
    }

    componentAdditionalAttributes(): IAllAttrs {
        return {
            ...super.componentAdditionalAttributes(),
            type: this.data.type ?? (this.isButtonOrInput ? "button" : undefined),
            role: this.data.role ?? (this.isAnchor ? "button" : undefined),
            href: this.data.href ?? (this.isAnchor ? "javascript:void(0)" : undefined),
            "data-bs-dismiss": this.data["data-bs-dismiss"] ?? this.data.dismiss,
        };
    }

    componentSpecificStyles(): b.IBobrilStyleArray {
        return [
            buttonStyles.btn,
            buttonStyles[this.data.variant ?? "primary"],
            this.data.size && buttonStyles.sizes(this.data.size),
            this.isAnchor && this.data.disabled && buttonStyles.disabled,
        ];
    }
}

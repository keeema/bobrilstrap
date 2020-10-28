import * as b from "bobril";
import { IBaseElementData, BaseElement, IAllAttrs } from "./BaseElement";
import { Breakpoint, breakpoints } from "../layouts/breakpoint";
import { createFilledDictionary } from "../../helpers/dict";
import { ButtonToolbar } from "./ButtonToolbar";
import { ButtonGroup } from "./ButtonGroup";

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
    block: b.styleDef("btn-block"),
    active: b.styleDef("active"),
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

export interface IButtonData extends IBaseElementData {
    as?: "button" | "a" | "input";
    variant?: ButtonVariant;
    href?: string;
    size?: Breakpoint;
    type?: "button" | "submit" | "reset";
    block?: boolean;
    active?: boolean;
}

// TODO: Check behavior of disabled link in old browsers
export class Button<TData extends IButtonData> extends BaseElement<TData> {
    static id: string = "bobrilstrap-button";

    static Toolbar = ButtonToolbar;
    static Group = ButtonGroup;

    readonly componentProperties: (keyof IButtonData)[] = ["variant", "size" /* , "href" */, "type", "block", "active"];

    get tag(): string {
        return this.data.href ? "a" : "button";
    }

    private get isButtonOrInput(): boolean {
        return this.tag === "button" || this.data.as === "input";
    }

    private get isAnchor(): boolean {
        return this.tag === "a" || this.data.as === "a";
    }

    componentAdditionalAttributes(): IAllAttrs {
        return {
            type: this.data.type ?? this.isButtonOrInput ? "button" : undefined,
            role: this.data.role ?? (this.isAnchor && "button"),
        };
    }

    componentSpecificStyles(): b.IBobrilStyleArray {
        return [
            buttonStyles.btn,
            buttonStyles[this.data.variant ?? "primary"],
            this.data.size && buttonStyles.sizes(this.data.size),
            this.data.active && buttonStyles.active,
            this.data.block && buttonStyles.block,
            this.isAnchor && this.data.disabled && buttonStyles.disabled,
        ];
    }
}

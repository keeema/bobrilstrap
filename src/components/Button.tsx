import * as b from "bobril";
import { IBaseElementData, BaseElement } from "./BaseElement";
import { Breakpoint, breakpoints } from "../layouts/breakpoint";
import { createFilledDictionary } from "../../helpers/dict";

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
    variant?: ButtonVariant;
    href?: string;
    size?: Breakpoint;
}

export class Button extends BaseElement<IButtonData> {
    readonly componentProperties: (keyof IButtonData)[] = ["variant", "size" /* , href */];

    get tag(): string {
        return this.data.href ? "a" : "button";
    }

    get componentSpecificStyles(): b.IBobrilStyleArray {
        return [buttonStyles.btn, buttonStyles[this.data.variant ?? "primary"], this.data.size && buttonStyles.sizes(this.data.size)];
    }
}

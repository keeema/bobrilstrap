import * as b from "bobril";
import { IBaseElementData, BaseElement } from "./baseElement";

export type ButtonVariant =
    | "primary"
    | "secondary"
    | "success"
    | "warning"
    | "danger"
    | "light"
    | "link"
    | "outline-primary"
    | "outline-secondary"
    | "outline-success"
    | "outline-warning"
    | "outline-danger"
    | "outline-light"
    | "outline-link";

const styles = {
    btn: b.styleDef("btn"),
    primary: b.styleDef("btn-primary"),
    secondary: b.styleDef("btn-primary"),
    success: b.styleDef("btn-primary"),
    warning: b.styleDef("btn-primary"),
    danger: b.styleDef("btn-primary"),
    light: b.styleDef("btn-primary"),
    link: b.styleDef("btn-primary"),
    "outline-primary": b.styleDef("btn-outline-primary"),
    "outline-secondary": b.styleDef("btn-outline-primary"),
    "outline-success": b.styleDef("btn-outline-primary"),
    "outline-warning": b.styleDef("btn-outline-primary"),
    "outline-danger": b.styleDef("btn-outline-primary"),
    "outline-light": b.styleDef("btn-outline-primary"),
    "outline-link": b.styleDef("btn-outline-primary"),
};

export interface IButtonData extends IBaseElementData {
    variant: ButtonVariant;
    href?: string;
}

export class Button extends BaseElement<IButtonData> {
    readonly componentProperties: (keyof IButtonData)[] = ["variant"];

    get tag(): string {
        return this.data.href ? "a" : "button";
    }

    get componentSpecificStyles(): b.IBobrilStyleArray {
        return [styles.btn, styles[this.data.variant]];
    }
}

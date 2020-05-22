import * as b from "bobril";
import { IBaseElementData, BaseElement } from "./baseElement";

export type ButtonVariant = "primary" | "secondary" | "success" | "warning" | "danger" | "light" | "link";

const styles = {
    primary: b.styleDef("btn-primary"),
    secondary: b.styleDef("btn-primary"),
    success: b.styleDef("btn-primary"),
    warning: b.styleDef("btn-primary"),
    danger: b.styleDef("btn-primary"),
    light: b.styleDef("btn-primary"),
    link: b.styleDef("btn-primary"),
};

export interface IButtonData extends IBaseElementData {
    variant: ButtonVariant;
}

export class Button extends BaseElement<IButtonData> {
    readonly prefix: b.IBobrilStyle = b.styleDef("btn");
    readonly omitComponentProperties: (keyof IButtonData)[] = ["variant"];

    get componentSpecificStyles(): b.IBobrilStyleArray {
        return [styles[this.data.variant]];
    }
}

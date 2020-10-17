import * as b from "bobril";
import { IBaseElementData, BaseElement } from "./BaseElement";

export type AlertVariant = "primary" | "secondary" | "success" | "danger" | "warning" | "info" | "light" | "dark";
export const alertStyles = {
    alert: b.styleDef("alert"),
    primary: b.styleDef("alert-primary"),
    secondary: b.styleDef("alert-secondary"),
    success: b.styleDef("alert-success"),
    danger: b.styleDef("alert-danger"),
    warning: b.styleDef("alert-warning"),
    info: b.styleDef("alert-info"),
    light: b.styleDef("alert-light"),
    dark: b.styleDef("alert-dark"),
};

export interface IAlertData extends IBaseElementData {
    variant?: AlertVariant;
}

export class Alert extends BaseElement<IAlertData> {
    readonly componentProperties: (keyof IAlertData)[] = ["variant"];

    get componentSpecificStyles(): b.IBobrilStyleArray {
        return [alertStyles.alert, alertStyles[this.data.variant ?? "primary"]];
    }
}

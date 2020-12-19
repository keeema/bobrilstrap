import * as b from "bobril";
import * as bootstrap from "bootstrap";
import { AlertHeading } from "./AlertHeading";
import { AlertLink } from "./AlertLink";
import { IBaseElementDataWithChildren, BaseElement, IAllAttrs } from "./BaseElement";

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
    dismissible: b.styleDef("alert-dismissible"),
    fade: b.styleDef("fade"),
    show: b.styleDef("show"),
};

export type IAlert = bootstrap.Alert;

export interface IAlertData extends IBaseElementDataWithChildren {
    variant?: AlertVariant;
    dismissible?: boolean;
    "dismiss-animation"?: boolean;
    onDismiss?: () => void;
    onDismissed?: () => void;
    "get-instance"?: (alert: IAlert) => void;
}

export class Alert extends BaseElement<IAlertData> {
    static id: string = "bobrilstrap-alert";
    static Heading = AlertHeading;
    static Link = AlertLink;

    componentProperties = (): (keyof IAlertData)[] => [
        "variant",
        "dismissible",
        "dismiss-animation",
        "onDismiss",
        "onDismissed",
        "get-instance",
    ];

    componentAdditionalAttributes(): IAllAttrs {
        return { ...super.componentAdditionalAttributes(), role: this.data.role || "alert" };
    }

    postInitDom(): void {
        this.data.dismissible && this.registerCallback() && this.registerAlert();
    }

    postUpdateDom(): void {
        this.data.dismissible && this.registerCallback();
    }

    componentSpecificStyles(): b.IBobrilStyleArray {
        return [
            alertStyles.alert,
            alertStyles[this.data.variant ?? "primary"],
            this.data.children && alertStyles.dismissible,
            this.data.dismissible && this.data["dismiss-animation"] && alertStyles.fade,
            this.data.dismissible && this.data["dismiss-animation"] && alertStyles.show,
        ];
    }

    private registerCallback(): void {
        const element = b.getDomNode(this.me) as HTMLElement;
        if (!element) {
            return;
        }

        this.registerEvent("closed.bs.alert", () => this.data.onDismissed && this.data.onDismissed());
        this.registerEvent("close.bs.alert", () => this.data.onDismiss && this.data.onDismiss());
    }

    private registerAlert(): void {
        const alert = new bootstrap.Alert(this.element);
        this.data["get-instance"] && this.data["get-instance"](alert as IAlert);
    }
}

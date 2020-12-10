import * as b from "bobril";
import * as $ from "jquery";
import { Tags } from "../../helpers/tags";
import { AlertHeading } from "./AlertHeading";
import { AlertLink } from "./AlertLink";
import { IBaseElementDataWithChildren, BaseElement, IAllAttrs, IAttrs } from "./BaseElement";

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

export interface IAlertData extends IBaseElementDataWithChildren {
    variant?: AlertVariant;
    dismissible?: boolean | "native" | "native-white";
    "dismiss-aria-label"?: string;
    "dismiss-animation"?: boolean;
    onDismiss?: () => void;
    onDismissed?: () => void;
}

export class Alert extends BaseElement<IAlertData> {
    static id: string = "bobrilstrap-alert";
    static Heading = AlertHeading;
    static Link = AlertLink;

    componentProperties = (): (keyof IAlertData)[] => [
        "variant",
        "dismissible",
        "dismissible-aria-label",
        "dismiss-animation",
        "onDismiss",
        "onDismissed",
    ];

    componentAdditionalAttributes(): IAllAttrs {
        return { ...super.componentAdditionalAttributes(), role: this.data.role || "alert" };
    }

    render(): b.IBobrilNode {
        if (this.isNativeDismiss) {
            this.data.children = [...[this.data.children], <AlertDismissButton dismiss-native />];
        }
        return super.render();
    }

    postInitDom(): void {
        this.isNativeDismiss && this.registerCallback();
    }

    postUpdateDom(): void {
        this.isNativeDismiss && this.registerCallback();
    }

    componentSpecificStyles(): b.IBobrilStyleArray {
        return [
            alertStyles.alert,
            alertStyles[this.data.variant ?? "primary"],
            this.data.dismissible && alertStyles.dismissible,
            this.isNativeDismiss && this.data["dismiss-animation"] && alertStyles.fade,
            this.isNativeDismiss && this.data["dismiss-animation"] && alertStyles.show,
        ];
    }

    private get isNativeDismiss(): boolean {
        return this.data.dismissible === "native" || this.data.dismissible === "native-white";
    }

    private registerCallback(): void {
        const element = b.getDomNode(this.me) as HTMLElement;
        if (!element) {
            return;
        }
        $(element).off("closed.bs.alert");
        $(element).off("close.bs.alert");
        $(element).on("closed.bs.alert", () => this.data.onDismissed && this.data.onDismissed());
        $(element).on("close.bs.alert", () => this.data.onDismiss && this.data.onDismiss());
    }
}

export const alertDismissButtonStyles = {
    close: b.styleDef("btn-close"),
    closeWhite: b.styleDef("btn-close-white"),
};

export interface IAlertDismissButtonData extends IBaseElementDataWithChildren {
    "dismiss-native"?: boolean;
    "dismiss-aria-label"?: string;
    white?: boolean;
}

export class AlertDismissButton extends BaseElement<IAlertDismissButtonData> {
    static id: string = "bobrilstrap-alert-dismiss-button";

    get tag(): Tags {
        return "button";
    }

    componentProperties(): (keyof IAlertDismissButtonData)[] {
        return ["dismiss-aria-label", "white", "dismiss-native"];
    }

    componentAdditionalAttributes(): IAttrs {
        return {
            ariaLabel: this.data["dismiss-aria-label"] ?? "Close",
            "data-bs-dismiss": this.data["data-bs-dismiss"] || (this.data["dismiss-native"] ? "alert" : undefined),
        };
    }

    componentSpecificStyles(): b.IBobrilStyleArray {
        return [this.data.white ? alertDismissButtonStyles.closeWhite : alertDismissButtonStyles.close];
    }
}

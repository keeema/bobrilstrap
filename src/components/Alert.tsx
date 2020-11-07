import * as b from "bobril";
import * as $ from "jquery";
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
    dismissible: b.styleDef("alert-dismissible fade show"),
    fade: b.styleDef("fade"),
    show: b.styleDef("show"),
};

export interface IAlertData extends IBaseElementDataWithChildren {
    variant?: AlertVariant;
    dismissible?: boolean;
    "dismiss-aria-label"?: string;
    "dismiss-animation"?: boolean;
    onDismiss?: () => void;
    onDismissed?: () => void;
}

export class Alert extends BaseElement<IAlertData> {
    static id: string = "bobrilstrap-alert";
    static Heading = AlertHeading;
    static Link = AlertLink;

    readonly componentProperties: (keyof IAlertData)[] = [
        "variant",
        "dismissible",
        "dismissible-aria-label",
        "dismiss-animation",
        "onDismiss",
        "onDismissed",
    ];

    componentAdditionalAttributes(): IAllAttrs {
        return { role: this.data.role || "alert" };
    }

    render(): b.IBobrilNode {
        if (this.data.dismissible) {
            this.data.children = [...this.data.children, <DismissButton />];
        }
        return super.render();
    }

    postInitDom(): void {
        this.data.dismissible && this.registerCallback();
    }

    postUpdateDom(): void {
        this.data.dismissible && this.registerCallback();
    }

    componentSpecificStyles(): b.IBobrilStyleArray {
        return [
            alertStyles.alert,
            alertStyles[this.data.variant ?? "primary"],
            this.data.dismissible && alertStyles.dismissible,
            this.data.dismissible && this.data.animation && alertStyles.fade,
            this.data.dismissible && this.data.animation && alertStyles.show,
        ];
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

function DismissButton({ dismissAriaLabel }: IAlertData): b.IBobrilNode {
    return (
        <button type="button" class="close" data-dismiss="alert" aria-label={dismissAriaLabel ?? "Close"}>
            <span aria-hidden>&times;</span>
        </button>
    );
}

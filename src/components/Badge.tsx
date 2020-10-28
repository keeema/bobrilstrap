import * as b from "bobril";
import { IBaseElementData, BaseElement } from "./BaseElement";

export type BadgeVariant = "primary" | "secondary" | "success" | "danger" | "warning" | "info" | "light" | "dark";

export const badgeStyles = {
    badge: b.styleDef("badge"),
    primary: b.styleDef("badge-primary"),
    secondary: b.styleDef("badge-secondary"),
    success: b.styleDef("badge-success"),
    danger: b.styleDef("badge-danger"),
    warning: b.styleDef("badge-warning"),
    info: b.styleDef("badge-info"),
    light: b.styleDef("badge-light"),
    dark: b.styleDef("badge-dark"),
    pill: b.styleDef("badge-pill"),
};

export interface IBadgeData extends IBaseElementData {
    variant?: BadgeVariant;
    pill?: boolean;
    href?: string;
}

export class Badge extends BaseElement<IBadgeData> {
    static id: string = "bobrilstrap-badge";
    readonly componentProperties: (keyof IBadgeData)[] = ["variant", "pill" /* , href */];

    get tag(): string {
        return this.data.href ? "a" : "span";
    }

    componentSpecificStyles(): b.IBobrilStyleArray {
        return [badgeStyles.badge, badgeStyles[this.data.variant ?? "primary"], this.data.pill && badgeStyles.pill];
    }
}

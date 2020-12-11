import * as b from "bobril";
import { Tags } from "../../utils/tags";
import { IBaseElementDataWithChildren, BaseElement } from "./BaseElement";

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

export interface IBadgeData extends IBaseElementDataWithChildren {
    variant?: BadgeVariant;
    pill?: boolean;
    href?: string;
}

export class Badge extends BaseElement<IBadgeData> {
    static id: string = "bobrilstrap-badge";
    componentProperties = (): (keyof IBadgeData)[] => ["variant", "pill" /* , href */];

    get tag(): Tags {
        return this.data.href ? "a" : "span";
    }

    componentSpecificStyles(): b.IBobrilStyleArray {
        return [badgeStyles.badge, badgeStyles[this.data.variant ?? "primary"], this.data.pill && badgeStyles.pill];
    }
}

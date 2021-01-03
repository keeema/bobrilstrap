import * as b from "bobril";
import { Tags } from "../../utils/tags";
import { backgroundColor, BackgroundGradientColor } from "../utilities/color";
import { IBaseElementDataWithChildren, BaseElement } from "./BaseElement";

export type BadgeVariant = BackgroundGradientColor;

export const badgeStyles = {
    badge: b.styleDef("badge"),
    pill: b.styleDef("rounded-pill"),
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
        return [badgeStyles.badge, backgroundColor(this.data.variant ?? "primary"), this.data.pill && badgeStyles.pill];
    }
}

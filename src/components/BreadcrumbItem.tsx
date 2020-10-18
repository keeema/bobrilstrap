import * as b from "bobril";
import { IBaseElementData, BaseElement } from "./BaseElement";

export const breadcrumbItemStyles = {
    breadcrumbItem: b.styleDef("breadcrumb-item"),
    active: b.styleDef("active"),
};

export interface IBreadcrumbItemData extends IBaseElementData {
    active?: boolean;
}

export class BreadcrumbItem extends BaseElement<IBreadcrumbItemData> {
    static id: string = "bobrilstrap-breadcrumb-item";
    readonly componentProperties: (keyof IBreadcrumbItemData)[] = ["active"];

    get tag(): string {
        return "li";
    }

    get componentSpecificStyles(): b.IBobrilStyleArray {
        return [breadcrumbItemStyles.breadcrumbItem, this.data.active && breadcrumbItemStyles.active];
    }
}

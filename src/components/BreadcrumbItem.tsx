import * as b from "bobril";
import { IBaseElementData, BaseElement } from "./BaseElement";

export const breadcrumbItemStyles = {
    breadcrumbItem: b.styleDef("breadcrumb-item"),
};

export interface IBreadcrumbItemData extends IBaseElementData {
    active?: boolean;
}

export class BreadcrumbItem extends BaseElement<IBreadcrumbItemData> {
    static id: string = "bobrilstrap-breadcrumb-item";
    readonly componentProperties: (keyof IBreadcrumbItemData)[] = [];

    get tag(): string {
        return "li";
    }

    componentSpecificStyles(): b.IBobrilStyleArray {
        return [breadcrumbItemStyles.breadcrumbItem];
    }
}

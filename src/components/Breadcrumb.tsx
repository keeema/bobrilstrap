import * as b from "bobril";
import { IBaseElementData, BaseElement } from "./BaseElement";
import { BreadcrumbItem } from "./BreadcrumbItem";

export const breadcrumbStyles = {
    breadcrumb: b.styleDef("breadcrumb"),
};

export interface IBreadcrumbData extends IBaseElementData {}

export class Breadcrumb extends BaseElement<IBreadcrumbData> {
    static id: string = "bobrilstrap-breadcrumb";
    static Item = BreadcrumbItem;
    readonly componentProperties: (keyof IBreadcrumbData)[] = [];

    get tag(): string {
        return "ol";
    }

    componentSpecificStyles(): b.IBobrilStyleArray {
        return [breadcrumbStyles.breadcrumb];
    }
}

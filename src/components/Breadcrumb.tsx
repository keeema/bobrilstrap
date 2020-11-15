import * as b from "bobril";
import { IBaseElementDataWithChildren, BaseElement } from "./BaseElement";
import { BreadcrumbItem } from "./BreadcrumbItem";

export const breadcrumbStyles = {
    breadcrumb: b.styleDef("breadcrumb"),
};

export interface IBreadcrumbData extends IBaseElementDataWithChildren {}

export class Breadcrumb extends BaseElement<IBreadcrumbData> {
    static id: string = "bobrilstrap-breadcrumb";
    static Item = BreadcrumbItem;
    componentProperties = (): (keyof IBreadcrumbData)[] => [];

    get tag(): string {
        return "ol";
    }

    componentSpecificStyles(): b.IBobrilStyleArray {
        return [breadcrumbStyles.breadcrumb];
    }
}

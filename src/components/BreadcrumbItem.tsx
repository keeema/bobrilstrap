import * as b from "bobril";
import { Tags } from "../../helpers/tags";
import { IBaseElementDataWithChildren, BaseElement } from "./BaseElement";

export const breadcrumbItemStyles = {
    breadcrumbItem: b.styleDef("breadcrumb-item"),
};

export interface IBreadcrumbItemData extends IBaseElementDataWithChildren {
    active?: boolean;
}

export class BreadcrumbItem extends BaseElement<IBreadcrumbItemData> {
    static id: string = "bobrilstrap-breadcrumb-item";
    componentProperties = (): (keyof IBreadcrumbItemData)[] => [];

    get tag(): Tags {
        return "li";
    }

    componentSpecificStyles(): b.IBobrilStyleArray {
        return [breadcrumbItemStyles.breadcrumbItem];
    }
}

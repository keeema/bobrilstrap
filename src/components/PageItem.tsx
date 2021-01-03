import * as b from "bobril";
import { Tags } from "../../utils/tags";
import { IBaseElementDataWithChildren, BaseElement } from "./BaseElement";

export const pageItemStyles = {
    pageItem: b.styleDef("page-item"),
    disabled: b.styleDef("disabled"),
};

export interface IPageItemData extends IBaseElementDataWithChildren {}

export class PageItem extends BaseElement<IPageItemData> {
    static id: string = "bobrilstrap-page-item";

    get tag(): Tags {
        return "li";
    }

    componentProperties(): (keyof IPageItemData)[] {
        return [];
    }

    componentSpecificStyles(): b.IBobrilStyleArray {
        return [pageItemStyles.pageItem, this.data.disabled && pageItemStyles.disabled];
    }
}

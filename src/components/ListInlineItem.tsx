import * as b from "bobril";
import { Tags } from "../../utils/tags";
import { IBaseElementDataWithChildren, BaseElement } from "./BaseElement";

export const listItemStyles = {
    listInlineItem: b.styleDef("list-inline-item"),
};

export interface IListInlineItemData extends IBaseElementDataWithChildren {}

export class ListInlineItem extends BaseElement<IListInlineItemData> {
    static id: string = "bobrilstrap-list-inline-item";

    get tag(): Tags {
        return "li";
    }

    componentProperties(): (keyof IListInlineItemData)[] {
        return [];
    }

    componentSpecificStyles(): b.IBobrilStyleArray {
        return [listItemStyles.listInlineItem];
    }
}

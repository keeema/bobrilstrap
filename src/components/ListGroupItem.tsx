import * as b from "bobril";
import { Tags } from "../../helpers/tags";
import { IBaseElementDataWithChildren, BaseElement } from "./BaseElement";

export const listGroupItemStyles = {
    listGroupItem: b.styleDef("list-group-item"),
};

export interface IListGroupItemData extends IBaseElementDataWithChildren {}

export class ListGroupItem extends BaseElement<IListGroupItemData> {
    static id: string = "bobrilstrap-list-group-item";
    componentProperties = (): (keyof IListGroupItemData)[] => [];

    get tag(): Tags {
        return "li";
    }

    componentSpecificStyles(): b.IBobrilStyleArray {
        return [listGroupItemStyles.listGroupItem];
    }
}

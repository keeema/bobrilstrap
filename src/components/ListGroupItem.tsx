import * as b from "bobril";
import { IBaseElementDataWithChildren, BaseElement } from "./BaseElement";

export const listGroupItemStyles = {
    listGroupItem: b.styleDef("list-group-item"),
};

export interface IListGroupItemData extends IBaseElementDataWithChildren {}

export class ListGroupItem extends BaseElement<IListGroupItemData> {
    static id: string = "bobrilstrap-list-group-item";
    readonly componentProperties: (keyof IListGroupItemData)[] = [];

    get tag(): string {
        return "li";
    }

    componentSpecificStyles(): b.IBobrilStyleArray {
        return [listGroupItemStyles.listGroupItem];
    }
}

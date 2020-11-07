import * as b from "bobril";
import { IBaseElementDataWithChildren, BaseElement } from "./BaseElement";
import { ListGroupItem } from "./ListGroupItem";

export const listGroupStyles = {
    listGroup: b.styleDef("list-group"),
    flush: b.styleDef("list-group-flush"),
};

export interface IListGroupData extends IBaseElementDataWithChildren {
    flush?: boolean;
}

export class ListGroup extends BaseElement<IListGroupData> {
    static id: string = "bobrilstrap-list-group";
    static Item = ListGroupItem;

    readonly componentProperties: (keyof IListGroupData)[] = ["flush"];

    get tag(): string {
        return "ul";
    }

    componentSpecificStyles(): b.IBobrilStyleArray {
        return [listGroupStyles.listGroup, this.data.flush && listGroupStyles.flush];
    }
}

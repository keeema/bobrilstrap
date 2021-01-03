import * as b from "bobril";
import { createFilledDictionary } from "../../utils/dict";
import { Tags } from "../../utils/tags";
import { Breakpoint, breakpoints } from "../layouts/breakpoint";
import { IBaseElementDataWithChildren, BaseElement, IAllAttrs } from "./BaseElement";
import { ListGroupItem } from "./ListGroupItem";

export const listGroupStyles = {
    listGroup: b.styleDef("list-group"),
    horizontal: b.styleDef("list-group-horizontal"),
    horizontalSize: createFilledDictionary(
        breakpoints.map((breakpoint) => [breakpoint, b.styleDef(`list-group-horizontal-${breakpoint}`)])
    ),
    flush: b.styleDef("list-group-flush"),
};

export interface IListGroupData extends IBaseElementDataWithChildren {
    flush?: boolean;
    actions?: boolean;
    tabs?: boolean;
    horizontal?: boolean | Breakpoint;
}

export class ListGroup extends BaseElement<IListGroupData> {
    static id: string = "bobrilstrap-list-group";
    static Item = ListGroupItem;

    componentProperties = (): (keyof IListGroupData)[] => ["flush", "tabs", "horizontal", "actions"];

    get tag(): Tags {
        return this.data.actions ? "div" : "ul";
    }

    componentAdditionalAttributes(): IAllAttrs {
        return {
            ...super.componentAdditionalAttributes(),
            role: this.data.role || (this.data.tabs ? "tablist" : undefined),
        };
    }

    componentSpecificStyles(): b.IBobrilStyleArray {
        return [
            listGroupStyles.listGroup,
            this.data.flush && listGroupStyles.flush,
            this.data.horizontal &&
                (this.data.horizontal === true ? listGroupStyles.horizontal : listGroupStyles.horizontalSize(this.data.horizontal)),
        ];
    }
}

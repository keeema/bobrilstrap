import * as b from "bobril";
import { IBaseElementDataWithChildren, BaseElement } from "./BaseElement";
import { ListInlineItem } from "./ListInlineItem";

export const listStyles = {
    unstyled: b.styleDef("list-unstyled"),
    inline: b.styleDef("list-inline"),
};

export interface IListData extends IBaseElementDataWithChildren {
    unstyled?: boolean;
    inline?: boolean;
}

export class List extends BaseElement<IListData> {
    static id: string = "bobrilstrap-list";
    static InlineItem = ListInlineItem;

    componentProperties(): (keyof IListData)[] {
        return ["unstyled", "inline"];
    }

    componentSpecificStyles(): b.IBobrilStyleArray {
        return [this.data.unstyled && listStyles.unstyled, this.data.inline && listStyles.unstyled];
    }
}

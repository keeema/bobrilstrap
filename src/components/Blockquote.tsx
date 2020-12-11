import * as b from "bobril";
import { Tags } from "../../utils/tags";
import { IBaseElementDataWithChildren, BaseElement } from "./BaseElement";
import { cardBodyStyles } from "./CardBody";
import { BlockquoteFooter } from "./BlockquoteFooter";

export const blockquoteStyles = {
    blockquote: b.styleDef("blockquote"),
};

export interface IBlockquoteData extends IBaseElementDataWithChildren {
    "card-body"?: boolean;
}

export class Blockquote extends BaseElement<IBlockquoteData> {
    static id: string = "bobrilstrap-blockquote";
    static Footer = BlockquoteFooter;

    componentProperties = (): (keyof IBlockquoteData)[] => ["card-body"];

    get tag(): Tags {
        return "blockquote";
    }

    componentSpecificStyles(): b.IBobrilStyleArray {
        return [blockquoteStyles.blockquote, this.data["card-body"] && cardBodyStyles.cardBody];
    }
}

import * as b from "bobril";
import { IBaseElementDataWithChildren, BaseElement } from "../../components/BaseElement";
import { cardBodyStyles } from "../../components/CardBody";
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

    get tag(): string {
        return "blockquote";
    }

    componentSpecificStyles(): b.IBobrilStyleArray {
        return [blockquoteStyles.blockquote, this.data["card-body"] && cardBodyStyles.cardBody];
    }
}

import * as b from "bobril";
import { IBaseElementData, BaseElement } from "../../components/BaseElement";
import { BlockquoteFooter } from "./BlockquoteFooter";

export const blockquoteStyles = {
    blockquote: b.styleDef("blockquote"),
};

export interface IBlockquoteData extends IBaseElementData {}

export class Blockquote extends BaseElement<IBlockquoteData> {
    static id: string = "bobrilstrap-blockquote";
    static Footer = BlockquoteFooter;

    readonly componentProperties: (keyof IBlockquoteData)[] = [];

    get tag(): string {
        return "blockquote";
    }

    componentSpecificStyles(): b.IBobrilStyleArray {
        return [blockquoteStyles.blockquote];
    }
}

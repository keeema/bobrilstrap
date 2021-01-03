import * as b from "bobril";
import { Tags } from "../../utils/tags";
import { IBaseElementDataWithChildren, BaseElement } from "./BaseElement";

export const blockquoteFooterStyles = {
    footer: b.styleDef("blockquote-footer"),
};

export interface IBlockquoteFooterData extends IBaseElementDataWithChildren {}

export class BlockquoteFooter extends BaseElement<IBlockquoteFooterData> {
    static id: string = "bobrilstrap-blockquote-footer";
    componentProperties = (): (keyof IBlockquoteFooterData)[] => [];

    get tag(): Tags {
        return "figcaption";
    }

    componentSpecificStyles(): b.IBobrilStyleArray {
        return [blockquoteFooterStyles.footer];
    }
}

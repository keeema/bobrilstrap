import * as b from "bobril";
import { Tags } from "../../helpers/tags";
import { IBaseElementDataWithChildren, BaseElement } from "./BaseElement";

export const blockquoteFooterStyles = {
    footer: b.styleDef("blockquote-footer"),
};

export interface IBlockquoteFooterData extends IBaseElementDataWithChildren {}

export class BlockquoteFooter extends BaseElement<IBlockquoteFooterData> {
    static id: string = "bobrilstrap-blockquote-footer";
    componentProperties = (): (keyof IBlockquoteFooterData)[] => [];

    get tag(): Tags {
        return "footer";
    }

    componentSpecificStyles(): b.IBobrilStyleArray {
        return [blockquoteFooterStyles.footer];
    }
}

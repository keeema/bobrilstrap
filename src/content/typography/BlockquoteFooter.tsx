import * as b from "bobril";
import { IBaseElementData, BaseElement } from "../../components/BaseElement";

export const blockquoteFooterStyles = {
    footer: b.styleDef("blockquote-footer"),
};

export interface IBlockquoteFooterData extends IBaseElementData {}

export class BlockquoteFooter extends BaseElement<IBlockquoteFooterData> {
    static id: string = "bobrilstrap-blockquote-footer";
    readonly componentProperties: (keyof IBlockquoteFooterData)[] = [];

    get tag(): string {
        return "footer";
    }

    componentSpecificStyles(): b.IBobrilStyleArray {
        return [blockquoteFooterStyles.footer];
    }
}

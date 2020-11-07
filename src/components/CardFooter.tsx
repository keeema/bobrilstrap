import * as b from "bobril";
import { IBaseElementDataWithChildren, BaseElement } from "./BaseElement";

export const cardFooterStyles = {
    cardFooter: b.styleDef("card-footer"),
};

export interface ICardFooterData extends IBaseElementDataWithChildren {}

export class CardFooter extends BaseElement<ICardFooterData> {
    static id: string = "bobrilstrap-card-footer";
    readonly componentProperties: (keyof ICardFooterData)[] = [];

    componentSpecificStyles(): b.IBobrilStyleArray {
        return [cardFooterStyles.cardFooter];
    }
}

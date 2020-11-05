import * as b from "bobril";
import { IBaseElementData, BaseElement } from "./BaseElement";

export const cardColumnsStyles = {
    cardColumns: b.styleDef("card-columns"),
};

export interface ICardColumnsData extends IBaseElementData {}

export class CardColumns extends BaseElement<ICardColumnsData> {
    static id: string = "bobrilstrap-card-columns";
    readonly componentProperties: (keyof ICardColumnsData)[] = [];

    componentSpecificStyles(): b.IBobrilStyleArray {
        return [cardColumnsStyles.cardColumns];
    }
}

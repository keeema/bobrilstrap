import * as b from "bobril";
import { IBaseElementDataWithChildren, BaseElement } from "./BaseElement";

export const cardColumnsStyles = {
    cardColumns: b.styleDef("card-columns"),
};

export interface ICardColumnsData extends IBaseElementDataWithChildren {}

export class CardColumns extends BaseElement<ICardColumnsData> {
    static id: string = "bobrilstrap-card-columns";
    componentProperties = (): (keyof ICardColumnsData)[] => [];

    componentSpecificStyles(): b.IBobrilStyleArray {
        return [cardColumnsStyles.cardColumns];
    }
}

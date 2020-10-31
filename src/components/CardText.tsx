import * as b from "bobril";
import { IBaseElementData, BaseElement } from "./BaseElement";

export const cardTextStyles = {
    cardText: b.styleDef("card-text"),
};

export interface ICardTextData extends IBaseElementData {}

export class CardText extends BaseElement<ICardTextData> {
    static id: string = "bobrilstrap-card-text";
    readonly componentProperties: (keyof ICardTextData)[] = [];

    get tag(): string {
        return "p";
    }

    componentSpecificStyles(): b.IBobrilStyleArray {
        return [cardTextStyles.cardText];
    }
}

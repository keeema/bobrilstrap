import * as b from "bobril";
import { IBaseElementData, BaseElement } from "./BaseElement";

export const cardDeckStyles = {
    cardDeck: b.styleDef("card-deck"),
};

export interface ICardDeckData extends IBaseElementData {}

export class CardDeck extends BaseElement<ICardDeckData> {
    static id: string = "bobrilstrap-card-deck";
    readonly componentProperties: (keyof ICardDeckData)[] = [];

    componentSpecificStyles(): b.IBobrilStyleArray {
        return [cardDeckStyles.cardDeck];
    }
}

import * as b from "bobril";
import { IBaseElementData, BaseElement } from "./BaseElement";

export const cardTitleStyles = {
    cardTitle: b.styleDef("card-title"),
};

export interface ICardTitleData extends IBaseElementData {}

export class CardTitle extends BaseElement<ICardTitleData> {
    static id: string = "bobrilstrap-card-title";
    readonly componentProperties: (keyof ICardTitleData)[] = [];

    get tag(): string {
        return "h5";
    }

    componentSpecificStyles(): b.IBobrilStyleArray {
        return [cardTitleStyles.cardTitle];
    }
}

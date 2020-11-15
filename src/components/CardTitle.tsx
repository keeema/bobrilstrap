import * as b from "bobril";
import { IBaseElementDataWithChildren, BaseElement } from "./BaseElement";

export const cardTitleStyles = {
    cardTitle: b.styleDef("card-title"),
};

export interface ICardTitleData extends IBaseElementDataWithChildren {}

export class CardTitle extends BaseElement<ICardTitleData> {
    static id: string = "bobrilstrap-card-title";
    componentProperties = (): (keyof ICardTitleData)[] => [];

    get tag(): string {
        return "h5";
    }

    componentSpecificStyles(): b.IBobrilStyleArray {
        return [cardTitleStyles.cardTitle];
    }
}

import * as b from "bobril";
import { IBaseElementData, BaseElement } from "./BaseElement";

export const cardSubtitleStyles = {
    cardSubtitle: b.styleDef("card-subtitle"),
};

export interface ICardSubtitleData extends IBaseElementData {}

export class CardSubtitle extends BaseElement<ICardSubtitleData> {
    static id: string = "bobrilstrap-card-subtitle";
    readonly componentProperties: (keyof ICardSubtitleData)[] = [];

    get tag(): string {
        return "h6";
    }

    componentSpecificStyles(): b.IBobrilStyleArray {
        return [cardSubtitleStyles.cardSubtitle];
    }
}

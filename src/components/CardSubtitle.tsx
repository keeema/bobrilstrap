import * as b from "bobril";
import { Tags } from "../../utils/tags";
import { IBaseElementDataWithChildren, BaseElement } from "./BaseElement";

export const cardSubtitleStyles = {
    cardSubtitle: b.styleDef("card-subtitle"),
};

export interface ICardSubtitleData extends IBaseElementDataWithChildren {}

export class CardSubtitle extends BaseElement<ICardSubtitleData> {
    static id: string = "bobrilstrap-card-subtitle";
    componentProperties = (): (keyof ICardSubtitleData)[] => [];

    get tag(): Tags {
        return "h6";
    }

    componentSpecificStyles(): b.IBobrilStyleArray {
        return [cardSubtitleStyles.cardSubtitle];
    }
}

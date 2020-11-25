import * as b from "bobril";
import { Tags } from "../../helpers/tags";
import { IBaseElementDataWithChildren, BaseElement } from "./BaseElement";

export const cardTextStyles = {
    cardText: b.styleDef("card-text"),
};

export interface ICardTextData extends IBaseElementDataWithChildren {}

export class CardText extends BaseElement<ICardTextData> {
    static id: string = "bobrilstrap-card-text";
    componentProperties = (): (keyof ICardTextData)[] => [];

    get tag(): Tags {
        return "p";
    }

    componentSpecificStyles(): b.IBobrilStyleArray {
        return [cardTextStyles.cardText];
    }
}

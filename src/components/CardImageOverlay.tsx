import * as b from "bobril";
import { IBaseElementData, BaseElement } from "./BaseElement";

export const cardImageOverlayStyles = {
    cardImageOverlay: b.styleDef("card-img-overlay"),
};

export interface ICardImageOverlayData extends IBaseElementData {}

export class CardImageOverlay extends BaseElement<ICardImageOverlayData> {
    static id: string = "bobrilstrap-card-image-overlay";
    readonly componentProperties: (keyof ICardImageOverlayData)[] = [];

    componentSpecificStyles(): b.IBobrilStyleArray {
        return [cardImageOverlayStyles.cardImageOverlay];
    }
}

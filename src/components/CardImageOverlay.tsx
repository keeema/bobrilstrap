import * as b from "bobril";
import { IBaseElementDataWithChildren, BaseElement } from "./BaseElement";

export const cardImageOverlayStyles = {
    cardImageOverlay: b.styleDef("card-img-overlay"),
};

export interface ICardImageOverlayData extends IBaseElementDataWithChildren {}

export class CardImageOverlay extends BaseElement<ICardImageOverlayData> {
    static id: string = "bobrilstrap-card-image-overlay";
    readonly componentProperties: (keyof ICardImageOverlayData)[] = [];

    componentSpecificStyles(): b.IBobrilStyleArray {
        return [cardImageOverlayStyles.cardImageOverlay];
    }
}

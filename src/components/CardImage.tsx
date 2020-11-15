import * as b from "bobril";
import { IBaseElementDataWithChildren, BaseElement } from "./BaseElement";
import { CardImageOverlay } from "./CardImageOverlay";

export type CardPosition = "top" | "bottom";

export const cardImageStyles = {
    image: b.styleDef("card-img"),
    top: b.styleDef("card-img-top"),
    bottom: b.styleDef("card-img-bottom"),
};

export interface ICardImageData extends IBaseElementDataWithChildren {
    position?: CardPosition;
}

export class CardImage extends BaseElement<ICardImageData> {
    static id: string = "bobrilstrap-card-image";
    static Overlay = CardImageOverlay;
    componentProperties = (): (keyof ICardImageData)[] => ["position"];

    get tag(): string {
        return "img";
    }

    componentSpecificStyles(): b.IBobrilStyleArray {
        return [this.data.position ? cardImageStyles[this.data.position] : cardImageStyles.image];
    }
}

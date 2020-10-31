import * as b from "bobril";
import { IBaseElementData, BaseElement } from "./BaseElement";

export type CardPosition = "top" | "bottom";

export const cardImageStyles = {
    top: b.styleDef("card-img-top"),
    bottom: b.styleDef("card-img-bottom"),
};

export interface ICardImageData extends IBaseElementData {
    position?: CardPosition;
}

export class CardImage extends BaseElement<ICardImageData> {
    static id: string = "bobrilstrap-card-image";
    readonly componentProperties: (keyof ICardImageData)[] = ["position"];

    get tag(): string {
        return "img";
    }

    componentSpecificStyles(): b.IBobrilStyleArray {
        return [cardImageStyles[this.data.position ?? "top"]];
    }
}

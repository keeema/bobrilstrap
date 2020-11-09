import * as b from "bobril";
import { IBaseElementDataWithChildren, BaseElement } from "./BaseElement";

export const carouselCaptionStyles = {
    carouselCaption: b.styleDef("carousel-caption"),
};

export interface ICarouselCaptionData extends IBaseElementDataWithChildren {}

export class CarouselCaption extends BaseElement<ICarouselCaptionData> {
    static id: string = "bobrilstrap-carousel-caption";
    readonly componentProperties: (keyof ICarouselCaptionData)[] = [];

    componentSpecificStyles(): b.IBobrilStyleArray {
        return [carouselCaptionStyles.carouselCaption];
    }
}

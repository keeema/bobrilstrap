import * as b from "bobril";
import { IBaseElementData, BaseElement } from "./BaseElement";

export const carouselInnerStyles = {
    carouselInner: b.styleDef("carousel-inner"),
    slide: b.styleDef("slide"),
};

export interface ICarouselInnerData extends IBaseElementData {}

export class CarouselInner extends BaseElement<ICarouselInnerData> {
    static id: string = "bobrilstrap-carousel-inner";
    readonly componentProperties: (keyof ICarouselInnerData)[] = [];
    componentSpecificStyles(): b.IBobrilStyleArray {
        return [carouselInnerStyles.carouselInner];
    }
}

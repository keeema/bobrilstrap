import * as b from "bobril";
import { IBaseElementDataWithChildren, BaseElement } from "./BaseElement";

export const carouselInnerStyles = {
    carouselInner: b.styleDef("carousel-inner"),
    slide: b.styleDef("slide"),
};

export interface ICarouselInnerData extends IBaseElementDataWithChildren {}

export class CarouselInner extends BaseElement<ICarouselInnerData> {
    static id: string = "bobrilstrap-carousel-inner";
    componentProperties = (): (keyof ICarouselInnerData)[] => [];
    componentSpecificStyles(): b.IBobrilStyleArray {
        return [carouselInnerStyles.carouselInner];
    }
}

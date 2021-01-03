import * as b from "bobril";
import { IBaseElementDataWithChildren, BaseElement } from "./BaseElement";

export const carouselItemStyles = {
    carouselItem: b.styleDef("carousel-item"),
    slide: b.styleDef("slide"),
};

export interface ICarouselItemData extends IBaseElementDataWithChildren {
    active?: boolean;
}

export class CarouselItem extends BaseElement<ICarouselItemData> {
    static id: string = "bobrilstrap-carousel-item";
    componentProperties = (): (keyof ICarouselItemData)[] => [];

    componentSpecificStyles(): b.IBobrilStyleArray {
        return [carouselItemStyles.carouselItem];
    }
}

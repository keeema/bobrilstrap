import * as b from "bobril";
import { IBaseElementData, BaseElement } from "./baseElement";

export const carouselItemStyles = {
    carouselItem: b.styleDef("carousel-item"),
    slide: b.styleDef("slide"),
    active: b.styleDef("active"),
};

export interface ICarouselItemData extends IBaseElementData {
    active?: boolean;
}

export class CarouselItem extends BaseElement<ICarouselItemData> {
    static id: string = "bobrilstrap-carousel-item";
    readonly componentProperties: (keyof ICarouselItemData)[] = ["active"];

    get componentSpecificStyles(): b.IBobrilStyleArray {
        return [carouselItemStyles.carouselItem, this.data.active && carouselItemStyles.active];
    }
}

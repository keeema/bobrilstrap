import * as b from "bobril";
import { IBaseElementData, BaseElement } from "./BaseElement";

export const carouselIndicatorStyles = {
    carouselIndicators: b.styleDef("carousel-indicators"),
    active: b.styleDef("active"),
};

export interface ICarouselIndicatorsItemData extends IBaseElementData {
    active?: boolean;
}

export class CarouselIndicatorsItem extends BaseElement<ICarouselIndicatorsItemData> {
    static id: string = "bobrilstrap-carousel-indicators-item";
    get tag(): string {
        return "li";
    }
    readonly componentProperties: (keyof ICarouselIndicatorsItemData)[] = [];

    componentSpecificStyles(): b.IBobrilStyleArray {
        return [this.data.active && carouselIndicatorStyles.active];
    }
}
export interface ICarouselIndicatorsData extends IBaseElementData {}

export class CarouselIndicators extends BaseElement<ICarouselIndicatorsData> {
    static Item = CarouselIndicatorsItem;
    static id: string = "bobrilstrap-carousel-indicators";
    get tag(): string {
        return "ol";
    }
    readonly componentProperties: (keyof ICarouselIndicatorsData)[] = [];
    componentSpecificStyles(): b.IBobrilStyleArray {
        return [carouselIndicatorStyles.carouselIndicators];
    }
}

import * as b from "bobril";
import { IBaseElementDataWithChildren, BaseElement } from "./BaseElement";

export const carouselIndicatorStyles = {
    carouselIndicators: b.styleDef("carousel-indicators"),
};

export interface ICarouselIndicatorsItemData extends IBaseElementDataWithChildren {
    active?: boolean;
}

export class CarouselIndicatorsItem extends BaseElement<ICarouselIndicatorsItemData> {
    static id: string = "bobrilstrap-carousel-indicators-item";
    get tag(): string {
        return "li";
    }
    componentProperties = (): (keyof ICarouselIndicatorsItemData)[] => [];

    componentSpecificStyles(): b.IBobrilStyleArray {
        return [];
    }
}
export interface ICarouselIndicatorsData extends IBaseElementDataWithChildren {}

export class CarouselIndicators extends BaseElement<ICarouselIndicatorsData> {
    static Item = CarouselIndicatorsItem;
    static id: string = "bobrilstrap-carousel-indicators";
    get tag(): string {
        return "ol";
    }
    componentProperties = (): (keyof ICarouselIndicatorsData)[] => [];
    componentSpecificStyles(): b.IBobrilStyleArray {
        return [carouselIndicatorStyles.carouselIndicators];
    }
}

import * as b from "bobril";
import { IBaseElementData, BaseElement } from "./baseElement";

const styles = {
    carouselIndicators: b.styleDef("carousel-indicators"),
    active: b.styleDef("active"),
};

export interface ICarouselIndicatorsItemData extends IBaseElementData {
    active?: boolean;
}

export class CarouselIndicatorsItem extends BaseElement<ICarouselIndicatorsItemData> {
    static id: string = "bobrilstrap-carousel-indicators-item";
    readonly tag: string = "li";
    readonly componentProperties: (keyof ICarouselIndicatorsItemData)[] = [];

    get componentSpecificStyles(): b.IBobrilStyleArray {
        return [this.data.active && styles.active];
    }
}
export interface ICarouselIndicatorsData extends IBaseElementData {}

export class CarouselIndicators extends BaseElement<ICarouselIndicatorsData> {
    static Item = CarouselIndicatorsItem;
    static id: string = "bobrilstrap-carousel-indicators";
    readonly tag: string = "ol";
    readonly componentProperties: (keyof ICarouselIndicatorsData)[] = [];
    readonly componentSpecificStyles: b.IBobrilStyleArray = [styles.carouselIndicators];
}

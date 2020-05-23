import * as b from "bobril";
import { IBaseElementData, BaseElement } from "./baseElement";

const styles = {
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
        return [styles.carouselItem, this.data.active && styles.active];
    }
}

import * as b from "bobril";
import { IBaseElementData, BaseElement } from "./baseElement";

const styles = {
    carouselInner: b.styleDef("carousel-inner"),
    slide: b.styleDef("slide"),
};

export interface ICarouselInnerData extends IBaseElementData {}

export class CarouselInner extends BaseElement<ICarouselInnerData> {
    static id: string = "bobrilstrap-carousel-inner";
    readonly componentProperties: (keyof ICarouselInnerData)[] = [];
    readonly componentSpecificStyles: b.IBobrilStyleArray = [styles.carouselInner];
}

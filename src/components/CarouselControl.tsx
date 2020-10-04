import * as b from "bobril";
import { IBaseElementData, BaseElement, IAttrs } from "./BaseElement";

export const carouselControlStyles = {
    carouselControlPrev: b.styleDef("carousel-control-prev"),
    carouselControlPrevIcon: b.styleDef("carousel-control-prev-icon"),
    carouselControlNext: b.styleDef("carousel-control-next"),
    carouselControlNextIcon: b.styleDef("carousel-control-next-icon"),
};

export interface ICarouselControlData extends IBaseElementData {}

abstract class CarouselControl extends BaseElement<ICarouselControlData> {
    readonly componentProperties: (keyof ICarouselControlData)[] = [];
    get tag(): string {
        return "a";
    }
    get componentAdditionalAttributes(): IAttrs {
        return { href: "javascript:void(0);" };
    }
}

abstract class CarouselControlIcon extends BaseElement<ICarouselControlData> {
    get tag(): string {
        return "span";
    }
    readonly componentProperties: (keyof ICarouselControlData)[] = [];
}

class CarouselControlPrevIcon extends CarouselControlIcon {
    static id: string = "bobrilstrap-carousel-control-prev-icon";
    readonly componentSpecificStyles: b.IBobrilStyleArray = [carouselControlStyles.carouselControlPrevIcon];
}

class CarouselControlNextIcon extends CarouselControlIcon {
    static id: string = "bobrilstrap-carousel-control-next-icon";
    readonly componentSpecificStyles: b.IBobrilStyleArray = [carouselControlStyles.carouselControlNextIcon];
}

export class CarouselControlPrev extends CarouselControl {
    static id: string = "bobrilstrap-carousel-control-prev";
    static Icon = CarouselControlPrevIcon;
    readonly componentSpecificStyles: b.IBobrilStyleArray = [carouselControlStyles.carouselControlPrev];
}

export class CarouselControlNext extends CarouselControl {
    static id: string = "bobrilstrap-carousel-control-next";
    static Icon = CarouselControlNextIcon;
    readonly componentSpecificStyles: b.IBobrilStyleArray = [carouselControlStyles.carouselControlNext];

    get componentAdditionalAttributes(): IAttrs {
        return { href: "javascript:void(0);" };
    }
}

import * as b from "bobril";
import { IBaseElementDataWithChildren, BaseElement, IAttrs } from "./BaseElement";

export const carouselControlStyles = {
    carouselControlPrev: b.styleDef("carousel-control-prev"),
    carouselControlPrevIcon: b.styleDef("carousel-control-prev-icon"),
    carouselControlNext: b.styleDef("carousel-control-next"),
    carouselControlNextIcon: b.styleDef("carousel-control-next-icon"),
};

export interface ICarouselControlData extends IBaseElementDataWithChildren {}

abstract class CarouselControl extends BaseElement<ICarouselControlData> {
    readonly componentProperties: (keyof ICarouselControlData)[] = [];
    get tag(): string {
        return "a";
    }
    componentAdditionalAttributes(): IAttrs {
        return {
            href: "javascript:void(0);",
            role: "button",
        };
    }
}

abstract class CarouselControlIcon extends BaseElement<ICarouselControlData> {
    get tag(): string {
        return "span";
    }
    readonly componentProperties: (keyof ICarouselControlData)[] = [];

    componentAdditionalAttributes(): IAttrs {
        return { "aria-hidden": this.data["aria-hidden"] !== undefined ? this.data["aria-hidden"] : true };
    }
}

class CarouselControlPrevIcon extends CarouselControlIcon {
    static id: string = "bobrilstrap-carousel-control-prev-icon";
    componentSpecificStyles = (): b.IBobrilStyleArray => [carouselControlStyles.carouselControlPrevIcon];
}

class CarouselControlNextIcon extends CarouselControlIcon {
    static id: string = "bobrilstrap-carousel-control-next-icon";
    componentSpecificStyles = (): b.IBobrilStyleArray => [carouselControlStyles.carouselControlNextIcon];
}

export class CarouselControlPrev extends CarouselControl {
    static id: string = "bobrilstrap-carousel-control-prev";
    static Icon = CarouselControlPrevIcon;
    componentSpecificStyles = (): b.IBobrilStyleArray => [carouselControlStyles.carouselControlPrev];
}

export class CarouselControlNext extends CarouselControl {
    static id: string = "bobrilstrap-carousel-control-next";
    static Icon = CarouselControlNextIcon;
    componentSpecificStyles = (): b.IBobrilStyleArray => [carouselControlStyles.carouselControlNext];

    componentAdditionalAttributes(): IAttrs {
        return { href: "javascript:void(0);" };
    }
}

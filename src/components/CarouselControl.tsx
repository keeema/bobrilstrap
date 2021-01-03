import * as b from "bobril";
import { Tags } from "../../utils/tags";
import { IBaseElementDataWithChildren, BaseElement, IAttrs } from "./BaseElement";

export const carouselControlStyles = {
    carouselControlPrev: b.styleDef("carousel-control-prev"),
    carouselControlPrevIcon: b.styleDef("carousel-control-prev-icon"),
    carouselControlNext: b.styleDef("carousel-control-next"),
    carouselControlNextIcon: b.styleDef("carousel-control-next-icon"),
};

export interface ICarouselControlData extends IBaseElementDataWithChildren {}

abstract class CarouselControl extends BaseElement<ICarouselControlData> {
    componentProperties = (): (keyof ICarouselControlData)[] => [];
    get tag(): Tags {
        return "a";
    }
    componentAdditionalAttributes(): IAttrs {
        return { ...super.componentAdditionalAttributes(), href: "javascript:void(0);", role: "button" };
    }
}

abstract class CarouselControlIcon extends BaseElement<ICarouselControlData> {
    get tag(): Tags {
        return "span";
    }
    componentProperties = (): (keyof ICarouselControlData)[] => [];

    componentAdditionalAttributes(): IAttrs {
        return {
            ...super.componentAdditionalAttributes(),
            "aria-hidden": this.data["aria-hidden"] !== undefined ? this.data["aria-hidden"] : true,
        };
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
        return { ...super.componentAdditionalAttributes(), href: "javascript:void(0);" };
    }
}

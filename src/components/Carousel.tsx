import * as b from "bobril";
import $ from "jquery";
import { IBaseElementData, BaseElement } from "./BaseElement";
import { CarouselOption, CarouselEventHandler } from "bootstrap";
import { pick } from "../../helpers/objectHelper";
import { CarouselInner } from "./CarouselInner";
import { CarouselItem } from "./CarouselItem";
import { CarouselControlPrev, CarouselControlNext } from "./CarouselControl";
import { CarouselIndicators } from "./CarouselIndicators";

export const carouselStyles = {
    carousel: b.styleDef("carousel"),
    slide: b.styleDef("slide"),
    carouselFade: b.styleDef("carousel-fade"),
};

export interface ICarouselActions {
    (action: "cycle" | "pause" | number | "prev" | "next" | "dispose"): void;
}

interface ICarouselElementData {
    "cross-fade"?: boolean;
    onCarouselCreated?(carousel: ICarouselActions, element: JQuery<HTMLDivElement>): void;
    onSlid?(event: CarouselEventHandler<HTMLDivElement>): void;
    onSlide?(event: CarouselEventHandler<HTMLDivElement>): void;
}

export type ICarouselData = ICarouselElementData & CarouselOption & IBaseElementData;

export class Carousel extends BaseElement<ICarouselData> {
    static Inner = CarouselInner;
    static Item = CarouselItem;
    static Control = { Prev: CarouselControlPrev, Next: CarouselControlNext };
    static Indicators = CarouselIndicators;

    static id: string = "bobrilstrap-carousel-inner";
    readonly carouselConfigProperties: (keyof CarouselOption)[] = ["interval", "keyboard", "slide", "pause", "ride", "wrap", "touch"];
    readonly carouselDataProperties: (keyof ICarouselElementData)[] = ["onCarouselCreated", "cross-fade"];
    readonly componentProperties: (keyof ICarouselData)[] = [...this.carouselDataProperties, ...this.carouselConfigProperties];

    componentSpecificStyles(): b.IBobrilStyleArray {
        return [carouselStyles.carousel, carouselStyles.slide, this.data["cross-fade"] && carouselStyles.carouselFade];
    }

    postInitDom(): void {
        const config = pick(this.data, ...this.carouselConfigProperties);
        const data = pick(this.data, ...this.carouselDataProperties);
        const carouselEl = $(this.element);
        carouselEl.carousel(config);
        carouselEl.on("slide.bs.carousel", (ev) => this.data.onSlide && this.data.onSlide(ev));
        carouselEl.on("slid.bs.carousel", (ev) => this.data.onSlid && this.data.onSlid(ev));
        data.onCarouselCreated && data.onCarouselCreated((action) => carouselEl.carousel(action), carouselEl);
    }
}

import * as b from "bobril";
import $ from "jquery";
import bootstrap from "bootstrap";
import { IBaseElementDataWithChildren, BaseElement } from "./BaseElement";
import { pick } from "../../utils/objectHelper";
import { CarouselInner } from "./CarouselInner";
import { CarouselItem } from "./CarouselItem";
import { CarouselControlPrev, CarouselControlNext } from "./CarouselControl";
import { CarouselIndicators } from "./CarouselIndicators";
import { CarouselCaption } from "./CarouselCaption";

export const carouselStyles = {
    carousel: b.styleDef("carousel"),
    slide: b.styleDef("slide"),
    carouselFade: b.styleDef("carousel-fade"),
    dark: b.styleDef("carousel-dark"),
};

export type ICarousel = bootstrap.Carousel & { to: (index: number) => void };

export interface ICarouselEvent extends JQuery.TriggeredEvent<HTMLDivElement, undefined, HTMLDivElement, HTMLDivElement> {
    direction: "left" | "right";
    relatedTarget: HTMLDivElement;
    from: number;
    to: number;
}

interface ICarouselElementData {
    "cross-fade"?: boolean;
    slide?: boolean;
    dark?: boolean;
    onCarouselCreated?(carousel: ICarousel, element: JQuery<HTMLDivElement>): void;
    onSlid?(ev: ICarouselEvent): void;
    onSlide?(ev: ICarouselEvent): void;
}

export type ICarouselData = ICarouselElementData & Partial<Omit<bootstrap.Carousel.Options, "slide">> & IBaseElementDataWithChildren;

export class Carousel extends BaseElement<ICarouselData> {
    static Caption = CarouselCaption;
    static Control = { Prev: CarouselControlPrev, Next: CarouselControlNext };
    static Indicators = CarouselIndicators;
    static Inner = CarouselInner;
    static Item = CarouselItem;

    static id: string = "bobrilstrap-carousel-inner";
    readonly carouselConfigProperties: (keyof Omit<bootstrap.Carousel.Options, "slide">)[] = [
        "interval",
        "keyboard",
        "pause",
        "wrap",
        "touch",
    ];
    readonly carouselDataProperties: (keyof ICarouselElementData)[] = ["onCarouselCreated", "slide", "cross-fade", "dark"];
    componentProperties = (): (keyof ICarouselData)[] => [...this.carouselDataProperties, ...this.carouselConfigProperties];

    componentSpecificStyles(): b.IBobrilStyleArray {
        return [
            carouselStyles.carousel,
            this.data.slide && carouselStyles.slide,
            this.data["cross-fade"] && carouselStyles.carouselFade,
            this.data.dark && carouselStyles.dark,
        ];
    }

    postInitDom(): void {
        const config = pick(this.data, ...this.carouselConfigProperties);
        const data = pick(this.data, ...this.carouselDataProperties);
        const jqueryElement = $(this.element);
        const carouselElement = new bootstrap.Carousel(this.element, config);

        jqueryElement.on("slide.bs.carousel", (ev) => this.data.onSlide && this.data.onSlide(ev as ICarouselEvent));
        jqueryElement.on("slid.bs.carousel", (ev) => this.data.onSlid && this.data.onSlid(ev as ICarouselEvent));
        data.onCarouselCreated && data.onCarouselCreated(carouselElement as ICarousel, jqueryElement);
    }
}

import * as b from "bobril";
import { Carousel } from "../index";
import { ICarouselActions } from "../src/components/carousel";
import { image1, image2, image3 } from "./carouselImages";

const w100 = b.styleDef("w-100");

export function CarouselExample(): b.IBobrilNode {
    const [carouselIndex, setCarouselIndex] = b.useState(0);
    const [carouselActions, setCarouselActions] = b.useState<ICarouselActions>(() => new Function());

    return (
        <Carousel
            crossFade
            pause={false}
            ride="carousel"
            keyboard
            onCarouselCreated={(actions) => setCarouselActions(() => actions)}
            onSlide={(ev) => setCarouselIndex(ev.to)}
        >
            <Carousel.Indicators>
                <Carousel.Indicators.Item active={carouselIndex === 0} onClick={() => carouselActions(0)} />
                <Carousel.Indicators.Item active={carouselIndex === 1} onClick={() => carouselActions(1)} />
                <Carousel.Indicators.Item active={carouselIndex === 2} onClick={() => carouselActions(2)} />
            </Carousel.Indicators>
            <Carousel.Inner>
                <Carousel.Item active>
                    <img src={image1} style={w100} />
                </Carousel.Item>
                <Carousel.Item>
                    <img src={image2} style={w100} />
                </Carousel.Item>
                <Carousel.Item>
                    <img src={image3} style={w100} />
                </Carousel.Item>
            </Carousel.Inner>
            <Carousel.Control.Prev onClick={() => carouselActions("prev")}>
                <Carousel.Control.Prev.Icon />
            </Carousel.Control.Prev>
            <Carousel.Control.Next onClick={() => carouselActions("next")}>
                <Carousel.Control.Next.Icon />
            </Carousel.Control.Next>
        </Carousel>
    );
}

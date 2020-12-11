import * as b from "bobril";
import { IRouteWithNavDefinition } from "../../../../common/routing";
import { Anchor } from "../../../../common/Anchor";
import { Example } from "../../../../common/Example";
import { Carousel, ICarousel, visuallyHidden } from "../../../../../index";
import { Code } from "../../../../common/Code";
import { Lead } from "../../../../common/Lead";
import { image1, image2, image3 } from "./carouselImages";
import { width } from "../../../../../src/utilities/sizing";
import { OptionsRow, OptionsTable } from "../../../../common/OptionsTable";

export const carouselRoute: IRouteWithNavDefinition = {
    url: "carousel",
    name: "carousel",
    label: "Carousel",
    handler: () => <Carousels />,
    subs: [
        {
            url: "example",
            name: "carousel-example",
            label: "Example",
            subs: [],
        },
        {
            url: "api",
            name: "carousel-api",
            label: "API",
            subs: [],
        },
    ],
};

export function Carousels(): b.IBobrilNode {
    return (
        <>
            <Anchor name="carousel">
                <h1>Carousel</h1>
            </Anchor>
            <Lead>A slideshow component for cycling through elements—images or slides of text—like a carousel.</Lead>
            <Anchor name="carousel-example">
                <h2>Example</h2>
            </Anchor>
            <p>
                Carousels don’t automatically normalize slide dimensions. As such, you may need to use additional utilities or custom styles
                to appropriately size content. While carousels support previous/next controls and indicators, they’re not explicitly
                required. Add and customize as you see fit.
            </p>
            <p>
                The <code>active</code> prop needs to be added to <strong>exactly one</strong> of the slides otherwise the carousel will not
                work properly.
            </p>
            <p>
                Add <code>cross-fade</code> prop as an addition to <code>slide</code> prop to animate transition with fading.
            </p>
            <Example>
                <CarouselExample images={exampleImages} />
            </Example>
            <Code language="tsx">{`export function CarouselExample({ images }: { images: { data: string; caption: string; text: string }[] }): b.IBobrilNode {
    const [carouselIndex, setCarouselIndex] = b.useState(0);
    const [carouselActions, setCarouselActions] = b.useState<ICarouselActions>(() => new Function());

    return (
        <Carousel
            slide
            pause={false}
            ride
            keyboard
            onCarouselCreated={(actions) => setCarouselActions(() => actions)}
            onSlide={(ev) => setCarouselIndex(ev.to)}
        >
            <Carousel.Indicators>
                {images.map((_, index) => (
                    <Carousel.Indicators.Item active={carouselIndex === index} onClick={() => carouselActions(index)} />
                ))}
            </Carousel.Indicators>
            <Carousel.Inner>
                {images.map((image, index) => (
                    <Carousel.Item active={index === 0}>
                        <img src={image.data} style={width(100)} />
                        <Carousel.Caption>
                            <h5>{image.caption}</h5>
                            <p>{image.text}</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                ))}
            </Carousel.Inner>
            <Carousel.Control.Prev onClick={() => carouselActions("prev")}>
                <Carousel.Control.Prev.Icon />
                <span style={srOnly}>Previous</span>
            </Carousel.Control.Prev>
            <Carousel.Control.Next onClick={() => carouselActions("next")}>
                <Carousel.Control.Next.Icon />
                <span style={srOnly}>Next</span>
            </Carousel.Control.Next>
        </Carousel>
    );
}

<CarouselExample images={exampleImages} />`}</Code>
            <Anchor name="carousel-api">
                <h2>API</h2>
            </Anchor>
            <p>
                Carousel is controlled by <code>controlActions</code> provided in the callback prop <code>onCarouselCreated</code>. It is
                recommended to use control logic similar to the example.
            </p>
            <OptionsTable>
                <OptionsRow>
                    {{
                        name: "interval",
                        type: "number",
                        defaultValue: "5000",
                        description:
                            "The amount of time to delay between automatically cycling an item. If false, carousel will not automatically cycle.",
                    }}
                </OptionsRow>
                <OptionsRow>
                    {{
                        name: "slide",
                        type: "boolean",
                        defaultValue: "false",
                        description: "Whether to slide images or just simply switch.",
                    }}
                </OptionsRow>
                <OptionsRow>
                    {{
                        name: "cross-fade",
                        type: "boolean",
                        defaultValue: "false",
                        description: (
                            <p>
                                Whether to slide with cross-fade animation. Prop <code>slide</code> is required.
                            </p>
                        ),
                    }}
                </OptionsRow>
                <OptionsRow>
                    {{
                        name: "keyboard",
                        type: "boolean",
                        defaultValue: "true",
                        description: "Whether the carousel should react to keyboard events.",
                    }}
                </OptionsRow>
                <OptionsRow>
                    {{
                        name: "pause",
                        type: `"hover" | false`,
                        defaultValue: "hover",
                        description: (
                            <p>
                                If set to <code>"hover"</code>, pauses the cycling of the carousel on <code>mouseenter</code> and resumes
                                the cycling of the carousel on <code>mouseleave</code>. If set to <code>false</code>, hovering over the
                                carousel won't pause it.
                            </p>
                        ),
                    }}
                </OptionsRow>
                <OptionsRow>
                    {{
                        name: "ride",
                        type: `"carousel" | boolean`,
                        defaultValue: "false",
                        description: `Autoplays the carousel after the user manually cycles the first item. If "carousel", autoplays the carousel on load.`,
                    }}
                </OptionsRow>
                <OptionsRow>
                    {{
                        name: "wrap",
                        type: "boolean",
                        defaultValue: "true",
                        description: "Whether the carousel should cycle continuously or have hard stops.",
                    }}
                </OptionsRow>
                <OptionsRow>
                    {{
                        name: "touch",
                        type: "boolean",
                        defaultValue: "true",
                        description: "Whether the carousel should support left/right swipe interactions on touchscreen devices.",
                    }}
                </OptionsRow>
                <OptionsRow>
                    {{
                        name: "onCarouselCreated",
                        type: "(carousel: ICarouselActions, element: JQuery<HTMLDivElement>): void",
                        defaultValue: "undefined",
                        description: (
                            <p>
                                This callback is fired when carousel is initialized and provides <code>carouselActions</code> as controller
                                instance.
                            </p>
                        ),
                    }}
                </OptionsRow>
                <OptionsRow>
                    {{
                        name: "onSlid",
                        type: "CarouselEventHandler<HTMLDivElement>): void",
                        defaultValue: "undefined",
                        description: "This callback is fired when the carousel has completed its slide transition.",
                    }}
                </OptionsRow>
                <OptionsRow>
                    {{
                        name: "onSlide",
                        type: "CarouselEventHandler<HTMLDivElement>): void",
                        defaultValue: "undefined",
                        description: (
                            <p>
                                This callback fires immediately when the <code>slide</code> instance method is invoked.
                            </p>
                        ),
                    }}
                </OptionsRow>
            </OptionsTable>
        </>
    );
}

export function CarouselExample({ images }: { images: { data: string; caption: string; text: string }[] }): b.IBobrilNode {
    const [carouselIndex, setCarouselIndex] = b.useState(0);
    const [carouselActions, setCarouselActions] = b.useState<ICarousel>({} as ICarousel);

    return (
        <Carousel
            slide
            pause={false}
            ride
            keyboard
            onCarouselCreated={(actions) => setCarouselActions(() => actions)}
            onSlide={(ev) => setCarouselIndex(ev.to)}
        >
            <Carousel.Indicators>
                {images.map((_, index) => (
                    <Carousel.Indicators.Item active={carouselIndex === index} onClick={() => carouselActions.to(index)} />
                ))}
            </Carousel.Indicators>
            <Carousel.Inner>
                {images.map((image, index) => (
                    <Carousel.Item active={index === 0}>
                        <img src={image.data} style={width(100)} />
                        <Carousel.Caption>
                            <h5>{image.caption}</h5>
                            <p>{image.text}</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                ))}
            </Carousel.Inner>
            <Carousel.Control.Prev onClick={() => carouselActions.prev()}>
                <Carousel.Control.Prev.Icon />
                <span style={visuallyHidden}>Previous</span>
            </Carousel.Control.Prev>
            <Carousel.Control.Next onClick={() => carouselActions.next()}>
                <Carousel.Control.Next.Icon />
                <span style={visuallyHidden}>Next</span>
            </Carousel.Control.Next>
        </Carousel>
    );
}

const exampleImages = [
    {
        data: image1,
        caption: "First slide label",
        text: "Nulla vitae elit libero, a pharetra augue mollis interdum.",
    },
    {
        data: image2,
        caption: "Second slide label",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
    {
        data: image3,
        caption: "Third slide label",
        text: "Praesent commodo cursus magna, vel scelerisque nisl consectetur.",
    },
];

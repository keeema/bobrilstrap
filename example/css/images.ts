import * as b from "bobril";
import * as bs from "../../index";
import { styles } from "../bsexample/css";
import { pre, langJs } from "../prettify/pre";
import { section } from "../common/section";

const imageData = `data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiIHN0YW5kYWxvbmU9InllcyI/PjxzdmcgeG1sbnM9Im
h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB3aWR0aD0iMTQwIiBoZWlnaHQ9IjE0MCIgdmlld0JveD0iMCAwIDE0MCAxNDAiIHByZXNlcnZlQXNwZWN0UmF0aW89Im5vbmUiP
jwhLS0KU291cmNlIFVSTDogaG9sZGVyLmpzLzE0MHgxNDAKQ3JlYXRlZCB3aXRoIEhvbGRlci5qcyAyLjYuMC4KTGVhcm4gbW9yZSBhdCBodHRwOi8vaG9sZGVyanMuY29tCihj
KSAyMDEyLTIwMTUgSXZhbiBNYWxvcGluc2t5IC0gaHR0cDovL2ltc2t5LmNvCi0tPjxkZWZzPjxzdHlsZSB0eXBlPSJ0ZXh0L2NzcyI+PCFbQ0RBVEFbI2hvbGRlcl8xNTQwNmF
iODJhYSB0ZXh0IHsgZmlsbDojQUFBQUFBO2ZvbnQtd2VpZ2h0OmJvbGQ7Zm9udC1mYW1pbHk6QXJpYWwsIEhlbHZldGljYSwgT3BlbiBTYW5zLCBzYW5zLXNlcmlmLCBtb25vc3
BhY2U7Zm9udC1zaXplOjEwcHQgfSBdXT48L3N0eWxlPjwvZGVmcz48ZyBpZD0iaG9sZGVyXzE1NDA2YWI4MmFhIj48cmVjdCB3aWR0aD0iMTQwIiBoZWlnaHQ9IjE0MCIgZmlsb
D0iI0VFRUVFRSIvPjxnPjx0ZXh0IHg9IjQ1LjUiIHk9Ijc0LjUiPjE0MHgxNDA8L3RleHQ+PC9nPjwvZz48L3N2Zz4=`;

export const images = b.createVirtualComponent({
    render(_ctx: b.IBobrilCtx, me: b.IBobrilNode) {
        me.children = section(
            {
                header: "Images",
                id: "images"
            },
            [responsiveImages(), imageShapes()]
        );
    }
});

function responsiveImages(): b.IBobrilChildren {
    return [
        b.anchor(bs.H2({ attrs: { id: "images-responsive" } }, "Responsive images")),
        bs.P({}, [
            `Images in Bootstrap 3 can be made responsive-friendly via the addition of the `,
            bs.Code({}, "responsive"),
            `input dat property. This applies `,
            bs.Code({}, "max-width: 100%; height: auto; display: block;"),
            ` to the image so that it scales nicely to the parent element.`
        ]),
        bs.P({}, [
            `To center images which use the `,
            bs.Code({}, "responsive"),
            ` property, use `,
            bs.Code({}, "centerBlock"),
            ` input data property. 
            See the helper styles section for more details about `,
            bs.Code({}, "centerBlock"),
            ` style usage.`
        ]),
        bs.Figure(
            { style: styles.highlight },
            pre({}, bs.Code({ style: langJs }, [`bs.Image({ src: '...', responsive: true, alt: 'Responsive image' })`]))
        ),
        bs.E(
            {
                style: [styles.bsCallout, styles.bsCalloutDanger],
                attrs: { id: "callout-images-ie-svg" }
            },
            [
                bs.H4({}, `SVG images and IE 8-10`),
                bs.P({}, [
                    `In Internet Explorer 8-10, SVG images with `,
                    bs.Code({}, "responsive"),
                    ` are disproportionately sized. To fix this, 
                add `,
                    bs.Code({}, "width: 100% \\9;"),
                    `by setting the `,
                    bs.Code({}, "ieSvgFix"),
                    ` input data property where necessary. 
                Bootstrap doesn't apply this automatically as it causes complications to other image formats.`
                ])
            ]
        )
    ];
}

function imageShapes(): b.IBobrilChildren {
    return [
        b.anchor(bs.H2({ attrs: { id: "images-shapes" } }, "Image shapes")),
        bs.P({}, [`Set `, bs.Code({}, "shape"), ` input data property to easily style images in any project.`]),
        bs.E(
            {
                style: [styles.bsCallout, styles.bsCalloutDanger],
                attrs: { id: "callout-images-ie-rounded-corners" }
            },
            [
                bs.H4({}, `Cross-browser compatibility`),
                bs.P({}, [`Keep in mind that Internet Explorer 8 lacks support for rounded corners.`])
            ]
        ),
        bs.E({ style: [styles.bsExample, styles.bsExampleImages] }, [
            bs.Image({
                src: imageData,
                alt: "Rounded",
                shape: bs.ImageShape.Rounded
            }),
            bs.Image({ src: imageData, alt: "Circle", shape: bs.ImageShape.Circle }),
            bs.Image({
                src: imageData,
                alt: "Thumbnail",
                shape: bs.ImageShape.Thumbnail
            })
        ]),
        bs.Figure(
            { style: styles.highlight },
            pre(
                {},
                bs.Code({ style: langJs }, [
                    `bs.Image({ src: '...', alt: 'Rounded', shape: bs.ImageShape.Rounded }),`,
                    bs.E({ tag: "br" }),
                    `bs.Image({ src: '...', alt: 'Circle', shape: bs.ImageShape.Circle }),`,
                    bs.E({ tag: "br" }),
                    `bs.Image({ src: '...', alt: 'Thumbnail', shape: bs.ImageShape.Thumbnail })`
                ])
            )
        )
    ];
}

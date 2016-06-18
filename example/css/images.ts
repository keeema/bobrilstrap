import * as b from 'bobril';
import { e, p, h2, h4, code, figure, image, ImageShape } from '../../index';
import { styles } from '../bsexample/css';
import pre, { langJs } from '../prettify/pre';
import section from '../common/section';
 
const imageData = `data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiIHN0YW5kYWxvbmU9InllcyI/PjxzdmcgeG1sbnM9Im
h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB3aWR0aD0iMTQwIiBoZWlnaHQ9IjE0MCIgdmlld0JveD0iMCAwIDE0MCAxNDAiIHByZXNlcnZlQXNwZWN0UmF0aW89Im5vbmUiP
jwhLS0KU291cmNlIFVSTDogaG9sZGVyLmpzLzE0MHgxNDAKQ3JlYXRlZCB3aXRoIEhvbGRlci5qcyAyLjYuMC4KTGVhcm4gbW9yZSBhdCBodHRwOi8vaG9sZGVyanMuY29tCihj
KSAyMDEyLTIwMTUgSXZhbiBNYWxvcGluc2t5IC0gaHR0cDovL2ltc2t5LmNvCi0tPjxkZWZzPjxzdHlsZSB0eXBlPSJ0ZXh0L2NzcyI+PCFbQ0RBVEFbI2hvbGRlcl8xNTQwNmF
iODJhYSB0ZXh0IHsgZmlsbDojQUFBQUFBO2ZvbnQtd2VpZ2h0OmJvbGQ7Zm9udC1mYW1pbHk6QXJpYWwsIEhlbHZldGljYSwgT3BlbiBTYW5zLCBzYW5zLXNlcmlmLCBtb25vc3
BhY2U7Zm9udC1zaXplOjEwcHQgfSBdXT48L3N0eWxlPjwvZGVmcz48ZyBpZD0iaG9sZGVyXzE1NDA2YWI4MmFhIj48cmVjdCB3aWR0aD0iMTQwIiBoZWlnaHQ9IjE0MCIgZmlsb
D0iI0VFRUVFRSIvPjxnPjx0ZXh0IHg9IjQ1LjUiIHk9Ijc0LjUiPjE0MHgxNDA8L3RleHQ+PC9nPjwvZz48L3N2Zz4=`;

export default b.createVirtualComponent({
    render(ctx: b.IBobrilCtx, me: b.IBobrilNode) {
        me.children = section(
            {
                header: 'Images',
                id: 'images'
            },
            [
                responsiveImages(),
                imageShapes()
            ]);
    }
})

function responsiveImages(): b.IBobrilChildren {
    return [
        h2({ attrs: { id: 'images-responsive' } }, 'Responsive images'),
        p({}, [
            `Images in Bootstrap 3 can be made responsive-friendly via the addition of the `, code({}, 'responsive'), `input dat property.
             This applies `, code({}, 'max-width: 100%; height: auto; display: block;'), ` to the image so that it scales nicely to the 
             parent element.`
        ]),
        p({}, [
            `To center images which use the `, code({}, 'responsive'), ` property, use `, code({}, 'centerBlock'), ` input data property. 
            See the helper styles section for more details about `, code({}, 'centerBlock'), ` style usage.`
        ]),
        figure({ style: styles.highlight }, pre({}, code({ style: langJs }, [
            `image({ src: '...', responsive: true, alt: 'Responsive image' })`
        ]))),
        e({ style: [styles.bsCallout, styles.bsCalloutDanger], attrs: { id: 'callout-images-ie-svg' } }, [
            h4({}, `SVG images and IE 8-10`),
            p({}, [
                `In Internet Explorer 8-10, SVG images with `, code({}, 'responsive'), ` are disproportionately sized. To fix this, 
                add `, code({}, 'width: 100% \\9;'), `by setting the `, code({}, 'ieSvgFix'), ` input data property where necessary. 
                Bootstrap doesn't apply this automatically as it causes complications to other image formats.`
            ])
        ])
    ];
}

function imageShapes(): b.IBobrilChildren {
    return [
        h2({ attrs: { id: 'images-shapes' } }, 'Image shapes'),
        p({}, [
            `Set `, code({}, 'shape'), ` input data property to easily style images in any project.`
        ]),
        e({ style: [styles.bsCallout, styles.bsCalloutDanger], attrs: { id: 'callout-images-ie-rounded-corners' } }, [
            h4({}, `Cross-browser compatibility`),
            p({}, [`Keep in mind that Internet Explorer 8 lacks support for rounded corners.`])
        ]),
        e({ style: [styles.bsExample, styles.bsExampleImages] }, [
            image({ src: imageData, alt: 'Rounded', shape: ImageShape.Rounded }),
            image({ src: imageData, alt: 'Circle', shape: ImageShape.Circle }),
            image({ src: imageData, alt: 'Thumbnail', shape: ImageShape.Thumbnail })
        ]),
        figure({ style: styles.highlight }, pre({}, code({ style: langJs }, [
            `image({ src: '...', alt: 'Rounded', shape: ImageShape.Rounded }),`, e({ tag: 'br' }),
            `image({ src: '...', alt: 'Circle', shape: ImageShape.Circle }),`, e({ tag: 'br' }),
            `image({ src: '...', alt: 'Thumbnail', shape: ImageShape.Thumbnail })`
        ])))
    ];
}

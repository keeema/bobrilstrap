import * as b from 'bobril';
import { a, e, p, h2, h3, h4, code, figure, form, image, ImageShape } from '../../index';
import { styles } from '../bsexample/css';
import pre, { langJs } from '../prettify/pre';
import section from '../common/section';

const imgHolderPath = b.asset('./imgHolder.png');

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
        ]),
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
            image({ src: imgHolderPath, alt: 'Rounded', shape: ImageShape.Rounded }),
            image({ src: imgHolderPath, alt: 'Circle', shape: ImageShape.Circle }),
            image({ src: imgHolderPath, alt: 'Thumbnail', shape: ImageShape.Thumbnail })
        ]),
        figure({ style: styles.highlight }, pre({}, code({ style: langJs }, [
            `image({ src: '...', alt: 'Rounded', shape: ImageShape.Rounded }),`, e({ tag: 'br' }),
            `image({ src: '...', alt: 'Circle', shape: ImageShape.Circle }),`, e({ tag: 'br' }),
            `image({ src: '...', alt: 'Thumbnail', shape: ImageShape.Thumbnail })`
        ])))
    ];
}

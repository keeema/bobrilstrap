import * as b from 'bobril';
import { e, p, ul, li, code, figure, span, table, th, td, tr, small, typography, row, col, Size,
h1, h2, h3, h4, h5, h6, strong } from '../../index';
import { styles } from '../bsexample/css';
import pre, { langJs } from '../prettify/pre';
import section from '../common/section';

export default b.createVirtualComponent({
    render(ctx: b.IBobrilCtx, me: b.IBobrilNode) {
        me.children = section(
            {
                header: 'Typography',
                id: 'type'
            },
            [
                headings(),
                bodyCopy()
            ]);
    }
})

function headings(): b.IBobrilChildren {
    return [
        h2({ attrs: { id: 'type-headings' } }, 'Headings'),
        p({}, [`All HTML headings, `, code({}, '<h1>'), ` through `, code({}, '<h6>'),
            ` are available.`,
            code({}, 'h1({}, ...)'), ` through `, code({}, 'h6({}, ...)'),
            ` components are also available, for when you want to match the font styling of a heading but still want 
            your text to be displayed inline.`
        ]),
        e({ styles: [styles.bsExample, styles.bsExampleType] }, table({
            body: {
                rows: [
                    {
                        columns: [
                            { children: h1({}, 'h1({}, ...) Bootstrap heading') }, { children: 'Semibold 36px', styles: styles.typeInfo }
                        ]
                    },
                    {
                        columns: [
                            { children: h2({}, 'h2({}, ...) Bootstrap heading') }, { children: 'Semibold 30px', styles: styles.typeInfo }
                        ]
                    },
                    {
                        columns: [
                            { children: h3({}, 'h3({}, ...) Bootstrap heading') }, { children: 'Semibold 24px', styles: styles.typeInfo }
                        ]
                    },
                    {
                        columns: [
                            { children: h4({}, 'h4({}, ...) Bootstrap heading') }, { children: 'Semibold 18px', styles: styles.typeInfo }
                        ]
                    },
                    {
                        columns: [
                            { children: h5({}, 'h5({}, ...) Bootstrap heading') }, { children: 'Semibold 14px', styles: styles.typeInfo }
                        ]
                    },
                    {
                        columns: [
                            { children: h6({}, 'h6({}, ...) Bootstrap heading') }, { children: 'Semibold 12px', styles: styles.typeInfo }
                        ]
                    }
                ]
            }
        })),
        figure({ styles: styles.highlight }, pre({}, code({ styles: langJs }, [
            `h1({}, 'h1({}, ...) Bootstrap heading')`, e({ tag: 'br' }),
            `h2({}, 'h2({}, ...) Bootstrap heading')`, e({ tag: 'br' }),
            `h3({}, 'h3({}, ...) Bootstrap heading')`, e({ tag: 'br' }),
            `h4({}, 'h4({}, ...) Bootstrap heading')`, e({ tag: 'br' }),
            `h5({}, 'h5({}, ...) Bootstrap heading')`, e({ tag: 'br' }),
            `h6({}, 'h6({}, ...) Bootstrap heading')`, e({ tag: 'br' }),
        ]))),
        p({}, [
            'Create lighter, secondary text in any heading with ',
            code({}, 'small({}, ...)'), ' component or ',
            code({}, 'typography.small'),
            ' bobril style definition.'
        ]),
        e({ styles: [styles.bsExample, styles.bsExampleType] }, table({
            body: {
                rows: [
                    { columns: [{ children: h1({}, ['h1({}, ...) Bootstrap heading ', small({}, 'Secondary text')]) }] },
                    { columns: [{ children: h2({}, ['h2({}, ...) Bootstrap heading ', small({}, 'Secondary text')]) }] },
                    { columns: [{ children: h3({}, ['h3({}, ...) Bootstrap heading ', small({}, 'Secondary text')]) }] },
                    { columns: [{ children: h4({}, ['h4({}, ...) Bootstrap heading ', small({}, 'Secondary text')]) }] },
                    { columns: [{ children: h5({}, ['h5({}, ...) Bootstrap heading ', small({}, 'Secondary text')]) }] },
                    { columns: [{ children: h6({}, ['h6({}, ...) Bootstrap heading ', small({}, 'Secondary text')]) }] }
                ]
            }
        })),
        figure({ styles: styles.highlight }, pre({}, code({ styles: langJs }, [
            `h1({}, ['h1({}, ...) Bootstrap heading', small({}, 'Secondary text')])`, e({ tag: 'br' }),
            `h2({}, ['h2({}, ...) Bootstrap heading', small({}, 'Secondary text')])`, e({ tag: 'br' }),
            `h3({}, ['h3({}, ...) Bootstrap heading', small({}, 'Secondary text')])`, e({ tag: 'br' }),
            `h4({}, ['h4({}, ...) Bootstrap heading', small({}, 'Secondary text')])`, e({ tag: 'br' }),
            `h5({}, ['h5({}, ...) Bootstrap heading', small({}, 'Secondary text')])`, e({ tag: 'br' }),
            `h6({}, ['h6({}, ...) Bootstrap heading', small({}, 'Secondary text')])`, e({ tag: 'br' }),
        ])))
    ];
}

function bodyCopy(): b.IBobrilChildren {
    return [
        h2({ attrs: { id: 'type-body-copy' } }, 'Body copy'),
        p({}, [
            `Bootstrap's global default `, code({}, 'font-size'), ` is `, strong({}, '14px'), ', with a ',
            ' of ', strong({}, '1.428'), '. This is applied to the ', code({}, '<body>'),
            ` and all paragraphs. In addition, `,
            code({}, '<p>'), ` (paragraphs) receive a bottom margin of half their computed line-height (10px by default).`
        ]),
        e({ styles: [styles.bsExample] }, [
            p({}, `Nullam quis risus eget urna mollis ornare vel eu leo. Cum sociis natoque penatibus et magnis dis parturient 
            montes, nascetur ridiculus mus. Nullam id dolor id nibh ultricies vehicula.`),
            p({}, `Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec ullamcorper nulla non metus 
            auctor fringilla. Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. 
            Donec ullamcorper nulla non metus auctor fringilla.`),
            p({}, `Maecenas sed diam eget risus varius blandit sit amet non magna. Donec id elit non mi porta gravida at eget metus. Duis 
            mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit.`)
        ]),
        figure({ styles: styles.highlight }, pre({}, code({ styles: langJs }, 'p({}, ...)'))),
        h3({ attrs: { id: 'lead-body-copy' } }, 'Lead body copy'),
        p({}, [
            `Make a paragraph stand out by setting `, code({}, 'lead'), ` input data property.`
        ]),
        e({ styles: [styles.bsExample] }, p(
            { lead: true },
            `Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor. Duis mollis, est non commodo luctus.`
        )),
        figure({ styles: styles.highlight }, pre({}, code({ styles: langJs }, 'p({ lead: true }, ...)')))
    ];
}
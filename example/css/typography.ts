import * as b from 'bobril';
import { e, p, ul, li, code, figure, span, table, th, td, tr, small, typography, row, col, Size,
h1, h2, h3, h4, h5, h6 } from '../../index';
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
                headings()
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
            `table({`, e({ tag: 'br' }),
            `    body: {`, e({ tag: 'br' }),
            `        rows: [`, e({ tag: 'br' }),
            `            {`, e({ tag: 'br' }),
            `               columns: [ { children: h1({}, 'h1({}, ...) Bootstrap heading') }]`, e({ tag: 'br' }),
            `            },`, e({ tag: 'br' }),
            `            {`, e({ tag: 'br' }),
            `               columns: [ { children: h2({}, 'h2({}, ...) Bootstrap heading') }]`, e({ tag: 'br' }),
            `            },`, e({ tag: 'br' }),
            `            {`, e({ tag: 'br' }),
            `               columns: [ { children: h3({}, 'h3({}, ...) Bootstrap heading') }]`, e({ tag: 'br' }),
            `            },`, e({ tag: 'br' }),
            `            {`, e({ tag: 'br' }),
            `               columns: [ { children: h4({}, 'h4({}, ...) Bootstrap heading') }]`, e({ tag: 'br' }),
            `            },`, e({ tag: 'br' }),
            `            {`, e({ tag: 'br' }),
            `               columns: [ { children: h5({}, 'h5({}, ...) Bootstrap heading') }]`, e({ tag: 'br' }),
            `            },`, e({ tag: 'br' }),
            `            {`, e({ tag: 'br' }),
            `               columns: [ { children: h6({}, 'h6({}, ...) Bootstrap heading') }]`, e({ tag: 'br' }),
            `            }`, e({ tag: 'br' }),
            `        ]`, e({ tag: 'br' }),
            `    }`, e({ tag: 'br' }),
            `}))`
        ])))
    ];
}

import * as b from 'bobril';
import { a, e, p, ul, li, ol, code, figure, span, table, th, td, tr, small, typography, row, col, Size,
h1, h2, h3, h4, h5, h6, strong, mark, del, s, ins, u, em, abbr, address, blockquote, cite, footer, dl, dt, dd } from '../../index';
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
                bodyCopy(),
                inlineTextElements(),
                alignmentStyles(),
                transformatiomStyles(),
                abbreviations(),
                addresses(),
                blockquotes(),
                lists()
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

function inlineTextElements(): b.IBobrilChildren {
    return [
        h2({ attrs: { id: 'type-inline-text' } }, 'Inline text elements'),
        h3({ attrs: { id: 'marked-text' } }, 'Marked text'),
        p({}, [
            `For highlighting a run of text due to its relevance in another context, use the `,
            code({}, 'mark({}, ...)'), ` component.`
        ]),
        e({ styles: styles.bsExample }, p({}, ['You can use the mark tag to ', mark({}, 'highlight'), ' text.'])),
        figure({ styles: styles.highlight }, pre({}, code({ styles: langJs }, [
            `['You can use the mark tag to ', mark({}, 'highlight'), ' text.']`
        ]))),
        h3({ attrs: { id: 'deleted-text' } }, 'Deleted text'),
        p({}, [
            `For indicating blocks of text that have been deleted use the `,
            code({}, 'del({}, ...)'), ` tag.`
        ]),
        e({ styles: styles.bsExample }, p({}, del({}, 'This line of text is meant to be treated as deleted text.'))),
        figure({ styles: styles.highlight }, pre({}, code({ styles: langJs }, [
            `del({}, 'This line of text is meant to be treated as deleted text.')`
        ]))),
        h3({ attrs: { id: 'strikethrough-text' } }, 'Strikethrough text'),
        p({}, [
            `For indicating blocks of text that are no longer relevant use the `,

        ]),
        e({ styles: styles.bsExample }, p({}, s({}, 'This line of text is meant to be treated as no longer accurate.'))),
        figure({ styles: styles.highlight }, pre({}, code({ styles: langJs }, [
            `s({}, 'This line of text is meant to be treated as no longer accurate.')`
        ]))),
        h3({ attrs: { id: 'inserted-text' } }, 'Inserted text'),
        p({}, [
            `For indicating additions to the document use the `,
            code({}, 'ins({}, ...)'), ` component.`
        ]),
        e({ styles: styles.bsExample }, p({}, ins({}, 'This line of text is meant to be treated as an addition to the document.'))),
        figure({ styles: styles.highlight }, pre({}, code({ styles: langJs }, [
            `ins({}, 'This line of text is meant to be treated as an addition to the document.')`
        ]))),
        h3({ attrs: { id: 'underlined-text' } }, 'Underlined text'),
        p({}, [
            `To underline text use the `,
            code({}, 'u({}, ...)'), ` or `, code({}, 'underlined({}, ...)'), ` component.`
        ]),
        e({ styles: styles.bsExample }, p({}, u({}, 'This line of text will render as underlined.'))),
        figure({ styles: styles.highlight }, pre({}, code({ styles: langJs }, [
            `u({}, 'This line of text will render as underlined.')`
        ]))),
        h3({ attrs: { id: 'small-text' } }, 'Small text'),
        p({}, [
            `For de-emphasizing inline or blocks of text, use the `, code({}, 'small({}, ...)'),
            ` component to set text at 85% the size of the parent. Heading elements receive their own `, code({}, 'font-size'),
            ` for nested `, code({}, 'small({}, ...)'), ` components.`
        ]),
        p({}, [
            `You may alternatively use an inline element with `, code({}, 'typography.small'),
            ` style in place of any `, code({}, 'small({}, ...)'),
            ` component.`
        ]),
        e({ styles: styles.bsExample }, p({}, small({}, 'This line of text is meant to be treated as fine print.'))),
        figure({ styles: styles.highlight }, pre({}, code({ styles: langJs }, [
            `small({}, 'This line of text is meant to be treated as fine print.')`
        ]))),
        h3({ attrs: { id: 'inserted-text' } }, 'Inserted text'),
        p({}, [
            `For indicating additions to the document use the `,
            code({}, 'ins({}, ...)'), ` component.`
        ]),
        e({ styles: styles.bsExample }, p({}, ins({}, 'This line of text is meant to be treated as an addition to the document.'))),
        figure({ styles: styles.highlight }, pre({}, code({ styles: langJs }, [
            `ins({}, 'This line of text is meant to be treated as an addition to the document.')`
        ]))),
        h3({ attrs: { id: 'bold-text' } }, 'Bold text'),
        p({}, `For emphasizing a snippet of text with a heavier font-weight.`),
        e({ styles: styles.bsExample }, p({}, ['The following snippet of text is ', strong({}, 'rendered as bold text'), '.'])),
        figure({ styles: styles.highlight }, pre({}, code({ styles: langJs }, [
            `['The following snippet of text is ', strong({}, 'rendered as bold text'), '.']`
        ]))),
        h3({ attrs: { id: 'italics' } }, 'Italics'),
        p({}, `For emphasizing a snippet of text with italics.`),
        e({ styles: styles.bsExample }, p({}, ['The following snippet of text is ', em({}, 'rendered as italicized  text'), '.'])),
        figure({ styles: styles.highlight }, pre({}, code({ styles: langJs }, [
            `['The following snippet of text is ', em({}, 'rendered as italicized  text'), '.']`
        ])))
    ];
}

function alignmentStyles(): b.IBobrilChildren {
    return [
        h2({ attrs: { id: 'type-alignment' } }, 'Alignment styles'),
        p({}, [
            `Easily realign text to components with text alignment classes.`
        ]),
        e({ styles: styles.bsExample }, [
            p({ styles: typography.textLeft }, 'Left aligned text.'),
            p({ styles: typography.textCenter }, 'Center aligned text.'),
            p({ styles: typography.textRight }, 'Right aligned text.'),
            p({ styles: typography.textJustify }, 'Justified  text.'),
            p({ styles: typography.textNowrap }, 'No wrap text.')
        ]),
        figure({ styles: styles.highlight }, pre({}, code({ styles: langJs }, [
            `[`, e({ tag: 'br' }),
            `   p({ styles: typography.textLeft }, 'Left aligned text.'),`, e({ tag: 'br' }),
            `   p({ styles: typography.textCenter }, 'Center aligned text.'),`, e({ tag: 'br' }),
            `   p({ styles: typography.textRight }, 'Right aligned text.'),`, e({ tag: 'br' }),
            `   p({ styles: typography.textJustify }, 'Justified  text.'),`, e({ tag: 'br' }),
            `   p({ styles: typography.textNowrap }, 'No wrap text.')`, e({ tag: 'br' }),
            `]`
        ])))
    ];
}

function transformatiomStyles(): b.IBobrilChildren {
    return [
        h2({ attrs: { id: 'type-transformation' } }, 'Transformation styles'),
        p({}, [
            `Easily realign text to components with text alignment classes.`
        ]),
        e({ styles: styles.bsExample }, [
            p({ styles: typography.textLowercase }, 'Lowercased text.'),
            p({ styles: typography.textUppercase }, 'Uppercased text.'),
            p({ styles: typography.textCapitalize }, 'Capitalized text.')
        ]),
        figure({ styles: styles.highlight }, pre({}, code({ styles: langJs }, [
            `[`, e({ tag: 'br' }),
            `   p({ styles: typography.textLowercase }, 'Lowercased text.'),`, e({ tag: 'br' }),
            `   p({ styles: typography.textUppercase }, 'Uppercased text.'),`, e({ tag: 'br' }),
            `   p({ styles: typography.textCapitalize }, 'Capitalized text.')`, e({ tag: 'br' }),
            `]`
        ])))
    ];
}

function abbreviations(): b.IBobrilChildren {
    return [
        h2({ attrs: { id: 'type-abbreviations' } }, 'Abbreviations'),
        p({}, [
            `Stylized implementation of HTML's `, code({}, '<abbr>'),
            ` element for abbreviations and acronyms to show the expanded version on hover. Abbreviations with a `,
            code({}, 'title'),
            ` input data property attribute have a light dotted bottom border and a help cursor on hover, 
            providing additional context on hover and to users of assistive technologies.`
        ]),
        h3({ attrs: { id: 'basic-abbreviation' } }, 'Basic abbreviation'),
        e({ styles: styles.bsExample }, ['An abbreviation of the word attribute is ', abbr({ title: 'attribute' }, 'attr'), '.']),
        figure({ styles: styles.highlight }, pre({}, code({ styles: langJs }, [
            `['An abbreviation of the word attribute is ', abbr({ title: 'attribute' }, 'attr'), '.']`
        ]))),
        h3({ attrs: { id: 'initialism' } }, 'Initialism'),
        p({}, [
            `Set `, code({}, 'initialism'), ` input data property to an abbreviation for a slightly smaller font-size.`
        ]),
        e(
            { styles: styles.bsExample },
            [abbr({ title: 'HyperText Markup Language', initialism: true }, 'HTML'), ' is the best thing since sliced bread.']
        ),
        figure({ styles: styles.highlight }, pre({}, code({ styles: langJs }, [
            `[`, e({ tag: 'br' }),
            `   abbr({ title: 'HyperText Markup Language', initialism: true }, 'HTML'),`, e({ tag: 'br' }),
            `   ' is the best thing since sliced bread.'`, e({ tag: 'br' }),
            `]`
        ])))
    ];
}

function addresses(): b.IBobrilChildren {
    return [
        h2({ attrs: { id: 'type-addresses' } }, 'Addresses'),
        p({}, [
            `Present contact information for the nearest ancestor or the entire body of work. 
            Preserve formatting by ending all lines with `, code({}, `e({ tag: 'br' })`)
        ]),
        e({ styles: styles.bsExample }, [
            address({}, [
                strong({}, 'Twitter, Inc.'), e({ tag: 'br' }),
                '1355 Market Street, Suite 900', e({ tag: 'br' }),
                'San Francisco, CA 94103', e({ tag: 'br' }),
                abbr({ title: 'Phone' }, 'P:'), ' (123) 456-7890'
            ]),
            address({}, [
                strong({}, 'Full Name'), e({ tag: 'br' }),
                a({ href: 'mailto:#' }, 'first.last@example.com')
            ])
        ]),
        figure({ styles: styles.highlight }, pre({}, code({ styles: langJs }, [
            `[`, e({ tag: 'br' }),
            `   address({}, [`, e({ tag: 'br' }),
            `       strong({}, 'Twitter, Inc.'), e({ tag: 'br' }),`, e({ tag: 'br' }),
            `       '1355 Market Street, Suite 900', e({ tag: 'br' }),`, e({ tag: 'br' }),
            `       'San Francisco, CA 94103', e({ tag: 'br' }),`, e({ tag: 'br' }),
            `       abbr({ title: 'Phone'}, 'P:'), ' (123) 456-7890'`, e({ tag: 'br' }),
            `   ]),`, e({ tag: 'br' }),
            `   address({}, [`, e({ tag: 'br' }),
            `       strong({}, 'Full Name'), e({ tag: 'br' }),`, e({ tag: 'br' }),
            `       a({ href: 'mailto:#' }, 'first.last@example.com')`, e({ tag: 'br' }),
            `   ])`, e({ tag: 'br' }),
            `]`
        ])))
    ];
}

function blockquotes(): b.IBobrilChildren {
    return [
        h2({ attrs: { id: 'type-blockquotes' } }, 'Blockquotes'),
        p({}, `For quoting blocks of content from another source within your document.`),
        h3({ attrs: { id: 'default-blockquotes' } }, 'Default blockquote'),
        p({}, [
            `Wrap `, code({}, 'blockquote({}, ...)'), `around any HTML as the quote. For straight quotes, we recommend a `,
            code({}, 'p({}, ...)'), '.'
        ]),
        e({ styles: styles.bsExample }, [
            blockquote({}, p({}, 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.'))
        ]),
        figure({ styles: styles.highlight }, pre({}, code({ styles: langJs }, [
            `blockquote({}, p({}, 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.'))`
        ]))),
        h3({ attrs: { id: 'blockquote-options' } }, 'Blockquote options'),
        p({}, ['Style and content changes for simple variations on a standard ', code({}, 'blockquote({}, ...)'), '.']),
        h4({ attrs: { id: 'naming-a-source' } }, 'Naming a source'),
        p({}, [
            `Add a `, code({}, 'footer({}, ...)'),
            `for identifying the source. Wrap the name of the source work in `,
            code({}, 'cite({}, ...)'), `.`
        ]),
        e({ styles: styles.bsExample }, [
            blockquote({}, [
                p({}, 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.'),
                footer({}, ['Someone famous in ', cite({ title: 'Source Title' }, 'Source Title')])
            ])
        ]),
        figure({ styles: styles.highlight }, pre({}, code({ styles: langJs }, [
            `blockquote({}, [`, e({ tag: 'br' }),
            `    p({}, 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.'),`, e({ tag: 'br' }),
            `    footer({}, ['Someone famous in ', cite({ title: 'Source Title' }, 'Source Title')])`, e({ tag: 'br' }),
            `])`
        ]))),
        h4({ attrs: { id: 'alternate-displays' } }, 'Alternate displays'),
        p({}, [
            `set a `, code({}, 'reverse'),
            ` input date property for a blockquote with right-aligned content.`
        ]),
        e({ styles: styles.bsExample }, [
            blockquote({ reverse: true }, p({}, 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.'))
        ]),
        figure({ styles: styles.highlight }, pre({}, code({ styles: langJs }, [
            `blockquote({ reverse: true }, p({}, 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.'))`
        ])))
    ];
}

function lists(): b.IBobrilChildren {
    return [
        h2({ attrs: { id: 'type-lists' } }, 'Lists'),
        h3({ attrs: { id: 'unordered' } }, 'Unordered'),
        p({}, `A list of items in which the order does not explicitly matter.`),
        e({ styles: styles.bsExample }, ul({}, [
            li({}, 'Lorem ipsum dolor sit amet'),
            li({}, 'Consectetur adipiscing elit'),
            li({}, 'Integer molestie lorem at massa'),
            li({}, 'Facilisis in pretium nisl aliquet'),
            li({}, 'Nulla volutpat aliquam velit'),
            li({}, ul({}, [
                li({}, 'Phasellus iaculis neque'),
                li({}, 'Purus sodales ultricies'),
                li({}, 'Vestibulum laoreet porttitor sem'),
                li({}, 'Ac tristique libero volutpat at')
            ])),
            li({}, 'Faucibus porta lacus fringilla vel'),
            li({}, 'Aenean sit amet erat nunc'),
            li({}, 'Eget porttitor lorem')
        ])),
        figure({ styles: styles.highlight }, pre({}, code({ styles: langJs }, [
            `ul({}, [`, e({ tag: 'br' }),
            `    li({}, ...)`, e({ tag: 'br' }),
            `])`, e({ tag: 'br' }),
        ]))),
        h3({ attrs: { id: 'ordered' } }, 'Ordered'),
        p({}, `A list of items in which the order does explicitly matter.`),
        e({ styles: styles.bsExample }, ol({}, [
            li({}, 'Lorem ipsum dolor sit amet'),
            li({}, 'Consectetur adipiscing elit'),
            li({}, 'Integer molestie lorem at massa'),
            li({}, 'Facilisis in pretium nisl aliquet'),
            li({}, 'Nulla volutpat aliquam velit'),
            li({}, 'Faucibus porta lacus fringilla vel'),
            li({}, 'Aenean sit amet erat nunc'),
            li({}, 'Eget porttitor lorem')
        ])),
        figure({ styles: styles.highlight }, pre({}, code({ styles: langJs }, [
            `ol({}, [`, e({ tag: 'br' }),
            `    li({}, ...)`, e({ tag: 'br' }),
            `])`
        ]))),
        h3({ attrs: { id: 'unstyled' } }, 'Unstyled'),
        p({}, [`Remove the default `, code({}, 'list-style'), ` and left margin on list items (immediate children only). 
        This only applies to immediate children list items, meaning you will need to add the class for any nested lists as well.`]),
        e({ styles: styles.bsExample }, ul({ unstyled: true }, [
            li({}, 'Lorem ipsum dolor sit amet'),
            li({}, 'Consectetur adipiscing elit'),
            li({}, 'Integer molestie lorem at massa'),
            li({}, 'Facilisis in pretium nisl aliquet'),
            li({}, 'Nulla volutpat aliquam velit'),
            li({}, ul({}, [
                li({}, 'Phasellus iaculis neque'),
                li({}, 'Purus sodales ultricies'),
                li({}, 'Vestibulum laoreet porttitor sem'),
                li({}, 'Ac tristique libero volutpat at')
            ])),
            li({}, 'Faucibus porta lacus fringilla vel'),
            li({}, 'Aenean sit amet erat nunc'),
            li({}, 'Eget porttitor lorem')
        ])),
        figure({ styles: styles.highlight }, pre({}, code({ styles: langJs }, [
            `ul({ unstyled: true }, [`, e({ tag: 'br' }),
            `    li({}, ...)`, e({ tag: 'br' }),
            `])`
        ]))),
        h3({ attrs: { id: 'inline' } }, 'Inline'),
        p({}, [`Place all list items on a single line with `, code({}, 'display: inline-block;'), ` and some light padding.`]),
        e({ styles: styles.bsExample }, ul({ inline: true }, [
            li({}, 'Lorem ipsum'),
            li({}, 'Phasellus iaculis'),
            li({}, 'Nulla volutpat')
        ])),
        figure({ styles: styles.highlight }, pre({}, code({ styles: langJs }, [
            `ul({ inline: true }, [`, e({ tag: 'br' }),
            `    li({}, ...)`, e({ tag: 'br' }),
            `])`
        ]))),
        h3({ attrs: { id: 'description' } }, 'Description'),
        p({}, `A list of terms with their associated descriptions.`),
        e({ styles: styles.bsExample }, dl({}, [
            dt({}, 'Description lists'),
            dd({}, 'A description list is perfect for defining terms.'),
            dt({}, 'Euismod'),
            dd({}, 'Vestibulum id ligula porta felis euismod semper eget lacinia odio sem nec elit.'),
            dd({}, 'Donec id elit non mi porta gravida at eget metus.'),
            dt({}, 'Malesuada porta'),
            dd({}, 'Etiam porta sem malesuada magna mollis euismod.')
        ])),
        figure({ styles: styles.highlight }, pre({}, code({ styles: langJs }, [
            `dl({}, [`, e({ tag: 'br' }),
            `    dt({}, ...)`, e({ tag: 'br' }),
            `    dd({}, ...)`, e({ tag: 'br' }),
            `])`
        ]))),
        h2({ attrs: { id: 'horizontal-description' } }, 'Horizontal description'),
        p({}, [`Make terms and descriptions in `, code({}, `<dl>`), ` line up side-by-side. Starts off stacked like default `,
            code({}, `<dl>`), `s, but when the navbar expands, so do these.`]),
        e({ styles: styles.bsExample }, dl({ horizontal: true }, [
            dt({}, 'Description lists'),
            dd({}, 'A description list is perfect for defining terms.'),
            dt({}, 'Euismod'),
            dd({}, 'Vestibulum id ligula porta felis euismod semper eget lacinia odio sem nec elit.'),
            dd({}, 'Donec id elit non mi porta gravida at eget metus.'),
            dt({}, 'Malesuada porta'),
            dd({}, 'Etiam porta sem malesuada magna mollis euismod.'),
            dt({}, 'Felis euismod semper eget lacinia'),
            dd({}, 'Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus.')
        ])),
        figure({ styles: styles.highlight }, pre({}, code({ styles: langJs }, [
            `dl({ horizontal: true }, [`, e({ tag: 'br' }),
            `    dt({}, ...)`, e({ tag: 'br' }),
            `    dd({}, ...)`, e({ tag: 'br' }),
            `])`
        ]))),
        e({ styles: [styles.bsCallout, styles.bsCalloutInfo] }, [
            h4({}, 'Auto-truncating'),
            p({}, [`Horizontal description lists will truncate terms that are too long to fit in the left column with `,
                code({}, 'text-overflow'), `. In narrower viewports, they will change to the default stacked layout.`])
        ])
    ];
}

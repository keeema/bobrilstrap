import * as b from 'bobril';
import * as bs from '../../index';
import { styles } from '../bsexample/css';
import { pre, langJs } from '../prettify/pre';
import { section } from '../common/section';

export const typographyPage = b.createVirtualComponent({
    render(_ctx: b.IBobrilCtx, me: b.IBobrilNode) {
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
});

function headings(): b.IBobrilChildren {
    return [
        b.anchor(bs.h2({ attrs: { id: 'type-headings' } }, 'Headings')),
        bs.p({}, [`All HTML headings, `, bs.code({}, '<h1>'), ` through `, bs.code({}, '<h6>'),
            ` are available.`,
            bs.code({}, 'h1'), ` through `, bs.code({}, 'h6'),
            ` components are also available, for when you want to match the font styling of a heading but still want 
            your text to be displayed inline.`
        ]),
        bs.e({ style: [styles.bsExample, styles.bsExampleType] }, bs.table({
            body: {
                rows: [
                    {
                        columns: [
                            { children: bs.h1({}, 'bs.h1({}, ...) Bootstrap heading') },
                            { children: 'Semibold 36px', style: styles.typeInfo }
                        ]
                    },
                    {
                        columns: [
                            { children: bs.h2({}, 'bs.h2({}, ...) Bootstrap heading') }, {
                                children: 'Semibold 30px', style: styles.typeInfo
                            }
                        ]
                    },
                    {
                        columns: [
                            { children: bs.h3({}, 'bs.h3({}, ...) Bootstrap heading') },
                            { children: 'Semibold 24px', style: styles.typeInfo }
                        ]
                    },
                    {
                        columns: [
                            { children: bs.h4({}, 'bs.h4({}, ...) Bootstrap heading') },
                            { children: 'Semibold 18px', style: styles.typeInfo }
                        ]
                    },
                    {
                        columns: [
                            { children: bs.h5({}, 'bs.h5({}, ...) Bootstrap heading') },
                            { children: 'Semibold 14px', style: styles.typeInfo }
                        ]
                    },
                    {
                        columns: [
                            { children: bs.h6({}, 'bs.h6({}, ...) Bootstrap heading') },
                            { children: 'Semibold 12px', style: styles.typeInfo }
                        ]
                    }
                ]
            }
        })),
        bs.figure({ style: styles.highlight }, pre({}, bs.code({ style: langJs }, [
            `bs.h1({}, 'bs.h1({}, ...) Bootstrap heading')`, bs.e({ tag: 'br' }),
            `bs.h2({}, 'bs.h2({}, ...) Bootstrap heading')`, bs.e({ tag: 'br' }),
            `bs.h3({}, 'bs.h3({}, ...) Bootstrap heading')`, bs.e({ tag: 'br' }),
            `bs.h4({}, 'bs.h4({}, ...) Bootstrap heading')`, bs.e({ tag: 'br' }),
            `bs.h5({}, 'bs.h5({}, ...) Bootstrap heading')`, bs.e({ tag: 'br' }),
            `bs.h6({}, 'bs.h6({}, ...) Bootstrap heading')`, bs.e({ tag: 'br' })
        ]))),
        bs.p({}, [
            'Create lighter, secondary text in any heading with ',
            bs.code({}, 'small'), ' component or ',
            bs.code({}, 'bs.typography.small'),
            ' bobril style definition.'
        ]),
        bs.e({ style: [styles.bsExample, styles.bsExampleType] }, bs.table({
            body: {
                rows: [
                    { columns: [{ children: bs.h1({}, ['bs.h1({}, ...) Bootstrap heading ', bs.small({}, 'Secondary text')]) }] },
                    { columns: [{ children: bs.h2({}, ['bs.h2({}, ...) Bootstrap heading ', bs.small({}, 'Secondary text')]) }] },
                    { columns: [{ children: bs.h3({}, ['bs.h3({}, ...) Bootstrap heading ', bs.small({}, 'Secondary text')]) }] },
                    { columns: [{ children: bs.h4({}, ['bs.h4({}, ...) Bootstrap heading ', bs.small({}, 'Secondary text')]) }] },
                    { columns: [{ children: bs.h5({}, ['bs.h5({}, ...) Bootstrap heading ', bs.small({}, 'Secondary text')]) }] },
                    { columns: [{ children: bs.h6({}, ['bs.h6({}, ...) Bootstrap heading ', bs.small({}, 'Secondary text')]) }] }
                ]
            }
        })),
        bs.figure({ style: styles.highlight }, pre({}, bs.code({ style: langJs }, [
            `bs.h1({}, ['bs.h1({}, ...) Bootstrap heading', bs.small({}, 'Secondary text')])`, bs.e({ tag: 'br' }),
            `bs.h2({}, ['bs.h2({}, ...) Bootstrap heading', bs.small({}, 'Secondary text')])`, bs.e({ tag: 'br' }),
            `bs.h3({}, ['bs.h3({}, ...) Bootstrap heading', bs.small({}, 'Secondary text')])`, bs.e({ tag: 'br' }),
            `bs.h4({}, ['bs.h4({}, ...) Bootstrap heading', bs.small({}, 'Secondary text')])`, bs.e({ tag: 'br' }),
            `bs.h5({}, ['bs.h5({}, ...) Bootstrap heading', bs.small({}, 'Secondary text')])`, bs.e({ tag: 'br' }),
            `bs.h6({}, ['bs.h6({}, ...) Bootstrap heading', bs.small({}, 'Secondary text')])`, bs.e({ tag: 'br' })
        ])))
    ];
}

function bodyCopy(): b.IBobrilChildren {
    return [
        b.anchor(bs.h2({ attrs: { id: 'type-body-copy' } }, 'Body copy')),
        bs.p({}, [
            `Bootstrap's global default `, bs.code({}, 'font-size'), ` is `, bs.strong({}, '14px'), ', with a ',
            ' of ', bs.strong({}, '1.428'), '. This is applied to the ', bs.code({}, '<body>'),
            ` and all paragraphs. In addition, `,
            bs.code({}, '<p>'), ` (paragraphs) receive a bottom margin of half their computed line-height (10px by default).`
        ]),
        bs.e({ style: [styles.bsExample] }, [
            bs.p({}, `Nullam quis risus eget urna mollis ornare vel eu leo. Cum sociis natoque penatibus et magnis dis parturient 
            montes, nascetur ridiculus mus. Nullam id dolor id nibh ultricies vehicula.`),
            bs.p({}, `Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec ullamcorper nulla 
            non metus auctor fringilla. Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. 
            Donec ullamcorper nulla non metus auctor fringilla.`),
            bs.p({}, `Maecenas sed diam eget risus varius blandit sit amet non magna. Donec id elit non mi porta gravida at eget metus. 
            Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit.`)
        ]),
        bs.figure({ style: styles.highlight }, pre({}, bs.code({ style: langJs }, 'bs.p({}, ...)'))),
        bs.h3({ attrs: { id: 'lead-body-copy' } }, 'Lead body copy'),
        bs.p({}, [
            `Make a paragraph stand out by setting `, bs.code({}, 'lead'), ` input data property.`
        ]),
        bs.e({ style: [styles.bsExample] }, bs.p(
            { lead: true },
            `Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor. Duis mollis, est non commodo luctus.`
        )),
        bs.figure({ style: styles.highlight }, pre({}, bs.code({ style: langJs }, 'bs.p({ lead: true }, ...)')))
    ];
}

function inlineTextElements(): b.IBobrilChildren {
    return [
        b.anchor(bs.h2({ attrs: { id: 'type-inline-text' } }, 'Inline text elements')),
        bs.h3({ attrs: { id: 'marked-text' } }, 'Marked text'),
        bs.p({}, [
            `For highlighting a run of text due to its relevance in another context, use the `,
            bs.code({}, 'mark'), ` component.`
        ]),
        bs.e({ style: styles.bsExample }, bs.p({}, ['You can use the mark tag to ', bs.mark({}, 'highlight'), ' text.'])),
        bs.figure({ style: styles.highlight }, pre({}, bs.code({ style: langJs }, [
            `['You can use the mark tag to ', bs.mark({}, 'highlight'), ' text.']`
        ]))),
        bs.h3({ attrs: { id: 'deleted-text' } }, 'Deleted text'),
        bs.p({}, [
            `For indicating blocks of text that have been deleted use the `,
            bs.code({}, 'del'), ` tag.`
        ]),
        bs.e({ style: styles.bsExample }, bs.p({}, bs.del({}, 'This line of text is meant to be treated as deleted text.'))),
        bs.figure({ style: styles.highlight }, pre({}, bs.code({ style: langJs }, [
            `bs.del({}, 'This line of text is meant to be treated as deleted text.')`
        ]))),
        bs.h3({ attrs: { id: 'strikethrough-text' } }, 'Strikethrough text'),
        bs.p({}, `For indicating blocks of text that are no longer relevant use the `),
        bs.e({ style: styles.bsExample }, bs.p({}, bs.s({}, 'This line of text is meant to be treated as no longer accurate.'))),
        bs.figure({ style: styles.highlight }, pre({}, bs.code({ style: langJs }, [
            `bs.s({}, 'This line of text is meant to be treated as no longer accurate.')`
        ]))),
        bs.h3({ attrs: { id: 'inserted-text' } }, 'Inserted text'),
        bs.p({}, [
            `For indicating additions to the document use the `,
            bs.code({}, 'ins'), ` component.`
        ]),
        bs.e({ style: styles.bsExample }, bs.p({}, bs.ins({}, 'This line of text is meant to be treated as an addition to the document.'))),
        bs.figure({ style: styles.highlight }, pre({}, bs.code({ style: langJs }, [
            `bs.ins({}, 'This line of text is meant to be treated as an addition to the document.')`
        ]))),
        bs.h3({ attrs: { id: 'underlined-text' } }, 'Underlined text'),
        bs.p({}, [
            `To underline text use the `,
            bs.code({}, 'u'), ` or `, bs.code({}, 'underlined'), ` component.`
        ]),
        bs.e({ style: styles.bsExample }, bs.p({}, bs.u({}, 'This line of text will render as underlined.'))),
        bs.figure({ style: styles.highlight }, pre({}, bs.code({ style: langJs }, [
            `bs.u({}, 'This line of text will render as underlined.')`
        ]))),
        bs.h3({ attrs: { id: 'small-text' } }, 'Small text'),
        bs.p({}, [
            `For de-emphasizing inline or blocks of text, use the `, bs.code({}, 'small'),
            ` component to set text at 85% the size of the parent. Heading elements receive their own `, bs.code({}, 'font-size'),
            ` for nested `, bs.code({}, 'small'), ` components.`
        ]),
        bs.p({}, [
            `You may alternatively use an inline element with `, bs.code({}, 'bs.typography.small'),
            ` style in place of any `, bs.code({}, 'small'),
            ` component.`
        ]),
        bs.e({ style: styles.bsExample }, bs.p({}, bs.small({}, 'This line of text is meant to be treated as fine print.'))),
        bs.figure({ style: styles.highlight }, pre({}, bs.code({ style: langJs }, [
            `bs.small({}, 'This line of text is meant to be treated as fine print.')`
        ]))),
        bs.h3({ attrs: { id: 'inserted-text' } }, 'Inserted text'),
        bs.p({}, [
            `For indicating additions to the document use the `,
            bs.code({}, 'ins'), ` component.`
        ]),
        bs.e({ style: styles.bsExample }, bs.p({}, bs.ins({}, 'This line of text is meant to be treated as an addition to the document.'))),
        bs.figure({ style: styles.highlight }, pre({}, bs.code({ style: langJs }, [
            `bs.ins({}, 'This line of text is meant to be treated as an addition to the document.')`
        ]))),
        bs.h3({ attrs: { id: 'bold-text' } }, 'Bold text'),
        bs.p({}, `For emphasizing a snippet of text with a heavier font-weight.`),
        bs.e({ style: styles.bsExample }, bs.p({}, ['The following snippet of text is ', bs.strong({}, 'rendered as bold text'), '.'])),
        bs.figure({ style: styles.highlight }, pre({}, bs.code({ style: langJs }, [
            `['The following snippet of text is ', bs.strong({}, 'rendered as bold text'), '.']`
        ]))),
        bs.h3({ attrs: { id: 'italics' } }, 'Italics'),
        bs.p({}, `For emphasizing a snippet of text with italics.`),
        bs.e({ style: styles.bsExample }, bs.p({}, ['The following snippet of text is ', bs.em({}, 'rendered as italicized  text'), '.'])),
        bs.figure({ style: styles.highlight }, pre({}, bs.code({ style: langJs }, [
            `['The following snippet of text is ', bs.em({}, 'rendered as italicized  text'), '.']`
        ])))
    ];
}

function alignmentStyles(): b.IBobrilChildren {
    return [
        b.anchor(bs.h2({ attrs: { id: 'type-alignment' } }, 'Alignment styles')),
        bs.p({}, [
            `Easily realign text to components with text alignment classes.`
        ]),
        bs.e({ style: styles.bsExample }, [
            bs.p({ style: bs.typography.textLeft }, 'Left aligned text.'),
            bs.p({ style: bs.typography.textCenter }, 'Center aligned text.'),
            bs.p({ style: bs.typography.textRight }, 'Right aligned text.'),
            bs.p({ style: bs.typography.textJustify }, 'Justified  text.'),
            bs.p({ style: bs.typography.textNowrap }, 'No wrap text.')
        ]),
        bs.figure({ style: styles.highlight }, pre({}, bs.code({ style: langJs }, [
            `[`, bs.e({ tag: 'br' }),
            `   bs.p({ style: bs.typography.textLeft }, 'Left aligned text.'),`, bs.e({ tag: 'br' }),
            `   bs.p({ style: bs.typography.textCenter }, 'Center aligned text.'),`, bs.e({ tag: 'br' }),
            `   bs.p({ style: bs.typography.textRight }, 'Right aligned text.'),`, bs.e({ tag: 'br' }),
            `   bs.p({ style: bs.typography.textJustify }, 'Justified  text.'),`, bs.e({ tag: 'br' }),
            `   bs.p({ style: bs.typography.textNowrap }, 'No wrap text.')`, bs.e({ tag: 'br' }),
            `]`
        ])))
    ];
}

function transformatiomStyles(): b.IBobrilChildren {
    return [
        b.anchor(bs.h2({ attrs: { id: 'type-transformation' } }, 'Transformation styles')),
        bs.p({}, [
            `Easily realign text to components with text alignment classes.`
        ]),
        bs.e({ style: styles.bsExample }, [
            bs.p({ style: bs.typography.textLowercase }, 'Lowercased text.'),
            bs.p({ style: bs.typography.textUppercase }, 'Uppercased text.'),
            bs.p({ style: bs.typography.textCapitalize }, 'Capitalized text.')
        ]),
        bs.figure({ style: styles.highlight }, pre({}, bs.code({ style: langJs }, [
            `[`, bs.e({ tag: 'br' }),
            `   bs.p({ style: bs.typography.textLowercase }, 'Lowercased text.'),`, bs.e({ tag: 'br' }),
            `   bs.p({ style: bs.typography.textUppercase }, 'Uppercased text.'),`, bs.e({ tag: 'br' }),
            `   bs.p({ style: bs.typography.textCapitalize }, 'Capitalized text.')`, bs.e({ tag: 'br' }),
            `]`
        ])))
    ];
}

function abbreviations(): b.IBobrilChildren {
    return [
        b.anchor(bs.h2({ attrs: { id: 'type-abbreviations' } }, 'Abbreviations')),
        bs.p({}, [
            `Stylized implementation of HTML's `, bs.code({}, '<abbr>'),
            ` element for abbreviations and acronyms to show the expanded version on hover. Abbreviations with a `,
            bs.code({}, 'title'),
            ` input data property attribute have a light dotted bottom border and a help cursor on hover, 
            providing additional context on hover and to users of assistive technologies.`
        ]),
        bs.h3({ attrs: { id: 'basic-abbreviation' } }, 'Basic abbreviation'),
        bs.e({ style: styles.bsExample }, ['An abbreviation of the word attribute is ', bs.abbr({ title: 'attribute' }, 'attr'), '.']),
        bs.figure({ style: styles.highlight }, pre({}, bs.code({ style: langJs }, [
            `['An abbreviation of the word attribute is ', bs.abbr({ title: 'attribute' }, 'attr'), '.']`
        ]))),
        bs.h3({ attrs: { id: 'initialism' } }, 'Initialism'),
        bs.p({}, [
            `Set `, bs.code({}, 'initialism'), ` input data property to an abbreviation for a slightly smaller font-size.`
        ]),
        bs.e(
            { style: styles.bsExample },
            [bs.abbr({ title: 'HyperText Markup Language', initialism: true }, 'HTML'), ' is the best thing since sliced bread.']
        ),
        bs.figure({ style: styles.highlight }, pre({}, bs.code({ style: langJs }, [
            `[`, bs.e({ tag: 'br' }),
            `   bs.abbr({ title: 'HyperText Markup Language', initialism: true }, 'HTML'),`, bs.e({ tag: 'br' }),
            `   ' is the best thing since sliced bread.'`, bs.e({ tag: 'br' }),
            `]`
        ])))
    ];
}

function addresses(): b.IBobrilChildren {
    return [
        b.anchor(bs.h2({ attrs: { id: 'type-addresses' } }, 'Addresses')),
        bs.p({}, [
            `Present contact information for the nearest ancestor or the entire body of work. 
            Preserve formatting by ending all lines with `, bs.code({}, `bs.e({ tag: 'br' })`)
        ]),
        bs.e({ style: styles.bsExample }, [
            bs.address({}, [
                bs.strong({}, 'Twitter, Inc.'), bs.e({ tag: 'br' }),
                '1355 Market Street, Suite 900', bs.e({ tag: 'br' }),
                'San Francisco, CA 94103', bs.e({ tag: 'br' }),
                bs.abbr({ title: 'Phone' }, 'P:'), ' (123) 456-7890'
            ]),
            bs.address({}, [
                bs.strong({}, 'Full Name'), bs.e({ tag: 'br' }),
                bs.a({ href: 'mailto:#' }, 'first.last@example.com')
            ])
        ]),
        bs.figure({ style: styles.highlight }, pre({}, bs.code({ style: langJs }, [
            `[`, bs.e({ tag: 'br' }),
            `   bs.address({}, [`, bs.e({ tag: 'br' }),
            `       bs.strong({}, 'Twitter, Inc.'), bs.e({ tag: 'br' }),`, bs.e({ tag: 'br' }),
            `       '1355 Market Street, Suite 900', bs.e({ tag: 'br' }),`, bs.e({ tag: 'br' }),
            `       'San Francisco, CA 94103', bs.e({ tag: 'br' }),`, bs.e({ tag: 'br' }),
            `       bs.abbr({ title: 'Phone'}, 'P:'), ' (123) 456-7890'`, bs.e({ tag: 'br' }),
            `   ]),`, bs.e({ tag: 'br' }),
            `   bs.address({}, [`, bs.e({ tag: 'br' }),
            `       bs.strong({}, 'Full Name'), bs.e({ tag: 'br' }),`, bs.e({ tag: 'br' }),
            `       bs.a({ href: 'mailto:#' }, 'first.last@example.com')`, bs.e({ tag: 'br' }),
            `   ])`, bs.e({ tag: 'br' }),
            `]`
        ])))
    ];
}

function blockquotes(): b.IBobrilChildren {
    return [
        b.anchor(bs.h2({ attrs: { id: 'type-blockquotes' } }, 'Blockquotes')),
        bs.p({}, `For quoting blocks of content from another source within your document.`),
        bs.h3({ attrs: { id: 'default-blockquotes' } }, 'Default blockquote'),
        bs.p({}, [
            `Wrap `, bs.code({}, 'bs.blockquote'), `around any HTML as the quote. For straight quotes, we recommend a `,
            bs.code({}, 'bs.p'), '.'
        ]),
        bs.e({ style: styles.bsExample }, [
            bs.blockquote({}, bs.p({}, 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.'))
        ]),
        bs.figure({ style: styles.highlight }, pre({}, bs.code({ style: langJs }, [
            `bs.blockquote({}, bs.p({}, 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.'))`
        ]))),
        bs.h3({ attrs: { id: 'blockquote-options' } }, 'Blockquote options'),
        bs.p({}, ['Style and content changes for simple variations on a standard ', bs.code({}, 'bs.blockquote'), '.']),
        bs.h4({ attrs: { id: 'naming-a-source' } }, 'Naming a source'),
        bs.p({}, [
            `Add a `, bs.code({}, 'bs.footer'),
            `for identifying the source. Wrap the name of the source work in `,
            bs.code({}, 'bs.cite'), `.`
        ]),
        bs.e({ style: styles.bsExample }, [
            bs.blockquote({}, [
                bs.p({}, 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.'),
                bs.footer({}, ['Someone famous in ', bs.cite({ title: 'Source Title' }, 'Source Title')])
            ])
        ]),
        bs.figure({ style: styles.highlight }, pre({}, bs.code({ style: langJs }, [
            `bs.blockquote({}, [`, bs.e({ tag: 'br' }),
            `    bs.p({}, 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.'),`, bs.e({ tag: 'br' }),
            `    bs.footer({}, ['Someone famous in ', bs.cite({ title: 'Source Title' }, 'Source Title')])`, bs.e({ tag: 'br' }),
            `])`
        ]))),
        bs.h4({ attrs: { id: 'alternate-displays' } }, 'Alternate displays'),
        bs.p({}, [
            `set a `, bs.code({}, 'reverse'),
            ` input date property for a blockquote with right-aligned content.`
        ]),
        bs.e({ style: styles.bsExample }, [
            bs.blockquote(
                { reverse: true },
                bs.p({}, 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.'))
        ]),
        bs.figure({ style: styles.highlight }, pre({}, bs.code({ style: langJs }, [
            `bs.blockquote({ reverse: true }, bs.p({}, 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
            Integer posuere erat a ante.'))`
        ])))
    ];
}

function lists(): b.IBobrilChildren {
    return [
        b.anchor(bs.h2({ attrs: { id: 'type-lists' } }, 'Lists')),
        bs.h3({ attrs: { id: 'unordered' } }, 'Unordered'),
        bs.p({}, `A list of items in which the order does not explicitly matter.`),
        bs.e({ style: styles.bsExample }, bs.ul({}, [
            bs.li({}, 'Lorem ipsum dolor sit amet'),
            bs.li({}, 'Consectetur adipiscing elit'),
            bs.li({}, 'Integer molestie lorem at massa'),
            bs.li({}, 'Facilisis in pretium nisl aliquet'),
            bs.li({}, 'Nulla volutpat aliquam velit'),
            bs.li({}, bs.ul({}, [
                bs.li({}, 'Phasellus iaculis neque'),
                bs.li({}, 'Purus sodales ultricies'),
                bs.li({}, 'Vestibulum laoreet porttitor sem'),
                bs.li({}, 'Ac tristique libero volutpat at')
            ])),
            bs.li({}, 'Faucibus porta lacus fringilla vel'),
            bs.li({}, 'Aenean sit amet erat nunc'),
            bs.li({}, 'Eget porttitor lorem')
        ])),
        bs.figure({ style: styles.highlight }, pre({}, bs.code({ style: langJs }, [
            `bs.ul({}, [`, bs.e({ tag: 'br' }),
            `    bs.li({}, ...)`, bs.e({ tag: 'br' }),
            `])`, bs.e({ tag: 'br' })
        ]))),
        bs.h3({ attrs: { id: 'ordered' } }, 'Ordered'),
        bs.p({}, `A list of items in which the order does explicitly matter.`),
        bs.e({ style: styles.bsExample }, bs.ol({}, [
            bs.li({}, 'Lorem ipsum dolor sit amet'),
            bs.li({}, 'Consectetur adipiscing elit'),
            bs.li({}, 'Integer molestie lorem at massa'),
            bs.li({}, 'Facilisis in pretium nisl aliquet'),
            bs.li({}, 'Nulla volutpat aliquam velit'),
            bs.li({}, 'Faucibus porta lacus fringilla vel'),
            bs.li({}, 'Aenean sit amet erat nunc'),
            bs.li({}, 'Eget porttitor lorem')
        ])),
        bs.figure({ style: styles.highlight }, pre({}, bs.code({ style: langJs }, [
            `bs.ol({}, [`, bs.e({ tag: 'br' }),
            `    bs.li({}, ...)`, bs.e({ tag: 'br' }),
            `])`
        ]))),
        bs.h3({ attrs: { id: 'unstyled' } }, 'Unstyled'),
        bs.p({}, [`Remove the default `, bs.code({}, 'list-style'), ` and left margin on list items (immediate children only). 
        This only applies to immediate children list items, meaning you will need to add the class for any nested lists as well.`]),
        bs.e({ style: styles.bsExample }, bs.ul({ unstyled: true }, [
            bs.li({}, 'Lorem ipsum dolor sit amet'),
            bs.li({}, 'Consectetur adipiscing elit'),
            bs.li({}, 'Integer molestie lorem at massa'),
            bs.li({}, 'Facilisis in pretium nisl aliquet'),
            bs.li({}, 'Nulla volutpat aliquam velit'),
            bs.li({}, bs.ul({}, [
                bs.li({}, 'Phasellus iaculis neque'),
                bs.li({}, 'Purus sodales ultricies'),
                bs.li({}, 'Vestibulum laoreet porttitor sem'),
                bs.li({}, 'Ac tristique libero volutpat at')
            ])),
            bs.li({}, 'Faucibus porta lacus fringilla vel'),
            bs.li({}, 'Aenean sit amet erat nunc'),
            bs.li({}, 'Eget porttitor lorem')
        ])),
        bs.figure({ style: styles.highlight }, pre({}, bs.code({ style: langJs }, [
            `bs.ul({ unstyled: true }, [`, bs.e({ tag: 'br' }),
            `    bs.li({}, ...)`, bs.e({ tag: 'br' }),
            `])`
        ]))),
        bs.h3({ attrs: { id: 'inline' } }, 'Inline'),
        bs.p({}, [`Place all list items on a single line with `, bs.code({}, 'display: inline-block;'), ` and some light padding.`]),
        bs.e({ style: styles.bsExample }, bs.ul({ inline: true }, [
            bs.li({}, 'Lorem ipsum'),
            bs.li({}, 'Phasellus iaculis'),
            bs.li({}, 'Nulla volutpat')
        ])),
        bs.figure({ style: styles.highlight }, pre({}, bs.code({ style: langJs }, [
            `bs.ul({ inline: true }, [`, bs.e({ tag: 'br' }),
            `    bs.li({}, ...)`, bs.e({ tag: 'br' }),
            `])`
        ]))),
        bs.h3({ attrs: { id: 'description' } }, 'Description'),
        bs.p({}, `A list of terms with their associated descriptions.`),
        bs.e({ style: styles.bsExample }, bs.dl({}, [
            bs.dt({}, 'Description lists'),
            bs.dd({}, 'A description list is perfect for defining terms.'),
            bs.dt({}, 'Euismod'),
            bs.dd({}, 'Vestibulum id ligula porta felis euismod semper eget lacinia odio sem nec elit.'),
            bs.dd({}, 'Donec id elit non mi porta gravida at eget metus.'),
            bs.dt({}, 'Malesuada porta'),
            bs.dd({}, 'Etiam porta sem malesuada magna mollis euismod.')
        ])),
        bs.figure({ style: styles.highlight }, pre({}, bs.code({ style: langJs }, [
            `bs.dl({}, [`, bs.e({ tag: 'br' }),
            `    bs.dt({}, ...)`, bs.e({ tag: 'br' }),
            `    bs.dd({}, ...)`, bs.e({ tag: 'br' }),
            `])`
        ]))),
        bs.h3({ attrs: { id: 'horizontal-description' } }, 'Horizontal description'),
        bs.p({}, [`Make terms and descriptions in `, bs.code({}, `<dl>`), ` line up side-by-side. Starts off stacked like default `,
            bs.code({}, `<dl>`), `s, but when the navbar expands, so do these.`]),
        bs.e({ style: styles.bsExample }, bs.dl({ horizontal: true }, [
            bs.dt({}, 'Description lists'),
            bs.dd({}, 'A description list is perfect for defining terms.'),
            bs.dt({}, 'Euismod'),
            bs.dd({}, 'Vestibulum id ligula porta felis euismod semper eget lacinia odio sem nec elit.'),
            bs.dd({}, 'Donec id elit non mi porta gravida at eget metus.'),
            bs.dt({}, 'Malesuada porta'),
            bs.dd({}, 'Etiam porta sem malesuada magna mollis euismod.'),
            bs.dt({}, 'Felis euismod semper eget lacinia'),
            bs.dd({}, 'Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus.')
        ])),
        bs.figure({ style: styles.highlight }, pre({}, bs.code({ style: langJs }, [
            `bs.dl({ horizontal: true }, [`, bs.e({ tag: 'br' }),
            `    bs.dt({}, ...)`, bs.e({ tag: 'br' }),
            `    bs.dd({}, ...)`, bs.e({ tag: 'br' }),
            `])`
        ]))),
        bs.e({ style: [styles.bsCallout, styles.bsCalloutInfo] }, [
            bs.h4({}, 'Auto-truncating'),
            bs.p({}, [`Horizontal description lists will truncate terms that are too long to fit in the left column with `,
                bs.code({}, 'text-overflow'), `. In narrower viewports, they will change to the default stacked layout.`])
        ])
    ];
}

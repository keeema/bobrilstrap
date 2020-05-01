import * as b from "bobril";
import * as bs from "../../index";
import { styles } from "../bsexample/css";
import { pre, langJs } from "../prettify/pre";
import { section } from "../common/section";

export const typographyPage = b.createVirtualComponent({
    render(_ctx: b.IBobrilCtx, me: b.IBobrilNode) {
        me.children = section(
            {
                header: "Typography",
                id: "type"
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
            ]
        );
    }
});

function headings(): b.IBobrilChildren {
    return [
        b.anchor(bs.H2({ attrs: { id: "type-headings" } }, "Headings")),
        bs.P({}, [
            `All HTML headings, `,
            bs.Code({}, "<h1>"),
            ` through `,
            bs.Code({}, "<h6>"),
            ` are available.`,
            bs.Code({}, "H1"),
            ` through `,
            bs.Code({}, "H6"),
            ` components are also available, for when you want to match the font styling of a heading but still want 
            your text to be displayed inline.`
        ]),
        bs.E(
            { style: [styles.bsExample, styles.bsExampleType] },
            bs.Table({
                body: {
                    rows: [
                        {
                            columns: [
                                { children: bs.H1({}, "bs.H1({}, ...) Bootstrap heading") },
                                { children: "Semibold 36px", style: styles.typeInfo }
                            ]
                        },
                        {
                            columns: [
                                { children: bs.H2({}, "bs.H2({}, ...) Bootstrap heading") },
                                {
                                    children: "Semibold 30px",
                                    style: styles.typeInfo
                                }
                            ]
                        },
                        {
                            columns: [
                                { children: bs.H3({}, "bs.H3({}, ...) Bootstrap heading") },
                                { children: "Semibold 24px", style: styles.typeInfo }
                            ]
                        },
                        {
                            columns: [
                                { children: bs.H4({}, "bs.H4({}, ...) Bootstrap heading") },
                                { children: "Semibold 18px", style: styles.typeInfo }
                            ]
                        },
                        {
                            columns: [
                                { children: bs.H5({}, "bs.H5({}, ...) Bootstrap heading") },
                                { children: "Semibold 14px", style: styles.typeInfo }
                            ]
                        },
                        {
                            columns: [
                                { children: bs.H6({}, "bs.H6({}, ...) Bootstrap heading") },
                                { children: "Semibold 12px", style: styles.typeInfo }
                            ]
                        }
                    ]
                }
            })
        ),
        bs.Figure(
            { style: styles.highlight },
            pre(
                {},
                bs.Code({ style: langJs }, [
                    `bs.H1({}, 'bs.H1({}, ...) Bootstrap heading')`,
                    bs.E({ tag: "br" }),
                    `bs.H2({}, 'bs.H2({}, ...) Bootstrap heading')`,
                    bs.E({ tag: "br" }),
                    `bs.H3({}, 'bs.H3({}, ...) Bootstrap heading')`,
                    bs.E({ tag: "br" }),
                    `bs.H4({}, 'bs.H4({}, ...) Bootstrap heading')`,
                    bs.E({ tag: "br" }),
                    `bs.H5({}, 'bs.H5({}, ...) Bootstrap heading')`,
                    bs.E({ tag: "br" }),
                    `bs.H6({}, 'bs.H6({}, ...) Bootstrap heading')`,
                    bs.E({ tag: "br" })
                ])
            )
        ),
        bs.P({}, [
            "Create lighter, secondary text in any heading with ",
            bs.Code({}, "small"),
            " component or ",
            bs.Code({}, "bs.typography.small"),
            " bobril style definition."
        ]),
        bs.E(
            { style: [styles.bsExample, styles.bsExampleType] },
            bs.Table({
                body: {
                    rows: [
                        {
                            columns: [
                                {
                                    children: bs.H1({}, ["bs.H1({}, ...) Bootstrap heading ", bs.Small({}, "Secondary text")])
                                }
                            ]
                        },
                        {
                            columns: [
                                {
                                    children: bs.H2({}, ["bs.H2({}, ...) Bootstrap heading ", bs.Small({}, "Secondary text")])
                                }
                            ]
                        },
                        {
                            columns: [
                                {
                                    children: bs.H3({}, ["bs.H3({}, ...) Bootstrap heading ", bs.Small({}, "Secondary text")])
                                }
                            ]
                        },
                        {
                            columns: [
                                {
                                    children: bs.H4({}, ["bs.H4({}, ...) Bootstrap heading ", bs.Small({}, "Secondary text")])
                                }
                            ]
                        },
                        {
                            columns: [
                                {
                                    children: bs.H5({}, ["bs.H5({}, ...) Bootstrap heading ", bs.Small({}, "Secondary text")])
                                }
                            ]
                        },
                        {
                            columns: [
                                {
                                    children: bs.H6({}, ["bs.H6({}, ...) Bootstrap heading ", bs.Small({}, "Secondary text")])
                                }
                            ]
                        }
                    ]
                }
            })
        ),
        bs.Figure(
            { style: styles.highlight },
            pre(
                {},
                bs.Code({ style: langJs }, [
                    `bs.H1({}, ['bs.H1({}, ...) Bootstrap heading', bs.Small({}, 'Secondary text')])`,
                    bs.E({ tag: "br" }),
                    `bs.H2({}, ['bs.H2({}, ...) Bootstrap heading', bs.Small({}, 'Secondary text')])`,
                    bs.E({ tag: "br" }),
                    `bs.H3({}, ['bs.H3({}, ...) Bootstrap heading', bs.Small({}, 'Secondary text')])`,
                    bs.E({ tag: "br" }),
                    `bs.H4({}, ['bs.H4({}, ...) Bootstrap heading', bs.Small({}, 'Secondary text')])`,
                    bs.E({ tag: "br" }),
                    `bs.H5({}, ['bs.H5({}, ...) Bootstrap heading', bs.Small({}, 'Secondary text')])`,
                    bs.E({ tag: "br" }),
                    `bs.H6({}, ['bs.H6({}, ...) Bootstrap heading', bs.Small({}, 'Secondary text')])`,
                    bs.E({ tag: "br" })
                ])
            )
        )
    ];
}

function bodyCopy(): b.IBobrilChildren {
    return [
        b.anchor(bs.H2({ attrs: { id: "type-body-copy" } }, "Body copy")),
        bs.P({}, [
            `Bootstrap's global default `,
            bs.Code({}, "font-size"),
            ` is `,
            bs.Strong({}, "14px"),
            ", with a ",
            " of ",
            bs.Strong({}, "1.428"),
            ". This is applied to the ",
            bs.Code({}, "<body>"),
            ` and all paragraphs. In addition, `,
            bs.Code({}, "<p>"),
            ` (paragraphs) receive a bottom margin of half their computed line-height (10px by default).`
        ]),
        bs.E({ style: [styles.bsExample] }, [
            bs.P(
                {},
                `Nullam quis risus eget urna mollis ornare vel eu leo. Cum sociis natoque penatibus et magnis dis parturient 
            montes, nascetur ridiculus mus. Nullam id dolor id nibh ultricies vehicula.`
            ),
            bs.P(
                {},
                `Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec ullamcorper nulla 
            non metus auctor fringilla. Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. 
            Donec ullamcorper nulla non metus auctor fringilla.`
            ),
            bs.P(
                {},
                `Maecenas sed diam eget risus varius blandit sit amet non magna. Donec id elit non mi porta gravida at eget metus. 
            Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit.`
            )
        ]),
        bs.Figure({ style: styles.highlight }, pre({}, bs.Code({ style: langJs }, "bs.P({}, ...)"))),
        bs.H3({ attrs: { id: "lead-body-copy" } }, "Lead body copy"),
        bs.P({}, [`Make a paragraph stand out by setting `, bs.Code({}, "lead"), ` input data property.`]),
        bs.E(
            { style: [styles.bsExample] },
            bs.P(
                { lead: true },
                `Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor. Duis mollis, est non commodo luctus.`
            )
        ),
        bs.Figure({ style: styles.highlight }, pre({}, bs.Code({ style: langJs }, "bs.P({ lead: true }, ...)")))
    ];
}

function inlineTextElements(): b.IBobrilChildren {
    return [
        b.anchor(bs.H2({ attrs: { id: "type-inline-text" } }, "Inline text elements")),
        bs.H3({ attrs: { id: "marked-text" } }, "Marked text"),
        bs.P({}, [`For highlighting a run of text due to its relevance in another context, use the `, bs.Code({}, "Mark"), ` component.`]),
        bs.E({ style: styles.bsExample }, bs.P({}, ["You can use the mark tag to ", bs.Mark({}, "highlight"), " text."])),
        bs.Figure(
            { style: styles.highlight },
            pre({}, bs.Code({ style: langJs }, [`['You can use the mark tag to ', bs.Mark({}, 'highlight'), ' text.']`]))
        ),
        bs.H3({ attrs: { id: "deleted-text" } }, "Deleted text"),
        bs.P({}, [`For indicating blocks of text that have been deleted use the `, bs.Code({}, "Del"), ` component.`]),
        bs.E({ style: styles.bsExample }, bs.P({}, bs.Del({}, "This line of text is meant to be treated as deleted text."))),
        bs.Figure(
            { style: styles.highlight },
            pre({}, bs.Code({ style: langJs }, [`bs.Del({}, 'This line of text is meant to be treated as deleted text.')`]))
        ),
        bs.H3({ attrs: { id: "strikethrough-text" } }, "Strikethrough text"),
        bs.P({}, `For indicating blocks of text that are no longer relevant use the `),
        bs.E({ style: styles.bsExample }, bs.P({}, bs.S({}, "This line of text is meant to be treated as no longer accurate."))),
        bs.Figure(
            { style: styles.highlight },
            pre({}, bs.Code({ style: langJs }, [`bs.S({}, 'This line of text is meant to be treated as no longer accurate.')`]))
        ),
        bs.H3({ attrs: { id: "inserted-text" } }, "Inserted text"),
        bs.P({}, [`For indicating additions to the document use the `, bs.Code({}, "Ins"), ` component.`]),
        bs.E({ style: styles.bsExample }, bs.P({}, bs.Ins({}, "This line of text is meant to be treated as an addition to the document."))),
        bs.Figure(
            { style: styles.highlight },
            pre({}, bs.Code({ style: langJs }, [`bs.Ins({}, 'This line of text is meant to be treated as an addition to the document.')`]))
        ),
        bs.H3({ attrs: { id: "underlined-text" } }, "Underlined text"),
        bs.P({}, [`To underline text use the `, bs.Code({}, "U"), ` or `, bs.Code({}, "Underlined"), ` component.`]),
        bs.E({ style: styles.bsExample }, bs.P({}, bs.U({}, "This line of text will render as underlined."))),
        bs.Figure(
            { style: styles.highlight },
            pre({}, bs.Code({ style: langJs }, [`bs.U({}, 'This line of text will render as underlined.')`]))
        ),
        bs.H3({ attrs: { id: "small-text" } }, "Small text"),
        bs.P({}, [
            `For de-emphasizing inline or blocks of text, use the `,
            bs.Code({}, "Small"),
            ` component to set text at 85% the size of the parent. Heading elements receive their own `,
            bs.Code({}, "font-size"),
            ` for nested `,
            bs.Code({}, "Small"),
            ` components.`
        ]),
        bs.P({}, [
            `You may alternatively use an inline element with `,
            bs.Code({}, "bs.typography.small"),
            ` style in place of any `,
            bs.Code({}, "Small"),
            ` component.`
        ]),
        bs.E({ style: styles.bsExample }, bs.P({}, bs.Small({}, "This line of text is meant to be treated as fine print."))),
        bs.Figure(
            { style: styles.highlight },
            pre({}, bs.Code({ style: langJs }, [`bs.Small({}, 'This line of text is meant to be treated as fine print.')`]))
        ),
        bs.H3({ attrs: { id: "inserted-text" } }, "Inserted text"),
        bs.P({}, [`For indicating additions to the document use the `, bs.Code({}, "Ins"), ` component.`]),
        bs.E({ style: styles.bsExample }, bs.P({}, bs.Ins({}, "This line of text is meant to be treated as an addition to the document."))),
        bs.Figure(
            { style: styles.highlight },
            pre({}, bs.Code({ style: langJs }, [`bs.Ins({}, 'This line of text is meant to be treated as an addition to the document.')`]))
        ),
        bs.H3({ attrs: { id: "bold-text" } }, "Bold text"),
        bs.P({}, `For emphasizing a snippet of text with a heavier font-weight.`),
        bs.E({ style: styles.bsExample }, bs.P({}, ["The following snippet of text is ", bs.Strong({}, "rendered as bold text"), "."])),
        bs.Figure(
            { style: styles.highlight },
            pre({}, bs.Code({ style: langJs }, [`['The following snippet of text is ', bs.Strong({}, 'rendered as bold text'), '.']`]))
        ),
        bs.H3({ attrs: { id: "italics" } }, "Italics"),
        bs.P({}, `For emphasizing a snippet of text with italics.`),
        bs.E({ style: styles.bsExample }, bs.P({}, ["The following snippet of text is ", bs.Em({}, "rendered as italicized  text"), "."])),
        bs.Figure(
            { style: styles.highlight },
            pre({}, bs.Code({ style: langJs }, [`['The following snippet of text is ', bs.Em({}, 'rendered as italicized  text'), '.']`]))
        )
    ];
}

function alignmentStyles(): b.IBobrilChildren {
    return [
        b.anchor(bs.H2({ attrs: { id: "type-alignment" } }, "Alignment styles")),
        bs.P({}, [`Easily realign text to components with text alignment classes.`]),
        bs.E({ style: styles.bsExample }, [
            bs.P({ style: bs.typography.textLeft }, "Left aligned text."),
            bs.P({ style: bs.typography.textCenter }, "Center aligned text."),
            bs.P({ style: bs.typography.textRight }, "Right aligned text."),
            bs.P({ style: bs.typography.textJustify }, "Justified  text."),
            bs.P({ style: bs.typography.textNowrap }, "No wrap text.")
        ]),
        bs.Figure(
            { style: styles.highlight },
            pre(
                {},
                bs.Code({ style: langJs }, [
                    `[`,
                    bs.E({ tag: "br" }),
                    `   bs.P({ style: bs.typography.textLeft }, 'Left aligned text.'),`,
                    bs.E({ tag: "br" }),
                    `   bs.P({ style: bs.typography.textCenter }, 'Center aligned text.'),`,
                    bs.E({ tag: "br" }),
                    `   bs.P({ style: bs.typography.textRight }, 'Right aligned text.'),`,
                    bs.E({ tag: "br" }),
                    `   bs.P({ style: bs.typography.textJustify }, 'Justified  text.'),`,
                    bs.E({ tag: "br" }),
                    `   bs.P({ style: bs.typography.textNowrap }, 'No wrap text.')`,
                    bs.E({ tag: "br" }),
                    `]`
                ])
            )
        )
    ];
}

function transformatiomStyles(): b.IBobrilChildren {
    return [
        b.anchor(bs.H2({ attrs: { id: "type-transformation" } }, "Transformation styles")),
        bs.P({}, [`Easily realign text to components with text alignment classes.`]),
        bs.E({ style: styles.bsExample }, [
            bs.P({ style: bs.typography.textLowercase }, "Lowercased text."),
            bs.P({ style: bs.typography.textUppercase }, "Uppercased text."),
            bs.P({ style: bs.typography.textCapitalize }, "Capitalized text.")
        ]),
        bs.Figure(
            { style: styles.highlight },
            pre(
                {},
                bs.Code({ style: langJs }, [
                    `[`,
                    bs.E({ tag: "br" }),
                    `   bs.P({ style: bs.typography.textLowercase }, 'Lowercased text.'),`,
                    bs.E({ tag: "br" }),
                    `   bs.P({ style: bs.typography.textUppercase }, 'Uppercased text.'),`,
                    bs.E({ tag: "br" }),
                    `   bs.P({ style: bs.typography.textCapitalize }, 'Capitalized text.')`,
                    bs.E({ tag: "br" }),
                    `]`
                ])
            )
        )
    ];
}

function abbreviations(): b.IBobrilChildren {
    return [
        b.anchor(bs.H2({ attrs: { id: "type-abbreviations" } }, "Abbreviations")),
        bs.P({}, [
            `Stylized implementation of HTML's `,
            bs.Code({}, "<abbr>"),
            ` element for abbreviations and acronyms to show the expanded version on hover. Abbreviations with a `,
            bs.Code({}, "title"),
            ` input data property attribute have a light dotted bottom border and a help cursor on hover, 
            providing additional context on hover and to users of assistive technologies.`
        ]),
        bs.H3({ attrs: { id: "basic-abbreviation" } }, "Basic abbreviation"),
        bs.E({ style: styles.bsExample }, ["An abbreviation of the word attribute is ", bs.Abbr({ title: "attribute" }, "attr"), "."]),
        bs.Figure(
            { style: styles.highlight },
            pre(
                {},
                bs.Code({ style: langJs }, [`['An abbreviation of the word attribute is ', bs.Abbr({ title: 'attribute' }, 'attr'), '.']`])
            )
        ),
        bs.H3({ attrs: { id: "initialism" } }, "Initialism"),
        bs.P({}, [`Set `, bs.Code({}, "initialism"), ` input data property to an abbreviation for a slightly smaller font-size.`]),
        bs.E({ style: styles.bsExample }, [
            bs.Abbr({ title: "HyperText Markup Language", initialism: true }, "HTML"),
            " is the best thing since sliced bread."
        ]),
        bs.Figure(
            { style: styles.highlight },
            pre(
                {},
                bs.Code({ style: langJs }, [
                    `[`,
                    bs.E({ tag: "br" }),
                    `   bs.Abbr({ title: 'HyperText Markup Language', initialism: true }, 'HTML'),`,
                    bs.E({ tag: "br" }),
                    `   ' is the best thing since sliced bread.'`,
                    bs.E({ tag: "br" }),
                    `]`
                ])
            )
        )
    ];
}

function addresses(): b.IBobrilChildren {
    return [
        b.anchor(bs.H2({ attrs: { id: "type-addresses" } }, "Addresses")),
        bs.P({}, [
            `Present contact information for the nearest ancestor or the entire body of work. 
            Preserve formatting by ending all lines with `,
            bs.Code({}, `bs.E({ tag: 'br' })`)
        ]),
        bs.E({ style: styles.bsExample }, [
            bs.Address({}, [
                bs.Strong({}, "Twitter, Inc."),
                bs.E({ tag: "br" }),
                "1355 Market Street, Suite 900",
                bs.E({ tag: "br" }),
                "San Francisco, CA 94103",
                bs.E({ tag: "br" }),
                bs.Abbr({ title: "Phone" }, "P:"),
                " (123) 456-7890"
            ]),
            bs.Address({}, [bs.Strong({}, "Full Name"), bs.E({ tag: "br" }), bs.A({ href: "mailto:#" }, "first.last@example.com")])
        ]),
        bs.Figure(
            { style: styles.highlight },
            pre(
                {},
                bs.Code({ style: langJs }, [
                    `[`,
                    bs.E({ tag: "br" }),
                    `   bs.Address({}, [`,
                    bs.E({ tag: "br" }),
                    `       bs.Strong({}, 'Twitter, Inc.'), bs.E({ tag: 'br' }),`,
                    bs.E({ tag: "br" }),
                    `       '1355 Market Street, Suite 900', bs.E({ tag: 'br' }),`,
                    bs.E({ tag: "br" }),
                    `       'San Francisco, CA 94103', bs.E({ tag: 'br' }),`,
                    bs.E({ tag: "br" }),
                    `       bs.Abbr({ title: 'Phone'}, 'P:'), ' (123) 456-7890'`,
                    bs.E({ tag: "br" }),
                    `   ]),`,
                    bs.E({ tag: "br" }),
                    `   bs.Address({}, [`,
                    bs.E({ tag: "br" }),
                    `       bs.Strong({}, 'Full Name'), bs.E({ tag: 'br' }),`,
                    bs.E({ tag: "br" }),
                    `       bs.A({ href: 'mailto:#' }, 'first.last@example.com')`,
                    bs.E({ tag: "br" }),
                    `   ])`,
                    bs.E({ tag: "br" }),
                    `]`
                ])
            )
        )
    ];
}

function blockquotes(): b.IBobrilChildren {
    return [
        b.anchor(bs.H2({ attrs: { id: "type-blockquotes" } }, "Blockquotes")),
        bs.P({}, `For quoting blocks of content from another source within your document.`),
        bs.H3({ attrs: { id: "default-blockquotes" } }, "Default blockquote"),
        bs.P({}, [
            `Wrap `,
            bs.Code({}, "bs.Blockquote"),
            `around any HTML as the quote. For straight quotes, we recommend a `,
            bs.Code({}, "bs.P"),
            "."
        ]),
        bs.E({ style: styles.bsExample }, [
            bs.Blockquote({}, bs.P({}, "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante."))
        ]),
        bs.Figure(
            { style: styles.highlight },
            pre(
                {},
                bs.Code({ style: langJs }, [
                    `bs.Blockquote({}, bs.P({}, 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.'))`
                ])
            )
        ),
        bs.H3({ attrs: { id: "blockquote-options" } }, "Blockquote options"),
        bs.P({}, ["Style and content changes for simple variations on a standard ", bs.Code({}, "bs.Blockquote"), "."]),
        bs.H4({ attrs: { id: "naming-a-source" } }, "Naming a source"),
        bs.P({}, [
            `Add a `,
            bs.Code({}, "bs.Footer"),
            `for identifying the source. Wrap the name of the source work in `,
            bs.Code({}, "bs.Cite"),
            `.`
        ]),
        bs.E({ style: styles.bsExample }, [
            bs.Blockquote({}, [
                bs.P({}, "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante."),
                bs.Footer({}, ["Someone famous in ", bs.Cite({ title: "Source Title" }, "Source Title")])
            ])
        ]),
        bs.Figure(
            { style: styles.highlight },
            pre(
                {},
                bs.Code({ style: langJs }, [
                    `bs.Blockquote({}, [`,
                    bs.E({ tag: "br" }),
                    `    bs.P({}, 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.'),`,
                    bs.E({ tag: "br" }),
                    `    bs.Footer({}, ['Someone famous in ', bs.Cite({ title: 'Source Title' }, 'Source Title')])`,
                    bs.E({ tag: "br" }),
                    `])`
                ])
            )
        ),
        bs.H4({ attrs: { id: "alternate-displays" } }, "Alternate displays"),
        bs.P({}, [`set a `, bs.Code({}, "reverse"), ` input date property for a blockquote with right-aligned content.`]),
        bs.E({ style: styles.bsExample }, [
            bs.Blockquote(
                { reverse: true },
                bs.P({}, "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.")
            )
        ]),
        bs.Figure(
            { style: styles.highlight },
            pre(
                {},
                bs.Code({ style: langJs }, [
                    `bs.Blockquote({ reverse: true }, bs.P({}, 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
            Integer posuere erat a ante.'))`
                ])
            )
        )
    ];
}

function lists(): b.IBobrilChildren {
    return [
        b.anchor(bs.H2({ attrs: { id: "type-lists" } }, "Lists")),
        bs.H3({ attrs: { id: "unordered" } }, "Unordered"),
        bs.P({}, `A list of items in which the order does not explicitly matter.`),
        bs.E(
            { style: styles.bsExample },
            bs.Ul({}, [
                bs.Li({}, "Lorem ipsum dolor sit amet"),
                bs.Li({}, "Consectetur adipiscing elit"),
                bs.Li({}, "Integer molestie lorem at massa"),
                bs.Li({}, "Facilisis in pretium nisl aliquet"),
                bs.Li({}, "Nulla volutpat aliquam velit"),
                bs.Li(
                    {},
                    bs.Ul({}, [
                        bs.Li({}, "Phasellus iaculis neque"),
                        bs.Li({}, "Purus sodales ultricies"),
                        bs.Li({}, "Vestibulum laoreet porttitor sem"),
                        bs.Li({}, "Ac tristique libero volutpat at")
                    ])
                ),
                bs.Li({}, "Faucibus porta lacus fringilla vel"),
                bs.Li({}, "Aenean sit amet erat nunc"),
                bs.Li({}, "Eget porttitor lorem")
            ])
        ),
        bs.Figure(
            { style: styles.highlight },
            pre(
                {},
                bs.Code({ style: langJs }, [
                    `bs.Ul({}, [`,
                    bs.E({ tag: "br" }),
                    `    bs.Li({}, ...)`,
                    bs.E({ tag: "br" }),
                    `])`,
                    bs.E({ tag: "br" })
                ])
            )
        ),
        bs.H3({ attrs: { id: "ordered" } }, "Ordered"),
        bs.P({}, `A list of items in which the order does explicitly matter.`),
        bs.E(
            { style: styles.bsExample },
            bs.Ol({}, [
                bs.Li({}, "Lorem ipsum dolor sit amet"),
                bs.Li({}, "Consectetur adipiscing elit"),
                bs.Li({}, "Integer molestie lorem at massa"),
                bs.Li({}, "Facilisis in pretium nisl aliquet"),
                bs.Li({}, "Nulla volutpat aliquam velit"),
                bs.Li({}, "Faucibus porta lacus fringilla vel"),
                bs.Li({}, "Aenean sit amet erat nunc"),
                bs.Li({}, "Eget porttitor lorem")
            ])
        ),
        bs.Figure(
            { style: styles.highlight },
            pre({}, bs.Code({ style: langJs }, [`bs.Ol({}, [`, bs.E({ tag: "br" }), `    bs.Li({}, ...)`, bs.E({ tag: "br" }), `])`]))
        ),
        bs.H3({ attrs: { id: "unstyled" } }, "Unstyled"),
        bs.P({}, [
            `Remove the default `,
            bs.Code({}, "list-style"),
            ` and left margin on list items (immediate children only). 
        This only applies to immediate children list items, meaning you will need to add the class for any nested lists as well.`
        ]),
        bs.E(
            { style: styles.bsExample },
            bs.Ul({ unstyled: true }, [
                bs.Li({}, "Lorem ipsum dolor sit amet"),
                bs.Li({}, "Consectetur adipiscing elit"),
                bs.Li({}, "Integer molestie lorem at massa"),
                bs.Li({}, "Facilisis in pretium nisl aliquet"),
                bs.Li({}, "Nulla volutpat aliquam velit"),
                bs.Li(
                    {},
                    bs.Ul({}, [
                        bs.Li({}, "Phasellus iaculis neque"),
                        bs.Li({}, "Purus sodales ultricies"),
                        bs.Li({}, "Vestibulum laoreet porttitor sem"),
                        bs.Li({}, "Ac tristique libero volutpat at")
                    ])
                ),
                bs.Li({}, "Faucibus porta lacus fringilla vel"),
                bs.Li({}, "Aenean sit amet erat nunc"),
                bs.Li({}, "Eget porttitor lorem")
            ])
        ),
        bs.Figure(
            { style: styles.highlight },
            pre(
                {},
                bs.Code({ style: langJs }, [
                    `bs.Ul({ unstyled: true }, [`,
                    bs.E({ tag: "br" }),
                    `    bs.Li({}, ...)`,
                    bs.E({ tag: "br" }),
                    `])`
                ])
            )
        ),
        bs.H3({ attrs: { id: "inline" } }, "Inline"),
        bs.P({}, [`Place all list items on a single line with `, bs.Code({}, "display: inline-block;"), ` and some light padding.`]),
        bs.E(
            { style: styles.bsExample },
            bs.Ul({ inline: true }, [bs.Li({}, "Lorem ipsum"), bs.Li({}, "Phasellus iaculis"), bs.Li({}, "Nulla volutpat")])
        ),
        bs.Figure(
            { style: styles.highlight },
            pre(
                {},
                bs.Code({ style: langJs }, [
                    `bs.Ul({ inline: true }, [`,
                    bs.E({ tag: "br" }),
                    `    bs.Li({}, ...)`,
                    bs.E({ tag: "br" }),
                    `])`
                ])
            )
        ),
        bs.H3({ attrs: { id: "description" } }, "Description"),
        bs.P({}, `A list of terms with their associated descriptions.`),
        bs.E(
            { style: styles.bsExample },
            bs.Dl({}, [
                bs.Dt({}, "Description lists"),
                bs.Dd({}, "A description list is perfect for defining terms."),
                bs.Dt({}, "Euismod"),
                bs.Dd({}, "Vestibulum id ligula porta felis euismod semper eget lacinia odio sem nec elit."),
                bs.Dd({}, "Donec id elit non mi porta gravida at eget metus."),
                bs.Dt({}, "Malesuada porta"),
                bs.Dd({}, "Etiam porta sem malesuada magna mollis euismod.")
            ])
        ),
        bs.Figure(
            { style: styles.highlight },
            pre(
                {},
                bs.Code({ style: langJs }, [
                    `bs.Dl({}, [`,
                    bs.E({ tag: "br" }),
                    `    bs.Dt({}, ...)`,
                    bs.E({ tag: "br" }),
                    `    bs.Dd({}, ...)`,
                    bs.E({ tag: "br" }),
                    `])`
                ])
            )
        ),
        bs.H3({ attrs: { id: "horizontal-description" } }, "Horizontal description"),
        bs.P({}, [
            `Make terms and descriptions in `,
            bs.Code({}, `<dl>`),
            ` line up side-by-side. Starts off stacked like default `,
            bs.Code({}, `<dl>`),
            `s, but when the navbar expands, so do these.`
        ]),
        bs.E(
            { style: styles.bsExample },
            bs.Dl({ horizontal: true }, [
                bs.Dt({}, "Description lists"),
                bs.Dd({}, "A description list is perfect for defining terms."),
                bs.Dt({}, "Euismod"),
                bs.Dd({}, "Vestibulum id ligula porta felis euismod semper eget lacinia odio sem nec elit."),
                bs.Dd({}, "Donec id elit non mi porta gravida at eget metus."),
                bs.Dt({}, "Malesuada porta"),
                bs.Dd({}, "Etiam porta sem malesuada magna mollis euismod."),
                bs.Dt({}, "Felis euismod semper eget lacinia"),
                bs.Dd(
                    {},
                    "Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus."
                )
            ])
        ),
        bs.Figure(
            { style: styles.highlight },
            pre(
                {},
                bs.Code({ style: langJs }, [
                    `bs.Dl({ horizontal: true }, [`,
                    bs.E({ tag: "br" }),
                    `    bs.Dt({}, ...)`,
                    bs.E({ tag: "br" }),
                    `    bs.Dd({}, ...)`,
                    bs.E({ tag: "br" }),
                    `])`
                ])
            )
        ),
        bs.E({ style: [styles.bsCallout, styles.bsCalloutInfo] }, [
            bs.H4({}, "Auto-truncating"),
            bs.P({}, [
                `Horizontal description lists will truncate terms that are too long to fit in the left column with `,
                bs.Code({}, "text-overflow"),
                `. In narrower viewports, they will change to the default stacked layout.`
            ])
        ])
    ];
}

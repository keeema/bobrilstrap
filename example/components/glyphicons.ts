import * as b from "bobril";
import * as bs from "../../index";
import { styles } from "../bsexample/css";
import { pre, langJs } from "../prettify/pre";
import { section } from "../common/section";

export const glyphicons = b.createVirtualComponent({
    render(_ctx: b.IBobrilCtx, me: b.IBobrilNode) {
        me.children = section(
            {
                header: "Glyphicons",
                id: "glyphicons",
            },
            [availableGlyphs(), howToUse(), examples()]
        );
    },
});

function availableGlyphs(): b.IBobrilChildren {
    return [
        b.anchor(bs.H2({ attrs: { id: "glyphicons-glyphs" } }, "Available glyphs")),
        bs.P({}, [
            `Includes over 250 glyphs in font format from the Glyphicon Halflings set. `,
            bs.A({ href: "https://glyphicons.com/" }, "Glyphicons"),
            ` Halflings are normally not available for free, 
            but their creator has made them available for Bootstrap free of cost. As a thank you, we only ask that 
            you include a link back to `,
            bs.A({ href: "https://glyphicons.com/" }, "Glyphicons"),
            ` whenever possible.`,
        ]),
        bs.E(
            { style: styles.bsGlyphicons },
            bs.Ul(
                { style: styles.bsGlyphiconsList },
                Object.keys(bs.GlyphIcon)
                    .filter((key) => !isNaN(parseInt(key, 10)))
                    .map((key) => parseInt(key, 10))
                    .map((key) =>
                        bs.Li({}, [
                            bs.Glyphicon({ icon: key }),
                            bs.Span({ style: styles.glyphiconClass }, `bs.Glyphicon({ icon: bs.GlyphIcon.${bs.GlyphIcon[key]} })`),
                        ])
                    )
            )
        ),
    ];
}

function howToUse(): b.IBobrilChildren {
    return [
        b.anchor(bs.H2({ attrs: { id: "glyphicons-how-to-use" } }, "How to use")),
        bs.P({}, [
            `Includes over 250 glyphs in font format from the Glyphicon Halflings set. `,
            bs.A({ href: "https://glyphicons.com/" }, "Glyphicons"),
            ` Halflings are normally not available for free, 
            but their creator has made them available for Bootstrap free of cost. As a thank you, we only ask that 
            you include a link back to `,
            bs.A({ href: "https://glyphicons.com/" }, "Glyphicons"),
            ` whenever possible.`,
        ]),
        bs.E(
            {
                style: [styles.bsCallout, styles.bsCalloutDanger],
                attrs: { id: "callout-glyphicons-dont-mix" },
            },
            [
                bs.H4({}, `Don't mix with other components`),
                bs.P({}, [
                    `Icon styles cannot be directly combined with other components. They should not be used along with other styles on 
                the same element.`,
                ]),
            ]
        ),
        bs.E(
            {
                style: [styles.bsCallout, styles.bsCalloutDanger],
                attrs: { id: "callout-glyphicons-empty-only" },
            },
            [bs.H4({}, `Only for use on empty elements`), bs.P({}, `Icon component should only be used with no child elements.`)]
        ),
        bs.E(
            {
                style: [styles.bsCallout, styles.bsCalloutInfo],
                attrs: { id: "callout-glyphicons-accessibility" },
            },
            [
                bs.H4({}, `Accessible icons`),
                bs.P({}, [
                    `Modern versions of assistive technologies will announce CSS generated content, as well as specific Unicode characters. 
                To avoid unintended and confusing output in screen readers (particularly when icons are used purely for decoration), we 
                hide them with the `,
                    bs.Code({}, 'aria-hidden="true"'),
                    ` attribute.`,
                ]),
                bs.P({}, [
                    `If you're using an icon to convey meaning (rather than only as a decorative element), ensure that this meaning is also 
                conveyed to assistive technologies – for instance, include additional content, visually hidden with the `,
                    bs.Code({}, "bs.helpers.srOnly"),
                    ` style.`,
                ]),
                bs.P({}, [
                    `If you're creating controls with no other text (such as a `,
                    bs.Code({}, "bs.Button({...}, ...)"),
                    `) that only contains an icon), you should always provide alternative content to identify the purpose of the control, 
                so that it will make sense to users of assistive technologies. In this case, you could add an `,
                    bs.Code({}, "aria.label"),
                    ` input data property on the control itself.`,
                ]),
            ]
        ),
        bs.Figure({ style: styles.highlight }, pre({}, bs.Code({ style: langJs }, [`bs.Glyphicon({ icon: bs.GlyphIcon.Search })`]))),
    ];
}

function examples(): b.IBobrilChildren {
    return [
        b.anchor(bs.H2({ attrs: { id: "glyphicons-examples" } }, "Examples")),
        bs.P({}, `Use them in buttons, button groups for a toolbar, navigation, or prepended form inputs.`),
        bs.E({ style: styles.bsExample }, [
            bs.ButtonToolbar(
                {},
                bs.ButtonGroup({}, [
                    bs.Button({ aria: { label: "Left align" } }, bs.Glyphicon({ icon: bs.GlyphIcon.AlignLeft })),
                    bs.Button({ aria: { label: "Center align" } }, bs.Glyphicon({ icon: bs.GlyphIcon.AlignCenter })),
                    bs.Button({ aria: { label: "Right align" } }, bs.Glyphicon({ icon: bs.GlyphIcon.AlignRight })),
                    bs.Button({ aria: { label: "Justify" } }, bs.Glyphicon({ icon: bs.GlyphIcon.AlignJustify })),
                ])
            ),
            bs.ButtonToolbar({}, [
                bs.Button({ label: " Star", size: bs.Size.Lg }, bs.Glyphicon({ icon: bs.GlyphIcon.Star })),
                " ",
                bs.Button({ label: " Star" }, bs.Glyphicon({ icon: bs.GlyphIcon.Star })),
                " ",
                bs.Button({ label: " Star", size: bs.Size.Sm }, bs.Glyphicon({ icon: bs.GlyphIcon.Star })),
                " ",
                bs.Button({ label: " Star", size: bs.Size.Xs }, bs.Glyphicon({ icon: bs.GlyphIcon.Star })),
            ]),
        ]),
        bs.Figure(
            { style: styles.highlight },
            pre(
                {},
                bs.Code({ style: langJs }, [
                    `bs.Button({ aria: { label: 'Left align' } }, bs.Glyphicon({ icon: bs.GlyphIcon.AlignLeft })),`,
                    bs.E({ tag: "br" }),
                    `bs.Button({ label: ' Star', size: bs.Size.Lg }, bs.Glyphicon({ icon: bs.GlyphIcon.Star }))`,
                ])
            )
        ),
        bs.P({}, [
            `An icon used in an alert to convey that it's an error message, with additional `,
            bs.Code({}, "bs.helpers.srOnly"),
            ` text to convey this hint to users of assistive technologies.`,
        ]),
        bs.E({ style: styles.bsExample }, [
            bs.Alert({ context: bs.AlertContext.Danger }, [
                bs.Glyphicon({ icon: bs.GlyphIcon.ExclamationSign }),
                bs.Span({ style: bs.helpers.srOnly }, "Error:"),
                " Enter a valid email address",
            ]),
        ]),
        bs.Figure(
            { style: styles.highlight },
            pre(
                {},
                bs.Code({ style: langJs }, [
                    `bs.Alert({ context: bs.AlertContext.Danger }, [`,
                    bs.E({ tag: "br" }),
                    `    bs.Glyphicon({ icon: bs.GlyphIcon.ExclamationSign}),`,
                    bs.E({ tag: "br" }),
                    `    bs.Span({ style: bs.helpers.srOnly }, 'Error:'),`,
                    bs.E({ tag: "br" }),
                    `    ' Enter a valid email address'`,
                    bs.E({ tag: "br" }),
                    `])`,
                ])
            )
        ),
    ];
}

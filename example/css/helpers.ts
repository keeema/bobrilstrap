import * as b from "bobril";
import * as bs from "../../index";
import { styles } from "../bsexample/css";
import { pre, langJs } from "../prettify/pre";
import { section } from "../common/section";

export const helpersPage = b.createVirtualComponent({
    render(_ctx: b.IBobrilCtx, me: b.IBobrilNode) {
        me.children = section(
            {
                header: "Helper styles",
                id: "helper-styles"
            },
            [
                contextualColors(),
                contextualBackgrounds(),
                closeIcon(),
                carets(),
                quickFloats(),
                centerContentBlocks(),
                clearFix(),
                showingAndHidingContent(),
                screenReaders(),
                imageReplacement()
            ]
        );
    }
});

function contextualColors(): b.IBobrilChildren {
    return [
        b.anchor(bs.H2({ attrs: { id: "helper-styles-colors" } }, "Contextual colors")),
        bs.P({}, [
            `Convey meaning through color with a handful of emphasis utility styles. These may also be applied to links and 
            will darken on hover just like our default link styles.`
        ]),
        bs.E({ style: styles.bsExample }, [
            bs.P({ style: bs.helpers.text.mutated }, "Fusce dapibus, tellus ac cursus commodo, tortor mauris nibh."),
            bs.P({ style: bs.helpers.text.primary }, "Nullam id dolor id nibh ultricies vehicula ut id elit."),
            bs.P({ style: bs.helpers.text.success }, "Duis mollis, est non commodo luctus, nisi erat porttitor ligula."),
            bs.P({ style: bs.helpers.text.info }, "Maecenas sed diam eget risus varius blandit sit amet non magna."),
            bs.P({ style: bs.helpers.text.warning }, "Etiam porta sem malesuada magna mollis euismod."),
            bs.P({ style: bs.helpers.text.danger }, "Donec ullamcorper nulla non metus auctor fringilla.")
        ]),
        bs.Figure(
            { style: styles.highlight },
            pre(
                {},
                bs.Code({ style: langJs }, [
                    `bs.P({ style: bs.helpers.text.mutated }, ... ),`,
                    bs.E({ tag: "br" }),
                    `bs.P({ style: bs.helpers.text.primary }, ... ),`,
                    bs.E({ tag: "br" }),
                    `bs.P({ style: bs.helpers.text.success }, ... ),`,
                    bs.E({ tag: "br" }),
                    `bs.P({ style: bs.helpers.text.success }, ... ),`,
                    bs.E({ tag: "br" }),
                    `bs.P({ style: bs.helpers.text.info }, ... ),`,
                    bs.E({ tag: "br" }),
                    `bs.P({ style: bs.helpers.text.warning }, ... ),`,
                    bs.E({ tag: "br" }),
                    `bs.P({ style: bs.helpers.text.danger }, ... )`
                ])
            )
        ),
        bs.E({ style: [styles.bsCallout, styles.bsCalloutInfo], attrs: { id: "callout-helper-context-color-specificity" } }, [
            bs.H4({}, `Dealing with specificity`),
            bs.P({}, [
                `Sometimes emphasis styles cannot be applied due to the specificity of another selector. In most cases, a 
                sufficient workaround is to wrap your text in a `,
                bs.Code({}, "bs.Span({ style: ... }, ...)"),
                ` with the style.`
            ])
        ]),
        bs.E({ style: [styles.bsCallout, styles.bsCalloutDanger], attrs: { id: "callout-helper-context-color-specificity" } }, [
            bs.H4({}, `Conveying meaning to assistive technologies`),
            bs.P({}, [
                `Using color to add meaning only provides a visual indication, which will not be conveyed to users of 
                assistive technologies – such as screen readers. Ensure that information denoted by the color is either 
                obvious from the content itself (the contextual colors are only used to reinforce meaning that is already 
                present in the text/markup), or is included through alternative means, such as additional text hidden with 
                the `,
                bs.Code({}, "bs.helpers.srOnly"),
                ` style.`
            ])
        ])
    ];
}

function contextualBackgrounds(): b.IBobrilChildren {
    return [
        b.anchor(bs.H2({ attrs: { id: "helper-styles-backgrounds" } }, "Contextual backgrounds")),
        bs.P({}, [
            `Similar to the contextual text color styles, easily set the background of an element to any contextual class. 
            Anchor components will darken on hover, just like the text styles.`
        ]),
        bs.E({ style: [styles.bsExample, styles.bsExampleBgClasses] }, [
            bs.P({ style: bs.helpers.background.primary }, "Nullam id dolor id nibh ultricies vehicula ut id elit."),
            bs.P({ style: bs.helpers.background.success }, "Duis mollis, est non commodo luctus, nisi erat porttitor ligula."),
            bs.P({ style: bs.helpers.background.info }, "Maecenas sed diam eget risus varius blandit sit amet non magna."),
            bs.P({ style: bs.helpers.background.warning }, "Etiam porta sem malesuada magna mollis euismod."),
            bs.P({ style: bs.helpers.background.danger }, "Donec ullamcorper nulla non metus auctor fringilla.")
        ]),
        bs.Figure(
            { style: styles.highlight },
            pre(
                {},
                bs.Code({ style: langJs }, [
                    `bs.P({ style: bs.helpers.background.primary }, ... ),`,
                    bs.E({ tag: "br" }),
                    `bs.P({ style: bs.helpers.background.success }, ... ),`,
                    bs.E({ tag: "br" }),
                    `bs.P({ style: bs.helpers.background.success }, ... ),`,
                    bs.E({ tag: "br" }),
                    `bs.P({ style: bs.helpers.background.info }, ... ),`,
                    bs.E({ tag: "br" }),
                    `bs.P({ style: bs.helpers.background.warning }, ... ),`,
                    bs.E({ tag: "br" }),
                    `bs.P({ style: bs.helpers.background.danger }, ... )`
                ])
            )
        ),
        bs.E({ style: [styles.bsCallout, styles.bsCalloutInfo], attrs: { id: "callout-helper-bg-specificity" } }, [
            bs.H4({}, `Dealing with specificity`),
            bs.P({}, [
                `Sometimes contextual background styles cannot be applied due to the specificity of another selector. In some cases, 
                a sufficient workaround is to wrap your element's content in a `,
                bs.Code({}, "bs.E({ tag: 'div', style: ... }, ...)"),
                ` with the style.`
            ])
        ]),
        bs.E({ style: [styles.bsCallout, styles.bsCalloutDanger], attrs: { id: "callout-helper-bg-accessibility" } }, [
            bs.H4({}, `Conveying meaning to assistive technologies`),
            bs.P({}, [
                `As with contextual colors, ensure that any meaning conveyed through color is also conveyed in a format that is not 
                purely presentational.`
            ])
        ])
    ];
}

function closeIcon(): b.IBobrilChildren {
    return [
        b.anchor(bs.H2({ attrs: { id: "helper-styles-close" } }, "Close icon")),
        bs.P({}, [
            `Use the generic close icon for dismissing content like modals and alerts. You can use the predefined `,
            bs.Code({}, "bs.Button"),
            ` with `,
            bs.Code({}, "bs.ButtonOption.Close"),
            `, or directly `,
            bs.Code({}, "bs.helpers.close"),
            ` style.`
        ]),
        bs.E({ style: styles.bsExample }, [
            bs.P({}, bs.Button({ option: bs.ButtonOption.Close, aria: { label: "Close" } }, bs.Span({ aria: { hidden: true } }, "×")))
        ]),
        bs.Figure(
            { style: styles.highlight },
            pre(
                {},
                bs.Code({ style: langJs }, [
                    `bs.Button({ option: bs.ButtonOption.Close, aria: { label: 'Close' } }, bs.Span({ aria: { hidden: true } }, '×'))`
                ])
            )
        )
    ];
}

function carets(): b.IBobrilChildren {
    return [
        b.anchor(bs.H2({ attrs: { id: "helper-styles-carets" } }, "Carets")),
        bs.P({}, [
            `Use carets to indicate dropdown functionality and direction. 
            Note that the default caret will reverse automatically in dropup menus.`
        ]),
        bs.E({ style: styles.bsExample }, [bs.P({}, bs.Span({ style: bs.helpers.caret }))]),
        bs.Figure({ style: styles.highlight }, pre({}, bs.Code({ style: langJs }, [`bs.Span({ style: bs.helpers.caret })`])))
    ];
}

function quickFloats(): b.IBobrilChildren {
    return [
        b.anchor(bs.H2({ attrs: { id: "helper-styles-floats" } }, "Quick floats")),
        bs.P({}, [
            `Float an element to the left or right with a style. `,
            bs.Code({}, "!important"),
            ` is included to avoid specificity issues. `
        ]),
        bs.Figure(
            { style: styles.highlight },
            pre(
                {},
                bs.Code({ style: langJs }, [
                    `bs.E({ style: bs.helpers.float.pullLeft }, '...'),`,
                    bs.E({ tag: "br" }),
                    `bs.E({ style: bs.helpers.float.pullRight }, '...')`
                ])
            )
        ),
        bs.E({ style: [styles.bsCallout, styles.bsCalloutDanger], attrs: { id: "callout-helper-pull-navbar" } }, [
            bs.H4({}, `Not for use in navbars`),
            bs.P({}, [
                `To align components in navbars with utility classes, use `,
                bs.Code({}, "navbarStyles.left"),
                ` or `,
                bs.Code({}, "navbarStyles.right"),
                ` instead. See the navbar docs for details.`
            ])
        ])
    ];
}

function centerContentBlocks(): b.IBobrilChildren {
    return [
        b.anchor(bs.H2({ attrs: { id: "helper-styles-center" } }, "Center content blocks")),
        bs.P({}, [
            `Set an element to `,
            bs.Code({}, "display: block"),
            ` and center via `,
            bs.Code({}, "margin"),
            `. Available as a style.`
        ]),
        bs.Figure({ style: styles.highlight }, pre({}, bs.Code({ style: langJs }, [`bs.E({ style: bs.helpers.centerBlock }, '...')`])))
    ];
}

function clearFix(): b.IBobrilChildren {
    return [
        b.anchor(bs.H2({ attrs: { id: "helper-styles-clearfix" } }, "Clearfix")),
        bs.P({}, [
            `Easily clear `,
            bs.Code({}, "float"),
            `s by adding `,
            bs.Code({}, "bs.helpers.clearfix"),
            ` style to the parent element. Utilizes 
            the `,
            bs.A({ href: "http://nicolasgallagher.com/micro-clearfix-hack/" }, `micro clearfix`),
            ` as popularized by Nicolas 
            Gallagher.`
        ]),
        bs.Figure({ style: styles.highlight }, pre({}, bs.Code({ style: langJs }, [`bs.E({ style: bs.helpers.clearfix }, '...')`])))
    ];
}

function showingAndHidingContent(): b.IBobrilChildren {
    return [
        b.anchor(bs.H2({ attrs: { id: "helper-styles-show-hide" } }, "Showing and hiding content")),
        bs.P({}, [
            `Force an element to be shown or hidden `,
            bs.Strong({}, `(including for screen readers)`),
            ` with the use of `,
            bs.Code({}, "bs.helpers.show"),
            ` and `,
            bs.Code({}, "bs.helpers.hidden"),
            ` styles. These styles use `,
            bs.Code({}, "!important"),
            ` to avoid specificity conflicts, just like the quick floats. They are only available for block level toggling.`
        ]),
        bs.P({}, [
            `Furthermore, `,
            bs.Code({}, "bs.helpers.invisible"),
            ` can be used to toggle only the visibility of an element, meaning its `,
            bs.Code({}, "display"),
            ` is not modified and the element can still affect the flow of the document.`
        ]),
        bs.Figure(
            { style: styles.highlight },
            pre(
                {},
                bs.Code({ style: langJs }, [
                    `bs.E({ style: bs.helpers.show }, '...')`,
                    bs.E({ tag: "br" }),
                    `bs.E({ style: bs.helpers.hidden }, '...')`
                ])
            )
        )
    ];
}

function screenReaders(): b.IBobrilChildren {
    return [
        b.anchor(bs.H2({ attrs: { id: "helper-styles-screen-readers" } }, "Screen reader and keyboard navigation content")),
        bs.P({}, [
            `Hide an element to all devices `,
            bs.Strong({}, `except screen readers`),
            ` with `,
            bs.Code({}, "bs.helpers.srOnly"),
            `. Combine `,
            bs.Code({}, "bs.helpers.srOnly"),
            ` with `,
            bs.Code({}, "bs.helpers.srOnlyFocusable"),
            ` to show the element again when it's 
            focused (e.g. by a keyboard-only user). Necessary for following accessibility best practices.`
        ]),
        bs.Figure(
            { style: styles.highlight },
            pre(
                {},
                bs.Code({ style: langJs }, [
                    `bs.A({ href: '...', style: [bs.helpers.srOnly, bs.helpers.srOnlyFocusable] }, 'Skip to main content')`
                ])
            )
        )
    ];
}

function imageReplacement(): b.IBobrilChildren {
    return [
        b.anchor(bs.H2({ attrs: { id: "helper-styles-image-replacement" } }, "Image replacement")),
        bs.P({}, [
            `Utilize the `,
            bs.Code({}, "bs.helpers.textHide"),
            ` style to help replace an element's text content with a background image.`
        ]),
        bs.Figure({ style: styles.highlight }, pre({}, bs.Code({ style: langJs }, [`bs.E({ style: bs.helpers.textHide }, '...')`])))
    ];
}

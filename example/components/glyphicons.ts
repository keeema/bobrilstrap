import * as b from 'bobril';
import { a, e, p, h2, h4, code, figure, GlyphIcon, glyphicon, ul, li, span, button, buttonGroup, buttonToolbar,
    Size, alert, AlertContext, helpers } from '../../index';
import { styles } from '../bsexample/css';
import { pre, langJs } from '../prettify/pre';
import { section } from '../common/section';

export const glyphicons = b.createVirtualComponent({
    render(_ctx: b.IBobrilCtx, me: b.IBobrilNode) {
        me.children = section(
            {
                header: 'Glyphicons',
                id: 'glyphicons'
            },
            [
                availableGlyphs(),
                howToUse(),
                examples()
            ]);
    }
});

function availableGlyphs(): b.IBobrilChildren {
    return [
        b.anchor(h2({ attrs: { id: 'glyphicons-glyphs' } }, 'Available glyphs')),
        p({}, [
            `Includes over 250 glyphs in font format from the Glyphicon Halflings set. `,
            a({ href: 'http://glyphicons.com/' }, 'Glyphicons'), ` Halflings are normally not available for free, 
            but their creator has made them available for Bootstrap free of cost. As a thank you, we only ask that 
            you include a link back to `, a({ href: 'http://glyphicons.com/' }, 'Glyphicons'), ` whenever possible.`
        ]),
        e({ style: styles.bsGlyphicons }, ul({ style: styles.bsGlyphiconsList }, Object.keys(GlyphIcon)
            .filter(key => !isNaN(parseInt(key, 10)))
            .map(key => parseInt(key, 10))
            .map(key => li({}, [
                glyphicon({ icon: key }),
                span({ style: styles.glyphiconClass }, `glyphicon({ icon: GlyphIcon.${GlyphIcon[key]} })`)
            ]))
        ))
    ];
}

function howToUse(): b.IBobrilChildren {
    return [
        b.anchor(h2({ attrs: { id: 'glyphicons-how-to-use' } }, 'How to use')),
        p({}, [
            `Includes over 250 glyphs in font format from the Glyphicon Halflings set. `,
            a({ href: 'http://glyphicons.com/' }, 'Glyphicons'), ` Halflings are normally not available for free, 
            but their creator has made them available for Bootstrap free of cost. As a thank you, we only ask that 
            you include a link back to `, a({ href: 'http://glyphicons.com/' }, 'Glyphicons'), ` whenever possible.`
        ]),
        e({ style: [styles.bsCallout, styles.bsCalloutDanger], attrs: { id: 'callout-glyphicons-dont-mix' } }, [
            h4({}, `Don't mix with other components`),
            p({}, [
                `Icon styles cannot be directly combined with other components. They should not be used along with other styles on 
                the same element.`
            ])
        ]),
        e({ style: [styles.bsCallout, styles.bsCalloutDanger], attrs: { id: 'callout-glyphicons-empty-only' } }, [
            h4({}, `Only for use on empty elements`),
            p({}, `Icon component should only be used with no child elements.`)
        ]),
        e({ style: [styles.bsCallout, styles.bsCalloutInfo], attrs: { id: 'callout-glyphicons-accessibility' } }, [
            h4({}, `Accessible icons`),
            p({}, [
                `Modern versions of assistive technologies will announce CSS generated content, as well as specific Unicode characters. 
                To avoid unintended and confusing output in screen readers (particularly when icons are used purely for decoration), we 
                hide them with the `, code({}, 'aria-hidden="true"'), ` attribute.`
            ]),
            p({}, [
                `If you're using an icon to convey meaning (rather than only as a decorative element), ensure that this meaning is also 
                conveyed to assistive technologies – for instance, include additional content, visually hidden with the `,
                code({}, 'helpers.srOnly'), ` style.`
            ]),
            p({}, [
                `If you're creating controls with no other text (such as a `, code({}, 'button({...}, ...)'), `) that only contains an 
                icon), you should always provide alternative content to identify the purpose of the control, so that it will make sense 
                to users of assistive technologies. In this case, you could add an `, code({}, 'aria.label'), ` input data property on the 
                control itself.`
            ])
        ]),
        figure({ style: styles.highlight }, pre({}, code({ style: langJs }, [
            `glyphicon({ icon: GlyphIcon.Search })`
        ])))
    ];
}

function examples(): b.IBobrilChildren {
    return [
        b.anchor(h2({ attrs: { id: 'glyphicons-examples' } }, 'Examples')),
        p({}, `Use them in buttons, button groups for a toolbar, navigation, or prepended form inputs.`),
        e({ style: styles.bsExample }, [
            buttonToolbar({}, buttonGroup({}, [
                button({ aria: { label: 'Left align' } }, glyphicon({ icon: GlyphIcon.AlignLeft })),
                button({ aria: { label: 'Center align' } }, glyphicon({ icon: GlyphIcon.AlignCenter })),
                button({ aria: { label: 'Right align' } }, glyphicon({ icon: GlyphIcon.AlignRight })),
                button({ aria: { label: 'Justify' } }, glyphicon({ icon: GlyphIcon.AlignJustify }))
            ])),
            buttonToolbar({}, [
                button({ label: ' Star', size: Size.Lg }, glyphicon({ icon: GlyphIcon.Star })), ' ',
                button({ label: ' Star' }, glyphicon({ icon: GlyphIcon.Star })), ' ',
                button({ label: ' Star', size: Size.Sm }, glyphicon({ icon: GlyphIcon.Star })), ' ',
                button({ label: ' Star', size: Size.Xs }, glyphicon({ icon: GlyphIcon.Star }))
            ])
        ]),
        figure({ style: styles.highlight }, pre({}, code({ style: langJs }, [
            `button({ aria: { label: 'Left align' } }, glyphicon({ icon: GlyphIcon.AlignLeft })),`, e({ tag: 'br' }),
            `button({ label: ' Star', size: Size.Lg }, glyphicon({ icon: GlyphIcon.Star }))`
        ]))),
        p({}, [
            `An icon used in an alert to convey that it's an error message, with additional `, code({}, 'helpers.srOnly'),
            ` text to convey this hint to users of assistive technologies.`
        ]),
        e({ style: styles.bsExample }, [
            alert({ context: AlertContext.Danger }, [
                glyphicon({ icon: GlyphIcon.ExclamationSign }),
                span({ style: helpers.srOnly }, 'Error:'),
                ' Enter a valid email address'
            ])
        ]),
        figure({ style: styles.highlight }, pre({}, code({ style: langJs }, [
            `alert({ context: AlertContext.Danger }, [`, e({ tag: 'br' }),
            `    glyphicon({ icon: GlyphIcon.ExclamationSign}),`, e({ tag: 'br' }),
            `    span({ style: helpers.srOnly }, 'Error:'),`, e({ tag: 'br' }),
            `    ' Enter a valid email address'`, e({ tag: 'br' }),
            `])`
        ])))
    ];
}
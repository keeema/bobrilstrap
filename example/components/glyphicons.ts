import * as b from 'bobril';
import * as bs from '../../index';
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
        b.anchor(bs.h2({ attrs: { id: 'glyphicons-glyphs' } }, 'Available glyphs')),
        bs.p({}, [
            `Includes over 250 glyphs in font format from the Glyphicon Halflings set. `,
            bs.a({ href: 'http://glyphicons.com/' }, 'Glyphicons'), ` Halflings are normally not available for free, 
            but their creator has made them available for Bootstrap free of cost. As a thank you, we only ask that 
            you include a link back to `, bs.a({ href: 'http://glyphicons.com/' }, 'Glyphicons'), ` whenever possible.`
        ]),
        bs.e({ style: styles.bsGlyphicons }, bs.ul({ style: styles.bsGlyphiconsList }, Object.keys(bs.GlyphIcon)
            .filter(key => !isNaN(parseInt(key, 10)))
            .map(key => parseInt(key, 10))
            .map(key => bs.li({}, [
                bs.glyphicon({ icon: key }),
                bs.span({ style: styles.glyphiconClass }, `bs.glyphicon({ icon: bs.GlyphIcon.${bs.GlyphIcon[key]} })`)
            ]))
        ))
    ];
}

function howToUse(): b.IBobrilChildren {
    return [
        b.anchor(bs.h2({ attrs: { id: 'glyphicons-how-to-use' } }, 'How to use')),
        bs.p({}, [
            `Includes over 250 glyphs in font format from the Glyphicon Halflings set. `,
            bs.a({ href: 'http://glyphicons.com/' }, 'Glyphicons'), ` Halflings are normally not available for free, 
            but their creator has made them available for Bootstrap free of cost. As a thank you, we only ask that 
            you include a link back to `, bs.a({ href: 'http://glyphicons.com/' }, 'Glyphicons'), ` whenever possible.`
        ]),
        bs.e({ style: [styles.bsCallout, styles.bsCalloutDanger], attrs: { id: 'callout-glyphicons-dont-mix' } }, [
            bs.h4({}, `Don't mix with other components`),
            bs.p({}, [
                `Icon styles cannot be directly combined with other components. They should not be used along with other styles on 
                the same element.`
            ])
        ]),
        bs.e({ style: [styles.bsCallout, styles.bsCalloutDanger], attrs: { id: 'callout-glyphicons-empty-only' } }, [
            bs.h4({}, `Only for use on empty elements`),
            bs.p({}, `Icon component should only be used with no child elements.`)
        ]),
        bs.e({ style: [styles.bsCallout, styles.bsCalloutInfo], attrs: { id: 'callout-glyphicons-accessibility' } }, [
            bs.h4({}, `Accessible icons`),
            bs.p({}, [
                `Modern versions of assistive technologies will announce CSS generated content, as well as specific Unicode characters. 
                To avoid unintended and confusing output in screen readers (particularly when icons are used purely for decoration), we 
                hide them with the `, bs.code({}, 'aria-hidden="true"'), ` attribute.`
            ]),
            bs.p({}, [
                `If you're using an icon to convey meaning (rather than only as a decorative element), ensure that this meaning is also 
                conveyed to assistive technologies – for instance, include additional content, visually hidden with the `,
                bs.code({}, 'bs.helpers.srOnly'), ` style.`
            ]),
            bs.p({}, [
                `If you're creating controls with no other text (such as a `, bs.code({}, 'bs.button({...}, ...)'), 
                `) that only contains an icon), you should always provide alternative content to identify the purpose of the control, 
                so that it will make sense to users of assistive technologies. In this case, you could add an `, 
                bs.code({}, 'aria.label'), ` input data property on the control itself.`
            ])
        ]),
        bs.figure({ style: styles.highlight }, pre({}, bs.code({ style: langJs }, [
            `bs.glyphicon({ icon: bs.GlyphIcon.Search })`
        ])))
    ];
}

function examples(): b.IBobrilChildren {
    return [
        b.anchor(bs.h2({ attrs: { id: 'glyphicons-examples' } }, 'Examples')),
        bs.p({}, `Use them in buttons, button groups for a toolbar, navigation, or prepended form inputs.`),
        bs.e({ style: styles.bsExample }, [
            bs.buttonToolbar({}, bs.buttonGroup({}, [
                bs.button({ aria: { label: 'Left align' } }, bs.glyphicon({ icon: bs.GlyphIcon.AlignLeft })),
                bs.button({ aria: { label: 'Center align' } }, bs.glyphicon({ icon: bs.GlyphIcon.AlignCenter })),
                bs.button({ aria: { label: 'Right align' } }, bs.glyphicon({ icon: bs.GlyphIcon.AlignRight })),
                bs.button({ aria: { label: 'Justify' } }, bs.glyphicon({ icon: bs.GlyphIcon.AlignJustify }))
            ])),
            bs.buttonToolbar({}, [
                bs.button({ label: ' Star', size: bs.Size.Lg }, bs.glyphicon({ icon: bs.GlyphIcon.Star })), ' ',
                bs.button({ label: ' Star' }, bs.glyphicon({ icon: bs.GlyphIcon.Star })), ' ',
                bs.button({ label: ' Star', size: bs.Size.Sm }, bs.glyphicon({ icon: bs.GlyphIcon.Star })), ' ',
                bs.button({ label: ' Star', size: bs.Size.Xs }, bs.glyphicon({ icon: bs.GlyphIcon.Star }))
            ])
        ]),
        bs.figure({ style: styles.highlight }, pre({}, bs.code({ style: langJs }, [
            `bs.button({ aria: { label: 'Left align' } }, bs.glyphicon({ icon: bs.GlyphIcon.AlignLeft })),`, bs.e({ tag: 'br' }),
            `bs.button({ label: ' Star', size: bs.Size.Lg }, bs.glyphicon({ icon: bs.GlyphIcon.Star }))`
        ]))),
        bs.p({}, [
            `An icon used in an alert to convey that it's an error message, with additional `, bs.code({}, 'bs.helpers.srOnly'),
            ` text to convey this hint to users of assistive technologies.`
        ]),
        bs.e({ style: styles.bsExample }, [
            bs.alert({ context: bs.AlertContext.Danger }, [
                bs.glyphicon({ icon: bs.GlyphIcon.ExclamationSign }),
                bs.span({ style: bs.helpers.srOnly }, 'Error:'),
                ' Enter a valid email address'
            ])
        ]),
        bs.figure({ style: styles.highlight }, pre({}, bs.code({ style: langJs }, [
            `bs.alert({ context: bs.AlertContext.Danger }, [`, bs.e({ tag: 'br' }),
            `    bs.glyphicon({ icon: bs.GlyphIcon.ExclamationSign}),`, bs.e({ tag: 'br' }),
            `    bs.span({ style: bs.helpers.srOnly }, 'Error:'),`, bs.e({ tag: 'br' }),
            `    ' Enter a valid email address'`, bs.e({ tag: 'br' }),
            `])`
        ])))
    ];
}
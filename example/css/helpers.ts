import * as b from 'bobril';
import * as bs from '../../index';
import { styles } from '../bsexample/css';
import { pre, langJs } from '../prettify/pre';
import { section } from '../common/section';

export const helpersPage = b.createVirtualComponent({
    render(_ctx: b.IBobrilCtx, me: b.IBobrilNode) {
        me.children = section(
            {
                header: 'Helper styles',
                id: 'helper-styles'
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
            ]);
    }
});

function contextualColors(): b.IBobrilChildren {
    return [
        b.anchor(bs.h2({ attrs: { id: 'helper-styles-colors' } }, 'Contextual colors')),
        bs.p({}, [
            `Convey meaning through color with a handful of emphasis utility styles. These may also be applied to links and 
            will darken on hover just like our default link styles.`
        ]),
        bs.e({ style: styles.bsExample }, [
            bs.p({ style: bs.helpers.text.mutated }, 'Fusce dapibus, tellus ac cursus commodo, tortor mauris nibh.'),
            bs.p({ style: bs.helpers.text.primary }, 'Nullam id dolor id nibh ultricies vehicula ut id elit.'),
            bs.p({ style: bs.helpers.text.success }, 'Duis mollis, est non commodo luctus, nisi erat porttitor ligula.'),
            bs.p({ style: bs.helpers.text.info }, 'Maecenas sed diam eget risus varius blandit sit amet non magna.'),
            bs.p({ style: bs.helpers.text.warning }, 'Etiam porta sem malesuada magna mollis euismod.'),
            bs.p({ style: bs.helpers.text.danger }, 'Donec ullamcorper nulla non metus auctor fringilla.')
        ]),
        bs.figure({ style: styles.highlight }, pre({}, bs.code({ style: langJs }, [
            `bs.p({ style: bs.helpers.text.mutated }, ... ),`, bs.e({ tag: 'br' }),
            `bs.p({ style: bs.helpers.text.primary }, ... ),`, bs.e({ tag: 'br' }),
            `bs.p({ style: bs.helpers.text.success }, ... ),`, bs.e({ tag: 'br' }),
            `bs.p({ style: bs.helpers.text.success }, ... ),`, bs.e({ tag: 'br' }),
            `bs.p({ style: bs.helpers.text.info }, ... ),`, bs.e({ tag: 'br' }),
            `bs.p({ style: bs.helpers.text.warning }, ... ),`, bs.e({ tag: 'br' }),
            `bs.p({ style: bs.helpers.text.danger }, ... )`
        ]))),
        bs.e({ style: [styles.bsCallout, styles.bsCalloutInfo], attrs: { id: 'callout-helper-context-color-specificity' } }, [
            bs.h4({}, `Dealing with specificity`),
            bs.p({}, [
                `Sometimes emphasis styles cannot be applied due to the specificity of another selector. In most cases, a 
                sufficient workaround is to wrap your text in a `, bs.code({}, 'bs.span({ style: ... }, ...)'), ` with the style.`
            ])
        ]),
        bs.e({ style: [styles.bsCallout, styles.bsCalloutDanger], attrs: { id: 'callout-helper-context-color-specificity' } }, [
            bs.h4({}, `Conveying meaning to assistive technologies`),
            bs.p({}, [
                `Using color to add meaning only provides a visual indication, which will not be conveyed to users of 
                assistive technologies – such as screen readers. Ensure that information denoted by the color is either 
                obvious from the content itself (the contextual colors are only used to reinforce meaning that is already 
                present in the text/markup), or is included through alternative means, such as additional text hidden with 
                the `, bs.code({}, 'bs.helpers.srOnly'), ` style.`
            ])
        ])
    ];
}

function contextualBackgrounds(): b.IBobrilChildren {
    return [
        b.anchor(bs.h2({ attrs: { id: 'helper-styles-backgrounds' } }, 'Contextual backgrounds')),
        bs.p({}, [
            `Similar to the contextual text color styles, easily set the background of an element to any contextual class. 
            Anchor components will darken on hover, just like the text styles.`
        ]),
        bs.e({ style: [styles.bsExample, styles.bsExampleBgClasses] }, [
            bs.p({ style: bs.helpers.background.primary }, 'Nullam id dolor id nibh ultricies vehicula ut id elit.'),
            bs.p({ style: bs.helpers.background.success }, 'Duis mollis, est non commodo luctus, nisi erat porttitor ligula.'),
            bs.p({ style: bs.helpers.background.info }, 'Maecenas sed diam eget risus varius blandit sit amet non magna.'),
            bs.p({ style: bs.helpers.background.warning }, 'Etiam porta sem malesuada magna mollis euismod.'),
            bs.p({ style: bs.helpers.background.danger }, 'Donec ullamcorper nulla non metus auctor fringilla.')
        ]),
        bs.figure({ style: styles.highlight }, pre({}, bs.code({ style: langJs }, [
            `bs.p({ style: bs.helpers.background.primary }, ... ),`, bs.e({ tag: 'br' }),
            `bs.p({ style: bs.helpers.background.success }, ... ),`, bs.e({ tag: 'br' }),
            `bs.p({ style: bs.helpers.background.success }, ... ),`, bs.e({ tag: 'br' }),
            `bs.p({ style: bs.helpers.background.info }, ... ),`, bs.e({ tag: 'br' }),
            `bs.p({ style: bs.helpers.background.warning }, ... ),`, bs.e({ tag: 'br' }),
            `bs.p({ style: bs.helpers.background.danger }, ... )`
        ]))),
        bs.e({ style: [styles.bsCallout, styles.bsCalloutInfo], attrs: { id: 'callout-helper-bg-specificity' } }, [
            bs.h4({}, `Dealing with specificity`),
            bs.p({}, [
                `Sometimes contextual background styles cannot be applied due to the specificity of another selector. In some cases, 
                a sufficient workaround is to wrap your element's content in a `, bs.code({}, 'bs.e({ tag: \'div\', style: ... }, ...)'),
                ` with the style.`
            ])
        ]),
        bs.e({ style: [styles.bsCallout, styles.bsCalloutDanger], attrs: { id: 'callout-helper-bg-accessibility' } }, [
            bs.h4({}, `Conveying meaning to assistive technologies`),
            bs.p({}, [
                `As with contextual colors, ensure that any meaning conveyed through color is also conveyed in a format that is not 
                purely presentational.`
            ])
        ])
    ];
}

function closeIcon(): b.IBobrilChildren {
    return [
        b.anchor(bs.h2({ attrs: { id: 'helper-styles-close' } }, 'Close icon')),
        bs.p({}, [
            `Use the generic close icon for dismissing content like modals and alerts. You can use the predefined `, 
            bs.code({}, 'bs.button'),
            ` with `, bs.code({}, 'bs.ButtonOption.Close'), `, or directly `, bs.code({}, 'bs.helpers.close'), ` style.`
        ]),
        bs.e({ style: styles.bsExample }, [
            bs.p({}, bs.button({ option: bs.ButtonOption.Close, aria: { label: 'Close' } }, bs.span({ aria: { hidden: true } }, '×')))
        ]),
        bs.figure({ style: styles.highlight }, pre({}, bs.code({ style: langJs }, [
            `bs.button({ option: bs.ButtonOption.Close, aria: { label: 'Close' } }, bs.span({ aria: { hidden: true } }, '×'))`
        ])))
    ];
}

function carets(): b.IBobrilChildren {
    return [
        b.anchor(bs.h2({ attrs: { id: 'helper-styles-carets' } }, 'Carets')),
        bs.p({}, [
            `Use carets to indicate dropdown functionality and direction. 
            Note that the default caret will reverse automatically in dropup menus.`
        ]),
        bs.e({ style: styles.bsExample }, [bs.p({}, bs.span({ style: bs.helpers.caret }))]),
        bs.figure({ style: styles.highlight }, pre({}, bs.code({ style: langJs }, [
            `bs.span({ style: bs.helpers.caret })`
        ])))
    ];
}

function quickFloats(): b.IBobrilChildren {
    return [
        b.anchor(bs.h2({ attrs: { id: 'helper-styles-floats' } }, 'Quick floats')),
        bs.p({}, [
            `Float an element to the left or right with a style. `, bs.code({}, '!important'), ` is included to avoid specificity issues. `
        ]),
        bs.figure({ style: styles.highlight }, pre({}, bs.code({ style: langJs }, [
            `bs.e({ style: bs.helpers.float.pullLeft }, '...'),`, bs.e({ tag: 'br' }),
            `bs.e({ style: bs.helpers.float.pullRight }, '...')`
        ]))),
        bs.e({ style: [styles.bsCallout, styles.bsCalloutDanger], attrs: { id: 'callout-helper-pull-navbar' } }, [
            bs.h4({}, `Not for use in navbars`),
            bs.p({}, [
                `To align components in navbars with utility classes, use `, bs.code({}, 'navbarStyles.left'), ` or `,
                bs.code({}, 'navbarStyles.right'), ` instead. See the navbar docs for details.`
            ])
        ])
    ];
}

function centerContentBlocks(): b.IBobrilChildren {
    return [
        b.anchor(bs.h2({ attrs: { id: 'helper-styles-center' } }, 'Center content blocks')),
        bs.p({}, [
            `Set an element to `, bs.code({}, 'display: block'), ` and center via `, bs.code({}, 'margin'), `. Available as a style.`
        ]),
        bs.figure({ style: styles.highlight }, pre({}, bs.code({ style: langJs }, [
            `bs.e({ style: bs.helpers.centerBlock }, '...')`
        ])))
    ];
}

function clearFix(): b.IBobrilChildren {
    return [
        b.anchor(bs.h2({ attrs: { id: 'helper-styles-clearfix' } }, 'Clearfix')),
        bs.p({}, [
            `Easily clear `, bs.code({}, 'float'), `s by adding `, bs.code({}, 'bs.helpers.clearfix'), 
            ` style to the parent element. Utilizes 
            the `, bs.a({ href: 'http://nicolasgallagher.com/micro-clearfix-hack/' }, `micro clearfix`), ` as popularized by Nicolas 
            Gallagher.`
        ]),
        bs.figure({ style: styles.highlight }, pre({}, bs.code({ style: langJs }, [
            `bs.e({ style: bs.helpers.clearfix }, '...')`
        ])))
    ];
}

function showingAndHidingContent(): b.IBobrilChildren {
    return [
        b.anchor(bs.h2({ attrs: { id: 'helper-styles-show-hide' } }, 'Showing and hiding content')),
        bs.p({}, [
            `Force an element to be shown or hidden `, bs.strong({}, `(including for screen readers)`), ` with the use of `,
            bs.code({}, 'bs.helpers.show'), ` and `, bs.code({}, 'bs.helpers.hidden'), ` styles. These styles use `, 
            bs.code({}, '!important'),
            ` to avoid specificity conflicts, just like the quick floats. They are only available for block level toggling.`
        ]),
        bs.p({}, [
            `Furthermore, `, bs.code({}, 'bs.helpers.invisible'), ` can be used to toggle only the visibility of an element, meaning its `,
            bs.code({}, 'display'), ` is not modified and the element can still affect the flow of the document.`
        ]),
        bs.figure({ style: styles.highlight }, pre({}, bs.code({ style: langJs }, [
            `bs.e({ style: bs.helpers.show }, '...')`, bs.e({ tag: 'br' }),
            `bs.e({ style: bs.helpers.hidden }, '...')`
        ])))
    ];
}

function screenReaders(): b.IBobrilChildren {
    return [
        b.anchor(bs.h2({ attrs: { id: 'helper-styles-screen-readers' } }, 'Screen reader and keyboard navigation content')),
        bs.p({}, [
            `Hide an element to all devices `, bs.strong({}, `except screen readers`), ` with `, bs.code({}, 'bs.helpers.srOnly'),
            `. Combine `, bs.code({}, 'bs.helpers.srOnly'), ` with `, bs.code({}, 'bs.helpers.srOnlyFocusable'), 
            ` to show the element again when it's 
            focused (e.g. by a keyboard-only user). Necessary for following accessibility best practices.`
        ]),
        bs.figure({ style: styles.highlight }, pre({}, bs.code({ style: langJs }, [
            `bs.a({ href: '...', style: [bs.helpers.srOnly, bs.helpers.srOnlyFocusable] }, 'Skip to main content')`
        ])))
    ];
}

function imageReplacement(): b.IBobrilChildren {
    return [
        b.anchor(bs.h2({ attrs: { id: 'helper-styles-image-replacement' } }, 'Image replacement')),
        bs.p({}, [
            `Utilize the `, bs.code({}, 'bs.helpers.textHide'), ` style to help replace an element's text content with a background image.`
        ]),
        bs.figure({ style: styles.highlight }, pre({}, bs.code({ style: langJs }, [
            `bs.e({ style: bs.helpers.textHide }, '...')`
        ])))
    ];
}
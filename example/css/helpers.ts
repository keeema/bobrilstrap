import * as b from 'bobril';
import { a, e, p, h2, h4, code, figure, helpers, button, ButtonOption, span, strong } from '../../index';
import { styles } from '../bsexample/css';
import { pre,  langJs } from '../prettify/pre';
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
        b.anchor(h2({ attrs: { id: 'helper-styles-colors' } }, 'Contextual colors')),
        p({}, [
            `Convey meaning through color with a handful of emphasis utility styles. These may also be applied to links and 
            will darken on hover just like our default link styles.`
        ]),
        e({ style: styles.bsExample }, [
            p({ style: helpers.text.mutated }, 'Fusce dapibus, tellus ac cursus commodo, tortor mauris nibh.'),
            p({ style: helpers.text.primary }, 'Nullam id dolor id nibh ultricies vehicula ut id elit.'),
            p({ style: helpers.text.success }, 'Duis mollis, est non commodo luctus, nisi erat porttitor ligula.'),
            p({ style: helpers.text.info }, 'Maecenas sed diam eget risus varius blandit sit amet non magna.'),
            p({ style: helpers.text.warning }, 'Etiam porta sem malesuada magna mollis euismod.'),
            p({ style: helpers.text.danger }, 'Donec ullamcorper nulla non metus auctor fringilla.')
        ]),
        figure({ style: styles.highlight }, pre({}, code({ style: langJs }, [
            `p({ style: helpers.text.mutated }, ... ),`, e({ tag: 'br' }),
            `p({ style: helpers.text.primary }, ... ),`, e({ tag: 'br' }),
            `p({ style: helpers.text.success }, ... ),`, e({ tag: 'br' }),
            `p({ style: helpers.text.success }, ... ),`, e({ tag: 'br' }),
            `p({ style: helpers.text.info }, ... ),`, e({ tag: 'br' }),
            `p({ style: helpers.text.warning }, ... ),`, e({ tag: 'br' }),
            `p({ style: helpers.text.danger }, ... )`
        ]))),
        e({ style: [styles.bsCallout, styles.bsCalloutInfo], attrs: { id: 'callout-helper-context-color-specificity' } }, [
            h4({}, `Dealing with specificity`),
            p({}, [
                `Sometimes emphasis styles cannot be applied due to the specificity of another selector. In most cases, a 
                sufficient workaround is to wrap your text in a `, code({}, 'span({ style: ... }, ...)'), ` with the style.`
            ])
        ]),
        e({ style: [styles.bsCallout, styles.bsCalloutDanger], attrs: { id: 'callout-helper-context-color-specificity' } }, [
            h4({}, `Conveying meaning to assistive technologies`),
            p({}, [
                `Using color to add meaning only provides a visual indication, which will not be conveyed to users of 
                assistive technologies – such as screen readers. Ensure that information denoted by the color is either 
                obvious from the content itself (the contextual colors are only used to reinforce meaning that is already 
                present in the text/markup), or is included through alternative means, such as additional text hidden with 
                the `, code({}, 'helpers.srOnly'), ` style.`
            ])
        ])
    ];
}

function contextualBackgrounds(): b.IBobrilChildren {
    return [
        b.anchor(h2({ attrs: { id: 'helper-styles-backgrounds' } }, 'Contextual backgrounds')),
        p({}, [
            `Similar to the contextual text color styles, easily set the background of an element to any contextual class. 
            Anchor components will darken on hover, just like the text styles.`
        ]),
        e({ style: [styles.bsExample, styles.bsExampleBgClasses] }, [
            p({ style: helpers.background.primary }, 'Nullam id dolor id nibh ultricies vehicula ut id elit.'),
            p({ style: helpers.background.success }, 'Duis mollis, est non commodo luctus, nisi erat porttitor ligula.'),
            p({ style: helpers.background.info }, 'Maecenas sed diam eget risus varius blandit sit amet non magna.'),
            p({ style: helpers.background.warning }, 'Etiam porta sem malesuada magna mollis euismod.'),
            p({ style: helpers.background.danger }, 'Donec ullamcorper nulla non metus auctor fringilla.')
        ]),
        figure({ style: styles.highlight }, pre({}, code({ style: langJs }, [
            `p({ style: helpers.background.primary }, ... ),`, e({ tag: 'br' }),
            `p({ style: helpers.background.success }, ... ),`, e({ tag: 'br' }),
            `p({ style: helpers.background.success }, ... ),`, e({ tag: 'br' }),
            `p({ style: helpers.background.info }, ... ),`, e({ tag: 'br' }),
            `p({ style: helpers.background.warning }, ... ),`, e({ tag: 'br' }),
            `p({ style: helpers.background.danger }, ... )`
        ]))),
        e({ style: [styles.bsCallout, styles.bsCalloutInfo], attrs: { id: 'callout-helper-bg-specificity' } }, [
            h4({}, `Dealing with specificity`),
            p({}, [
                `Sometimes contextual background styles cannot be applied due to the specificity of another selector. In some cases, 
                a sufficient workaround is to wrap your element's content in a `, code({}, 'e({ tag: \'div\', style: ... }, ...)'),
                ` with the style.`
            ])
        ]),
        e({ style: [styles.bsCallout, styles.bsCalloutDanger], attrs: { id: 'callout-helper-bg-accessibility' } }, [
            h4({}, `Conveying meaning to assistive technologies`),
            p({}, [
                `As with contextual colors, ensure that any meaning conveyed through color is also conveyed in a format that is not 
                purely presentational.`
            ])
        ])
    ];
}

function closeIcon(): b.IBobrilChildren {
    return [
        b.anchor(h2({ attrs: { id: 'helper-styles-close' } }, 'Close icon')),
        p({}, [
            `Use the generic close icon for dismissing content like modals and alerts. You can use the predefined `, code({}, 'button'),
            ` with `, code({}, 'ButtonOption.Close'), `, or directly `, code({}, 'helpers.close'), ` style.`
        ]),
        e({ style: styles.bsExample }, [
            p({}, button({ option: ButtonOption.Close, aria: { label: 'Close' } }, span({ aria: { hidden: true } }, '×')))
        ]),
        figure({ style: styles.highlight }, pre({}, code({ style: langJs }, [
            `button({ option: ButtonOption.Close, aria: { label: 'Close' } }, span({ aria: { hidden: true } }, '×'))`
        ])))
    ];
}

function carets(): b.IBobrilChildren {
    return [
        b.anchor(h2({ attrs: { id: 'helper-styles-carets' } }, 'Carets')),
        p({}, [
            `Use carets to indicate dropdown functionality and direction. 
            Note that the default caret will reverse automatically in dropup menus.`
        ]),
        e({ style: styles.bsExample }, [p({}, span({ style: helpers.caret }))]),
        figure({ style: styles.highlight }, pre({}, code({ style: langJs }, [
            `span({ style: helpers.caret })`
        ])))
    ];
}

function quickFloats(): b.IBobrilChildren {
    return [
        b.anchor(h2({ attrs: { id: 'helper-styles-floats' } }, 'Quick floats')),
        p({}, [
            `Float an element to the left or right with a style. `, code({}, '!important'), ` is included to avoid specificity issues. `
        ]),
        figure({ style: styles.highlight }, pre({}, code({ style: langJs }, [
            `e({ style: helpers.float.pullLeft }, '...'),`, e({ tag: 'br' }),
            `e({ style: helpers.float.pullRight }, '...')`
        ]))),
        e({ style: [styles.bsCallout, styles.bsCalloutDanger], attrs: { id: 'callout-helper-pull-navbar' } }, [
            h4({}, `Not for use in navbars`),
            p({}, [
                `To align components in navbars with utility classes, use `, code({}, 'navbarStyles.left'), ` or `,
                code({}, 'navbarStyles.right'), ` instead. See the navbar docs for details.`
            ])
        ])
    ];
}

function centerContentBlocks(): b.IBobrilChildren {
    return [
        b.anchor(h2({ attrs: { id: 'helper-styles-center' } }, 'Center content blocks')),
        p({}, [
            `Set an element to `, code({}, 'display: block'), ` and center via `, code({}, 'margin'), `. Available as a style.`
        ]),
        figure({ style: styles.highlight }, pre({}, code({ style: langJs }, [
            `e({ style: helpers.centerBlock }, '...')`
        ])))
    ];
}

function clearFix(): b.IBobrilChildren {
    return [
        b.anchor(h2({ attrs: { id: 'helper-styles-clearfix' } }, 'Clearfix')),
        p({}, [
            `Easily clear `, code({}, 'float'), `s by adding `, code({}, 'helpers.clearfix'), ` style to the parent element. Utilizes 
            the `, a({ href: 'http://nicolasgallagher.com/micro-clearfix-hack/' }, `micro clearfix`), ` as popularized by Nicolas 
            Gallagher.`
        ]),
        figure({ style: styles.highlight }, pre({}, code({ style: langJs }, [
            `e({ style: helpers.clearfix }, '...')`
        ])))
    ];
}

function showingAndHidingContent(): b.IBobrilChildren {
    return [
        b.anchor(h2({ attrs: { id: 'helper-styles-show-hide' } }, 'Showing and hiding content')),
        p({}, [
            `Force an element to be shown or hidden `, strong({}, `(including for screen readers)`), ` with the use of `,
            code({}, 'helpers.show'), ` and `, code({}, 'helpers.hidden'), ` styles. These styles use `, code({}, '!important'),
            ` to avoid specificity conflicts, just like the quick floats. They are only available for block level toggling.`
        ]),
        p({}, [
            `Furthermore, `, code({}, 'helpers.invisible'), ` can be used to toggle only the visibility of an element, meaning its `,
            code({}, 'display'), ` is not modified and the element can still affect the flow of the document.`
        ]),
        figure({ style: styles.highlight }, pre({}, code({ style: langJs }, [
            `e({ style: helpers.show }, '...')`, e({ tag: 'br' }),
            `e({ style: helpers.hidden }, '...')`
        ])))
    ];
}

function screenReaders(): b.IBobrilChildren {
    return [
        b.anchor(h2({ attrs: { id: 'helper-styles-screen-readers' } }, 'Screen reader and keyboard navigation content')),
        p({}, [
            `Hide an element to all devices `, strong({}, `except screen readers`), ` with `, code({}, 'helpers.srOnly'),
            `. Combine `, code({}, 'helpers.srOnly'), ` with `, code({}, 'helpers.srOnlyFocusable'), ` to show the element again when it's 
            focused (e.g. by a keyboard-only user). Necessary for following accessibility best practices.`
        ]),
        figure({ style: styles.highlight }, pre({}, code({ style: langJs }, [
            `a({ href: '...', style: [helpers.srOnly, helpers.srOnlyFocusable] }, 'Skip to main content')`
        ])))
    ];
}

function imageReplacement(): b.IBobrilChildren {
    return [
        b.anchor(h2({ attrs: { id: 'helper-styles-image-replacement' } }, 'Image replacement')),
        p({}, [
            `Utilize the `, code({}, 'helpers.textHide'), ` style to help replace an element's text content with a background image.`
        ]),
        figure({ style: styles.highlight }, pre({}, code({ style: langJs }, [
            `e({ style: helpers.textHide }, '...')`
        ])))
    ];
}
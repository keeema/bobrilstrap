import * as b from 'bobril';
import { a, e, p, h2, h3, h4, code, figure, helpers, button, ButtonOption, span } from '../../index';
import { styles } from '../bsexample/css';
import pre, { langJs } from '../prettify/pre';
import section from '../common/section';

export default b.createVirtualComponent({
    render(ctx: b.IBobrilCtx, me: b.IBobrilNode) {
        me.children = section(
            {
                header: 'Helper styles',
                id: 'helper-styles'
            },
            [
                contextualColors(),
                contextualBackgrounds(),
                closeIcon(),
                carets()
            ]);
    }
})

function contextualColors(): b.IBobrilChildren {
    return [
        h2({ attrs: { id: 'helper-styles-colors' } }, 'Contextual colors'),
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
                the `, code({}, 'srOnly'), ` style.`
            ])
        ])
    ];
}

function contextualBackgrounds(): b.IBobrilChildren {
    return [
        h2({ attrs: { id: 'helper-styles-backgrounds' } }, 'Contextual backgrounds'),
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
                a sufficient workaround is to wrap your element's content in a `, code({}, 'element({ tag: \'div\', style: ... }, ...)'),
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
        h2({ attrs: { id: 'helper-styles-close' } }, 'Close icon'),
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
        h2({ attrs: { id: 'helper-styles-carets' } }, 'Carets'),
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
import * as b from 'bobril';
import { a, e, p, h2, h3, h4, code, figure, form, button, ButtonOption, ButtonType, ButtonTag, Size, strong } from '../../index';
import { styles } from '../bsexample/css';
import pre, { langJs } from '../prettify/pre';
import section from '../common/section';

export default b.createVirtualComponent({
    render(ctx: b.IBobrilCtx, me: b.IBobrilNode) {
        me.children = section(
            {
                header: 'Buttons',
                id: 'buttons'
            },
            [
                buttonsTags(),
                options(),
                sizes()
            ]);
    }
})

function buttonsTags(): b.IBobrilChildren {
    return [
        h2({ attrs: { id: 'buttons-tags' } }, 'Button tags'),
        p({}, [
            `Use the button `, code({}, 'tag'), ` input data property to decide for an <a>, <button>, or <input> element`,
        ]),
        e({ style: styles.bsExample }, [
            form({}, [
                button({ label: 'Link', tag: ButtonTag.a, onClick: () => alert('Clicked <a> element!') }), ' ',
                button({ label: 'Button (default)', onClick: () => alert('Clicked <button> element!') }), ' ',
                button({ label: 'Input', tag: ButtonTag.input, onClick: () => alert('Clicked <input> element!') }), ' ',
                button({ label: 'Submit', tag: ButtonTag.input, type: ButtonType.submit, onClick: () => alert('Clicked submit!') })
            ])
        ]),
        figure({ style: styles.highlight }, pre({}, code({ style: langJs }, [
            `button({ label: 'Link', tag: ButtonTag.a, onClick: () => alert('Clicked <a> element!') }), ' ',`, e({ tag: 'br' }),
            `button({ label: 'Button', onClick: () => alert('Clicked <button> element!') }), ' ',`, e({ tag: 'br' }),
            `button({ label: 'Input', tag: ButtonTag.input, onClick: () => alert('Clicked <input> element!') }), ' ',`, e({ tag: 'br' }),
            `button({ `, e({ tag: 'br' }),
            `    label: 'Submit', tag: ButtonTag.input, type: ButtonType.submit, onClick: () => alert('Clicked submit!')`, e({ tag: 'br' }),
            `})`
        ]))),
        e({ style: [styles.bsCallout, styles.bsCalloutDanger], attrs: { id: 'callout-buttons-context-usage' } }, [
            h4({}, `Context-specific usage`),
            p({}, [
                `While `, code({}, 'button({}, ...)'), ` can be used with `, code({}, 'a'), ` and `, code({}, 'button'),
                ` `, code({}, 'tag'), ` input data property, only `, code({}, 'button'),
                `s are supported within our nav and navbar components.`
            ])
        ]),
        e({ style: [styles.bsCallout, styles.bsCalloutDanger], attrs: { id: 'callout-buttons-ff-height' } }, [
            h4({}, `Cross-browser rendering`),
            p({}, [
                `As a best practice, `, strong({}, [
                    `we highly recommend using the `, code({}, 'button'),
                    ` (the default) tag whenever possible`]),
                ` to ensure matching cross-browser rendering.`
            ]),
            p({}, [
                `Among other things, there's a bug in Firefox <30 that prevents Bootstrap from setting the `,
                code({}, 'line-height'), ` of `, code({}, '<input>'),
                `-based buttons, causing them to not exactly match the height of other buttons on Firefox`
            ])
        ])
    ];
}

function options(): b.IBobrilChildren {
    return [
        h2({ attrs: { id: 'buttons-options' } }, 'Options'),
        p({}, `Use any of the available button classes to quickly create a styled button.`),
        e({ style: styles.bsExample }, [
            button({ label: 'Default', onClick: () => alert('Clicked!') }), ' ',
            button({ label: 'Primary', option: ButtonOption.primary, onClick: () => alert('Clicked!') }), ' ',
            button({ label: 'Success', option: ButtonOption.success, onClick: () => alert('Clicked!') }), ' ',
            button({ label: 'Info', option: ButtonOption.info, onClick: () => alert('Clicked!') }), ' ',
            button({ label: 'Warning', option: ButtonOption.warning, onClick: () => alert('Clicked!') }), ' ',
            button({ label: 'Danger', option: ButtonOption.danger, onClick: () => alert('Clicked!') }), ' ',
            button({ label: 'Link', option: ButtonOption.link, onClick: () => alert('Clicked!') })
        ]),
        figure({ style: styles.highlight }, pre({}, code({ style: langJs }, [
            `button({ label: 'Default', onClick: () => alert('Clicked!') }), ' ',`, e({ tag: 'br' }),
            `button({ label: 'Primary', option: ButtonOption.primary, onClick: () => alert('Clicked!') }), ' ',`, e({ tag: 'br' }),
            `button({ label: 'Success', option: ButtonOption.success, onClick: () => alert('Clicked!') }), ' ',`, e({ tag: 'br' }),
            `button({ label: 'Info', option: ButtonOption.info, onClick: () => alert('Clicked!') }), ' ',`, e({ tag: 'br' }),
            `button({ label: 'Warning', option: ButtonOption.warning, onClick: () => alert('Clicked!') }), ' ',`, e({ tag: 'br' }),
            `button({ label: 'Danger', option: ButtonOption.danger, onClick: () => alert('Clicked!') }), ' ',`, e({ tag: 'br' }),
            `button({ label: 'Link', option: ButtonOption.link, onClick: () => alert('Clicked!') })`
        ]))),
        e({ style: [styles.bsCallout, styles.bsCalloutDanger], attrs: { id: 'Conveying meaning to assistive technologies' } }, [
            h4({}, `Context-specific usage`),
            p({}, [
                `Using color to add meaning to a button only provides a visual indication, which will not be conveyed to users of 
                assistive technologies – such as screen readers. Ensure that information denoted by the color is either obvious 
                from the content itself (the visible text of the button), or is included through alternative means, such as additional 
                text hidden with the `, code({}, 'helpers.srOnly'), ` style.`
            ])
        ])
    ];
}

const limitedWidthStyle = b.styleDef({ maxWidth: '400px' });

function sizes(): b.IBobrilChildren {
    return [
        h2({ attrs: { id: 'buttons-options' } }, 'Options'),
        p({}, `Use any of the available button classes to quickly create a styled button.`),
        e({ style: styles.bsExample }, [
            p({}, [
                button({ label: 'Large button', size: Size.lg }), ' ',
                button({ label: 'Large button', size: Size.lg, option: ButtonOption.primary })
            ]),
            p({}, [
                button({ label: 'Default button', size: Size.md }), ' ',
                button({ label: 'Default button', option: ButtonOption.primary })
            ]),
            p({}, [
                button({ label: 'Small button', size: Size.sm }), ' ',
                button({ label: 'Small button', size: Size.sm, option: ButtonOption.primary })
            ]),
            p({}, [
                button({ label: 'Extra small button', size: Size.xs }), ' ',
                button({ label: 'Extra small button', size: Size.xs, option: ButtonOption.primary })
            ])
        ]),
        figure({ style: styles.highlight }, pre({}, code({ style: langJs }, [
            `p({}, [`, e({ tag: 'br' }),
            `    button({ label: 'Large button', size: Size.lg }), ' ',`, e({ tag: 'br' }),
            `    button({ label: 'Large button', size: Size.lg, option: ButtonOption.primary })`, e({ tag: 'br' }),
            `]),`, e({ tag: 'br' }),
            `p({}, [`, e({ tag: 'br' }),
            `    button({ label: 'Default button', size: Size.md }), ' ',`, e({ tag: 'br' }),
            `    button({ label: 'Default button', option: ButtonOption.primary })`, e({ tag: 'br' }),
            `]),`, e({ tag: 'br' }),
            `p({}, [`, e({ tag: 'br' }),
            `    button({ label: 'Small button', size: Size.sm }), ' ',`, e({ tag: 'br' }),
            `    button({ label: 'Small button', size: Size.sm, option: ButtonOption.primary })`, e({ tag: 'br' }),
            `]),`, e({ tag: 'br' }),
            `p({}, [`, e({ tag: 'br' }),
            `    button({ label: 'Extra small button', size: Size.xs }), ' ',`, e({ tag: 'br' }),
            `    button({ label: 'Extra small button', size: Size.xs, option: ButtonOption.primary })`, e({ tag: 'br' }),
            `])`
        ]))),
        p({}, [
            `Create block level buttons—those that span the full width of a parent by `, code({}, 'block'),
            ` input data property.`
        ]),
        e({ style: styles.bsExample }, [
            e({ style: [styles.well, styles.centerBlock, limitedWidthStyle] }, [
                button({ label: 'Block level button', block: true }),
                button({ label: 'Block level button', block: true, option: ButtonOption.primary })
            ])
        ]),
        figure({ style: styles.highlight }, pre({}, code({ style: langJs }, [
            `button({ label: 'Block level button', block: true }),`, e({ tag: 'br' }),
            `button({ label: 'Block level button', block: true, option: ButtonOption.primary })`
        ])))
    ];
}
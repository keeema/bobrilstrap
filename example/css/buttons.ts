import * as b from 'bobril';
import { e, p, h2, h4, code, figure, form, button, ButtonOption, ButtonType, ButtonTag, Size, strong } from '../../index';
import { styles } from '../bsexample/css';
import { pre,  langJs } from '../prettify/pre';
import { section } from '../common/section';

export const buttons = b.createVirtualComponent({
    render(ctx: b.IBobrilCtx, me: b.IBobrilNode) {
        me.children = section(
            {
                header: 'Buttons',
                id: 'buttons'
            },
            [
                buttonsTags(),
                options(),
                sizes(),
                activeState(),
                disabledState()
            ]);
    }
});

function buttonsTags(): b.IBobrilChildren {
    return [
        h2({ attrs: { id: 'buttons-tags' } }, 'Button tags'),
        p({}, [
            `Use the button `, code({}, 'tag'), ` input data property to decide for an <a>, <button>, or <input> element`
        ]),
        e({ style: styles.bsExample }, [
            form({}, [
                button({ label: 'Link', tag: ButtonTag.A, onClick: () => alert('Clicked <a> element!') }), ' ',
                button({ label: 'Button (default)', onClick: () => alert('Clicked <button> element!') }), ' ',
                button({ label: 'Input', tag: ButtonTag.Input, onClick: () => alert('Clicked <input> element!') }), ' ',
                button({ label: 'Submit', tag: ButtonTag.Input, type: ButtonType.Submit, onClick: () => alert('Clicked submit!') })
            ])
        ]),
        figure({ style: styles.highlight }, pre({}, code({ style: langJs }, [
            `button({ label: 'Link', tag: ButtonTag.A, onClick: () => alert('Clicked <a> element!') }), ' ',`, e({ tag: 'br' }),
            `button({ label: 'Button', onClick: () => alert('Clicked <button> element!') }), ' ',`, e({ tag: 'br' }),
            `button({ label: 'Input', tag: ButtonTag.Input, onClick: () => alert('Clicked <input> element!') }), ' ',`, e({ tag: 'br' }),
            `button({ `, e({ tag: 'br' }),
            `    label: 'Submit', tag: ButtonTag.Input, type: ButtonType.Submit, onClick: () => alert('Clicked submit!')`, e({ tag: 'br' }),
            `})`
        ]))),
        e({ style: [styles.bsCallout, styles.bsCalloutDanger], attrs: { id: 'callout-buttons-context-usage' } }, [
            h4({}, `Context-specific usage`),
            p({}, [
                `While `, code({}, 'button'), ` can be used with `, code({}, 'a'), ` and `, code({}, 'button'),
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
            button({ label: 'Primary', option: ButtonOption.Primary, onClick: () => alert('Clicked!') }), ' ',
            button({ label: 'Success', option: ButtonOption.Success, onClick: () => alert('Clicked!') }), ' ',
            button({ label: 'Info', option: ButtonOption.Info, onClick: () => alert('Clicked!') }), ' ',
            button({ label: 'Warning', option: ButtonOption.Warning, onClick: () => alert('Clicked!') }), ' ',
            button({ label: 'Danger', option: ButtonOption.Danger, onClick: () => alert('Clicked!') }), ' ',
            button({ label: 'Link', option: ButtonOption.Link, onClick: () => alert('Clicked!') })
        ]),
        figure({ style: styles.highlight }, pre({}, code({ style: langJs }, [
            `button({ label: 'Default', onClick: () => alert('Clicked!') }), ' ',`, e({ tag: 'br' }),
            `button({ label: 'Primary', option: ButtonOption.Primary, onClick: () => alert('Clicked!') }), ' ',`, e({ tag: 'br' }),
            `button({ label: 'Success', option: ButtonOption.Success, onClick: () => alert('Clicked!') }), ' ',`, e({ tag: 'br' }),
            `button({ label: 'Info', option: ButtonOption.Info, onClick: () => alert('Clicked!') }), ' ',`, e({ tag: 'br' }),
            `button({ label: 'Warning', option: ButtonOption.Warning, onClick: () => alert('Clicked!') }), ' ',`, e({ tag: 'br' }),
            `button({ label: 'Danger', option: ButtonOption.Danger, onClick: () => alert('Clicked!') }), ' ',`, e({ tag: 'br' }),
            `button({ label: 'Link', option: ButtonOption.Link, onClick: () => alert('Clicked!') })`
        ]))),
        e({ style: [styles.bsCallout, styles.bsCalloutDanger], attrs: { id: 'callout-buttons-context-usage' } }, [
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

const limitedWidthStyle = b.styleDef({ maxWidth: '400px' }, null, 'buttons-limited-width-example');

function sizes(): b.IBobrilChildren {
    return [
        h2({ attrs: { id: 'buttons-sizes' } }, 'Sizes'),
        p({}, [
            `Fancy larger or smaller buttons? Set the `, code({}, 'size'), ` input data property.`
        ]),
        e({ style: styles.bsExample }, [
            p({}, [
                button({ label: 'Large button', size: Size.Lg }), ' ',
                button({ label: 'Large button', size: Size.Lg, option: ButtonOption.Primary })
            ]),
            p({}, [
                button({ label: 'Default button', size: Size.Md }), ' ',
                button({ label: 'Default button', option: ButtonOption.Primary })
            ]),
            p({}, [
                button({ label: 'Small button', size: Size.Sm }), ' ',
                button({ label: 'Small button', size: Size.Sm, option: ButtonOption.Primary })
            ]),
            p({}, [
                button({ label: 'Extra small button', size: Size.Xs }), ' ',
                button({ label: 'Extra small button', size: Size.Xs, option: ButtonOption.Primary })
            ])
        ]),
        figure({ style: styles.highlight }, pre({}, code({ style: langJs }, [
            `p({}, [`, e({ tag: 'br' }),
            `    button({ label: 'Large button', size: Size.Lg }), ' ',`, e({ tag: 'br' }),
            `    button({ label: 'Large button', size: Size.Lg, option: ButtonOption.Primary })`, e({ tag: 'br' }),
            `]),`, e({ tag: 'br' }),
            `p({}, [`, e({ tag: 'br' }),
            `    button({ label: 'Default button', size: Size.Md }), ' ',`, e({ tag: 'br' }),
            `    button({ label: 'Default button', option: ButtonOption.Primary })`, e({ tag: 'br' }),
            `]),`, e({ tag: 'br' }),
            `p({}, [`, e({ tag: 'br' }),
            `    button({ label: 'Small button', size: Size.Sm }), ' ',`, e({ tag: 'br' }),
            `    button({ label: 'Small button', size: Size.Sm, option: ButtonOption.Primary })`, e({ tag: 'br' }),
            `]),`, e({ tag: 'br' }),
            `p({}, [`, e({ tag: 'br' }),
            `    button({ label: 'Extra small button', size: Size.Xs }), ' ',`, e({ tag: 'br' }),
            `    button({ label: 'Extra small button', size: Size.Xs, option: ButtonOption.Primary`, e({ tag: 'br' }),
            `])`
        ]))),
        p({}, [
            `Create block level buttons—those that span the full width of a parent by `, code({}, 'block'),
            ` input data property.`
        ]),
        e({ style: styles.bsExample }, [
            e({ style: [styles.well, styles.centerBlock, limitedWidthStyle] }, [
                button({ label: 'Block level button', block: true }),
                button({ label: 'Block level button', block: true, option: ButtonOption.Primary })
            ])
        ]),
        figure({ style: styles.highlight }, pre({}, code({ style: langJs }, [
            `button({ label: 'Block level button', block: true }),`, e({ tag: 'br' }),
            `button({ label: 'Block level button', block: true, option: ButtonOption.Primary })`
        ])))
    ];
}

function activeState(): b.IBobrilChildren {
    return [
        h2({ attrs: { id: 'buttons-active' } }, 'Active state'),
        p({}, [
            `Buttons will appear pressed (with a darker background, darker border, and inset shadow) when active. For <button> elements, 
            this is done via :active. For <a> elements, it's done with .active. However, you may use `,
            code({}, 'active'), ` input data property on `, code({}, 'button'), `(and set the `, code({}, 'aria.pressed'),
            ` property) should you need to replicate the active state programmatically.`
        ]),
        e({ style: styles.bsExample }, [
            button({ label: 'Primary link', option: ButtonOption.Primary, size: Size.Lg, active: true }), ' ',
            button({ label: 'Link', size: Size.Lg, active: true })
        ]),
        figure({ style: styles.highlight }, pre({}, code({ style: langJs }, [
            `button({ label: 'Primary link', option: ButtonOption.Primary, size: Size.Lg, active: true }), ' ',`, e({ tag: 'br' }),
            `button({ label: 'Link', size: Size.Lg, active: true })`
        ])))
    ];
}

function disabledState(): b.IBobrilChildren {
    return [
        h2({ attrs: { id: 'buttons-disabled' } }, 'Disabled state'),
        p({}, [
            `Make buttons look unclickable by fading them back with `, code({}, 'opacity'),
            `. You can do this by setting the input data property `, code({}, 'disabled'), `.`
        ]),
        e({ style: styles.bsExample }, [
            button({
                label: 'Primary button',
                option: ButtonOption.Primary,
                size: Size.Lg,
                disabled: true,
                onClick: () => alert('Clicked')
            }), ' ',
            button({ label: 'Button', size: Size.Lg, disabled: true, onClick: () => alert('Clicked') }),
            button({
                label: 'Primary link',
                option: ButtonOption.Primary,
                size: Size.Lg,
                disabled: true,
                tag: ButtonTag.A,
                onClick: () => alert('Clicked')
            }), ' ',
            button({ label: 'Link', size: Size.Lg, disabled: true, tag: ButtonTag.A, onClick: () => alert('Clicked') })
        ]),
        figure({ style: styles.highlight }, pre({}, code({ style: langJs }, [
            `button({`, e({ tag: 'br' }),
            `    label: 'Primary button',`, e({ tag: 'br' }),
            `    option: ButtonOption.Primary,`, e({ tag: 'br' }),
            `    size: Size.Lg,`, e({ tag: 'br' }),
            `    disabled: true,`, e({ tag: 'br' }),
            `    onClick: () => alert('Clicked')`, e({ tag: 'br' }),
            `}), ' ',`, e({ tag: 'br' }),
            `button({ label: 'Button', size: Size.Lg, disabled: true, onClick: () => alert('Clicked') }),`, e({ tag: 'br' }),
            `button({`, e({ tag: 'br' }),
            `    label: 'Primary link',`, e({ tag: 'br' }),
            `    option: ButtonOption.Primary,`, e({ tag: 'br' }),
            `    size: Size.Lg,`, e({ tag: 'br' }),
            `    disabled: true,`, e({ tag: 'br' }),
            `    tag: ButtonTag.A,`, e({ tag: 'br' }),
            `    onClick: () => alert('Clicked')`, e({ tag: 'br' }),
            `}), ' ',`, e({ tag: 'br' }),
            `button({ label: 'Link', size: Lg, disabled: true, tag: ButtonTag.A, onClick: () => alert('Clicked') })`
        ]))),
        e({ style: [styles.bsCallout, styles.bsCalloutDanger], attrs: { id: 'callout-buttons-ie-disabled' } }, [
            h4({}, `Cross-browser compatibility`),
            p({}, [
                `If you set the `, code({}, 'disabled'), ` property to a `, code({}, 'button'), ` Internet Explorer 9 and below will render 
                text gray with a nasty text-shadow that we cannot fix.`
            ])]),
        e({ style: [styles.bsCallout, styles.bsCalloutDanger], attrs: { id: 'callout-buttons-disabled-anchor' } }, [
            h4({}, `Link functionality caveat`),
            p({}, [
                `This class uses `, code({}, 'pointer-events: none'), ` to try to disable the link functionality of `, code({}, '<a>'),
                `s, but that CSS property is not yet standardized and isn't fully supported in Opera 18 and below, or in Internet 
                Explorer 11. In addition, even in browsers that do support `, code({}, 'pointer-events: none'), ` keyboard navigation 
                remains unaffected, meaning that sighted keyboard users and users of assistive technologies will still be able to 
                activate these links. So to be safe, use custom JavaScript to disable such links.`
            ])
        ])
    ];
}
import * as b from 'bobril';
import * as bs from '../../index';
import { styles } from '../bsexample/css';
import { pre, langJs } from '../prettify/pre';
import { section } from '../common/section';

export const buttons = b.createVirtualComponent({
    render(_ctx: b.IBobrilCtx, me: b.IBobrilNode) {
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
        b.anchor(bs.h2({ attrs: { id: 'buttons-tags' } }, 'Button tags')),
        bs.p({}, [
            `Use the button `, bs.code({}, 'tag'), ` input data property to decide for an <a>, <button>, or <input> element`
        ]),
        bs.e({ style: styles.bsExample }, [
            bs.form({}, [
                bs.button({ label: 'Link', tag: bs.ButtonTag.A, onClick: () => alert('Clicked <a> element!') }), ' ',
                bs.button({ label: 'Button (default)', onClick: () => alert('Clicked <button> element!') }), ' ',
                bs.button({ label: 'Input', tag: bs.ButtonTag.Input, onClick: () => alert('Clicked <input> element!') }), ' ',
                bs.button({ label: 'Submit', tag: bs.ButtonTag.Input, type: bs.ButtonType.Submit, onClick: () => alert('Clicked submit!') })
            ])
        ]),
        bs.figure({ style: styles.highlight }, pre({}, bs.code({ style: langJs }, [
            `bs.button({ label: 'Link', tag: bs.ButtonTag.A, onClick: () => alert('Clicked <a> element!') }), ' ',`, bs.e({ tag: 'br' }),
            `bs.button({ label: 'Button', onClick: () => alert('Clicked <button> element!') }), ' ',`, bs.e({ tag: 'br' }),
            `bs.button({ label: 'Input', tag: bs.ButtonTag.Input, onClick: () => alert('Clicked <input> element!') }), ' ',`,
            bs.e({ tag: 'br' }),
            `bs.button({ `, bs.e({ tag: 'br' }),
            `    label: 'Submit', tag: bs.ButtonTag.Input, type: bs.ButtonType.Submit, onClick: () => alert('Clicked submit!')`,
            bs.e({ tag: 'br' }),
            `})`
        ]))),
        bs.e({ style: [styles.bsCallout, styles.bsCalloutDanger], attrs: { id: 'callout-buttons-context-usage' } }, [
            bs.h4({}, `Context-specific usage`),
            bs.p({}, [
                `While `, bs.code({}, 'bs.button'), ` can be used with `, bs.code({}, 'a'), ` and `, bs.code({}, 'bs.button'),
                ` `, bs.code({}, 'tag'), ` input data property, only `, bs.code({}, 'bs.button'),
                `s are supported within our nav and navbar components.`
            ])
        ]),
        bs.e({ style: [styles.bsCallout, styles.bsCalloutDanger], attrs: { id: 'callout-buttons-ff-height' } }, [
            bs.h4({}, `Cross-browser rendering`),
            bs.p({}, [
                `As a best practice, `, bs.strong({}, [
                    `we highly recommend using the `, bs.code({}, 'bs.button'),
                    ` (the default) tag whenever possible`]),
                ` to ensure matching cross-browser rendering.`
            ]),
            bs.p({}, [
                `Among other things, there's a bug in Firefox <30 that prevents Bootstrap from setting the `,
                bs.code({}, 'line-height'), ` of `, bs.code({}, '<input>'),
                `-based buttons, causing them to not exactly match the height of other buttons on Firefox`
            ])
        ])
    ];
}

function options(): b.IBobrilChildren {
    return [
        b.anchor(bs.h2({ attrs: { id: 'buttons-options' } }, 'Options')),
        bs.p({}, `Use any of the available button classes to quickly create a styled button.`),
        bs.e({ style: styles.bsExample }, [
            bs.button({ label: 'Default', onClick: () => alert('Clicked!') }), ' ',
            bs.button({ label: 'Primary', option: bs.ButtonOption.Primary, onClick: () => alert('Clicked!') }), ' ',
            bs.button({ label: 'Success', option: bs.ButtonOption.Success, onClick: () => alert('Clicked!') }), ' ',
            bs.button({ label: 'Info', option: bs.ButtonOption.Info, onClick: () => alert('Clicked!') }), ' ',
            bs.button({ label: 'Warning', option: bs.ButtonOption.Warning, onClick: () => alert('Clicked!') }), ' ',
            bs.button({ label: 'Danger', option: bs.ButtonOption.Danger, onClick: () => alert('Clicked!') }), ' ',
            bs.button({ label: 'Link', option: bs.ButtonOption.Link, onClick: () => alert('Clicked!') })
        ]),
        bs.figure({ style: styles.highlight }, pre({}, bs.code({ style: langJs }, [
            `bs.button({ label: 'Default', onClick: () => alert('Clicked!') }), ' ',`, bs.e({ tag: 'br' }),
            `bs.button({ label: 'Primary', option: bs.ButtonOption.Primary, onClick: () => alert('Clicked!') }), ' ',`, bs.e({ tag: 'br' }),
            `bs.button({ label: 'Success', option: bs.ButtonOption.Success, onClick: () => alert('Clicked!') }), ' ',`, bs.e({ tag: 'br' }),
            `bs.button({ label: 'Info', option: bs.ButtonOption.Info, onClick: () => alert('Clicked!') }), ' ',`, bs.e({ tag: 'br' }),
            `bs.button({ label: 'Warning', option: bs.ButtonOption.Warning, onClick: () => alert('Clicked!') }), ' ',`, bs.e({ tag: 'br' }),
            `bs.button({ label: 'Danger', option: bs.ButtonOption.Danger, onClick: () => alert('Clicked!') }), ' ',`, bs.e({ tag: 'br' }),
            `bs.button({ label: 'Link', option: bs.ButtonOption.Link, onClick: () => alert('Clicked!') })`
        ]))),
        bs.e({ style: [styles.bsCallout, styles.bsCalloutDanger], attrs: { id: 'callout-buttons-context-usage' } }, [
            bs.h4({}, `Context-specific usage`),
            bs.p({}, [
                `Using color to add meaning to a button only provides a visual indication, which will not be conveyed to users of 
                assistive technologies – such as screen readers. Ensure that information denoted by the color is either obvious 
                from the content itself (the visible text of the button), or is included through alternative means, such as additional 
                text hidden with the `, bs.code({}, 'bs.helpers.srOnly'), ` style.`
            ])
        ])
    ];
}

const limitedWidthStyle = b.styleDef({ maxWidth: '400px' }, undefined, 'buttons-limited-width-example');

function sizes(): b.IBobrilChildren {
    return [
        b.anchor(bs.h2({ attrs: { id: 'buttons-sizes' } }, 'Sizes')),
        bs.p({}, [
            `Fancy larger or smaller buttons? Set the `, bs.code({}, 'size'), ` input data property.`
        ]),
        bs.e({ style: styles.bsExample }, [
            bs.p({}, [
                bs.button({ label: 'Large button', size: bs.Size.Lg }), ' ',
                bs.button({ label: 'Large button', size: bs.Size.Lg, option: bs.ButtonOption.Primary })
            ]),
            bs.p({}, [
                bs.button({ label: 'Default button', size: bs.Size.Md }), ' ',
                bs.button({ label: 'Default button', option: bs.ButtonOption.Primary })
            ]),
            bs.p({}, [
                bs.button({ label: 'Small button', size: bs.Size.Sm }), ' ',
                bs.button({ label: 'Small button', size: bs.Size.Sm, option: bs.ButtonOption.Primary })
            ]),
            bs.p({}, [
                bs.button({ label: 'Extra small button', size: bs.Size.Xs }), ' ',
                bs.button({ label: 'Extra small button', size: bs.Size.Xs, option: bs.ButtonOption.Primary })
            ])
        ]),
        bs.figure({ style: styles.highlight }, pre({}, bs.code({ style: langJs }, [
            `bs.p({}, [`, bs.e({ tag: 'br' }),
            `    bs.button({ label: 'Large button', size: bs.Size.Lg }), ' ',`, bs.e({ tag: 'br' }),
            `    bs.button({ label: 'Large button', size: bs.Size.Lg, option: bs.ButtonOption.Primary })`, bs.e({ tag: 'br' }),
            `]),`, bs.e({ tag: 'br' }),
            `bs.p({}, [`, bs.e({ tag: 'br' }),
            `    bs.button({ label: 'Default button', size: bs.Size.Md }), ' ',`, bs.e({ tag: 'br' }),
            `    bs.button({ label: 'Default button', option: bs.ButtonOption.Primary })`, bs.e({ tag: 'br' }),
            `]),`, bs.e({ tag: 'br' }),
            `bs.p({}, [`, bs.e({ tag: 'br' }),
            `    bs.button({ label: 'Small button', size: bs.Size.Sm }), ' ',`, bs.e({ tag: 'br' }),
            `    bs.button({ label: 'Small button', size: bs.Size.Sm, option: bs.ButtonOption.Primary })`, bs.e({ tag: 'br' }),
            `]),`, bs.e({ tag: 'br' }),
            `bs.p({}, [`, bs.e({ tag: 'br' }),
            `    bs.button({ label: 'Extra small button', size: bs.Size.Xs }), ' ',`, bs.e({ tag: 'br' }),
            `    bs.button({ label: 'Extra small button', size: bs.Size.Xs, option: bs.ButtonOption.Primary`, bs.e({ tag: 'br' }),
            `])`
        ]))),
        bs.p({}, [
            `Create block level buttons—those that span the full width of a parent by `, bs.code({}, 'block'),
            ` input data property.`
        ]),
        bs.e({ style: styles.bsExample }, [
            bs.well({ style: [styles.centerBlock, limitedWidthStyle] }, [
                bs.button({ label: 'Block level button', block: true }),
                bs.button({ label: 'Block level button', block: true, option: bs.ButtonOption.Primary })
            ])
        ]),
        bs.figure({ style: styles.highlight }, pre({}, bs.code({ style: langJs }, [
            `bs.button({ label: 'Block level button', block: true }),`, bs.e({ tag: 'br' }),
            `bs.button({ label: 'Block level button', block: true, option: bs.ButtonOption.Primary })`
        ])))
    ];
}

function activeState(): b.IBobrilChildren {
    return [
        b.anchor(bs.h2({ attrs: { id: 'buttons-active' } }, 'Active state')),
        bs.p({}, [
            `Buttons will appear pressed (with a darker background, darker border, and inset shadow) when active. For <button> elements, 
            this is done via :active. For <a> elements, it's done with .active. However, you may use `,
            bs.code({}, 'active'), ` input data property on `, bs.code({}, 'bs.button'), `(and set the `, bs.code({}, 'aria.pressed'),
            ` property) should you need to replicate the active state programmatically.`
        ]),
        bs.e({ style: styles.bsExample }, [
            bs.button({ label: 'Primary link', option: bs.ButtonOption.Primary, size: bs.Size.Lg, active: true }), ' ',
            bs.button({ label: 'Link', size: bs.Size.Lg, active: true })
        ]),
        bs.figure({ style: styles.highlight }, pre({}, bs.code({ style: langJs }, [
            `bs.button({ label: 'Primary link', option: bs.ButtonOption.Primary, size: bs.Size.Lg, active: true }), ' ',`,
            bs.e({ tag: 'br' }),
            `bs.button({ label: 'Link', size: bs.Size.Lg, active: true })`
        ])))
    ];
}

function disabledState(): b.IBobrilChildren {
    return [
        b.anchor(bs.h2({ attrs: { id: 'buttons-disabled' } }, 'Disabled state')),
        bs.p({}, [
            `Make buttons look unclickable by fading them back with `, bs.code({}, 'opacity'),
            `. You can do this by setting the input data property `, bs.code({}, 'disabled'), `.`
        ]),
        bs.e({ style: styles.bsExample }, [
            bs.button({
                label: 'Primary button',
                option: bs.ButtonOption.Primary,
                size: bs.Size.Lg,
                disabled: true,
                onClick: () => alert('Clicked')
            }), ' ',
            bs.button({ label: 'Button', size: bs.Size.Lg, disabled: true, onClick: () => alert('Clicked') }),
            bs.button({
                label: 'Primary link',
                option: bs.ButtonOption.Primary,
                size: bs.Size.Lg,
                disabled: true,
                tag: bs.ButtonTag.A,
                onClick: () => alert('Clicked')
            }), ' ',
            bs.button({ label: 'Link', size: bs.Size.Lg, disabled: true, tag: bs.ButtonTag.A, onClick: () => alert('Clicked') })
        ]),
        bs.figure({ style: styles.highlight }, pre({}, bs.code({ style: langJs }, [
            `bs.button({`, bs.e({ tag: 'br' }),
            `    label: 'Primary button',`, bs.e({ tag: 'br' }),
            `    option: bs.ButtonOption.Primary,`, bs.e({ tag: 'br' }),
            `    size: bs.Size.Lg,`, bs.e({ tag: 'br' }),
            `    disabled: true,`, bs.e({ tag: 'br' }),
            `    onClick: () => alert('Clicked')`, bs.e({ tag: 'br' }),
            `}), ' ',`, bs.e({ tag: 'br' }),
            `bs.button({ label: 'Button', size: bs.Size.Lg, disabled: true, onClick: () => alert('Clicked') }),`, bs.e({ tag: 'br' }),
            `bs.button({`, bs.e({ tag: 'br' }),
            `    label: 'Primary link',`, bs.e({ tag: 'br' }),
            `    option: bs.ButtonOption.Primary,`, bs.e({ tag: 'br' }),
            `    size: bs.Size.Lg,`, bs.e({ tag: 'br' }),
            `    disabled: true,`, bs.e({ tag: 'br' }),
            `    tag: bs.ButtonTag.A,`, bs.e({ tag: 'br' }),
            `    onClick: () => alert('Clicked')`, bs.e({ tag: 'br' }),
            `}), ' ',`, bs.e({ tag: 'br' }),
            `bs.button({ label: 'Link', size: Lg, disabled: true, tag: bs.ButtonTag.A, onClick: () => alert('Clicked') })`
        ]))),
        bs.e({ style: [styles.bsCallout, styles.bsCalloutDanger], attrs: { id: 'callout-buttons-ie-disabled' } }, [
            bs.h4({}, `Cross-browser compatibility`),
            bs.p({}, [
                `If you set the `, bs.code({}, 'disabled'), ` property to a `, bs.code({}, 'bs.button'),
                ` Internet Explorer 9 and below will render text gray with a nasty text-shadow that we cannot fix.`
            ])]),
        bs.e({ style: [styles.bsCallout, styles.bsCalloutDanger], attrs: { id: 'callout-buttons-disabled-anchor' } }, [
            bs.h4({}, `Link functionality caveat`),
            bs.p({}, [
                `This class uses `, bs.code({}, 'pointer-events: none'), ` to try to disable the link functionality of `,
                bs.code({}, '<a>'),
                `s, but that CSS property is not yet standardized and isn't fully supported in Opera 18 and below, or in Internet 
                Explorer 11. In addition, even in browsers that do support `, bs.code({}, 'pointer-events: none'), ` keyboard navigation 
                remains unaffected, meaning that sighted keyboard users and users of assistive technologies will still be able to 
                activate these links. So to be safe, use custom JavaScript to disable such links.`
            ])
        ])
    ];
}
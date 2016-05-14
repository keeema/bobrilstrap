import * as b from 'bobril';
import { a, e, p, h2, h3, h4, code, figure, dropdownItem, dropdown, dropdownMenu, helpers } from '../../index';
import { styles } from '../bsexample/css';
import pre, { langJs } from '../prettify/pre';
import section from '../common/section';

export default b.createVirtualComponent({
    render(ctx: b.IBobrilCtx, me: b.IBobrilNode) {
        me.children = section(
            {
                header: 'Dropdowns',
                id: 'dropdowns',
                lead: `Toggleable, contextual menu for displaying lists of links.`
            },
            [
                example(),
                alignment(),
                headers(),
                divider(),
                disabled()
            ]);
    }
})


function example(): b.IBobrilChildren {
    return [
        h2({ attrs: { id: 'dropdowns-example' } }, 'Example'),
        p({}, [
            `Wrap the dropdown's trigger and the dropdown menu within`, code({}, 'dropdown'),
            `, or another element that declares `, code({}, 'position: relative;'), `. Then add the menu.`
        ]),
        e({ style: styles.bsExample }, [
            dropdown(
                {
                    button: { label: 'Dropdown', id: 'dropdownMenu1', aria: { hasPopup: true } },
                    style: helpers.clearfix
                },
                dropdownMenu({ aria: { labelledBy: 'dropdownMenu1' } }, [
                    dropdownItem({}, a({ href: 'javascript:void(0)' }, 'Action')),
                    dropdownItem({}, a({ href: 'javascript:void(0)' }, 'Another action')),
                    dropdownItem({}, a({ href: 'javascript:void(0)' }, 'Something else here')),
                    dropdownItem({ separator: true }),
                    dropdownItem({}, a({ href: 'javascript:void(0)' }, 'Separated link')),
                ])
            )
        ]),
        figure({ style: styles.highlight }, pre({}, code({ style: langJs }, [
            `dropdown(`, e({ tag: 'br' }),
            `    { button: { label: 'Dropdown', id: 'dropdownMenu1', aria: { hasPopup: true } } },`, e({ tag: 'br' }),
            `    dropdownMenu({ aria: { labelledBy: 'dropdownMenu1'}}, [`, e({ tag: 'br' }),
            `        dropdownItem({}, a({ href: '...' }, 'Action')),`, e({ tag: 'br' }),
            `        dropdownItem({}, a({ href: '...' }, 'Another action')),`, e({ tag: 'br' }),
            `        dropdownItem({}, a({ href: '...' }, 'Something else here')),`, e({ tag: 'br' }),
            `        dropdownItem({ separator: true}),`, e({ tag: 'br' }),
            `        dropdownItem({}, a({ href: '...' }, 'Separated link')),`, e({ tag: 'br' }),
            `    ])`, e({ tag: 'br' }),
            `)`
        ]))),
        p({}, [
            `Dropdown menus can be changed to expand upwards (instead of downwards) by setting `, code({}, 'up'),
            ` input data property or by using `, code({}, 'dropdownStyles.dropup'), ` instead of `, code({}, 'dropdownStyles.dropdown'), `.`
        ]),
        e({ style: styles.bsExample }, [
            dropdown(
                {
                    up: true,
                    button: { label: 'Dropup', id: 'dropdownMenu1', aria: { hasPopup: true } },
                    style: helpers.clearfix
                },
                dropdownMenu({ aria: { labelledBy: 'dropdownMenu1' } }, [
                    dropdownItem({}, a({ href: 'javascript:void(0)' }, 'Action')),
                    dropdownItem({}, a({ href: 'javascript:void(0)' }, 'Another action')),
                    dropdownItem({}, a({ href: 'javascript:void(0)' }, 'Something else here')),
                    dropdownItem({ separator: true }),
                    dropdownItem({}, a({ href: 'javascript:void(0)' }, 'Separated link')),
                ])
            )
        ]),
        figure({ style: styles.highlight }, pre({}, code({ style: langJs }, [
            `dropdown(`, e({ tag: 'br' }),
            `    {`, e({ tag: 'br' }),
            `        button: { label: 'Dropup', id: 'dropdownMenu1', aria: { hasPopup: true } },`, e({ tag: 'br' }),
            `        up: true,`, e({ tag: 'br' }),
            `    },`, e({ tag: 'br' }),
            `    dropdownMenu({ aria: { labelledBy: 'dropdownMenu1'}}, [`, e({ tag: 'br' }),
            `        dropdownItem({}, a({ href: '...' }, 'Action')),`, e({ tag: 'br' }),
            `        dropdownItem({}, a({ href: '...' }, 'Another action')),`, e({ tag: 'br' }),
            `        dropdownItem({}, a({ href: '...' }, 'Something else here')),`, e({ tag: 'br' }),
            `        dropdownItem({ separator: true}),`, e({ tag: 'br' }),
            `        dropdownItem({}, a({ href: '...' }, 'Separated link')),`, e({ tag: 'br' }),
            `    ])`, e({ tag: 'br' }),
            `)`
        ])))
    ];
}

function alignment(): b.IBobrilChildren {
    return [
        h2({ attrs: { id: 'dropdowns-alignment' } }, 'Alignment'),
        p({}, [
            `By default, a dropdown menu is automatically positioned 100% from the top and along the left side of its parent. Set the`,
            code({}, 'right'), ` dropdown menu component input data property to right align the dropdown menu.`
        ]),
        e({ style: [styles.bsCallout, styles.bsCalloutDanger], attrs: { id: 'callout-dropdown-positioning' } }, [
            h4({}, `May require additional positioning`),
            p({}, [
                `Dropdowns are automatically positioned via CSS within the normal flow of the document. This means dropdowns may be cropped 
                by parents with certain `, code({}, 'overflow'), ` properties or appear out of bounds of the viewport. Address these issues 
                on your own as they arise.`
            ])
        ]),
        figure({ style: styles.highlight }, pre({}, code({ style: langJs }, [
            `dropdownMenu({ right: true, aria: { labelledBy: 'dLabel' } }, [`, e({ tag: 'br' }),
            `    ...`, e({ tag: 'br' }),
            `])`
        ]))),
    ];
}

function headers(): b.IBobrilChildren {
    return [
        h2({ attrs: { id: 'dropdowns-headers' } }, 'Headers'),
        p({}, [`Add a header to label sections of actions in any dropdown menu.`]),
        e({ style: styles.bsExample }, [
            dropdown(
                {
                    button: { label: 'Dropdown', id: 'dropdownMenu3' },
                    style: helpers.clearfix
                },
                dropdownMenu({ aria: { labelledBy: 'dropdownMenu3' } }, [
                    dropdownItem({ header: true }, 'Dropdown header'),
                    dropdownItem({}, a({ href: 'javascript:void(0)' }, 'Action')),
                    dropdownItem({}, a({ href: 'javascript:void(0)' }, 'Another action')),
                    dropdownItem({}, a({ href: 'javascript:void(0)' }, 'Something else here')),
                    dropdownItem({ header: true }, 'Dropdown header'),
                    dropdownItem({}, a({ href: 'javascript:void(0)' }, 'Separated link')),
                ])
            )
        ]),
        figure({ style: styles.highlight }, pre({}, code({ style: langJs }, [
            `dropdownMenu({ aria: { labelledBy: 'dropdownMenu3' }}, [`, e({ tag: 'br' }),
            `    ...`, e({ tag: 'br' }),
            `    dropdownItem({ header: true }, 'Dropdown header'),`, e({ tag: 'br' }),
            `    ...`, e({ tag: 'br' }),
            `])`
        ]))),
    ];
}

function divider(): b.IBobrilChildren {
    return [
        h2({ attrs: { id: 'dropdowns-divider' } }, 'Divider'),
        p({}, [`Add a divider to separate series of links in a dropdown menu.`]),
        e({ style: styles.bsExample }, [
            dropdown(
                {
                    button: { label: 'Dropdown', id: 'dropdownMenuDivider' },
                    style: helpers.clearfix
                },
                dropdownMenu({ aria: { labelledBy: 'dropdownMenuDivider' } }, [
                    dropdownItem({}, a({ href: 'javascript:void(0)' }, 'Action')),
                    dropdownItem({}, a({ href: 'javascript:void(0)' }, 'Another action')),
                    dropdownItem({}, a({ href: 'javascript:void(0)' }, 'Something else here')),
                    dropdownItem({ separator: true }),
                    dropdownItem({}, a({ href: 'javascript:void(0)' }, 'Separated link')),
                ])
            )
        ]),
        figure({ style: styles.highlight }, pre({}, code({ style: langJs }, [
            `dropdownMenu({ aria: { labelledBy: 'dropdownMenuDivider' }}, [`, e({ tag: 'br' }),
            `    ...`, e({ tag: 'br' }),
            `    dropdownItem({ separator: true }),`, e({ tag: 'br' }),
            `    ...`, e({ tag: 'br' }),
            `])`
        ]))),
    ];
}

function disabled(): b.IBobrilChildren {
    return [
        h2({ attrs: { id: 'dropdowns-disabled' } }, 'Disabled menu items'),
        p({}, [`Set a `, code({}, 'disabled'), ` input data property on a `, code({}, 'dropdownItem'),
            ` component in the dropdown to disable the link.`]),
        e({ style: styles.bsExample }, [
            dropdown(
                {
                    button: { label: 'Dropdown', id: 'dropdownMenu4', aria: { hasPopup: true } },
                    style: helpers.clearfix
                },
                dropdownMenu({ aria: { labelledBy: 'dropdownMenu4' } }, [
                    dropdownItem({}, a({ href: 'javascript:void(0)' }, 'Regular link')),
                    dropdownItem({ disabled: true }, a({ href: 'javascript:void(0)' }, 'Disabled link')),
                    dropdownItem({}, a({ href: 'javascript:void(0)' }, 'Another link'))
                ])
            )
        ]),
        figure({ style: styles.highlight }, pre({}, code({ style: langJs }, [
            `dropdownMenu({ aria: { labelledBy: 'dropdownMenu4' }}, [`, e({ tag: 'br' }),
            `    dropdownItem({}, a({ href: '...' }, 'Regular link')),`, e({ tag: 'br' }),
            `    dropdownItem({ disabled: true }, a({ href: '...' }, 'Disabled link')),`, e({ tag: 'br' }),
            `    dropdownItem({}, a({ href: '...' }, 'Another link'))`, e({ tag: 'br' }),
            `])`
        ]))),
    ];
}  
import * as b from 'bobril';
import * as bs from '../../index';
import { styles } from '../bsexample/css';
import { pre, langJs } from '../prettify/pre';
import { section } from '../common/section';

export const dropdowns = b.createVirtualComponent({
    render(_ctx: b.IBobrilCtx, me: b.IBobrilNode) {
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
});

function example(): b.IBobrilChildren {
    return [
        b.anchor(bs.h2({ attrs: { id: 'dropdowns-example' } }, 'Example')),
        bs.p({}, [
            `Wrap the dropdown's trigger and the dropdown menu within`, bs.code({}, 'bs.dropdown'),
            `, or another element that declares `, bs.code({}, 'position: relative;'), `. Then add the menu.`
        ]),
        bs.e({ style: styles.bsExample }, [
            bs.dropdown(
                {
                    button: { label: 'Dropdown', id: 'dropdownMenu1' },
                    style: bs.helpers.clearfix
                },
                bs.dropdownMenu({ aria: { labelledby: 'dropdownMenu1' } }, [
                    bs.dropdownItem({}, bs.a({ href: 'javascript:void(0)' }, 'Action')),
                    bs.dropdownItem({}, bs.a({ href: 'javascript:void(0)' }, 'Another action')),
                    bs.dropdownItem({}, bs.a({ href: 'javascript:void(0)' }, 'Something else here')),
                    bs.dropdownItem({ separator: true }),
                    bs.dropdownItem({}, bs.a({ href: 'javascript:void(0)' }, 'Separated link'))
                ])
            )
        ]),
        bs.figure({ style: styles.highlight }, pre({}, bs.code({ style: langJs }, [
            `bs.dropdown(`, bs.e({ tag: 'br' }),
            `    { button: { label: 'Dropdown', id: 'dropdownMenu1' } },`, bs.e({ tag: 'br' }),
            `    bs.dropdownMenu({ aria: { labelledby: 'dropdownMenu1'}}, [`, bs.e({ tag: 'br' }),
            `        bs.dropdownItem({}, bs.a({ href: '...' }, 'Action')),`, bs.e({ tag: 'br' }),
            `        bs.dropdownItem({}, bs.a({ href: '...' }, 'Another action')),`, bs.e({ tag: 'br' }),
            `        bs.dropdownItem({}, bs.a({ href: '...' }, 'Something else here')),`, bs.e({ tag: 'br' }),
            `        bs.dropdownItem({ separator: true}),`, bs.e({ tag: 'br' }),
            `        bs.dropdownItem({}, bs.a({ href: '...' }, 'Separated link')),`, bs.e({ tag: 'br' }),
            `    ])`, bs.e({ tag: 'br' }),
            `)`
        ]))),
        bs.p({}, [
            `Dropdown menus can be changed to expand upwards (instead of downwards) by setting `, bs.code({}, 'up'),
            ` input data property or by using `, bs.code({}, 'dropdownStyles.dropup'), ` instead of `,
            bs.code({}, 'dropdownStyles.dropdown'), `.`
        ]),
        bs.e({ style: styles.bsExample }, [
            bs.dropdown(
                {
                    up: true,
                    button: { label: 'Dropup', id: 'dropdownMenu1' },
                    style: bs.helpers.clearfix
                },
                bs.dropdownMenu({ aria: { labelledby: 'dropdownMenu1' } }, [
                    bs.dropdownItem({}, bs.a({ href: 'javascript:void(0)' }, 'Action')),
                    bs.dropdownItem({}, bs.a({ href: 'javascript:void(0)' }, 'Another action')),
                    bs.dropdownItem({}, bs.a({ href: 'javascript:void(0)' }, 'Something else here')),
                    bs.dropdownItem({ separator: true }),
                    bs.dropdownItem({}, bs.a({ href: 'javascript:void(0)' }, 'Separated link'))
                ])
            )
        ]),
        bs.figure({ style: styles.highlight }, pre({}, bs.code({ style: langJs }, [
            `bs.dropdown(`, bs.e({ tag: 'br' }),
            `    {`, bs.e({ tag: 'br' }),
            `        button: { label: 'Dropup', id: 'dropdownMenu1' },`, bs.e({ tag: 'br' }),
            `        up: true,`, bs.e({ tag: 'br' }),
            `    },`, bs.e({ tag: 'br' }),
            `    bs.dropdownMenu({ aria: { labelledby: 'dropdownMenu1'}}, [`, bs.e({ tag: 'br' }),
            `        bs.dropdownItem({}, bs.a({ href: '...' }, 'Action')),`, bs.e({ tag: 'br' }),
            `        bs.dropdownItem({}, bs.a({ href: '...' }, 'Another action')),`, bs.e({ tag: 'br' }),
            `        bs.dropdownItem({}, bs.a({ href: '...' }, 'Something else here')),`, bs.e({ tag: 'br' }),
            `        bs.dropdownItem({ separator: true}),`, bs.e({ tag: 'br' }),
            `        bs.dropdownItem({}, bs.a({ href: '...' }, 'Separated link')),`, bs.e({ tag: 'br' }),
            `    ])`, bs.e({ tag: 'br' }),
            `)`
        ])))
    ];
}

function alignment(): b.IBobrilChildren {
    return [
        b.anchor(bs.h2({ attrs: { id: 'dropdowns-alignment' } }, 'Alignment')),
        bs.p({}, [
            `By default, a dropdown menu is automatically positioned 100% from the top and along the left side of its parent. Set the`,
            bs.code({}, 'right'), ` dropdown menu component input data property to right align the dropdown menu.`
        ]),
        bs.e({ style: [styles.bsCallout, styles.bsCalloutDanger], attrs: { id: 'callout-dropdown-positioning' } }, [
            bs.h4({}, `May require additional positioning`),
            bs.p({}, [
                `Dropdowns are automatically positioned via CSS within the normal flow of the document. This means dropdowns may be cropped 
                by parents with certain `, bs.code({}, 'overflow'),
                ` properties or appear out of bounds of the viewport. Address these issues on your own as they arise.`
            ])
        ]),
        bs.figure({ style: styles.highlight }, pre({}, bs.code({ style: langJs }, [
            `bs.dropdownMenu({ right: true, aria: { labelledby: 'dLabel' } }, [`, bs.e({ tag: 'br' }),
            `    ...`, bs.e({ tag: 'br' }),
            `])`
        ])))
    ];
}

function headers(): b.IBobrilChildren {
    return [
        b.anchor(bs.h2({ attrs: { id: 'dropdowns-headers' } }, 'Headers')),
        bs.p({}, [`Add a header to label sections of actions in any dropdown menu.`]),
        bs.e({ style: styles.bsExample }, [
            bs.dropdown(
                {
                    button: { label: 'Dropdown', id: 'dropdownMenu3' },
                    style: bs.helpers.clearfix
                },
                bs.dropdownMenu({ aria: { labelledby: 'dropdownMenu3' } }, [
                    bs.dropdownItem({ header: true }, 'Dropdown header'),
                    bs.dropdownItem({}, bs.a({ href: 'javascript:void(0)' }, 'Action')),
                    bs.dropdownItem({}, bs.a({ href: 'javascript:void(0)' }, 'Another action')),
                    bs.dropdownItem({}, bs.a({ href: 'javascript:void(0)' }, 'Something else here')),
                    bs.dropdownItem({ header: true }, 'Dropdown header'),
                    bs.dropdownItem({}, bs.a({ href: 'javascript:void(0)' }, 'Separated link'))
                ])
            )
        ]),
        bs.figure({ style: styles.highlight }, pre({}, bs.code({ style: langJs }, [
            `bs.dropdownMenu({ aria: { labelledby: 'dropdownMenu3' }}, [`, bs.e({ tag: 'br' }),
            `    ...`, bs.e({ tag: 'br' }),
            `    bs.dropdownItem({ header: true }, 'Dropdown header'),`, bs.e({ tag: 'br' }),
            `    ...`, bs.e({ tag: 'br' }),
            `])`
        ])))
    ];
}

function divider(): b.IBobrilChildren {
    return [
        b.anchor(bs.h2({ attrs: { id: 'dropdowns-divider' } }, 'Divider')),
        bs.p({}, [`Add a divider to separate series of links in a dropdown menu.`]),
        bs.e({ style: styles.bsExample }, [
            bs.dropdown(
                {
                    button: { label: 'Dropdown', id: 'dropdownMenuDivider' },
                    style: bs.helpers.clearfix
                },
                bs.dropdownMenu({ aria: { labelledby: 'dropdownMenuDivider' } }, [
                    bs.dropdownItem({}, bs.a({ href: 'javascript:void(0)' }, 'Action')),
                    bs.dropdownItem({}, bs.a({ href: 'javascript:void(0)' }, 'Another action')),
                    bs.dropdownItem({}, bs.a({ href: 'javascript:void(0)' }, 'Something else here')),
                    bs.dropdownItem({ separator: true }),
                    bs.dropdownItem({}, bs.a({ href: 'javascript:void(0)' }, 'Separated link'))
                ])
            )
        ]),
        bs.figure({ style: styles.highlight }, pre({}, bs.code({ style: langJs }, [
            `bs.dropdownMenu({ aria: { labelledby: 'dropdownMenuDivider' }}, [`, bs.e({ tag: 'br' }),
            `    ...`, bs.e({ tag: 'br' }),
            `    bs.dropdownItem({ separator: true }),`, bs.e({ tag: 'br' }),
            `    ...`, bs.e({ tag: 'br' }),
            `])`
        ])))
    ];
}

function disabled(): b.IBobrilChildren {
    return [
        b.anchor(bs.h2({ attrs: { id: 'dropdowns-disabled' } }, 'Disabled menu items')),
        bs.p({}, [`Set a `, bs.code({}, 'disabled'), ` input data property on a `, bs.code({}, 'bs.dropdownItem'),
            ` component in the dropdown to disable the link.`]),
        bs.e({ style: styles.bsExample }, [
            bs.dropdown(
                {
                    button: { label: 'Dropdown', id: 'dropdownMenu4' },
                    style: bs.helpers.clearfix
                },
                bs.dropdownMenu({ aria: { labelledby: 'dropdownMenu4' } }, [
                    bs.dropdownItem({}, bs.a({ href: 'javascript:void(0)' }, 'Regular link')),
                    bs.dropdownItem({ disabled: true }, bs.a({ href: 'javascript:void(0)' }, 'Disabled link')),
                    bs.dropdownItem({}, bs.a({ href: 'javascript:void(0)' }, 'Another link'))
                ])
            )
        ]),
        bs.figure({ style: styles.highlight }, pre({}, bs.code({ style: langJs }, [
            `bs.dropdownMenu({ aria: { labelledby: 'dropdownMenu4' }}, [`, bs.e({ tag: 'br' }),
            `    bs.dropdownItem({}, bs.a({ href: '...' }, 'Regular link')),`, bs.e({ tag: 'br' }),
            `    bs.dropdownItem({ disabled: true }, bs.a({ href: '...' }, 'Disabled link')),`, bs.e({ tag: 'br' }),
            `    bs.dropdownItem({}, bs.a({ href: '...' }, 'Another link'))`, bs.e({ tag: 'br' }),
            `])`
        ])))
    ];
}  
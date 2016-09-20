import * as b from 'bobril';
import { a, e, p, h2, h4, code, figure, button, buttonGroup, ButtonGroupSize, helpers, buttonToolbar, dropdownMenu,
    dropdownItem, dropdown, strong, ButtonTag } from '../../index';
import { styles } from '../bsexample/css';
import { pre, langJs } from '../prettify/pre';
import { section } from '../common/section';

export const buttonGroups = b.createVirtualComponent({
    render(ctx: b.IBobrilCtx, me: b.IBobrilNode) {
        me.children = section(
            {
                header: 'Button groups',
                id: 'btn-groups',
                lead: `Group a series of buttons together on a single line with the button group.`
            },
            [
                labeling(),
                example(),
                toolbar(),
                sizing(),
                nesting(),
                vertical(),
                justified()
            ]);
    }
});

function labeling(): b.IBobrilChildren {
    return [
        e({ style: [styles.bsCallout, styles.bsCalloutDanger], attrs: { id: 'callout-btn-group-accessibility' } }, [
            h4({}, `Provide a label`),
            p({}, [
                `In addition, groups and toolbars should be given an explicit label, as most assistive technologies will otherwise not 
                announce them, despite the presence of the correct role attribute. In the examples provided here, we use `,
                code({}, 'aria.label'), `, but alternatives such as `, code({}, 'aria.labelledby'), ` can also be used.`
            ])
        ])
    ];
}

function example(): b.IBobrilChildren {
    return [
        b.anchor(h2({ attrs: { id: 'btn-groups-single' } }, 'Basic example')),
        p({}, [
            `Wrap a series of `, code({}, 'button'), `s in `, code({}, 'buttonGroup'), `.`
        ]),
        e({ style: styles.bsExample }, [
            buttonGroup({}, [
                button({ label: 'Left' }),
                button({ label: 'Middle' }),
                button({ label: 'Right' })
            ])
        ]),
        figure({ style: styles.highlight }, pre({}, code({ style: langJs }, [
            `buttonGroup({}, [`, e({ tag: 'br' }),
            `   button({ label: 'Left' }),`, e({ tag: 'br' }),
            `   button({ label: 'Middle' }),`, e({ tag: 'br' }),
            `   button({ label: 'Right' })`, e({ tag: 'br' }),
            `])`
        ])))
    ];
}

function toolbar(): b.IBobrilChildren {
    return [
        b.anchor(h2({ attrs: { id: 'btn-groups-toolbar' } }, 'Button toolbar')),
        p({}, [
            `Combine sets of `, code({}, 'buttonGroup'), ` into a `, code({}, 'buttonToolbar'), ` for more complex components..`
        ]),
        e({ style: styles.bsExample }, [
            buttonToolbar({}, [
                buttonGroup({}, [button({ label: '1' }), button({ label: '2' }), button({ label: '3' }), button({ label: '4' })]),
                buttonGroup({}, [button({ label: '5' }), button({ label: '6' }), button({ label: '7' })]),
                buttonGroup({}, [button({ label: '8' })])
            ])
        ]),
        figure({ style: styles.highlight }, pre({}, code({ style: langJs }, [
            `buttonToolbar({}, [`, e({ tag: 'br' }),
            `    buttonGroup({}, ...),`, e({ tag: 'br' }),
            `    buttonGroup({}, ...),`, e({ tag: 'br' }),
            `    buttonGroup({}, ...)`, e({ tag: 'br' }),
            `])`
        ])))
    ];
}

function sizing(): b.IBobrilChildren {
    return [
        b.anchor(h2({ attrs: { id: 'btn-groups-sizing' } }, 'Sizing')),
        p({}, [
            `Instead of applying button sizing classes to every `, code({}, 'button'), ` in a group, just set `,
            code({}, 'size'), ` input data property on each `, code({}, 'buttonGroup'),
            `, including when nesting multiple groups.`
        ]),
        e({ style: styles.bsExample }, [
            buttonGroup({ size: ButtonGroupSize.Lg }, [button({ label: 'Left' }), button({ label: 'Middle' }), button({ label: 'Right' })]),
            e({ tag: 'br' }),
            buttonGroup({}, [button({ label: 'Left' }), button({ label: 'Middle' }), button({ label: 'Right' })]),
            e({ tag: 'br' }),
            buttonGroup({ size: ButtonGroupSize.Sm }, [button({ label: 'Left' }), button({ label: 'Middle' }), button({ label: 'Right' })]),
            e({ tag: 'br' }),
            buttonGroup({ size: ButtonGroupSize.Xs }, [button({ label: 'Left' }), button({ label: 'Middle' }), button({ label: 'Right' })])
        ]),
        figure({ style: styles.highlight }, pre({}, code({ style: langJs }, [
            `buttonGroup({ size: ButtonGroupSize.Lg }, ...),`, e({ tag: 'br' }),
            `buttonGroup({}, ...),`, e({ tag: 'br' }),
            `buttonGroup({ size: ButtonGroupSize.Sm }, ...),`, e({ tag: 'br' }),
            `buttonGroup({ size: ButtonGroupSize.Xs }, ...)`
        ])))
    ];
}

function nesting(): b.IBobrilChildren {
    return [
        b.anchor(h2({ attrs: { id: 'btn-groups-nested' } }, 'Nesting')),
        p({}, [
            `Place a `, code({}, 'buttonGroup'), ` within another `, code({}, 'buttonGroup'),
            ` when you want dropdown menus mixed with a series of buttons.`
        ]),
        e({ style: styles.bsExample }, [
            buttonGroup({}, [
                button({ label: '1' }),
                button({ label: '2' }),
                buttonGroup({}, [
                    button({ label: 'Dropdown', dropdown: true }),
                    dropdownMenu({}, [
                        dropdownItem({}, a({ href: 'javascript:void(0)' }, 'Dropdown link')),
                        dropdownItem({}, a({ href: 'javascript:void(0)' }, 'Dropdown link'))
                    ])
                ])
            ])
        ]),
        figure({ style: styles.highlight }, pre({}, code({ style: langJs }, [
            `buttonGroup({}, [`, e({ tag: 'br' }),
            `    button({ label: '1' }),`, e({ tag: 'br' }),
            `    button({ label: '2' }),`, e({ tag: 'br' }),
            `    buttonGroup({}, [`, e({ tag: 'br' }),
            `        button({ label: 'Dropdown', dropdown: true }),`, e({ tag: 'br' }),
            `        dropdownMenu({}, [`, e({ tag: 'br' }),
            `            dropdownItem({}, a({ href: '...' }, 'Dropdown link')),`, e({ tag: 'br' }),
            `            dropdownItem({}, a({ href: '...' }, 'Dropdown link')),`, e({ tag: 'br' }),
            `        ])`, e({ tag: 'br' }),
            `    ])`, e({ tag: 'br' }),
            `])`
        ]))),
        p({}, [
            `You can use a simplified `, code({}, 'dropdown'), ` component with defined`, code({}, 'buttonGroup'),
            ` property directly as well.`
        ]),
        e({ style: styles.bsExample }, [
            buttonGroup({}, [
                button({ label: '1' }),
                button({ label: '2' }),
                dropdown({ buttonGroup: true, button: { label: 'Dropdown'} }, [
                    dropdownMenu({}, [
                        dropdownItem({}, a({ href: 'javascript:void(0)' }, 'Dropdown link')),
                        dropdownItem({}, a({ href: 'javascript:void(0)' }, 'Dropdown link'))
                    ])
                ])
            ])
        ]),
        figure({ style: styles.highlight }, pre({}, code({ style: langJs }, [
            `buttonGroup({}, [`, e({ tag: 'br' }),
            `    button({ label: '1' }),`, e({ tag: 'br' }),
            `    button({ label: '2' }),`, e({ tag: 'br' }),
            `    dropdown({ buttonGroup: true, button: { label: 'Dropdown' } }, [`, e({ tag: 'br' }),
            `        dropdownMenu({}, [`, e({ tag: 'br' }),
            `            dropdownItem({}, a({ href: '...' }, 'Dropdown link')),`, e({ tag: 'br' }),
            `            dropdownItem({}, a({ href: '...' }, 'Dropdown link')),`, e({ tag: 'br' }),
            `        ])`, e({ tag: 'br' }),
            `    ])`, e({ tag: 'br' }),
            `])`
        ])))
    ];
}

function vertical(): b.IBobrilChildren {
    return [
        b.anchor(h2({ attrs: { id: 'btn-groups-vertical' } }, 'Vertical variation')),
        p({}, [
            `Make a set of buttons appear vertically stacked rather than horizontally. `,
            strong({ style: helpers.text.danger }, `Split button dropdowns are not supported here.`)
        ]),
        e({ style: styles.bsExample }, [
            buttonGroup({ vertical: true }, [
                button({ label: 'Button' }),
                button({ label: 'Button' }),
                buttonGroup({}, [
                    button({ label: 'Dropdown', dropdown: true }),
                    dropdownMenu({}, [
                        dropdownItem({}, a({ href: 'javascript:void(0)' }, 'Dropdown link')),
                        dropdownItem({}, a({ href: 'javascript:void(0)' }, 'Dropdown link'))
                    ])
                ]),
                button({ label: 'Button' }),
                button({ label: 'Button' }), ,
                buttonGroup({}, [
                    button({ label: 'Dropdown', dropdown: true }),
                    dropdownMenu({}, [
                        dropdownItem({}, a({ href: 'javascript:void(0)' }, 'Dropdown link')),
                        dropdownItem({}, a({ href: 'javascript:void(0)' }, 'Dropdown link'))
                    ])
                ]),
                ,
                buttonGroup({}, [
                    button({ label: 'Dropdown', dropdown: true }),
                    dropdownMenu({}, [
                        dropdownItem({}, a({ href: 'javascript:void(0)' }, 'Dropdown link')),
                        dropdownItem({}, a({ href: 'javascript:void(0)' }, 'Dropdown link'))
                    ])
                ]),
                buttonGroup({}, [
                    button({ label: 'Dropdown', dropdown: true }),
                    dropdownMenu({}, [
                        dropdownItem({}, a({ href: 'javascript:void(0)' }, 'Dropdown link')),
                        dropdownItem({}, a({ href: 'javascript:void(0)' }, 'Dropdown link'))
                    ])
                ])
            ])
        ]),
        figure({ style: styles.highlight }, pre({}, code({ style: langJs }, [
            `buttonGroup({ vertical: true }, [`, e({ tag: 'br' }),
            `    ...`, e({ tag: 'br' }),
            `])`
        ])))
    ];
}

function justified(): b.IBobrilChildren {
    return [
        b.anchor(h2({ attrs: { id: 'btn-groups-justified' } }, 'Justified button groups')),
        p({}, [
            `Make a group of buttons stretch at equal sizes to span the entire width of its parent. 
            Also works with button dropdowns within the button group.`
        ]),
        e({ style: [styles.bsCallout, styles.bsCalloutDanger], attrs: { id: 'callout-btn-group-justified-dbl-border' } }, [
            h4({}, `Handling borders`),
            p({}, [
                `Due to the specific HTML and CSS used to justify buttons (namely `, code({}, 'display: table-cell'),
                `), the borders between them are doubled. In regular button groups, `, code({}, 'margin-left: -1px'),
                ` is used to stack the borders instead of removing them. However, `, code({}, 'margin'), ` doesn't work with `,
                code({}, 'display: table-cell'),
                `. As a result, depending on your customizations to Bootstrap, you may wish to remove or re-color the borders.`
            ])
        ]),
        e({ style: [styles.bsCallout, styles.bsCalloutDanger], attrs: { id: 'callout-btn-group-ie8-border' } }, [
            h4({}, `IE8 and borders`),
            p({}, [
                `Internet Explorer 8 doesn't render borders on buttons in a justified button group, whether it's on `, code({}, '<a>'),
                ` or `, code({}, '<button>'), ` elements. To get around that, wrap each button in another .btn-group.`
            ]),
            p({}, [
                `See #12476 for more information.`
            ])
        ]),
        h4({}, ['With ', code({}, '<a>'), ' elements']),
        p({}, [`Just wrap a series of `, code({}, 'button'), `s in `, code({}, 'buttonGroup({ justified: true }, ...)'), `.`]),

        e({ style: styles.bsExample }, [
            buttonGroup({ justified: true, aria: { label: 'Justified button group' } }, [
                button({ tag: ButtonTag.A, label: 'Left' }),
                button({ tag: ButtonTag.A, label: 'Middle' }),
                button({ tag: ButtonTag.A, label: 'Right' })
            ]),
            e({ tag: 'br' }),
            buttonGroup({ justified: true, aria: { label: 'Justified button group with nested dropdown' } }, [
                button({ tag: ButtonTag.A, label: 'Left' }),
                button({ tag: ButtonTag.A, label: 'Middle' }),
                buttonGroup({}, [
                    button({ tag: ButtonTag.A, label: 'Dropdown', dropdown: true }),
                    dropdownMenu({}, [
                        dropdownItem({}, a({ href: 'javascript:void(0)' }, 'Action')),
                        dropdownItem({}, a({ href: 'javascript:void(0)' }, 'Another action')),
                        dropdownItem({}, a({ href: 'javascript:void(0)' }, 'Something else here')),
                        dropdownItem({ header: true }, 'Dropdown header'),
                        dropdownItem({}, a({ href: 'javascript:void(0)' }, 'Separated link'))
                    ])
                ])
            ])
        ]),
        figure({ style: styles.highlight }, pre({}, code({ style: langJs }, [
            `buttonGroup({ justified: true }, [`, e({ tag: 'br' }),
            `    ...`, e({ tag: 'br' }),
            `])`
        ]))),
        h4({}, ['With ', code({}, '<button>'), ' elements']),
        p({}, [
            `To use justified button groups with `, code({}, '<button>'), ` elements, `,
            strong({ style: helpers.text.danger }, [`you must wrap each button in a `, code({}, 'buttonGroup')]),
            `. Most browsers don't properly apply our CSS for justification to `, code({}, '<button>'),
            ` elements, but since we support button dropdowns, we can work around that.`
        ]),

        e({ style: styles.bsExample }, [
            buttonGroup({ justified: true, aria: { label: 'Justified button group' } }, [
                buttonGroup({}, button({ label: 'Left' })),
                buttonGroup({}, button({ label: 'Middle' })),
                buttonGroup({}, button({ label: 'Right' }))
            ])
        ]),
        figure({ style: styles.highlight }, pre({}, code({ style: langJs }, [
            `buttonGroup({ justified: true }, [`, e({ tag: 'br' }),
            `    buttonGroup({}, button({ label: 'Left' })),`, e({ tag: 'br' }),
            `    buttonGroup({}, button({ label: 'Middle' })),`, e({ tag: 'br' }),
            `    buttonGroup({}, button({ label: 'Right' }))`, e({ tag: 'br' }),
            `])`
        ])))
    ];
}
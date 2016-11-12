import * as b from 'bobril';
import * as bs from '../../index';
import { styles } from '../bsexample/css';
import { pre, langJs } from '../prettify/pre';
import { section } from '../common/section';

export const buttonGroups = b.createVirtualComponent({
    render(_ctx: b.IBobrilCtx, me: b.IBobrilNode) {
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
        bs.e({ style: [styles.bsCallout, styles.bsCalloutDanger], attrs: { id: 'callout-btn-group-accessibility' } }, [
            bs.h4({}, `Provide a label`),
            bs.p({}, [
                `In addition, groups and toolbars should be given an explicit label, as most assistive technologies will otherwise not 
                announce them, despite the presence of the correct role attribute. In the examples provided here, we use `,
                bs.code({}, 'aria.label'), `, but alternatives such as `, bs.code({}, 'aria.labelledby'), ` can also be used.`
            ])
        ])
    ];
}

function example(): b.IBobrilChildren {
    return [
        b.anchor(bs.h2({ attrs: { id: 'btn-groups-single' } }, 'Basic example')),
        bs.p({}, [
            `Wrap a series of `, bs.code({}, 'bs.button'), `s in `, bs.code({}, 'bs.buttonGroup'), `.`
        ]),
        bs.e({ style: styles.bsExample }, [
            bs.buttonGroup({}, [
                bs.button({ label: 'Left' }),
                bs.button({ label: 'Middle' }),
                bs.button({ label: 'Right' })
            ])
        ]),
        bs.figure({ style: styles.highlight }, pre({}, bs.code({ style: langJs }, [
            `bs.buttonGroup({}, [`, bs.e({ tag: 'br' }),
            `   bs.button({ label: 'Left' }),`, bs.e({ tag: 'br' }),
            `   bs.button({ label: 'Middle' }),`, bs.e({ tag: 'br' }),
            `   bs.button({ label: 'Right' })`, bs.e({ tag: 'br' }),
            `])`
        ])))
    ];
}

function toolbar(): b.IBobrilChildren {
    return [
        b.anchor(bs.h2({ attrs: { id: 'btn-groups-toolbar' } }, 'Button toolbar')),
        bs.p({}, [
            `Combine sets of `, bs.code({}, 'bs.buttonGroup'), ` into a `, bs.code({}, 'bs.buttonToolbar'), ` for more complex components..`
        ]),
        bs.e({ style: styles.bsExample }, [
            bs.buttonToolbar({}, [
                bs.buttonGroup({}, [
                    bs.button({ label: '1' }), bs.button({ label: '2' }), bs.button({ label: '3' }), bs.button({ label: '4' })]),
                bs.buttonGroup({}, [bs.button({ label: '5' }), bs.button({ label: '6' }), bs.button({ label: '7' })]),
                bs.buttonGroup({}, [bs.button({ label: '8' })])
            ])
        ]),
        bs.figure({ style: styles.highlight }, pre({}, bs.code({ style: langJs }, [
            `bs.buttonToolbar({}, [`, bs.e({ tag: 'br' }),
            `    bs.buttonGroup({}, ...),`, bs.e({ tag: 'br' }),
            `    bs.buttonGroup({}, ...),`, bs.e({ tag: 'br' }),
            `    bs.buttonGroup({}, ...)`, bs.e({ tag: 'br' }),
            `])`
        ])))
    ];
}

function sizing(): b.IBobrilChildren {
    return [
        b.anchor(bs.h2({ attrs: { id: 'btn-groups-sizing' } }, 'Sizing')),
        bs.p({}, [
            `Instead of applying button sizing classes to every `, bs.code({}, 'bs.button'), ` in a group, just set `,
            bs.code({}, 'size'), ` input data property on each `, bs.code({}, 'bs.buttonGroup'),
            `, including when nesting multiple groups.`
        ]),
        bs.e({ style: styles.bsExample }, [
            bs.buttonGroup({ size: bs.ButtonGroupSize.Lg }, [
                bs.button({ label: 'Left' }), bs.button({ label: 'Middle' }), bs.button({ label: 'Right' })]),
            bs.e({ tag: 'br' }),
            bs.buttonGroup({}, [
                bs.button({ label: 'Left' }), bs.button({ label: 'Middle' }), bs.button({ label: 'Right' })]),
            bs.e({ tag: 'br' }),
            bs.buttonGroup({ size: bs.ButtonGroupSize.Sm }, [
                bs.button({ label: 'Left' }), bs.button({ label: 'Middle' }), bs.button({ label: 'Right' })]),
            bs.e({ tag: 'br' }),
            bs.buttonGroup({ size: bs.ButtonGroupSize.Xs }, [
                bs.button({ label: 'Left' }), bs.button({ label: 'Middle' }), bs.button({ label: 'Right' })])
        ]),
        bs.figure({ style: styles.highlight }, pre({}, bs.code({ style: langJs }, [
            `bs.buttonGroup({ size: bs.ButtonGroupSize.Lg }, ...),`, bs.e({ tag: 'br' }),
            `bs.buttonGroup({}, ...),`, bs.e({ tag: 'br' }),
            `bs.buttonGroup({ size: bs.ButtonGroupSize.Sm }, ...),`, bs.e({ tag: 'br' }),
            `bs.buttonGroup({ size: bs.ButtonGroupSize.Xs }, ...)`
        ])))
    ];
}

function nesting(): b.IBobrilChildren {
    return [
        b.anchor(bs.h2({ attrs: { id: 'btn-groups-nested' } }, 'Nesting')),
        bs.p({}, [
            `Place a `, bs.code({}, 'bs.buttonGroup'), ` within another `, bs.code({}, 'bs.buttonGroup'),
            ` when you want dropdown menus mixed with a series of buttons.`
        ]),
        bs.e({ style: styles.bsExample }, [
            bs.buttonGroup({}, [
                bs.button({ label: '1' }),
                bs.button({ label: '2' }),
                bs.buttonGroup({}, [
                    bs.button({ label: 'Dropdown', variant: bs.ButtonVariant.Dropdown }),
                    bs.dropdownMenu({}, [
                        bs.dropdownItem({}, bs.a({ href: 'javascript:void(0)' }, 'Dropdown link')),
                        bs.dropdownItem({}, bs.a({ href: 'javascript:void(0)' }, 'Dropdown link'))
                    ])
                ])
            ])
        ]),
        bs.figure({ style: styles.highlight }, pre({}, bs.code({ style: langJs }, [
            `bs.buttonGroup({}, [`, bs.e({ tag: 'br' }),
            `    bs.button({ label: '1' }),`, bs.e({ tag: 'br' }),
            `    bs.button({ label: '2' }),`, bs.e({ tag: 'br' }),
            `    bs.buttonGroup({}, [`, bs.e({ tag: 'br' }),
            `        bs.button({ label: 'Dropdown', variant: bs.ButtonVariant.Dropdown }),`, bs.e({ tag: 'br' }),
            `        bs.dropdownMenu({}, [`, bs.e({ tag: 'br' }),
            `            bs.dropdownItem({}, bs.a({ href: '...' }, 'Dropdown link')),`, bs.e({ tag: 'br' }),
            `            bs.dropdownItem({}, bs.a({ href: '...' }, 'Dropdown link')),`, bs.e({ tag: 'br' }),
            `        ])`, bs.e({ tag: 'br' }),
            `    ])`, bs.e({ tag: 'br' }),
            `])`
        ]))),
        bs.p({}, [
            `You can use a simplified `, bs.code({}, 'bs.dropdown'), ` component with defined`, bs.code({}, 'bs.buttonGroup'),
            ` property directly as well.`
        ]),
        bs.e({ style: styles.bsExample }, [
            bs.buttonGroup({}, [
                bs.button({ label: '1' }),
                bs.button({ label: '2' }),
                bs.dropdown({ buttonGroup: true, button: { label: 'Dropdown' } }, [
                    bs.dropdownMenu({}, [
                        bs.dropdownItem({}, bs.a({ href: 'javascript:void(0)' }, 'Dropdown link')),
                        bs.dropdownItem({}, bs.a({ href: 'javascript:void(0)' }, 'Dropdown link'))
                    ])
                ])
            ])
        ]),
        bs.figure({ style: styles.highlight }, pre({}, bs.code({ style: langJs }, [
            `bs.buttonGroup({}, [`, bs.e({ tag: 'br' }),
            `    bs.button({ label: '1' }),`, bs.e({ tag: 'br' }),
            `    bs.button({ label: '2' }),`, bs.e({ tag: 'br' }),
            `    bs.dropdown({ buttonGroup: true, button: { label: 'Dropdown' } }, [`, bs.e({ tag: 'br' }),
            `        bs.dropdownMenu({}, [`, bs.e({ tag: 'br' }),
            `            bs.dropdownItem({}, bs.a({ href: '...' }, 'Dropdown link')),`, bs.e({ tag: 'br' }),
            `            bs.dropdownItem({}, bs.a({ href: '...' }, 'Dropdown link')),`, bs.e({ tag: 'br' }),
            `        ])`, bs.e({ tag: 'br' }),
            `    ])`, bs.e({ tag: 'br' }),
            `])`
        ])))
    ];
}

function vertical(): b.IBobrilChildren {
    return [
        b.anchor(bs.h2({ attrs: { id: 'btn-groups-vertical' } }, 'Vertical variation')),
        bs.p({}, [
            `Make a set of buttons appear vertically stacked rather than horizontally. `,
            bs.strong({ style: bs.helpers.text.danger }, `Split button dropdowns are not supported here.`)
        ]),
        bs.e({ style: styles.bsExample }, [
            bs.buttonGroup({ vertical: true }, [
                bs.button({ label: 'Button' }),
                bs.button({ label: 'Button' }),
                bs.buttonGroup({}, [
                    bs.button({ label: 'Dropdown', variant: bs.ButtonVariant.Dropdown }),
                    bs.dropdownMenu({}, [
                        bs.dropdownItem({}, bs.a({ href: 'javascript:void(0)' }, 'Dropdown link')),
                        bs.dropdownItem({}, bs.a({ href: 'javascript:void(0)' }, 'Dropdown link'))
                    ])
                ]),
                bs.button({ label: 'Button' }),
                bs.button({ label: 'Button' }), ,
                bs.buttonGroup({}, [
                    bs.button({ label: 'Dropdown', variant: bs.ButtonVariant.Dropdown }),
                    bs.dropdownMenu({}, [
                        bs.dropdownItem({}, bs.a({ href: 'javascript:void(0)' }, 'Dropdown link')),
                        bs.dropdownItem({}, bs.a({ href: 'javascript:void(0)' }, 'Dropdown link'))
                    ])
                ]),
                ,
                bs.buttonGroup({}, [
                    bs.button({ label: 'Dropdown', variant: bs.ButtonVariant.Dropdown }),
                    bs.dropdownMenu({}, [
                        bs.dropdownItem({}, bs.a({ href: 'javascript:void(0)' }, 'Dropdown link')),
                        bs.dropdownItem({}, bs.a({ href: 'javascript:void(0)' }, 'Dropdown link'))
                    ])
                ]),
                bs.buttonGroup({}, [
                    bs.button({ label: 'Dropdown', variant: bs.ButtonVariant.Dropdown }),
                    bs.dropdownMenu({}, [
                        bs.dropdownItem({}, bs.a({ href: 'javascript:void(0)' }, 'Dropdown link')),
                        bs.dropdownItem({}, bs.a({ href: 'javascript:void(0)' }, 'Dropdown link'))
                    ])
                ])
            ])
        ]),
        bs.figure({ style: styles.highlight }, pre({}, bs.code({ style: langJs }, [
            `bs.buttonGroup({ vertical: true }, [`, bs.e({ tag: 'br' }),
            `    ...`, bs.e({ tag: 'br' }),
            `])`
        ])))
    ];
}

function justified(): b.IBobrilChildren {
    return [
        b.anchor(bs.h2({ attrs: { id: 'btn-groups-justified' } }, 'Justified button groups')),
        bs.p({}, [
            `Make a group of buttons stretch at equal sizes to span the entire width of its parent. 
            Also works with button dropdowns within the button group.`
        ]),
        bs.e({ style: [styles.bsCallout, styles.bsCalloutDanger], attrs: { id: 'callout-btn-group-justified-dbl-border' } }, [
            bs.h4({}, `Handling borders`),
            bs.p({}, [
                `Due to the specific HTML and CSS used to justify buttons (namely `, bs.code({}, 'display: table-cell'),
                `), the borders between them are doubled. In regular button groups, `, bs.code({}, 'margin-left: -1px'),
                ` is used to stack the borders instead of removing them. However, `, bs.code({}, 'margin'), ` doesn't work with `,
                bs.code({}, 'display: table-cell'),
                `. As a result, depending on your customizations to Bootstrap, you may wish to remove or re-color the borders.`
            ])
        ]),
        bs.e({ style: [styles.bsCallout, styles.bsCalloutDanger], attrs: { id: 'callout-btn-group-ie8-border' } }, [
            bs.h4({}, `IE8 and borders`),
            bs.p({}, [
                `Internet Explorer 8 doesn't render borders on buttons in a justified button group, whether it's on `, bs.code({}, '<a>'),
                ` or `, bs.code({}, '<button>'), ` elements. To get around that, wrap each button in another .btn-group.`
            ]),
            bs.p({}, [
                `See #12476 for more information.`
            ])
        ]),
        bs.h4({}, ['With ', bs.code({}, '<a>'), ' elements']),
        bs.p({}, [
            `Just wrap a series of `, bs.code({}, 'bs.button'), `s in `, bs.code({}, 'bs.buttonGroup({ justified: true }, ...)'), `.`
        ]),
        bs.e({ style: styles.bsExample }, [
            bs.buttonGroup({ justified: true, aria: { label: 'Justified button group' } }, [
                bs.button({ tag: bs.ButtonTag.A, label: 'Left' }),
                bs.button({ tag: bs.ButtonTag.A, label: 'Middle' }),
                bs.button({ tag: bs.ButtonTag.A, label: 'Right' })
            ]),
            bs.e({ tag: 'br' }),
            bs.buttonGroup({ justified: true, aria: { label: 'Justified button group with nested dropdown' } }, [
                bs.button({ tag: bs.ButtonTag.A, label: 'Left' }),
                bs.button({ tag: bs.ButtonTag.A, label: 'Middle' }),
                bs.buttonGroup({}, [
                    bs.button({ tag: bs.ButtonTag.A, label: 'Dropdown', variant: bs.ButtonVariant.Dropdown }),
                    bs.dropdownMenu({}, [
                        bs.dropdownItem({}, bs.a({ href: 'javascript:void(0)' }, 'Action')),
                        bs.dropdownItem({}, bs.a({ href: 'javascript:void(0)' }, 'Another action')),
                        bs.dropdownItem({}, bs.a({ href: 'javascript:void(0)' }, 'Something else here')),
                        bs.dropdownItem({ header: true }, 'Dropdown header'),
                        bs.dropdownItem({}, bs.a({ href: 'javascript:void(0)' }, 'Separated link'))
                    ])
                ])
            ])
        ]),
        bs.figure({ style: styles.highlight }, pre({}, bs.code({ style: langJs }, [
            `bs.buttonGroup({ justified: true }, [`, bs.e({ tag: 'br' }),
            `    ...`, bs.e({ tag: 'br' }),
            `])`
        ]))),
        bs.h4({}, ['With ', bs.code({}, '<button>'), ' elements']),
        bs.p({}, [
            `To use justified button groups with `, bs.code({}, '<button>'), ` elements, `,
            bs.strong({ style: bs.helpers.text.danger }, [`you must wrap each button in a `, bs.code({}, 'bs.buttonGroup')]),
            `. Most browsers don't properly apply our CSS for justification to `, bs.code({}, '<button>'),
            ` elements, but since we support button dropdowns, we can work around that.`
        ]),

        bs.e({ style: styles.bsExample }, [
            bs.buttonGroup({ justified: true, aria: { label: 'Justified button group' } }, [
                bs.buttonGroup({}, bs.button({ label: 'Left' })),
                bs.buttonGroup({}, bs.button({ label: 'Middle' })),
                bs.buttonGroup({}, bs.button({ label: 'Right' }))
            ])
        ]),
        bs.figure({ style: styles.highlight }, pre({}, bs.code({ style: langJs }, [
            `bs.buttonGroup({ justified: true }, [`, bs.e({ tag: 'br' }),
            `    bs.buttonGroup({}, bs.button({ label: 'Left' })),`, bs.e({ tag: 'br' }),
            `    bs.buttonGroup({}, bs.button({ label: 'Middle' })),`, bs.e({ tag: 'br' }),
            `    bs.buttonGroup({}, bs.button({ label: 'Right' }))`, bs.e({ tag: 'br' }),
            `])`
        ])))
    ];
}
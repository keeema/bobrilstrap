import * as b from 'bobril';
import { a, e, p, h2, h3, h4, code, figure, button, buttonGroup, ButtonGroupSize, helpers, buttonToolbar, dropdownMenu,
    dropdownItem } from '../../index';
import { styles } from '../bsexample/css';
import pre, { langJs } from '../prettify/pre';
import section from '../common/section';

export default b.createVirtualComponent({
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
                nesting()
            ]);
    }
})

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
        h2({ attrs: { id: 'btn-groups-single' } }, 'Basic example'),
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
        h2({ attrs: { id: 'btn-groups-toolbar' } }, 'Button toolbar'),
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
        h2({ attrs: { id: 'btn-groups-sizing' } }, 'Sizing'),
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
        h2({ attrs: { id: 'btn-groups-nested' } }, 'Nested'),
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
        ])))
    ];
}
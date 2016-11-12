import * as b from 'bobril';
import * as bs from '../../index';
import { styles } from '../bsexample/css';
import { pre, langJs } from '../prettify/pre';
import { section } from '../common/section';

export const navs = b.createVirtualComponent({
    render(_ctx: b.IBobrilCtx, me: b.IBobrilNode) {
        me.children = section(
            {
                header: 'Navs',
                id: 'nav',
                lead: []
            },
            [
                info(),
                tabsExample(),
                pillsExample(),
                justified(),
                disabled(),
                dropdowns()
            ]);
    }
});

function info(): b.IBobrilChildren {
    return [
        bs.e({ style: [styles.bsCallout, styles.bsCalloutDanger], attrs: { id: 'callout-navs-accessibility' } }, [
            bs.h4({}, [`Make navs used as navigation accessible`]),
            bs.p({}, [
                `If you are using navs to provide a navigation bar, be sure to add a `, bs.code({}, `attrs: { role: 'navigation' }`),
                ` to the most logical parent container of the `, bs.code({}, 'bs.ul'), ` (or `, bs.code({}, 'bs.tab'),
                ` etc.) or wrap a `, bs.code({}, 'bs.nav'), ` component around the whole navigation. Do not add the role to the `,
                bs.code({}, 'bs.ul'), ` itself, as this would prevent it from being announced as an actual list by assistive technologies.`
            ])
        ])
    ];
}

function tabsExample(): b.IBobrilChildren {
    return [
        b.anchor(bs.h2({ attrs: { id: 'nav-tabs' } }, 'Tabs')),
        bs.e({ style: styles.bsExample }, [
            bs.tabs({}, [
                bs.tab({ active: true }, bs.a({ href: 'javascript:void(0)' }, 'Home')),
                bs.tab({}, bs.a({ href: 'javascript:void(0)' }, 'Profile')),
                bs.tab({}, bs.a({ href: 'javascript:void(0)' }, 'Messages'))
            ])
        ]),
        bs.figure({ style: styles.highlight }, pre({}, bs.code({ style: langJs }, [
            `bs.tabs({}, [`, bs.e({ tag: 'br' }),
            `    bs.tab({ active: true }, bs.a({ href: '...' }, 'Home')),`, bs.e({ tag: 'br' }),
            `    bs.tab({}, bs.a({ href: '...' }, 'Profile')),`, bs.e({ tag: 'br' }),
            `    bs.tab({}, bs.a({ href: '...' }, 'Messages'))`, bs.e({ tag: 'br' }),
            `])`
        ])))
    ];
}

const navPillsStackedExample = b.styleDef('nav-pills-stacked-example');

function pillsExample(): b.IBobrilChildren {
    return [
        b.anchor(bs.h2({ attrs: { id: 'nav-pills' } }, 'Pills')),
        bs.e({ style: styles.bsExample }, [
            bs.pills({}, [
                bs.pill({ active: true }, bs.a({ href: 'javascript:void(0)' }, 'Home')),
                bs.pill({}, bs.a({ href: 'javascript:void(0)' }, 'Profile')),
                bs.pill({}, bs.a({ href: 'javascript:void(0)' }, 'Messages'))
            ])
        ]),
        bs.figure({ style: styles.highlight }, pre({}, bs.code({ style: langJs }, [
            `bs.pills({}, [`, bs.e({ tag: 'br' }),
            `    bs.pill({ active: true }, bs.a({ href: '...' }, 'Home')),`, bs.e({ tag: 'br' }),
            `    bs.pill({}, bs.a({ href: '...' }, 'Profile')),`, bs.e({ tag: 'br' }),
            `    bs.pill({}, bs.a({ href: '...' }, 'Messages'))`, bs.e({ tag: 'br' }),
            `])`
        ]))),
        bs.p({}, [
            `Pills are also vertically stackable. Just set `, bs.code({}, 'stacked: true'), `.`
        ]),
        bs.e({ style: styles.bsExample }, [
            bs.pills({ stacked: true, style: navPillsStackedExample }, [
                bs.pill({ active: true }, bs.a({ href: 'javascript:void(0)' }, 'Home')),
                bs.pill({}, bs.a({ href: 'javascript:void(0)' }, 'Profile')),
                bs.pill({}, bs.a({ href: 'javascript:void(0)' }, 'Messages'))
            ])
        ]),
        bs.figure({ style: styles.highlight }, pre({}, bs.code({ style: langJs }, [
            `bs.pills({ stacked: true }, [`, bs.e({ tag: 'br' }),
            `    bs.pill({ active: true }, bs.a({ href: '...' }, 'Home')),`, bs.e({ tag: 'br' }),
            `    bs.pill({}, bs.a({ href: '...' }, 'Profile')),`, bs.e({ tag: 'br' }),
            `    bs.pill({}, bs.a({ href: '...' }, 'Messages'))`, bs.e({ tag: 'br' }),
            `])`
        ])))
    ];
}

function justified(): b.IBobrilChildren {
    return [
        b.anchor(bs.h2({ attrs: { id: 'nav-justified' } }, 'Justified')),
        bs.p({}, [
            `Easily make tabs or pills equal widths of their parent at screens wider than 768px with `,
            bs.code({}, 'justified: true'), `. On smaller screens, the nav links are stacked.`
        ]),
        bs.p({}, bs.strong({ style: bs.helpers.text.danger }, 'Justified navbar nav links are currently not supported.')),
        bs.e({ style: [styles.bsCallout, styles.bsCalloutDanger], attrs: { id: 'callout-navs-justified-safari' } }, [
            bs.h4({}, [`Make navs used as navigation accessible`]),
            bs.p({}, [
                `As of v9.1.2, Safari exhibits a bug in which resizing your browser horizontally causes rendering 
                errors in the justified nav that are cleared upon refreshing. `
            ])
        ]),
        bs.e({ style: styles.bsExample }, [
            bs.tabs({ justified: true }, [
                bs.tab({ active: true }, bs.a({ href: 'javascript:void(0)' }, 'Home')),
                bs.tab({}, bs.a({ href: 'javascript:void(0)' }, 'Profile')),
                bs.tab({}, bs.a({ href: 'javascript:void(0)' }, 'Messages'))
            ]),
            bs.e({ tag: 'br' }),
            bs.pills({ justified: true }, [
                bs.pill({ active: true }, bs.a({ href: 'javascript:void(0)' }, 'Home')),
                bs.pill({}, bs.a({ href: 'javascript:void(0)' }, 'Profile')),
                bs.pill({}, bs.a({ href: 'javascript:void(0)' }, 'Messages'))
            ])
        ]),
        bs.figure({ style: styles.highlight }, pre({}, bs.code({ style: langJs }, [
            `bs.tabs({ justified: true }, [`, bs.e({ tag: 'br' }),
            `    ...`, bs.e({ tag: 'br' }),
            `])`, bs.e({ tag: 'br' }),
            ``, bs.e({ tag: 'br' }),
            `bs.pills({ justified: true }, [`, bs.e({ tag: 'br' }),
            `    ...`, bs.e({ tag: 'br' }),
            `])`
        ])))
    ];
}

function disabled(): b.IBobrilChildren {
    return [
        b.anchor(bs.h2({ attrs: { id: 'nav-disabled-links' } }, 'Disabled links')),
        bs.p({}, [
            `For any nav component (tab or pill), set `, bs.code({}, 'disabled: true'), ` for gray links and no hover effects.`
        ]),
        bs.e({ style: [styles.bsCallout, styles.bsCalloutDanger], attrs: { id: 'callout-navs-anchor-disabled' } }, [
            bs.h4({}, [`Link functionality not impacted`]),
            bs.p({}, [
                `This class will only change the `, bs.code({}, '<a>'),
                `'s appearance, not its functionality. Use custom JavaScript to disable links here.`
            ])
        ]),
        bs.e({ style: styles.bsExample }, [
            bs.pills({}, [
                bs.pill({}, bs.a({ href: 'javascript:void(0)' }, 'Clickable link')),
                bs.pill({}, bs.a({ href: 'javascript:void(0)' }, 'Clickable link')),
                bs.pill({ disabled: true }, bs.a({ href: 'javascript:void(0)' }, 'Disabled link'))
            ])
        ]),
        bs.figure({ style: styles.highlight }, pre({}, bs.code({ style: langJs }, [
            `bs.pills({}, [`, bs.e({ tag: 'br' }),
            `    ...`, bs.e({ tag: 'br' }),
            `    bs.pill({ disabled: true }, bs.a({ href: '...' }, 'Disabled link')),`, bs.e({ tag: 'br' }),
            `    ...`, bs.e({ tag: 'br' }),
            `])`
        ])))
    ];
}

function dropdowns(): b.IBobrilChildren {
    return [
        b.anchor(bs.h2({ attrs: { id: 'nav-dropdowns' } }, 'Using dropdowns')),
        bs.p({}, [
            `As in previous cases - you can use the prepared helper `, bs.code({}, 'bs.dropdown'),
            ` or compose from specific components.`
        ]),
        bs.h3({ attrs: { id: 'tabs-with-dropdowns' } }, 'Tabs with dropdowns'),
        bs.e({ style: styles.bsExample }, [
            bs.tabs({}, [
                bs.tab({ active: true }, bs.a({ href: 'javascript:void(0)' }, 'Home')),
                bs.tab({}, bs.a({ href: 'javascript:void(0)' }, 'Help')),
                bs.dropdown(
                    { button: { label: 'Dropdown', variant: bs.ButtonVariant.DropdownNav } },
                    bs.dropdownMenu({}, [
                        bs.dropdownItem({}, bs.a({ href: 'javascript:void(0)' }, 'Action')),
                        bs.dropdownItem({}, bs.a({ href: 'javascript:void(0)' }, 'Another action')),
                        bs.dropdownItem({}, bs.a({ href: 'javascript:void(0)' }, 'Something else here')),
                        bs.dropdownItem({ separator: true }),
                        bs.dropdownItem({}, bs.a({ href: 'javascript:void(0)' }, 'Separated link'))
                    ])
                )
            ])
        ]),
        bs.figure({ style: styles.highlight }, pre({}, bs.code({ style: langJs }, [
            `bs.tabs({}, [`, bs.e({ tag: 'br' }),
            `    bs.tab({ active: true }, bs.a({ href: '...' }, 'Home'))`, bs.e({ tag: 'br' }),
            `    bs.tab({}, bs.a({ href: '...' }, 'Help'))`, bs.e({ tag: 'br' }),
            `    bs.dropdown(`, bs.e({ tag: 'br' }),
            `        { button: { label: 'Dropdown', variant: bs.ButtonVariant.DropdownNav } },`, bs.e({ tag: 'br' }),
            `        bs.dropdownMenu({}, [`, bs.e({ tag: 'br' }),
            `            bs.dropdownItem({}, bs.a({ href: '...' }, 'Action')),`, bs.e({ tag: 'br' }),
            `            bs.dropdownItem({}, bs.a({ href: '...' }, 'Another action')),`, bs.e({ tag: 'br' }),
            `            bs.dropdownItem({}, bs.a({ href: '...' }, 'Something else here')),`, bs.e({ tag: 'br' }),
            `            bs.dropdownItem({ separator: true }),`, bs.e({ tag: 'br' }),
            `            bs.dropdownItem({}, bs.a({ href: '...' }, 'Separated link'))`, bs.e({ tag: 'br' }),
            `        ])`, bs.e({ tag: 'br' }),
            `    )`, bs.e({ tag: 'br' }),
            `])`
        ]))),
        bs.h3({ attrs: { id: 'pills-with-dropdowns' } }, 'Pills with dropdowns'),
        bs.e({ style: styles.bsExample }, [
            bs.pills({}, [
                bs.pill({ active: true }, bs.a({ href: 'javascript:void(0)' }, 'Home')),
                bs.pill({}, bs.a({ href: 'javascript:void(0)' }, 'Help')),
                bs.dropdown(
                    { button: { label: 'Dropdown', variant: bs.ButtonVariant.DropdownNav } },
                    bs.dropdownMenu({}, [
                        bs.dropdownItem({}, bs.a({ href: 'javascript:void(0)' }, 'Action')),
                        bs.dropdownItem({}, bs.a({ href: 'javascript:void(0)' }, 'Another action')),
                        bs.dropdownItem({}, bs.a({ href: 'javascript:void(0)' }, 'Something else here')),
                        bs.dropdownItem({ separator: true }),
                        bs.dropdownItem({}, bs.a({ href: 'javascript:void(0)' }, 'Separated link'))
                    ])
                )
            ])
        ]),
        bs.figure({ style: styles.highlight }, pre({}, bs.code({ style: langJs }, [
            `bs.pills({}, [`, bs.e({ tag: 'br' }),
            `    bs.pill({active: true }, bs.a({ href: '...' }, 'Home'))`, bs.e({ tag: 'br' }),
            `    bs.pill({}, bs.a({ href: '...' }, 'Help'))`, bs.e({ tag: 'br' }),
            `    bs.dropdown(`, bs.e({ tag: 'br' }),
            `        { button: { label: 'Dropdown', variant: bs.ButtonVariant.DropdownNav } },`, bs.e({ tag: 'br' }),
            `        bs.dropdownMenu({}, [`, bs.e({ tag: 'br' }),
            `            bs.dropdownItem({}, bs.a({ href: '...' }, 'Action')),`, bs.e({ tag: 'br' }),
            `            bs.dropdownItem({}, bs.a({ href: '...' }, 'Another action')),`, bs.e({ tag: 'br' }),
            `            bs.dropdownItem({}, bs.a({ href: '...' }, 'Something else here')),`, bs.e({ tag: 'br' }),
            `            bs.dropdownItem({ separator: true }),`, bs.e({ tag: 'br' }),
            `            bs.dropdownItem({}, bs.a({ href: '...' }, 'Separated link'))`, bs.e({ tag: 'br' }),
            `        ])`, bs.e({ tag: 'br' }),
            `    )`, bs.e({ tag: 'br' }),
            `])`
        ])))
    ];
}
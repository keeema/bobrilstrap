import * as b from 'bobril';
import { a, e, p, h2, h3, h4, code, figure, helpers, strong, tab, tabs, pill, pills,
    dropdown, dropdownMenu, dropdownItem } from '../../index';
import { styles } from '../bsexample/css';
import { pre, langJs } from '../prettify/pre';
import { section } from '../common/section';

export const navs = b.createVirtualComponent({
    render(ctx: b.IBobrilCtx, me: b.IBobrilNode) {
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
        e({ style: [styles.bsCallout, styles.bsCalloutDanger], attrs: { id: 'callout-navs-accessibility' } }, [
            h4({}, [`Make navs used as navigation accessible`]),
            p({}, [
                `If you are using navs to provide a navigation bar, be sure to add a `, code({}, `attrs: { role: 'navigation' }`),
                ` to the most logical parent container of the `, code({}, 'ul'), ` (or `, code({}, 'tab'),
                ` etc.) or wrap a `, code({}, 'nav'), ` component around the whole navigation. Do not add the role to the `,
                code({}, 'ul'), ` itself, as this would prevent it from being announced as an actual list by assistive technologies.`
            ])
        ])
    ];
}

function tabsExample(): b.IBobrilChildren {
    return [
        h2({ attrs: { id: 'nav-tabs' } }, 'Tabs'),
        e({ style: styles.bsExample }, [
            tabs({}, [
                tab({ active: true }, a({ href: 'javascript:void(0)' }, 'Home')),
                tab({}, a({ href: 'javascript:void(0)' }, 'Profile')),
                tab({}, a({ href: 'javascript:void(0)' }, 'Messages'))
            ])
        ]),
        figure({ style: styles.highlight }, pre({}, code({ style: langJs }, [
            `tabs({}, [`, e({ tag: 'br' }),
            `    tab({ active: true }, a({ href: '...' }, 'Home')),`, e({ tag: 'br' }),
            `    tab({}, a({ href: '...' }, 'Profile')),`, e({ tag: 'br' }),
            `    tab({}, a({ href: '...' }, 'Messages'))`, e({ tag: 'br' }),
            `])`
        ])))
    ];
}

const navPillsStackedExample = b.styleDef('nav-pills-stacked-example');

function pillsExample(): b.IBobrilChildren {
    return [
        h2({ attrs: { id: 'nav-pills' } }, 'Pills'),
        e({ style: styles.bsExample }, [
            pills({}, [
                pill({ active: true }, a({ href: 'javascript:void(0)' }, 'Home')),
                pill({}, a({ href: 'javascript:void(0)' }, 'Profile')),
                pill({}, a({ href: 'javascript:void(0)' }, 'Messages'))
            ])
        ]),
        figure({ style: styles.highlight }, pre({}, code({ style: langJs }, [
            `pills({}, [`, e({ tag: 'br' }),
            `    pill({ active: true }, a({ href: '...' }, 'Home')),`, e({ tag: 'br' }),
            `    pill({}, a({ href: '...' }, 'Profile')),`, e({ tag: 'br' }),
            `    pill({}, a({ href: '...' }, 'Messages'))`, e({ tag: 'br' }),
            `])`
        ]))),
        p({}, [
            `Pills are also vertically stackable. Just set `, code({}, 'stacked: true'), `.`
        ]),
        e({ style: styles.bsExample }, [
            pills({ stacked: true, style: navPillsStackedExample }, [
                pill({ active: true }, a({ href: 'javascript:void(0)' }, 'Home')),
                pill({}, a({ href: 'javascript:void(0)' }, 'Profile')),
                pill({}, a({ href: 'javascript:void(0)' }, 'Messages'))
            ])
        ]),
        figure({ style: styles.highlight }, pre({}, code({ style: langJs }, [
            `pills({ stacked: true }, [`, e({ tag: 'br' }),
            `    pill({ active: true }, a({ href: '...' }, 'Home')),`, e({ tag: 'br' }),
            `    pill({}, a({ href: '...' }, 'Profile')),`, e({ tag: 'br' }),
            `    pill({}, a({ href: '...' }, 'Messages'))`, e({ tag: 'br' }),
            `])`
        ])))
    ];
}

function justified(): b.IBobrilChildren {
    return [
        h2({ attrs: { id: 'nav-justified' } }, 'Justified'),
        p({}, [
            `Easily make tabs or pills equal widths of their parent at screens wider than 768px with `,
            code({}, 'justified: true'), `. On smaller screens, the nav links are stacked.`
        ]),
        p({}, strong({ style: helpers.text.danger }, 'Justified navbar nav links are currently not supported.')),
        e({ style: [styles.bsCallout, styles.bsCalloutDanger], attrs: { id: 'callout-navs-justified-safari' } }, [
            h4({}, [`Make navs used as navigation accessible`]),
            p({}, [
                `As of v9.1.2, Safari exhibits a bug in which resizing your browser horizontally causes rendering 
                errors in the justified nav that are cleared upon refreshing. `
            ])
        ]),
        e({ style: styles.bsExample }, [
            tabs({ justified: true }, [
                tab({ active: true }, a({ href: 'javascript:void(0)' }, 'Home')),
                tab({}, a({ href: 'javascript:void(0)' }, 'Profile')),
                tab({}, a({ href: 'javascript:void(0)' }, 'Messages'))
            ]),
            e({ tag: 'br' }),
            pills({ justified: true }, [
                pill({ active: true }, a({ href: 'javascript:void(0)' }, 'Home')),
                pill({}, a({ href: 'javascript:void(0)' }, 'Profile')),
                pill({}, a({ href: 'javascript:void(0)' }, 'Messages'))
            ])
        ]),
        figure({ style: styles.highlight }, pre({}, code({ style: langJs }, [
            `tabs({ justified: true }, [`, e({ tag: 'br' }),
            `    ...`, e({ tag: 'br' }),
            `])`, e({ tag: 'br' }),
            ``, e({ tag: 'br' }),
            `pills({ justified: true }, [`, e({ tag: 'br' }),
            `    ...`, e({ tag: 'br' }),
            `])`
        ])))
    ];
}

function disabled(): b.IBobrilChildren {
    return [
        h2({ attrs: { id: 'nav-disabled-links' } }, 'Disabled links'),
        p({}, [
            `For any nav component (tab or pill), set `, code({}, 'disabled: true'), ` for gray links and no hover effects.`
        ]),
        e({ style: [styles.bsCallout, styles.bsCalloutDanger], attrs: { id: 'callout-navs-anchor-disabled' } }, [
            h4({}, [`Link functionality not impacted`]),
            p({}, [
                `This class will only change the `, code({}, '<a>'),
                `'s appearance, not its functionality. Use custom JavaScript to disable links here.`
            ])
        ]),
        e({ style: styles.bsExample }, [
            pills({}, [
                pill({}, a({ href: 'javascript:void(0)' }, 'Clickable link')),
                pill({}, a({ href: 'javascript:void(0)' }, 'Clickable link')),
                pill({ disabled: true }, a({ href: 'javascript:void(0)' }, 'Disabled link'))
            ])
        ]),
        figure({ style: styles.highlight }, pre({}, code({ style: langJs }, [
            `pills({}, [`, e({ tag: 'br' }),
            `    ...`, e({ tag: 'br' }),
            `    pill({ disabled: true }, a({ href: '...' }, 'Disabled link')),`, e({ tag: 'br' }),
            `    ...`, e({ tag: 'br' }),
            `])`
        ])))
    ];
}

function dropdowns(): b.IBobrilChildren {
    return [
        h2({ attrs: { id: 'nav-dropdowns' } }, 'Using dropdowns'),
        p({}, [
            `As in previous cases - you can use the prepared helper `, code({}, 'dropdown'),
            ` or compose from specific components.`
        ]),
        h3({ attrs: { id: 'tabs-with-dropdowns' } }, 'Tabs with dropdowns'),
        e({ style: styles.bsExample }, [
            tabs({}, [
                tab({ active: true }, a({ href: 'javascript:void(0)' }, 'Home')),
                tab({}, a({ href: 'javascript:void(0)' }, 'Help')),
                dropdown(
                    { navbar: true, button: { label: 'Dropdown' } },
                    dropdownMenu({}, [
                        dropdownItem({}, a({ href: 'javascript:void(0)' }, 'Action')),
                        dropdownItem({}, a({ href: 'javascript:void(0)' }, 'Another action')),
                        dropdownItem({}, a({ href: 'javascript:void(0)' }, 'Something else here')),
                        dropdownItem({ separator: true }),
                        dropdownItem({}, a({ href: 'javascript:void(0)' }, 'Separated link'))
                    ])
                )
            ])
        ]),
        figure({ style: styles.highlight }, pre({}, code({ style: langJs }, [
            `tabs({}, [`, e({ tag: 'br' }),
            `    tab({ active: true }, a({ href: '...' }, 'Home'))`, e({ tag: 'br' }),
            `    tab({}, a({ href: '...' }, 'Help'))`, e({ tag: 'br' }),
            `    dropdown(`, e({ tag: 'br' }),
            `        { navbar: true, button: { label: 'Dropdown' } },`, e({ tag: 'br' }),
            `        dropdownMenu({}, [`, e({ tag: 'br' }),
            `            dropdownItem({}, a({ href: '...' }, 'Action')),`, e({ tag: 'br' }),
            `            dropdownItem({}, a({ href: '...' }, 'Another action')),`, e({ tag: 'br' }),
            `            dropdownItem({}, a({ href: '...' }, 'Something else here')),`, e({ tag: 'br' }),
            `            dropdownItem({ separator: true }),`, e({ tag: 'br' }),
            `            dropdownItem({}, a({ href: '...' }, 'Separated link'))`, e({ tag: 'br' }),
            `        ])`, e({ tag: 'br' }),
            `    )`, e({ tag: 'br' }),
            `])`
        ]))),
        h3({ attrs: { id: 'pills-with-dropdowns' } }, 'Pills with dropdowns'),
        e({ style: styles.bsExample }, [
            pills({}, [
                pill({ active: true }, a({ href: 'javascript:void(0)' }, 'Home')),
                pill({}, a({ href: 'javascript:void(0)' }, 'Help')),
                dropdown(
                    { navbar: true, button: { label: 'Dropdown' } },
                    dropdownMenu({}, [
                        dropdownItem({}, a({ href: 'javascript:void(0)' }, 'Action')),
                        dropdownItem({}, a({ href: 'javascript:void(0)' }, 'Another action')),
                        dropdownItem({}, a({ href: 'javascript:void(0)' }, 'Something else here')),
                        dropdownItem({ separator: true }),
                        dropdownItem({}, a({ href: 'javascript:void(0)' }, 'Separated link'))
                    ])
                )
            ])
        ]),
        figure({ style: styles.highlight }, pre({}, code({ style: langJs }, [
            `pills({}, [`, e({ tag: 'br' }),
            `    pill({active: true }, a({ href: '...' }, 'Home'))`, e({ tag: 'br' }),
            `    pill({}, a({ href: '...' }, 'Help'))`, e({ tag: 'br' }),
            `    dropdown(`, e({ tag: 'br' }),
            `        { navbar: true, button: { label: 'Dropdown' } },`, e({ tag: 'br' }),
            `        dropdownMenu({}, [`, e({ tag: 'br' }),
            `            dropdownItem({}, a({ href: '...' }, 'Action')),`, e({ tag: 'br' }),
            `            dropdownItem({}, a({ href: '...' }, 'Another action')),`, e({ tag: 'br' }),
            `            dropdownItem({}, a({ href: '...' }, 'Something else here')),`, e({ tag: 'br' }),
            `            dropdownItem({ separator: true }),`, e({ tag: 'br' }),
            `            dropdownItem({}, a({ href: '...' }, 'Separated link'))`, e({ tag: 'br' }),
            `        ])`, e({ tag: 'br' }),
            `    )`, e({ tag: 'br' }),
            `])`
        ])))
    ];
}
import * as b from "bobril";
import * as bs from "../../index";
import { styles } from "../bsexample/css";
import { pre, langJs } from "../prettify/pre";
import { section } from "../common/section";

export const navs = b.createVirtualComponent({
    render(_ctx: b.IBobrilCtx, me: b.IBobrilNode) {
        me.children = section(
            {
                header: "Navs",
                id: "nav",
                lead: []
            },
            [info(), tabsExample(), pillsExample(), justified(), disabled(), dropdowns()]
        );
    }
});

function info(): b.IBobrilChildren {
    return [
        bs.E(
            {
                style: [styles.bsCallout, styles.bsCalloutDanger],
                attrs: { id: "callout-navs-accessibility" }
            },
            [
                bs.H4({}, [`Make navs used as navigation accessible`]),
                bs.P({}, [
                    `If you are using navs to provide a navigation bar, be sure to add a `,
                    bs.Code({}, `attrs: { role: 'navigation' }`),
                    ` to the most logical parent container of the `,
                    bs.Code({}, "bs.Ul"),
                    ` (or `,
                    bs.Code({}, "bs.Tab"),
                    ` etc.) or wrap a `,
                    bs.Code({}, "bs.Nav"),
                    ` component around the whole navigation. Do not add the role to the `,
                    bs.Code({}, "bs.Ul"),
                    ` itself, as this would prevent it from being announced as an actual list by assistive technologies.`
                ])
            ]
        )
    ];
}

function tabsExample(): b.IBobrilChildren {
    return [
        b.anchor(bs.H2({ attrs: { id: "nav-tabs" } }, "Tabs")),
        bs.E({ style: styles.bsExample }, [
            bs.Tabs({}, [
                bs.Tab({ active: true }, bs.A({ href: "javascript:void(0)" }, "Home")),
                bs.Tab({}, bs.A({ href: "javascript:void(0)" }, "Profile")),
                bs.Tab({}, bs.A({ href: "javascript:void(0)" }, "Messages"))
            ])
        ]),
        bs.Figure(
            { style: styles.highlight },
            pre(
                {},
                bs.Code({ style: langJs }, [
                    `bs.Tabs({}, [`,
                    bs.E({ tag: "br" }),
                    `    bs.Tab({ active: true }, bs.A({ href: '...' }, 'Home')),`,
                    bs.E({ tag: "br" }),
                    `    bs.Tab({}, bs.A({ href: '...' }, 'Profile')),`,
                    bs.E({ tag: "br" }),
                    `    bs.Tab({}, bs.A({ href: '...' }, 'Messages'))`,
                    bs.E({ tag: "br" }),
                    `])`
                ])
            )
        )
    ];
}

const navPillsStackedExample = b.styleDef("nav-pills-stacked-example");

function pillsExample(): b.IBobrilChildren {
    return [
        b.anchor(bs.H2({ attrs: { id: "nav-pills" } }, "Pills")),
        bs.E({ style: styles.bsExample }, [
            bs.Pills({}, [
                bs.Pill({ active: true }, bs.A({ href: "javascript:void(0)" }, "Home")),
                bs.Pill({}, bs.A({ href: "javascript:void(0)" }, "Profile")),
                bs.Pill({}, bs.A({ href: "javascript:void(0)" }, "Messages"))
            ])
        ]),
        bs.Figure(
            { style: styles.highlight },
            pre(
                {},
                bs.Code({ style: langJs }, [
                    `bs.Pills({}, [`,
                    bs.E({ tag: "br" }),
                    `    bs.Pill({ active: true }, bs.A({ href: '...' }, 'Home')),`,
                    bs.E({ tag: "br" }),
                    `    bs.Pill({}, bs.A({ href: '...' }, 'Profile')),`,
                    bs.E({ tag: "br" }),
                    `    bs.Pill({}, bs.A({ href: '...' }, 'Messages'))`,
                    bs.E({ tag: "br" }),
                    `])`
                ])
            )
        ),
        bs.P({}, [`Pills are also vertically stackable. Just set `, bs.Code({}, "stacked: true"), `.`]),
        bs.E({ style: styles.bsExample }, [
            bs.Pills({ stacked: true, style: navPillsStackedExample }, [
                bs.Pill({ active: true }, bs.A({ href: "javascript:void(0)" }, "Home")),
                bs.Pill({}, bs.A({ href: "javascript:void(0)" }, "Profile")),
                bs.Pill({}, bs.A({ href: "javascript:void(0)" }, "Messages"))
            ])
        ]),
        bs.Figure(
            { style: styles.highlight },
            pre(
                {},
                bs.Code({ style: langJs }, [
                    `bs.Pills({ stacked: true }, [`,
                    bs.E({ tag: "br" }),
                    `    bs.Pill({ active: true }, bs.A({ href: '...' }, 'Home')),`,
                    bs.E({ tag: "br" }),
                    `    bs.Pill({}, bs.A({ href: '...' }, 'Profile')),`,
                    bs.E({ tag: "br" }),
                    `    bs.Pill({}, bs.A({ href: '...' }, 'Messages'))`,
                    bs.E({ tag: "br" }),
                    `])`
                ])
            )
        )
    ];
}

function justified(): b.IBobrilChildren {
    return [
        b.anchor(bs.H2({ attrs: { id: "nav-justified" } }, "Justified")),
        bs.P({}, [
            `Easily make tabs or pills equal widths of their parent at screens wider than 768px with `,
            bs.Code({}, "justified: true"),
            `. On smaller screens, the nav links are stacked.`
        ]),
        bs.P({}, bs.Strong({ style: bs.helpers.text.danger }, "Justified navbar nav links are currently not supported.")),
        bs.E(
            {
                style: [styles.bsCallout, styles.bsCalloutDanger],
                attrs: { id: "callout-navs-justified-safari" }
            },
            [
                bs.H4({}, [`Make navs used as navigation accessible`]),
                bs.P({}, [
                    `As of v9.1.2, Safari exhibits a bug in which resizing your browser horizontally causes rendering 
                errors in the justified nav that are cleared upon refreshing. `
                ])
            ]
        ),
        bs.E({ style: styles.bsExample }, [
            bs.Tabs({ justified: true }, [
                bs.Tab({ active: true }, bs.A({ href: "javascript:void(0)" }, "Home")),
                bs.Tab({}, bs.A({ href: "javascript:void(0)" }, "Profile")),
                bs.Tab({}, bs.A({ href: "javascript:void(0)" }, "Messages"))
            ]),
            bs.E({ tag: "br" }),
            bs.Pills({ justified: true }, [
                bs.Pill({ active: true }, bs.A({ href: "javascript:void(0)" }, "Home")),
                bs.Pill({}, bs.A({ href: "javascript:void(0)" }, "Profile")),
                bs.Pill({}, bs.A({ href: "javascript:void(0)" }, "Messages"))
            ])
        ]),
        bs.Figure(
            { style: styles.highlight },
            pre(
                {},
                bs.Code({ style: langJs }, [
                    `bs.Tabs({ justified: true }, [`,
                    bs.E({ tag: "br" }),
                    `    ...`,
                    bs.E({ tag: "br" }),
                    `])`,
                    bs.E({ tag: "br" }),
                    ``,
                    bs.E({ tag: "br" }),
                    `bs.Pills({ justified: true }, [`,
                    bs.E({ tag: "br" }),
                    `    ...`,
                    bs.E({ tag: "br" }),
                    `])`
                ])
            )
        )
    ];
}

function disabled(): b.IBobrilChildren {
    return [
        b.anchor(bs.H2({ attrs: { id: "nav-disabled-links" } }, "Disabled links")),
        bs.P({}, [`For any nav component (tab or pill), set `, bs.Code({}, "disabled: true"), ` for gray links and no hover effects.`]),
        bs.E(
            {
                style: [styles.bsCallout, styles.bsCalloutDanger],
                attrs: { id: "callout-navs-anchor-disabled" }
            },
            [
                bs.H4({}, [`Link functionality not impacted`]),
                bs.P({}, [
                    `This class will only change the `,
                    bs.Code({}, "<a>"),
                    `'s appearance, not its functionality. Use custom JavaScript to disable links here.`
                ])
            ]
        ),
        bs.E({ style: styles.bsExample }, [
            bs.Pills({}, [
                bs.Pill({}, bs.A({ href: "javascript:void(0)" }, "Clickable link")),
                bs.Pill({}, bs.A({ href: "javascript:void(0)" }, "Clickable link")),
                bs.Pill({ disabled: true }, bs.A({ href: "javascript:void(0)" }, "Disabled link"))
            ])
        ]),
        bs.Figure(
            { style: styles.highlight },
            pre(
                {},
                bs.Code({ style: langJs }, [
                    `bs.Pills({}, [`,
                    bs.E({ tag: "br" }),
                    `    ...`,
                    bs.E({ tag: "br" }),
                    `    bs.Pill({ disabled: true }, bs.A({ href: '...' }, 'Disabled link')),`,
                    bs.E({ tag: "br" }),
                    `    ...`,
                    bs.E({ tag: "br" }),
                    `])`
                ])
            )
        )
    ];
}

function dropdowns(): b.IBobrilChildren {
    return [
        b.anchor(bs.H2({ attrs: { id: "nav-dropdowns" } }, "Using dropdowns")),
        bs.P({}, [
            `As in previous cases - you can use the prepared helper `,
            bs.Code({}, "bs.Dropdown"),
            ` or compose from specific components.`
        ]),
        bs.H3({ attrs: { id: "tabs-with-dropdowns" } }, "Tabs with dropdowns"),
        bs.E({ style: styles.bsExample }, [
            bs.Tabs({}, [
                bs.Tab({ active: true }, bs.A({ href: "javascript:void(0)" }, "Home")),
                bs.Tab({}, bs.A({ href: "javascript:void(0)" }, "Help")),
                bs.Dropdown(
                    {
                        button: { label: "Dropdown", variant: bs.ButtonVariant.DropdownNav }
                    },
                    bs.DropdownMenu({}, [
                        bs.DropdownItem({}, bs.A({ href: "javascript:void(0)" }, "Action")),
                        bs.DropdownItem({}, bs.A({ href: "javascript:void(0)" }, "Another action")),
                        bs.DropdownItem({}, bs.A({ href: "javascript:void(0)" }, "Something else here")),
                        bs.DropdownItem({ separator: true }),
                        bs.DropdownItem({}, bs.A({ href: "javascript:void(0)" }, "Separated link"))
                    ])
                )
            ])
        ]),
        bs.Figure(
            { style: styles.highlight },
            pre(
                {},
                bs.Code({ style: langJs }, [
                    `bs.Tabs({}, [`,
                    bs.E({ tag: "br" }),
                    `    bs.Tab({ active: true }, bs.A({ href: '...' }, 'Home'))`,
                    bs.E({ tag: "br" }),
                    `    bs.Tab({}, bs.A({ href: '...' }, 'Help'))`,
                    bs.E({ tag: "br" }),
                    `    bs.Dropdown(`,
                    bs.E({ tag: "br" }),
                    `        { button: { label: 'Dropdown', variant: bs.ButtonVariant.DropdownNav } },`,
                    bs.E({ tag: "br" }),
                    `        bs.DropdownMenu({}, [`,
                    bs.E({ tag: "br" }),
                    `            bs.DropdownItem({}, bs.A({ href: '...' }, 'Action')),`,
                    bs.E({ tag: "br" }),
                    `            bs.DropdownItem({}, bs.A({ href: '...' }, 'Another action')),`,
                    bs.E({ tag: "br" }),
                    `            bs.DropdownItem({}, bs.A({ href: '...' }, 'Something else here')),`,
                    bs.E({ tag: "br" }),
                    `            bs.DropdownItem({ separator: true }),`,
                    bs.E({ tag: "br" }),
                    `            bs.DropdownItem({}, bs.A({ href: '...' }, 'Separated link'))`,
                    bs.E({ tag: "br" }),
                    `        ])`,
                    bs.E({ tag: "br" }),
                    `    )`,
                    bs.E({ tag: "br" }),
                    `])`
                ])
            )
        ),
        bs.H3({ attrs: { id: "pills-with-dropdowns" } }, "Pills with dropdowns"),
        bs.E({ style: styles.bsExample }, [
            bs.Pills({}, [
                bs.Pill({ active: true }, bs.A({ href: "javascript:void(0)" }, "Home")),
                bs.Pill({}, bs.A({ href: "javascript:void(0)" }, "Help")),
                bs.Dropdown(
                    {
                        button: { label: "Dropdown", variant: bs.ButtonVariant.DropdownNav }
                    },
                    bs.DropdownMenu({}, [
                        bs.DropdownItem({}, bs.A({ href: "javascript:void(0)" }, "Action")),
                        bs.DropdownItem({}, bs.A({ href: "javascript:void(0)" }, "Another action")),
                        bs.DropdownItem({}, bs.A({ href: "javascript:void(0)" }, "Something else here")),
                        bs.DropdownItem({ separator: true }),
                        bs.DropdownItem({}, bs.A({ href: "javascript:void(0)" }, "Separated link"))
                    ])
                )
            ])
        ]),
        bs.Figure(
            { style: styles.highlight },
            pre(
                {},
                bs.Code({ style: langJs }, [
                    `bs.Pills({}, [`,
                    bs.E({ tag: "br" }),
                    `    bs.Pill({active: true }, bs.A({ href: '...' }, 'Home'))`,
                    bs.E({ tag: "br" }),
                    `    bs.Pill({}, bs.A({ href: '...' }, 'Help'))`,
                    bs.E({ tag: "br" }),
                    `    bs.Dropdown(`,
                    bs.E({ tag: "br" }),
                    `        { button: { label: 'Dropdown', variant: bs.ButtonVariant.DropdownNav } },`,
                    bs.E({ tag: "br" }),
                    `        bs.DropdownMenu({}, [`,
                    bs.E({ tag: "br" }),
                    `            bs.DropdownItem({}, bs.A({ href: '...' }, 'Action')),`,
                    bs.E({ tag: "br" }),
                    `            bs.DropdownItem({}, bs.A({ href: '...' }, 'Another action')),`,
                    bs.E({ tag: "br" }),
                    `            bs.DropdownItem({}, bs.A({ href: '...' }, 'Something else here')),`,
                    bs.E({ tag: "br" }),
                    `            bs.DropdownItem({ separator: true }),`,
                    bs.E({ tag: "br" }),
                    `            bs.DropdownItem({}, bs.A({ href: '...' }, 'Separated link'))`,
                    bs.E({ tag: "br" }),
                    `        ])`,
                    bs.E({ tag: "br" }),
                    `    )`,
                    bs.E({ tag: "br" }),
                    `])`
                ])
            )
        )
    ];
}

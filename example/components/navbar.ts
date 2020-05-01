import * as b from "bobril";
import * as bs from "../../index";
import { styles } from "../bsexample/css";
import { pre, langJs } from "../prettify/pre";
import { section } from "../common/section";

const imageData = `data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAoCAYAAACM/rhtAAAB+0lEQVR4AcyYg5LkUBhG+1X2PdZGaW3btm
3btm3bHttWrPomd1r/2Jn/VJ02TpxcH4CQ/dsuazWgzbIdrm9dZVd4pBz4zx2igTaFHrhvjneVXNHCSqIlFEjiwMyyyOBilRgGSqLNF1jnwNQdIvAt48C3IlBmH
CiLQHC2zoHDu6zG1iXn6+y62ScxY9AODO6w0pvAqf23oSE4joOfH6OxfMoRnoGUm+de8wykbFt6wZtA07QwtNOqKh3ZbS3Wzz2F+1c/QJY0UCJ/J3kXWJfv7Vhx
CRRV1jGw7XI+gcO7rEFFRvdYxydwcPsVsC0bQdKScngt4iUTD4Fy/8p7PoHzRu1DclwmgmiqgUXjD3oTKHbAt869qdJ7l98jNTEblPTkXMwetpvnftA0LLHb4X8
kiY9Kx6Q+W7wJtG0HR7fdrtYz+x7iya0vkEtUULIzCjC21wY+W/GYXusRH5kGytWTLxgEEhePPwhKYb7EK3BQuxWwTBuUkd3X8goUn6fMHLyTT+DCsQdAEXNzSM
eVPAJHdF2DmH8poCREp3uwm7HsGq9J9q69iuunX6EgrwQVObjpBt8z6rdPfvE8kiiyhsvHnomrQx6BxYUyYiNS8f75H1w4/ISepDZLoDhNJ9cdNUquhRsv+6EP9
oNH7Iff2A9g8h8CLt1gH0Qf9NMQAFnO60BJFQe0AAAAAElFTkSuQmCC`;

export const navbarPage = b.createVirtualComponent({
    render(_ctx: b.IBobrilCtx, me: b.IBobrilNode) {
        me.children = section(
            {
                header: "Navbar",
                id: "navbar",
                lead: []
            },
            [
                defaultNavbar(),
                brandImage(),
                forms(),
                buttons(),
                text(),
                links(),
                alignment(),
                fixedTop(),
                fixedBottom(),
                staticTop(),
                inverted()
            ]
        );
    }
});

const collapsedMenu = b.propim(true);
function handleMenuItemClick() {
    collapsedMenu(true);
    return false;
}

function defaultNavbar(): b.IBobrilChildren {
    return [
        b.anchor(bs.H2({ attrs: { id: "navbar-default" } }, "Default navbar")),
        bs.P({}, [
            `Navbars are responsive meta components that serve as navigation headers for your application or site. 
            They begin collapsed (and are toggleable) in mobile views and become horizontal as the available viewport width increases.`
        ]),
        bs.P({}, bs.Strong({ style: bs.helpers.text.danger }, "Justified navbar nav links are currently not supported.")),
        bs.E(
            {
                style: [styles.bsCallout, styles.bsCalloutWarning],
                attrs: { id: "callout-navbar-overflow" }
            },
            [
                bs.H4({}, [`Overflowing content`]),
                bs.P({}, [
                    `Since Bootstrap doesn't know how much space the content in your navbar needs, 
                you might run into issues with content wrapping into a second row. To resolve this, you can:`
                ]),
                bs.Ol({ type: bs.OlType.a }, [
                    bs.Li({}, "Reduce the amount or width of navbar items."),
                    bs.Li({}, [
                        "Hide certain navbar items at certain screen sizes using ",
                        b.link(bs.A({}, "responsive utility classes"), "responsive-utilities-styles"),
                        "."
                    ]),
                    bs.Li({}, `Change the point at which your navbar switches between collapsed and horizontal mode.`)
                ])
            ]
        ),
        bs.E({ style: styles.bsExample }, [
            bs.Navbar({}, [
                bs.Container({ fluid: true }, [
                    bs.NavbarHeader({}, [
                        bs.Button(
                            {
                                variant: bs.ButtonVariant.NavbarToggle,
                                onClick: () => collapsedMenu(!collapsedMenu())
                            },
                            [
                                bs.Span({ style: bs.helpers.srOnly }, "Toggle navigation"),
                                bs.Span({ style: bs.navStyles.iconBar }),
                                bs.Span({ style: bs.navStyles.iconBar }),
                                bs.Span({ style: bs.navStyles.iconBar })
                            ]
                        ),
                        bs.NavbarBrand({ href: "javascript:void(0)" }, "Brand")
                    ]),
                    bs.Collapse(
                        { collapsed: collapsedMenu() },
                        bs.NavbarCollapse({}, [
                            bs.NavbarNav({}, [
                                bs.NavbarNavItem(
                                    { active: true },
                                    bs.A(
                                        {
                                            href: "javascript:void(0)",
                                            onClick: handleMenuItemClick
                                        },
                                        "Link"
                                    )
                                ),
                                bs.NavbarNavItem(
                                    {},
                                    bs.A(
                                        {
                                            href: "javascript:void(0)",
                                            onClick: handleMenuItemClick
                                        },
                                        "Link"
                                    )
                                ),
                                bs.Dropdown(
                                    {
                                        button: {
                                            label: "Dropdown",
                                            variant: bs.ButtonVariant.DropdownNav
                                        }
                                    },
                                    bs.DropdownMenu({}, [
                                        bs.DropdownItem(
                                            {},
                                            bs.A(
                                                {
                                                    href: "javascript:void(0)",
                                                    onClick: handleMenuItemClick
                                                },
                                                "Action"
                                            )
                                        ),
                                        bs.DropdownItem(
                                            {},
                                            bs.A(
                                                {
                                                    href: "javascript:void(0)",
                                                    onClick: handleMenuItemClick
                                                },
                                                "Another action"
                                            )
                                        ),
                                        bs.DropdownItem(
                                            {},
                                            bs.A(
                                                {
                                                    href: "javascript:void(0)",
                                                    onClick: handleMenuItemClick
                                                },
                                                "Something else here"
                                            )
                                        ),
                                        bs.DropdownItem({ separator: true }),
                                        bs.DropdownItem(
                                            {},
                                            bs.A(
                                                {
                                                    href: "javascript:void(0)",
                                                    onClick: handleMenuItemClick
                                                },
                                                "Separated link"
                                            )
                                        )
                                    ])
                                )
                            ]),
                            bs.Form({ style: [bs.navStyles.navbarForm, bs.navStyles.navbarLeft] }, [
                                bs.FormGroup({}, bs.InputText({ placeholder: "Search" })),
                                " ",
                                bs.Button({ label: "Submit", onClick: handleMenuItemClick })
                            ]),
                            bs.NavbarNav({ style: bs.navStyles.navbarRight }, [
                                bs.NavbarNavItem(
                                    {},
                                    bs.A(
                                        {
                                            href: "javascript:void(0)",
                                            onClick: handleMenuItemClick
                                        },
                                        "Link"
                                    )
                                ),
                                bs.Dropdown(
                                    {
                                        button: {
                                            label: "Dropdown",
                                            variant: bs.ButtonVariant.DropdownNav
                                        }
                                    },
                                    bs.DropdownMenu({}, [
                                        bs.DropdownItem(
                                            {},
                                            bs.A(
                                                {
                                                    href: "javascript:void(0)",
                                                    onClick: handleMenuItemClick
                                                },
                                                "Action"
                                            )
                                        ),
                                        bs.DropdownItem(
                                            {},
                                            bs.A(
                                                {
                                                    href: "javascript:void(0)",
                                                    onClick: handleMenuItemClick
                                                },
                                                "Another action"
                                            )
                                        ),
                                        bs.DropdownItem(
                                            {},
                                            bs.A(
                                                {
                                                    href: "javascript:void(0)",
                                                    onClick: handleMenuItemClick
                                                },
                                                "Something else here"
                                            )
                                        ),
                                        bs.DropdownItem({ separator: true }),
                                        bs.DropdownItem(
                                            {},
                                            bs.A(
                                                {
                                                    href: "javascript:void(0)",
                                                    onClick: handleMenuItemClick
                                                },
                                                "Separated link"
                                            )
                                        )
                                    ])
                                )
                            ])
                        ])
                    )
                ])
            ])
        ]),
        bs.Figure(
            { style: styles.highlight },
            pre(
                {},
                bs.Code({ style: langJs }, [
                    `const collapsedMenu = b.propim(true);`,
                    bs.E({ tag: "br" }),
                    `function handleMenuItemClick() {`,
                    bs.E({ tag: "br" }),
                    `    collapsedMenu(true);`,
                    bs.E({ tag: "br" }),
                    `    return false;`,
                    bs.E({ tag: "br" }),
                    `}`,
                    bs.E({ tag: "br" }),
                    ``,
                    bs.E({ tag: "br" }),
                    `bs.Navbar({}, [`,
                    bs.E({ tag: "br" }),
                    `    bs.Container({ fluid: true }, [`,
                    bs.E({ tag: "br" }),
                    `        bs.NavbarHeader({}, [`,
                    bs.E({ tag: "br" }),
                    `            bs.Button(`,
                    bs.E({ tag: "br" }),
                    `                {`,
                    bs.E({ tag: "br" }),
                    `                    variant: bs.ButtonVariant.NavbarToggle,`,
                    bs.E({ tag: "br" }),
                    `                    onClick: () => collapsedMenu(!collapsedMenu())`,
                    bs.E({ tag: "br" }),
                    `                },`,
                    bs.E({ tag: "br" }),
                    `                [`,
                    bs.E({ tag: "br" }),
                    `                    bs.Span({ style: bs.helpers.srOnly }, 'Toggle navigation'),`,
                    bs.E({ tag: "br" }),
                    `                    bs.Span({ style: bs.navStyles.iconBar }),`,
                    bs.E({ tag: "br" }),
                    `                    bs.Span({ style: bs.navStyles.iconBar }),`,
                    bs.E({ tag: "br" }),
                    `                    bs.Span({ style: bs.navStyles.iconBar })`,
                    bs.E({ tag: "br" }),
                    `                ]`,
                    bs.E({ tag: "br" }),
                    `            ),`,
                    bs.E({ tag: "br" }),
                    `            bs.NavbarBrand({ href: '...' }, 'Brand')`,
                    bs.E({ tag: "br" }),
                    `        ]),`,
                    bs.E({ tag: "br" }),
                    `        bs.Collapse(`,
                    bs.E({ tag: "br" }),
                    `            { collapsed: collapsedMenu() },`,
                    bs.E({ tag: "br" }),
                    `            bs.NavbarCollapse({}, [`,
                    bs.E({ tag: "br" }),
                    `                bs.NavbarNav({}, [`,
                    bs.E({ tag: "br" }),
                    `                    bs.NavbarNavItem(`,
                    bs.E({ tag: "br" }),
                    `                        { active: true },`,
                    bs.E({ tag: "br" }),
                    `                        bs.A({ href: '...', onClick: handleMenuItemClick }, 'Link')),`,
                    bs.E({ tag: "br" }),
                    `                    bs.NavbarNavItem({}, bs.A({ href: '...', onClick: handleMenuItemClick }, 'Link')),`,
                    bs.E({ tag: "br" }),
                    `                    bs.Dropdown(`,
                    bs.E({ tag: "br" }),
                    `                        { button: { label: 'Dropdown', variant: bs.ButtonVariant.DropdownNav } },`,
                    bs.E({ tag: "br" }),
                    `                        bs.DropdownMenu({}, [`,
                    bs.E({ tag: "br" }),
                    `                            bs.DropdownItem(`,
                    bs.E({ tag: "br" }),
                    `                                {},`,
                    bs.E({ tag: "br" }),
                    `                                bs.A({ href: '...', onClick: handleMenuItemClick }, 'Action')),`,
                    bs.E({ tag: "br" }),
                    `                            bs.DropdownItem(`,
                    bs.E({ tag: "br" }),
                    `                                {},`,
                    bs.E({ tag: "br" }),
                    `                                bs.A({ href: '...', onClick: handleMenuItemClick }, 'Another action')),`,
                    bs.E({ tag: "br" }),
                    `                            bs.DropdownItem(`,
                    bs.E({ tag: "br" }),
                    `                                {},`,
                    bs.E({ tag: "br" }),
                    `                                bs.A({ href: '...', onClick: handleMenuItemClick }, 'Something else here')),`,
                    bs.E({ tag: "br" }),
                    `                            bs.DropdownItem({ separator: true }),`,
                    bs.E({ tag: "br" }),
                    `                            bs.DropdownItem(`,
                    bs.E({ tag: "br" }),
                    `                                {},`,
                    bs.E({ tag: "br" }),
                    `                                bs.A({ href: '...', onClick: handleMenuItemClick }, 'Separated link'))`,
                    bs.E({ tag: "br" }),
                    `                        ])`,
                    bs.E({ tag: "br" }),
                    `                    )`,
                    bs.E({ tag: "br" }),
                    `                ]),`,
                    bs.E({ tag: "br" }),
                    `                bs.Form({ style: [bs.navStyles.navbarForm, bs.navStyles.navbarLeft] }, [`,
                    bs.E({ tag: "br" }),
                    `                    bs.FormGroup({}, bs.InputText({ placeholder: 'Search' })), ' ',`,
                    bs.E({ tag: "br" }),
                    `                    bs.Button({ label: 'Submit', onClick: handleMenuItemClick })`,
                    bs.E({ tag: "br" }),
                    `                ]),`,
                    bs.E({ tag: "br" }),
                    `                bs.NavbarNav({ style: bs.navStyles.navbarRight }, [`,
                    bs.E({ tag: "br" }),
                    `                    bs.NavbarNavItem({}, bs.A({ href: '...', onClick: handleMenuItemClick }, 'Link')),`,
                    bs.E({ tag: "br" }),
                    `                    bs.Dropdown(`,
                    bs.E({ tag: "br" }),
                    `                        { button: { label: 'Dropdown', variant: bs.ButtonVariant.DropdownNav } },`,
                    bs.E({ tag: "br" }),
                    `                        bs.DropdownMenu({}, [`,
                    bs.E({ tag: "br" }),
                    `                            bs.DropdownItem(`,
                    bs.E({ tag: "br" }),
                    `                                {},`,
                    bs.E({ tag: "br" }),
                    `                                bs.A({ href: '...', onClick: handleMenuItemClick }, 'Action')),`,
                    bs.E({ tag: "br" }),
                    `                            bs.DropdownItem(`,
                    bs.E({ tag: "br" }),
                    `                                {},`,
                    bs.E({ tag: "br" }),
                    `                                bs.A({ href: '...', onClick: handleMenuItemClick }, 'Another action')),`,
                    bs.E({ tag: "br" }),
                    `                            bs.DropdownItem(`,
                    bs.E({ tag: "br" }),
                    `                                {},`,
                    bs.E({ tag: "br" }),
                    `                                bs.A({ href: '...', onClick: handleMenuItemClick }, 'Something else here')),`,
                    bs.E({ tag: "br" }),
                    `                            bs.DropdownItem({ separator: true }),`,
                    bs.E({ tag: "br" }),
                    `                            bs.DropdownItem(`,
                    bs.E({ tag: "br" }),
                    `                                {},`,
                    bs.E({ tag: "br" }),
                    `                                bs.A({ href: '...', onClick: handleMenuItemClick }, 'Separated link'))`,
                    bs.E({ tag: "br" }),
                    `                        ])`,
                    bs.E({ tag: "br" }),
                    `                    )`,
                    bs.E({ tag: "br" }),
                    `                ])`,
                    bs.E({ tag: "br" }),
                    `            ])`,
                    bs.E({ tag: "br" }),
                    `        )`,
                    bs.E({ tag: "br" }),
                    `    ])`,
                    bs.E({ tag: "br" }),
                    `])`
                ])
            )
        )
    ];
}

function brandImage(): b.IBobrilChildren {
    return [
        b.anchor(bs.H2({ attrs: { id: "navbar-brand-image" } }, "Brand image")),
        bs.P({}, [
            `Replace the navbar brand with your own image by swapping the text for an `,
            bs.Code({}, "Image"),
            `. Since the `,
            bs.Code({}, "NavbarBrand"),
            `has its own padding and height, you may need to override some CSS depending on your image.`
        ]),
        bs.E({ style: styles.bsExample }, [
            bs.Navbar({}, [
                bs.Container({ fluid: true }, [
                    bs.NavbarHeader({}, [
                        bs.NavbarBrand({ href: "javascript:void(0)" }, bs.Image({ src: imageData, width: 20, height: 20 }))
                    ])
                ])
            ])
        ]),
        bs.Figure(
            { style: styles.highlight },
            pre(
                {},
                bs.Code({ style: langJs }, [
                    `bs.Navbar({}, [`,
                    bs.E({ tag: "br" }),
                    `    bs.Container({ fluid: true }, [`,
                    bs.E({ tag: "br" }),
                    `        bs.NavbarHeader({}, [`,
                    bs.E({ tag: "br" }),
                    `            bs.NavbarBrand({ href: '...' }, bs.Image({ src: '...', width: 20, height: 20 }))`,
                    bs.E({ tag: "br" }),
                    `        ]),`,
                    bs.E({ tag: "br" }),
                    `    ])`,
                    bs.E({ tag: "br" }),
                    `])`
                ])
            )
        )
    ];
}
function forms(): b.IBobrilChildren {
    return [
        b.anchor(bs.H2({ attrs: { id: "navbar-forms" } }, "Forms")),
        bs.P({}, [
            `Place form content within `,
            bs.Code({}, "bs.navStyles.navbarForm"),
            ` for proper vertical alignment and collapsed behavior in 
            narrow viewports. Use the alignment options to decide where it resides within the navbar content.`
        ]),
        bs.P({}, [
            `As a heads up, `,
            bs.Code({}, "bs.navStyles.navbarForm"),
            ` shares much of its code with `,
            bs.Code({}, "formStyles.formInline"),
            ` via mixin. `,
            bs.Strong(
                { style: bs.helpers.text.danger },
                "Some form controls, like input groups, may require fixed widths to be show up properly within a navbar."
            )
        ]),
        bs.E({ style: styles.bsExample }, [
            bs.Navbar({}, [
                bs.Container({ fluid: true }, [
                    bs.NavbarHeader({}, [
                        bs.Button(
                            {
                                variant: bs.ButtonVariant.NavbarToggle,
                                data: {
                                    toggle: "collapse",
                                    target: "#bs-example-navbar-collapse-2"
                                }
                            },
                            [
                                bs.Span({ style: bs.helpers.srOnly }, "Toggle navigation"),
                                bs.Span({ style: bs.navStyles.iconBar }),
                                bs.Span({ style: bs.navStyles.iconBar }),
                                bs.Span({ style: bs.navStyles.iconBar })
                            ]
                        ),
                        bs.NavbarBrand({ href: "javascript:void(0)" }, "Brand")
                    ]),
                    bs.NavbarCollapse({ id: "bs-example-navbar-collapse-2" }, [
                        bs.Form({ style: [bs.navStyles.navbarForm, bs.navStyles.navbarLeft] }, [
                            bs.FormGroup({}, bs.InputText({ placeholder: "Search" })),
                            " ",
                            bs.Button({ label: "Submit" })
                        ])
                    ])
                ])
            ])
        ]),
        bs.Figure(
            { style: styles.highlight },
            pre(
                {},
                bs.Code({ style: langJs }, [
                    `bs.Form({ style: [bs.navStyles.navbarForm, bs.navStyles.navbarLeft] }, [`,
                    bs.E({ tag: "br" }),
                    `    bs.FormGroup({}, bs.InputText({ placeholder: 'Search' })), ' ',`,
                    bs.E({ tag: "br" }),
                    `    bs.Button({ label: 'Submit' })`,
                    bs.E({ tag: "br" }),
                    `])`
                ])
            )
        )
    ];
}

function buttons(): b.IBobrilChildren {
    return [
        b.anchor(bs.H2({ attrs: { id: "navbar-buttons" } }, "Buttons")),
        bs.P({}, [
            `Set the `,
            bs.Code({}, "bs.navStyles.navbarBtn"),
            ` style to `,
            bs.Code({}, "bs.Button"),
            ` component input data not residing 
            in a `,
            bs.Code({}, "form"),
            ` to vertically center them in the navbar.`
        ]),
        bs.E({ style: styles.bsExample }, [
            bs.Navbar({}, [
                bs.Container({ fluid: true }, [
                    bs.NavbarHeader({}, [
                        bs.Button(
                            {
                                variant: bs.ButtonVariant.NavbarToggle,
                                data: {
                                    toggle: "collapse",
                                    target: "#bs-example-navbar-collapse-3"
                                }
                            },
                            [
                                bs.Span({ style: bs.helpers.srOnly }, "Toggle navigation"),
                                bs.Span({ style: bs.navStyles.iconBar }),
                                bs.Span({ style: bs.navStyles.iconBar }),
                                bs.Span({ style: bs.navStyles.iconBar })
                            ]
                        ),
                        bs.NavbarBrand({ href: "javascript:void(0)" }, "Brand")
                    ]),
                    bs.NavbarCollapse({ id: "bs-example-navbar-collapse-3" }, [
                        bs.Button({ label: "Sign in", style: bs.navStyles.navbarBtn })
                    ])
                ])
            ])
        ]),
        bs.Figure(
            { style: styles.highlight },
            pre({}, bs.Code({ style: langJs }, [`bs.Button({ label: 'Sign in', style: bs.navStyles.navbarBtn })`]))
        ),
        bs.E(
            {
                style: [styles.bsCallout, styles.bsCalloutWarning],
                attrs: { id: "callout-navbar-btn-context" }
            },
            [
                bs.H4({}, [`Context-specific usage`]),
                bs.P({}, [
                    `Like the standard button styles, `,
                    bs.Code({}, "bs.navStyles.navbarBtn"),
                    ` can be used on `,
                    bs.Code({}, "a"),
                    ` and `,
                    bs.Code({}, `input`),
                    ` components or button options. However, neither `,
                    bs.Code({}, "bs.navStyles.navbarBtn"),
                    ` nor the standard button classes should be used on `,
                    bs.Code({}, "a"),
                    `nodes within `,
                    bs.Code({}, "NavbarNav"),
                    `.`
                ])
            ]
        )
    ];
}

function text(): b.IBobrilChildren {
    return [
        b.anchor(bs.H2({ attrs: { id: "navbar-text" } }, "Text")),
        bs.P({}, [
            `Wrap strings of text in a node of component with `,
            bs.Code({}, "bs.navStyles.navbarText"),
            `, usually on a `,
            bs.Code({}, "bs.P"),
            ` component node for proper leading and color.`
        ]),
        bs.E({ style: styles.bsExample }, [
            bs.Navbar({}, [
                bs.Container({ fluid: true }, [
                    bs.NavbarHeader({}, [
                        bs.Button(
                            {
                                variant: bs.ButtonVariant.NavbarToggle,
                                data: {
                                    toggle: "collapse",
                                    target: "#bs-example-navbar-collapse-4"
                                }
                            },
                            [
                                bs.Span({ style: bs.helpers.srOnly }, "Toggle navigation"),
                                bs.Span({ style: bs.navStyles.iconBar }),
                                bs.Span({ style: bs.navStyles.iconBar }),
                                bs.Span({ style: bs.navStyles.iconBar })
                            ]
                        ),
                        bs.NavbarBrand({ href: "javascript:void(0)" }, "Brand")
                    ]),
                    bs.NavbarCollapse({ id: "bs-example-navbar-collapse-4" }, [
                        bs.P({ style: [bs.navStyles.navbarText] }, "Signed in as Mark Otto")
                    ])
                ])
            ])
        ]),
        bs.Figure(
            { style: styles.highlight },
            pre({}, bs.Code({ style: langJs }, [`bs.P({ style: [bs.navStyles.navbarText] }, 'Signed in as Mark Otto')`]))
        )
    ];
}

function links(): b.IBobrilChildren {
    return [
        b.anchor(bs.H2({ attrs: { id: "navbar-links" } }, "Non-nav links")),
        bs.P({}, [
            `For folks using standard links that are not within the regular navbar navigation component, use the `,
            bs.Code({}, "bs.navStyles.navbarLink"),
            `style to add the proper colors for the default and inverse navbar options.`
        ]),
        bs.E({ style: styles.bsExample }, [
            bs.Navbar({}, [
                bs.Container({ fluid: true }, [
                    bs.NavbarHeader({}, [
                        bs.Button(
                            {
                                variant: bs.ButtonVariant.NavbarToggle,
                                data: {
                                    toggle: "collapse",
                                    target: "#bs-example-navbar-collapse-5"
                                }
                            },
                            [
                                bs.Span({ style: bs.helpers.srOnly }, "Toggle navigation"),
                                bs.Span({ style: bs.navStyles.iconBar }),
                                bs.Span({ style: bs.navStyles.iconBar }),
                                bs.Span({ style: bs.navStyles.iconBar })
                            ]
                        ),
                        bs.NavbarBrand({ href: "javascript:void(0)" }, "Brand")
                    ]),
                    bs.NavbarCollapse({ id: "bs-example-navbar-collapse-5" }, [
                        bs.P({ style: [bs.navStyles.navbarText, bs.navStyles.navbarRight] }, [
                            "Signed in as ",
                            bs.A(
                                {
                                    style: bs.navStyles.navbarLink,
                                    href: "javascript:void(0)"
                                },
                                "Mark Otto"
                            )
                        ])
                    ])
                ])
            ])
        ]),
        bs.Figure(
            { style: styles.highlight },
            pre(
                {},
                bs.Code({ style: langJs }, [
                    `bs.P({ style: [bs.navStyles.navbarText, bs.navStyles.navbarRight] }, [`,
                    bs.E({ tag: "br" }),
                    `    'Signed in as ',`,
                    bs.E({ tag: "br" }),
                    `    bs.A({ style: bs.navStyles.navbarLink, href: '...' }, 'Mark Otto')`,
                    bs.E({ tag: "br" }),
                    `])`
                ])
            )
        )
    ];
}

function alignment(): b.IBobrilChildren {
    return [
        b.anchor(bs.H2({ attrs: { id: "navbar-component-alignment" } }, "Component alignment")),
        bs.P({}, [
            `Align nav links, forms, buttons, or text, using the `,
            bs.Code({}, "bs.navStyles.navbarLeft"),
            ` or `,
            bs.Code({}, "bs.navStyles.navbarRight"),
            ` utility styles. Both styles will add a CSS float in the specified direction. 
            For example, to align nav links, put them in a separate `,
            bs.Code({}, "bs.Ul"),
            ` with the respective utility class applied.`
        ]),
        bs.P({}, [
            `These styles are mixin-ed versions of `,
            bs.Code({}, "bs.helpers.float.pullLeft"),
            ` and `,
            bs.Code({}, "bs.helpers.float.pullRight"),
            `, but they're scoped to media queries for easier handling of navbar components across device sizes.`
        ]),
        bs.E(
            {
                style: [styles.bsCallout, styles.bsCalloutWarning],
                attrs: { id: "callout-navbar-right-align" }
            },
            [
                bs.H4({}, [`Right aligning multiple components`]),
                bs.P({}, [
                    `Navbars currently have a limitation with multiple `,
                    bs.Code({}, "bs.navStyles.navbarRight"),
                    ` styles. To properly space 
                content, Botstrap uses negative margin on the last `,
                    bs.Code({}, "bs.navStyles.navbarRight"),
                    ` node. When there are multiple elements using that class, these margins don't work as intended.`
                ])
            ]
        )
    ];
}

function fixedTop(): b.IBobrilChildren {
    return [
        b.anchor(bs.H2({ attrs: { id: "navbar-fixed-top" } }, "Fixed to top")),
        bs.P({}, [
            `Set the `,
            bs.Code({}, "fixed"),
            ` input data property of `,
            bs.Code({}, "Navbar"),
            ` to `,
            bs.Code({}, "bs.NavbarFixed.Top"),
            ` and include a `,
            bs.Code({}, "bs.Container({}, ...)"),
            ` or `,
            bs.Code({}, "bs.Container({ fluid: true }, ...)"),
            ` to center and pad navbar content.`
        ]),
        bs.E({ style: [styles.bsExample, styles.bsNavbarTopExample] }, [
            bs.Navbar({ fixed: bs.NavbarFixed.Top }, [
                bs.Container({ fluid: true }, [
                    bs.NavbarHeader({}, [
                        bs.Button(
                            {
                                variant: bs.ButtonVariant.NavbarToggle,
                                data: {
                                    toggle: "collapse",
                                    target: "#bs-example-navbar-collapse-6"
                                }
                            },
                            [
                                bs.Span({ style: bs.helpers.srOnly }, "Toggle navigation"),
                                bs.Span({ style: bs.navStyles.iconBar }),
                                bs.Span({ style: bs.navStyles.iconBar }),
                                bs.Span({ style: bs.navStyles.iconBar })
                            ]
                        ),
                        bs.NavbarBrand({ href: "javascript:void(0)" }, "Brand")
                    ]),
                    bs.NavbarCollapse({ id: "bs-example-navbar-collapse-6" }, [
                        bs.NavbarNav({}, [
                            bs.NavbarNavItem({ active: true }, bs.A({ href: "javascript:void(0)" }, "Home")),
                            bs.NavbarNavItem({}, bs.A({ href: "javascript:void(0)" }, "Link")),
                            bs.NavbarNavItem({}, bs.A({ href: "javascript:void(0)" }, "Link"))
                        ])
                    ])
                ])
            ])
        ]),
        bs.Figure(
            { style: styles.highlight },
            pre(
                {},
                bs.Code({ style: langJs }, [
                    `bs.Navbar({ fixed: bs.NavbarFixed.Top }, [`,
                    bs.E({ tag: "br" }),
                    `    bs.Container({ fluid: true }, [`,
                    bs.E({ tag: "br" }),
                    `        ...`,
                    bs.E({ tag: "br" }),
                    `    ])`,
                    bs.E({ tag: "br" }),
                    `])`
                ])
            )
        ),
        bs.E(
            {
                style: [styles.bsCallout, styles.bsCalloutDanger],
                attrs: { id: "callout-navbar-fixed-top-padding" }
            },
            [
                bs.H4({}, [`Overflowing content`]),
                bs.P({}, [
                    `The fixed navbar will overlay your other content, unless you add padding to the top of the `,
                    bs.Code({}, "<body>"),
                    `. Try out your own values or use our snippet below. Tip: By default, the navbar is 50px high.`
                ])
            ]
        )
    ];
}

function fixedBottom(): b.IBobrilChildren {
    return [
        b.anchor(bs.H2({ attrs: { id: "navbar-fixed-bottom" } }, "Fixed to bottom")),
        bs.P({}, [
            `Set the `,
            bs.Code({}, "fixed"),
            ` input data property of `,
            bs.Code({}, "Navbar"),
            ` to `,
            bs.Code({}, "bs.NavbarFixed.Bottom"),
            ` and include a `,
            bs.Code({}, "bs.Container({}, ...)"),
            ` or `,
            bs.Code({}, "bs.Container({ fluid: true }, ...)"),
            ` to center and pad navbar content.`
        ]),
        bs.E({ style: [styles.bsExample, styles.bsNavbarBottomExample] }, [
            bs.Navbar({ fixed: bs.NavbarFixed.Bottom }, [
                bs.Container({ fluid: true }, [
                    bs.NavbarHeader({}, [
                        bs.Button(
                            {
                                variant: bs.ButtonVariant.NavbarToggle,
                                data: {
                                    toggle: "collapse",
                                    target: "#bs-example-navbar-collapse-7"
                                }
                            },
                            [
                                bs.Span({ style: bs.helpers.srOnly }, "Toggle navigation"),
                                bs.Span({ style: bs.navStyles.iconBar }),
                                bs.Span({ style: bs.navStyles.iconBar }),
                                bs.Span({ style: bs.navStyles.iconBar })
                            ]
                        ),
                        bs.NavbarBrand({ href: "javascript:void(0)" }, "Brand")
                    ]),
                    bs.NavbarCollapse({ id: "bs-example-navbar-collapse-7" }, [
                        bs.NavbarNav({}, [
                            bs.NavbarNavItem({ active: true }, bs.A({ href: "javascript:void(0)" }, "Home")),
                            bs.NavbarNavItem({}, bs.A({ href: "javascript:void(0)" }, "Link")),
                            bs.NavbarNavItem({}, bs.A({ href: "javascript:void(0)" }, "Link"))
                        ])
                    ])
                ])
            ])
        ]),
        bs.Figure(
            { style: styles.highlight },
            pre(
                {},
                bs.Code({ style: langJs }, [
                    `bs.Navbar({ fixed: bs.NavbarFixed.Bottom }, [`,
                    bs.E({ tag: "br" }),
                    `    bs.Container({ fluid: true }, [`,
                    bs.E({ tag: "br" }),
                    `        ...`,
                    bs.E({ tag: "br" }),
                    `    ])`,
                    bs.E({ tag: "br" }),
                    `])`
                ])
            )
        ),
        bs.E(
            {
                style: [styles.bsCallout, styles.bsCalloutDanger],
                attrs: { id: "callout-navbar-fixed-bottom-padding" }
            },
            [
                bs.H4({}, [`Overflowing content`]),
                bs.P({}, [
                    `The fixed navbar will overlay your other content, unless you add padding to the bottom of the `,
                    bs.Code({}, "<body>"),
                    `. Try out your own values or use our snippet below. Tip: By default, the navbar is 50px high.`
                ])
            ]
        )
    ];
}

function staticTop(): b.IBobrilChildren {
    return [
        b.anchor(bs.H2({ attrs: { id: "navbar-static-top" } }, "Static top")),
        bs.P({}, [
            `Create a full-width navbar that scrolls away with the page by setting the `,
            bs.Code({}, "static"),
            ` input data property of `,
            bs.Code({}, "Navbar"),
            ` to `,
            bs.Code({}, "bs.NavbarStatic.Top"),
            ` and include a `,
            bs.Code({}, "bs.Container({}, ...)"),
            ` or `,
            bs.Code({}, "bs.Container({ fluid: true }, ...)"),
            ` to center and pad navbar content.`
        ]),
        bs.E({ style: [styles.bsExample, styles.bsNavbarTopExample] }, [
            bs.Navbar({ static: bs.NavbarStatic.Top }, [
                bs.Container({ fluid: true }, [
                    bs.NavbarHeader({}, [
                        bs.Button(
                            {
                                variant: bs.ButtonVariant.NavbarToggle,
                                data: {
                                    toggle: "collapse",
                                    target: "#bs-example-navbar-collapse-8"
                                }
                            },
                            [
                                bs.Span({ style: bs.helpers.srOnly }, "Toggle navigation"),
                                bs.Span({ style: bs.navStyles.iconBar }),
                                bs.Span({ style: bs.navStyles.iconBar }),
                                bs.Span({ style: bs.navStyles.iconBar })
                            ]
                        ),
                        bs.NavbarBrand({ href: "javascript:void(0)" }, "Brand")
                    ]),
                    bs.NavbarCollapse({ id: "bs-example-navbar-collapse-8" }, [
                        bs.NavbarNav({}, [
                            bs.NavbarNavItem({ active: true }, bs.A({ href: "javascript:void(0)" }, "Home")),
                            bs.NavbarNavItem({}, bs.A({ href: "javascript:void(0)" }, "Link")),
                            bs.NavbarNavItem({}, bs.A({ href: "javascript:void(0)" }, "Link"))
                        ])
                    ])
                ])
            ])
        ]),
        bs.Figure(
            { style: styles.highlight },
            pre(
                {},
                bs.Code({ style: langJs }, [
                    `bs.Navbar({ static: bs.NavbarStatic.Top }, [`,
                    bs.E({ tag: "br" }),
                    `    bs.Container({ fluid: true }, [`,
                    bs.E({ tag: "br" }),
                    `        ...`,
                    bs.E({ tag: "br" }),
                    `    ])`,
                    bs.E({ tag: "br" }),
                    `])`
                ])
            )
        )
    ];
}

function inverted(): b.IBobrilChildren {
    return [
        b.anchor(bs.H2({ attrs: { id: "navbar-inverted" } }, "Inverted navbar")),
        bs.P({}, [
            `Modify the look of the navbar by setting `,
            bs.Code({}, "inverse"),
            ` input data property of `,
            bs.Code({}, "Navbar"),
            ` to `,
            bs.Code({}, "true"),
            `.`
        ]),
        bs.E({ style: [styles.bsExample, styles.bsNavbarTopExample] }, [
            bs.Navbar({ inverse: true }, [
                bs.Container({ fluid: true }, [
                    bs.NavbarHeader({}, [
                        bs.Button(
                            {
                                variant: bs.ButtonVariant.NavbarToggle,
                                data: {
                                    toggle: "collapse",
                                    target: "#bs-example-navbar-collapse-9"
                                }
                            },
                            [
                                bs.Span({ style: bs.helpers.srOnly }, "Toggle navigation"),
                                bs.Span({ style: bs.navStyles.iconBar }),
                                bs.Span({ style: bs.navStyles.iconBar }),
                                bs.Span({ style: bs.navStyles.iconBar })
                            ]
                        ),
                        bs.NavbarBrand({ href: "javascript:void(0)" }, "Brand")
                    ]),
                    bs.NavbarCollapse({ id: "bs-example-navbar-collapse-9" }, [
                        bs.NavbarNav({}, [
                            bs.NavbarNavItem({ active: true }, bs.A({ href: "javascript:void(0)" }, "Home")),
                            bs.NavbarNavItem({}, bs.A({ href: "javascript:void(0)" }, "Link")),
                            bs.NavbarNavItem({}, bs.A({ href: "javascript:void(0)" }, "Link"))
                        ])
                    ])
                ])
            ])
        ]),
        bs.Figure(
            { style: styles.highlight },
            pre(
                {},
                bs.Code({ style: langJs }, [`bs.Navbar({ inverse: true }, [`, bs.E({ tag: "br" }), `    ...`, bs.E({ tag: "br" }), `])`])
            )
        )
    ];
}

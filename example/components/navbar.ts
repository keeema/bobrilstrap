import * as b from 'bobril';
import {
    e, p, h2, h4, helpers, strong, ol, li, OlType, a, navbar, container, navbarHeader, button, span, navStyles, navbarBrand,
    navbarCollapse, navbarNav, navbarNavItem, dropdown, dropdownMenu, dropdownItem, form, formGroup, inputText, figure, code,
    image, NavbarFixed, NavbarStatic
} from '../../index';
import { styles } from '../bsexample/css';
import { pre, langJs } from '../prettify/pre';
import { section } from '../common/section';

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
                header: 'Navbar',
                id: 'navbar',
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
            ]);
    }
});

function defaultNavbar(): b.IBobrilChildren {
    return [
        b.anchor(h2({ attrs: { id: 'navbar-default' } }, 'Default navbar')),
        p({}, [
            `Navbars are responsive meta components that serve as navigation headers for your application or site. 
            They begin collapsed (and are toggleable) in mobile views and become horizontal as the available viewport width increases.`
        ]),

        p({}, strong({ style: helpers.text.danger }, 'Justified navbar nav links are currently not supported.')),
        e({ style: [styles.bsCallout, styles.bsCalloutWarning], attrs: { id: 'callout-navbar-overflow' } }, [
            h4({}, [`Overflowing content`]),
            p({}, [
                `Since Bootstrap doesn't know how much space the content in your navbar needs, 
                you might run into issues with content wrapping into a second row. To resolve this, you can:`
            ]),
            ol({ type: OlType.a }, [
                li({}, 'Reduce the amount or width of navbar items.'),
                li({}, [
                    'Hide certain navbar items at certain screen sizes using ',
                    b.link(a({}, 'responsive utility classes'), 'responsive-utilities-styles'),
                    '.'
                ]),
                li({}, `Change the point at which your navbar switches between collapsed and horizontal mode.`)
            ])
        ]),
        e({ style: styles.bsExample }, [
            navbar({}, [
                container({ fluid: true }, [
                    navbarHeader({}, [
                        button(
                            {
                                navbar: true,
                                navbarCollapse: { target: '#bs-example-navbar-collapse-1' }
                            },
                            [
                                span({ style: helpers.srOnly }, 'Toggle navigation'),
                                span({ style: navStyles.iconBar }),
                                span({ style: navStyles.iconBar }),
                                span({ style: navStyles.iconBar })
                            ]
                        ),
                        navbarBrand({ href: 'javascript:void(0)' }, 'Brand')
                    ]),
                    navbarCollapse({ id: 'bs-example-navbar-collapse-1' }, [
                        navbarNav({}, [
                            navbarNavItem({ active: true }, a({ href: 'javascript:void(0)' }, 'Link')),
                            navbarNavItem({}, a({ href: 'javascript:void(0)' }, 'Link')),
                            dropdown(
                                { navbar: true, button: { label: 'Dropdown' } },
                                dropdownMenu({}, [
                                    dropdownItem({}, a({ href: 'javascript:void(0)' }, 'Action')),
                                    dropdownItem({}, a({ href: 'javascript:void(0)' }, 'Another action')),
                                    dropdownItem({}, a({ href: 'javascript:void(0)' }, 'Something else here')),
                                    dropdownItem({ separator: true }),
                                    dropdownItem({}, a({ href: 'javascript:void(0)' }, 'Separated link')),
                                    dropdownItem({ separator: true }),
                                    dropdownItem({}, a({ href: 'javascript:void(0)' }, 'One more separated link')),
                                ])
                            )
                        ]),
                        form({ style: [navStyles.navbarForm, navStyles.navbarLeft] }, [
                            formGroup({}, inputText({ placeholder: 'Search' })), ' ',
                            button({ label: 'Submit' })
                        ]),
                        navbarNav({ style: navStyles.navbarRight }, [
                            navbarNavItem({}, a({ href: 'javascript:void(0)' }, 'Link')),
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
                    ])
                ])
            ])
        ]),
        figure({ style: styles.highlight }, pre({}, code({ style: langJs }, [
            `navbar({}, [`, e({ tag: 'br' }),
            `    container({ fluid: true }, [`, e({ tag: 'br' }),
            `        navbarHeader({}, [`, e({ tag: 'br' }),
            `            button(`, e({ tag: 'br' }),
            `                { `, e({ tag: 'br' }),
            `                    navbar: true,`, e({ tag: 'br' }),
            `                    navbarCollapse: { target: '#bs-example-navbar-collapse-1' }`, e({ tag: 'br' }),
            `                },`, e({ tag: 'br' }),
            `                [`, e({ tag: 'br' }),
            `                    span({ style: helpers.srOnly }, 'Toggle navigation'),`, e({ tag: 'br' }),
            `                    span({ style: navStyles.iconBar }),`, e({ tag: 'br' }),
            `                    span({ style: navStyles.iconBar }),`, e({ tag: 'br' }),
            `                    span({ style: navStyles.iconBar })`, e({ tag: 'br' }),
            `                ]`, e({ tag: 'br' }),
            `            ),`, e({ tag: 'br' }),
            `            navbarBrand({ href: 'javascript:void(0)' }, 'Brand')`, e({ tag: 'br' }),
            `        ]),`, e({ tag: 'br' }),
            `        navbarCollapse({ id: 'bs-example-navbar-collapse-1' }, [`, e({ tag: 'br' }),
            `            navbarNav({}, [`, e({ tag: 'br' }),
            `                navbarNavItem({ active: true }, a({ href: 'javascript:void(0)' }, 'Link')),`, e({ tag: 'br' }),
            `                navbarNavItem({}, a({ href: 'javascript:void(0)' }, 'Link')),`, e({ tag: 'br' }),
            `                dropdown(`, e({ tag: 'br' }),
            `                    { navbar: true, button: { label: 'Dropdown' } },`, e({ tag: 'br' }),
            `                    dropdownMenu({}, [`, e({ tag: 'br' }),
            `                        dropdownItem({}, a({ href: 'javascript:void(0)' }, 'Action')),`, e({ tag: 'br' }),
            `                        dropdownItem({}, a({ href: 'javascript:void(0)' }, 'Another action')),`, e({ tag: 'br' }),
            `                        dropdownItem({}, a({ href: 'javascript:void(0)' }, 'Something else here')),`, e({ tag: 'br' }),
            `                        dropdownItem({ separator: true }),`, e({ tag: 'br' }),
            `                        dropdownItem({}, a({ href: 'javascript:void(0)' }, 'Separated link')),`, e({ tag: 'br' }),
            `                        dropdownItem({ separator: true }),`, e({ tag: 'br' }),
            `                        dropdownItem({}, a({ href: 'javascript:void(0)' }, 'One more separated link')),`, e({ tag: 'br' }),
            `                    ])`, e({ tag: 'br' }),
            `               )`, e({ tag: 'br' }),
            `            ]),`, e({ tag: 'br' }),
            `            form({ style: [navStyles.navbarForm, navStyles.navbarLeft] }, [`, e({ tag: 'br' }),
            `                formGroup({}, inputText({ placeholder: 'Search' })), ' ',`, e({ tag: 'br' }),
            `                button({ label: 'Submit' })`, e({ tag: 'br' }),
            `            ]),`, e({ tag: 'br' }),
            `            navbarNav({ style: navStyles.navbarRight }, [`, e({ tag: 'br' }),
            `                navbarNavItem({}, a({ href: 'javascript:void(0)' }, 'Link')),`, e({ tag: 'br' }),
            `                dropdown(`, e({ tag: 'br' }),
            `                    { navbar: true, button: { label: 'Dropdown' } },`, e({ tag: 'br' }),
            `                    dropdownMenu({}, [`, e({ tag: 'br' }),
            `                        dropdownItem({}, a({ href: 'javascript:void(0)' }, 'Action')),`, e({ tag: 'br' }),
            `                        dropdownItem({}, a({ href: 'javascript:void(0)' }, 'Another action')),`, e({ tag: 'br' }),
            `                        dropdownItem({}, a({ href: 'javascript:void(0)' }, 'Something else here')),`, e({ tag: 'br' }),
            `                        dropdownItem({ separator: true }),`, e({ tag: 'br' }),
            `                        dropdownItem({}, a({ href: 'javascript:void(0)' }, 'Separated link'))`, e({ tag: 'br' }),
            `                    ])`, e({ tag: 'br' }),
            `                )`, e({ tag: 'br' }),
            `            ])`, e({ tag: 'br' }),
            `        ])`, e({ tag: 'br' }),
            `    ])`, e({ tag: 'br' }),
            `])`
        ])))
    ];
}

function brandImage(): b.IBobrilChildren {
    return [
        b.anchor(h2({ attrs: { id: 'navbar-brand-image' } }, 'Brand image')),
        p({}, [
            `Replace the navbar brand with your own image by swapping the text for an `, code({}, 'image'),
            `. Since the `, code({}, 'navbarBrand'),
            `has its own padding and height, you may need to override some CSS depending on your image.`
        ]),
        e({ style: styles.bsExample }, [
            navbar({}, [
                container({ fluid: true }, [
                    navbarHeader({}, [
                        navbarBrand({ href: 'javascript:void(0)' }, image({ src: imageData, width: 20, height: 20 }))
                    ])
                ])
            ])
        ]),
        figure({ style: styles.highlight }, pre({}, code({ style: langJs }, [
            `navbar({}, [`, e({ tag: 'br' }),
            `    container({ fluid: true }, [`, e({ tag: 'br' }),
            `        navbarHeader({}, [`, e({ tag: 'br' }),
            `            navbarBrand({ href: 'javascript:void(0)' }, image({ src: imageData, width: 20, height: 20 }))`, e({ tag: 'br' }),
            `        ]),`, e({ tag: 'br' }),
            `    ])`, e({ tag: 'br' }),
            `])`
        ])))
    ];
}
function forms(): b.IBobrilChildren {
    return [
        b.anchor(h2({ attrs: { id: 'navbar-forms' } }, 'Forms')),
        p({}, [
            `Place form content within `, code({}, 'navStyles.navbarForm'), ` for proper vertical alignment and collapsed behavior in 
            narrow viewports. Use the alignment options to decide where it resides within the navbar content.`
        ]),
        p({}, [
            `As a heads up, `, code({}, 'navStyles.navbarForm'), ` shares much of its code with `,
            code({}, 'formStyles.formInline'), ` via mixin. `,
            strong(
                { style: helpers.text.danger },
                'Some form controls, like input groups, may require fixed widths to be show up properly within a navbar.')
        ]),

        e({ style: styles.bsExample }, [
            navbar({}, [
                container({ fluid: true }, [
                    navbarHeader({}, [
                        button(
                            {
                                navbar: true,
                                navbarCollapse: { target: '#bs-example-navbar-collapse-2' }
                            },
                            [
                                span({ style: helpers.srOnly }, 'Toggle navigation'),
                                span({ style: navStyles.iconBar }),
                                span({ style: navStyles.iconBar }),
                                span({ style: navStyles.iconBar })
                            ]
                        ),
                        navbarBrand({ href: 'javascript:void(0)' }, 'Brand')
                    ]),
                    navbarCollapse({ id: 'bs-example-navbar-collapse-2' }, [
                        form({ style: [navStyles.navbarForm, navStyles.navbarLeft] }, [
                            formGroup({}, inputText({ placeholder: 'Search' })), ' ',
                            button({ label: 'Submit' })
                        ])
                    ])
                ])
            ])
        ]),
        figure({ style: styles.highlight }, pre({}, code({ style: langJs }, [
            `form({ style: [navStyles.navbarForm, navStyles.navbarLeft] }, [`, e({ tag: 'br' }),
            `    formGroup({}, inputText({ placeholder: 'Search' })), ' ',`, e({ tag: 'br' }),
            `    button({ label: 'Submit' })`, e({ tag: 'br' }),
            `])`
        ])))
    ];
}

function buttons(): b.IBobrilChildren {
    return [
        b.anchor(h2({ attrs: { id: 'navbar-buttons' } }, 'Buttons')),
        p({}, [
            `Set the `, code({}, 'navStyles.navbarBtn'), ` style to `, code({}, 'button'), ` component input data not residing 
            in a `, code({}, 'form'), ` to vertically center them in the navbar.`
        ]),
        e({ style: styles.bsExample }, [
            navbar({}, [
                container({ fluid: true }, [
                    navbarHeader({}, [
                        button(
                            {
                                navbar: true,
                                navbarCollapse: { target: '#bs-example-navbar-collapse-3' }
                            },
                            [
                                span({ style: helpers.srOnly }, 'Toggle navigation'),
                                span({ style: navStyles.iconBar }),
                                span({ style: navStyles.iconBar }),
                                span({ style: navStyles.iconBar })
                            ]
                        ),
                        navbarBrand({ href: 'javascript:void(0)' }, 'Brand')
                    ]),
                    navbarCollapse({ id: 'bs-example-navbar-collapse-3' }, [
                        button({ label: 'Sign in', style: navStyles.navbarBtn })
                    ])
                ])
            ])
        ]),
        figure({ style: styles.highlight }, pre({}, code({ style: langJs }, [
            `button({ label: 'Sign in', style: navStyles.navbarBtn })`
        ]))),
        e({ style: [styles.bsCallout, styles.bsCalloutWarning], attrs: { id: 'callout-navbar-btn-context' } }, [
            h4({}, [`Context-specific usage`]),
            p({}, [
                `Like the standard button styles, `, code({}, 'navStyles.navbarBtn'), ` can be used on `,
                code({}, 'a'), ` and `, code({}, `input`), ` components or button options. However, neither `,
                code({}, 'navStyles.navbarBtn'), ` nor the standard button classes should be used on `,
                code({}, 'a'), `nodes within `, code({}, 'navbarNav'), `.`
            ])
        ])
    ];
}

function text(): b.IBobrilChildren {
    return [
        b.anchor(h2({ attrs: { id: 'navbar-text' } }, 'Text')),
        p({}, [
            `Wrap strings of text in a node of component with `, code({}, 'navStyles.navbarText'),
            `, usually on a `, code({}, 'p'), ` component node for proper leading and color.`
        ]),
        e({ style: styles.bsExample }, [
            navbar({}, [
                container({ fluid: true }, [
                    navbarHeader({}, [
                        button(
                            {
                                navbar: true,
                                navbarCollapse: { target: '#bs-example-navbar-collapse-4' }
                            },
                            [
                                span({ style: helpers.srOnly }, 'Toggle navigation'),
                                span({ style: navStyles.iconBar }),
                                span({ style: navStyles.iconBar }),
                                span({ style: navStyles.iconBar })
                            ]
                        ),
                        navbarBrand({ href: 'javascript:void(0)' }, 'Brand')
                    ]),
                    navbarCollapse({ id: 'bs-example-navbar-collapse-4' }, [
                        p({ style: [navStyles.navbarText] }, 'Signed in as Mark Otto')
                    ])
                ])
            ])
        ]),
        figure({ style: styles.highlight }, pre({}, code({ style: langJs }, [
            `p({ style: [navStyles.navbarText] }, 'Signed in as Mark Otto')`
        ])))
    ];
}

function links(): b.IBobrilChildren {
    return [
        b.anchor(h2({ attrs: { id: 'navbar-links' } }, 'Non-nav links')),
        p({}, [
            `For folks using standard links that are not within the regular navbar navigation component, use the `,
            code({}, 'navStyles.navbarLink'), `style to add the proper colors for the default and inverse navbar options.`
        ]),
        e({ style: styles.bsExample }, [
            navbar({}, [
                container({ fluid: true }, [
                    navbarHeader({}, [
                        button(
                            {
                                navbar: true,
                                navbarCollapse: { target: '#bs-example-navbar-collapse-5' }
                            },
                            [
                                span({ style: helpers.srOnly }, 'Toggle navigation'),
                                span({ style: navStyles.iconBar }),
                                span({ style: navStyles.iconBar }),
                                span({ style: navStyles.iconBar })
                            ]
                        ),
                        navbarBrand({ href: 'javascript:void(0)' }, 'Brand')
                    ]),
                    navbarCollapse({ id: 'bs-example-navbar-collapse-5' }, [
                        p({ style: [navStyles.navbarText, navStyles.navbarRight] }, [
                            'Signed in as ',
                            a({ style: navStyles.navbarLink, href: 'javascript:void(0)' }, 'Mark Otto')
                        ])
                    ])
                ])
            ])
        ]),
        figure({ style: styles.highlight }, pre({}, code({ style: langJs }, [
            `p({ style: [navStyles.navbarText, navStyles.navbarRight] }, [`, e({ tag: 'br' }),
            `    'Signed in as ',`, e({ tag: 'br' }),
            `    a({ style: navStyles.navbarLink, href: 'javascript:void(0)' }, 'Mark Otto')`, e({ tag: 'br' }),
            `])`
        ])))
    ];
}

function alignment(): b.IBobrilChildren {
    return [
        b.anchor(h2({ attrs: { id: 'navbar-component-alignment' } }, 'Component alignment')),
        p({}, [
            `Align nav links, forms, buttons, or text, using the `, code({}, 'navStyles.navbarLeft'), ` or `,
            code({}, 'navStyles.navbarRight'), ` utility styles. Both styles will add a CSS float in the specified direction. 
            For example, to align nav links, put them in a separate `, code({}, 'ul'), ` with the respective utility class applied.`
        ]),
        p({}, [
            `These styles are mixin-ed versions of `, code({}, 'helpers.float.pullLeft'), ` and `, code({}, 'helpers.float.pullRight'),
            `, but they're scoped to media queries for easier handling of navbar components across device sizes.`
        ]),
        e({ style: [styles.bsCallout, styles.bsCalloutWarning], attrs: { id: 'callout-navbar-right-align' } }, [
            h4({}, [`Right aligning multiple components`]),
            p({}, [
                `Navbars currently have a limitation with multiple `, code({}, 'navStyles.navbarRight'), ` styles. To properly space 
                content, Botstrap uses negative margin on the last `, code({}, 'navStyles.navbarRight'),
                ` node. When there are multiple elements using that class, these margins don't work as intended.`
            ])
        ])
    ];
}

function fixedTop(): b.IBobrilChildren {
    return [
        b.anchor(h2({ attrs: { id: 'navbar-fixed-top' } }, 'Fixed to top')),
        p({}, [
            `Set the `, code({}, 'fixed'), ` input data property of `, code({}, 'navbar'), ` to `, code({}, 'NavbarFixed.Top'),
            ` and include a `, code({}, 'container({}, ...)'),
            ` or `, code({}, 'container({ fluid: true }, ...)'), ` to center and pad navbar content.`
        ]),
        e({ style: [styles.bsExample, styles.bsNavbarTopExample] }, [
            navbar({ fixed: NavbarFixed.Top }, [
                container({ fluid: true }, [
                    navbarHeader({}, [
                        button(
                            {
                                navbar: true,
                                navbarCollapse: { target: '#bs-example-navbar-collapse-6' }
                            },
                            [
                                span({ style: helpers.srOnly }, 'Toggle navigation'),
                                span({ style: navStyles.iconBar }),
                                span({ style: navStyles.iconBar }),
                                span({ style: navStyles.iconBar })
                            ]
                        ),
                        navbarBrand({ href: 'javascript:void(0)' }, 'Brand')
                    ]),
                    navbarCollapse({ id: 'bs-example-navbar-collapse-6' }, [
                        navbarNav({}, [
                            navbarNavItem({ active: true }, a({ href: 'javascript:void(0)' }, 'Home')),
                            navbarNavItem({}, a({ href: 'javascript:void(0)' }, 'Link')),
                            navbarNavItem({}, a({ href: 'javascript:void(0)' }, 'Link'))
                        ])
                    ])
                ])
            ])
        ]),
        figure({ style: styles.highlight }, pre({}, code({ style: langJs }, [
            `navbar({ fixed: NavbarFixed.Top }, [`, e({ tag: 'br' }),
            `    container({ fluid: true }, [`, e({ tag: 'br' }),
            `        ...`, e({ tag: 'br' }),
            `    ])`, e({ tag: 'br' }),
            `])`
        ]))),
        e({ style: [styles.bsCallout, styles.bsCalloutDanger], attrs: { id: 'callout-navbar-fixed-top-padding' } }, [
            h4({}, [`Overflowing content`]),
            p({}, [
                `The fixed navbar will overlay your other content, unless you add padding to the top of the `, code({}, '<body>'),
                `. Try out your own values or use our snippet below. Tip: By default, the navbar is 50px high.`
            ])
        ]),
    ];
}

function fixedBottom(): b.IBobrilChildren {
    return [
        b.anchor(h2({ attrs: { id: 'navbar-fixed-bottom' } }, 'Fixed to bottom')),
        p({}, [
            `Set the `, code({}, 'fixed'), ` input data property of `, code({}, 'navbar'), ` to `, code({}, 'NavbarFixed.Bottom'),
            ` and include a `, code({}, 'container({}, ...)'),
            ` or `, code({}, 'container({ fluid: true }, ...)'), ` to center and pad navbar content.`
        ]),
        e({ style: [styles.bsExample, styles.bsNavbarBottomExample] }, [
            navbar({ fixed: NavbarFixed.Bottom }, [
                container({ fluid: true }, [
                    navbarHeader({}, [
                        button(
                            {
                                navbar: true,
                                navbarCollapse: { target: '#bs-example-navbar-collapse-7' }
                            },
                            [
                                span({ style: helpers.srOnly }, 'Toggle navigation'),
                                span({ style: navStyles.iconBar }),
                                span({ style: navStyles.iconBar }),
                                span({ style: navStyles.iconBar })
                            ]
                        ),
                        navbarBrand({ href: 'javascript:void(0)' }, 'Brand')
                    ]),
                    navbarCollapse({ id: 'bs-example-navbar-collapse-7' }, [
                        navbarNav({}, [
                            navbarNavItem({ active: true }, a({ href: 'javascript:void(0)' }, 'Home')),
                            navbarNavItem({}, a({ href: 'javascript:void(0)' }, 'Link')),
                            navbarNavItem({}, a({ href: 'javascript:void(0)' }, 'Link'))
                        ])
                    ])
                ])
            ])
        ]),
        figure({ style: styles.highlight }, pre({}, code({ style: langJs }, [
            `navbar({ fixed: NavbarFixed.Bottom }, [`, e({ tag: 'br' }),
            `    container({ fluid: true }, [`, e({ tag: 'br' }),
            `        ...`, e({ tag: 'br' }),
            `    ])`, e({ tag: 'br' }),
            `])`
        ]))),
        e({ style: [styles.bsCallout, styles.bsCalloutDanger], attrs: { id: 'callout-navbar-fixed-bottom-padding' } }, [
            h4({}, [`Overflowing content`]),
            p({}, [
                `The fixed navbar will overlay your other content, unless you add padding to the bottom of the `, code({}, '<body>'),
                `. Try out your own values or use our snippet below. Tip: By default, the navbar is 50px high.`
            ])
        ]),

    ];
}

function staticTop(): b.IBobrilChildren {
    return [
        b.anchor(h2({ attrs: { id: 'navbar-static-top' } }, 'Static top')),
        p({}, [
            `Create a full-width navbar that scrolls away with the page by setting the `, code({}, 'static'),
            ` input data property of `, code({}, 'navbar'), ` to `, code({}, 'NavbarStatic.Top'),
            ` and include a `, code({}, 'container({}, ...)'),
            ` or `, code({}, 'container({ fluid: true }, ...)'), ` to center and pad navbar content.`
        ]),
        e({ style: [styles.bsExample, styles.bsNavbarTopExample] }, [
            navbar({ static: NavbarStatic.Top }, [
                container({ fluid: true }, [
                    navbarHeader({}, [
                        button(
                            {
                                navbar: true,
                                navbarCollapse: { target: '#bs-example-navbar-collapse-8' }
                            },
                            [
                                span({ style: helpers.srOnly }, 'Toggle navigation'),
                                span({ style: navStyles.iconBar }),
                                span({ style: navStyles.iconBar }),
                                span({ style: navStyles.iconBar })
                            ]
                        ),
                        navbarBrand({ href: 'javascript:void(0)' }, 'Brand')
                    ]),
                    navbarCollapse({ id: 'bs-example-navbar-collapse-8' }, [
                        navbarNav({}, [
                            navbarNavItem({ active: true }, a({ href: 'javascript:void(0)' }, 'Home')),
                            navbarNavItem({}, a({ href: 'javascript:void(0)' }, 'Link')),
                            navbarNavItem({}, a({ href: 'javascript:void(0)' }, 'Link'))
                        ])
                    ])
                ])
            ])
        ]),
        figure({ style: styles.highlight }, pre({}, code({ style: langJs }, [
            `navbar({ static: NavbarStatic.Top }, [`, e({ tag: 'br' }),
            `    container({ fluid: true }, [`, e({ tag: 'br' }),
            `        ...`, e({ tag: 'br' }),
            `    ])`, e({ tag: 'br' }),
            `])`
        ])))
    ];
}

function inverted(): b.IBobrilChildren {
    return [
        b.anchor(h2({ attrs: { id: 'navbar-inverted' } }, 'Inverted navbar')),
        p({}, [
            `Modify the look of the navbar by setting `, code({}, 'inverse'), ` input data property of `, code({}, 'navbar'),
            ` to `, code({}, 'true'), `.`
        ]),
        e({ style: [styles.bsExample, styles.bsNavbarTopExample] }, [
            navbar({ inverse: true }, [
                container({ fluid: true }, [
                    navbarHeader({}, [
                        button(
                            {
                                navbar: true,
                                navbarCollapse: { target: '#bs-example-navbar-collapse-9' }
                            },
                            [
                                span({ style: helpers.srOnly }, 'Toggle navigation'),
                                span({ style: navStyles.iconBar }),
                                span({ style: navStyles.iconBar }),
                                span({ style: navStyles.iconBar })
                            ]
                        ),
                        navbarBrand({ href: 'javascript:void(0)' }, 'Brand')
                    ]),
                    navbarCollapse({ id: 'bs-example-navbar-collapse-9' }, [
                        navbarNav({}, [
                            navbarNavItem({ active: true }, a({ href: 'javascript:void(0)' }, 'Home')),
                            navbarNavItem({}, a({ href: 'javascript:void(0)' }, 'Link')),
                            navbarNavItem({}, a({ href: 'javascript:void(0)' }, 'Link'))
                        ])
                    ])
                ])
            ])
        ]),
        figure({ style: styles.highlight }, pre({}, code({ style: langJs }, [
            `navbar({ inverse: true }, [`, e({ tag: 'br' }),
            `    ...`, e({ tag: 'br' }),
            `])`
        ])))
    ];
}
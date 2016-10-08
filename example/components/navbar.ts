import * as b from 'bobril';
import * as bs from '../../index';
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
        b.anchor(bs.h2({ attrs: { id: 'navbar-default' } }, 'Default navbar')),
        bs.p({}, [
            `Navbars are responsive meta components that serve as navigation headers for your application or site. 
            They begin collapsed (and are toggleable) in mobile views and become horizontal as the available viewport width increases.`
        ]),

        bs.p({}, bs.strong({ style: bs.helpers.text.danger }, 'Justified navbar nav links are currently not supported.')),
        bs.e({ style: [styles.bsCallout, styles.bsCalloutWarning], attrs: { id: 'callout-navbar-overflow' } }, [
            bs.h4({}, [`Overflowing content`]),
            bs.p({}, [
                `Since Bootstrap doesn't know how much space the content in your navbar needs, 
                you might run into issues with content wrapping into a second row. To resolve this, you can:`
            ]),
            bs.ol({ type: bs.OlType.a }, [
                bs.li({}, 'Reduce the amount or width of navbar items.'),
                bs.li({}, [
                    'Hide certain navbar items at certain screen sizes using ',
                    b.link(bs.a({}, 'responsive utility classes'), 'responsive-utilities-styles'),
                    '.'
                ]),
                bs.li({}, `Change the point at which your navbar switches between collapsed and horizontal mode.`)
            ])
        ]),
        bs.e({ style: styles.bsExample }, [
            bs.navbar({}, [
                bs.container({ fluid: true }, [
                    bs.navbarHeader({}, [
                        bs.button(
                            {
                                navbar: true,
                                navbarCollapse: { target: '#bs-example-navbar-collapse-1' }
                            },
                            [
                                bs.span({ style: bs.helpers.srOnly }, 'Toggle navigation'),
                                bs.span({ style: bs.navStyles.iconBar }),
                                bs.span({ style: bs.navStyles.iconBar }),
                                bs.span({ style: bs.navStyles.iconBar })
                            ]
                        ),
                        bs.navbarBrand({ href: 'javascript:void(0)' }, 'Brand')
                    ]),
                    bs.navbarCollapse({ id: 'bs-example-navbar-collapse-1' }, [
                        bs.navbarNav({}, [
                            bs.navbarNavItem({ active: true }, bs.a({ href: 'javascript:void(0)' }, 'Link')),
                            bs.navbarNavItem({}, bs.a({ href: 'javascript:void(0)' }, 'Link')),
                            bs.dropdown(
                                { navbar: true, button: { label: 'Dropdown' } },
                                bs.dropdownMenu({}, [
                                    bs.dropdownItem({}, bs.a({ href: 'javascript:void(0)' }, 'Action')),
                                    bs.dropdownItem({}, bs.a({ href: 'javascript:void(0)' }, 'Another action')),
                                    bs.dropdownItem({}, bs.a({ href: 'javascript:void(0)' }, 'Something else here')),
                                    bs.dropdownItem({ separator: true }),
                                    bs.dropdownItem({}, bs.a({ href: 'javascript:void(0)' }, 'Separated link')),
                                    bs.dropdownItem({ separator: true }),
                                    bs.dropdownItem({}, bs.a({ href: 'javascript:void(0)' }, 'One more separated link')),
                                ])
                            )
                        ]),
                        bs.form({ style: [bs.navStyles.navbarForm, bs.navStyles.navbarLeft] }, [
                            bs.formGroup({}, bs.inputText({ placeholder: 'Search' })), ' ',
                            bs.button({ label: 'Submit' })
                        ]),
                        bs.navbarNav({ style: bs.navStyles.navbarRight }, [
                            bs.navbarNavItem({}, bs.a({ href: 'javascript:void(0)' }, 'Link')),
                            bs.dropdown(
                                { navbar: true, button: { label: 'Dropdown' } },
                                bs.dropdownMenu({}, [
                                    bs.dropdownItem({}, bs.a({ href: 'javascript:void(0)' }, 'Action')),
                                    bs.dropdownItem({}, bs.a({ href: 'javascript:void(0)' }, 'Another action')),
                                    bs.dropdownItem({}, bs.a({ href: 'javascript:void(0)' }, 'Something else here')),
                                    bs.dropdownItem({ separator: true }),
                                    bs.dropdownItem({}, bs.a({ href: 'javascript:void(0)' }, 'Separated link'))
                                ])
                            )
                        ])
                    ])
                ])
            ])
        ]),
        bs.figure({ style: styles.highlight }, pre({}, bs.code({ style: langJs }, [
            `bs.navbar({}, [`, bs.e({ tag: 'br' }),
            `    bs.container({ fluid: true }, [`, bs.e({ tag: 'br' }),
            `        bs.navbarHeader({}, [`, bs.e({ tag: 'br' }),
            `            bs.button(`, bs.e({ tag: 'br' }),
            `                { `, bs.e({ tag: 'br' }),
            `                    navbar: true,`, bs.e({ tag: 'br' }),
            `                    navbarCollapse: { target: '#bs-example-navbar-collapse-1' }`, bs.e({ tag: 'br' }),
            `                },`, bs.e({ tag: 'br' }),
            `                [`, bs.e({ tag: 'br' }),
            `                    bs.span({ style: bs.helpers.srOnly }, 'Toggle navigation'),`, bs.e({ tag: 'br' }),
            `                    bs.span({ style: bs.navStyles.iconBar }),`, bs.e({ tag: 'br' }),
            `                    bs.span({ style: bs.navStyles.iconBar }),`, bs.e({ tag: 'br' }),
            `                    bs.span({ style: bs.navStyles.iconBar })`, bs.e({ tag: 'br' }),
            `                ]`, bs.e({ tag: 'br' }),
            `            ),`, bs.e({ tag: 'br' }),
            `            bs.navbarBrand({ href: 'javascript:void(0)' }, 'Brand')`, bs.e({ tag: 'br' }),
            `        ]),`, bs.e({ tag: 'br' }),
            `        bs.navbarCollapse({ id: 'bs-example-navbar-collapse-1' }, [`, bs.e({ tag: 'br' }),
            `            bs.navbarNav({}, [`, bs.e({ tag: 'br' }),
            `                bs.navbarNavItem({ active: true }, bs.a({ href: 'javascript:void(0)' }, 'Link')),`, bs.e({ tag: 'br' }),
            `                bs.navbarNavItem({}, bs.a({ href: 'javascript:void(0)' }, 'Link')),`, bs.e({ tag: 'br' }),
            `                bs.dropdown(`, bs.e({ tag: 'br' }),
            `                    { navbar: true, button: { label: 'Dropdown' } },`, bs.e({ tag: 'br' }),
            `                    bs.dropdownMenu({}, [`, bs.e({ tag: 'br' }),
            `                        bs.dropdownItem({}, bs.a({ href: 'javascript:void(0)' }, 'Action')),`, bs.e({ tag: 'br' }),
            `                        bs.dropdownItem({}, bs.a({ href: 'javascript:void(0)' }, 'Another action')),`, bs.e({ tag: 'br' }),
            `                        bs.dropdownItem({}, bs.a({ href: 'javascript:void(0)' }, 'Something else here')),`,
            bs.e({ tag: 'br' }),
            `                        bs.dropdownItem({ separator: true }),`, bs.e({ tag: 'br' }),
            `                        bs.dropdownItem({}, bs.a({ href: 'javascript:void(0)' }, 'Separated link')),`, bs.e({ tag: 'br' }),
            `                        bs.dropdownItem({ separator: true }),`, bs.e({ tag: 'br' }),
            `                        bs.dropdownItem(`, bs.e({ tag: 'br' }),
            `                            {}, bs.a({ href: 'javascript:void(0)' }, 'One more separated link')),`, bs.e({ tag: 'br' }),
            `                    ])`, bs.e({ tag: 'br' }),
            `               )`, bs.e({ tag: 'br' }),
            `            ]),`, bs.e({ tag: 'br' }),
            `            bs.form({ style: [bs.navStyles.navbarForm, bs.navStyles.navbarLeft] }, [`, bs.e({ tag: 'br' }),
            `                bs.formGroup({}, bs.inputText({ placeholder: 'Search' })), ' ',`, bs.e({ tag: 'br' }),
            `                bs.button({ label: 'Submit' })`, bs.e({ tag: 'br' }),
            `            ]),`, bs.e({ tag: 'br' }),
            `            bs.navbarNav({ style: bs.navStyles.navbarRight }, [`, bs.e({ tag: 'br' }),
            `                bs.navbarNavItem({}, bs.a({ href: 'javascript:void(0)' }, 'Link')),`, bs.e({ tag: 'br' }),
            `                bs.dropdown(`, bs.e({ tag: 'br' }),
            `                    { navbar: true, button: { label: 'Dropdown' } },`, bs.e({ tag: 'br' }),
            `                    bs.dropdownMenu({}, [`, bs.e({ tag: 'br' }),
            `                        bs.dropdownItem({}, bs.a({ href: 'javascript:void(0)' }, 'Action')),`, bs.e({ tag: 'br' }),
            `                        bs.dropdownItem({}, bs.a({ href: 'javascript:void(0)' }, 'Another action')),`, bs.e({ tag: 'br' }),
            `                        bs.dropdownItem({}, bs.a({ href: 'javascript:void(0)' }, 'Something else here')),`,
            bs.e({ tag: 'br' }),
            `                        bs.dropdownItem({ separator: true }),`, bs.e({ tag: 'br' }),
            `                        bs.dropdownItem({}, bs.a({ href: 'javascript:void(0)' }, 'Separated link'))`, bs.e({ tag: 'br' }),
            `                    ])`, bs.e({ tag: 'br' }),
            `                )`, bs.e({ tag: 'br' }),
            `            ])`, bs.e({ tag: 'br' }),
            `        ])`, bs.e({ tag: 'br' }),
            `    ])`, bs.e({ tag: 'br' }),
            `])`
        ])))
    ];
}

function brandImage(): b.IBobrilChildren {
    return [
        b.anchor(bs.h2({ attrs: { id: 'navbar-brand-image' } }, 'Brand image')),
        bs.p({}, [
            `Replace the navbar brand with your own image by swapping the text for an `, bs.code({}, 'image'),
            `. Since the `, bs.code({}, 'navbarBrand'),
            `has its own padding and height, you may need to override some CSS depending on your image.`
        ]),
        bs.e({ style: styles.bsExample }, [
            bs.navbar({}, [
                bs.container({ fluid: true }, [
                    bs.navbarHeader({}, [
                        bs.navbarBrand({ href: 'javascript:void(0)' }, bs.image({ src: imageData, width: 20, height: 20 }))
                    ])
                ])
            ])
        ]),
        bs.figure({ style: styles.highlight }, pre({}, bs.code({ style: langJs }, [
            `bs.navbar({}, [`, bs.e({ tag: 'br' }),
            `    bs.container({ fluid: true }, [`, bs.e({ tag: 'br' }),
            `        bs.navbarHeader({}, [`, bs.e({ tag: 'br' }),
            `            bs.navbarBrand({ href: 'javascript:void(0)' }, bs.image({ src: imageData, width: 20, height: 20 }))`,
            bs.e({ tag: 'br' }),
            `        ]),`, bs.e({ tag: 'br' }),
            `    ])`, bs.e({ tag: 'br' }),
            `])`
        ])))
    ];
}
function forms(): b.IBobrilChildren {
    return [
        b.anchor(bs.h2({ attrs: { id: 'navbar-forms' } }, 'Forms')),
        bs.p({}, [
            `Place form content within `, bs.code({}, 'bs.navStyles.navbarForm'), ` for proper vertical alignment and collapsed behavior in 
            narrow viewports. Use the alignment options to decide where it resides within the navbar content.`
        ]),
        bs.p({}, [
            `As a heads up, `, bs.code({}, 'bs.navStyles.navbarForm'), ` shares much of its code with `,
            bs.code({}, 'formStyles.formInline'), ` via mixin. `,
            bs.strong(
                { style: bs.helpers.text.danger },
                'Some form controls, like input groups, may require fixed widths to be show up properly within a navbar.')
        ]),
        bs.e({ style: styles.bsExample }, [
            bs.navbar({}, [
                bs.container({ fluid: true }, [
                    bs.navbarHeader({}, [
                        bs.button(
                            {
                                navbar: true,
                                navbarCollapse: { target: '#bs-example-navbar-collapse-2' }
                            },
                            [
                                bs.span({ style: bs.helpers.srOnly }, 'Toggle navigation'),
                                bs.span({ style: bs.navStyles.iconBar }),
                                bs.span({ style: bs.navStyles.iconBar }),
                                bs.span({ style: bs.navStyles.iconBar })
                            ]
                        ),
                        bs.navbarBrand({ href: 'javascript:void(0)' }, 'Brand')
                    ]),
                    bs.navbarCollapse({ id: 'bs-example-navbar-collapse-2' }, [
                        bs.form({ style: [bs.navStyles.navbarForm, bs.navStyles.navbarLeft] }, [
                            bs.formGroup({}, bs.inputText({ placeholder: 'Search' })), ' ',
                            bs.button({ label: 'Submit' })
                        ])
                    ])
                ])
            ])
        ]),
        bs.figure({ style: styles.highlight }, pre({}, bs.code({ style: langJs }, [
            `bs.form({ style: [bs.navStyles.navbarForm, bs.navStyles.navbarLeft] }, [`, bs.e({ tag: 'br' }),
            `    bs.formGroup({}, bs.inputText({ placeholder: 'Search' })), ' ',`, bs.e({ tag: 'br' }),
            `    bs.button({ label: 'Submit' })`, bs.e({ tag: 'br' }),
            `])`
        ])))
    ];
}

function buttons(): b.IBobrilChildren {
    return [
        b.anchor(bs.h2({ attrs: { id: 'navbar-buttons' } }, 'Buttons')),
        bs.p({}, [
            `Set the `, bs.code({}, 'bs.navStyles.navbarBtn'), ` style to `, bs.code({}, 'bs.button'), ` component input data not residing 
            in a `, bs.code({}, 'form'), ` to vertically center them in the navbar.`
        ]),
        bs.e({ style: styles.bsExample }, [
            bs.navbar({}, [
                bs.container({ fluid: true }, [
                    bs.navbarHeader({}, [
                        bs.button(
                            {
                                navbar: true,
                                navbarCollapse: { target: '#bs-example-navbar-collapse-3' }
                            },
                            [
                                bs.span({ style: bs.helpers.srOnly }, 'Toggle navigation'),
                                bs.span({ style: bs.navStyles.iconBar }),
                                bs.span({ style: bs.navStyles.iconBar }),
                                bs.span({ style: bs.navStyles.iconBar })
                            ]
                        ),
                        bs.navbarBrand({ href: 'javascript:void(0)' }, 'Brand')
                    ]),
                    bs.navbarCollapse({ id: 'bs-example-navbar-collapse-3' }, [
                        bs.button({ label: 'Sign in', style: bs.navStyles.navbarBtn })
                    ])
                ])
            ])
        ]),
        bs.figure({ style: styles.highlight }, pre({}, bs.code({ style: langJs }, [
            `bs.button({ label: 'Sign in', style: bs.navStyles.navbarBtn })`
        ]))),
        bs.e({ style: [styles.bsCallout, styles.bsCalloutWarning], attrs: { id: 'callout-navbar-btn-context' } }, [
            bs.h4({}, [`Context-specific usage`]),
            bs.p({}, [
                `Like the standard button styles, `, bs.code({}, 'bs.navStyles.navbarBtn'), ` can be used on `,
                bs.code({}, 'a'), ` and `, bs.code({}, `input`), ` components or button options. However, neither `,
                bs.code({}, 'bs.navStyles.navbarBtn'), ` nor the standard button classes should be used on `,
                bs.code({}, 'a'), `nodes within `, bs.code({}, 'navbarNav'), `.`
            ])
        ])
    ];
}

function text(): b.IBobrilChildren {
    return [
        b.anchor(bs.h2({ attrs: { id: 'navbar-text' } }, 'Text')),
        bs.p({}, [
            `Wrap strings of text in a node of component with `, bs.code({}, 'bs.navStyles.navbarText'),
            `, usually on a `, bs.code({}, 'bs.p'), ` component node for proper leading and color.`
        ]),
        bs.e({ style: styles.bsExample }, [
            bs.navbar({}, [
                bs.container({ fluid: true }, [
                    bs.navbarHeader({}, [
                        bs.button(
                            {
                                navbar: true,
                                navbarCollapse: { target: '#bs-example-navbar-collapse-4' }
                            },
                            [
                                bs.span({ style: bs.helpers.srOnly }, 'Toggle navigation'),
                                bs.span({ style: bs.navStyles.iconBar }),
                                bs.span({ style: bs.navStyles.iconBar }),
                                bs.span({ style: bs.navStyles.iconBar })
                            ]
                        ),
                        bs.navbarBrand({ href: 'javascript:void(0)' }, 'Brand')
                    ]),
                    bs.navbarCollapse({ id: 'bs-example-navbar-collapse-4' }, [
                        bs.p({ style: [bs.navStyles.navbarText] }, 'Signed in as Mark Otto')
                    ])
                ])
            ])
        ]),
        bs.figure({ style: styles.highlight }, pre({}, bs.code({ style: langJs }, [
            `bs.p({ style: [bs.navStyles.navbarText] }, 'Signed in as Mark Otto')`
        ])))
    ];
}

function links(): b.IBobrilChildren {
    return [
        b.anchor(bs.h2({ attrs: { id: 'navbar-links' } }, 'Non-nav links')),
        bs.p({}, [
            `For folks using standard links that are not within the regular navbar navigation component, use the `,
            bs.code({}, 'bs.navStyles.navbarLink'), `style to add the proper colors for the default and inverse navbar options.`
        ]),
        bs.e({ style: styles.bsExample }, [
            bs.navbar({}, [
                bs.container({ fluid: true }, [
                    bs.navbarHeader({}, [
                        bs.button(
                            {
                                navbar: true,
                                navbarCollapse: { target: '#bs-example-navbar-collapse-5' }
                            },
                            [
                                bs.span({ style: bs.helpers.srOnly }, 'Toggle navigation'),
                                bs.span({ style: bs.navStyles.iconBar }),
                                bs.span({ style: bs.navStyles.iconBar }),
                                bs.span({ style: bs.navStyles.iconBar })
                            ]
                        ),
                        bs.navbarBrand({ href: 'javascript:void(0)' }, 'Brand')
                    ]),
                    bs.navbarCollapse({ id: 'bs-example-navbar-collapse-5' }, [
                        bs.p({ style: [bs.navStyles.navbarText, bs.navStyles.navbarRight] }, [
                            'Signed in as ',
                            bs.a({ style: bs.navStyles.navbarLink, href: 'javascript:void(0)' }, 'Mark Otto')
                        ])
                    ])
                ])
            ])
        ]),
        bs.figure({ style: styles.highlight }, pre({}, bs.code({ style: langJs }, [
            `bs.p({ style: [bs.navStyles.navbarText, bs.navStyles.navbarRight] }, [`, bs.e({ tag: 'br' }),
            `    'Signed in as ',`, bs.e({ tag: 'br' }),
            `    bs.a({ style: bs.navStyles.navbarLink, href: 'javascript:void(0)' }, 'Mark Otto')`, bs.e({ tag: 'br' }),
            `])`
        ])))
    ];
}

function alignment(): b.IBobrilChildren {
    return [
        b.anchor(bs.h2({ attrs: { id: 'navbar-component-alignment' } }, 'Component alignment')),
        bs.p({}, [
            `Align nav links, forms, buttons, or text, using the `, bs.code({}, 'bs.navStyles.navbarLeft'), ` or `,
            bs.code({}, 'bs.navStyles.navbarRight'), ` utility styles. Both styles will add a CSS float in the specified direction. 
            For example, to align nav links, put them in a separate `, bs.code({}, 'bs.ul'), ` with the respective utility class applied.`
        ]),
        bs.p({}, [
            `These styles are mixin-ed versions of `, bs.code({}, 'bs.helpers.float.pullLeft'), ` and `,
            bs.code({}, 'bs.helpers.float.pullRight'),
            `, but they're scoped to media queries for easier handling of navbar components across device sizes.`
        ]),
        bs.e({ style: [styles.bsCallout, styles.bsCalloutWarning], attrs: { id: 'callout-navbar-right-align' } }, [
            bs.h4({}, [`Right aligning multiple components`]),
            bs.p({}, [
                `Navbars currently have a limitation with multiple `, bs.code({}, 'bs.navStyles.navbarRight'), ` styles. To properly space 
                content, Botstrap uses negative margin on the last `, bs.code({}, 'bs.navStyles.navbarRight'),
                ` node. When there are multiple elements using that class, these margins don't work as intended.`
            ])
        ])
    ];
}

function fixedTop(): b.IBobrilChildren {
    return [
        b.anchor(bs.h2({ attrs: { id: 'navbar-fixed-top' } }, 'Fixed to top')),
        bs.p({}, [
            `Set the `, bs.code({}, 'fixed'), ` input data property of `, bs.code({}, 'navbar'), ` to `, bs.code({}, 'bs.NavbarFixed.Top'),
            ` and include a `, bs.code({}, 'bs.container({}, ...)'),
            ` or `, bs.code({}, 'bs.container({ fluid: true }, ...)'), ` to center and pad navbar content.`
        ]),
        bs.e({ style: [styles.bsExample, styles.bsNavbarTopExample] }, [
            bs.navbar({ fixed: bs.NavbarFixed.Top }, [
                bs.container({ fluid: true }, [
                    bs.navbarHeader({}, [
                        bs.button(
                            {
                                navbar: true,
                                navbarCollapse: { target: '#bs-example-navbar-collapse-6' }
                            },
                            [
                                bs.span({ style: bs.helpers.srOnly }, 'Toggle navigation'),
                                bs.span({ style: bs.navStyles.iconBar }),
                                bs.span({ style: bs.navStyles.iconBar }),
                                bs.span({ style: bs.navStyles.iconBar })
                            ]
                        ),
                        bs.navbarBrand({ href: 'javascript:void(0)' }, 'Brand')
                    ]),
                    bs.navbarCollapse({ id: 'bs-example-navbar-collapse-6' }, [
                        bs.navbarNav({}, [
                            bs.navbarNavItem({ active: true }, bs.a({ href: 'javascript:void(0)' }, 'Home')),
                            bs.navbarNavItem({}, bs.a({ href: 'javascript:void(0)' }, 'Link')),
                            bs.navbarNavItem({}, bs.a({ href: 'javascript:void(0)' }, 'Link'))
                        ])
                    ])
                ])
            ])
        ]),
        bs.figure({ style: styles.highlight }, pre({}, bs.code({ style: langJs }, [
            `bs.navbar({ fixed: bs.NavbarFixed.Top }, [`, bs.e({ tag: 'br' }),
            `    bs.container({ fluid: true }, [`, bs.e({ tag: 'br' }),
            `        ...`, bs.e({ tag: 'br' }),
            `    ])`, bs.e({ tag: 'br' }),
            `])`
        ]))),
        bs.e({ style: [styles.bsCallout, styles.bsCalloutDanger], attrs: { id: 'callout-navbar-fixed-top-padding' } }, [
            bs.h4({}, [`Overflowing content`]),
            bs.p({}, [
                `The fixed navbar will overlay your other content, unless you add padding to the top of the `, bs.code({}, '<body>'),
                `. Try out your own values or use our snippet below. Tip: By default, the navbar is 50px high.`
            ])
        ]),
    ];
}

function fixedBottom(): b.IBobrilChildren {
    return [
        b.anchor(bs.h2({ attrs: { id: 'navbar-fixed-bottom' } }, 'Fixed to bottom')),
        bs.p({}, [
            `Set the `, bs.code({}, 'fixed'), ` input data property of `, bs.code({}, 'navbar'), ` to `,
            bs.code({}, 'bs.NavbarFixed.Bottom'),
            ` and include a `, bs.code({}, 'bs.container({}, ...)'),
            ` or `, bs.code({}, 'bs.container({ fluid: true }, ...)'), ` to center and pad navbar content.`
        ]),
        bs.e({ style: [styles.bsExample, styles.bsNavbarBottomExample] }, [
            bs.navbar({ fixed: bs.NavbarFixed.Bottom }, [
                bs.container({ fluid: true }, [
                    bs.navbarHeader({}, [
                        bs.button(
                            {
                                navbar: true,
                                navbarCollapse: { target: '#bs-example-navbar-collapse-7' }
                            },
                            [
                                bs.span({ style: bs.helpers.srOnly }, 'Toggle navigation'),
                                bs.span({ style: bs.navStyles.iconBar }),
                                bs.span({ style: bs.navStyles.iconBar }),
                                bs.span({ style: bs.navStyles.iconBar })
                            ]
                        ),
                        bs.navbarBrand({ href: 'javascript:void(0)' }, 'Brand')
                    ]),
                    bs.navbarCollapse({ id: 'bs-example-navbar-collapse-7' }, [
                        bs.navbarNav({}, [
                            bs.navbarNavItem({ active: true }, bs.a({ href: 'javascript:void(0)' }, 'Home')),
                            bs.navbarNavItem({}, bs.a({ href: 'javascript:void(0)' }, 'Link')),
                            bs.navbarNavItem({}, bs.a({ href: 'javascript:void(0)' }, 'Link'))
                        ])
                    ])
                ])
            ])
        ]),
        bs.figure({ style: styles.highlight }, pre({}, bs.code({ style: langJs }, [
            `bs.navbar({ fixed: bs.NavbarFixed.Bottom }, [`, bs.e({ tag: 'br' }),
            `    bs.container({ fluid: true }, [`, bs.e({ tag: 'br' }),
            `        ...`, bs.e({ tag: 'br' }),
            `    ])`, bs.e({ tag: 'br' }),
            `])`
        ]))),
        bs.e({ style: [styles.bsCallout, styles.bsCalloutDanger], attrs: { id: 'callout-navbar-fixed-bottom-padding' } }, [
            bs.h4({}, [`Overflowing content`]),
            bs.p({}, [
                `The fixed navbar will overlay your other content, unless you add padding to the bottom of the `, bs.code({}, '<body>'),
                `. Try out your own values or use our snippet below. Tip: By default, the navbar is 50px high.`
            ])
        ]),

    ];
}

function staticTop(): b.IBobrilChildren {
    return [
        b.anchor(bs.h2({ attrs: { id: 'navbar-static-top' } }, 'Static top')),
        bs.p({}, [
            `Create a full-width navbar that scrolls away with the page by setting the `, bs.code({}, 'static'),
            ` input data property of `, bs.code({}, 'navbar'), ` to `, bs.code({}, 'bs.NavbarStatic.Top'),
            ` and include a `, bs.code({}, 'bs.container({}, ...)'),
            ` or `, bs.code({}, 'bs.container({ fluid: true }, ...)'), ` to center and pad navbar content.`
        ]),
        bs.e({ style: [styles.bsExample, styles.bsNavbarTopExample] }, [
            bs.navbar({ static: bs.NavbarStatic.Top }, [
                bs.container({ fluid: true }, [
                    bs.navbarHeader({}, [
                        bs.button(
                            {
                                navbar: true,
                                navbarCollapse: { target: '#bs-example-navbar-collapse-8' }
                            },
                            [
                                bs.span({ style: bs.helpers.srOnly }, 'Toggle navigation'),
                                bs.span({ style: bs.navStyles.iconBar }),
                                bs.span({ style: bs.navStyles.iconBar }),
                                bs.span({ style: bs.navStyles.iconBar })
                            ]
                        ),
                        bs.navbarBrand({ href: 'javascript:void(0)' }, 'Brand')
                    ]),
                    bs.navbarCollapse({ id: 'bs-example-navbar-collapse-8' }, [
                        bs.navbarNav({}, [
                            bs.navbarNavItem({ active: true }, bs.a({ href: 'javascript:void(0)' }, 'Home')),
                            bs.navbarNavItem({}, bs.a({ href: 'javascript:void(0)' }, 'Link')),
                            bs.navbarNavItem({}, bs.a({ href: 'javascript:void(0)' }, 'Link'))
                        ])
                    ])
                ])
            ])
        ]),
        bs.figure({ style: styles.highlight }, pre({}, bs.code({ style: langJs }, [
            `bs.navbar({ static: bs.NavbarStatic.Top }, [`, bs.e({ tag: 'br' }),
            `    bs.container({ fluid: true }, [`, bs.e({ tag: 'br' }),
            `        ...`, bs.e({ tag: 'br' }),
            `    ])`, bs.e({ tag: 'br' }),
            `])`
        ])))
    ];
}

function inverted(): b.IBobrilChildren {
    return [
        b.anchor(bs.h2({ attrs: { id: 'navbar-inverted' } }, 'Inverted navbar')),
        bs.p({}, [
            `Modify the look of the navbar by setting `, bs.code({}, 'inverse'), ` input data property of `, bs.code({}, 'navbar'),
            ` to `, bs.code({}, 'true'), `.`
        ]),
        bs.e({ style: [styles.bsExample, styles.bsNavbarTopExample] }, [
            bs.navbar({ inverse: true }, [
                bs.container({ fluid: true }, [
                    bs.navbarHeader({}, [
                        bs.button(
                            {
                                navbar: true,
                                navbarCollapse: { target: '#bs-example-navbar-collapse-9' }
                            },
                            [
                                bs.span({ style: bs.helpers.srOnly }, 'Toggle navigation'),
                                bs.span({ style: bs.navStyles.iconBar }),
                                bs.span({ style: bs.navStyles.iconBar }),
                                bs.span({ style: bs.navStyles.iconBar })
                            ]
                        ),
                        bs.navbarBrand({ href: 'javascript:void(0)' }, 'Brand')
                    ]),
                    bs.navbarCollapse({ id: 'bs-example-navbar-collapse-9' }, [
                        bs.navbarNav({}, [
                            bs.navbarNavItem({ active: true }, bs.a({ href: 'javascript:void(0)' }, 'Home')),
                            bs.navbarNavItem({}, bs.a({ href: 'javascript:void(0)' }, 'Link')),
                            bs.navbarNavItem({}, bs.a({ href: 'javascript:void(0)' }, 'Link'))
                        ])
                    ])
                ])
            ])
        ]),
        bs.figure({ style: styles.highlight }, pre({}, bs.code({ style: langJs }, [
            `bs.navbar({ inverse: true }, [`, bs.e({ tag: 'br' }),
            `    ...`, bs.e({ tag: 'br' }),
            `])`
        ])))
    ];
}
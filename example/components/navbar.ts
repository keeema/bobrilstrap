import * as b from 'bobril';
import {
    e, p, h2, h4, helpers, strong, ol, li, OlType, a, navbar, container, navbarHeader, button, span, navStyles, navbarBrand,
    navbarCollapse, navbarNav, navbarNavItem, dropdown, dropdownMenu, dropdownItem, form, formGroup, inputText, figure, code
} from '../../index';
import { styles } from '../bsexample/css';
import { pre, langJs } from '../prettify/pre';
import { section } from '../common/section';

export const navbarPage = b.createVirtualComponent({
    render(_ctx: b.IBobrilCtx, me: b.IBobrilNode) {
        me.children = section(
            {
                header: 'Navbar',
                id: 'navbar',
                lead: []
            },
            [
                defaultNavbar()
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
        e({ style: [styles.bsCallout, styles.bsCalloutDanger], attrs: { id: 'callout-navbar-overflow' } }, [
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

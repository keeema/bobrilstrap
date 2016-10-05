import * as b from 'bobril';
import {
    container, a, Target, navbar, navbarHeader, navStyles, navbarBrand, navbarCollapse, navbarNav, navbarNavItem,
    span, helpers, button, NavbarStatic
} from '../index';
import { styles } from './bsexample/css';
import { prettify } from './prettify/prettify';

export const masterPage = b.createVirtualComponent({
    render(ctx: b.IBobrilCtx, me: b.IBobrilNode) {
        me.children = [
            getNavigation(),
            ctx.data.activeRouteHandler()
        ];
    },
    postUpdateDom() {
        prettify.prettyPrint();
    }
});

function getNavigation(): b.IBobrilNode {
    return navbar({ static: NavbarStatic.Top, header: true, style: styles.bsDocsNav }, [
        container({}, [
            navbarHeader({}, [
                button(
                    {
                        navbar: true,
                        navbarCollapse: { target: '#bs-navbar' }
                    },
                    [
                        span({ style: helpers.srOnly }, 'Toggle navigation'),
                        span({ style: navStyles.iconBar }),
                        span({ style: navStyles.iconBar }),
                        span({ style: navStyles.iconBar })
                    ]
                ),
                b.link(navbarBrand({ href: 'javascript:void(0)' }, 'Bobrilstrap'), 'bobrilstrap')
            ]),
            navbarCollapse({ id: 'bs-navbar' }, [
                navbarNav({}, [
                    navbarNavItem(
                        { active: b.isActive('css') },
                        b.link(a({ href: 'javascript:void(0)' }, 'CSS'), 'css')),
                    navbarNavItem(
                        { active: b.isActive('components') },
                        b.link(a({ href: 'javascript:void(0)' }, 'Components'), 'components')),
                ]),
                navbarNav({ style: navStyles.navbarRight }, [
                    navbarNavItem({}, a({ href: texts.githubLink, target: Target.Blank }, texts.gitHub)),
                    navbarNavItem({}, a({ href: texts.bobrilLink, target: Target.Blank }, texts.bobril)),
                    navbarNavItem({}, a({ href: texts.bootsrapLink, target: Target.Blank }, texts.bootstrap))
                ])
            ])
        ])
    ]);


    // return element(
    //     { tag: 'header', style: [styles.navbar, styles.navbarStaticTop, styles.bsDocsNav], attrs: { id: 'top', role: 'banner' } },
    //     container({}, [
    //         element(
    //             { style: styles.navbarHeader },
    //             b.link(a({ style: styles.navbarBrand }, texts.bobrilstrap), 'bobrilstrap')
    //         ),
    //         element({ tag: 'nav', style: [styles.collapse, styles.navbarCollapse], attrs: { id: 'bs-navbar' } }, [
    //             element({ tag: 'ul', style: [styles.nav, styles.navbarNav] }, [
    //                 element({ tag: 'li' }, b.link(element({ tag: 'a' }, texts.css), 'css')),
    //                 element({ tag: 'li' }, b.link(element({ tag: 'a' }, texts.components), 'components'))
    //                 // element({ tag: 'li' }, b.link(element({ tag: 'a' }, texts.javaScript), 'javascript'))

    //             ]),
    //             element({ tag: 'ul', style: [styles.nav, styles.navbarNav, styles.navbarRight] }, [
    //                 element({ tag: 'li' }, a({ href: texts.githubLink, target: Target.Blank }, texts.gitHub)),
    //                 element({ tag: 'li' }, a({ href: texts.bootsrapLink, target: Target.Blank }, texts.bootstrap)),
    //                 element({ tag: 'li' }, a({ href: texts.bobrilLink, target: Target.Blank }, texts.bobril))
    //             ])
    //         ])
    //     ])
    // );
}

const texts = {
    bobrilstrap: 'Bobrilstrap',
    bootstrap: 'Bootstrap',
    bootsrapLink: 'http://getbootstrap.com/',
    bobril: 'Bobril',
    bobrilLink: 'https://github.com/Bobris/Bobril',
    css: 'CSS',
    components: 'Components',
    gitHub: 'GitHub',
    githubLink: 'https://github.com/keeema/bobrilstrap',
    javaScript: 'JavaScript'

};
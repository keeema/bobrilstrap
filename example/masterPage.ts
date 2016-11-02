import * as b from 'bobril';
import * as bs from '../index';
import { styles } from './bsexample/css';
import { prettify } from './prettify/prettify';

export const masterPage = b.createVirtualComponent({
    render(ctx: b.IBobrilCtx, me: b.IBobrilNode) {
        me.children = [
            getNavigation(),
            ctx.data.activeRouteHandler(),
            getFooter()
        ];
    },
    postUpdateDom() {
        prettify.prettyPrint();
    }
});

function getNavigation(): b.IBobrilNode {
    return bs.navbar({ static: bs.NavbarStatic.Top, header: true, style: styles.bsDocsNav }, [
        bs.container({}, [
            bs.navbarHeader({}, [
                bs.button(
                    {
                        navbar: true,
                        navbarCollapse: { target: '#bs-navbar' }
                    },
                    [
                        bs.span({ style: bs.helpers.srOnly }, 'Toggle navigation'),
                        bs.span({ style: bs.navStyles.iconBar }),
                        bs.span({ style: bs.navStyles.iconBar }),
                        bs.span({ style: bs.navStyles.iconBar })
                    ]
                ),
                b.link(bs.navbarBrand({ href: 'javascript:void(0)' }, 'Bobrilstrap'), 'bobrilstrap')
            ]),
            bs.navbarCollapse({ id: 'bs-navbar' }, [
                bs.navbarNav({}, [
                    bs.navbarNavItem(
                        { active: b.isActive('css') },
                        b.link(bs.a({ href: 'javascript:void(0)' }, 'CSS'), 'css')),
                    bs.navbarNavItem(
                        { active: b.isActive('components') },
                        b.link(bs.a({ href: 'javascript:void(0)' }, 'Components'), 'components')),
                ]),
                bs.navbarNav({ style: bs.navStyles.navbarRight }, [
                    bs.navbarNavItem({}, bs.a({ href: texts.githubLink, target: bs.Target.Blank }, texts.gitHub)),
                    bs.navbarNavItem({}, bs.a({ href: texts.bobrilLink, target: bs.Target.Blank }, texts.bobril)),
                    bs.navbarNavItem({}, bs.a({ href: texts.bootsrapLink, target: bs.Target.Blank }, texts.bootstrap))
                ])
            ])
        ])
    ]);
}

function getFooter(): b.IBobrilChildren {
    return [
        bs.e({ tag: 'footer', style: styles.bsDocsFooter }, [
            bs.container({}, [
                bs.ul({ style: styles.bsDocsFooterLinks }, [
                    bs.li({}, bs.a({ href: texts.githubLink, target: bs.Target.Blank }, texts.gitHub)),
                    bs.li({}, bs.a({ href: texts.bobrilLink, target: bs.Target.Blank }, texts.bobril)),
                    bs.li({}, bs.a({ href: texts.bootsrapLink, target: bs.Target.Blank }, texts.bootstrap))
                ]),
                bs.p({}, [
                    `Written by `, bs.a({ href: texts.twitterLink, target: bs.Target.Blank }, texts.twitter), ` .
                    Code licensed `, bs.a({ href: texts.mitLink, target: bs.Target.Blank }, texts.mit), `.`
                ])
            ])
        ])
    ];
}

const texts = {
    bobrilstrap: 'Bobrilstrap',
    bootstrap: 'Bootstrap',
    bootsrapLink: 'http://getbootstrap.com/',
    bobril: 'Bobril',
    bobrilLink: 'https://github.com/Bobris/Bobril',
    css: 'CSS',
    components: 'Components',
    javaScript: 'JavaScript',
    gitHub: 'GitHub',
    githubLink: 'https://github.com/keeema/bobrilstrap',
    twitter: 'keeema_',
    twitterLink: 'https://twitter.com/keeema_',
    mit: 'MIT',
    mitLink: 'https://github.com/keeema/bobrilstrap/blob/master/LICENSE'
};
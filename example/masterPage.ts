import prettify from './prettify/prettify';
import * as b from 'bobril';
import { container, element, row, col, Size, a, Target } from '../index';
import { styles } from './bsexample/css';

export default b.createVirtualComponent({
    render(ctx: b.IBobrilCtx, me: b.IBobrilNode) {
        me.children = [
            getNavigation(),
            ctx.data.activeRouteHandler()
        ];
    },
    postUpdateDom() {
        prettify.prettyPrint();
    }
})

function getNavigation(): b.IBobrilNode {
    return element(
        { tag: 'header', styles: [styles.navbar, styles.navbarStaticTop, styles.bsDocsNav], attrs: { id: 'top', role: 'banner' } },
        container({}, [
            element(
                { styles: styles.navbarHeader },
                b.link(a({ styles: styles.navbarBrand }, texts.bobrilstrap), 'bobrilstrap')
            ),
            element({ tag: 'nav', styles: [styles.collapse, styles.navbarCollapse], attrs: { id: 'bs-navbar' } }, [
                element({ tag: 'ul', styles: [styles.nav, styles.navbarNav] }, [
                    element({ tag: 'li' }, b.link(element({ tag: 'a' }, texts.css), 'css')),
                    //element({ tag: 'li' }, b.link(element({ tag: 'a' }, texts.components), 'components')),
                    //element({ tag: 'li' }, b.link(element({ tag: 'a' }, texts.javaScript), 'javascript'))

                ]),
                element({ tag: 'ul', styles: [styles.nav, styles.navbarNav, styles.navbarRight] }, [
                    element({ tag: 'li' }, a({ href: texts.githubLink, target: Target.blank }, texts.gitHub)),
                    element({ tag: 'li' }, a({ href: texts.bootsrapLink, target: Target.blank }, texts.bootstrap)),
                    element({ tag: 'li' }, a({ href: texts.bobrilLink, target: Target.blank }, texts.bobril))
                ])
            ])
        ])
    );
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
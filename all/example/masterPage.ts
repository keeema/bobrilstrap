import * as b from 'bobril';
import core from 'bobrilstrap-core';
import container from 'bobrilstrap-container';
import elem from 'bobrilstrap-element';
import Size from 'bobrilstrap-size';
import col from 'bobrilstrap-col';
import exampleCssCore, {styles} from './styles/css';
import exampleCssTheme from './styles/themeCss';

export default b.createVirtualComponent({
    render(ctx: b.IBobrilCtx, me: b.IBobrilNode) {
        me.children = [
            core({}),
            exampleCssCore({}),
            exampleCssTheme({}),
            getNavigation(),
            ctx.data.activeRouteHandler()
        ];
    }
})

function getNavigation(): b.IBobrilNode {
    return elem(
        { tag: 'header', styles: [styles.navbar, styles.navbarStaticTop, styles.bsDocsNav], attrs: { id: 'top', role: 'banner' } },
        container({}, [
            elem({ styles: styles.navbarHeader }, b.link(elem({ tag: 'a', styles: styles.navbarBrand }, texts.bobrilstrap), 'bobrilstrap')),
            elem({ tag: 'nav', styles: [styles.collapse, styles.navbarCollapse], attrs: { id: 'bs-navbar' } }, [
                elem({ tag: 'ul', styles: [styles.nav, styles.navbarNav] }, [
                    elem({ tag: 'li' }, b.link(elem({ tag: 'a' }, texts.css), 'css')),
                    elem({ tag: 'li' }, b.link(elem({ tag: 'a' }, texts.components), 'components')),
                    elem({ tag: 'li' }, b.link(elem({ tag: 'a' }, texts.javaScript), 'javascript'))

                ]),
                elem({ tag: 'ul', styles: [styles.nav, styles.navbarNav, styles.navbarRight] }, [
                    elem({ tag: 'li' }, elem({ tag: 'a', attrs: { href: texts.githubLink, target: '_blank' } }, texts.gitHub)),
                    elem({ tag: 'li' }, elem({ tag: 'a', attrs: { href: texts.bootsrapLink, target: '_blank' } }, texts.bootstrap))
                ])
            ])
        ])
    );
}

const texts = {
    bobrilstrap: 'Bobrilstrap',
    bootstrap: 'Bootstrap',
    bootsrapLink: 'http://getbootstrap.com/',
    css: 'CSS',
    components: 'Components',
    gitHub: 'GitHub',
    githubLink: 'https://github.com/keeema/bobrilstrap',
    javaScript: 'JavaScript'

};
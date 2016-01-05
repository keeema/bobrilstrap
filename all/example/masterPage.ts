import * as b from 'bobril';
import core from 'bobrilstrap-core';
import container from 'bobrilstrap-container';
import tag from 'bobrilstrap-tag';
import col, { DeviceSize } from 'bobrilstrap-col';
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
    return tag(
        { tag: 'header', styles: [styles.navbar, styles.navbarStaticTop, styles.bsDocsNav], attrs: { id: 'top', role: 'banner' } },
        container({}, [
            tag({ styles: styles.navbarHeader }, b.link(tag({ tag: 'a', styles: styles.navbarBrand }, texts.bobrilstrap), 'bobrilstrap')),
            tag({ tag: 'nav', styles: [styles.collapse, styles.navbarCollapse], attrs: { id: 'bs-navbar' } }, [
                tag({ tag: 'ul', styles: [styles.nav, styles.navbarNav] }, [
                    tag({ tag: 'li' }, b.link(tag({ tag: 'a' }, texts.css), 'css')),
                    tag({ tag: 'li' }, b.link(tag({ tag: 'a' }, texts.components), 'components')),
                    tag({ tag: 'li' }, b.link(tag({ tag: 'a' }, texts.javaScript), 'javascript'))

                ]),
                tag({ tag: 'ul', styles: [styles.nav, styles.navbarNav, styles.navbarRight] }, [
                    tag({ tag: 'li' }, tag({ tag: 'a', attrs: { href: texts.githubLink, target: '_blank' } }, texts.gitHub)),
                    tag({ tag: 'li' }, tag({ tag: 'a', attrs: { href: texts.bootsrapLink, target: '_blank' } }, texts.bootstrap))
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
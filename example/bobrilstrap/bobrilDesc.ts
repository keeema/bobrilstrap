import * as b from 'bobril';
import header from '../common/docsHeader';
import { e, p, ul, li, code, figure, span, a, Target, pre } from '../../index';
import prettifyPre, { langJs } from '../prettify/pre';
import { styles } from '../bsexample/css';
import section from '../common/section';

export default b.createVirtualComponent({
    init() {
        document.title = 'Bobrilstrap';
    },
    render(ctx: b.IBobrilCtx, me: b.IBobrilNode) {
        me.children = [
            section(
                {
                    id: 'bobril',
                    header: 'Bobril',
                    lead: [
                        `Bobril is a component-oriented framework inspired by React and Mithril. It combines advantages from both of them. 
                        It is fast, low size framework with rendering based on Virtual DOM. The main focus is on speed and simplicity of 
                        code generation. Bobril is about 8x faster than react (see vdom-benchmark). For more details visit `,
                        a({ href: 'https://github.com/Bobris/Bobril' }, 'project pages'), ' or ',
                        a({ href: 'http://www.codeproject.com/Articles/1044425/Bobril-I-Getting-Started' }, 'how-to articles'),
                        ' about bobril and additional frameworks.'

                    ]
                },
                [
                    e({ tag: 'h2', attrs: { id: 'bobril-getting-started' } }, 'Getting started'),
                    p({}, [
                        code({}, 'Bobril'), ' is distributed with ', code({}, 'bobril-build'),
                        ' system, both as ', code({}, 'npm'), ' packages. The easiest way to start is to download ',
                        a({ href: 'https://github.com/Bobris/Bobril' }, 'predefined simpleApp bobril application skeleton'),
                        ' and run following commands in the root of downloaded folder:']),
                    figure({ styles: styles.highlight }, pre({}, [
                        span({}, 'npm i bobril-build -g'), e({ tag: 'br' }),
                        span({}, 'npm i'), e({ tag: 'br' }),
                        span({}, 'bb')
                    ])),
                    p({}, [
                        'Now is everything prepared for developing a new application based on bobril and you can see the result on ',
                        a({ href: 'http://localhost:8080', target: Target.blank }, 'http://localhost:8080'), '.'
                    ])
                ])
        ];
    }
})
import * as b from 'bobril';
import { pre } from '../../index';
import * as bs from '../../index';
import { styles } from '../bsexample/css';
import { section } from '../common/section';

export const bobrilDesc = b.createVirtualComponent({
    init() {
        document.title = 'Bobrilstrap';
    },
    render(_ctx: b.IBobrilCtx, me: b.IBobrilNode) {
        me.children = [
            section(
                {
                    id: 'bobril',
                    header: 'Bobril',
                    lead: [
                        `Bobril is a component-oriented framework inspired by React and Mithril. It combines advantages from both of them. 
                        It is fast, low size framework with rendering based on Virtual DOM. The main focus is on speed and simplicity of 
                        code generation. Bobril is about 8x faster than react (see vdom-benchmark). For more details visit `,
                        bs.a({ href: 'https://github.com/Bobris/Bobril' }, 'project pages'), ' or ',
                        bs.a({ href: 'http://www.codeproject.com/Articles/1044425/Bobril-I-Getting-Started' }, 'how-to articles'),
                        ' about bobril and additional frameworks.'

                    ]
                },
                [
                    bs.e({ tag: 'h2', attrs: { id: 'bobril-getting-started' } }, 'Getting started'),
                    bs.p({}, [
                        bs.code({}, 'Bobril'), ' is distributed with ', bs.code({}, 'bobril-build'),
                        ' system, both as ', bs.code({}, 'npm'), ' packages. The easiest way to start is to download ',
                        bs.a(
                            { href: 'https://github.com/Bobris/bobril-build/tree/master/examples/simpleApp' },
                            'predefined simpleApp bobril application skeleton'),
                        ' and run following commands in the root of downloaded folder:']),
                    bs.figure({ style: styles.highlight }, pre({}, [
                        'npm i bobril-build -g', bs.e({ tag: 'br' }),
                        'bb'
                    ])),
                    bs.p({}, [
                        'Now is everything prepared for developing a new application based on bobril and you can see the result on ',
                        bs.a({ href: 'http://localhost:8080', target: bs.Target.Blank }, 'http://localhost:8080'), '.'
                    ])
                ])
        ];
    }
});
import * as b from 'bobril';
import * as bs from '../../index';
import * as prettify from '../prettify/pre';
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
                        ' system, both as ', bs.code({}, 'npm'), ' packages. It uses the npm packaging system, so init new ',
                        'package by following command in project folder to start development of an application:',
                        bs.figure({ style: styles.highlight }, bs.pre({}, [
                            'npm init'
                        ])),
                        'Now install the ', bs.code({}, 'bobril-build'), ' globally (this step is needed only once on machine):',
                        bs.figure({ style: styles.highlight }, bs.pre({}, [
                            'npm i bobril-build -g'
                        ])),
                        'Install bobril as a dependency of your project:',
                        bs.figure({ style: styles.highlight }, bs.pre({}, [
                            'npm i bobril --save'
                        ])),
                        'Create a file ', bs.italics({}, 'index.ts'), ' containing: ',
                        bs.figure({ style: styles.highlight }, prettify.pre({}, bs.code({ style: prettify.langJs }, [
                            `import * as b from 'bobril';`, bs.e({ tag: 'br' }),
                            ``, bs.e({ tag: 'br' }),
                            `b.init(() => 'Hello World!');`
                        ]))),
                        'Finally run ', bs.code({}, 'bobril-build'), ' by command:',
                        bs.figure({ style: styles.highlight }, bs.pre({}, [
                            'bb'
                        ]))
                    ]),
                    bs.p({}, [
                        'Now is everything prepared for developing a new application based on bobril and you can see the result on ',
                        bs.a({ href: 'http://localhost:8080', target: bs.Target.Blank }, 'http://localhost:8080'), '. ',
                        'It is strongly recommanded to use ',
                        bs.a({ href: 'https://code.visualstudio.com', target: bs.Target.Blank }, 'Visual Studio Code'),
                        ' for development. More information about bobril on ',
                        bs.a({ href: 'https://github.com/Bobris/Bobril', target: bs.Target.Blank }, 'Bobril GitHub pages'), '.'
                    ])
                ])
        ];
    }
});
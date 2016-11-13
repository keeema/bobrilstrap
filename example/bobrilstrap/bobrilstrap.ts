import * as b from 'bobril';
import * as bs from '../../index';
import * as prettify from '../prettify/pre';
import { styles } from '../bsexample/css';
import { section } from '../common/section';

export const bobrilstrap = b.createVirtualComponent({
    render(_ctx: b.IBobrilCtx, me: b.IBobrilNode) {
        me.children = [
            section(
                {
                    id: 'bobrilstrap-installation',
                    header: 'Bobrilstrap installation'
                },
                [
                    bs.p({}, `To install bobrilstrap to your bobril application stop the running bobril-build and run following commands:`),
                    bs.figure({ style: styles.highlight }, bs.pre({}, bs.code({}, [
                        'npm i bobrilstrap --save', bs.e({ tag: 'br' }),
                        'bb'
                    ]))),
                    bs.p({}, [
                        'To initialize the bobrilstrap framework change the file ', bs.italics({}, 'index.ts'),
                        ' to look like following: '
                    ]),
                    bs.figure({ style: styles.highlight }, prettify.pre({}, bs.code({ style: prettify.langJs }, [
                        `import * as b from 'bobril';`, bs.e({ tag: 'br' }),
                        `import * as bs from 'bobrilstrap';`, bs.e({ tag: 'br' }),
                        ``, bs.e({ tag: 'br' }),
                        `bs.init();`, bs.e({ tag: 'br' }),
                        `b.init(() => bs.h1({}, 'Hello World!'));`
                    ]))),
                    bs.p({}, ['Now you can use all the bobrilstrap components provided by the ', bs.code({}, 'bobrilstrap'), ' package.'])
                ]),
            section(
                {
                    id: 'bobrilstrap-themes',
                    header: 'Themes'
                },
                [
                    bs.p({}, [
                        `To use a custom `, bs.code({}, 'Bootstrap'), ` theme just add the theme files as standard `, bs.code({}, 'bobril'),
                        ` application assets after the `, bs.code({}, 'bobrilstrap'), ` initialization. Example:`
                    ]),
                    bs.figure({ style: styles.highlight }, prettify.pre({}, bs.code({ style: prettify.langJs }, [
                        `b.asset('node_modules/myTheme/bootstrap.min.css');`
                    ])))
                ])
        ];
    }
});
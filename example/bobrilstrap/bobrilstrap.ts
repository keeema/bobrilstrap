import * as b from 'bobril';
import * as bs from '../../index';
import { pre, langJs } from '../prettify/pre';
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
                    bs.figure({ style: styles.highlight }, pre({}, bs.code({ style: langJs }, [
                        'npm i bobrilstrap --save', bs.e({ tag: 'br' }),
                        'bb'
                    ]))),
                    bs.p({}, [
                        'To initialize the bobrilstrap framework add following lines to the ',
                        bs.code({}, 'simpleApp/src/app.ts'), ' file:'
                    ]),
                    bs.figure({ style: styles.highlight }, pre({}, bs.code({ style: langJs }, [
                        `import * as bs from 'bobrilstrap';`, bs.e({ tag: 'br' }),
                        'bs.init();', bs.e({ tag: 'br' })
                    ]))),
                    bs.p({}, ['Now you can use the bobrilstrap components provided by the ', bs.code({}, 'bobrilstrap'), ' package.'])
                ])
        ];
    }
});
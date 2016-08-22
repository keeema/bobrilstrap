import * as b from 'bobril';
import { e, p, code, figure, } from '../../index';
import { pre, langJs } from '../prettify/pre';
import { styles } from '../bsexample/css';
import { section } from '../common/section';

export const bobrilstrap = b.createVirtualComponent({
    render(ctx: b.IBobrilCtx, me: b.IBobrilNode) {
        me.children = [
            section(
                {
                    id: 'bobrilstrap-installation',
                    header: 'Bobrilstrap installation'
                },
                [
                    p({}, `To install bobrilstrap to your bobril application stop the running bobril-build and run following commands:`),
                    figure({ style: styles.highlight }, pre({}, code({ style: langJs }, [
                        'npm i bobrilstrap --save', e({ tag: 'br' }),
                        'bb'
                    ]))),
                    p({}, [
                        'To initialize the bobrilstrap framework add following lines to the ',
                        code({}, 'simpleApp/src/app.ts'), ' file:'
                    ]),
                    figure({ style: styles.highlight }, pre({}, code({ style: langJs }, [
                        `import * as bs from 'bobrilstrap';`, e({ tag: 'br' }),
                        'bs.init();', e({ tag: 'br' })
                    ]))),
                    p({}, ['Now you can use the bobrilstrap components provided by the ', code({}, 'bobrilstrap'), ' package.']),
                ])
        ];
    }
})
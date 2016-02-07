import * as b from 'bobril';
import header from '../common/docsHeader';
import { e, p, ul, li, code, figure, span, a, Target, pre } from '../../index';
import prettifyPre, { langJs } from '../prettify/pre';
import { styles } from '../bsexample/css';
import section from '../common/section';

export default b.createVirtualComponent({
    render(ctx: b.IBobrilCtx, me: b.IBobrilNode) {
        me.children = [
            section(
                {
                    id: 'bobrilstrap-installation',
                    header: 'Bobrilstrap installation'
                },
                [
                    p({}, `To install bobrilstrap to your bobril application stop the running bobril-build and run following commands:`),
                    figure({ styles: styles.highlight }, prettifyPre({}, code({ styles: langJs }, [
                        span({}, 'npm i bobrilstrap --save'), e({ tag: 'br' }),
                        span({}, 'bb')
                    ]))),
                    p({}, [
                        'To initialize the bobrilstrap framework add following lines to the ',
                        code({}, 'simpleApp/src/app.ts'), ' file:'
                    ]),
                    figure({ styles: styles.highlight }, prettifyPre({}, code({ styles: langJs }, [
                        span({}, `import * as bs from 'bobrilstrap';`), e({ tag: 'br' }),
                        span({}, 'bs.init();'), e({ tag: 'br' })
                    ]))),
                    p({}, ['Now you can use the bobrilstrap components provided by the ', code({}, 'bobrilstrap'), ' package.']),
                ])
        ];
    }
})
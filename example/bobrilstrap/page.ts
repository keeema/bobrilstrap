import * as b from 'bobril';
import { header } from '../common/docsHeader';
import { bobrilDesc } from './bobrilDesc';
import { bobrilstrap } from './bobrilstrap';
import { docsContainer } from '../common/docsContainer';

export const bobrilstrapPage = b.createVirtualComponent({
    render(ctx: b.IBobrilCtx, me: b.IBobrilNode) {
        me.children = [
            header(texts),
            docsContainer({}, [
                bobrilDesc(),
                bobrilstrap()
            ])
        ];
    }
})

const texts = {
    header: 'Bobrilstrap',
    headerContent: `Bobril wrapper of the most popular HTML, CSS, and JS framework for developing responsive,
     mobile first projects on the web - Bootstrap.`
};
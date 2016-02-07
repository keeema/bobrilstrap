import * as b from 'bobril';
import { styles } from '../bsexample/css';
import header from '../common/docsHeader';
import docsContainer from '../common/docsContainer';
import overview from './overview';
import grid from './grid';

export default b.createVirtualComponent({
    id: 'bobrilstrap-css',
    init() {
        document.title = 'Bobrilstrap - CSS';
    },
    render(ctx: b.IBobrilCtx, me: b.IBobrilNode) {
        me.children = [
            header(texts),
            docsContainer({}, [
                overview(),
                grid()
            ])
        ];
    }
})

const texts = {
    header: 'CSS',
    headerContent: `Global CSS settings, fundamental HTML elements styled and enhanced with extensible
     classes, and an advanced grid system. Everything wrapped to bobril components.`
};
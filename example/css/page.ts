import * as b from 'bobril';
import { styles } from '../bsexample/css';
import header from '../common/docsHeader';
import docsContainer from '../common/docsContainer';
import overview from './overview';
import grid from './grid';
import typography from './typography';
import code from './code';
import tables from './tables';
import forms from './forms';
import buttons from './buttons';

export default b.createVirtualComponent({
    id: 'bobrilstrap-css',
    init() {
        document.title = 'CSS - Bobrilstrap';
    },
    render(ctx: b.IBobrilCtx, me: b.IBobrilNode) {
        me.children = [
            header(texts),
            docsContainer({}, [
                overview(),
                grid(),
                typography(),
                code(),
                tables(),
                forms(),
                buttons()
            ])
        ];
    }
})

const texts = {
    header: 'CSS',
    headerContent: `Global CSS settings, fundamental HTML elements styled and enhanced with extensible
     classes, and an advanced grid system. Everything wrapped to bobril components.`
};
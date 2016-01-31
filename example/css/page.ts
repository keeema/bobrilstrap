import * as b from 'bobril';
import { styles } from '../bsexample/css';
import header from '../common/header';
import docsContainer from '../common/docsContainer';
import overview from './overview';

export default b.createVirtualComponent({
    render(ctx: b.IBobrilCtx, me: b.IBobrilNode) {
        me.children = [
            header(texts),
            docsContainer({}, [
                overview()
            ])
        ];
    }
})

const texts = {
    header: 'CSS',
    headerContent: `Global CSS settings, fundamental HTML elements styled and enhanced with extensible
     classes, and an advanced grid system.`
};
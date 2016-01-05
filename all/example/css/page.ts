import * as b from 'bobril';
import container from 'bobrilstrap-container';
import row from 'bobrilstrap-row';
import tag from 'bobrilstrap-tag';
import col, { DeviceSize } from 'bobrilstrap-col';
import { styles } from '../styles/css';
import header from '../common/header';

export default b.createVirtualComponent({
    render(ctx: b.IBobrilCtx, me: b.IBobrilNode) {
        me.children = [
            header(texts)
        ];
    }
})

const texts = {
    header: 'CSS',
    headerContent: `Global CSS settings, fundamental HTML elements styled and enhanced with extensible
     classes, and an advanced grid system.`
};
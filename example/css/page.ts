import * as b from 'bobril';
import { header } from '../common/docsHeader';
import { docsContainer } from '../common/docsContainer';
import { overview } from './overview';
import { grids } from './grids';
import { typographyPage } from './typography';
import { codes } from './codes';
import { tables } from './tables';
import { forms } from './forms';
import { buttons } from './buttons';
import { images } from './images';
import { helpersPage } from './helpers';
import { responsive } from './responsive';

export const css = b.createVirtualComponent({
    id: 'bobrilstrap-css',
    init() {    
        document.title = 'CSS - Bobrilstrap';
    },
    render(ctx: b.IBobrilCtx, me: b.IBobrilNode) {
        me.children = [
            header(texts),
            docsContainer({}, [
                overview(),
                grids(),
                typographyPage(),
                codes(),
                tables(),
                forms(),
                buttons(),
                images(),
                helpersPage(),
                responsive()
            ])
        ];
    }
})

const texts = {
    header: 'CSS',
    headerContent: `Global CSS settings, fundamental HTML elements styled and enhanced with extensible
     classes, and an advanced grid system. Everything wrapped to bobril components.`
};
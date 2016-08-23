import * as b from 'bobril';
import { header } from '../common/docsHeader';
import { docsContainer } from '../common/docsContainer';
import { glyphicons } from './glyphicons';
import { dropdowns } from './dropdowns';
import { buttonGroups } from './buttonGroups';
import { buttonDropdowns } from './buttonDropdowns';

export const components = b.createVirtualComponent({
    id: 'bobrilstrap-components',
    init() {
        document.title = 'Bobrilstrap - Components';
    },
    render(ctx: b.IBobrilCtx, me: b.IBobrilNode) {
        me.children = [
            header(texts),
            docsContainer({}, [
                glyphicons(),
                dropdowns(),
                buttonGroups(),
                buttonDropdowns()
            ])
        ];
    }
});

const texts = {
    header: 'Components',
    headerContent: `Over a dozen reusable components built to provide iconography, dropdowns,
     input groups, navigation, alerts, and much more.`
};
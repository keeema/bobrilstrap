import * as b from 'bobril';
import { header } from '../common/docsHeader';
import { docsContainer } from '../common/docsContainer';
import { modals } from './modals';
import { tooltips } from './tooltips';
import { popovers } from './popovers';
import { collapse } from './collapse';
import { affix } from './affix';

export const liveComponents = b.createVirtualComponent({
    id: 'bobrilstrap-javasctipt',
    init() {
        document.title = 'Bobrilstrap - Live components';
    },
    render(_ctx: b.IBobrilCtx, me: b.IBobrilNode) {
        me.children = [
            header(texts),
            docsContainer(
                {
                    id: 'live-components',
                    sidebar: {
                        topTargetId: 'live-components-top',
                        items: [
                            {
                                targetId: 'modals', title: 'Modals',
                                subs: []
                            },
                            {
                                targetId: 'tooltip', title: 'Tooltip',
                                subs: []
                            },
                            {
                                targetId: 'popover', title: 'Popover',
                                subs: []
                            },
                            {
                                targetId: 'collapse', title: 'Collapse',
                                subs: []
                            },
                            {
                                targetId: 'affix', title: 'Affix',
                                subs: []
                            },
                        ]
                    }
                },
                [
                    modals(),
                    tooltips(),
                    popovers(),
                    collapse(),
                    affix()
                ])
        ];
    }
});

const texts = {
    header: 'Live components',
    headerContent: `Bring Bobrilstrap's components to life. Easily include them all, or one by one.`
};
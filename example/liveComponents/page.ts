import * as b from 'bobril';
import { header } from '../common/docsHeader';
import { docsContainer } from '../common/docsContainer';
import { modals } from './modals';

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
                    id: 'liveComponents',
                    sidebar: {
                        items: [
                            {
                                targetId: 'modals', title: 'Modals',
                                subs: [
                                    { targetId: 'live-demo', title: 'Live demo' }
                                ]
                            },
                        ]
                    }
                },
                [
                    modals(),
                ])
        ];
    }
});

const texts = {
    header: 'Live components',
    headerContent: `Bring Bobrilstrap's components to life. Easily include them all, or one by one.`
};
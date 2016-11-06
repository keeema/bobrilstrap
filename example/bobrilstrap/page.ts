import * as b from 'bobril';
import { header } from '../common/docsHeader';
import { bobrilDesc } from './bobrilDesc';
import { bobrilstrap } from './bobrilstrap';
import { docsContainer } from '../common/docsContainer';

export const bobrilstrapPage = b.createVirtualComponent({
    render(_ctx: b.IBobrilCtx, me: b.IBobrilNode) {
        me.children = [
            header(texts),
            docsContainer(
                {
                    id: 'bobrilstrap',
                    sidebar: {
                        topTargetId: 'bobrilstrap-top',
                        main: true,
                        items: [
                            {
                                targetId: 'bobril', title: 'Bobril',
                                subs: []
                            },
                            {
                                targetId: 'bobrilstrap-installation', title: 'Bobrilstrap installation',
                                subs: [
                                ]
                            }
                        ]
                    }
                },
                [
                    bobrilDesc(),
                    bobrilstrap()
                ])
        ];
    }
});

const texts = {
    header: 'Bobrilstrap',
    headerContent: `Bobril wrapper of the most popular HTML, CSS, and JS framework for developing responsive,
     mobile first projects on the web - Bootstrap.`,
    iconText: 'BS'
};
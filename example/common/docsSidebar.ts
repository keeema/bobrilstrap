import * as b from 'bobril';
import * as bs from '../../index';
import { styles } from '../bsexample/css';
import { sideBarItems } from './sidebarItems';

export interface IItem {
    targetId: string;
    title: string;
    subs?: IItem[];
}

export interface IDocsSidebarData {
    children?: b.IBobrilChildren;
    items: IItem[];
    main?: boolean;
    topTargetId: string;
}

interface ICtx extends b.IBobrilCtx {
    data: IDocsSidebarData;
    sideBarSize: number;
}

export const docsSidebar = b.createVirtualComponent<IDocsSidebarData>({
    id: 'example-docs-sidebar',
    init(ctx: ICtx) {
        ctx.sideBarSize = 0;
        const onScrollListener = getScrollListener(ctx);
        b.addOnScroll(onScrollListener);
        b.addDisposable(ctx, () => b.removeOnScroll(onScrollListener));
    },
    render(ctx: ICtx, me: b.IBobrilNode) {
        me.children = bs.affix(
            { top: ctx.data.main ? 610 : 325, bottom: 260 },
            bs.e(
                {
                    tag: 'nav',
                    style: [
                        styles.bsDocsSidebar,
                        bs.hiddenStyles(bs.Device.Print),
                        bs.hiddenStyles(bs.Device.Sm),
                        bs.hiddenStyles(bs.Device.Xs)
                    ]
                },
                sideBarItems({ items: ctx.data.items, topTargetId: ctx.data.topTargetId })
            )
        );
    }
});

function getScrollListener(ctx: b.IBobrilCtx): (scrollInfo: b.IBobrilScroll) => void {
    return (scrollInfo: b.IBobrilScroll) => {
        if (!scrollInfo || scrollInfo.node)
            return;

        b.invalidate(ctx);
    };
}
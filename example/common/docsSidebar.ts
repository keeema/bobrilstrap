import * as b from 'bobril';
import { affixStyles } from '../../index';
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
}

interface ICtx extends b.IBobrilCtx {
    data: IDocsSidebarData;
}

export const docsSidebar = b.createVirtualComponent<IDocsSidebarData>({
    id: 'example-docs-sidebar',
    init(ctx: ICtx) {
        const onScrollListener = getScrollListener(ctx);
        b.addOnScroll(onScrollListener);
        b.addDisposable(ctx, () => b.removeOnScroll(onScrollListener));
    },
    render(ctx: ICtx, me: b.IBobrilNode) {
        const scrollTop  = document.documentElement.scrollTop || document.body.scrollTop;
        me.children = bs.e(
            {
                tag: 'nav',
                style: [
                    styles.bsDocsSidebar, bs.hiddenStyles(bs.Device.Print), bs.hiddenStyles(bs.Device.Sm), bs.hiddenStyles(bs.Device.Xs),
                    scrollTop < 300 ? affixStyles.affixTop : affixStyles.affix
                ]
            },
            sideBarItems({ items: ctx.data.items, isTop: true}));
    }
});

function getScrollListener(ctx: b.IBobrilCtx): (scrollInfo: b.IBobrilScroll) => void {
    return (scrollInfo: b.IBobrilScroll) => {
        if (!scrollInfo || scrollInfo.node)
            return;

        b.invalidate(ctx);
    };
}
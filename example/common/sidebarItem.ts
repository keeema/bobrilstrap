import * as b from 'bobril';
import * as bs from '../../index';
import { sideBarItems } from './sidebarItems';

export interface IItemData {
    targetId: string;
    nextId?: string;
    title: string;
    subs?: IItemData[];
}

interface ICtx extends b.IBobrilCtx {
    data: IItemData;
    top: number;
    bottom: number;
    active: boolean;
}

export const sideBarItem = b.createVirtualComponent<IItemData>({
    id: 'bs-example-sidebar-item',
    init(ctx: ICtx) {
        const onScrollListener = getScrollListener(ctx);
        b.addOnScroll(onScrollListener);
        b.addDisposable(ctx, () => b.removeOnScroll(onScrollListener));
    },
    render(ctx: ICtx, me: b.IBobrilNode) {
        me.children = bs.li(
            {
                active: ctx.active
            },
            [
                b.link(bs.a({}, ctx.data.title), ctx.data.targetId),
                !!ctx.data.subs && sideBarItems({ items: ctx.data.subs, nextId: ctx.data.nextId })
            ]
        );
    },
    postInitDom(ctx: ICtx) {
        handlePosition(ctx);
    }
});

export interface IItemsData {
    items?: IItemData[];
    nextId?: string;
    isTop?: boolean;
}

function getScrollListener(ctx: ICtx): (scrollInfo: b.IBobrilScroll) => void {
    return (scrollInfo: b.IBobrilScroll) => {
        if (!scrollInfo || scrollInfo.node)
            return;

        handlePosition(ctx);
    };
}

function handlePosition(ctx: ICtx) {
    const scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
    const topElement = document.getElementById(ctx.data.targetId);
    const top = topElement ? topElement.offsetTop : 0;
    let bottom = 0;
    if (ctx.data.nextId) {
        const nextElement = document.getElementById(ctx.data.nextId);
        const nextOffsetTop = nextElement ? nextElement.offsetTop + nextElement.clientHeight : document.body.scrollHeight;
        bottom = nextOffsetTop;
    } else {
        bottom = document.body.scrollHeight;
    }

    const active = scrollTop >= top && scrollTop < bottom;
    const changeState = active !== ctx.active;
    ctx.active = active;

    if (changeState) {
        b.invalidate(ctx);
    }
}
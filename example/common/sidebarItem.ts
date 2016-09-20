import * as b from 'bobril';
import { li, a } from '../../index';
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
        me.children = li(
            {
                active: ctx.active
            },
            [
                b.link(a({}, ctx.data.title), ctx.data.targetId),
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

interface IItemsCtx extends b.IBobrilCtx {
    data: IItemsData;
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
    const top = document.getElementById(ctx.data.targetId).offsetTop;
    let bottom = 0;
    if (ctx.data.nextId) {
        const nextElement = document.getElementById(ctx.data.nextId);
        bottom = nextElement.offsetTop + nextElement.clientHeight;
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
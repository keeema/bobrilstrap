import * as b from 'bobril';
import * as bs from '../../index';
import { styles } from '../bsexample/css';
import { sideBarItem, IItemData } from './sidebarItem';

export interface IItemsData {
    items: IItemData[];
    nextId?: string;
    isTop?: boolean;
}

interface IItemsCtx extends b.IBobrilCtx {
    data: IItemsData;
}

export const sideBarItems = b.createVirtualComponent<IItemsData>({
    id: 'bs-example-sidebar-items',
    render(ctx: IItemsCtx, me: b.IBobrilNode) {
        me.children = bs.ul({ style: [bs.navStyles.nav, ctx.data.isTop && styles.bsDocsSidenav] }, ctx.data.items.map(((item, i) => {
            const data = b.assign({ nextId: i < ctx.data.items.length - 1 ? ctx.data.items[i + 1].targetId : ctx.data.nextId }, item);
            return sideBarItem(data);
        })));
    }
});
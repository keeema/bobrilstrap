import * as b from "bobril";
import * as bs from "../../index";
import { styles } from "../bsexample/css";
import { sideBarItem, IItemData } from "./sidebarItem";

export interface IItemsData {
  items: IItemData[];
  nextId?: string;
  topTargetId?: string;
}

interface IItemsCtx extends b.IBobrilCtx {
  data: IItemsData;
}

export const sideBarItems = b.createDerivedComponent<IItemsData>(bs.Ul, {
  id: "bs-example-sidebar-items",
  render(ctx: IItemsCtx, me: b.IBobrilNode) {
    b.style(me, [
      bs.navStyles.nav,
      ctx.data.topTargetId && styles.bsDocsSidenav
    ]);
    me.children = [
      ...ctx.data.items.map((item, i) => {
        const data = b.assign(
          {
            nextId:
              i < ctx.data.items.length - 1
                ? ctx.data.items[i + 1].targetId
                : ctx.data.nextId
          },
          item
        );
        return sideBarItem(data);
      }),
      ctx.data.topTargetId &&
        sideBarItem({ targetId: ctx.data.topTargetId, title: "Back to top" })
    ];
  }
});

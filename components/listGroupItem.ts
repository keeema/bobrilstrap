import * as b from "bobril";
import { Li, ILiData } from "./li";
import {
  listGroupStyles,
  listGroupItemContextStyles,
  ListGroupItemContext
} from "./listGroup";

export interface IListGroupItemData extends ILiData {
  context?: ListGroupItemContext;
}

interface IListGroupItemCtx extends b.IBobrilCtx {
  data: IListGroupItemData;
}

export const ListGroupItem = b.createDerivedComponent<IListGroupItemData>(Li, {
  id: "bobrilstrap-listgroup-item",
  render(ctx: IListGroupItemCtx, me: b.IBobrilNode) {
    b.style(me, listGroupStyles.listGroupItem);
    b.style(
      me,
      ctx.data.context !== undefined &&
        listGroupItemContextStyles(ctx.data.context)
    );
  }
});

export default ListGroupItem;

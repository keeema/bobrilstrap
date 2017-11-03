import * as b from "bobril";
import { A, IAnchorData } from "./a";
import {
  listGroupStyles,
  listGroupItemContextStyles,
  ListGroupItemContext
} from "./listGroup";

export interface IListGroupItemLinkData extends IAnchorData {
  active?: boolean;
  disabled?: boolean;
  context?: ListGroupItemContext;
}

interface IListGroupItemLinkCtx extends b.IBobrilCtx {
  data: IListGroupItemLinkData;
}

export const ListGroupItemLink = b.createDerivedComponent<
  IListGroupItemLinkData
>(A, {
  id: "bobrilstrap-listgroup-item-link",
  render(ctx: IListGroupItemLinkCtx, me: b.IBobrilNode) {
    b.style(me, listGroupStyles.listGroupItem);
    b.style(me, !!ctx.data.active && listGroupStyles.active);
    b.style(me, !!ctx.data.disabled && listGroupStyles.disabled);
    b.style(
      me,
      ctx.data.context !== undefined &&
        listGroupItemContextStyles(ctx.data.context)
    );
  }
});

export default ListGroupItemLink;

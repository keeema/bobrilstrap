import * as b from "bobril";
import { Ul, IUlData } from "./ul";
import { createDictionary, IDictionary } from "./bobrilHelpers";

export interface IListGroupData extends IUlData {
  linkified?: boolean;
}

interface IListGroupCtx extends b.IBobrilCtx {
  data: IListGroupData;
}

export enum ListGroupItemContext {
  Success,
  Info,
  Warning,
  Danger
}

export const listGroupStyles = {
  listGroup: b.styleDef("list-group"),
  listGroupItem: b.styleDef("list-group-item"),
  listGroupItemHeading: b.styleDef("list-group-item-heading"),
  listGroupItemText: b.styleDef("list-group-item-text"),
  active: b.styleDef("active"),
  disabled: b.styleDef("disabled"),
  listGroupItemSuccess: b.styleDef("list-group-item-success"),
  listGroupItemInfo: b.styleDef("list-group-item-info"),
  listGroupItemWarning: b.styleDef("list-group-item-warning"),
  listGroupItemDanger: b.styleDef("list-group-item-danger")
};

export const listGroupItemContextStyles: IDictionary<
  ListGroupItemContext,
  b.IBobrilStyle
> = createDictionary<ListGroupItemContext, b.IBobrilStyle>();
listGroupItemContextStyles(
  ListGroupItemContext.Success,
  listGroupStyles.listGroupItemSuccess
);
listGroupItemContextStyles(
  ListGroupItemContext.Info,
  listGroupStyles.listGroupItemInfo
);
listGroupItemContextStyles(
  ListGroupItemContext.Warning,
  listGroupStyles.listGroupItemWarning
);
listGroupItemContextStyles(
  ListGroupItemContext.Danger,
  listGroupStyles.listGroupItemDanger
);

export const ListGroup = b.createDerivedComponent<IListGroupData>(Ul, {
  id: "bobrilstrap-listgroup",
  render(ctx: IListGroupCtx, me: b.IBobrilNode) {
    if (ctx.data.linkified) me.tag = "div";

    b.style(me, listGroupStyles.listGroup);
  }
});

export default ListGroup;

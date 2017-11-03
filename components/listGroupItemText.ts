import * as b from "bobril";
import { P, IParagraphData } from "./paragraph";
import { listGroupStyles } from "./listGroup";

export interface IListGroupItemTextData extends IParagraphData {}

interface IListGroupItemTextCtx extends b.IBobrilCtx {
  data: IListGroupItemTextData;
}

export const ListGroupItemText = b.createDerivedComponent<
  IListGroupItemTextData
>(P, {
  id: "bobrilstrap-listgroup-item-text",
  render(_ctx: IListGroupItemTextCtx, me: b.IBobrilNode) {
    b.style(me, listGroupStyles.listGroupItemText);
  }
});

export default ListGroupItemText;

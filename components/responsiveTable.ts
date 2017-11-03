import * as b from "bobril";
import { mergeToChildren } from "./bobrilHelpers";
import { Elem, IBaseData } from "./element";
import { Table, ITableData, tableStyles } from "./table";

export interface IResponsiveTableData extends IBaseData {
  table: ITableData;
}

interface ICtx extends b.IBobrilCtx {
  data: IResponsiveTableData;
}

export const ResponsiveTable = b.createDerivedComponent<
  IResponsiveTableData
>(Elem, {
  id: "bobrilstrap-responsive-table",
  render(ctx: ICtx, me: b.IBobrilNode) {
    b.style(me, tableStyles.responsive);
    mergeToChildren(me, Table(ctx.data.table));
  }
});

export default ResponsiveTable;

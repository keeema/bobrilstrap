import * as b from "bobril";
import { mergeToChildren } from "./bobrilHelpers";
import { Elem, IBaseData } from "./element";
import { THead, ITHeadData } from "./thead";
import { TBody, ITBodyData } from "./tbody";
import { Caption } from "./caption";
import { createDictionary, IDictionary } from "./bobrilHelpers";

export enum TableContext {
  Active,
  Success,
  Warning,
  Danger,
  Info
}

export const tableContextStyles: IDictionary<
  TableContext,
  b.IBobrilStyle
> = createDictionary<TableContext, b.IBobrilStyle>();
tableContextStyles(TableContext.Active, b.styleDef("active"));
tableContextStyles(TableContext.Success, b.styleDef("success"));
tableContextStyles(TableContext.Warning, b.styleDef("warning"));
tableContextStyles(TableContext.Danger, b.styleDef("danger"));
tableContextStyles(TableContext.Info, b.styleDef("info"));

export const tableStyles = {
  table: b.styleDef("table"),
  responsive: b.styleDef("table-responsive"),
  tableStriped: b.styleDef("table-striped"),
  tableBordered: b.styleDef("table-bordered"),
  tableHover: b.styleDef("table-hover"),
  tableCondensed: b.styleDef("table-condensed")
};

export interface ITableData extends IBaseData {
  striped?: boolean;
  bordered?: boolean;
  hover?: boolean;
  condensed?: boolean;

  caption?: string;

  head?: ITHeadData;
  body?: ITBodyData;
}

interface ICtx extends b.IBobrilCtx {
  data: ITableData;
}

export const Table = b.createDerivedComponent<ITableData>(Elem, {
  id: "bobrilstrap-table",
  render(ctx: ICtx, me: b.IBobrilNode) {
    me.tag = "table";
    b.style(me, tableStyles.table);
    b.style(me, !!ctx.data.striped && tableStyles.tableStriped);
    b.style(me, !!ctx.data.bordered && tableStyles.tableBordered);
    b.style(me, !!ctx.data.hover && tableStyles.tableHover);
    b.style(me, !!ctx.data.condensed && tableStyles.tableCondensed);

    if (ctx.data.caption) mergeToChildren(me, Caption({}, ctx.data.caption));

    if (ctx.data.head) mergeToChildren(me, THead(ctx.data.head));

    if (ctx.data.body) mergeToChildren(me, TBody(ctx.data.body));
  }
});

export default Table;

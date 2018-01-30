import * as b from "bobril";
import { mergeToChildren } from "./bobrilHelpers";
import { Elem, IBaseData } from "./element";
import { TableContext, tableContextStyles } from "./table";
import { Th, IThData } from "./th";
import { Td, ITdData } from "./td";

export type IThDataOrString = string | IThData;
export type ITdDataOrString = string | ITdData;

export interface ITrData extends IBaseData {
  context?: TableContext;
  columns?: ITdDataOrString[];
  headers?: IThDataOrString[];
}

interface ICtx extends b.IBobrilCtx {
  data: ITrData;
}
export const Tr = b.createDerivedComponent<ITrData>(Elem, {
  id: "bobrilstrap-tr",
  render(ctx: ICtx, me: b.IBobrilNode) {
    me.tag = "tr";
    b.style(
      me,
      ctx.data.context !== undefined && tableContextStyles(ctx.data.context)
    );

    if (ctx.data.headers)
      me.children = mergeToChildren(
        me,
        ctx.data.headers.map(header => Th(getColumnData(header)))
      );
    if (ctx.data.columns)
      me.children = mergeToChildren(
        me,
        ctx.data.columns.map(column => Td(getColumnData(column)))
      );
  }
});

export default Tr;

interface IColumnWithChildren {
  children?: b.IBobrilChildren;
}

function getColumnData(
  column: string | IColumnWithChildren
): IColumnWithChildren {
  return typeof column === "string" ? { children: column } : column;
}

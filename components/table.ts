import * as b from 'bobril';
import { mergeToChildren } from './bobrilHelpers';
import { elem, IBaseData } from './element';
import { thead, ITHeadData } from './thead';
import { tbody, ITBodyData } from './tbody';
import { caption } from './caption';
import { createDictionary } from './bobrilHelpers';

export enum TableContext {
    Active,
    Success,
    Warning,
    Danger,
    Info
}

export const tableContextStyles = createDictionary<TableContext, b.IBobrilStyle>();
tableContextStyles(TableContext.Active, b.styleDef('active'));
tableContextStyles(TableContext.Success, b.styleDef('success'));
tableContextStyles(TableContext.Warning, b.styleDef('warning'));
tableContextStyles(TableContext.Danger, b.styleDef('danger'));
tableContextStyles(TableContext.Info, b.styleDef('info'));

export const tableStyles = {
    table: b.styleDef('table'),
    responsive: b.styleDef('table-responsive'),
    tableStriped: b.styleDef('table-striped'),
    tableBordered: b.styleDef('table-bordered'),
    tableHover: b.styleDef('table-hover'),
    tableCondensed: b.styleDef('table-condensed')
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

export const table = b.createDerivedComponent<ITableData>(elem, {
    id: 'bobrilstrap-table',
    render(ctx: ICtx, me: b.IBobrilNode) {
        me.tag = 'table';
        b.style(me, tableStyles.table);
        b.style(me, ctx.data.striped && tableStyles.tableStriped);
        b.style(me, ctx.data.bordered && tableStyles.tableBordered);
        b.style(me, ctx.data.hover && tableStyles.tableHover);
        b.style(me, ctx.data.condensed && tableStyles.tableCondensed);

        if (ctx.data.caption)
            mergeToChildren(me, caption({}, ctx.data.caption));

        if (ctx.data.head)
            mergeToChildren(me, thead(ctx.data.head));

        if (ctx.data.body)
            mergeToChildren(me, tbody(ctx.data.body));
    }
});

export default table;
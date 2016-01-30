import * as b from 'bobril';
import { mergeToChildren } from './bobrilHelpers';
import elem, { IBaseData } from './element';
import thead, { ITHeadData as IHeadData } from './thead';
import tbody, { ITBodyData as IBodyData } from './tbody';

export let tableStyles = {
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

    head?: IHeadData;
    body?: IBodyData;
}

interface ICtx extends b.IBobrilCtx {
    data: ITableData;
}

export default b.createDerivedComponent<ITableData>(elem, {
    id: 'bobrilstrap-table',
    render(ctx: ICtx, me: b.IBobrilNode) {
        me.tag = 'table';
        b.style(me, tableStyles.table);
        b.style(me, ctx.data.striped && tableStyles.tableStriped);
        b.style(me, ctx.data.bordered && tableStyles.tableBordered);
        b.style(me, ctx.data.hover && tableStyles.tableHover);
        b.style(me, ctx.data.condensed && tableStyles.tableCondensed);

        if (ctx.data.head)
            mergeToChildren(me, thead(ctx.data.head));

        if (ctx.data.body)
            mergeToChildren(me, tbody(ctx.data.body));
    }
});
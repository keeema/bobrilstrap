import * as b from 'bobril';
import { mergeToChildren } from 'bobrilstrap-bobril-helpers';
import elem, { IBaseData } from 'bobrilstrap-element';
import thead, { IData as IHeadData } from 'bobrilstrap-thead';
import tbody, { IData as IBodyData } from 'bobrilstrap-tbody';

export let tableStyles = {
    table: b.styleDef('table'),
    responsive: b.styleDef('table-responsive'),
    tableStriped: b.styleDef('table-striped'),
    tableBordered: b.styleDef('table-bordered'),
    tableHover: b.styleDef('table-hover'),
    tableCondensed: b.styleDef('table-condensed')
};

export interface IData extends IBaseData {
    striped?: boolean;
    bordered?: boolean;
    hover?: boolean;
    condensed?: boolean;

    head?: IHeadData;
    body?: IBodyData;
}

interface ICtx extends b.IBobrilCtx {
    data: IData;
}

export let create = b.createDerivedComponent<IData>(elem, {
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

export default create;
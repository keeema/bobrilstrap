import * as b from 'bobril';
import elem, { IBaseData } from 'bobrilstrap-element';

export let tableStyle = {
    table: b.styleDef('table'),
    tableStriped: b.styleDef('table-striped'),
    tableBordered: b.styleDef('table-bordered'),
    tableHover: b.styleDef('table-hover'),
    tableCondensed: b.styleDef('table-condensed'),
};

interface IData extends IBaseData {
    striped?: boolean;
    bordered?: boolean;
    hover?: boolean;
    condensed?: boolean;
}

interface ICtx extends b.IBobrilCtx {
    data: IData;
}

export let create = b.createDerivedComponent<IData>(elem, {
    render(ctx: ICtx, me: b.IBobrilNode) {
        me.tag = 'table';
        b.style(me, tableStyle.table);
        b.style(me, ctx.data.striped && tableStyle.tableStriped);
        b.style(me, ctx.data.bordered && tableStyle.tableBordered);
        b.style(me, ctx.data.hover && tableStyle.tableHover);
        b.style(me, ctx.data.condensed && tableStyle.tableCondensed);
        
    }
});

export default create;

import * as b from 'bobril';
import elem, { IBaseData } from 'bobrilstrap-element';

export let tableStyle = {
    table: b.styleDef('table'),
    responsive: b.styleDef('table-responsive'),
    tableStriped: b.styleDef('table-striped'),
    tableBordered: b.styleDef('table-bordered'),
    tableHover: b.styleDef('table-hover'),
    tableCondensed: b.styleDef('table-condensed')
};

interface IData extends IBaseData {
    striped?: boolean;
    bordered?: boolean;
    hover?: boolean;
    condensed?: boolean;
    responsive?: boolean;
}

interface ICtx extends b.IBobrilCtx {
    data: IData;
}

export let create = b.createDerivedComponent<IData>(elem, {
    id: 'bobrilstrap-table',
    render(ctx: ICtx, me: b.IBobrilNode) {
        me.tag = 'table';
        b.style(me, tableStyle.table);
        b.style(me, ctx.data.striped && tableStyle.tableStriped);
        b.style(me, ctx.data.bordered && tableStyle.tableBordered);
        b.style(me, ctx.data.hover && tableStyle.tableHover);
        b.style(me, ctx.data.condensed && tableStyle.tableCondensed);

        if (ctx.data.responsive) {
            wrapMe(me, tableStyle.responsive);
        }
    }
});

export default create;

function wrapMe(me: b.IBobrilNode, style: b.IBobrilStyle) {
    me.children = { tag: me.tag, className: me.className, style: me.style, id: me['id'], attrs: me.attrs, children: me.children };
    me.tag = 'div';
    me.className = undefined;
    me.style = undefined;
    me['id'] = undefined;
    me.attrs = undefined;
    b.style(me, style);
}
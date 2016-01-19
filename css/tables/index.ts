import * as b from 'bobril';
import * as elem from 'bobrilstrap-element';

export let tableStyle = {
    table: b.styleDef('table'),
    tableStriped: b.styleDef('table-striped'),
    tableBordered: b.styleDef('table-bordered'),
    tableHover: b.styleDef('table-hover'),
    tableCondensed: b.styleDef('table-condensed'),
    active: b.styleDef('active'),
    success: b.styleDef('success'),
    info: b.styleDef('info'),
    warning: b.styleDef('warning'),
    danger: b.styleDef('danger')
};


export let create = b.createDerivedComponent<elem.IData>(elem.default, {
    render(ctx: elem.ICtx, me: b.IBobrilNode) {
        me.tag = 'table';
        b.style(me, tableStyle.table);
    }
});

export default create;

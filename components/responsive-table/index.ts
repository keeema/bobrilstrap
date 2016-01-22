import * as b from 'bobril';
import { mergeToChildren } from 'bobrilstrap-bobril-helpers';
import elem, { IBaseData } from 'bobrilstrap-element';
import table, { IData as ITableData, tableStyles } from 'bobrilstrap-table';

export interface IData extends IBaseData {
    table: ITableData;
}

interface ICtx extends b.IBobrilCtx {
    data: IData;
}

export let create = b.createDerivedComponent<IData>(elem, {
    id: 'bobrilstrap-responsive-table',
    render(ctx: ICtx, me: b.IBobrilNode) {
        b.style(me, tableStyles.responsive);
        mergeToChildren(me, table(ctx.data.table));
    }
});

export default create;
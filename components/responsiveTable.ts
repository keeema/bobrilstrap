import * as b from 'bobril';
import { mergeToChildren } from './bobrilHelpers';
import elem, { IBaseData } from './element';
import table, { ITableData as ITableData, tableStyles } from './table';

export interface IResponsiveTableData extends IBaseData {
    table: ITableData;
}

interface ICtx extends b.IBobrilCtx {
    data: IResponsiveTableData;
}

export let responsiveTable = b.createDerivedComponent<IResponsiveTableData>(elem, {
    id: 'bobrilstrap-responsive-table',
    render(ctx: ICtx, me: b.IBobrilNode) {
        b.style(me, tableStyles.responsive);
        mergeToChildren(me, table(ctx.data.table));
    }
});

export default responsiveTable;
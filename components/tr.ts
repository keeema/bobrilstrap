import * as b from 'bobril';
import { mergeToChildren } from './bobrilHelpers';
import { elem, IBaseData } from './element';
import { TableContext, tableContextStyles } from './table';
import { th, IThData } from './th';
import { td, ITdData } from './td';

export type IThDataOrString = string | IThData;
export type ITdDataOrString = string | ITdData;

export interface ITrData extends IBaseData {
    context?: TableContext;
    columns?: IThDataOrString[];
    headers?: ITdDataOrString[];
}

interface ICtx extends b.IBobrilCtx {
    data: ITrData;
}
export const tr = b.createDerivedComponent<ITrData>(elem, {
    id: 'bobrilstrap-tr',
    render(ctx: ICtx, me: b.IBobrilNode) {
        me.tag = 'tr';
        b.style(me, tableContextStyles(ctx.data.context));

        if (ctx.data.headers)
            me.children = mergeToChildren(me, ctx.data.headers.map(header => th(getColumnData(header))));
        if (ctx.data.columns)
            me.children = mergeToChildren(me, ctx.data.columns.map(column => td(getColumnData(column))));
    }
});

export default tr;

interface IColumnWithChildren {
    children?: b.IBobrilChildren;
}

function getColumnData(column: string | IColumnWithChildren): IColumnWithChildren {
    return typeof column === 'string' ? { children: column } : column;
}
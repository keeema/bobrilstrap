import * as b from 'bobril';
import { mergeToChildren } from './bobrilHelpers';
import elem, { IBaseData } from './element';
import Context, { contextStyles } from './context';
import th, { IThData as IColumnData } from './th';
import td, { ITdData as  IHeaderData} from './td';

export interface ITrData extends IBaseData {
    context?: Context;
    columns?: IColumnData[];
    headers?: IHeaderData[];
}

interface ICtx extends b.IBobrilCtx {
    data: ITrData;
}
export default b.createDerivedComponent<ITrData>(elem, {
    id: 'bobrilstrap-tr',
    render(ctx: ICtx, me: b.IBobrilNode) {
        me.tag = 'tr';
        b.style(me, !!ctx.data.context && contextStyles[ctx.data.context.toString()]);

        if (ctx.data.columns) {
            mergeToChildren(me, ctx.data.columns.map(column => td(column)));
        } else if (ctx.data.headers) {
            mergeToChildren(me, ctx.data.headers.map(header => th(header)));
        }
    }
});

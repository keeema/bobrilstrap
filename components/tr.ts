import * as b from 'bobril';
import { mergeToChildren } from './bobrilHelpers';
import elem, { IBaseData } from './element';
import Context, { contextStyles } from './context';
import th, { IThData } from './th';
import td, { ITdData } from './td';

export interface ITrData extends IBaseData {
    context?: Context;
    columns?: IThData[];
    headers?: ITdData[];
}

interface ICtx extends b.IBobrilCtx {
    data: ITrData;
}
export let tr = b.createDerivedComponent<ITrData>(elem, {
    id: 'bobrilstrap-tr',
    render(ctx: ICtx, me: b.IBobrilNode) {
        me.tag = 'tr';
        b.style(me, !!ctx.data.context && contextStyles[ctx.data.context.toString()]);

        if (ctx.data.headers)
            me.children = mergeToChildren(me, ctx.data.headers.map(header => th(header)));
        if (ctx.data.columns)
            me.children = mergeToChildren(me, ctx.data.columns.map(column => td(column)));
    }
});

export default tr;
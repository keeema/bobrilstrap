import * as b from 'bobril';
import { mergeChildren } from 'bobrilstrap-helpers';
import elem, { IBaseData } from 'bobrilstrap-element';
import Context, { contextStyles } from 'bobrilstrap-context';
import th, { IData as IColumnData } from 'bobrilstrap-th';
import td, { IData as  IHeaderData} from 'bobrilstrap-td';

export interface IData extends IBaseData {
    context?: Context;
    columns?: IColumnData[];
    headers?: IHeaderData[];
}

interface ICtx extends b.IBobrilCtx {
    data: IData;
}
export let create = b.createDerivedComponent<IData>(elem, {
    id: 'bobrilstrap-tr',
    render(ctx: ICtx, me: b.IBobrilNode) {
        me.tag = 'tr';
        if (ctx.data.context)
            b.style(me, contextStyles[ctx.data.context.toString()]);

        if (ctx.data.columns) {
           me.children = mergeChildren(me.children, ctx.data.columns.map(column => td(column)));
        } else if (ctx.data.headers) {
            me.children = mergeChildren(me.children, ctx.data.headers.map(header => th(header)));
        }
    }
});

export default create;

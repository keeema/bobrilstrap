import * as b from 'bobril';
import elem, { IBaseData } from './element';
import Context, { contextStyles } from './context';

export interface ITdData extends IBaseData {
    context?: Context;
    colspan?: number;
}

interface ICtx extends b.IBobrilCtx {
    data: ITdData;
}

export let td = b.createDerivedComponent<ITdData>(elem, {
    id: 'bobrilstrap-td',
    render(ctx: ICtx, me: b.IBobrilNode) {
        me.tag = 'td';
        b.style(me, !!ctx.data.context && contextStyles[ctx.data.context.toString()]);
        if (ctx.data.colspan)
            me.attrs['colspan'] = ctx.data.colspan.toString();
    }
});

export default td;
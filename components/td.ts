import * as b from 'bobril';
import elem, { IBaseData } from './element';
import Context, { contextStyles } from './context';

export interface ITdData extends IBaseData {
    context?: Context;
}

interface ICtx extends b.IBobrilCtx {
    data: ITdData;
}
export default b.createDerivedComponent<ITdData>(elem, {
    id: 'bobrilstrap-td',
    render(ctx: ICtx, me: b.IBobrilNode) {
        me.tag = 'td';
        b.style(me, !!ctx.data.context && contextStyles[ctx.data.context.toString()]);
    }
});

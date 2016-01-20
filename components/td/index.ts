import * as b from 'bobril';
import elem, { IBaseData } from 'bobrilstrap-element';
import Context, { contextStyles } from 'bobrilstrap-context';

export interface IData extends IBaseData {
    context?: Context;
}

interface ICtx extends b.IBobrilCtx {
    data: IData;
}
export let create = b.createDerivedComponent<IData>(elem, {
    id: 'bobrilstrap-td',
    render(ctx: ICtx, me: b.IBobrilNode) {
        me.tag = 'td';
        if (ctx.data.context)
            b.style(me, contextStyles[ctx.data.context.toString()]);
    }
});

export default create;

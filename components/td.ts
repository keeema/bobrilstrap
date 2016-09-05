import * as b from 'bobril';
import { elem, IBaseData } from './element';
import { TableContext, tableContextStyles } from './table';

export interface ITdData extends IBaseData {
    context?: TableContext;
    colspan?: number;
}

interface ICtx extends b.IBobrilCtx {
    data: ITdData;
}

export const td = b.createDerivedComponent<ITdData>(elem, {
    id: 'bobrilstrap-td',
    render(ctx: ICtx, me: b.IBobrilNode) {
        me.tag = 'td';
        b.style(me, tableContextStyles(ctx.data.context));
        if (ctx.data.colspan)
            me.attrs['colspan'] = ctx.data.colspan.toString();
    }
});

export default td;
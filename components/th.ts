import * as b from 'bobril';
import elem, { IBaseData } from './element';
import Context, { contextStyles } from './context';

export interface IThData extends IBaseData { 
    colspan?: number;
}

interface ICtx extends b.IBobrilCtx {
    data: IThData;   
}

export default b.createDerivedComponent<IThData>(elem, {
    id: 'bobrilstrap-th',
    render(ctx: ICtx, me: b.IBobrilNode) {
        me.tag = 'th';
        if (ctx.data.colspan)
            me.attrs['colspan'] = ctx.data.colspan.toString();
    }
});

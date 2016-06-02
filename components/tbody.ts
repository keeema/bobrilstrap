import * as b from 'bobril';
import elem, { IBaseData } from './element';
import tr, { ITrData } from './tr';

export interface ITBodyData extends IBaseData {
    rows?: ITrData[];
}

interface ICtx extends b.IBobrilCtx {
    data: ITBodyData;
}

export const tbody = b.createDerivedComponent<IBaseData>(elem, {
    id: 'bobrilstrap-tbody',
    render(ctx: ICtx, me: b.IBobrilNode) {
        me.tag = 'tbody';
        
        if (ctx.data.rows)
            me.children = ctx.data.rows.map(row => tr(row));
    }    
});

export default tbody;
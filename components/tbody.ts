import * as b from 'bobril';
import elem, { IBaseData } from './element';
import tr, { ITrData as IRowData } from './tr';

export interface ITBodyData extends IBaseData {
    rows?: IRowData[];
}

interface ICtx extends b.IBobrilCtx {
    data: ITBodyData;
}

export default b.createDerivedComponent<IBaseData>(elem, {
    id: 'bobrilstrap-tbody',
    render(ctx: ICtx, me: b.IBobrilNode) {
        me.tag = 'tbody';
        
        if (ctx.data.rows)
            me.children = ctx.data.rows.map(row => tr(row));
    }    
});
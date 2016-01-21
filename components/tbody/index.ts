import * as b from 'bobril';
import elem, { IBaseData } from 'bobrilstrap-element';
import tr, { IData as IRowData } from 'bobrilstrap-tr';

export interface IData extends IBaseData {
    rows?: IRowData[];
}

interface ICtx extends b.IBobrilCtx {
    data: IData;
}

export let create = b.createDerivedComponent<IBaseData>(elem, {
    id: 'bobrilstrap-tbody',
    render(ctx: ICtx, me: b.IBobrilNode) {
        me.tag = 'tbody';
        
        if (ctx.data.rows)
            me.children = ctx.data.rows.map(row => tr(row));
    }    
});

export default create;

import * as b from 'bobril';
import elem, { IBaseData } from './element';
import Context, { contextStyles } from './context';
import tr, { ITrData as IRowData } from './tr';

export interface ITHeadData extends IBaseData {
    row?: IRowData;
}

interface ICtx extends b.IBobrilCtx {
    data: ITHeadData;
}

export default b.createDerivedComponent<ITHeadData>(elem, {
    id: 'bobrilstrap-thead',
    render(ctx: ICtx, me: b.IBobrilNode) {
        me.tag = 'thead';

        if (ctx.data.row)
            me.children = tr(ctx.data.row);
    }
});
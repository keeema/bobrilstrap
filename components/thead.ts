import * as b from 'bobril';
import { elem, IBaseData } from './element';
import { tr, ITrData } from './tr';

export interface ITHeadData extends IBaseData {
    row?: ITrData;
}

interface ICtx extends b.IBobrilCtx {
    data: ITHeadData;
}

export const thead = b.createDerivedComponent<ITHeadData>(elem, {
    id: 'bobrilstrap-thead',
    render(ctx: ICtx, me: b.IBobrilNode) {
        me.tag = 'thead';

        if (ctx.data.row)
            me.children = tr(ctx.data.row);
    }
});

export default thead;
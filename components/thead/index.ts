import * as b from 'bobril';
import elem, { IBaseData } from 'bobrilstrap-element';
import Context, { contextStyles } from 'bobrilstrap-context';
import tr, { IData as IRowData } from 'bobrilstrap-tr';

export interface IData extends IBaseData {
    row?: IRowData;
}

interface ICtx extends b.IBobrilCtx {
    data: IData;
}

export let create = b.createDerivedComponent<IData>(elem, {
    id: 'bobrilstrap-thead',
    render(ctx: ICtx, me: b.IBobrilNode) {
        me.tag = 'thead';

        if (ctx.data.row)
            me.children = tr(ctx.data.row);
    }
});

export default create;

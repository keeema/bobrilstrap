import * as b from 'bobril';
import elem, { IBaseData } from './element';

export interface IRowData extends IBaseData {
}

interface ICtx extends b.IBobrilCtx {
    data: IRowData;
}

let rowStyle = b.styleDef('row');

export default b.createDerivedComponent<IRowData>(elem, {
    id: 'bobrilstrap-row',
    render(ctx: ICtx, me: b.IBobrilNode) {
        b.style(me, rowStyle);
    }
});

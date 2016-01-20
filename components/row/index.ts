import * as b from 'bobril';
import elem, { IBaseData } from 'bobrilstrap-element';

export interface IData extends IBaseData {
}

interface ICtx extends b.IBobrilCtx {
    data: IData;
}

let rowStyle = b.styleDef('row');

export default b.createDerivedComponent<IData>(elem, {
    render(ctx: ICtx, me: b.IBobrilNode) {
        b.style(me, rowStyle);
    }
});

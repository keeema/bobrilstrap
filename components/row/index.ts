import * as b from 'bobril';
import * as elem from 'bobrilstrap-element';

export interface IData extends elem.IData {
}

interface ICtx extends elem.ICtx {
    data: IData;
}

let rowStyle = b.styleDef('row');

export default b.createDerivedComponent<IData>(elem.default, {
    render(ctx: ICtx, me: b.IBobrilNode) {
        b.style(me, rowStyle);
    }
});

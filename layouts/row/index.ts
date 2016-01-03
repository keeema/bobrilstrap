import * as b from 'bobril';
import * as tag from 'bobrilstrap-tag';

export interface IData extends tag.IData {
}

interface ICtx extends tag.ICtx {
    data: IData;
}

let rowStyle = b.styleDef('row');

export default b.createDerivedComponent<IData>(tag.default, {
    render(ctx: ICtx, me: b.IBobrilNode) {               
        b.style(me, rowStyle);
    }
});

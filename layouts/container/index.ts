import * as b from 'bobril';
import * as tag from 'bobrilstrap-tag';

interface IData extends tag.IData {
    fluid?: boolean;
}

interface ICtx extends tag.ICtx {
    data: IData;
}

let containerStyle = b.styleDef('container');
let containerFluidStyle = b.styleDef('container-fluid');

export default b.createDerivedComponent<IData>(tag.default, {
    render(ctx: ICtx, me: b.IBobrilNode) {               
        b.style(me, ctx.data.fluid ? containerFluidStyle : containerStyle);
    }
});

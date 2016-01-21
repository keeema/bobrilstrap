import * as b from 'bobril';
import elem, { IBaseData } from 'bobrilstrap-element';

interface IData extends IBaseData {
    fluid?: boolean;
}

interface ICtx extends b.IBobrilCtx {
    data: IData;
}

export let containerStyle = b.styleDef('container');
export let containerFluidStyle = b.styleDef('container-fluid');

export default b.createDerivedComponent<IData>(elem, {
    id: 'bobrilstrap-container',
    render(ctx: ICtx, me: b.IBobrilNode) {               
        b.style(me, ctx.data.fluid ? containerFluidStyle : containerStyle);
    }
});

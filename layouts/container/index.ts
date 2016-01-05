import * as b from 'bobril';
import * as elem from 'bobrilstrap-element';

interface IData extends elem.IData {
    fluid?: boolean;
}

interface ICtx extends elem.ICtx {
    data: IData;
}

export let containerStyle = b.styleDef('container');
export let containerFluidStyle = b.styleDef('container-fluid');

export default b.createDerivedComponent<IData>(elem.default, {
    render(ctx: ICtx, me: b.IBobrilNode) {               
        b.style(me, ctx.data.fluid ? containerFluidStyle : containerStyle);
    }
});

import * as b from 'bobril';
import elem, { IBaseData } from './element';

export interface IContainerData extends IBaseData {
    fluid?: boolean;
}

interface ICtx extends b.IBobrilCtx {
    data: IContainerData;
}

export let containerStyle = b.styleDef('container');
export let containerFluidStyle = b.styleDef('container-fluid');

export default b.createDerivedComponent<IContainerData>(elem, {
    id: 'bobrilstrap-container',
    render(ctx: ICtx, me: b.IBobrilNode) {               
        b.style(me, ctx.data.fluid ? containerFluidStyle : containerStyle);
    }
});
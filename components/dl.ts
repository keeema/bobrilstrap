import * as b from 'bobril';
import elem, { IBaseData } from './element';
import typography from './typography';

export interface IDlData extends IBaseData {
    horizontal?: boolean;
}

interface ICtx extends b.IBobrilCtx {
    data: IDlData;
}

export const dl = b.createDerivedComponent<IDlData>(elem, {
    id: 'bobrilstrap-dl',
    render(ctx: b.IBobrilCtx, me: b.IBobrilNode) {
        me.tag = 'dl';
        b.style(me, ctx.data.horizontal && typography.dlHorizontal);
    }
});

export default dl;
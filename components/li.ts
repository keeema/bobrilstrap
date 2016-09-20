import * as b from 'bobril';
import { elem, IBaseData } from './element';

export interface ILiData extends IBaseData { 
    active?: boolean;
}

interface ICtx extends b.IBobrilCtx {
    data: ILiData;
}

export const liStyles = {
    active: b.styleDef('active')
};

export const li = b.createDerivedComponent<ILiData>(elem, {
    id: 'bobrilstrap-li',
    render(ctx: ICtx, me: b.IBobrilNode) {
        me.tag = 'li';
        b.style(me, ctx.data.active && liStyles.active);
    }
});

export default li;

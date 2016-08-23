import * as b from 'bobril';
import { elem, IBaseData } from './element';

export interface ILiData extends IBaseData { }

interface ICtx extends b.IBobrilCtx {
    data: ILiData;
}

export const li = b.createDerivedComponent<ILiData>(elem, {
    id: 'bobrilstrap-li',
    render(ctx: ICtx, me: b.IBobrilNode) {
        me.tag = 'li';
    }
});

export default li;

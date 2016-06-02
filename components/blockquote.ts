import * as b from 'bobril';
import elem, { IBaseData } from './element';
import typography from './typography';

export interface IBlockquoteData extends IBaseData {
    reverse?: boolean;
}

interface ICtx extends b.IBobrilCtx {
    data: IBlockquoteData;
}

export const blockquote = b.createDerivedComponent<IBlockquoteData>(elem, {
    id: 'bobrilstrap-blockquote',
    render(ctx: b.IBobrilCtx, me: b.IBobrilNode) {
        me.tag = 'blockquote';
        b.style(me, ctx.data.reverse && typography.blockquoteReverse);
    }
});

export default blockquote;
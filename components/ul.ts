import * as b from 'bobril';
import elem, { IBaseData } from './element';
import typography from './typography';

export interface IUlData extends IBaseData {
    unstyled?: boolean;
    inline?: boolean;
}

interface ICtx extends b.IBobrilCtx {
    data: IUlData;
}

export default b.createDerivedComponent<IUlData>(elem, {
    id: 'bobrilstrap-ul',
    render(ctx: ICtx, me: b.IBobrilNode) {
        me.tag = 'ul';
        b.style(me, ctx.data.unstyled && typography.listUnstyled);
        b.style(me, ctx.data.inline && typography.listInline);
    }
});
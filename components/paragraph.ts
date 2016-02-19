import * as b from 'bobril';
import typography from './typography';
import elem, { IBaseData } from './element';

export interface IParagraphData extends IBaseData {
    lead?: boolean;
}

interface ICtx extends b.IBobrilCtx {
    data: IParagraphData;
}

export let p = b.createDerivedComponent<IParagraphData>(elem, {
    id: 'bobrilstrap-paragraph',
    render(ctx: ICtx, me: b.IBobrilNode) {
        me.tag = 'p';
        b.style(me, ctx.data.lead && typography.lead);
    }
});

export let paragraph = p;

export default p;
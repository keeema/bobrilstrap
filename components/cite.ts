import * as b from 'bobril';
import elem, { IBaseData } from './element';

export interface ICiteData extends IBaseData {
    title?: string;
}

interface ICtx extends b.IBobrilCtx {
    data: ICiteData;
}

export let cite = b.createDerivedComponent<ICiteData>(elem, {
    id: 'bobrilstrap-cite',
    render(ctx: b.IBobrilCtx, me: b.IBobrilNode) {
        me.tag = 'cite';
        
        if (ctx.data.title)
            me.attrs['title'] = ctx.data.title;
    }
});

export default cite;
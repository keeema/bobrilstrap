import * as b from 'bobril';
import { getCss } from './css';

interface IData {
}

interface ICtx extends b.IBobrilCtx {
    data: IData;
    cssNodeId: string;
}

export default b.createVirtualComponent({
    init(ctx: ICtx) {
        ctx.cssNodeId = b.addRoot(() => {
            return { tag: 'style', children: getCss() };
        });
    },
    destroy(ctx: ICtx) {
        if (ctx.cssNodeId)
            b.removeRoot(ctx.cssNodeId);
    }
});

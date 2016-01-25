import * as b from 'bobril';
import { getCss } from './css';

export function init(): string {
    return b.addRoot(() => {
        return { id: 'bobrilstrap-core', tag: 'style', children: getCss() };
    });
}

interface ICtx extends b.IBobrilCtx {
    cssNodeId: string;
}

export default b.createVirtualComponent({
    init(ctx: ICtx) {
        ctx.cssNodeId = init();
    },
    destroy(ctx: ICtx) {
        if (ctx.cssNodeId)
            b.removeRoot(ctx.cssNodeId);
    }
});

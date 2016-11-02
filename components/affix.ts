import * as b from 'bobril';

export const affixStyles = {
    affix: b.styleDef('affix'),
    affixTop: b.styleDef('affix-top'),
    affixBottom: b.styleDef('affix-bottom')
};

export interface IAffixData {
    node: b.IBobrilNode;
    top?: number | (() => number);
    bottom?: number | (() => number);
    postponeInit?: number;
}

interface IAffixCtx extends b.IBobrilCtx {
    data: IAffixData;
    affixedElement: HTMLElement;
}

export const affix = b.createVirtualComponent<IAffixData>({
    id: 'bobrilstrap-affix',
    render(ctx: IAffixCtx, me: b.IBobrilNode) {
        me.children = ctx.data.node;
    },
    postInitDom(ctx: IAffixCtx) {
        registerNewAffix(ctx);
    },
    postUpdateDom(ctx: IAffixCtx) {
        registerNewAffix(ctx);
    }
});

function registerNewAffix(ctx: IAffixCtx) {
    const element = <HTMLElement>b.getDomNode(ctx.me);
    if (!element || ctx.data.postponeInit || ctx.affixedElement === element)
        return;

    ctx.affixedElement = element;
    $(element).affix({
        offset: { top: getDimension(ctx.data.top), bottom: getDimension(ctx.data.bottom) }
    });
}

function getDimension(dimension: number | (() => number) | undefined): number | undefined {
    return typeof dimension === 'function' ? dimension() : dimension;
}

export default affix;
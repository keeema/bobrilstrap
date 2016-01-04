import * as b from 'bobril';

export interface IData {
    tag?: string;
    children?: b.IBobrilChildren;
    styles?: b.IBobrilStyles;
    attrs?: { [key: string]: any };
}

export interface ICtx extends b.IBobrilCtx {
    data: IData;
}

export default b.createVirtualComponent<IData>({
    render(ctx: ICtx, me: b.IBobrilNode) {
        me.tag = ctx.data.tag || 'div';
        me.children = ctx.data.children;
        me.attrs = ctx.data.attrs;
        b.style(me, ctx.data.styles);
    }
});

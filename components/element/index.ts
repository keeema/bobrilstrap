import * as b from 'bobril';

export interface IBaseData {
    children?: b.IBobrilChildren;
    styles?: b.IBobrilStyles;
    attrs?: { [key: string]: any };
}

export interface IData extends IBaseData {
    tag?: string;
}

export interface ICtx extends b.IBobrilCtx {
    data: IData;
}

export let create = b.createVirtualComponent<IData>({
    render(ctx: ICtx, me: b.IBobrilNode) {
        me.tag = ctx.data.tag || 'div';
        me.children = ctx.data.children;
        me.attrs = ctx.data.attrs;
        b.style(me, ctx.data.styles);
    }
});

export default create;

import * as b from 'bobril';

export interface IBaseData {
    key?: string;
    id?: string;
    children?: b.IBobrilChildren;
    styles?: b.IBobrilStyles;
    attrs?: { [key: string]: any };

    onClick?: (event: b.IBobrilMouseEvent) => boolean | void;
    onChange?: (value) => void;
}

export interface IData extends IBaseData {
    tag?: string;
}

export interface ICtx extends b.IBobrilCtx {
    data: IData;
}

export let create = b.createVirtualComponent<IData>({
    id: 'bobrilstrap-element',
    render(ctx: ICtx, me: b.IBobrilNode) {
        me.tag = ctx.data.tag || 'div';
        me.children = ctx.data.children;
        me.attrs = ctx.data.attrs || {};

        b.style(me, ctx.data.styles);

        if (ctx.data.id)
            me.attrs.id = ctx.data.id;

        if (ctx.data.key)
            b.withKey(me, ctx.data.key);
    },
    onClick(ctx: ICtx, event: b.IBobrilMouseEvent): boolean {
        if (!ctx.data.onClick)
            return false;

        return !!ctx.data.onClick(event);
    },
    onChange(ctx: ICtx, value: any): void {
        if (ctx.data.onChange)
            !!ctx.data.onChange(value);
    }
});

export default create;
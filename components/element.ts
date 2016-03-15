import * as b from 'bobril';

export interface IAria {
    label?: string;
    labelledBy?: string;
    describedBy?: string;
    invalid?: boolean;
    hidden?: boolean;
}

export interface IBaseData {
    key?: string;
    id?: string;
    children?: b.IBobrilChildren;
    style?: b.IBobrilStyles;
    aria?: IAria;
    attrs?: { [key: string]: any };
    title?: string;

    onClick?: (event: b.IBobrilMouseEvent) => boolean | void;
    onChange?: (value: any) => void;
}

export interface IElementData extends IBaseData {
    tag?: string;
}

interface ICtx extends b.IBobrilCtx {
    data: IElementData;
}

export let e = b.createVirtualComponent<IElementData>({
    id: 'bobrilstrap-element',
    render(ctx: ICtx, me: b.IBobrilNode) {
        me.tag = ctx.data.tag || 'div';
        me.children = ctx.data.children;
        me.attrs = ctx.data.attrs || {};

        b.style(me, ctx.data.style);

        if (ctx.data.id)
            me.attrs.id = ctx.data.id;

        if (ctx.data.key)
            b.withKey(me, ctx.data.key);

        if (ctx.data.title)
            me.attrs['title'] = ctx.data.title;

        if (ctx.data.aria) {
            if (ctx.data.aria.label)
                me.attrs['aria-label'] = ctx.data.aria.label;

            if (ctx.data.aria.labelledBy)
                me.attrs['aria-labelledby '] = ctx.data.aria.labelledBy;

            if (ctx.data.aria.describedBy)
                me.attrs['aria-describedby '] = ctx.data.aria.describedBy;

            if (ctx.data.aria.invalid !== undefined && ctx.data.aria.invalid !== null)
                me.attrs['aria-invalid'] = ctx.data.aria.invalid.toString();

            if (ctx.data.aria.hidden !== undefined && ctx.data.aria.hidden !== null)
                me.attrs['aria-hidden'] = ctx.data.aria.hidden.toString();
        }
    },
    onClick(ctx: ICtx, event: b.IBobrilMouseEvent): boolean {
        if (!ctx.data.onClick)
            return false;

        return !!ctx.data.onClick(event);
    },
    onChange(ctx: ICtx, value: string): void {
        if (ctx.data.onChange)
            ctx.data.onChange(value);
    }
});

export let element = e;

export default e;
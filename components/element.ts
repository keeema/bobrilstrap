import * as b from 'bobril';

export interface IAria {
    label?: string;
    labelledBy?: string;
    describedBy?: string;
    expanded?: boolean;
    invalid?: boolean;
    hasPopup?: boolean;
    hidden?: boolean;
    pressed?: boolean;
}

export interface IData {
    toggle?: string;
}

export interface IBaseData {
    key?: string;
    id?: string;
    children?: b.IBobrilChildren;
    style?: b.IBobrilStyles;
    aria?: IAria;
    attrs?: { [key: string]: any };
    title?: string;
    data?: IData;

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

        let dataAttrs = ctx.data.data || {};

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
                me.attrs['aria-labelledby'] = ctx.data.aria.labelledBy;

            if (ctx.data.aria.describedBy)
                me.attrs['aria-describedby'] = ctx.data.aria.describedBy;

            if (ctx.data.aria.expanded !== undefined && ctx.data.aria.expanded !== null)
                me.attrs['aria-expanded'] = ctx.data.aria.expanded.toString();

            if (ctx.data.aria.invalid !== undefined && ctx.data.aria.invalid !== null)
                me.attrs['aria-invalid'] = ctx.data.aria.invalid.toString();

            if (ctx.data.aria.hasPopup !== undefined && ctx.data.aria.hasPopup !== null)
                me.attrs['aria-haspopup'] = ctx.data.aria.hasPopup.toString();

            if (ctx.data.aria.hidden !== undefined && ctx.data.aria.hidden !== null)
                me.attrs['aria-hidden'] = ctx.data.aria.hidden.toString();

            if (ctx.data.aria.pressed !== undefined && ctx.data.aria.pressed !== null)
                me.attrs['aria-pressed'] = ctx.data.aria.pressed.toString();
        }

        if (ctx.data.data) {
            if (ctx.data.data.toggle)
                me.attrs['data-toggle'] = ctx.data.data.toggle;
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
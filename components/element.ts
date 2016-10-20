import * as b from 'bobril';
import { toLowerWithDashes } from './bobrilHelpers';

export interface IAria {
    label?: string;
    labelledby?: string;
    describedby?: string;
    expanded?: boolean;
    invalid?: boolean;
    haspopup?: boolean;
    hidden?: boolean;
    pressed?: boolean;
    valuenow?: number;
    valuemin?: number;
    valuemax?: number;
}

export interface IData {
    toggle?: string;
    target?: string;
    dismiss?: string;
}

export interface IBaseData {
    key?: string;
    id?: string;
    children?: b.IBobrilChildren;
    style?: b.IBobrilStyles;
    aria?: IAria;
    attrs?: { [key: string]: string | number | boolean };
    title?: string;
    data?: IData;

    onClick?: (event: b.IBobrilMouseEvent) => boolean | void;
    onChange?: (value?: number | string | boolean | Object) => void;
}

interface IElementBobrilNodeCommon extends b.IBobrilNodeCommon {
    attrs: b.IBobrilAttributes;
    component: IElementBobrilComponent;
}

interface IElementBobrilComponent extends b.IBobrilComponent {
    super: IElementBobrilComponent;
    onChange: (ctx: ICtx, value: string | string[] | boolean) => void;
    render(ctx: b.IBobrilCtx, me: b.IBobrilNode, oldMe?: b.IBobrilCacheNode): void;
}

export type IElementBobrilNode = IElementBobrilNodeCommon & b.IBobrilNode;
export type IElementBobrilCacheNode = IElementBobrilNodeCommon & b.IBobrilCacheNode;

export interface IElementData extends IBaseData {
    tag?: string;
}

interface ICtx extends b.IBobrilCtx {
    data: IElementData;
}

export const e = b.createVirtualComponent<IElementData>({
    id: 'bobrilstrap-element',
    render(ctx: ICtx, me: IElementBobrilNode) {
        me.tag = ctx.data.tag || 'div';
        me.children = ctx.data.children;
        me.attrs = ctx.data.attrs || {};
    },
    postRender(ctx: b.IBobrilCtx, me: IElementBobrilNode): void {
        let aria = ctx.data.aria || {};
        let dataAttrs = ctx.data.data || {};

        if (ctx.data.id)
            me.attrs.id = ctx.data.id;

        if (ctx.data.key)
            b.withKey(me, ctx.data.key);


        if (ctx.data.title)
            me.attrs['title'] = ctx.data.title;

        Object.keys(aria).forEach(key => {
            me.attrs[`aria-${toLowerWithDashes(key)}`] = aria[key];
        });

        Object.keys(dataAttrs).forEach(key => {
            me.attrs[`data-${toLowerWithDashes(key)}`] = dataAttrs[key];
        });

        b.style(me, ctx.data.style);
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

export const element = e;
export const elem = e;
export default e;
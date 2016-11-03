import * as b from 'bobril';
import { equals } from './bobrilHelpers';

export enum TooltipPlacement {
    Left,
    Top,
    Bottom,
    Right
}

export interface ITooltipOptions {
    title: string;
    placement?: TooltipPlacement;
    animation?: boolean;
}

export interface ITooltipData {
    children?: b.IBobrilNode;
    options: ITooltipOptions;
}

interface ITooltipCtx extends b.IBobrilCtx {
    data: ITooltipData;
    options: ITooltipOptions;
    tooltipedElement: HTMLElement;
}

export const tooltip = b.createVirtualComponent<ITooltipData>({
    id: 'bobrilstrap-tooltip',
    render(ctx: ITooltipCtx, me: b.IBobrilNode) {
        me.children = ctx.data.children;
    },
    postInitDom(ctx: ITooltipCtx) {
        registerNewTooltip(ctx);
    },
    postUpdateDom(ctx: ITooltipCtx) {
        registerNewTooltip(ctx);
    },
    destroy(ctx: ITooltipCtx) {
        unregister(ctx.tooltipedElement);
    }
});

function registerNewTooltip(ctx: ITooltipCtx) {
    const element = <HTMLElement>b.getDomNode(ctx.me);
    if (!element)
        return;

    if (ctx.tooltipedElement !== element || !equals(ctx.options, ctx.data.options)) {
        unregister(ctx.tooltipedElement);
    }

    ctx.tooltipedElement = element;
    ctx.options = ctx.data.options;
    $(element).tooltip({
        title: ctx.data.options.title,
        animation: ctx.data.options.animation,
        placement: ctx.data.options.placement !== undefined ? TooltipPlacement[ctx.data.options.placement].toLowerCase() : undefined

    });
}

function unregister(element: HTMLElement) {
    if (element)
        $(element).tooltip('destroy');
}

export default tooltip;
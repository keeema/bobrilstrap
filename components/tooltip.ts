import * as b from 'bobril';

export enum TooltipPlacement {
    Left,
    Top,
    Bottom,
    Right
}

export enum TooltipTrigger {
    Click,
    Hover,
    Focus,
    Manual
}

export interface ITooltipOptions {
    title: string;
    placement?: TooltipPlacement;
    animation?: boolean;
    trigger?: TooltipTrigger[];
}

export interface ITooltipData extends ITooltipOptions {
    children?: b.IBobrilNode;
}

interface ITooltipCtx extends b.IBobrilCtx {
    data: ITooltipData;
    options: ITooltipOptions;
    tooltipedElement: HTMLElement | undefined;
    visible: boolean;
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
        unregister(ctx);
    }
});

function registerNewTooltip(ctx: ITooltipCtx) {
    const element = <HTMLElement>b.getDomNode(ctx.me);
    if (!element) {
        ctx.tooltipedElement = undefined;
        return;
    }

    const jQueryElement = $(element);

    if (!ctx.tooltipedElement) {
        jQueryElement.tooltip({
            title: ctx.data.title,
            animation: ctx.data.animation,
            placement: ctx.data.placement !== undefined ? TooltipPlacement[ctx.data.placement].toLowerCase() : undefined,
            trigger: ctx.data.trigger ? ctx.data.trigger.map(value => TooltipTrigger[value].toLowerCase()).join(' ') : undefined
        });
        jQueryElement.on('shown.bs.tooltip', () => ctx.visible = true);
        jQueryElement.on('hidden.bs.tooltip', () => ctx.visible = false);
        ctx.tooltipedElement = element;
    } else if (ctx.options.title !== ctx.data.title) {
        jQueryElement.attr('title', ctx.data.title).tooltip('fixTitle');

        if (ctx.visible)
            jQueryElement.tooltip('show');
    }

    ctx.options = {
        title: ctx.data.title,
        placement: ctx.data.placement,
        animation: ctx.data.animation,
        trigger: ctx.data.trigger
    };
}

function unregister(ctx: ITooltipCtx) {
    if (ctx.tooltipedElement) {
        $(ctx.tooltipedElement).tooltip('destroy');
        ctx.tooltipedElement = undefined;
    }
}

export default tooltip;
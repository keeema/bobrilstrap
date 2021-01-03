import * as b from "bobril";
import * as bootstrap from "bootstrap";
import { pick } from "../../utils/objectHelper";
import { Tags } from "../../utils/tags";
import { IBaseElementDataWithChildren, BaseElement } from "./BaseElement";

export type ITooltip = bootstrap.Tooltip;

export const tooltipStyles = {};

export interface ITooltipElementData extends IBaseElementDataWithChildren {
    onHidden?: () => void;
    onHide?: () => void;
    onShown?: () => void;
    onShow?: () => void;
    onInserted?: () => void;
    "get-instance"?: (tooltip: ITooltip) => void;
}

export type ITooltipData = ITooltipElementData & Partial<bootstrap.Tooltip.Options>;

export class Tooltip extends BaseElement<ITooltipData> {
    static id: string = "bobrilstrap-tooltip";

    get tag(): Tags | undefined {
        return undefined;
    }

    tooltipProperties: (keyof Partial<bootstrap.Tooltip.Options>)[] = [
        "animation",
        "boundary",
        "container",
        "delay",
        "fallbackPlacement",
        "html",
        "offset",
        "placement",
        "popperConfig",
        "sanitize",
        "sanitizeFn",
        "selector",
        "template",
        "title",
        "trigger",
        "whiteList",
    ];

    private tooltip?: bootstrap.Tooltip;

    componentProperties(): (keyof ITooltipData)[] {
        return [...this.tooltipProperties];
    }

    componentSpecificStyles(): b.IBobrilStyleArray {
        return [];
    }

    postInitDom(): void {
        this.registerTooltip();
        this.registerCallback();
    }

    postUpdateDom(): void {
        this.registerCallback();
    }

    destroy(): void {
        this.tooltip && this.tooltip.hide();
    }

    private registerCallback(): void {
        this.registerEvent("hide.bs.tooltip", () => this.data.onHide && this.data.onHide());
        this.registerEvent("hidden.bs.tooltip", () => this.data.onHidden && this.data.onHidden());
        this.registerEvent("show.bs.tooltip", () => this.data.onShow && this.data.onShow());
        this.registerEvent("shown.bs.tooltip", () => this.data.onShown && this.data.onShown());
        this.registerEvent("inserted.bs.tooltip", () => this.data.onShown && this.data.onShown());
    }

    private registerTooltip(): void {
        const tooltipOptions = pick(this.data, ...this.tooltipProperties);
        this.tooltip = new bootstrap.Tooltip(this.element, tooltipOptions);
        this.data["get-instance"] && this.data["get-instance"](this.tooltip);
    }
}

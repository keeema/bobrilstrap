import * as b from "bobril";
import * as bootstrap from "bootstrap";
import { pick } from "../../utils/objectHelper";
import { Tags } from "../../utils/tags";
import { IBaseElementDataWithChildren, BaseElement } from "./BaseElement";

export type IPopover = bootstrap.Popover;

export const popoverStyles = {};

export interface IPopoverElementData extends IBaseElementDataWithChildren {
    onHidden?: () => void;
    onHide?: () => void;
    onShown?: () => void;
    onShow?: () => void;
    onInserted?: () => void;
    "get-instance"?: (popover: IPopover) => void;
}

export type IPopoverData = IPopoverElementData & Partial<bootstrap.Popover.Options>;

export class Popover extends BaseElement<IPopoverData> {
    static id: string = "bobrilstrap-popover";
    get tag(): Tags | undefined {
        return undefined;
    }

    popoverProperties: (keyof Partial<bootstrap.Popover.Options>)[] = [
        "animation",
        "boundary",
        "container",
        "content",
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
    ];

    private popover?: bootstrap.Popover;

    componentProperties(): (keyof IPopoverData)[] {
        return [...this.popoverProperties];
    }

    componentSpecificStyles(): b.IBobrilStyleArray {
        return [];
    }

    postInitDom(): void {
        this.registerPopover();
        this.registerCallback();
    }

    postUpdateDom(): void {
        this.registerCallback();
    }

    destroy(): void {
        this.popover && this.popover.hide();
    }

    private registerCallback(): void {
        this.registerEvent("hide.bs.popover", () => this.data.onHide && this.data.onHide());
        this.registerEvent("hidden.bs.popover", () => this.data.onHidden && this.data.onHidden());
        this.registerEvent("show.bs.popover", () => this.data.onShow && this.data.onShow());
        this.registerEvent("shown.bs.popover", () => this.data.onShown && this.data.onShown());
        this.registerEvent("inserted.bs.popover", () => this.data.onShown && this.data.onShown());
    }

    private registerPopover(): void {
        const popoverOptions = pick(this.data, ...this.popoverProperties);
        this.popover = new bootstrap.Popover(this.element, popoverOptions);
        this.data["get-instance"] && this.data["get-instance"](this.popover);
    }
}

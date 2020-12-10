import * as b from "bobril";
import $ from "jquery";
import bootstrap from "bootstrap";
import { IBaseElementDataWithChildren, BaseElement } from "./BaseElement";

export const collapseStyles = {
    collapse: b.styleDef("collapse"),
};

interface ICollapseElementData {
    collapsed: boolean;
    onCollapsed?: () => void;
    onCollapse?: () => void;
    onShown?: () => void;
    onShow?: () => void;
}

export type ICollapseData = ICollapseElementData & IBaseElementDataWithChildren;

export class Collapse extends BaseElement<ICollapseData> {
    static id: string = "bobrilstrap-collapse";

    private collapsedElement?: HTMLElement;
    private collapse?: bootstrap.Collapse;
    private collapsed?: boolean;
    private firstLoad: boolean = true;

    componentProperties = (): (keyof ICollapseData)[] => ["collapsed", "onCollapsed", "onShown"];

    componentSpecificStyles(): b.IBobrilStyleArray {
        return [collapseStyles.collapse, !this.data.collapsed && this.firstLoad && noTransition];
    }

    postInitDom(): void {
        this.registerNewCollapse();
    }

    postUpdateDom(): void {
        this.registerNewCollapse();
        this.handleToggle();
    }

    private registerNewCollapse(): void {
        const element = b.getDomNode(this.me) as HTMLElement;
        if (!element || this.collapsedElement === element) {
            return;
        }

        this.collapsedElement = element;

        this.collapse = new bootstrap.Collapse(element, { toggle: !this.data.collapsed });

        this.collapsed = this.data.collapsed;
        this.firstLoad = false;
        $(element).on("hide.bs.collapse", () => this.data.onCollapse && this.data.onCollapse());
        $(element).on("hidden.bs.collapse", () => this.data.onCollapsed && this.data.onCollapsed());
        $(element).on("show.bs.collapse", () => this.data.onShow && this.data.onShow());
        $(element).on("shown.bs.collapse", () => this.data.onShown && this.data.onShown());
    }

    private handleToggle(): void {
        if (!this.collapse) {
            return;
        }
        if (!!this.collapsed !== !!this.data.collapsed) {
            this.collapsed = !!this.data.collapsed;
            this.collapsed ? this.collapse.hide() : this.collapse.show();
        }
    }
}

const noTransition = b.styleDef({
    transition: "none !important",
});

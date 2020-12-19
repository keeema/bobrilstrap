import * as b from "bobril";
import * as bootstrap from "bootstrap";
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
        this.registerCallbacks();
    }

    postUpdateDom(): void {
        this.registerCallbacks();
        this.handleToggle();
    }

    private registerNewCollapse(): void {
        if (!this.element || this.collapsedElement === this.element) {
            return;
        }

        this.collapsedElement = this.element;
        this.firstLoad = false;
        this.collapse = new bootstrap.Collapse(this.element, { toggle: !this.data.collapsed });

        this.collapsed = this.data.collapsed;
    }
    private registerCallbacks(): void {
        this.registerEvent("hide.bs.collapse", () => this.data.onCollapse && this.data.onCollapse());
        this.registerEvent("hidden.bs.collapse", () => this.data.onCollapsed && this.data.onCollapsed());
        this.registerEvent("show.bs.collapse", () => this.data.onShow && this.data.onShow());
        this.registerEvent("shown.bs.collapse", () => this.data.onShown && this.data.onShown());
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

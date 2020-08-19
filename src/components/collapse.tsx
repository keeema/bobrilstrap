import * as b from "bobril";
import $ from "jquery";
import { IBaseElementData, BaseElement } from "../../index";

export const collapseStyles = {
    collapse: b.styleDef("collapse"),
};

interface ICollapseElementData {
    collapsed: boolean;
    onCollapsed?: () => void;
    onShown?: () => void;
}

export type ICollapseData = ICollapseElementData & IBaseElementData;

export class Collapse extends BaseElement<ICollapseData> {
    static id: string = "bobrilstrap-collapse";

    readonly componentProperties: (keyof ICollapseElementData)[] = ["collapsed", "onCollapsed", "onShown"];

    private collapsedElement?: HTMLElement;
    private collapsed?: boolean;
    private firstLoad: boolean = true;

    static get componentSpecificStyles(): b.IBobrilStyleArray {
        return [collapseStyles.collapse];
    }
    get componentSpecificStyles(): b.IBobrilStyleArray {
        return [...Collapse.componentSpecificStyles, !this.data.collapsed && this.firstLoad && noTransition];
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
        $(element).collapse({ toggle: !this.data.collapsed });
        this.collapsed = this.data.collapsed;
        this.firstLoad = false;
        $(element).on("hidden.bs.collapse", () => this.data.onCollapsed && this.data.onCollapsed());
        $(element).on("shown.bs.collapse", () => this.data.onShown && this.data.onShown());
    }

    private handleToggle(): void {
        const element = b.getDomNode(this.me) as HTMLElement;
        if (!!this.collapsed !== !!this.data.collapsed) {
            this.collapsed = !!this.data.collapsed;
            $(element).collapse(this.collapsed ? "hide" : "show");
        }
    }
}

const noTransition = b.styleDef({
    transition: "none !important",
});

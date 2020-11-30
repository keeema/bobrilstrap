import * as b from "bobril";
import { IBaseElementDataWithChildren, BaseElement, IAttrs } from "./BaseElement";

export const tabPaneStyles = {
    tabPane: b.styleDef("tab-pane"),
    fade: b.styleDef("fade"),
    show: b.styleDef("show"),
};

export interface ITabPaneData extends IBaseElementDataWithChildren {
    fade?: boolean;
}

export class TabPane extends BaseElement<ITabPaneData> {
    static id: string = "bobrilstrap-tab-pane";

    componentProperties(): (keyof ITabPaneData)[] {
        return ["fade"];
    }

    componentAdditionalAttributes(): IAttrs {
        return {
            ...super.componentAdditionalAttributes(),
            role: this.data.role || "tabpanel",
        };
    }
    componentSpecificStyles(): b.IBobrilStyleArray {
        return [tabPaneStyles.tabPane, this.data.fade && tabPaneStyles.fade, this.data.active && this.data.fade && tabPaneStyles.show];
    }
}

import * as b from "bobril";
import { IBaseElementDataWithChildren, BaseElement } from "./BaseElement";

export const tabContentStyles = {
    tabContent: b.styleDef("tab-content"),
};

export interface ITabContentData extends IBaseElementDataWithChildren {}

export class TabContent extends BaseElement<ITabContentData> {
    static id: string = "bobrilstrap-tab-content";

    componentProperties(): (keyof ITabContentData)[] {
        return [];
    }

    componentSpecificStyles(): b.IBobrilStyleArray {
        return [tabContentStyles.tabContent];
    }
}

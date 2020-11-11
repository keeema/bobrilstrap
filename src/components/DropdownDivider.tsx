import * as b from "bobril";
import { IBaseElementDataWithChildren, BaseElement } from "./BaseElement";

export const dropdownDividerStyles = {
    dropdownDivider: b.styleDef("dropdown-divider"),
};

export interface IDropdownDividerData extends IBaseElementDataWithChildren {}

export class DropdownDivider extends BaseElement<IDropdownDividerData> {
    static id: string = "bobrilstrap-dropdown-divider";
    readonly componentProperties: (keyof IDropdownDividerData)[] = [];

    componentSpecificStyles(): b.IBobrilStyleArray {
        return [dropdownDividerStyles.dropdownDivider];
    }
}

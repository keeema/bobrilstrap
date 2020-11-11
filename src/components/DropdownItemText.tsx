import * as b from "bobril";
import { IBaseElementDataWithChildren, BaseElement } from "./BaseElement";

export const dropdownItemTextStyles = {
    dropdownItemText: b.styleDef("dropdown-item-text"),
};

export interface IDropdownItemTextData extends IBaseElementDataWithChildren {}

export class DropdownItemText extends BaseElement<IDropdownItemTextData> {
    static id: string = "bobrilstrap-dropdown-item-text";
    readonly componentProperties: (keyof IDropdownItemTextData)[] = [];

    get tag(): string {
        return "span";
    }

    componentSpecificStyles(): b.IBobrilStyleArray {
        return [dropdownItemTextStyles.dropdownItemText];
    }
}

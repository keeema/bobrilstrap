import * as b from "bobril";
import { Tags } from "../../utils/tags";
import { IBaseElementDataWithChildren, BaseElement } from "./BaseElement";

export const dropdownItemTextStyles = {
    dropdownItemText: b.styleDef("dropdown-item-text"),
};

export interface IDropdownItemTextData extends IBaseElementDataWithChildren {}

export class DropdownItemText extends BaseElement<IDropdownItemTextData> {
    static id: string = "bobrilstrap-dropdown-item-text";
    componentProperties = (): (keyof IDropdownItemTextData)[] => [];

    get tag(): Tags {
        return "span";
    }

    componentSpecificStyles(): b.IBobrilStyleArray {
        return [dropdownItemTextStyles.dropdownItemText];
    }
}

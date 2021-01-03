import * as b from "bobril";
import { Tags } from "../../utils/tags";
import { IBaseElementDataWithChildren, BaseElement } from "./BaseElement";

export const dropdownHeaderStyles = {
    dropdownHeader: b.styleDef("dropdown-header"),
};

export interface IDropdownHeaderData extends IBaseElementDataWithChildren {}

export class DropdownHeader extends BaseElement<IDropdownHeaderData> {
    static id: string = "bobrilstrap-dropdown-header";
    componentProperties = (): (keyof IDropdownHeaderData)[] => [];

    get tag(): Tags {
        return "h6";
    }

    componentSpecificStyles(): b.IBobrilStyleArray {
        return [dropdownHeaderStyles.dropdownHeader];
    }
}

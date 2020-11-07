import * as b from "bobril";
import { IBaseElementDataWithChildren, BaseElement } from "./BaseElement";

export const dropdownMenuStyles = {
    dropdownMenu: b.styleDef("dropdown-menu"),
};

export interface IDropdownMenuData extends IBaseElementDataWithChildren {}

export class DropdownMenu extends BaseElement<IDropdownMenuData> {
    static id: string = "bobrilstrap-dropdown-menu";
    readonly componentProperties: (keyof IDropdownMenuData)[] = [];

    componentSpecificStyles(): b.IBobrilStyleArray {
        return [dropdownMenuStyles.dropdownMenu];
    }
}

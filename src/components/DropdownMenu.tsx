import * as b from "bobril";
import { IBaseElementData, BaseElement } from "./BaseElement";

export const dropdownMenuStyles = {
    dropdownMenu: b.styleDef("dropdown-menu"),
};

export interface IDropdownMenuData extends IBaseElementData {}

export class DropdownMenu extends BaseElement<IDropdownMenuData> {
    static id: string = "bobrilstrap-dropdown-menu";
    readonly componentProperties: (keyof IDropdownMenuData)[] = [];

    componentSpecificStyles(): b.IBobrilStyleArray {
        return [dropdownMenuStyles.dropdownMenu];
    }
}

import * as b from "bobril";
import { IAllAttrs } from "./BaseElement";
import { Button, IButtonData } from "./Button";

export const dropdownItemStyles = {
    dropdownItem: b.styleDef("dropdown-item"),
};

export interface IDropdownItemData extends IButtonData {}

export class DropdownItem extends Button<IDropdownItemData> {
    static id: string = "bobrilstrap-dropdown-item";

    componentAdditionalAttributes(): IAllAttrs {
        return {
            ...super.componentAdditionalAttributes(),
            dataToggle: "dropdown",
        };
    }

    componentSpecificStyles(): b.IBobrilStyleArray {
        return [...super.componentSpecificStyles(), dropdownItemStyles.dropdownItem];
    }
}

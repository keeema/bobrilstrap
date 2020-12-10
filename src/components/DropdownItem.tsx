import * as b from "bobril";
import { Button, IButtonData } from "./Button";
import { DropdownItemText } from "./DropdownItemText";

export const dropdownItemStyles = {
    dropdownItem: b.styleDef("dropdown-item"),
};

export interface IDropdownItemData extends IButtonData {}

export class DropdownItem extends Button<IDropdownItemData> {
    static id: string = "bobrilstrap-dropdown-item";
    static Text = DropdownItemText;

    render(): b.IBobrilNode {
        return <li>{super.render()}</li>;
    }

    componentSpecificStyles(): b.IBobrilStyleArray {
        return [...super.componentSpecificStyles(), dropdownItemStyles.dropdownItem];
    }
}

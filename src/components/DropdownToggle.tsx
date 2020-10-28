import * as b from "bobril";
import { IAllAttrs } from "./BaseElement";
import { Button, IButtonData } from "./Button";

export const dropdownToggleStyles = {
    dropdownToggle: b.styleDef("dropdown-toggle"),
};

export interface IDropdownToggleData extends IButtonData {}

export class DropdownToggle extends Button<IDropdownToggleData> {
    static id: string = "bobrilstrap-dropdown-toggle";

    componentAdditionalAttributes(): IAllAttrs {
        return {
            ...super.componentAdditionalAttributes(),
            ["data-toggle"]: "dropdown",
        };
    }

    componentSpecificStyles(): b.IBobrilStyleArray {
        return [...super.componentSpecificStyles(), dropdownToggleStyles.dropdownToggle];
    }
}

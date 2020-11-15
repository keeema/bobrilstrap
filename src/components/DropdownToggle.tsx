import * as b from "bobril";
import { IAllAttrs } from "./BaseElement";
import { Button, IButtonData } from "./Button";

export const dropdownToggleStyles = {
    dropdownToggle: b.styleDef("dropdown-toggle"),
    dropdownToggleSplit: b.styleDef("dropdown-toggle-split"),
};

export interface IDropdownToggleData extends IButtonData {
    split?: boolean;
    "display-static"?: boolean;
    offset?: string;
}

export class DropdownToggle extends Button<IDropdownToggleData> {
    static id: string = "bobrilstrap-dropdown-toggle";

    componentProperties = (): (keyof IDropdownToggleData)[] => [...super.componentProperties(), "split", "display-static", "offset"];

    componentAdditionalAttributes(): IAllAttrs {
        return {
            ...super.componentAdditionalAttributes(),
            ["data-toggle"]: "dropdown",
            "aria-haspopup": this.data["aria-haspopup"] !== undefined ? this.data["aria-haspopup"] : true,
            "data-display": this.data["display-static"] ? "static" : this.data["data-display"],
            "data-offset": this.data.offset || this.data["data-offset"],
        };
    }

    componentSpecificStyles(): b.IBobrilStyleArray {
        return [
            ...super.componentSpecificStyles(),
            dropdownToggleStyles.dropdownToggle,
            this.data.split && dropdownToggleStyles.dropdownToggleSplit,
        ];
    }
}

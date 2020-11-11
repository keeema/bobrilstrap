import * as b from "bobril";
import { IAllAttrs } from "./BaseElement";
import { Button, IButtonData } from "./Button";

export const dropdownToggleStyles = {
    dropdownToggle: b.styleDef("dropdown-toggle"),
    dropdownToggleSplit: b.styleDef("dropdown-toggle-split"),
};

export interface IDropdownToggleData extends IButtonData {
    split?: boolean;
}

export class DropdownToggle extends Button<IDropdownToggleData> {
    static id: string = "bobrilstrap-dropdown-toggle";

    readonly componentProperties: (keyof IButtonData)[] = ["variant", "size" /* , "href" */, "type", "block", "split"];

    componentAdditionalAttributes(): IAllAttrs {
        return {
            ...super.componentAdditionalAttributes(),
            ["data-toggle"]: "dropdown",
            "aria-haspopup": this.data["aria-haspopup"] !== undefined ? this.data["aria-haspopup"] : true,
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

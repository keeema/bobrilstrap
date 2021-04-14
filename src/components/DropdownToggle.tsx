import * as b from "bobril";
import { Tags } from "../../utils/tags";
import { IAllAttrs } from "./BaseElement";
import { Button, IButtonData } from "./Button";
import { navLinkStyles } from "./NavLink";

export const dropdownToggleStyles = {
    dropdownToggle: b.styleDef("dropdown-toggle"),
    dropdownToggleSplit: b.styleDef("dropdown-toggle-split"),
};

export interface IDropdownToggleData extends IButtonData {
    split?: boolean;
    "display-static"?: boolean;
    offset?: string;
    "nav-link"?: boolean;
}

export class DropdownToggle extends Button<IDropdownToggleData> {
    static id: string = "bobrilstrap-dropdown-toggle";

    get tag(): Tags {
        return this.data["nav-link"] ? "a" : this.data.href ? "a" : "button";
    }

    componentProperties = (): (keyof IDropdownToggleData)[] => [
        ...super.componentProperties(),
        "split",
        "display-static",
        "offset",
        "nav-link",
    ];

    componentAdditionalAttributes(): IAllAttrs {
        const attrs: IAllAttrs = {
            ...super.componentAdditionalAttributes(),
            ["data-bs-toggle"]: "dropdown",
            "aria-haspopup": this.data["aria-haspopup"] !== undefined ? this.data["aria-haspopup"] : true,
            "data-bs-display": this.data["display-static"] ? "static" : this.data["data-bs-display"],
            "data-bs-offset": this.data.offset || this.data["data-bs-offset"],
        };

        if (this.data["nav-link"] && this.data.href === undefined) {
            attrs["href"] = "#";
        }
        return attrs;
    }

    componentSpecificStyles(): b.IBobrilStyleArray {
        const styles = [
            dropdownToggleStyles.dropdownToggle,
            this.data.split && dropdownToggleStyles.dropdownToggleSplit,
            this.data["nav-link"] && navLinkStyles.navLink,
        ];

        return this.data["nav-link"] ? styles : [...super.componentSpecificStyles(), ...styles];
    }
}

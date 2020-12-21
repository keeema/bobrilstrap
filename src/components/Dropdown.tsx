import * as b from "bobril";
import { Tags } from "../../utils/tags";
import { ButtonGroup, IButtonGroupData } from "./ButtonGroup";
import { DropdownDivider } from "./DropdownDivider";
import { DropdownHeader } from "./DropdownHeader";
import { DropdownItem } from "./DropdownItem";
import { DropdownMenu } from "./DropdownMenu";
import { DropdownToggle } from "./DropdownToggle";
import { navItemStyles } from "./NavItem";

export type Direction = "up" | "down" | "left" | "right" | "responsive";

export const dropdownStyles = {
    down: b.styleDef("dropdown"),
    up: b.styleDef("dropup"),
    left: b.styleDef("dropleft"),
    right: b.styleDef("dropright"),
};

export interface IDropdownData extends IButtonGroupData {
    direction?: Direction;
    "nav-item"?: boolean;
}

export class Dropdown extends ButtonGroup<IDropdownData> {
    static id: string = "bobrilstrap-dropdown";
    static Divider = DropdownDivider;
    static Header = DropdownHeader;
    static Item = DropdownItem;
    static Menu = DropdownMenu;
    static Toggle = DropdownToggle;

    get tag(): Tags {
        return this.data["nav-item"] ? "li" : "div";
    }

    componentProperties = (): (keyof IDropdownData)[] => [...super.componentProperties(), "direction", "nav-item"];

    componentSpecificStyles(): b.IBobrilStyleArray {
        return [
            ...super.componentSpecificStyles(),
            this.data.direction !== "responsive" && dropdownStyles[this.data.direction ?? "down"],
            this.data["nav-item"] && navItemStyles.navItem,
        ];
    }
}

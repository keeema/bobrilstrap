import * as b from "bobril";
import { ButtonGroup, IButtonGroupData } from "./ButtonGroup";
import { DropdownDivider } from "./DropdownDivider";
import { DropdownHeader } from "./DropdownHeader";
import { DropdownItem } from "./DropdownItem";
import { DropdownMenu } from "./DropdownMenu";
import { DropdownToggle } from "./DropdownToggle";

export type Direction = "up" | "down" | "left" | "right" | "responsive";

export const dropdownStyles = {
    down: b.styleDef("dropdown"),
    up: b.styleDef("dropup"),
    left: b.styleDef("dropleft"),
    right: b.styleDef("dropright"),
};

export interface IDropdownData extends IButtonGroupData {
    direction?: Direction;
}

export class Dropdown extends ButtonGroup<IDropdownData> {
    static id: string = "bobrilstrap-dropdown";
    static Divider = DropdownDivider;
    static Header = DropdownHeader;
    static Item = DropdownItem;
    static Menu = DropdownMenu;
    static Toggle = DropdownToggle;

    componentProperties = (): (keyof IDropdownData)[] => [...super.componentProperties(), "direction"];

    componentSpecificStyles(): b.IBobrilStyleArray {
        return [...super.componentSpecificStyles(), this.data.direction !== "responsive" && dropdownStyles[this.data.direction ?? "down"]];
    }
}

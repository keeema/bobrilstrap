import * as b from "bobril";
import { createDictionary } from "../../helpers/dict";
import { IBaseElementDataWithChildren, BaseElement } from "./BaseElement";

export type DropdownMenuAlignment = "left" | "right";
const dropdownMenuAlignmentScale: DropdownMenuAlignment[] = ["left", "right"];

export const dropdownMenuStyles = {
    dropdownMenu: b.styleDef("dropdown-menu"),
    align: createDictionary(dropdownMenuAlignmentScale.map((value) => [value, b.styleDef(`dropdown-menu-${value}`)])),
    alignSm: createDictionary(dropdownMenuAlignmentScale.map((value) => [value, b.styleDef(`dropdown-menu-sm-${value}`)])),
    alignMd: createDictionary(dropdownMenuAlignmentScale.map((value) => [value, b.styleDef(`dropdown-menu-md-${value}`)])),
    alignLg: createDictionary(dropdownMenuAlignmentScale.map((value) => [value, b.styleDef(`dropdown-menu-lg-${value}`)])),
    alignXl: createDictionary(dropdownMenuAlignmentScale.map((value) => [value, b.styleDef(`dropdown-menu-xl-${value}`)])),
};

export interface IDropdownMenuData extends IBaseElementDataWithChildren {
    align?: DropdownMenuAlignment;
    "align-sm"?: DropdownMenuAlignment;
    "align-md"?: DropdownMenuAlignment;
    "align-lg"?: DropdownMenuAlignment;
    "align-xl"?: DropdownMenuAlignment;
}

export class DropdownMenu extends BaseElement<IDropdownMenuData> {
    static id: string = "bobrilstrap-dropdown-menu";
    readonly componentProperties: (keyof IDropdownMenuData)[] = ["align", "align-sm", "align-md", "align-lg", "align-xl"];

    componentSpecificStyles(): b.IBobrilStyleArray {
        return [
            dropdownMenuStyles.dropdownMenu,
            this.data.align && dropdownMenuStyles.align(this.data.align),
            this.data["align-sm"] && dropdownMenuStyles.alignSm(this.data["align-sm"]),
            this.data["align-md"] && dropdownMenuStyles.alignMd(this.data["align-md"]),
            this.data["align-lg"] && dropdownMenuStyles.alignLg(this.data["align-lg"]),
            this.data["align-xl"] && dropdownMenuStyles.alignXl(this.data["align-xl"]),
        ];
    }
}

import * as b from "bobril";
import { BaseElement, IBaseElementData } from "./BaseElement";
import { pick } from "../../helpers/objectHelper";
import { Breakpoint, breakpoints } from "../layouts/breakpoint";
import { createDictionary } from "../../helpers/dict";
import { NavbarBrand } from "./NavbarBrand";
import { Nav } from "./Nav";
import { NavbarToggler } from "./NavbarToggler";
import { NavbarCollapse } from "./NavbarCollapse";

const breakpointsOrDefault: (Breakpoint | true)[] = [...breakpoints, true];

export type NavbarColorSchema = "dark" | "light";

export const navbarStyles = {
    navbar: b.styleDef("navbar"),
    fixedTop: b.styleDef("fixed-top"),
    expand: createDictionary(
        breakpointsOrDefault.map((size) => [size, b.styleDef(size !== true ? `navbar-expand-${size}` : "navbar-expand")])
    ),
    colorSchema: createDictionary<NavbarColorSchema, b.IBobrilStyle>([
        ["dark", b.styleDef("navbar-dark")],
        ["light", b.styleDef("navbar-light")],
    ]),
};

interface INavbarElementData {
    expand?: boolean | Breakpoint;
    "fixed-top"?: boolean;
    "color-schema"?: NavbarColorSchema;
}

export type INavbarData = INavbarElementData & IBaseElementData;

export class Navbar extends BaseElement<INavbarData> {
    static id: string = "bobrilstrap-navbar";

    static Brand = NavbarBrand;
    static Nav = Nav;
    static Toggler = NavbarToggler;
    static Collapse = NavbarCollapse;

    readonly componentProperties: (keyof INavbarElementData)[] = ["expand", "color-schema", "fixed-top"];

    get tag(): string {
        return "nav";
    }

    get componentSpecificStyles(): b.IBobrilStyleArray {
        const data = pick(this.data, ...this.componentProperties);
        return [
            navbarStyles.navbar,
            data.expand !== false && navbarStyles.expand(data.expand ?? true),
            data["fixed-top"] && navbarStyles.fixedTop,
            data["color-schema"] && navbarStyles.colorSchema(data["color-schema"]),
        ];
    }
}

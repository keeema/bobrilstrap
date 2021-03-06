import * as b from "bobril";
import { BaseElement, IBaseElementDataWithChildren } from "./BaseElement";
import { Breakpoint, breakpoints } from "../layouts/breakpoint";
import { createDictionary } from "../../utils/dict";
import { NavbarBrand } from "./NavbarBrand";
import { Nav } from "./Nav";
import { NavbarToggler } from "./NavbarToggler";
import { NavbarCollapse } from "./NavbarCollapse";
import { Tags } from "../../utils/tags";
import { NavbarText } from "./NavbarText";

const breakpointsOrDefault: (Breakpoint | true)[] = [...breakpoints, true];

export type NavbarPlacement = "fixed-top" | "fixed-bottom" | "sticky-top";
export type NavbarColorSchema = "dark" | "light";

export const navbarStyles = {
    navbar: b.styleDef("navbar"),
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
    "color-schema"?: NavbarColorSchema;
}

export type INavbarData = INavbarElementData & IBaseElementDataWithChildren;

export class Navbar extends BaseElement<INavbarData> {
    static id: string = "bobrilstrap-navbar";

    static Brand = NavbarBrand;
    static Collapse = NavbarCollapse;
    static Nav = Nav;
    static Text = NavbarText;
    static Toggler = NavbarToggler;

    componentProperties = (): (keyof INavbarData)[] => ["expand", "color-schema"];

    get tag(): Tags {
        return "nav";
    }

    componentSpecificStyles(): b.IBobrilStyleArray {
        const data = this.data;
        return [
            navbarStyles.navbar,
            data.expand && navbarStyles.expand(data.expand),
            data["color-schema"] && navbarStyles.colorSchema(data["color-schema"]),
        ];
    }
}

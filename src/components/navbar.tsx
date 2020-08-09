import * as b from "bobril";
import { BaseElement, IBaseElementData } from "./baseElement";
import { pick } from "../../helpers/objectHelper";
import { Size, sizeScale } from "../layouts/size";
import { createDictionary } from "../utilities/dict";
import { NavbarBrand } from "./navbarBrand";
import { Nav } from "./nav";

const sizeScaleOrDefault: (Size | true)[] = [...sizeScale, true];

export type NavbarColorSchema = "dark" | "light";

export const navbarStyles = {
    navbar: b.styleDef("navbar"),
    expand: createDictionary(
        sizeScaleOrDefault.map((size) => [size, b.styleDef(size !== true ? `navbar-expand-${size}` : "navbar-expand")])
    ),
    colorSchema: createDictionary<NavbarColorSchema, b.IBobrilStyle>([
        ["dark", b.styleDef("navbar-dark")],
        ["light", b.styleDef("navbar-light")],
    ]),
};

interface INavbarElementData {
    expand?: boolean | Size;
    "color-schema"?: NavbarColorSchema;
}

export type INavbarData = INavbarElementData & IBaseElementData;

export class Navbar extends BaseElement<INavbarData> {
    static id: string = "bobrilstrap-navbar";

    static Brand = NavbarBrand;
    static Nav = Nav;
    // static Link = NavbarLink;

    readonly componentProperties: (keyof INavbarElementData)[] = ["expand", "color-schema"];

    readonly tag: string = "nav";

    get componentSpecificStyles(): b.IBobrilStyleArray {
        const data = pick(this.data, ...this.componentProperties);
        return [
            navbarStyles.navbar,
            data.expand !== false && navbarStyles.expand(data.expand ?? true),
            data["color-schema"] && navbarStyles.colorSchema(data["color-schema"]),
        ];
    }
}

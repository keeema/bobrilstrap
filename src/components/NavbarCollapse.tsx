import * as b from "bobril";
import { Collapse } from "./Collapse";

export const navbarCollapseStyles = {
    navbarCollapse: b.styleDef("navbar-collapse"),
};

export class NavbarCollapse extends Collapse {
    static id: string = "bobrilstrap-navbar-collapse";

    get componentSpecificStyles(): b.IBobrilStyleArray {
        return [...Collapse.componentSpecificStyles, navbarCollapseStyles.navbarCollapse];
    }
}

import * as b from "bobril";
import { Tab, ITabData } from "./tab";

export interface INavbarNavItem extends ITabData {}

export const NavbarNavItem = b.createDerivedComponent<INavbarNavItem, ITabData>(Tab, {
    id: "bobrilstrap-navbar-nav-item",
});

export default NavbarNavItem;

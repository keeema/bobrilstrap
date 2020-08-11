import * as b from "bobril";
import * as routes from "../routes";
import { Navbar, backgroundColor, Nav } from "../../index";
import { LinkItem } from "./item";
import { BobrilstrapIcon } from "./bobrilstrapIcon";
import { NpmLink } from "./npmLink";
import { margin } from "../../src/utilities/spacing";

// TODO: temporary until icons are added
const togglerIcon = b.styleDef("navbar-toggler-icon");

export function Navigation(): b.IBobrilNode {
    return (
        <Navbar expand="md" color-schema="dark" style={backgroundColor("dark")}>
            <BobrilstrapIcon />
            <Navbar.Toggler target="#main-navigation-items">
                <span style={togglerIcon}></span>
            </Navbar.Toggler>
            <Navbar.Collapse id="main-navigation-items">
                <Nav navbar>
                    <LinkItem name={routes.home.name}>Home</LinkItem>
                    <LinkItem name={routes.documentation.name}>Documentation</LinkItem>
                </Nav>
                <Nav navbar style={margin({ side: "l", size: "auto", breakpoint: "md" })}>
                    <NpmLink />
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    );
}

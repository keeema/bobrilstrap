import * as b from "bobril";
import * as routes from "../routes";
import { Navbar, backgroundColor, Nav } from "../../index";
import { LinkItem } from "./item";
import { BobrilstrapIcon } from "./bobrilstrapIcon";

export function NavigationHeader(): b.IBobrilNode {
    return (
        <Navbar expand="lg" color-schema="dark" style={backgroundColor("dark")}>
            <Nav navbar>
                <BobrilstrapIcon />
                <LinkItem name={routes.home.name}>Home</LinkItem>
                <LinkItem name={routes.documentation.name}>Documentation</LinkItem>
            </Nav>
        </Navbar>
    );
}

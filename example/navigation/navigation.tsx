import * as b from "bobril";
import * as routes from "../routes";
import { Navbar, backgroundColor, Nav } from "../../index";
import { LinkItem } from "./item";
import { BobrilstrapIcon } from "./bobrilstrapIcon";
import { NpmLink } from "./npmLink";
import { margin } from "../../src/utilities/spacing";

export function Navigation(): b.IBobrilNode {
    return (
        <Navbar expand="lg" color-schema="dark" style={backgroundColor("dark")}>
            <Nav navbar>
                <BobrilstrapIcon />
                <LinkItem name={routes.home.name}>Home</LinkItem>
                <LinkItem name={routes.documentation.name}>Documentation</LinkItem>
            </Nav>
            <Nav navbar style={margin({ side: "l", size: "auto", breakpoint: "lg" })}>
                <NpmLink />
            </Nav>
        </Navbar>
    );
}

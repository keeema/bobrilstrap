import * as b from "bobril";
import * as routes from "../routes";
import { Navbar, backgroundColor, Nav, margin } from "../../index";
import { LinkItem } from "./Item";
import { BobrilstrapIcon } from "./BobrilstrapIcon";
import { NpmLink } from "./NpmLink";
import { GithubLink } from "./Github";
import { BootstrapLink } from "./Bootstrap";
import { BobrilLink } from "./Bobril";

// TODO: temporary until icons are added
const togglerIcon = b.styleDef("navbar-toggler-icon");

export function Navigation(): b.IBobrilNode {
    const [collapsed, setCollapsed] = b.useState(true);

    return (
        <Navbar fixed-top expand="md" color-schema="dark" style={[navbarStyle, backgroundColor("dark")]}>
            <BobrilstrapIcon />
            <Navbar.Toggler onClick={() => setCollapsed(!collapsed)}>
                <span style={togglerIcon}></span>
            </Navbar.Toggler>
            <Navbar.Collapse collapsed={collapsed} onClick={() => setCollapsed(true)}>
                <Nav navbar>
                    <LinkItem name={routes.home.name}>Home</LinkItem>
                    <LinkItem name={routes.documentation.name}>Documentation</LinkItem>
                </Nav>
                <Nav navbar style={margin({ side: "l", size: "auto", breakpoint: "md" })}>
                    <GithubLink />
                    <BobrilLink />
                    <BootstrapLink />
                    <NpmLink />
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    );
}

const navbarStyle = b.styleDef({
    position: "sticky",
});

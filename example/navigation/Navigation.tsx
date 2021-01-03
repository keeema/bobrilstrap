import * as b from "bobril";
import * as routes from "../routes";
import { Navbar, backgroundColor, Nav, margin, Container, position, textAlign } from "../../index";
import { LinkItem } from "./Item";
import { BobrilstrapIcon } from "./BobrilstrapIcon";
import { NpmLink } from "./NpmLink";
import { GithubLink } from "./Github";
import { BootstrapLink } from "./Bootstrap";
import { BobrilLink } from "./Bobril";

export function Navigation(): b.IBobrilNode {
    const [collapsed, setCollapsed] = b.useState(true);

    return (
        <Navbar expand="md" color-schema="dark" style={[navbarStyle, backgroundColor("dark"), position("fixed-top")]}>
            <Container fluid>
                <BobrilstrapIcon />
                <Navbar.Toggler onClick={() => setCollapsed(!collapsed)}>
                    <Navbar.Toggler.Icon />
                </Navbar.Toggler>
                <Navbar.Collapse collapsed={collapsed} onClick={() => setCollapsed(true)} style={[textAlign("center")]}>
                    <Nav navbar>
                        <LinkItem name={routes.home.name}>Home</LinkItem>
                        <LinkItem name={routes.documentation.name}>Documentation</LinkItem>
                    </Nav>
                    <Nav navbar style={margin("s", "auto", "md")}>
                        <GithubLink />
                        <BobrilLink />
                        <BootstrapLink />
                        <NpmLink />
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

const navbarStyle = b.styleDef({
    position: "sticky",
});

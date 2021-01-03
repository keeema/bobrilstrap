import * as b from "bobril";
import { Icon, Navbar, textColor } from "../../index";

export function BootstrapLink(): b.IBobrilNode {
    return (
        <Navbar.Nav.Item>
            <Navbar.Nav.Link href="https://getbootstrap.com/" target="_blank">
                <Icon.Bootstrap width="24" height="24" viewBox="0 0 16 16" style={textColor("white")} />
            </Navbar.Nav.Link>
        </Navbar.Nav.Item>
    );
}

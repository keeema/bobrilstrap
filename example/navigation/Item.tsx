import * as b from "bobril";
import { Navbar } from "../../index";

export function LinkItem({ name, children }: { name: string; children: string }): b.IBobrilNode {
    return (
        <Navbar.Nav.Item>
            <Navbar.Nav.Link href={b.urlOfRoute(name)} active={b.isActive(name)}>
                {children}
            </Navbar.Nav.Link>
        </Navbar.Nav.Item>
    );
}

import * as b from "bobril";
import { Nav } from "../../index";

export function NpmLink(): b.IBobrilNode {
    return (
        <Nav.Item>
            <Nav.Link href="https://badge.fury.io/js/bobrilstrap">
                <img src="https://badge.fury.io/js/bobrilstrap.svg" alt="npm version" height="18" />
            </Nav.Link>
        </Nav.Item>
    );
}

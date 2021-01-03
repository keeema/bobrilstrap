import * as b from "bobril";
import { Dropdown } from "../../index";

export function VersionSelection(): b.IBobrilNode {
    return (
        <Dropdown nav-item>
            <Dropdown.Toggle nav-link id="version-selection">
                v5
            </Dropdown.Toggle>
            <Dropdown.Menu>
                <Dropdown.Item href="/v3/index.html" target="_blank">
                    v3
                </Dropdown.Item>
            </Dropdown.Menu>
        </Dropdown>
    );
}

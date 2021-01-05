import * as b from "bobril";
import { Dropdown } from "../../index";
import { margin } from "../../src/utilities/spacing";

export function VersionSelection({ onClick }: { onClick: () => void }): b.IBobrilNode {
    return (
        <Dropdown nav-item style={margin("x", "auto")}>
            <Dropdown.Toggle nav-link id="version-selection">
                v5
            </Dropdown.Toggle>
            <Dropdown.Menu>
                <Dropdown.Item href="/v3/index.html" target="_blank" onClick={onClick}>
                    v3
                </Dropdown.Item>
            </Dropdown.Menu>
        </Dropdown>
    );
}

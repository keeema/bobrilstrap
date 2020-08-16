import * as b from "bobril";
import { Col } from "../../../index";
import { display } from "../../../src/utilities/display";
import { SecondarySidebarItem } from "./secondarySidebarItem";

export function SecondarySidebar(): b.IBobrilNode {
    return (
        <Col as="nav" xl={2} style={[sidebarStyle, display("none"), display("block", "xl")]}>
            <ul style={sectionStyle}>
                <SecondarySidebarItem>Test 1</SecondarySidebarItem>
                <SecondarySidebarItem>Test 2</SecondarySidebarItem>
                <SecondarySidebarItem>Test 3</SecondarySidebarItem>
            </ul>
        </Col>
    );
}

const sidebarStyle = b.styleDef({
    order: 2,
    paddingTop: "1.5rem",
    paddingBottom: "1.5rem",
    fontSize: ".875rem",
    position: "sticky",
    top: "4rem",
    height: "subtract(100vh, 4rem)",
    overflowY: "auto",
});

const sectionStyle = b.styleDef({
    paddingLeft: 0,
    borderLeft: "1px solid #eee",
    listStyleType: "none",
});

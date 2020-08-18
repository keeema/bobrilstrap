import * as b from "bobril";
import { Col, Collapse, Button } from "../../../index";
import { SidebarItem } from "./primarySidebarItem";
import { documentation } from "../routeDefs";
import { margin } from "../../../src/utilities/spacing";
import { display } from "../../../src/utilities/display";

export function PrimarySidebar(): b.IBobrilNode {
    const smallDevice = window.innerWidth < 768;
    // TODO: let it react to changed screen size
    const [collapsed, setCollapsed] = b.useState(smallDevice);
    return (
        <Col md={3} xl={2} style={[sidebarStyle, smallDevice ? smallDeviceHeight : standardHeight]}>
            <Button variant="dark" onClick={() => setCollapsed(!collapsed)} style={(margin("auto"), display("none", "md"))}>
                Part
            </Button>
            <Collapse as="nav" style={linksStyle} collapsed={collapsed} onClick={() => setCollapsed(smallDevice)}>
                {documentation.subs.map((sub) => (
                    <SidebarItem route={sub} />
                ))}
            </Collapse>
        </Col>
    );
}

const sidebarStyle = b.styleDef({
    borderRight: "1px solid rgba(0,0,0,.1)",
});

const standardHeight = b.styleDef({
    position: "sticky",
    top: "4rem",
    height: "calc(100vh - 4rem)",
});

const smallDeviceHeight = b.styleDef({
    top: "0.65rem",
    minHeight: "3rem",
    display: "block",
    overflowX: "auto",
});

const linksStyle = b.styleDef({
    maxHeight: "100%",
    display: "block",
    overflowY: "auto",
    paddingTop: "1rem",
    paddingBottom: "1rem",
    marginRight: -15,
    marginLeft: -15,
});

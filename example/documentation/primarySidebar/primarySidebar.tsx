import * as b from "bobril";
import { Col } from "../../../index";
import { SidebarItem } from "./primarySidebarItem";
import { documentation } from "../routeDefs";

export function PrimarySidebar(): b.IBobrilNode {
    return (
        <Col md={3} xl={2} style={sidebarStyle}>
            <nav style={linksStyle}>
                {documentation.subs.map((sub) => (
                    <SidebarItem route={sub} />
                ))}
            </nav>
        </Col>
    );
}

const sidebarStyle = b.styleDef({
    position: "sticky",
    top: "4rem",
    height: "calc(100vh - 4rem)",
    borderRight: "1px solid rgba(0,0,0,.1)",
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

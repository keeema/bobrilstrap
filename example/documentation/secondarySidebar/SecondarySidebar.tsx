import * as b from "bobril";
import { Col, display } from "../../../index";
import { SecondarySidebarItem } from "./SecondarySidebarItem";
import { currentActiveSubRoute } from "../../common/routing";
import { documentation } from "../routeDefs";

export function SecondarySidebar(): b.IBobrilNode {
    const currentFirstLevelDocumentationRoute = currentActiveSubRoute(documentation);
    const currentSecondLevelDocumentationRoute = currentFirstLevelDocumentationRoute.oneLevel
        ? currentFirstLevelDocumentationRoute
        : currentActiveSubRoute(currentFirstLevelDocumentationRoute);
    return (
        <Col as="nav" xl={2} style={[sidebarStyle, display("none"), display("block", "xl")]}>
            <ul style={sectionStyle}>
                {currentSecondLevelDocumentationRoute.subs.map((sub) => (
                    <SecondarySidebarItem route={sub} />
                ))}
            </ul>
        </Col>
    );
}

const sidebarStyle = b.styleDef({
    order: 2,
    paddingBottom: "1.5rem",
    fontSize: ".875rem",
    position: "sticky",
    top: "4rem",
    height: "calc(100vh - 4rem)",
    overflowY: "auto",
});

const sectionStyle = b.styleDef({
    paddingTop: "1rem",
    paddingLeft: 0,
    borderLeft: "1px solid #eee",
    listStyleType: "none",
});

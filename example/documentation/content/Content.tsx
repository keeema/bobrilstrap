import * as b from "bobril";
import { Col, padding } from "../../../index";

export function Content(data: b.IRouteHandlerData): b.IBobrilNode {
    return (
        <Col as="main" md={9} xl={8} role="main" style={[padding("y", 2, "md"), padding("s", 5, "md")]}>
            {data.activeRouteHandler()}
        </Col>
    );
}

import * as b from "bobril";
import { Col } from "../../../index";
import { padding } from "../../../src/utilities/spacing";

export function Content(data: b.IRouteHandlerData): b.IBobrilNode {
    return (
        <Col
            as="main"
            md={9}
            xl={8}
            role="main"
            style={[padding({ side: "y", breakpoint: "md", size: 3 }), padding({ side: "l", breakpoint: "md", size: 5 })]}
        >
            {data.activeRouteHandler()}
        </Col>
    );
}

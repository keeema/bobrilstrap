import * as b from "bobril";
import { Row, Container } from "../../index";
import { PrimarySidebar } from "./primarySidebar/primarySidebar";
import { Content } from "./content/content";
import { SecondarySidebar } from "./secondarySidebar/secondarySidebar";

export function Documentation(data: b.IRouteHandlerData): b.IBobrilNode {
    return (
        <Container fluid>
            <Row>
                <PrimarySidebar />
                <SecondarySidebar />
                <Content {...data} />
            </Row>
        </Container>
    );
}

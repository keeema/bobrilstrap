import * as b from "bobril";
import { Row, Container } from "../../index";
import { PrimarySidebar } from "./primarySidebar/PrimarySidebar";
import { Content } from "./content/Content";
import { SecondarySidebar } from "./secondarySidebar/SecondarySidebar";

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

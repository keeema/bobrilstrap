import * as b from "bobril";
import { Row, Container } from "../../index";
import { PrimarySidebar } from "./primarySidebar/primarySidebar";
import { Content } from "./content";
import { SecondarySidebar } from "./secondarySidebar/secondarySidebar";

export function Documentation(): b.IBobrilNode {
    return (
        <Container fluid>
            <Row>
                <PrimarySidebar />
                <SecondarySidebar />
                <Content />
            </Row>
        </Container>
    );
}

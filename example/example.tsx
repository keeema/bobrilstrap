import * as b from "bobril";
import "../index";
import "bootstrap/dist/css/bootstrap.min.css";
import { CarouselExample } from "./carousel";
import { ButtonExample } from "./button";
import { Container, Row, Col } from "../index";

b.init(() => (
    <Container fluid>
        <Row>
            <Col sm={5} offset={3}>
                Col 1
            </Col>
        </Row>
        <Row>
            <Col sm="auto">
                <ButtonExample />
            </Col>
        </Row>
        <Row>
            <Col>
                <CarouselExample />
            </Col>
        </Row>
    </Container>
));

import * as b from "bobril";
import "../index";
import "bootstrap/dist/css/bootstrap.min.css";
import { CarouselExample } from "./carousel";
import { ButtonExample } from "./button";
import { Container, Row, Col } from "../index";
import { alignSelf } from "../src/utilities/flex";

b.init(() => (
    <Container fluid>
        <Row>
            <Col sm style={alignSelf("start")}>
                Col 1
            </Col>
        </Row>
        <Row>
            <Col sm={5} offset={3}>
                Col 1
            </Col>
        </Row>
        <Row span={2} xl={4} invisible>
            <Col>Col 1</Col>
            <Col>Col 2</Col>
            <Col>Col 3</Col>
            <Col>Col 4</Col>
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

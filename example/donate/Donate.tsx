import * as b from "bobril";
import { Button, Col, Container, Row, textAlign } from "../../index";

export function Donate(): b.IBobrilNode {
    return (
        <Container style={textAlign("center")}>
            <h1>Donation</h1>
            <Row>
                <Col>
                    <p>
                        Bobrilstrap is developed with love by volunteer in his spare time. Donations will be used to pay equipment, domain
                        and other costs.
                    </p>
                </Col>
            </Row>
            <Row>
                <Col>
                    <Button variant="primary" href="https://www.paypal.me/keeema/1eur" target="_blank">
                        Send 1€
                    </Button>
                </Col>
            </Row>
        </Container>
    );
}

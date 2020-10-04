import * as b from "bobril";
import { Anchor } from "../../../../../common/Anchor";
import { Code } from "../../../../../common/Code";
import { Example } from "../../../../../common/Example";
import { Container, Col, Row } from "../../../../../../index";
import { gridStyle } from "../../../../../common/styles";

export function HowItWorks(): b.IBobrilNode {
    return (
        <>
            <Anchor name="how-it-works">
                <h2>How it works</h2>
            </Anchor>
            <p>
                Bootstrap’s grid system uses a series of containers, rows, and columns to layout and align content. It’s built with flexbox
                and is fully responsive.
            </p>
            <Example>
                <Container>
                    <Row>
                        <Col sm style={gridStyle}>
                            One of three columns.
                        </Col>
                        <Col sm style={gridStyle}>
                            One of three columns.
                        </Col>
                        <Col sm style={gridStyle}>
                            One of three columns.
                        </Col>
                    </Row>
                </Container>
            </Example>
            <Code language="tsx">{`<Container>
    <Row>
        <Col sm>One of three columns.</Col>
        <Col sm>One of three columns.</Col>
        <Col sm>One of three columns.</Col>
    </Row>
</Container>`}</Code>
            <p>
                The above example creates three equal-width columns on small, medium, large, and extra large devices using our predefined
                grid classes. Those columns are centered in the page with the parent container.
            </p>
        </>
    );
}

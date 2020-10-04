import * as b from "bobril";
import { Col, Container, order, Row, margin } from "../../../../../../index";
import { Anchor } from "../../../../../common/Anchor";
import { Code } from "../../../../../common/Code";
import { Example } from "../../../../../common/Example";
import { gridStyle } from "../../../../../common/styles";

export function Reordering(): b.IBobrilNode {
    return (
        <>
            <Anchor name="reordering">
                <h2>Reordering</h2>
            </Anchor>
            <Anchor name="order-utilities">
                <h3>Order utilities</h3>
            </Anchor>
            <Example>
                <Container>
                    <Row>
                        <Col style={gridStyle}>First in DOM, no order applied</Col>
                        <Col style={[order(12), gridStyle]}>Second in DOM, with a larger order</Col>
                        <Col style={[order(1), gridStyle]}>Third in DOM, with an order of 1</Col>
                    </Row>
                </Container>
            </Example>
            <Code language="tsx">{`<Container>
    <Row>
        <Col>First in DOM, no order applied</Col>
        <Col style={order(12)}>Second in DOM, with a larger order</Col>
        <Col style={order(1)}>Third in DOM, with an order of 1</Col>
    </Row>
</Container>`}</Code>
            <p>
                There is also <code>first</code> and <code>last</code> variant.
            </p>

            <Example>
                <Container>
                    <Row>
                        <Col style={[order("last"), gridStyle]}>First in DOM, ordered last</Col>
                        <Col style={gridStyle}>Second in DOM, unordered</Col>
                        <Col style={[order("first"), gridStyle]}>Third in DOM, ordered first</Col>
                    </Row>
                </Container>
            </Example>
            <Code language="tsx">{`<Container>
    <Row>
        <Col style={order("last")}>First in DOM, ordered last</Col>
        <Col>Second in DOM, unordered</Col>
        <Col style={order("first")}>Third in DOM, ordered first</Col>
    </Row>
</Container>`}</Code>
            <Anchor name="offsetting-columns">
                <h3>Offsetting columns</h3>
            </Anchor>
            <Anchor name="offsets">
                <h4>Offsets</h4>
            </Anchor>
            <p>
                Move columns to the right using <code>offset</code> or <code>offset-breakpoint-*</code> attribute.
            </p>
            <Example>
                <Container>
                    <Row>
                        <Col md={4} style={gridStyle}>
                            col-md-4
                        </Col>
                        <Col md={4} offset-md={4} style={gridStyle}>
                            col-md-4 offset-md-4
                        </Col>
                    </Row>
                    <Row>
                        <Col md={3} offset-md={3} style={gridStyle}>
                            col-md-3 offset-md-3
                        </Col>
                        <Col md={3} offset-md={3} style={gridStyle}>
                            col-md-3 offset-md-3
                        </Col>
                    </Row>
                    <Row>
                        <Col md={6} offset-md={3} style={gridStyle}>
                            col-md-6 offset-md-3
                        </Col>
                    </Row>
                </Container>
            </Example>
            <Code language="tsx">{`<Container>
    <Row>
        <Col md={4}>
            col-md-4
        </Col>
        <Col md={4} offset-md={4}>
            col-md-4 offset-md-4
        </Col>
    </Row>
    <Row>
        <Col md={3} offset-md={3}>
            col-md-3 offset-md-3
        </Col>
        <Col md={3} offset-md={3}>
            col-md-3 offset-md-3
        </Col>
    </Row>
    <Row>
        <Col md={6} offset-md={3}>
            col-md-6 offset-md-3
        </Col>
    </Row>
</Container>`}</Code>
            <p>In addition to column clearing at responsive breakpoints, you may need to reset offsets.</p>
            <Example>
                <Container>
                    <Row>
                        <Col sm={5} md={6} style={gridStyle}>
                            col-sm-5 col-md-6
                        </Col>
                        <Col sm={5} offset-sm={2} md={6} offset-md={0} style={gridStyle}>
                            col-sm-5 offset-sm-2 col-md-6 offset-md-0
                        </Col>
                    </Row>
                    <Row>
                        <Col sm={6} md={5} lg={6} style={gridStyle}>
                            col-sm-6 col-md-5 col-lg-6
                        </Col>
                        <Col sm={6} md={5} offset-md={2} lg={6} offset-lg={0} style={gridStyle}>
                            col-sm-6 col-md-5 offset-md-2 col-lg-6 offset-lg-0
                        </Col>
                    </Row>
                </Container>
            </Example>
            <Code language="tsx">{`<Container>
    <Row>
        <Col sm={5} md={6}>
            col-sm-5 col-md-6
        </Col>
        <Col sm={5} offset-sm={2} md={6} offset-md={0}>
            col-sm-5 offset-sm-2 col-md-6 offset-md-0
        </Col>
    </Row>
    <Row>
        <Col sm={6} md={5} lg={6}>
            col-sm-6 col-md-5 col-lg-6
        </Col>
        <Col sm={6} md={5} offset-md={2} lg={6} offset-lg={0}>
            col-sm-6 col-md-5 offset-md-2 col-lg-6 offset-lg-0
        </Col>
    </Row>
</Container>`}</Code>
            <Anchor name="margin-utilities">
                <h4>Margin utilities</h4>
            </Anchor>
            <p>
                With flexbox you can use margin utilities like <code>margin("auto")</code> to force sibling columns away from one another.
            </p>
            <Example>
                <Container>
                    <Row>
                        <Col md={4} style={gridStyle}>
                            col-md-4
                        </Col>
                        <Col md={4} style={[margin({ side: "l", size: "auto" }), gridStyle]}>
                            col-md-4 ml-auto
                        </Col>
                    </Row>
                    <Row>
                        <Col md={3} style={[margin({ side: "l", size: "auto", breakpoint: "md" }), gridStyle]}>
                            col-md-3 ml-md-auto
                        </Col>
                        <Col md={3} style={[margin({ side: "l", size: "auto", breakpoint: "md" }), gridStyle]}>
                            col-md-3 ml-md-auto
                        </Col>
                    </Row>
                    <Row>
                        <Col span="auto" style={[margin({ side: "r", size: "auto" }), gridStyle]}>
                            col-auto mr-auto
                        </Col>
                        <Col span="auto" style={gridStyle}>
                            col-auto
                        </Col>
                    </Row>
                </Container>
            </Example>
            <Code language="tsx">{`<Container>
    <Row>
        <Col md={4}>
            col-md-4
        </Col>
        <Col md={4} style={margin({ side: "l", size: "auto" })}>
            col-md-4 ml-auto
        </Col>
    </Row>
    <Row>
        <Col md={3} style={margin({ side: "l", size: "auto", breakpoint: "md" })}>
            col-md-3 ml-md-auto
        </Col>
        <Col md={3} style={margin({ side: "l", size: "auto", breakpoint: "md" })}>
            col-md-3 ml-md-auto
        </Col>
    </Row>
    <Row>
        <Col span="auto" style={margin({ side: "r", size: "auto" })}>
            col-auto mr-auto
        </Col>
        <Col span="auto">
            col-auto
        </Col>
    </Row>
</Container>`}</Code>
            <Anchor name="nesting">
                <h2>Nesting</h2>
            </Anchor>
            <p>
                To nest your content with the default grid, add a new <code>{`<Row>`}</code> within an existing <code>{`<Col>`}</code>{" "}
                column. Nested rows should include a set of columns that add up to 12 or fewer (it is not required that you use all 12
                available columns).
            </p>
            <Example>
                <Container>
                    <Row>
                        <Col sm={9} style={gridStyle}>
                            Level 1: col-sm-9
                            <Row>
                                <Col span={8} sm={6} style={gridStyle}>
                                    Level 2: col-8 col-sm-6
                                </Col>
                                <Col span={4} sm={6} style={gridStyle}>
                                    Level 2: col-4 col-sm-6
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                </Container>
            </Example>
            <Code language="tsx">{`<Container>
    <Row>
        <Col sm={9}>
            Level 1: col-sm-9
            <Row>
                <Col span={8} sm={6}>
                    Level 2: col-8 col-sm-6
                </Col>
                <Col span={4} sm={6}>
                    Level 2: col-4 col-sm-6
                </Col>
            </Row>
        </Col>
    </Row>
</Container>`}</Code>
        </>
    );
}

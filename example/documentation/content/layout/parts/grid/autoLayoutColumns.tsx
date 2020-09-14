import * as b from "bobril";
import { Col, Container, justifyContent, Row, width } from "../../../../../../index";
import { Anchor } from "../../../../../common/anchor";
import { Code } from "../../../../../common/code";
import { Example } from "../../../../../common/example";
import { gridStyle } from "../../../../../common/styles";

export function AutoLayoutColumns(): b.IBobrilNode {
    return (
        <>
            <Anchor name="auto-layout-columns">
                <h2>Auto-layout columns</h2>
            </Anchor>
            <p>Utilize breakpoint-specific column classes for easy column sizing.</p>
            <Anchor name="equal-width">
                <h3>Equal width</h3>
            </Anchor>
            <p>
                For example, here are two grid layouts that apply to every device and viewport, from <code>xs</code> to <code>xl</code>. Add
                any number of unit-less classes for each breakpoint you need and every column will be the same width.
            </p>
            <Example>
                <Container>
                    <Row>
                        <Col style={gridStyle}>1 of 2</Col>
                        <Col style={gridStyle}>2 of 2</Col>
                    </Row>
                    <Row>
                        <Col style={gridStyle}>1 of 3</Col>
                        <Col style={gridStyle}>2 of 3</Col>
                        <Col style={gridStyle}>3 of 3</Col>
                    </Row>
                </Container>
            </Example>
            <Code language="tsx">{`<Container>
<Row>
<Col>1 of 2</Col>
<Col>2 of 2</Col>
</Row>
<Row>
<Col>1 of 3</Col>
<Col>2 of 3</Col>
<Col>3 of 3</Col>
</Row>
</Container>`}</Code>
            <Anchor name="equal-width-multi-line">
                <h3>Equal-width multi-line</h3>
            </Anchor>
            <p>
                Create equal-width columns that span multiple lines by inserting a <code>{`width(100)`}</code> where you want the columns to
                break to a new line.
            </p>
            <Example>
                <Container>
                    <Row>
                        <Col style={gridStyle}>col</Col>
                        <Col style={gridStyle}>col</Col>
                        <div style={width(100)}></div>
                        <Col style={gridStyle}>col</Col>
                        <Col style={gridStyle}>col</Col>
                    </Row>
                </Container>
            </Example>
            <Code language="tsx">{`<Container>
<Row>
<Col>col</Col>
<Col>col</Col>
<div style={width(100)}></div>
<Col>col</Col>
<Col>col</Col>
</Row>
</Container>`}</Code>
            <Anchor name="setting-one-column-width">
                <h3>Setting one column width</h3>
            </Anchor>
            <p>
                Auto-layout for flexbox grid columns also means you can set the width of one column and have the sibling columns
                automatically resize around it. You may use predefined grid classes (as shown below), grid mixins, or inline widths. Note
                that the other columns will resize no matter the width of the center column.
            </p>
            <Example>
                <Container>
                    <Row>
                        <Col style={gridStyle}>1 of 3</Col>
                        <Col span={6} style={gridStyle}>
                            2 of 3 (wider)
                        </Col>
                        <Col style={gridStyle}>3 of 3</Col>
                    </Row>
                    <Row>
                        <Col style={gridStyle}>1 of 3</Col>
                        <Col span={5} style={gridStyle}>
                            2 of 3 (wider)
                        </Col>
                        <Col style={gridStyle}>3 of 3</Col>
                    </Row>
                </Container>
            </Example>
            <Code language="tsx">{`<Container>
<Row>
<Col>1 of 3</Col>
<Col span={6}>2 of 3 (wider)</Col>
<Col>3 of 3</Col>
</Row>
<Row>
<Col>1 of 3</Col>
<Col span={5}>2 of 3 (wider)</Col>
<Col>3 of 3</Col>
</Row>
</Container>`}</Code>
            <Anchor name="variable-width-content">
                <h3>Variable width content</h3>
            </Anchor>
            <Example>
                <Container>
                    <Row style={justifyContent("center", "md")}>
                        <Col lg={2} style={gridStyle}>
                            1 of 3
                        </Col>
                        <Col md="auto" style={gridStyle}>
                            Variable width content
                        </Col>
                        <Col lg={2} style={gridStyle}>
                            3 of 3
                        </Col>
                    </Row>
                    <Row>
                        <Col style={gridStyle}>1 of 3</Col>
                        <Col md="auto" style={gridStyle}>
                            Variable width content
                        </Col>
                        <Col lg={2} style={gridStyle}>
                            3 of 3
                        </Col>
                    </Row>
                </Container>
            </Example>
            <Code language="tsx">{`<Container>
<Row style={justifyContent("center", "md")}>
<Col lg={2}>1 of 3</Col>
<Col md="auto">Variable width content</Col>
<Col lg={2}>3 of 3</Col>
</Row>
<Row>
<Col>1 of 3</Col>
<Col md="auto">Variable width content</Col>
<Col lg={2}>3 of 3</Col>
</Row>
</Container>`}</Code>
        </>
    );
}

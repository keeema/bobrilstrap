import * as b from "bobril";
import { Col, Container, Row, alignItems, alignSelf, justifyContent, display, width, margin } from "../../../../../../index";
import { Anchor } from "../../../../../common/Anchor";
import { Code } from "../../../../../common/Code";
import { Example } from "../../../../../common/Example";
import { gridStyle, rowBox } from "../../../../../common/styles";

export function Alignment(): b.IBobrilNode {
    return (
        <>
            <Anchor name="alignment">
                <h2>Alignment</h2>
            </Anchor>
            <p>Use flexbox alignment utilities to vertically and horizontally align columns.</p>
            <Anchor name="vertical-alignment">
                <h3>Vertical alignment</h3>
            </Anchor>
            <p>
                For grids that are the same from the smallest of devices to the largest, use the <code>{`<Col>`}</code> component. Specify
                <code>span=*</code> prop when you need a particularly sized column.
            </p>
            <Example>
                <Container>
                    <Row style={[alignItems("start"), rowBox]}>
                        <Col style={gridStyle}>One of three columns</Col>
                        <Col style={gridStyle}>One of three columns</Col>
                        <Col style={gridStyle}>One of three columns</Col>
                    </Row>
                    <Row style={[alignItems("center"), rowBox, margin({ side: "t", size: 3 })]}>
                        <Col style={gridStyle}>One of three columns</Col>
                        <Col style={gridStyle}>One of three columns</Col>
                        <Col style={gridStyle}>One of three columns</Col>
                    </Row>
                    <Row style={[alignItems("end"), rowBox, margin({ side: "t", size: 3 })]}>
                        <Col style={gridStyle}>One of three columns</Col>
                        <Col style={gridStyle}>One of three columns</Col>
                        <Col style={gridStyle}>One of three columns</Col>
                    </Row>
                </Container>
            </Example>
            <Code language="tsx">{`<Container>
    <Row style={alignItems("start")}>
        <Col>One of three columns</Col>
        <Col>One of three columns</Col>
        <Col>One of three columns</Col>
    </Row>
    <Row style={alignItems("center")}>
        <Col>One of three columns</Col>
        <Col>One of three columns</Col>
        <Col>One of three columns</Col>
    </Row>
    <Row style={alignItems("end")}>
        <Col>One of three columns</Col>
        <Col>One of three columns</Col>
        <Col>One of three columns</Col>
    </Row>
</Container>`}</Code>
            <Example>
                <Container>
                    <Row style={rowBox}>
                        <Col style={[alignSelf("start"), gridStyle]}>One of three columns</Col>
                        <Col style={[alignSelf("center"), gridStyle]}>One of three columns</Col>
                        <Col style={[alignSelf("end"), gridStyle]}>One of three columns</Col>
                    </Row>
                </Container>
            </Example>
            <Code language="tsx">{`<Container>
    <Row>
        <Col style={alignSelf("start")}>One of three columns</Col>
        <Col style={alignSelf("center")}>One of three columns</Col>
        <Col style={alignSelf("end")}>One of three columns</Col>
    </Row>
</Container>`}</Code>
            <Anchor name="horizontal-alignment">
                <h3>Horizontal alignment</h3>
            </Anchor>
            <Example>
                <Container>
                    <Row style={justifyContent("start")}>
                        <Col span={4} style={gridStyle}>
                            One of three columns
                        </Col>
                        <Col span={4} style={gridStyle}>
                            One of three columns
                        </Col>
                    </Row>
                    <Row style={justifyContent("center")}>
                        <Col span={4} style={gridStyle}>
                            One of three columns
                        </Col>
                        <Col span={4} style={gridStyle}>
                            One of three columns
                        </Col>
                    </Row>
                    <Row style={justifyContent("end")}>
                        <Col span={4} style={gridStyle}>
                            One of three columns
                        </Col>
                        <Col span={4} style={gridStyle}>
                            One of three columns
                        </Col>
                    </Row>
                    <Row style={justifyContent("around")}>
                        <Col span={4} style={gridStyle}>
                            One of three columns
                        </Col>
                        <Col span={4} style={gridStyle}>
                            One of three columns
                        </Col>
                    </Row>
                    <Row style={justifyContent("between")}>
                        <Col span={4} style={gridStyle}>
                            One of three columns
                        </Col>
                        <Col span={4} style={gridStyle}>
                            One of three columns
                        </Col>
                    </Row>
                </Container>
            </Example>
            <Code language="tsx">
                {`<Container>
    <Row style={justifyContent("start")}>
        <Col span={4}>
            One of three columns
        </Col>
        <Col span={4} style={gridStyle}>
            One of three columns
        </Col>
    </Row>
    <Row style={justifyContent("center")}>
        <Col span={4}>
            One of three columns
        </Col>
        <Col span={4}>
            One of three columns
        </Col>
    </Row>
    <Row style={justifyContent("end")}>
        <Col span={4}>
            One of three columns
        </Col>
        <Col span={4}>
            One of three columns
        </Col>
    </Row>
    <Row style={justifyContent("around")}>
        <Col span={4}>
            One of three columns
        </Col>
        <Col span={4}>
            One of three columns
        </Col>
    </Row>
    <Row style={justifyContent("between")}>
        <Col span={4}>
            One of three columns
        </Col>
        <Col span={4}>
            One of three columns
        </Col>
    </Row>
</Container>`}
            </Code>
            <Anchor name="no-gutters">
                <h3>No gutters</h3>
            </Anchor>
            <p>
                The gutters between columns can be removed with <code>no-gutters</code>. This removes the negative margins from{" "}
                <code>{`<Row>`}</code> and the horizontal padding from all immediate children columns.
            </p>
            <Example>
                <Container>
                    <Row no-gutters>
                        <Col sm={6} md={8} style={gridStyle}>
                            col-sm-6 col-md-8
                        </Col>
                        <Col span={6} md={4} style={gridStyle}>
                            col-6 col-md-4
                        </Col>
                    </Row>
                </Container>
            </Example>
            <Code language="tsx">{`<Container>
    <Row no-gutters>
        <Col sm={6} md={8}>col-sm-6 col-md-8</Col>
        <Col span={6} md={4}>col-6 col-md-4</Col>
    </Row>
</Container>`}</Code>
            <Anchor name="column-wrapping">
                <h3>Column wrapping</h3>
            </Anchor>
            <p>
                If more than 12 columns are placed within a single row, each group of extra columns will, as one unit, wrap onto a new line.
            </p>
            <Example>
                <Container>
                    <Row>
                        <Col span={9} style={gridStyle}>
                            col-9
                        </Col>
                        <Col span={4} style={gridStyle}>
                            col-4
                            <br />
                            Since 9 + 4 = 13 &gt; 12, this 4-column-wide div gets wrapped onto a new line as one contiguous unit.
                        </Col>
                        <Col span={6} style={gridStyle}>
                            col-6
                            <br />
                            Subsequent columns continue along the new line.
                        </Col>
                    </Row>
                </Container>
            </Example>
            <Code language="tsx">{`<Container>
    <Row>
        <Col span={9}>
            col-9
        </Col>
        <Col span={4}>
            col-4
            <br />
            Since 9 + 4 = 13 &gt; 12, this 4-column-wide div gets wrapped onto a new line as one contiguous unit.
        </Col>
        <Col span={6}>
            col-6
            <br />
            Subsequent columns continue along the new line.
        </Col>
    </Row>
</Container>`}</Code>
            <Anchor name="column-breaks">
                <h3>Column breaks</h3>
            </Anchor>
            <p>
                Breaking columns to a new line in flexbox requires a small hack: add an element with <code>width: 100%</code> wherever you
                want to wrap your columns to a new line. Normally this is accomplished with multiple <code>{`<Row><`}</code>s, but not every
                implementation method can account for this.
            </p>
            <Example>
                <Container>
                    <Row>
                        <Col span={6} sm={3} style={gridStyle}>
                            col-6 col-sm-3
                        </Col>

                        <Col span={6} sm={3} style={gridStyle}>
                            col-6 col-sm-3
                        </Col>
                        <div style={width(100)} />
                        <Col span={6} sm={3} style={gridStyle}>
                            col-6 col-sm-3
                        </Col>
                        <Col span={6} sm={3} style={gridStyle}>
                            col-6 col-sm-3
                        </Col>
                    </Row>
                </Container>
            </Example>
            <Code language="tsx">{`<Container>
    <Row>
        <Col span={6} sm={3}>
            col-6 col-sm-3
        </Col>
        <Col span={6} sm={3}>
            col-6 col-sm-3
        </Col>
        <!-- Force next columns to break to new line -->
        <div style={width(100)} />
        <Col span={6} sm={3}>
            col-6 col-sm-3
        </Col>
        <Col span={6} sm={3}>
            col-6 col-sm-3
        </Col>
    </Row>
</Container>`}</Code>
            <p>You may also apply this break at specific breakpoints with our responsive display utilities.</p>
            <Example>
                <Container>
                    <Row>
                        <Col span={6} sm={3} style={gridStyle}>
                            col-6 col-sm-3
                        </Col>

                        <Col span={6} sm={3} style={gridStyle}>
                            col-6 col-sm-3
                        </Col>
                        <div style={[width(100), display("none"), display("block", "md")]} />
                        <Col span={6} sm={3} style={gridStyle}>
                            col-6 col-sm-3
                        </Col>
                        <Col span={6} sm={3} style={gridStyle}>
                            col-6 col-sm-3
                        </Col>
                    </Row>
                </Container>
            </Example>
            <Code language="tsx">{`<Container>
    <Row>
        <Col span={6} sm={3}>
            col-6 col-sm-3
        </Col>
        <Col span={6} sm={3}>
            col-6 col-sm-3
        </Col>
        <!-- Force next columns to break to new line at md breakpoint and up -->
        <div style={[width(100), display("none"), display("block", "md")]} />
        <Col span={6} sm={3}>
            col-6 col-sm-3
        </Col>
        <Col span={6} sm={3}>
            col-6 col-sm-3
        </Col>
    </Row>
</Container>`}</Code>
        </>
    );
}

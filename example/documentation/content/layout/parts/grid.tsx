import * as b from "bobril";
import { IRouteWithNavDefinition } from "../../../../common/routing";
import { Anchor } from "../../../../common/anchor";
import { Code } from "../../../../common/code";
import { Example } from "../../../../common/example";
import { Container, Col, Row } from "../../../../../index";
import { width } from "../../../../../src/utilities/sizing";
import { justifyContent } from "../../../../../src/utilities/alignment";

export const gridRoute: IRouteWithNavDefinition = {
    url: "grid",
    name: "grid",
    label: "Grid",
    handler: () => <Grid />,
    subs: [
        {
            url: "how-it-works",
            name: "how-it-works",
            label: "How it works",
            subs: [],
        },
        {
            url: "auto-layout-columns",
            name: "auto-layout-columns",
            label: "Auto-layout columns",
            subs: [
                {
                    url: "equal-width",
                    name: "equal-width",
                    label: "Equal width",
                    subs: [],
                },
                {
                    url: "equal-width-multi-line",
                    name: "equal-width-multi-line",
                    label: "Equal-width multi-line",
                    subs: [],
                },
                {
                    url: "setting-one-column-width",
                    name: "setting-one-column-width",
                    label: "Setting one column width",
                    subs: [],
                },
                {
                    url: "variable-width-content",
                    name: "variable-width-content",
                    label: "Variable width content",
                    subs: [],
                },
            ],
        },
    ],
};

const gridStyle = b.styleDef({ border: "1px solid gray", backgroundColor: "lightgray", padding: 15 });

export function Grid(): b.IBobrilNode {
    return (
        <>
            <h1>Grid</h1>
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
                grid classes. Those columns are centered in the page with the parent .container.
            </p>
            <Anchor name="auto-layout-columns">
                <h2>Auto-layout columns</h2>
            </Anchor>
            <p>Utilize breakpoint-specific column classes for easy column sizing.</p>
            <Anchor name="equal-width">
                <h2>Equal width</h2>
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
                <h2>Equal-width multi-line</h2>
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
                <h2>Setting one column width</h2>
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
                <h2>Variable width content</h2>
            </Anchor>
            <Example>
                <Container>
                    <Row style={justifyContent("center", "md")} class="row justify-content-md-center">
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
    <Row class="row justify-content-md-center">
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

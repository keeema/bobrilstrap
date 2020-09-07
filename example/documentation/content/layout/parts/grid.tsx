import * as b from "bobril";
import { IRouteWithNavDefinition } from "../../../../common/routing";
import { Anchor } from "../../../../common/anchor";
import { Code } from "../../../../common/code";
import { Example } from "../../../../common/example";
import { Container, Col, Row, Table, font, display } from "../../../../../index";
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
            url: "grid-options",
            name: "grid-options",
            label: "Grid options",
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
            <Anchor name="grid-options">
                <h2>Grid options</h2>
            </Anchor>
            <p>See how aspects of the Bootstrap grid system work across multiple devices with a handy table.</p>
            <Table bordered striped style={[tableStyle, display("block"), display("table", "sm")]}>
                <thead>
                    <tr>
                        <th></th>
                        <th>
                            <span style={font("bold")}>Extra small</span>
                            <br />
                            <span style={font("normal")}>{"<576px"}</span>
                        </th>
                        <th>
                            <span style={font("bold")}>Small</span>
                            <br />
                            <span style={font("normal")}>{"≥576px"}</span>
                        </th>
                        <th>
                            <span style={font("bold")}>Medium</span>
                            <br />
                            <span style={font("normal")}>{"≥768px"}</span>
                        </th>
                        <th>
                            <span style={font("bold")}>Large</span>
                            <br />
                            <span style={font("normal")}>{"≥992px"}</span>
                        </th>
                        <th>
                            <span style={font("bold")}>Extra large</span>
                            <br />
                            <span style={font("normal")}>{"≥1200px"}</span>
                        </th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <th>
                            <span style={font("bold")}>Max container width</span>
                        </th>
                        <td>None (auto)</td>
                        <td>540px</td>
                        <td>720px</td>
                        <td>960px</td>
                        <td>1140px</td>
                    </tr>
                    <tr>
                        <th>
                            <span style={font("bold")}>Component</span>
                        </th>
                        <td>
                            <code>{`<Col>`}</code>
                        </td>
                        <td>
                            <code>{`<Col sm>`}</code>
                        </td>
                        <td>
                            <code>{`<Col md>`}</code>
                        </td>
                        <td>
                            <code>{`<Col lg>`}</code>
                        </td>
                        <td>
                            <code>{`<Col xl>`}</code>
                        </td>
                    </tr>
                    <tr>
                        <th>
                            <span style={font("bold")}># of columns</span>
                        </th>
                        <td colspan="5">12</td>
                    </tr>
                    <tr>
                        <th>
                            <span style={font("bold")}>Gutter width</span>
                        </th>
                        <td colspan="5">30px (15px on each side of a column)</td>
                    </tr>
                    <tr>
                        <th>
                            <span style={font("bold")}>Nestable</span>
                        </th>
                        <td colspan="5">Yes</td>
                    </tr>
                    <tr>
                        <th>
                            <span style={font("bold")}>Column ordering</span>
                        </th>
                        <td colspan="5">Yes</td>
                    </tr>
                </tbody>
            </Table>
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

const tableStyle = b.styleDef({
    overflowX: "auto",
    width: "100%",
    maxWidth: "100%",
    marginBottom: "1rem",
});

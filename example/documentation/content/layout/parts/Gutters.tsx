import * as b from "bobril";
import { IRouteWithNavDefinition } from "../../../../common/routing";
import { Anchor } from "../../../../common/Anchor";
import { Example } from "../../../../common/Example";
import { padding, Container, Row, Col, overflow } from "../../../../../index";
import { Code } from "../../../../common/Code";
import { Lead } from "../../../../common/Lead";
import { gutter, gutterX, gutterY } from "../../../../../src/utilities/gutters";
import { gridStyle } from "../../../../common/styles";

export const guttersRoute: IRouteWithNavDefinition = {
    url: "gutters",
    name: "gutters",
    label: "Gutters",
    handler: () => <GuttersDoc />,
    subs: [
        {
            url: "how-they-work",
            name: "gutters-how-they-work",
            label: "How they work",
            subs: [],
        },
        {
            url: "horizontal-gutters",
            name: "gutters-horizontal-gutters",
            label: "Horizontal gutters",
            subs: [],
        },
        {
            url: "vertical-gutters",
            name: "gutters-vertical-gutters",
            label: "Vertical gutters",
            subs: [],
        },
        {
            url: "horizontal-and-vertical-gutters",
            name: "gutters-horizontal-and-vertical-gutters",
            label: "Horizontal and vertical gutters",
            subs: [],
        },
        {
            url: "row-columns-gutters",
            name: "gutters-row-columns-gutters",
            label: "Row columns gutters",
            subs: [],
        },
        {
            url: "no-gutters",
            name: "gutters-no-gutters",
            label: "No gutters",
            subs: [],
        },
    ],
};

export function GuttersDoc(): b.IBobrilNode {
    return (
        <>
            <Anchor name="gutters">
                <h1>Gutters</h1>
            </Anchor>
            <Lead>
                Gutters are the padding between your columns, used to responsively space and align content in the Bootstrap grid system.
            </Lead>
            <Anchor name="gutters-how-they-work">
                <h2>How they work</h2>
            </Anchor>
            <ul>
                <li>
                    <p>
                        <strong>
                            Gutters are the gaps between column content, created by horizontal <code>padding</code>.
                        </strong>{" "}
                        We set <code>padding-right</code> and <code>padding-left</code> on each column, and use negative <code>margin</code>{" "}
                        to offset that at the start and end of each row to align content.
                    </p>
                </li>
                <li>
                    <p>
                        <strong>
                            Gutters start at <code>1.5rem</code> (<code>24px</code>) wide.
                        </strong>{" "}
                        This allows us to match our grid to the padding and margin spacers scale.
                    </p>
                </li>
                <li>
                    <p>
                        <strong>Gutters can be responsively adjusted.</strong> Use breakpoint-specific gutter classes to modify horizontal
                        gutters, vertical gutters, and all gutters.
                    </p>
                </li>
            </ul>
            <Anchor name="gutters-horizontal-gutters">
                <h2>Horizontal gutters</h2>
            </Anchor>
            <p>
                <code>gutterX(*)</code> classes can be used to control the horizontal gutter widths. The <code>{`<Container>`}</code> or{" "}
                <code>{`<Container fluid>`}</code> parent may need to be adjusted if larger gutters are used too to avoid unwanted overflow,
                using a matching padding utility. For example, in the following example we’ve increased the padding with{" "}
                <code>{`padding({ side: "x", size: 4 })`}</code>:
            </p>
            <Example>
                <Container style={padding({ side: "x", size: 4 })}>
                    <Row style={gutterX(5)}>
                        <Col>
                            <div style={[padding(3), gridStyle]}>Custom column padding</div>
                        </Col>
                        <Col>
                            <div style={[padding(3), gridStyle]}>Custom column padding</div>
                        </Col>
                    </Row>
                </Container>
            </Example>
            <Code language="tsx">{`<Container style={padding({ side: "x", size: 4 })}>
    <Row style={gutterX(5)}>
        <Col>
            <div style={[padding(3), gridStyle]}>Custom column padding</div>
        </Col>
        <Col>
            <div style={[padding(3), gridStyle]}>Custom column padding</div>
        </Col>
    </Row>
</Container>`}</Code>
            <p>
                An alternative solution is to add a wrapper around the <code>{`<Row>`}</code> with the <code>overflow("hidden")</code>{" "}
                utility:
            </p>
            <Example>
                <Container style={overflow("hidden")}>
                    <Row style={gutterX(5)}>
                        <Col>
                            <div style={[padding(3), gridStyle]}>Custom column padding</div>
                        </Col>
                        <Col>
                            <div style={[padding(3), gridStyle]}>Custom column padding</div>
                        </Col>
                    </Row>
                </Container>
            </Example>
            <Code language="tsx">{`<Container style={overflow("hidden")}>
    <Row style={gutterX(5)}>
        <Col>
            <div style={[padding(3), gridStyle]}>Custom column padding</div>
        </Col>
        <Col>
            <div style={[padding(3), gridStyle]}>Custom column padding</div>
        </Col>
    </Row>
</Container>`}</Code>
            <Anchor name="gutters-vertical-gutters">
                <h2>Vertical gutters</h2>
            </Anchor>
            <p>
                <code>gutterY(*)</code> classes can be used to control the vertical gutter widths. Like the horizontal gutters, the vertical
                gutters can cause some overflow below the <code>.row</code> at the end of a page. If this occurs, you add a wrapper around{" "}
                <code>{`<Row>`}</code> with the <code>overflow("hidden")</code> utility:
            </p>
            <Example>
                <Container style={overflow("hidden")}>
                    <Row style={gutterY(5)}>
                        <Col span={6}>
                            <div style={[padding(3), gridStyle]}>Custom column padding</div>
                        </Col>
                        <Col span={6}>
                            <div style={[padding(3), gridStyle]}>Custom column padding</div>
                        </Col>
                        <Col span={6}>
                            <div style={[padding(3), gridStyle]}>Custom column padding</div>
                        </Col>
                        <Col span={6}>
                            <div style={[padding(3), gridStyle]}>Custom column padding</div>
                        </Col>
                    </Row>
                </Container>
            </Example>
            <Code language="tsx">{`<Container style={overflow("hidden"}>
    <Row style={gutterY(5)}>
        <Col span={6}>
            <div style={[padding(3), gridStyle]}>Custom column padding</div>
        </Col>
        <Col span={6}>
            <div style={[padding(3), gridStyle]}>Custom column padding</div>
        </Col>
        <Col span={6}>
            <div style={[padding(3), gridStyle]}>Custom column padding</div>
        </Col>
        <Col span={6}>
            <div style={[padding(3), gridStyle]}>Custom column padding</div>
        </Col>
    </Row>
</Container>`}</Code>
            <Anchor name="gutters-horizontal-and-vertical-gutters">
                <h2>Horizontal and vertical gutters</h2>
            </Anchor>
            <p>
                <code>gutter(*)</code> classes can be used to control the horizontal gutter widths, for the following example we use a
                smaller gutter width, so there won’t be a need to add the <code>overflow("hidden")</code> wrapper utility.
            </p>
            <Example>
                <Container>
                    <Row style={gutter(2)}>
                        <Col span={6}>
                            <div style={[padding(3), gridStyle]}>Custom column padding</div>
                        </Col>
                        <Col span={6}>
                            <div style={[padding(3), gridStyle]}>Custom column padding</div>
                        </Col>
                        <Col span={6}>
                            <div style={[padding(3), gridStyle]}>Custom column padding</div>
                        </Col>
                        <Col span={6}>
                            <div style={[padding(3), gridStyle]}>Custom column padding</div>
                        </Col>
                    </Row>
                </Container>
            </Example>
            <Code language="tsx">{`<Container>
            <Row style={gutter(2)}>
                <Col span={6}>
                    <div style={[padding(3), gridStyle]}>Custom column padding</div>
                </Col>
                <Col span={6}>
                    <div style={[padding(3), gridStyle]}>Custom column padding</div>
                </Col>
                <Col span={6}>
                    <div style={[padding(3), gridStyle]}>Custom column padding</div>
                </Col>
                <Col span={6}>
                    <div style={[padding(3), gridStyle]}>Custom column padding</div>
                </Col>
            </Row>
        </Container>`}</Code>
            <Anchor name="gutters-row-columns-gutters">
                <h2>Row columns gutters</h2>
            </Anchor>
            <p>
                Gutter classes can also be added to row columns. In the following example, we use responsive row columns and responsive
                gutter classes.
            </p>
            <Example>
                <Container>
                    <Row span={2} lg={5} style={[gutter(2), gutter(3, "lg")]}>
                        <Col>
                            <div style={[padding(3), gridStyle]}>Row column</div>
                        </Col>
                        <Col>
                            <div style={[padding(3), gridStyle]}>Row column</div>
                        </Col>
                        <Col>
                            <div style={[padding(3), gridStyle]}>Row column</div>
                        </Col>
                        <Col>
                            <div style={[padding(3), gridStyle]}>Row column</div>
                        </Col>
                        <Col>
                            <div style={[padding(3), gridStyle]}>Row column</div>
                        </Col>
                        <Col>
                            <div style={[padding(3), gridStyle]}>Row column</div>
                        </Col>
                        <Col>
                            <div style={[padding(3), gridStyle]}>Row column</div>
                        </Col>
                        <Col>
                            <div style={[padding(3), gridStyle]}>Row column</div>
                        </Col>
                        <Col>
                            <div style={[padding(3), gridStyle]}>Row column</div>
                        </Col>
                        <Col>
                            <div style={[padding(3), gridStyle]}>Row column</div>
                        </Col>
                    </Row>
                </Container>
            </Example>
            <Code language="tsx">{`<Container>
    <Row span={2} lg={5} style={[gutter(2), gutter(3, "lg")]}>
        <Col>
            <div style={[padding(3), gridStyle]}>Row column</div>
        </Col>
        <Col>
            <div style={[padding(3), gridStyle]}>Row column</div>
        </Col>
        <Col>
            <div style={[padding(3), gridStyle]}>Row column</div>
        </Col>
        <Col>
            <div style={[padding(3), gridStyle]}>Row column</div>
        </Col>
        <Col>
            <div style={[padding(3), gridStyle]}>Row column</div>
        </Col>
        <Col>
            <div style={[padding(3), gridStyle]}>Row column</div>
        </Col>
        <Col>
            <div style={[padding(3), gridStyle]}>Row column</div>
        </Col>
        <Col>
            <div style={[padding(3), gridStyle]}>Row column</div>
        </Col>
        <Col>
            <div style={[padding(3), gridStyle]}>Row column</div>
        </Col>
        <Col>
            <div style={[padding(3), gridStyle]}>Row column</div>
        </Col>
    </Row>
</Container>`}</Code>
            <Anchor name="gutters-no-gutters">
                <h2>No gutters</h2>
            </Anchor>
            <p>
                The gutters between columns in our predefined grid classes can be removed with <code>gutter(0)</code>. This removes the
                negative <code>margin</code>s from <code>{`<Row>`}</code> and the horizontal <code>padding</code> from all immediate
                children columns.
            </p>
            <p>
                <strong>Need an edge-to-edge design?</strong> Drop the parent <code>{`<Container>`}</code> or{" "}
                <code>{`<Container fluid>`}</code>.
            </p>
            <p>
                In practice, here’s how it looks. Note you can continue to use this with all other predefined grid classes (including column
                widths, responsive tiers, reorders, and more).
            </p>
            <Example>
                <Container>
                    <Row style={gutter(0)}>
                        <Col sm={6} md={8}>
                            <div style={gridStyle}>col-sm-6 col-md-8</div>
                        </Col>
                        <Col span={6} md={4}>
                            <div style={gridStyle}>col-6 col-md-4</div>
                        </Col>
                    </Row>
                </Container>
            </Example>
            <Code language="tsx">{`<Container>
    <Row style={gutter(0)}>
        <Col sm={6} md={8}>
            <div style={gridStyle}>col-sm-6 col-md-8</div>
        </Col>
        <Col span={6} md={4}>
            <div style={gridStyle}>col-6 col-md-4</div>
        </Col>
    </Row>
</Container>`}</Code>
        </>
    );
}

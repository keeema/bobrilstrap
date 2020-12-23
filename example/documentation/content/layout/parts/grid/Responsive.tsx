import * as b from "bobril";
import { Col, Container, Row } from "../../../../../../index";
import { Anchor } from "../../../../../common/Anchor";
import { Code } from "../../../../../common/Code";
import { Example } from "../../../../../common/Example";
import { gridStyle } from "../../../../../common/styles";

export function Responsive(): b.IBobrilNode {
    return (
        <>
            <Anchor name="responsive-behavior">
                <h2>Responsive behavior</h2>
            </Anchor>
            <p>
                Bobrilstrap’s grid includes five tiers of predefined behaviors for building complex responsive layouts. Customize the size
                of your columns on extra small, small, medium, large, or extra large devices however you see fit.
            </p>
            <Anchor name="all-breakpoints">
                <h3>All breakpoints</h3>
            </Anchor>
            <p>
                For grids that are the same from the smallest of devices to the largest, use the <code>{`<Col>`}</code> component. Specify
                <code>span=*</code> prop when you need a particularly sized column.
            </p>
            <Example>
                <Container>
                    <Row>
                        <Col style={gridStyle}>col</Col>
                        <Col style={gridStyle}>col</Col>
                        <Col style={gridStyle}>col</Col>
                        <Col style={gridStyle}>col</Col>
                    </Row>
                    <Row>
                        <Col span={8} style={gridStyle}>
                            col-8
                        </Col>
                        <Col span={4} style={gridStyle}>
                            col-4
                        </Col>
                    </Row>
                </Container>
            </Example>
            <Code language="tsx">{`<Container>
    <Row>
        <Col>col</Col>
        <Col>col</Col>
        <Col>col</Col>
        <Col>col</Col>
    </Row>
    <Row>
        <Col span={8}>col-8</Col>
        <Col span={4}>col-4</Col>
    </Row>
</Container>`}</Code>
            <Anchor name="stacked-horizontal">
                <h3>Stacked horizontal</h3>
            </Anchor>
            <p>
                Using a single set of <code>sm=*</code> props, you can create a basic grid system that starts out stacked and becomes
                horizontal at the small breakpoint (<code>sm</code>).
            </p>
            <Example>
                <Container>
                    <Row>
                        <Col sm={8} style={gridStyle}>
                            col-8
                        </Col>
                        <Col sm={4} style={gridStyle}>
                            col-4
                        </Col>
                    </Row>
                    <Row>
                        <Col sm style={gridStyle}>
                            col
                        </Col>
                        <Col sm style={gridStyle}>
                            col
                        </Col>
                        <Col sm style={gridStyle}>
                            col
                        </Col>
                    </Row>
                </Container>
            </Example>
            <Code language="tsx">{`<Container>
    <Row>
        <Col sm={8}>col-8</Col>
        <Col sm={4}>col-4</Col>
    </Row>
    <Row>
        <Col sm>col</Col>
        <Col sm>col</Col>
        <Col sm>col</Col>
    </Row>
</Container>`}</Code>
            <Anchor name="mix-and-match">
                <h3>Mix and match</h3>
            </Anchor>
            <p>
                Don’t want your columns to simply stack in some grid tiers? Use a combination of different props for each tier as needed.
                See the example below for a better idea of how it all works.
            </p>
            <Example>
                <Container>
                    {/* Stack the columns on mobile by making one full-width and the other half-width */}
                    <Row>
                        <Col md={8} style={gridStyle}>
                            col-md-8
                        </Col>
                        <Col span={6} md={4} style={gridStyle}>
                            col-6 col-md-4
                        </Col>
                    </Row>
                    {/* Columns start at 50% wide on mobile and bump up to 33.3% wide on desktop */}
                    <Row>
                        <Col span={6} md={4} style={gridStyle}>
                            col-6 col-md-4
                        </Col>
                        <Col span={6} md={4} style={gridStyle}>
                            col-6 col-md-4
                        </Col>
                        <Col span={6} md={4} style={gridStyle}>
                            col-6 col-md-4
                        </Col>
                    </Row>
                    {/* Columns are always 50% wide, on mobile and desktop  */}
                    <Row>
                        <Col span={6} style={gridStyle}>
                            col-6
                        </Col>
                        <Col span={6} style={gridStyle}>
                            col-6
                        </Col>
                    </Row>
                </Container>
            </Example>
            <Code language="tsx">{`<Container>
                    {/* Stack the columns on mobile by making one full-width and the other half-width */}
                    <Row>
                        <Col md={8} style={gridStyle}>
                            col-md-8
                        </Col>
                        <Col span={6} md={4} style={gridStyle}>
                            col-6 col-md-4
                        </Col>
                    </Row>
                    {/* Columns start at 50% wide on mobile and bump up to 33.3% wide on desktop */}
                    <Row>
                        <Col span={6} md={4} style={gridStyle}>
                            col-6 col-md-4
                        </Col>
                        <Col span={6} md={4} style={gridStyle}>
                            col-6 col-md-4
                        </Col>
                        <Col span={6} md={4} style={gridStyle}>
                            col-6 col-md-4
                        </Col>
                    </Row>
                    {/* Columns are always 50% wide, on mobile and desktop  */}
                    <Row>
                        <Col span={6} style={gridStyle}>
                            col-6
                        </Col>
                        <Col span={6} style={gridStyle}>
                            col-6
                        </Col>
                    </Row>
                </Container>`}</Code>
            <Anchor name="row-columns">
                <h3>Row columns</h3>
            </Anchor>
            <p>
                Use the responsive <code>{`<Row span="*">`}</code> or e.g. <code>{`<Row sm="*">`}</code> props to quickly set the number of
                columns that best render your content and layout. Whereas normal <code>{`<Col span="*">`}</code> props apply to the
                individual columns, the row columns props are set on the parent <code>{`<Row>`}</code> as a shortcut.
            </p>
            <p>Use these row columns props to quickly create basic grid layouts or to control your card layouts.</p>
            <Example>
                <Container>
                    <Row span={2}>
                        <Col style={gridStyle}>Column</Col>
                        <Col style={gridStyle}>Column</Col>
                        <Col style={gridStyle}>Column</Col>
                        <Col style={gridStyle}>Column</Col>
                    </Row>
                </Container>
            </Example>
            <Code language="tsx">{`<Container>
    <Row span={2}>
        <Col>Column</Col>
        <Col>Column</Col>
        <Col>Column</Col>
        <Col>Column</Col>
    </Row>
</Container>`}</Code>
            <Example>
                <Container>
                    <Row span={3}>
                        <Col style={gridStyle}>Column</Col>
                        <Col style={gridStyle}>Column</Col>
                        <Col style={gridStyle}>Column</Col>
                        <Col style={gridStyle}>Column</Col>
                    </Row>
                </Container>
            </Example>
            <Code language="tsx">{`<Container>
    <Row span={3}>
        <Col>Column</Col>
        <Col>Column</Col>
        <Col>Column</Col>
        <Col>Column</Col>
    </Row>
</Container>`}</Code>
            <Example>
                <Container>
                    <Row span={4}>
                        <Col style={gridStyle}>Column</Col>
                        <Col style={gridStyle}>Column</Col>
                        <Col style={gridStyle}>Column</Col>
                        <Col style={gridStyle}>Column</Col>
                    </Row>
                </Container>
            </Example>
            <Code language="tsx">{`<Container>
    <Row span={4}>
        <Col>Column</Col>
        <Col>Column</Col>
        <Col>Column</Col>
        <Col>Column</Col>
    </Row>
</Container>`}</Code>
            <Example>
                <Container>
                    <Row span={1} sm={2} md={4}>
                        <Col style={gridStyle}>Column</Col>
                        <Col style={gridStyle}>Column</Col>
                        <Col style={gridStyle}>Column</Col>
                        <Col style={gridStyle}>Column</Col>
                    </Row>
                </Container>
            </Example>
            <Code language="tsx">{`<Container>
    <Row span={1} sm={2} md={4}>
        <Col>Column</Col>
        <Col>Column</Col>
        <Col>Column</Col>
        <Col>Column</Col>
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

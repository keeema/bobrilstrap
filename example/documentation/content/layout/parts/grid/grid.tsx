import * as b from "bobril";
import { IRouteWithNavDefinition } from "../../../../../common/routing";
import { Anchor } from "../../../../../common/anchor";
import { Code } from "../../../../../common/code";
import { Example } from "../../../../../common/example";
import { Container, Col, Row } from "../../../../../../index";
import { GridOptions } from "./gridOptions";
import { AutoLayoutColumns } from "./autoLayoutColumns";
import { gridStyle } from "../../../../../common/styles";
import { Responsive } from "./responsive";
import { Alignment } from "./alignment";

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
        {
            url: "responsive-behavior",
            name: "responsive-behavior",
            label: "Responsive behavior",
            subs: [
                {
                    url: "all-breakpoints",
                    name: "all-breakpoints",
                    label: "All breakpoints",
                    subs: [],
                },
                {
                    url: "stacked-horizontal",
                    name: "stacked-horizontal",
                    label: "Stacked horizontal",
                    subs: [],
                },
                {
                    url: "mix-and-match",
                    name: "mix-and-match",
                    label: "Mix and match",
                    subs: [],
                },
                {
                    url: "gutters",
                    name: "gutters",
                    label: "Gutters",
                    subs: [],
                },
                {
                    url: "row-columns",
                    name: "row-columns",
                    label: "Row columns",
                    subs: [],
                },
            ],
        },
        {
            url: "alignment",
            name: "alignment",
            label: "Alignment",
            subs: [
                {
                    url: "vertical-alignment",
                    name: "vertical-alignment",
                    label: "Vertical alignment",
                    subs: [],
                },
                {
                    url: "horizontal-alignment",
                    name: "horizontal-alignment",
                    label: "Horizontal alignment",
                    subs: [],
                },
                {
                    url: "no-gutters",
                    name: "no-gutters",
                    label: "No gutters",
                    subs: [],
                },
                {
                    url: "column-wrapping",
                    name: "column-wrapping",
                    label: "Column wrapping",
                    subs: [],
                },
            ],
        },
    ],
};

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
            <GridOptions />
            <AutoLayoutColumns />
            <Responsive />
            <Alignment />
        </>
    );
}

import * as b from "bobril";
import { IRouteWithNavDefinition } from "../../../../common/routing";
import { Anchor } from "../../../../common/anchor";
import { Code } from "../../../../common/code";
import { Table, font, display, textColor } from "../../../../../index";

export const containersRoute: IRouteWithNavDefinition = {
    url: "containers",
    name: "containers",
    label: "Containers",
    handler: () => <Container />,
    subs: [
        {
            url: "all-in-one",
            name: "all-in-one",
            label: "All-in-one",
            subs: [],
        },
        {
            url: "fluid",
            name: "fluid",
            label: "Fluid",
            subs: [],
        },
        {
            url: "responsive",
            name: "responsive",
            label: "Responsive",
            subs: [],
        },
    ],
};

export function Container(): b.IBobrilNode {
    return (
        <>
            <h1>Container</h1>
            <Anchor name="all-in-one">
                <h2>All-in-one</h2>
            </Anchor>
            <p>
                Default <code>{`<Container>`}</code> is a responsive, fixed-width container, meaning its <code>max-width</code> changes at
                each breakpoint.
            </p>
            <Code language="tsx">{`<Container>
  <!-- Content here -->
</Container>`}</Code>
            <Anchor name="fluid">
                <h2>Fluid</h2>
            </Anchor>
            <p>
                Use <code>{`<Container fluid>`}</code> for a full width container, spanning the entire width of the viewport.
            </p>
            <Code language="tsx">{`<Container fluid>
  <!-- Content here -->
</Container>`}</Code>
            <Anchor name="responsive">
                <h2>Responsive</h2>
            </Anchor>
            <p>
                Responsive containers allow you to specify a class that is 100% wide until the specified breakpoint is reached, after which
                bootstrap applies <code>max-width</code>s for each of the higher breakpoints. For example,{" "}
                <code>{`<Container fluid="sm">`}</code> is 100% wide to start until the <code>sm</code> breakpoint is reached, where it will
                scale up with <code>md</code>, <code>lg</code>, and <code>xl</code>.
            </p>
            <Code language="tsx">{`<Container fluid="sm">100% wide until small breakpoint</Container>
<Container fluid="md">100% wide until medium breakpoint</Container>
<Container fluid="lg">100% wide until large breakpoint</Container>
<Container fluid="xl">100% wide until extra large breakpoint</Container>`}</Code>
            <Table bordered style={[tableStyle, display("block"), display("table", "sm")]}>
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
                        <td>
                            <code>{`<Container>`}</code>
                        </td>
                        <td style={textColor("muted")}>100%</td>
                        <td>540px</td>
                        <td>720px</td>
                        <td>960px</td>
                        <td>1140px</td>
                    </tr>
                    <tr>
                        <td>
                            <code>{`<Container fluid="sm">`}</code>
                        </td>
                        <td style={textColor("muted")}>100%</td>
                        <td>540px</td>
                        <td>720px</td>
                        <td>960px</td>
                        <td>1140px</td>
                    </tr>
                    <tr>
                        <td>
                            <code>{`<Container fluid="md">`}</code>
                        </td>
                        <td style={textColor("muted")}>100%</td>
                        <td style={textColor("muted")}>100%</td>
                        <td>720px</td>
                        <td>960px</td>
                        <td>1140px</td>
                    </tr>
                    <tr>
                        <td>
                            <code>{`<Container fluid="lg">`}</code>
                        </td>
                        <td style={textColor("muted")}>100%</td>
                        <td style={textColor("muted")}>100%</td>
                        <td style={textColor("muted")}>100%</td>
                        <td>960px</td>
                        <td>1140px</td>
                    </tr>
                    <tr>
                        <td>
                            <code>{`<Container fluid="xl">`}</code>
                        </td>
                        <td style={textColor("muted")}>100%</td>
                        <td style={textColor("muted")}>100%</td>
                        <td style={textColor("muted")}>100%</td>
                        <td style={textColor("muted")}>100%</td>
                        <td>1140px</td>
                    </tr>
                    <tr>
                        <td>
                            <code>{"<Container fluid>"}</code>
                        </td>
                        <td style={textColor("muted")}>100%</td>
                        <td style={textColor("muted")}>100%</td>
                        <td style={textColor("muted")}>100%</td>
                        <td style={textColor("muted")}>100%</td>
                        <td style={textColor("muted")}>100%</td>
                    </tr>
                </tbody>
            </Table>
        </>
    );
}

const tableStyle = b.styleDef({
    overflowX: "auto",
    width: "100%",
    maxWidth: "100%",
    marginBottom: "1rem",
});

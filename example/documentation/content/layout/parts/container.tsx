import * as b from "bobril";
import { IRouteWithNavDefinition } from "../../../../common/routing";
import { Anchor } from "../../../../common/anchor";
import { Code } from "../../../../common/code";

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
        </>
    );
}

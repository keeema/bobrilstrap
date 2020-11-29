import * as b from "bobril";
import { IRouteWithNavDefinition } from "../../../../common/routing";
import { Anchor } from "../../../../common/Anchor";
import { Example } from "../../../../common/Example";
import { Button, Container, displayHeading, Jumbotron, lead, margin } from "../../../../../index";
import { Code } from "../../../../common/Code";
import { Lead } from "../../../../common/Lead";

export const jumbotronRoute: IRouteWithNavDefinition = {
    url: "jumbotron",
    name: "jumbotron",
    label: "Jumbotron",
    handler: () => <JumbotronDoc />,
    subs: [],
};

export function JumbotronDoc(): b.IBobrilNode {
    return (
        <>
            <Anchor name="jumbotron">
                <h1>Jumbotron</h1>
            </Anchor>
            <Lead>Lightweight, flexible component for showcasing hero unit style content.</Lead>
            <p>Lightweight, flexible component for showcasing hero unit style content.</p>
            <Example>
                <Jumbotron>
                    <h1 style={displayHeading(4)}>Hello, world!</h1>
                    <p style={lead}>
                        This is a simple hero unit, a simple jumbotron-style component for calling extra attention to featured content or
                        information.
                    </p>
                    <hr style={margin({ side: "y", size: 4 })} />
                    <p>It uses utility classes for typography and spacing to space content out within the larger container.</p>
                    <Button variant="primary" size="lg">
                        Learn more
                    </Button>
                </Jumbotron>
            </Example>
            <Code language="tsx">{`<Jumbotron>
    <h1 style={displayHeading(4)}>Hello, world!</h1>
    <p style={lead}>
        This is a simple hero unit, a simple jumbotron-style component for calling extra attention to featured content or
        information.
    </p>
    <hr style={margin({ side: "y", size: 4 })} />
    <p>It uses utility classes for typography and spacing to space content out within the larger container.</p>
    <Button variant="primary" size="lg">
        Learn more
    </Button>
</Jumbotron>`}</Code>
            <p>
                To make the jumbotron full width, and without rounded corners, add the <code>fluid</code> prop and add a{" "}
                <code>{`<Container fluid`}</code> or <code>{`<Container fluid>`}</code> within.
            </p>
            <Example>
                <Jumbotron fluid>
                    <Container>
                        <h1 style={displayHeading(4)}>Fluid jumbotron</h1>
                        <p style={lead}>This is a modified jumbotron that occupies the entire horizontal space of its parent.</p>
                    </Container>
                </Jumbotron>
            </Example>
            <Code language="tsx">
                {`<Jumbotron fluid>
    <Container>
        <h1 style={displayHeading(4)}>Fluid jumbotron</h1>
        <p style={lead}>This is a modified jumbotron that occupies the entire horizontal space of its parent.</p>
    </Container>
</Jumbotron>`}
            </Code>
        </>
    );
}

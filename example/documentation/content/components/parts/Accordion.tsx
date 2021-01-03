import * as b from "bobril";
import { IRouteWithNavDefinition } from "../../../../common/routing";
import { Anchor } from "../../../../common/Anchor";
import { Example } from "../../../../common/Example";
import { Accordion } from "../../../../../index";
import { Code } from "../../../../common/Code";
import { Lead } from "../../../../common/Lead";

export const accordionsRoute: IRouteWithNavDefinition = {
    url: "accordions",
    name: "accordions",
    label: "Accordions",
    handler: () => <AccordionsDoc />,
    subs: [
        {
            url: "example",
            name: "accordions-example",
            label: "Example",
            subs: [],
        },
    ],
};

export function AccordionsDoc(): b.IBobrilNode {
    return (
        <>
            <Anchor name="accordions">
                <h1>Accordions</h1>
            </Anchor>
            <Lead>Build vertically collapsing accordions in combination with our Collapse JavaScript plugin.</Lead>
            <Anchor name="accordions-example">
                <h2>Example</h2>
            </Anchor>
            <p>Click the accordions below to expand/collapse the accordion content.</p>
            <p>
                Add <code>flush</code> prop to remove the default <code>background-color</code>, some borders, and some rounded corners to
                render accordions edge-to-edge with their parent container.
            </p>
            <Example>
                <Accordions />
            </Example>
            <Code language="tsx">{`function Accordions(): b.IBobrilNode {
    const [collapsed1, setCollapsed1] = b.useState(true);
    const [collapsed2, setCollapsed2] = b.useState(true);
    const [collapsed3, setCollapsed3] = b.useState(true);

    return (
        <Accordion id="accordionExample">
            <Accordion.Item>
                <Accordion.Header id="headingOne">
                    <Accordion.Button collapsed={collapsed1} onClick={() => setCollapsed1(!collapsed1)} aria-controls="collapseOne">
                        Accordion Item #1
                    </Accordion.Button>
                </Accordion.Header>
                <Accordion.Collapse collapsed={collapsed1} id="collapseOne" aria-labelledby="headingOne">
                    <Accordion.Body>
                        <strong>This is the first item's accordion body.</strong> Its state is controlled by <code>collapsed</code> prop on{" "}
                        <code>{\`<Accordion.Collapse>\`}</code> and <code>{\`<Accordion.Button>\`}</code>.
                    </Accordion.Body>
                </Accordion.Collapse>
            </Accordion.Item>
            <Accordion.Item>
                <Accordion.Header id="headingTwo">
                    <Accordion.Button collapsed={collapsed2} onClick={() => setCollapsed2(!collapsed2)} aria-controls="collapseTwo">
                        Accordion Item #2
                    </Accordion.Button>
                </Accordion.Header>
                <Accordion.Collapse collapsed={collapsed2} id="collapseTwo" aria-labelledby="headingTwo">
                    <Accordion.Body>
                        <strong>This is the second item's accordion body.</strong> Its state is controlled by <code>collapsed</code> prop on{" "}
                        <code>{\`<Accordion.Collapse>\`}</code> and <code>{\`<Accordion.Button>\`}</code>.
                    </Accordion.Body>
                </Accordion.Collapse>
            </Accordion.Item>
            <Accordion.Item>
                <Accordion.Header id="headingThree">
                    <Accordion.Button collapsed={collapsed3} onClick={() => setCollapsed3(!collapsed3)} aria-controls="collapseThree">
                        Accordion Item #3
                    </Accordion.Button>
                </Accordion.Header>
                <Accordion.Collapse collapsed={collapsed3} id="collapseThree" aria-labelledby="headingThree">
                    <Accordion.Body>
                        <strong>This is the third item's accordion body.</strong> Its state is controlled by <code>collapsed</code> prop on{" "}
                        <code>{\`<Accordion.Collapse>\`}</code> and <code>{\`<Accordion.Button>\`}</code>.
                    </Accordion.Body>
                </Accordion.Collapse>
            </Accordion.Item>
        </Accordion>
    );
}

<Accordions />`}</Code>
        </>
    );
}

function Accordions(): b.IBobrilNode {
    const [collapsed1, setCollapsed1] = b.useState(true);
    const [collapsed2, setCollapsed2] = b.useState(true);
    const [collapsed3, setCollapsed3] = b.useState(true);

    return (
        <Accordion id="accordionExample">
            <Accordion.Item>
                <Accordion.Header id="headingOne">
                    <Accordion.Button collapsed={collapsed1} onClick={() => setCollapsed1(!collapsed1)} aria-controls="collapseOne">
                        Accordion Item #1
                    </Accordion.Button>
                </Accordion.Header>
                <Accordion.Collapse collapsed={collapsed1} id="collapseOne" aria-labelledby="headingOne">
                    <Accordion.Body>
                        <strong>This is the first item's accordion body.</strong> Its state is controlled by <code>collapsed</code> prop on{" "}
                        <code>{`<Accordion.Collapse>`}</code> and <code>{`<Accordion.Button>`}</code>.
                    </Accordion.Body>
                </Accordion.Collapse>
            </Accordion.Item>
            <Accordion.Item>
                <Accordion.Header id="headingTwo">
                    <Accordion.Button collapsed={collapsed2} onClick={() => setCollapsed2(!collapsed2)} aria-controls="collapseTwo">
                        Accordion Item #2
                    </Accordion.Button>
                </Accordion.Header>
                <Accordion.Collapse collapsed={collapsed2} id="collapseTwo" aria-labelledby="headingTwo">
                    <Accordion.Body>
                        <strong>This is the second item's accordion body.</strong> Its state is controlled by <code>collapsed</code> prop on{" "}
                        <code>{`<Accordion.Collapse>`}</code> and <code>{`<Accordion.Button>`}</code>.
                    </Accordion.Body>
                </Accordion.Collapse>
            </Accordion.Item>
            <Accordion.Item>
                <Accordion.Header id="headingThree">
                    <Accordion.Button collapsed={collapsed3} onClick={() => setCollapsed3(!collapsed3)} aria-controls="collapseThree">
                        Accordion Item #3
                    </Accordion.Button>
                </Accordion.Header>
                <Accordion.Collapse collapsed={collapsed3} id="collapseThree" aria-labelledby="headingThree">
                    <Accordion.Body>
                        <strong>This is the third item's accordion body.</strong> Its state is controlled by <code>collapsed</code> prop on{" "}
                        <code>{`<Accordion.Collapse>`}</code> and <code>{`<Accordion.Button>`}</code>.
                    </Accordion.Body>
                </Accordion.Collapse>
            </Accordion.Item>
        </Accordion>
    );
}

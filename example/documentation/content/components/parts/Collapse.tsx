import * as b from "bobril";
import { IRouteWithNavDefinition } from "../../../../common/routing";
import { Anchor } from "../../../../common/Anchor";
import { Example } from "../../../../common/Example";
import { Button, Card, Col, Row, Collapse } from "../../../../../index";
import { Code } from "../../../../common/Code";
import { Lead } from "../../../../common/Lead";
import { OptionsRow, OptionsTable } from "../../../../common/OptionsTable";

export const collapseRoute: IRouteWithNavDefinition = {
    url: "collapse",
    name: "collapse",
    label: "Collapse",
    handler: () => <CollapseDoc />,
    subs: [
        {
            url: "how-it-works",
            name: "collapse-how-it-works",
            label: "How it works",
            subs: [],
        },
        {
            url: "examples",
            name: "collapse-example",
            label: "Example",
            subs: [],
        },
        {
            url: "options",
            name: "collapse-api",
            label: "API",
            subs: [],
        },
    ],
};

export function CollapseDoc(): b.IBobrilNode {
    return (
        <>
            <Anchor name="collapse">
                <h1>Collapse</h1>
            </Anchor>
            <Lead>Toggle the visibility of content across your project with bootstrap native Collapse.</Lead>
            <Anchor name="collapse-how-it-works">
                <h2>How it works</h2>
            </Anchor>
            <p>
                The collapse JavaScript plugin is used to show and hide content. Buttons or anchors are used as triggers that are mapped to
                specific elements you toggle. Collapsing an element will animate the <code>height</code> from its current value to{" "}
                <code>0</code>. Given how CSS handles animations, you cannot use <code>padding</code> on a <code>{`<Collapse>`}</code>{" "}
                element. Instead, use it on independent wrapping element.
            </p>
            <Anchor name="collapse-example">
                <h2>Examples</h2>
            </Anchor>
            <p>Click the buttons below to show and hide another element.</p>
            <p>
                Collapse works automatically using <code>collapsed</code> prop with defined value or using controller from{" "}
                <code>get-instance</code>prop.
            </p>
            <Example>
                <MultiCollapse />
            </Example>
            <Code language="tsx">{`function MultiCollapse(): b.IBobrilNode {
    const [collapsed1, setCollapsed1] = b.useState(true);
    const [collapsed2, setCollapsed2] = b.useState(true);

    return (
        <>
            <p>
                <Button onClick={() => setCollapsed1(!collapsed1)} aria-expanded={collapsed1}>
                    Toggle first element
                </Button>{" "}
                <Button onClick={() => setCollapsed2(!collapsed2)} aria-expanded={collapsed2}>
                    Toggle second element
                </Button>{" "}
                <Button
                    onClick={() => {
                        setCollapsed1(!collapsed1);
                        setCollapsed2(!collapsed2);
                    }}
                    aria-expanded={collapsed1 || collapsed2}
                >
                    Toggle both elements
                </Button>
            </p>
            <Row>
                <Col>
                    <Collapse collapsed={collapsed1}>
                        <Card>
                            <Card.Body>
                                Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. Nihil anim
                                keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident.
                            </Card.Body>
                        </Card>
                    </Collapse>
                </Col>
                <Col>
                    <Collapse collapsed={collapsed2}>
                        <Card>
                            <Card.Body>
                                Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. Nihil anim
                                keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident.
                            </Card.Body>
                        </Card>
                    </Collapse>
                </Col>
            </Row>
        </>
    );
}

<MultiCollapse />`}</Code>
            <Anchor name="collapse-api">
                <h2>API</h2>
            </Anchor>
            <OptionsTable>
                <OptionsRow>
                    {{
                        name: "collapsed",
                        type: "boolean",
                        defaultValue: "none",
                        description: "Determine the state of collapsible content.",
                    }}
                </OptionsRow>
                <OptionsRow>
                    {{
                        name: "onCollapse",
                        type: "() => void",
                        defaultValue: "undefined",
                        description: <p>This event is fired immediately when hiding is started.</p>,
                    }}
                </OptionsRow>
                <OptionsRow>
                    {{
                        name: "onCollapsed",
                        type: "() => void",
                        defaultValue: "undefined",
                        description: (
                            <p>
                                This event is fired when a collapse element has been hidden from the user (will wait for CSS transitions to
                                complete).
                            </p>
                        ),
                    }}
                </OptionsRow>
                <OptionsRow>
                    {{
                        name: "onShow",
                        type: "() => void",
                        defaultValue: "undefined",
                        description: <p>This event fires immediately when the showing is started.</p>,
                    }}
                </OptionsRow>
                <OptionsRow>
                    {{
                        name: "onShown",
                        type: "() => void",
                        defaultValue: "undefined",
                        description: (
                            <p>
                                This event is fired when a collapse element has been made visible to the user (will wait for CSS transitions
                                to complete).
                            </p>
                        ),
                    }}
                </OptionsRow>
                <OptionsRow>
                    {{
                        name: "get-instance",
                        type: "(collapse: ICollapse): void",
                        defaultValue: "undefined",
                        description: (
                            <p>
                                This callback is fired when alert is initialized and provides <code>collapse</code> as controller instance.
                            </p>
                        ),
                    }}
                </OptionsRow>
            </OptionsTable>
        </>
    );
}

function MultiCollapse(): b.IBobrilNode {
    const [collapsed1, setCollapsed1] = b.useState(true);
    const [collapsed2, setCollapsed2] = b.useState(true);

    return (
        <>
            <p>
                <Button onClick={() => setCollapsed1(!collapsed1)} aria-expanded={collapsed1}>
                    Toggle first element
                </Button>{" "}
                <Button onClick={() => setCollapsed2(!collapsed2)} aria-expanded={collapsed2}>
                    Toggle second element
                </Button>{" "}
                <Button
                    onClick={() => {
                        setCollapsed1(!collapsed1);
                        setCollapsed2(!collapsed2);
                    }}
                    aria-expanded={collapsed1 || collapsed2}
                >
                    Toggle both elements
                </Button>
            </p>
            <Row>
                <Col>
                    <Collapse collapsed={collapsed1}>
                        <Card>
                            <Card.Body>
                                Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. Nihil anim
                                keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident.
                            </Card.Body>
                        </Card>
                    </Collapse>
                </Col>
                <Col>
                    <Collapse collapsed={collapsed2}>
                        <Card>
                            <Card.Body>
                                Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. Nihil anim
                                keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident.
                            </Card.Body>
                        </Card>
                    </Collapse>
                </Col>
            </Row>
        </>
    );
}

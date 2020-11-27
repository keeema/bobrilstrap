import * as b from "bobril";
import { IRouteWithNavDefinition } from "../../../../common/routing";
import { Anchor } from "../../../../common/Anchor";
import { Example } from "../../../../common/Example";
import { Accordion, Button, Card, Col, margin, Row, textAlign, Collapse } from "../../../../../index";
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
            url: "accordion",
            name: "collapse-accordion",
            label: "Accordion",
            subs: [],
        },
        {
            url: "options",
            name: "collapse-options",
            label: "Options",
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
            <Lead>Toggle the visibility of content across your project.</Lead>
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
            <p>Click the buttons below to show and hide another element</p>
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
                            Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. Nihil anim
                            keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident.
                        </Card>
                    </Collapse>
                </Col>
                <Col>
                    <Collapse collapsed={collapsed2}>
                        <Card>
                            Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. Nihil anim
                            keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident.
                        </Card>
                    </Collapse>
                </Col>
            </Row>
        </>
    );
}

<MultiCollapse />`}</Code>
            <Anchor name="collapse-accordion">
                <h2>Accordion</h2>
            </Anchor>
            <p>
                Using the <code>{`<Card>`}</code> component, you can extend the default collapse behavior to create an accordion. To
                properly achieve the accordion style, be sure to use <code>{`<Accordion>`}</code> as a wrapper.
            </p>
            <Example>
                <Accordions />
            </Example>
            <Code language="tsx">{`function Accordions(): b.IBobrilNode {
    const [collapsed1, setCollapsed1] = b.useState(true);
    const [collapsed2, setCollapsed2] = b.useState(true);
    const [collapsed3, setCollapsed3] = b.useState(true);

    return (
        <Accordion>
            <Card>
                <Card.Header>
                    <h2 style={margin({ side: "b", size: 0 })}>
                        <Button variant="link" block style={textAlign("left")} onClick={() => setCollapsed1(!collapsed1)}>
                            Collapsible Group Item #1
                        </Button>
                    </h2>
                </Card.Header>
                <Collapse collapsed={collapsed1}>
                    <Card.Body>
                        Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia
                        aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor,
                        sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh
                        helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo.
                        Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them
                        accusamus labore sustainable VHS.
                    </Card.Body>
                </Collapse>
            </Card>
            <Card>
                <Card.Header>
                    <h2 style={margin({ side: "b", size: 0 })}>
                        <Button variant="link" block style={textAlign("left")} onClick={() => setCollapsed2(!collapsed2)}>
                            Collapsible Group Item #2
                        </Button>
                    </h2>
                </Card.Header>
                <Collapse collapsed={collapsed2}>
                    <Card.Body>
                        Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia
                        aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor,
                        sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh
                        helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo.
                        Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them
                        accusamus labore sustainable VHS.
                    </Card.Body>
                </Collapse>
            </Card>
            <Card>
                <Card.Header>
                    <h2 style={margin({ side: "b", size: 0 })}>
                        <Button variant="link" block style={textAlign("left")} onClick={() => setCollapsed3(!collapsed3)}>
                            Collapsible Group Item #3
                        </Button>
                    </h2>
                </Card.Header>
                <Collapse collapsed={collapsed3}>
                    <Card.Body>
                        Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia
                        aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor,
                        sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh
                        helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo.
                        Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them
                        accusamus labore sustainable VHS.
                    </Card.Body>
                </Collapse>
            </Card>
        </Accordion>
    );
}

<Accordions />`}</Code>
            <Anchor name="collapse-options">
                <h2>Accordion</h2>
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
                        type: "()) => void",
                        defaultValue: "undefined",
                        description: <p>This event fires immediately when the showing is started.</p>,
                    }}
                </OptionsRow>
                <OptionsRow>
                    {{
                        name: "onShown",
                        type: "()) => void",
                        defaultValue: "undefined",
                        description: (
                            <p>
                                This event is fired when a collapse element has been made visible to the user (will wait for CSS transitions
                                to complete).
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
                            Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. Nihil anim
                            keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident.
                        </Card>
                    </Collapse>
                </Col>
                <Col>
                    <Collapse collapsed={collapsed2}>
                        <Card>
                            Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. Nihil anim
                            keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident.
                        </Card>
                    </Collapse>
                </Col>
            </Row>
        </>
    );
}

function Accordions(): b.IBobrilNode {
    const [collapsed1, setCollapsed1] = b.useState(true);
    const [collapsed2, setCollapsed2] = b.useState(true);
    const [collapsed3, setCollapsed3] = b.useState(true);

    return (
        <Accordion>
            <Card>
                <Card.Header>
                    <h2 style={margin({ side: "b", size: 0 })}>
                        <Button variant="link" block style={textAlign("left")} onClick={() => setCollapsed1(!collapsed1)}>
                            Collapsible Group Item #1
                        </Button>
                    </h2>
                </Card.Header>
                <Collapse collapsed={collapsed1}>
                    <Card.Body>
                        Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia
                        aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor,
                        sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh
                        helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo.
                        Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them
                        accusamus labore sustainable VHS.
                    </Card.Body>
                </Collapse>
            </Card>
            <Card>
                <Card.Header>
                    <h2 style={margin({ side: "b", size: 0 })}>
                        <Button variant="link" block style={textAlign("left")} onClick={() => setCollapsed2(!collapsed2)}>
                            Collapsible Group Item #2
                        </Button>
                    </h2>
                </Card.Header>
                <Collapse collapsed={collapsed2}>
                    <Card.Body>
                        Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia
                        aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor,
                        sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh
                        helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo.
                        Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them
                        accusamus labore sustainable VHS.
                    </Card.Body>
                </Collapse>
            </Card>
            <Card>
                <Card.Header>
                    <h2 style={margin({ side: "b", size: 0 })}>
                        <Button variant="link" block style={textAlign("left")} onClick={() => setCollapsed3(!collapsed3)}>
                            Collapsible Group Item #3
                        </Button>
                    </h2>
                </Card.Header>
                <Collapse collapsed={collapsed3}>
                    <Card.Body>
                        Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia
                        aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor,
                        sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh
                        helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo.
                        Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them
                        accusamus labore sustainable VHS.
                    </Card.Body>
                </Collapse>
            </Card>
        </Accordion>
    );
}

import * as b from "bobril";
import { IRouteWithNavDefinition } from "../../../../common/routing";
import { Anchor } from "../../../../common/Anchor";
import { Example } from "../../../../common/Example";
import { Button, InputGroup, margin, justifyContent, Dropdown, Form } from "../../../../../index";
import { Code } from "../../../../common/Code";
import { Lead } from "../../../../common/Lead";
import { font } from "../../../../../src/utilities/font";

export const buttonGroupRoute: IRouteWithNavDefinition = {
    url: "button-groups",
    name: "button-groups",
    label: "Button groups",
    handler: () => <ButtonGroup />,
    subs: [
        {
            url: "examples",
            name: "button-groups-examples",
            label: "Basic example",
            subs: [],
        },
        {
            url: "toolbar",
            name: "button-groups-toolbar",
            label: "Button toolbar",
            subs: [],
        },
        {
            url: "sizing",
            name: "button-groups-sizing",
            label: "Sizing",
            subs: [],
        },
        {
            url: "nesting",
            name: "button-groups-nesting",
            label: "Nesting",
            subs: [],
        },
        {
            url: "vertical-variation",
            name: "button-groups-vertical-variation",
            label: "Vertical variation",
            subs: [],
        },
    ],
};

export function ButtonGroup(): b.IBobrilNode {
    return (
        <>
            <Anchor name="button-groups">
                <h1>Button group</h1>
            </Anchor>
            <Lead>Group a series of buttons together on a single line with the button group, and super-power them with TypeScript.</Lead>
            <Anchor name="button-groups-examples">
                <h2>Basic example</h2>
            </Anchor>
            <p>
                Wrap a series of <code>{"<Button>"}</code>s in <code>{"<Button.Group>"}</code>
            </p>
            <Example>
                <Button.Group aria-label="Basic example">
                    <Button variant="secondary">Left</Button>
                    <Button variant="secondary">Middle</Button>
                    <Button variant="secondary">Right</Button>
                </Button.Group>
            </Example>
            <Code language="tsx">
                {`<Button.Group>
    <Button variant="secondary">Left</Button>
    <Button variant="secondary">Middle</Button>
    <Button variant="secondary">Right</Button>
</Button.Group>`}
            </Code>
            <p>
                In addition, groups and toolbars should be given an explicit label, as most assistive technologies will otherwise not
                announce them, despite the presence of the correct role attribute. In the examples provided here, we use aria-label, but
                alternatives such as aria-labelledby can also be used.
            </p>
            <Anchor name="button-groups-toolbar">
                <h2>Button toolbar</h2>
            </Anchor>
            <p>
                Combine sets of button groups into button toolbars for more complex components. Use utilities as needed to space out groups,
                buttons, and more.
            </p>
            <Example>
                <Button.Toolbar aria-label="Toolbar with button groups">
                    <Button.Group style={margin("e", 2)} aria-label="First group">
                        <Button variant="secondary">1</Button>
                        <Button variant="secondary">2</Button>
                        <Button variant="secondary">3</Button>
                        <Button variant="secondary">4</Button>
                    </Button.Group>
                    <Button.Group style={margin("e", 2)} aria-label="Secondary group">
                        <Button variant="secondary">5</Button>
                        <Button variant="secondary">6</Button>
                        <Button variant="secondary">7</Button>
                    </Button.Group>
                    <Button.Group aria-label="Third group">
                        <Button variant="secondary">8</Button>
                    </Button.Group>
                </Button.Toolbar>
            </Example>
            <Code language="tsx">
                {`<Button.Toolbar aria-label="Toolbar with button groups">
    <Button.Group style={margin("e", 2)} aria-label="First group">
        <Button variant="secondary">1</Button>
        <Button variant="secondary">2</Button>
        <Button variant="secondary">3</Button>
        <Button variant="secondary">4</Button>
    </Button.Group>
    <Button.Group style={margin("e", 2)} aria-label="Secondary group">
        <Button variant="secondary">5</Button>
        <Button variant="secondary">6</Button>
        <Button variant="secondary">7</Button>
    </Button.Group>
    <Button.Group aria-label="Third group">
        <Button variant="secondary">8</Button>
    </Button.Group>
</Button.Toolbar>`}
            </Code>
            <p>
                Feel free to mix input groups with button groups in your toolbars. Similar to the example above, you’ll likely need some
                utilities though to space things properly.
            </p>
            <Example>
                <Button.Toolbar style={margin("b", 3)} aria-label="Toolbar with button groups">
                    <Button.Group style={margin("e", 2)} aria-label="First group">
                        <Button variant="secondary">1</Button>
                        <Button variant="secondary">2</Button>
                        <Button variant="secondary">3</Button>
                        <Button variant="secondary">4</Button>
                    </Button.Group>
                    <InputGroup>
                        <InputGroup.Text id="btnGroupAddon">@</InputGroup.Text>
                        <Form.Input
                            type="text"
                            placeholder="Input group example"
                            aria-label="Input group example"
                            aria-describedby="btnGroupAddon"
                        />
                    </InputGroup>
                </Button.Toolbar>
                <Button.Toolbar style={justifyContent("between")} aria-label="Toolbar with button groups">
                    <Button.Group style={margin("e", 2)} aria-label="First group">
                        <Button variant="secondary">1</Button>
                        <Button variant="secondary">2</Button>
                        <Button variant="secondary">3</Button>
                        <Button variant="secondary">4</Button>
                    </Button.Group>
                    <InputGroup>
                        <InputGroup.Text id="btnGroupAddon2">@</InputGroup.Text>
                        <Form.Input
                            type="text"
                            placeholder="Input group example"
                            aria-label="Input group example"
                            aria-describedby="btnGroupAddon2"
                        />
                    </InputGroup>
                </Button.Toolbar>
            </Example>
            <Code language="tsx">
                {`<Button.Toolbar style={margin("b", 3)} aria-label="Toolbar with button groups">
    <Button.Group style={margin("e", 2)} aria-label="First group">
        <Button variant="secondary">1</Button>
        <Button variant="secondary">2</Button>
        <Button variant="secondary">3</Button>
        <Button variant="secondary">4</Button>
    </Button.Group>
    <InputGroup>
        <InputGroup.Text id="btnGroupAddon">@</InputGroup.Text>
        <Form.Input
            type="text"
            placeholder="Input group example"
            aria-label="Input group example"
            aria-describedby="btnGroupAddon"
        />
    </InputGroup>
</Button.Toolbar>
<Button.Toolbar style={justifyContent("between")} aria-label="Toolbar with button groups">
    <Button.Group style={margin("e", 2)} aria-label="First group">
        <Button variant="secondary">1</Button>
        <Button variant="secondary">2</Button>
        <Button variant="secondary">3</Button>
        <Button variant="secondary">4</Button>
    </Button.Group>
    <InputGroup>
        <InputGroup.Text id="btnGroupAddon2">@</InputGroup.Text>
        <Form.Input
            type="text"
            placeholder="Input group example"
            aria-label="Input group example"
            aria-describedby="btnGroupAddon2"
        />
    </InputGroup>
</Button.Toolbar>`}
            </Code>
            <Anchor name="button-groups-sizing">
                <h2>Sizing</h2>
            </Anchor>
            <p>
                Instead of applying button sizing prop to every button in a group, just add <code>size</code> prop.
            </p>
            <Example>
                <Button.Group size="lg">
                    <Button variant="secondary">Left</Button>
                    <Button variant="secondary">Center</Button>
                    <Button variant="secondary">Middle</Button>
                </Button.Group>{" "}
                <Button.Group>
                    <Button variant="secondary">Left</Button>
                    <Button variant="secondary">Center</Button>
                    <Button variant="secondary">Middle</Button>
                </Button.Group>{" "}
                <Button.Group size="sm">
                    <Button variant="secondary">Left</Button>
                    <Button variant="secondary">Center</Button>
                    <Button variant="secondary">Middle</Button>
                </Button.Group>
            </Example>
            <Code language="tsx">
                {`<Button.Group size="lg">
    <Button variant="secondary">Left</Button>
    <Button variant="secondary">Center</Button>
    <Button variant="secondary">Middle</Button>
</Button.Group>{" "}
<Button.Group>
    <Button variant="secondary">Left</Button>
    <Button variant="secondary">Center</Button>
    <Button variant="secondary">Middle</Button>
</Button.Group>{" "}
<Button.Group size="sm">
    <Button variant="secondary">Left</Button>
    <Button variant="secondary">Center</Button>
    <Button variant="secondary">Middle</Button>
</Button.Group>`}
            </Code>
            <Anchor name="button-groups-nesting">
                <h2>Nesting</h2>
            </Anchor>
            <p>
                Place a <code>{`<Button.Group>`}</code> within another <code>{`<Button.Group>`}</code> when you want dropdown menus mixed
                with a series of buttons.
            </p>
            <Example>
                <Button.Group aria-label="Button group with nested dropdown">
                    <Button variant="secondary">1</Button>
                    <Button variant="secondary">2</Button>
                    <Dropdown>
                        {/* Variant of Button.Group */}
                        <Dropdown.Toggle variant="secondary">Dropdown</Dropdown.Toggle>
                        <Dropdown.Menu>
                            <Dropdown.Item href="javascript:void(0)">Dropdown link</Dropdown.Item>
                            <Dropdown.Item href="javascript:void(0)">Dropdown link</Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown>
                </Button.Group>
            </Example>
            <Code language="tsx">
                {`<Button.Group aria-label="Button group with nested dropdown">
    <Button variant="secondary">1</Button>
    <Button variant="secondary">2</Button>
    <Dropdown>
        {/* Variant of Button.Group */}
        <Dropdown.Toggle variant="secondary">Dropdown</Dropdown.Toggle>
        <Dropdown.Menu>
            <Dropdown.Item href="javascript:void(0)">Dropdown link</Dropdown.Item>
            <Dropdown.Item href="javascript:void(0)">Dropdown link</Dropdown.Item>
        </Dropdown.Menu>
    </Dropdown>
</Button.Group>`}
            </Code>

            <Anchor name="button-groups-vertical-variation">
                <h2>Vertical variation</h2>
            </Anchor>
            <p>
                Make a set of buttons appear vertically stacked rather than horizontally.{" "}
                <span style={font("bold")}>Split button dropdowns are not supported here.</span>
            </p>
            <Example>
                <Button.Group vertical aria-label="Vertical button group">
                    <Button variant="secondary">Button</Button>
                    <Button variant="secondary">Button</Button>
                    <Button variant="secondary">Button</Button>
                </Button.Group>
            </Example>
            <Code language="tsx">
                {`<Button.Group vertical aria-label="Vertical button group">
    <Button variant="secondary">Button</Button>
    <Button variant="secondary">Button</Button>
    <Button variant="secondary">Button</Button>
</Button.Group>`}
            </Code>
            <Example>
                <Button.Group vertical aria-label="Vertical button group">
                    <Button variant="secondary">Button</Button>
                    <Dropdown>
                        <Dropdown.Toggle variant="secondary">Dropdown</Dropdown.Toggle>
                        <Dropdown.Menu>
                            <Dropdown.Item href="javascript:void(0)">Dropdown link</Dropdown.Item>
                            <Dropdown.Item href="javascript:void(0)">Dropdown link</Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown>
                    <Button variant="secondary">Button</Button>
                </Button.Group>
            </Example>
            <Code language="tsx">
                {`<Button.Group vertical aria-label="Vertical button group">
    <Button variant="secondary">Button</Button>
    <Dropdown>
        <Dropdown.Toggle variant="secondary">Dropdown</Dropdown.Toggle>
        <Dropdown.Menu>
            <Dropdown.Item href="javascript:void(0)">Dropdown link</Dropdown.Item>
            <Dropdown.Item href="javascript:void(0)">Dropdown link</Dropdown.Item>
        </Dropdown.Menu>
    </Dropdown>
    <Button variant="secondary">Button</Button>
</Button.Group>`}
            </Code>
        </>
    );
}

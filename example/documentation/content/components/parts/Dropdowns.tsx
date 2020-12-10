import * as b from "bobril";
import { IRouteWithNavDefinition } from "../../../../common/routing";
import { Anchor } from "../../../../common/Anchor";
import { Example } from "../../../../common/Example";
import { Button, Dropdown, margin, visuallyHidden, textColor, padding, Form } from "../../../../../index";
import { Code } from "../../../../common/Code";
import { Lead } from "../../../../common/Lead";

export const dropdownsRoute: IRouteWithNavDefinition = {
    url: "dropdowns",
    name: "dropdowns",
    label: "Dropdowns",
    handler: () => <DropdownsDoc />,
    subs: [
        {
            url: "examples",
            name: "dropdowns-examples",
            label: "Examples",
            subs: [
                {
                    url: "single-button",
                    name: "dropdowns-examples-single-button",
                    label: "Single button",
                    subs: [],
                },
                {
                    url: "split-button",
                    name: "dropdowns-examples-split-button",
                    label: "Split button",
                    subs: [],
                },
            ],
        },
        {
            url: "sizing",
            name: "dropdowns-sizing",
            label: "Sizing",
            subs: [],
        },
        {
            url: "directions",
            name: "dropdowns-directions",
            label: "Directions",
            subs: [],
        },
        {
            url: "menu-items",
            name: "dropdowns-menu-items",
            label: "Menu items",
            subs: [
                {
                    url: "non-interactive",
                    name: "dropdowns-menu-items-non-interactive",
                    label: "Non-interactive",
                    subs: [],
                },
                {
                    url: "active",
                    name: "dropdowns-menu-items-active",
                    label: "Active",
                    subs: [],
                },
                {
                    url: "disabled",
                    name: "dropdowns-menu-items-disabled",
                    label: "Disabled",
                    subs: [],
                },
            ],
        },
        {
            url: "menu-alignment",
            name: "dropdowns-menu-alignment",
            label: "Menu alignment",
            subs: [
                {
                    url: "responsive",
                    name: "dropdowns-menu-alignment-responsive",
                    label: "Responsive alignment",
                    subs: [],
                },
            ],
        },
        {
            url: "menu-content",
            name: "dropdowns-menu-content",
            label: "Menu content",
            subs: [
                {
                    url: "headers",
                    name: "dropdowns-menu-content-headers",
                    label: "Headers",
                    subs: [],
                },
                {
                    url: "dividers",
                    name: "dropdowns-menu-content-dividers",
                    label: "Dividers",
                    subs: [],
                },
                {
                    url: "text",
                    name: "dropdowns-menu-content-text",
                    label: "Text",
                    subs: [],
                },
                {
                    url: "forms",
                    name: "dropdowns-menu-content-forms",
                    label: "Forms",
                    subs: [],
                },
            ],
        },
        {
            url: "offset",
            name: "dropdowns-offset",
            label: "Offset",
            subs: [],
        },
    ],
};

export function DropdownsDoc(): b.IBobrilNode {
    return (
        <>
            <Anchor name="dropdowns">
                <h1>Dropdowns</h1>
            </Anchor>
            <Lead>Toggle contextual overlays for displaying lists of links and more with the Bobrilstrap dropdown.</Lead>
            <Anchor name="dropdowns-examples">
                <h2>Examples</h2>
            </Anchor>
            <p>
                Use <code>{`<Dropdown.Toggle>`}</code> and <code>{`<Dropdown.Item>`}</code> the same way as <code>{`<Button>`}</code> and
                simply wrap them into <code>{`<Dropdown>`}</code> and <code>{`<Dropdown.Menu>`}</code>.
            </p>
            <Anchor name="dropdowns-examples-single-button">
                <h3>Single button</h3>
            </Anchor>
            <Example>
                <Dropdown>
                    <Dropdown.Toggle variant="secondary">Dropdown button</Dropdown.Toggle>
                    <Dropdown.Menu>
                        <Dropdown.Item>Action</Dropdown.Item>
                        <Dropdown.Item>Another action</Dropdown.Item>
                        <Dropdown.Item>Something else here</Dropdown.Item>
                        <Dropdown.Divider />
                        <Dropdown.Item>Separated action</Dropdown.Item>
                    </Dropdown.Menu>
                </Dropdown>
            </Example>
            <Code language="tsx">{`<Dropdown>
    <Dropdown.Toggle variant="secondary">Dropdown button</Dropdown.Toggle>
    <Dropdown.Menu>
        <Dropdown.Item>Action</Dropdown.Item>
        <Dropdown.Item>Another action</Dropdown.Item>
        <Dropdown.Item>Something else here</Dropdown.Item>
        <Dropdown.Divider />
        <Dropdown.Item>Separated action</Dropdown.Item>
    </Dropdown.Menu>
</Dropdown>`}</Code>
            <p>Or as anchors:</p>
            <Example>
                <Dropdown>
                    <Dropdown.Toggle variant="secondary">Dropdown link</Dropdown.Toggle>
                    <Dropdown.Menu>
                        <Dropdown.Item href="javascript:void(0)">Action</Dropdown.Item>
                        <Dropdown.Item href="javascript:void(0)">Another action</Dropdown.Item>
                        <Dropdown.Item href="javascript:void(0)">Something else here</Dropdown.Item>
                        <Dropdown.Divider />
                        <Dropdown.Item href="javascript:void(0)">Separated action</Dropdown.Item>
                    </Dropdown.Menu>
                </Dropdown>
            </Example>
            <Code language="tsx">{`<Dropdown>
    <Dropdown.Toggle variant="secondary">
        Dropdown link
    </Dropdown.Toggle>
    <Dropdown.Menu>
        <Dropdown.Item href="javascript:void(0)">Action</Dropdown.Item>
        <Dropdown.Item href="javascript:void(0)">Another action</Dropdown.Item>
        <Dropdown.Item href="javascript:void(0)">Something else here</Dropdown.Item>
        <Dropdown.Divider />
        <Dropdown.Item href="javascript:void(0)">Separated action</Dropdown.Item>
    </Dropdown.Menu>
</Dropdown>`}</Code>
            <Anchor name="dropdowns-examples-split-button">
                <h3>Split button</h3>
            </Anchor>
            <p>
                Similarly, create split button dropdowns with virtually the same markup as single button dropdowns, but with the addition of
                <code>split</code> prop for proper spacing around the dropdown caret.
            </p>
            <Example>
                <Dropdown>
                    <Button variant="success">Success</Button>
                    <Dropdown.Toggle variant="success" split>
                        <span style={visuallyHidden}>Toggle Dropdown</span>
                    </Dropdown.Toggle>
                    <Dropdown.Menu>
                        <Dropdown.Item>Action</Dropdown.Item>
                        <Dropdown.Item>Another action</Dropdown.Item>
                        <Dropdown.Item>Something else here</Dropdown.Item>
                        <Dropdown.Divider />
                        <Dropdown.Item>Separated action</Dropdown.Item>
                    </Dropdown.Menu>
                </Dropdown>
            </Example>
            <Code language="tsx">{`<Dropdown>
    <Button variant="success">Success</Button>
    <Dropdown.Toggle variant="success" split>
        <span style={srOnly}>Toggle Dropdown</span>
    </Dropdown.Toggle>
    <Dropdown.Menu>
        <Dropdown.Item>Action</Dropdown.Item>
        <Dropdown.Item>Another action</Dropdown.Item>
        <Dropdown.Item>Something else here</Dropdown.Item>
        <Dropdown.Divider />
        <Dropdown.Item>Separated action</Dropdown.Item>
    </Dropdown.Menu>
</Dropdown>`}</Code>
            <Anchor name="dropdowns-sizing">
                <h2>Sizing</h2>
            </Anchor>
            <Example>
                <Dropdown>
                    <Dropdown.Toggle variant="secondary" size={"lg"}>
                        Large button
                    </Dropdown.Toggle>
                    <Dropdown.Menu>
                        <Dropdown.Item>Action</Dropdown.Item>
                        <Dropdown.Item>Another action</Dropdown.Item>
                        <Dropdown.Item>Something else here</Dropdown.Item>
                        <Dropdown.Divider />
                        <Dropdown.Item>Separated action</Dropdown.Item>
                    </Dropdown.Menu>
                </Dropdown>{" "}
                <Dropdown>
                    <Button variant="secondary" size={"lg"}>
                        Large split button
                    </Button>
                    <Dropdown.Toggle variant="secondary" size={"lg"} split>
                        <span style={visuallyHidden}>Toggle Dropdown</span>
                    </Dropdown.Toggle>
                    <Dropdown.Menu>
                        <Dropdown.Item>Action</Dropdown.Item>
                        <Dropdown.Item>Another action</Dropdown.Item>
                        <Dropdown.Item>Something else here</Dropdown.Item>
                        <Dropdown.Divider />
                        <Dropdown.Item>Separated action</Dropdown.Item>
                    </Dropdown.Menu>
                </Dropdown>
            </Example>
            <Code language="tsx">{`<Dropdown>
    <Dropdown.Toggle variant="secondary" size={"lg"}>
        Large button
    </Dropdown.Toggle>
    <Dropdown.Menu>
        <Dropdown.Item>Action</Dropdown.Item>
        <Dropdown.Item>Another action</Dropdown.Item>
        <Dropdown.Item>Something else here</Dropdown.Item>
        <Dropdown.Divider />
        <Dropdown.Item>Separated action</Dropdown.Item>
    </Dropdown.Menu>
</Dropdown>{" "}
<Dropdown>
    <Button variant="secondary" size={"lg"}>
        Large split button
    </Button>
    <Dropdown.Toggle variant="secondary" size={"lg"} split>
        <span style={srOnly}>Toggle Dropdown</span>
    </Dropdown.Toggle>
    <Dropdown.Menu>
        <Dropdown.Item>Action</Dropdown.Item>
        <Dropdown.Item>Another action</Dropdown.Item>
        <Dropdown.Item>Something else here</Dropdown.Item>
        <Dropdown.Divider />
        <Dropdown.Item>Separated action</Dropdown.Item>
    </Dropdown.Menu>`}</Code>
            <Anchor name="dropdowns-directions">
                <h2>Directions</h2>
            </Anchor>
            <p>
                Trigger both single and split dropdown menus in specific direction with <code>direction</code> prop.
            </p>
            <Example>
                <Dropdown direction="up">
                    <Button variant="secondary">Split drop-up</Button>
                    <Dropdown.Toggle variant="secondary" split>
                        <span style={visuallyHidden}>Toggle Dropdown</span>
                    </Dropdown.Toggle>
                    <Dropdown.Menu>
                        <Dropdown.Item>Action</Dropdown.Item>
                        <Dropdown.Item>Another action</Dropdown.Item>
                        <Dropdown.Item>Something else here</Dropdown.Item>
                        <Dropdown.Divider />
                        <Dropdown.Item>Separated action</Dropdown.Item>
                    </Dropdown.Menu>
                </Dropdown>{" "}
                <Dropdown direction="left">
                    <Button variant="secondary">Split drop-up</Button>
                    <Dropdown.Toggle variant="secondary" split>
                        <span style={visuallyHidden}>Toggle Dropdown</span>
                    </Dropdown.Toggle>
                    <Dropdown.Menu>
                        <Dropdown.Item>Action</Dropdown.Item>
                        <Dropdown.Item>Another action</Dropdown.Item>
                        <Dropdown.Item>Something else here</Dropdown.Item>
                        <Dropdown.Divider />
                        <Dropdown.Item>Separated action</Dropdown.Item>
                    </Dropdown.Menu>
                </Dropdown>{" "}
                <Dropdown direction="right">
                    <Button variant="secondary">Split drop-right</Button>
                    <Dropdown.Toggle variant="secondary" split>
                        <span style={visuallyHidden}>Toggle Dropdown</span>
                    </Dropdown.Toggle>
                    <Dropdown.Menu>
                        <Dropdown.Item>Action</Dropdown.Item>
                        <Dropdown.Item>Another action</Dropdown.Item>
                        <Dropdown.Item>Something else here</Dropdown.Item>
                        <Dropdown.Divider />
                        <Dropdown.Item>Separated action</Dropdown.Item>
                    </Dropdown.Menu>
                </Dropdown>
            </Example>
            <Code language="tsx">{`<Dropdown>
    <Dropdown.Toggle variant="secondary" size={"lg"}>
        Large button
    </Dropdown.Toggle>
    <Dropdown.Menu>
        <Dropdown.Item>Action</Dropdown.Item>
        <Dropdown.Item>Another action</Dropdown.Item>
        <Dropdown.Item>Something else here</Dropdown.Item>
        <Dropdown.Divider />
        <Dropdown.Item>Separated action</Dropdown.Item>
    </Dropdown.Menu>
</Dropdown>{" "}
<Dropdown>
    <Button variant="secondary" size={"lg"}>
        Success
    </Button>
    <Dropdown.Toggle variant="secondary" size={"lg"} split>
        <span style={srOnly}>Large split button</span>
    </Dropdown.Toggle>
    <Dropdown.Menu>
        <Dropdown.Item>Action</Dropdown.Item>
        <Dropdown.Item>Another action</Dropdown.Item>
        <Dropdown.Item>Something else here</Dropdown.Item>
        <Dropdown.Divider />
        <Dropdown.Item>Separated action</Dropdown.Item>
    </Dropdown.Menu>
</Dropdown>`}</Code>
            <Anchor name="dropdowns-menu-items">
                <h2>Menu items</h2>
            </Anchor>
            <Anchor name="dropdowns-menu-items-non-interactive">
                <h3>Non-interactive</h3>
            </Anchor>
            <p>
                You can create non-interactive dropdown items with <code>{`<Dropdown.Item.Text>`}</code>.
            </p>
            <Example>
                <Dropdown>
                    <Dropdown.Toggle variant="secondary">Dropdown</Dropdown.Toggle>
                    <Dropdown.Menu>
                        <Dropdown.Item.Text>Dropdown item text</Dropdown.Item.Text>
                        <Dropdown.Item>Action</Dropdown.Item>
                        <Dropdown.Item>Another action</Dropdown.Item>
                        <Dropdown.Item>Something else here</Dropdown.Item>
                    </Dropdown.Menu>
                </Dropdown>
            </Example>
            <Code language="tsx">{`<Dropdown>
    <Dropdown.Toggle variant="secondary">Dropdown</Dropdown.Toggle>
    <Dropdown.Menu>
        <Dropdown.Item.Text>Dropdown item text</Dropdown.Item.Text>
        <Dropdown.Item>Action</Dropdown.Item>
        <Dropdown.Item>Another action</Dropdown.Item>
        <Dropdown.Item>Something else here</Dropdown.Item>
    </Dropdown.Menu>
</Dropdown>`}</Code>
            <Anchor name="dropdowns-menu-items-active">
                <h3>Active</h3>
            </Anchor>
            <Example>
                <Dropdown>
                    <Dropdown.Toggle variant="secondary">Dropdown</Dropdown.Toggle>
                    <Dropdown.Menu>
                        <Dropdown.Item>Action</Dropdown.Item>
                        <Dropdown.Item active>Another action</Dropdown.Item>
                        <Dropdown.Item>Something else here</Dropdown.Item>
                    </Dropdown.Menu>
                </Dropdown>
            </Example>
            <Code language="tsx">{`<Dropdown>
    <Dropdown.Toggle variant="secondary">Dropdown</Dropdown.Toggle>
    <Dropdown.Menu>
        <Dropdown.Item>Action</Dropdown.Item>
        <Dropdown.Item active>Another action</Dropdown.Item>
        <Dropdown.Item>Something else here</Dropdown.Item>
    </Dropdown.Menu>
</Dropdown>`}</Code>
            <Anchor name="dropdowns-menu-items-disabled">
                <h3>Disabled</h3>
            </Anchor>
            <Example>
                <Dropdown>
                    <Dropdown.Toggle variant="secondary">Dropdown</Dropdown.Toggle>
                    <Dropdown.Menu>
                        <Dropdown.Item>Action</Dropdown.Item>
                        <Dropdown.Item disabled>Another action</Dropdown.Item>
                        <Dropdown.Item>Something else here</Dropdown.Item>
                    </Dropdown.Menu>
                </Dropdown>
            </Example>
            <Code language="tsx">{`<Dropdown>
    <Dropdown.Toggle variant="secondary">Dropdown</Dropdown.Toggle>
    <Dropdown.Menu>
        <Dropdown.Item>Action</Dropdown.Item>
        <Dropdown.Item disabled>Another action</Dropdown.Item>
        <Dropdown.Item>Something else here</Dropdown.Item>
    </Dropdown.Menu>
</Dropdown>`}</Code>
            <Anchor name="dropdowns-menu-alignment">
                <h2>Menu alignment</h2>
            </Anchor>
            <p>
                By default, a dropdown menu is automatically positioned 100% from the top and along the left side of its parent. Add set{" "}
                <code>align="right"</code> to right align the dropdown menu.
            </p>
            <Example>
                <Dropdown>
                    <Dropdown.Toggle variant="secondary" display-static>
                        Right-aligned menu
                    </Dropdown.Toggle>
                    <Dropdown.Menu align="right">
                        <Dropdown.Item>Action</Dropdown.Item>
                        <Dropdown.Item>Another action</Dropdown.Item>
                        <Dropdown.Item>Something else here</Dropdown.Item>
                    </Dropdown.Menu>
                </Dropdown>
            </Example>
            <Code language="tsx">{`<Dropdown>
    <Dropdown.Toggle variant="secondary" display-static>Right-aligned menu/Dropdown.Toggle>
    <Dropdown.Menu align="right">
        <Dropdown.Item>Action</Dropdown.Item>
        <Dropdown.Item>Another action</Dropdown.Item>
        <Dropdown.Item>Something else here</Dropdown.Item>
    </Dropdown.Menu>
</Dropdown>`}</Code>
            <Anchor name="dropdowns-menu-alignment-responsive">
                <h3>Responsive alignment</h3>
            </Anchor>
            <p>
                If you want to use responsive alignment, disable dynamic positioning by adding the <code>display-static</code> prop and use
                the responsive variation props.
            </p>
            <Example>
                <Dropdown>
                    <Dropdown.Toggle variant="secondary" display-static>
                        Left-aligned but right aligned when large screen
                    </Dropdown.Toggle>
                    <Dropdown.Menu align-lg="right">
                        <Dropdown.Item>Action</Dropdown.Item>
                        <Dropdown.Item>Another action</Dropdown.Item>
                        <Dropdown.Item>Something else here</Dropdown.Item>
                    </Dropdown.Menu>
                </Dropdown>
            </Example>
            <Code language="tsx">{`<Dropdown>
    <Dropdown.Toggle variant="secondary" display-static>Left-aligned but right aligned when large screen</Dropdown.Toggle>
    <Dropdown.Menu align-lg="right">
        <Dropdown.Item>Action</Dropdown.Item>
        <Dropdown.Item>Another action</Dropdown.Item>
        <Dropdown.Item>Something else here</Dropdown.Item>
    </Dropdown.Menu>
</Dropdown>`}</Code>
            <Example>
                <Dropdown>
                    <Dropdown.Toggle variant="secondary" display-static>
                        Right-aligned but left aligned when large screen
                    </Dropdown.Toggle>
                    <Dropdown.Menu align="right" align-lg="left">
                        <Dropdown.Item>Action</Dropdown.Item>
                        <Dropdown.Item>Another action</Dropdown.Item>
                        <Dropdown.Item>Something else here</Dropdown.Item>
                    </Dropdown.Menu>
                </Dropdown>
            </Example>
            <Code language="tsx">{`<Dropdown>
    <Dropdown.Toggle variant="secondary" display-static>Right-aligned but left aligned when large screen</Dropdown.Toggle>
    <Dropdown.Menu align="right" align-lg="left">
        <Dropdown.Item>Action</Dropdown.Item>
        <Dropdown.Item>Another action</Dropdown.Item>
        <Dropdown.Item>Something else here</Dropdown.Item>
    </Dropdown.Menu>
</Dropdown>`}</Code>
            <Anchor name="dropdowns-menu-content">
                <h2>Menu content</h2>
            </Anchor>
            <Anchor name="dropdowns-menu-content-headers">
                <h3>Headers</h3>
            </Anchor>
            <p>Add a header to label sections of actions in any dropdown menu.</p>
            <Example>
                <Dropdown>
                    <Dropdown.Toggle variant="secondary" display-static>
                        Dropdown with header
                    </Dropdown.Toggle>
                    <Dropdown.Menu>
                        <Dropdown.Header>Dropdown header</Dropdown.Header>
                        <Dropdown.Item>Action</Dropdown.Item>
                        <Dropdown.Item>Another action</Dropdown.Item>
                    </Dropdown.Menu>
                </Dropdown>
            </Example>
            <Code language="tsx">{`<Dropdown>
    <Dropdown.Toggle variant="secondary" display-static>
        Dropdown with header
    </Dropdown.Toggle>
    <Dropdown.Menu>
        <Dropdown.Header>Dropdown header</Dropdown.Header>
        <Dropdown.Item>Action</Dropdown.Item>
        <Dropdown.Item>Another action</Dropdown.Item>
    </Dropdown.Menu>
</Dropdown>`}</Code>
            <Anchor name="dropdowns-menu-content-dividers">
                <h3>Dividers</h3>
            </Anchor>
            <p>Separate groups of related menu items with a divider.</p>
            <Example>
                <Dropdown>
                    <Dropdown.Toggle variant="secondary">Dropdown with divider</Dropdown.Toggle>
                    <Dropdown.Menu>
                        <Dropdown.Item>Action</Dropdown.Item>
                        <Dropdown.Item>Another action</Dropdown.Item>
                        <Dropdown.Item>Something else here</Dropdown.Item>
                        <Dropdown.Divider />
                        <Dropdown.Item>Separated action</Dropdown.Item>
                    </Dropdown.Menu>
                </Dropdown>
            </Example>
            <Code language="tsx">{`<Dropdown>
    <Dropdown.Toggle variant="secondary">Dropdown with divider</Dropdown.Toggle>
    <Dropdown.Menu>
        <Dropdown.Item>Action</Dropdown.Item>
        <Dropdown.Item>Another action</Dropdown.Item>
        <Dropdown.Item>Something else here</Dropdown.Item>
        <Dropdown.Divider />
        <Dropdown.Item>Separated action</Dropdown.Item>
    </Dropdown.Menu>
</Dropdown>`}</Code>
            <Anchor name="dropdowns-menu-content-text">
                <h3>Text</h3>
            </Anchor>
            <p>
                Place any freeform text within a dropdown menu with text and use spacing utilities. Note that you’ll likely need additional
                sizing styles to constrain the menu width.
            </p>
            <Example>
                <Dropdown>
                    <Dropdown.Toggle variant="secondary">Dropdown with text</Dropdown.Toggle>
                    <Dropdown.Menu style={[padding(4), textColor("muted"), { maxWidth: 200 }]}>
                        <p>Some example text that's free-flowing within the dropdown menu.</p>
                        <p style={margin({ side: "b", size: 0 })}>And this is more example text.</p>
                    </Dropdown.Menu>
                </Dropdown>
            </Example>
            <Code language="tsx">{`<Dropdown>
    <Dropdown.Toggle variant="secondary">Dropdown with text</Dropdown.Toggle>
    <Dropdown.Menu style={[padding(4), textColor("muted"), { maxWidth: 200 }]}>
        <p>Some example text that's free-flowing within the dropdown menu.</p>
        <p style={margin({ side: "b", size: 0 })}>And this is more example text.</p>
    </Dropdown.Menu>
</Dropdown>`}</Code>
            <Anchor name="dropdowns-menu-content-forms">
                <h3>Forms</h3>
            </Anchor>
            <p>
                Put a form within a dropdown menu, or make it into a dropdown menu, and use margin or padding utilities to give it the
                negative space you require.
            </p>
            <Example>
                <Dropdown>
                    <Dropdown.Toggle variant="secondary">Dropdown with form</Dropdown.Toggle>
                    <Dropdown.Menu style={{ minWidth: 250 }}>
                        <Form style={[padding(4)]}>
                            <Form.Group>
                                <Form.Label for="exampleDropdownFormEmail">Email address</Form.Label>
                                <Form.Input type="email" placeholder="email@example.com" id="exampleDropdownFormEmail"></Form.Input>
                            </Form.Group>
                            <Form.Group>
                                <Form.Label for="exampleDropdownFormPassword">Password</Form.Label>
                                <Form.Input type="password" placeholder="Password" id="exampleDropdownFormPassword"></Form.Input>
                            </Form.Group>
                            <Form.Group>
                                <Form.Check>
                                    <Form.Input type="checkbox" id="dropdownCheck" />
                                    <Form.Label for="dropdownCheck">Remember me</Form.Label>
                                </Form.Check>
                            </Form.Group>
                            <Button type="submit" variant="primary">
                                Sign in
                            </Button>
                        </Form>
                        <Dropdown.Divider />
                        <Dropdown.Item>New around here? Sign up</Dropdown.Item>
                        <Dropdown.Item>Forgot password?</Dropdown.Item>
                    </Dropdown.Menu>
                </Dropdown>
            </Example>
            <Code language="tsx">{`<Dropdown>
    <Dropdown.Toggle variant="secondary">Dropdown with form</Dropdown.Toggle>
    <Dropdown.Menu style={{ minWidth: 250 }}>
        <Form style={[padding(4)]}>
            <Form.Group>
                <Form.Label for="exampleDropdownFormEmail">Email address</Form.Label>
                <Form.Input type="email" placeholder="email@example.com" id="exampleDropdownFormEmail"></Form.Input>
            </Form.Group>
            <Form.Group>
                <Form.Label for="exampleDropdownFormPassword">Password</Form.Label>
                <Form.Input type="password" placeholder="Password" id="exampleDropdownFormPassword"></Form.Input>
            </Form.Group>
            <Form.Group>
                <Form.Check>
                    <Form.Input type="checkbox" id="dropdownCheck" />
                    <Form.Label for="dropdownCheck">Remember me</Form.Label>
                </Form.Check>
            </Form.Group>
            <Button type="submit" variant="primary">
                Sign in
            </Button>
        </Form>
        <Dropdown.Divider />
        <Dropdown.Item>New around here? Sign up</Dropdown.Item>
        <Dropdown.Item>Forgot password?</Dropdown.Item>
    </Dropdown.Menu>
</Dropdown>`}</Code>
            <Anchor name="dropdowns-offset">
                <h2>Offset</h2>
            </Anchor>
            <p>
                Use <code>offset</code> prop to change location of dropdown.
            </p>
            <Example>
                <Dropdown>
                    <Dropdown.Toggle variant="secondary" offset="10,20">
                        Dropdown with offset
                    </Dropdown.Toggle>
                    <Dropdown.Menu>
                        <Dropdown.Item>Action</Dropdown.Item>
                        <Dropdown.Item>Another action</Dropdown.Item>
                        <Dropdown.Item>Something else here</Dropdown.Item>
                        <Dropdown.Divider />
                        <Dropdown.Item>Separated action</Dropdown.Item>
                    </Dropdown.Menu>
                </Dropdown>
            </Example>
            <Code language="tsx">{`<Dropdown>
    <Dropdown.Toggle variant="secondary" offset="10,20">
        Dropdown with offset
    </Dropdown.Toggle>
    <Dropdown.Menu>
        <Dropdown.Item>Action</Dropdown.Item>
        <Dropdown.Item>Another action</Dropdown.Item>
        <Dropdown.Item>Something else here</Dropdown.Item>
        <Dropdown.Divider />
        <Dropdown.Item>Separated action</Dropdown.Item>
    </Dropdown.Menu>
</Dropdown>`}</Code>
        </>
    );
}

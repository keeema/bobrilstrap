import * as b from "bobril";
import { IRouteWithNavDefinition } from "../../../../common/routing";
import { Anchor } from "../../../../common/Anchor";
import { Example } from "../../../../common/Example";
import { Button, Dropdown, srOnly } from "../../../../../index";
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
                    <Dropdown.Toggle href="javascript:void(0)" variant="secondary">
                        Dropdown link
                    </Dropdown.Toggle>
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
    <Dropdown.Toggle href="javascript:void(0)" variant="secondary">
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
                        <span style={srOnly}>Toggle Dropdown</span>
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
                        <span style={srOnly}>Toggle Dropdown</span>
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
                        <span style={srOnly}>Toggle Dropdown</span>
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
                        <span style={srOnly}>Toggle Dropdown</span>
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
                        <span style={srOnly}>Toggle Dropdown</span>
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
        </>
    );
}

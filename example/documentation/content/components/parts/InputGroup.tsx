import * as b from "bobril";
import { IRouteWithNavDefinition } from "../../../../common/routing";
import { Anchor } from "../../../../common/Anchor";
import { Example } from "../../../../common/Example";
import { Dropdown, InputGroup, margin } from "../../../../../index";
import { Code } from "../../../../common/Code";
import { Lead } from "../../../../common/Lead";
import { Form } from "../../../../../src/components/Form";
import { flex } from "../../../../../src/utilities/flex";
import { Button } from "../../../../../src/components/Button";
import { visuallyHidden } from "../../../../../src/helpers/screenReaders";
import { CustomControl } from "../../../../../src/components/CustomControl";

export const inputGroupRoute: IRouteWithNavDefinition = {
    url: "input-group",
    name: "input-group",
    label: "Input group",
    handler: () => <InputGroupDoc />,
    subs: [
        {
            url: "basic-example",
            name: "input-group-basic-example",
            label: "Basic example",
            subs: [],
        },
        {
            url: "wrapping",
            name: "input-group-wrapping",
            label: "Wrapping",
            subs: [],
        },
        {
            url: "sizing",
            name: "input-group-sizing",
            label: "Sizing",
            subs: [],
        },
        {
            url: "checkboxes-and-radios",
            name: "input-group-checkboxes-and-radios",
            label: "Checkboxes and radios",
            subs: [],
        },
        {
            url: "multiple-inputs",
            name: "input-group-multiple-inputs",
            label: "Multiple inputs",
            subs: [],
        },
        {
            url: "multiple-addons",
            name: "input-group-multiple-addons",
            label: "Multiple addons",
            subs: [],
        },
        {
            url: "button-addons",
            name: "input-group-button-addons",
            label: "Button addons",
            subs: [],
        },
        {
            url: "buttons-with-dropdowns",
            name: "input-group-buttons-with-dropdowns",
            label: "Buttons with dropdowns",
            subs: [],
        },
        {
            url: "segmented-buttons",
            name: "input-group-segmented-buttons",
            label: "Segmented buttons",
            subs: [],
        },
        {
            url: "custom-forms",
            name: "input-group-custom-forms",
            label: "Custom forms",
            subs: [
                {
                    url: "custom-select",
                    name: "input-group-custom-forms-custom-select",
                    label: "Custom select",
                    subs: [],
                },
                {
                    url: "custom-file-input",
                    name: "input-group-custom-forms-custom-file-input",
                    label: "Custom file input",
                    subs: [],
                },
            ],
        },
    ],
};

export function InputGroupDoc(): b.IBobrilNode {
    return (
        <>
            <Anchor name="input-group">
                <h1>Input group</h1>
            </Anchor>
            <Lead>
                Easily extend form controls by adding text, buttons, or button groups on either side of textual inputs, custom selects, and
                custom file inputs.
            </Lead>
            <Anchor name="input-group-basic-example">
                <h2>Basic example</h2>
            </Anchor>
            <p>
                Place one add-on or button on either side of an input. You may also place one on both sides of an input. Remember to place{" "}
                <code>{`<Form.Label>`}</code>s outside the input group.
            </p>
            <Example>
                <InputGroup style={margin({ side: "b", size: 3 })}>
                    <InputGroup.Prepend>
                        <InputGroup.Text id="basic-addon1">@</InputGroup.Text>
                    </InputGroup.Prepend>
                    <Form.Input type="text" placeholder="Username" aria-label="Username" aria-describedby="basic-addon1" />
                </InputGroup>

                <InputGroup style={margin({ side: "b", size: 3 })}>
                    <Form.Input
                        type="text"
                        placeholder="Recipient's username"
                        aria-label="Recipient's username"
                        aria-describedby="basic-addon2"
                    />
                    <InputGroup.Append>
                        <InputGroup.Text id="basic-addon2">@example.com</InputGroup.Text>
                    </InputGroup.Append>
                </InputGroup>

                <Form.Label for="basic-url">Your vanity URL</Form.Label>
                <InputGroup style={margin({ side: "b", size: 3 })}>
                    <InputGroup.Prepend>
                        <InputGroup.Text id="basic-addon3">https://example.com/users/</InputGroup.Text>
                    </InputGroup.Prepend>
                    <Form.Input type="text" id="basic-url" aria-describedby="basic-addon3" />
                </InputGroup>

                <InputGroup style={margin({ side: "b", size: 3 })}>
                    <InputGroup.Prepend>
                        <InputGroup.Text>$</InputGroup.Text>
                    </InputGroup.Prepend>
                    <Form.Input type="text" aria-label="Amount (to the nearest dollar)" />
                    <InputGroup.Append>
                        <InputGroup.Text>.00</InputGroup.Text>
                    </InputGroup.Append>
                </InputGroup>

                <InputGroup>
                    <InputGroup.Prepend>
                        <InputGroup.Text>With textarea</InputGroup.Text>
                    </InputGroup.Prepend>
                    <Form.Textarea aria-label="With textarea"></Form.Textarea>
                </InputGroup>
            </Example>
            <Code language="tsx">{`<InputGroup style={margin({ side: "b", size: 3 })}>
    <InputGroup.Prepend>
        <InputGroup.Text id="basic-addon1">@</InputGroup.Text>
    </InputGroup.Prepend>
    <Form.Input type="text" placeholder="Username" aria-label="Username" aria-describedby="basic-addon1" />
</InputGroup>

<InputGroup style={margin({ side: "b", size: 3 })}>
    <Form.Input
        type="text"
        placeholder="Recipient's username"
        aria-label="Recipient's username"
        aria-describedby="basic-addon2"
    />
    <InputGroup.Append>
        <InputGroup.Text id="basic-addon2">@example.com</InputGroup.Text>
    </InputGroup.Append>
</InputGroup>

<Form.Label for="basic-url">Your vanity URL</Form.Label>
<InputGroup style={margin({ side: "b", size: 3 })}>
    <InputGroup.Prepend>
        <InputGroup.Text id="basic-addon3">https://example.com/users/</InputGroup.Text>
    </InputGroup.Prepend>
    <Form.Input type="text" id="basic-url" aria-describedby="basic-addon3" />
</InputGroup>

<InputGroup style={margin({ side: "b", size: 3 })}>
    <InputGroup.Prepend>
        <InputGroup.Text>$</InputGroup.Text>
    </InputGroup.Prepend>
    <Form.Input type="text" aria-label="Amount (to the nearest dollar)" />
    <InputGroup.Append>
        <InputGroup.Text>.00</InputGroup.Text>
    </InputGroup.Append>
</InputGroup>

<InputGroup>
    <InputGroup.Prepend>
        <InputGroup.Text>With textarea</InputGroup.Text>
    </InputGroup.Prepend>
    <Form.Textarea aria-label="With textarea"></Form.Textarea>
</InputGroup>`}</Code>
            <Anchor name="input-group-wrapping">
                <h2>Wrapping</h2>
            </Anchor>
            <p>
                Input groups wrap by default via <code>flex-wrap: wrap</code> in order to accommodate custom form field validation within an
                input group. You may disable this with <code>{`flex("nowrap")}`}</code>.
            </p>
            <Example>
                <InputGroup style={flex("nowrap")}>
                    <InputGroup.Prepend>
                        <InputGroup.Text id="addon-wrapping">@</InputGroup.Text>
                    </InputGroup.Prepend>
                    <Form.Input type="text" placeholder="Username" aria-label="Username" aria-describedby="addon-wrapping" />
                </InputGroup>
            </Example>
            <Code language="tsx">{`<InputGroup style={flex("nowrap")}>
    <InputGroup.Prepend>
        <InputGroup.Text id="addon-wrapping">
            @
        </span>
    </InputGroup.Prepend>
    <Form.Input type="text" placeholder="Username" aria-label="Username" aria-describedby="addon-wrapping" />
</InputGroup>`}</Code>
            <Anchor name="input-group-sizing">
                <h2>Sizing</h2>
            </Anchor>
            <p>
                Add the relative form sizing prop to the <code>{`<InputGroup>`}</code> itself and contents within will automatically
                resize—no need for repeating the form control size prop on each element.
            </p>
            <p>
                <strong>Sizing on the individual input group elements isn’t supported.</strong>
            </p>
            <Example>
                <InputGroup size="sm" style={margin({ side: "b", size: 3 })}>
                    <InputGroup.Prepend>
                        <InputGroup.Text id="inputGroup-sizing-sm">Small</InputGroup.Text>
                    </InputGroup.Prepend>
                    <Form.Input type="text" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-sm" />
                </InputGroup>

                <InputGroup style={margin({ side: "b", size: 3 })}>
                    <InputGroup.Prepend>
                        <InputGroup.Text id="inputGroup-sizing-default">Default</InputGroup.Text>
                    </InputGroup.Prepend>
                    <Form.Input type="text" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default" />
                </InputGroup>

                <InputGroup size="lg" style={margin({ side: "b", size: 3 })}>
                    <InputGroup.Prepend>
                        <InputGroup.Text id="inputGroup-sizing-lg">Large</InputGroup.Text>
                    </InputGroup.Prepend>
                    <Form.Input type="text" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-lg" />
                </InputGroup>
            </Example>
            <Code language="tsx">{`<InputGroup size="sm" style={margin({ side: "b", size: 3 })}>
    <InputGroup.Prepend>
        <InputGroup.Text id="inputGroup-sizing-sm">Small</InputGroup.Text>
    </InputGroup.Prepend>
    <Form.Input type="text" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-sm" />
</InputGroup>

<InputGroup style={margin({ side: "b", size: 3 })}>
    <InputGroup.Prepend>
        <InputGroup.Text id="inputGroup-sizing-default">Default</InputGroup.Text>
    </InputGroup.Prepend>
    <Form.Input type="text" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default" />
</InputGroup>

<InputGroup size="lg" style={margin({ side: "b", size: 3 })}>
    <InputGroup.Prepend>
        <InputGroup.Text id="inputGroup-sizing-lg">Large</InputGroup.Text>
    </InputGroup.Prepend>
    <Form.Input type="text" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-lg" />
</InputGroup>`}</Code>{" "}
            <Anchor name="input-group-checkboxes-and-radios">
                <h2>Checkboxes and radios</h2>
            </Anchor>
            <p>
                Place any checkbox or radio option within an input group’s addon instead of text. <code>no-form-control</code> is necessary.
            </p>
            <Example>
                <InputGroup style={margin({ side: "b", size: 3 })}>
                    <InputGroup.Prepend>
                        <InputGroup.Text>
                            <Form.Input no-form-control type="checkbox" aria-label="Checkbox for following text input" />
                        </InputGroup.Text>
                    </InputGroup.Prepend>
                    <Form.Input type="text" aria-label="Text input with checkbox" />
                </InputGroup>
                <InputGroup>
                    <InputGroup.Prepend>
                        <InputGroup.Text>
                            <Form.Input no-form-control type="radio" aria-label="Radio button for following text input" />
                        </InputGroup.Text>
                    </InputGroup.Prepend>
                    <Form.Input type="text" aria-label="Text input with radio button" />
                </InputGroup>
            </Example>
            <Code language="tsx">{`<InputGroup style={margin({ side: "b", size: 3 })}>
    <InputGroup.Prepend>
        <InputGroup.Text>
            <Form.Input no-form-control type="checkbox" aria-label="Checkbox for following text input" />
        </InputGroup.Text>
    </InputGroup.Prepend>
    <Form.Input type="text" aria-label="Text input with checkbox" />
</InputGroup>
<InputGroup>
    <InputGroup.Prepend>
        <InputGroup.Text>
            <Form.Input no-form-control type="radio" aria-label="Radio button for following text input" />
        </InputGroup.Text>
    </InputGroup.Prepend>
    <Form.Input type="text" aria-label="Text input with radio button" />
</InputGroup>`}</Code>
            <Anchor name="input-group-multiple-inputs">
                <h2>Multiple inputs</h2>
            </Anchor>
            <p>
                While multiple <code>{`<Form.Input`}</code>s are supported visually, validation styles are only available for input groups
                with a single <code>{`<Form.Input`}</code>.
            </p>
            <Example>
                <InputGroup style={margin({ side: "b", size: 3 })}>
                    <InputGroup.Prepend>
                        <InputGroup.Text>First and last name</InputGroup.Text>
                    </InputGroup.Prepend>
                    <Form.Input type="text" aria-label="First name" placeholder="First name" />
                    <Form.Input type="text" aria-label="Last name" placeholder="Last name" />
                </InputGroup>
            </Example>
            <Code language="tsx">{`<InputGroup style={margin({ side: "b", size: 3 })}>
    <InputGroup.Prepend>
        <InputGroup.Text>First and last name</InputGroup.Text>
    </InputGroup.Prepend>
    <Form.Input type="text" aria-label="First name" placeholder="First name" />
    <Form.Input type="text" aria-label="Last name" placeholder="Last name" />
</InputGroup>`}</Code>
            <Anchor name="input-group-multiple-addons">
                <h2>Multiple addons</h2>
            </Anchor>
            <p>Multiple add-ons are supported and can be mixed with checkbox and radio input versions.</p>
            <Example>
                <InputGroup style={margin({ side: "b", size: 3 })}>
                    <InputGroup.Prepend>
                        <InputGroup.Text>$</InputGroup.Text>
                        <InputGroup.Text>0.00</InputGroup.Text>
                    </InputGroup.Prepend>
                    <Form.Input
                        type="text"
                        aria-label="Dollar amount (with dot and two decimal places)"
                        placeholder="Dollar amount (with dot and two decimal places)"
                    />
                </InputGroup>
                <InputGroup>
                    <Form.Input
                        type="text"
                        aria-label="Dollar amount (with dot and two decimal places)"
                        placeholder="Dollar amount (with dot and two decimal places)"
                    />
                    <InputGroup.Append>
                        <InputGroup.Text>$</InputGroup.Text>
                        <InputGroup.Text>0.00</InputGroup.Text>
                    </InputGroup.Append>
                </InputGroup>
            </Example>
            <Code language="tsx">{`<InputGroup style={margin({ side: "b", size: 3 })}>
    <InputGroup.Prepend>
        <InputGroup.Text>$</InputGroup.Text>
        <InputGroup.Text>0.00</InputGroup.Text>
    </InputGroup.Prepend>
    <Form.Input
        type="text"
        aria-label="Dollar amount (with dot and two decimal places)"
        placeholder="Dollar amount (with dot and two decimal places)"
    />
</InputGroup>
<InputGroup>
    <Form.Input
        type="text"
        aria-label="Dollar amount (with dot and two decimal places)"
        placeholder="Dollar amount (with dot and two decimal places)"
    />
    <InputGroup.Append>
        <InputGroup.Text>$</InputGroup.Text>
        <InputGroup.Text>0.00</InputGroup.Text>
    </InputGroup.Append>
</InputGroup>`}</Code>
            <Anchor name="input-group-button-addons">
                <h2>Button addons</h2>
            </Anchor>
            <Example>
                <InputGroup style={margin({ side: "b", size: 3 })}>
                    <InputGroup.Prepend>
                        <Button variant="outline-secondary" id="button-addon1">
                            Button
                        </Button>
                    </InputGroup.Prepend>
                    <Form.Input type="text" aria-label="Example text with button addon" aria-describedby="button-addon1" />
                </InputGroup>
                <InputGroup style={margin({ side: "b", size: 3 })}>
                    <Form.Input
                        type="text"
                        aria-label="Recipient's username"
                        placeholder="Recipient's username"
                        aria-describedby="button-addon2"
                    />
                    <InputGroup.Append>
                        <Button variant="outline-secondary" id="button-addon2">
                            Button
                        </Button>
                    </InputGroup.Append>
                </InputGroup>
                <InputGroup style={margin({ side: "b", size: 3 })}>
                    <InputGroup.Prepend id="button-addon3">
                        <Button variant="outline-secondary">Button</Button>
                        <Button variant="outline-secondary">Button</Button>
                    </InputGroup.Prepend>
                    <Form.Input type="text" aria-label="Example text with two button addons" aria-describedby="button-addon3" />
                </InputGroup>
                <InputGroup>
                    <Form.Input
                        type="text"
                        aria-label="Recipient's username with two button addons"
                        placeholder="Recipient's username"
                        aria-describedby="button-addon4"
                    />
                    <InputGroup.Append id="button-addon4">
                        <Button variant="outline-secondary">Button</Button>
                        <Button variant="outline-secondary">Button</Button>
                    </InputGroup.Append>
                </InputGroup>
            </Example>
            <Code language="tsx">{`<InputGroup style={margin({ side: "b", size: 3 })}>
        <InputGroup.Prepend>
            <Button variant="outline-secondary" id="button-addon1">
                Button
            </Button>
        </InputGroup.Prepend>
        <Form.Input type="text" aria-label="Example text with button addon" aria-describedby="button-addon1" />
    </InputGroup>
    <InputGroup style={margin({ side: "b", size: 3 })}>
        <Form.Input
            type="text"
            aria-label="Recipient's username"
            placeholder="Recipient's username"
            aria-describedby="button-addon2"
        />
        <InputGroup.Append>
            <Button variant="outline-secondary" id="button-addon2">
                Button
            </Button>
        </InputGroup.Append>
    </InputGroup>
    <InputGroup style={margin({ side: "b", size: 3 })}>
        <InputGroup.Prepend id="button-addon3">
            <Button variant="outline-secondary">Button</Button>
            <Button variant="outline-secondary">Button</Button>
        </InputGroup.Prepend>
        <Form.Input type="text" aria-label="Example text with two button addons" aria-describedby="button-addon3" />
    </InputGroup>
    <InputGroup>
        <Form.Input
            type="text"
            aria-label="Recipient's username with two button addons"
            placeholder="Recipient's username"
            aria-describedby="button-addon4"
        />
        <InputGroup.Append id="button-addon4">
            <Button variant="outline-secondary">Button</Button>
            <Button variant="outline-secondary">Button</Button>
        </InputGroup.Append>
    </InputGroup>`}</Code>
            <Anchor name="input-group-buttons-with-dropdowns">
                <h2>Buttons with dropdowns</h2>
            </Anchor>
            <Example>
                <InputGroup style={margin({ side: "b", size: 3 })}>
                    <InputGroup.Prepend>
                        <Dropdown.Toggle variant="outline-secondary">Dropdown</Dropdown.Toggle>
                        <Dropdown.Menu>
                            <Dropdown.Item>Action</Dropdown.Item>
                            <Dropdown.Item>Another action</Dropdown.Item>
                            <Dropdown.Item>Something else here</Dropdown.Item>
                            <Dropdown.Divider />
                            <Dropdown.Item>Separated link</Dropdown.Item>
                        </Dropdown.Menu>
                    </InputGroup.Prepend>
                    <Form.Input type="text" aria-label="Text input with dropdown button" />
                </InputGroup>
                <InputGroup>
                    <Form.Input type="text" aria-label="Text input with dropdown button" />
                    <InputGroup.Append>
                        <Dropdown.Toggle variant="outline-secondary">Dropdown</Dropdown.Toggle>
                        <Dropdown.Menu>
                            <Dropdown.Item>Action</Dropdown.Item>
                            <Dropdown.Item>Another action</Dropdown.Item>
                            <Dropdown.Item>Something else here</Dropdown.Item>
                            <Dropdown.Divider />
                            <Dropdown.Item>Separated link</Dropdown.Item>
                        </Dropdown.Menu>
                    </InputGroup.Append>
                </InputGroup>
            </Example>
            <Code language="tsx">{`<InputGroup style={margin({ side: "b", size: 3 })}>
    <InputGroup.Prepend>
        <Dropdown.Toggle variant="outline-secondary">Dropdown</Dropdown.Toggle>
        <Dropdown.Menu>
            <Dropdown.Item>Action</Dropdown.Item>
            <Dropdown.Item>Another action</Dropdown.Item>
            <Dropdown.Item>Something else here</Dropdown.Item>
            <Dropdown.Divider />
            <Dropdown.Item>Separated link</Dropdown.Item>
        </Dropdown.Menu>
    </InputGroup.Prepend>
    <Form.Input type="text" aria-label="Text input with dropdown button" />
</InputGroup>
<InputGroup>
    <Form.Input type="text" aria-label="Text input with dropdown button" />
    <InputGroup.Append>
        <Dropdown.Toggle variant="outline-secondary">Dropdown</Dropdown.Toggle>
        <Dropdown.Menu>
            <Dropdown.Item>Action</Dropdown.Item>
            <Dropdown.Item>Another action</Dropdown.Item>
            <Dropdown.Item>Something else here</Dropdown.Item>
            <Dropdown.Divider />
            <Dropdown.Item>Separated link</Dropdown.Item>
        </Dropdown.Menu>
    </InputGroup.Append>
</InputGroup>`}</Code>
            <Anchor name="input-group-segmented-buttons">
                <h2>Segmented buttons</h2>
            </Anchor>
            <Example>
                <InputGroup style={margin({ side: "b", size: 3 })}>
                    <InputGroup.Prepend>
                        <Button variant="outline-secondary">Action</Button>
                        <Dropdown.Toggle split variant="outline-secondary">
                            <span style={visuallyHidden}>Toggle Dropdown</span>
                        </Dropdown.Toggle>
                        <Dropdown.Menu>
                            <Dropdown.Item>Action</Dropdown.Item>
                            <Dropdown.Item>Another action</Dropdown.Item>
                            <Dropdown.Item>Something else here</Dropdown.Item>
                            <Dropdown.Divider />
                            <Dropdown.Item>Separated link</Dropdown.Item>
                        </Dropdown.Menu>
                    </InputGroup.Prepend>
                    <Form.Input type="text" aria-label="Text input with dropdown button" />
                </InputGroup>
                <InputGroup>
                    <Form.Input type="text" aria-label="Text input with dropdown button" />
                    <InputGroup.Append>
                        <Button variant="outline-secondary">Action</Button>
                        <Dropdown.Toggle split variant="outline-secondary">
                            <span style={visuallyHidden}>Toggle Dropdown</span>
                        </Dropdown.Toggle>
                        <Dropdown.Menu>
                            <Dropdown.Item>Action</Dropdown.Item>
                            <Dropdown.Item>Another action</Dropdown.Item>
                            <Dropdown.Item>Something else here</Dropdown.Item>
                            <Dropdown.Divider />
                            <Dropdown.Item>Separated link</Dropdown.Item>
                        </Dropdown.Menu>
                    </InputGroup.Append>
                </InputGroup>
            </Example>
            <Code language="tsx">{`<InputGroup style={margin({ side: "b", size: 3 })}>
    <InputGroup.Prepend>
        <Button variant="outline-secondary">Action</Button>
        <Dropdown.Toggle split variant="outline-secondary">
            <span style={srOnly}>Toggle Dropdown</span>
        </Dropdown.Toggle>
        <Dropdown.Menu>
            <Dropdown.Item>Action</Dropdown.Item>
            <Dropdown.Item>Another action</Dropdown.Item>
            <Dropdown.Item>Something else here</Dropdown.Item>
            <Dropdown.Divider />
            <Dropdown.Item>Separated link</Dropdown.Item>
        </Dropdown.Menu>
    </InputGroup.Prepend>
    <Form.Input type="text" aria-label="Text input with dropdown button" />
</InputGroup>
<InputGroup>
    <Form.Input type="text" aria-label="Text input with dropdown button" />
    <InputGroup.Append>
        <Button variant="outline-secondary">Action</Button>
        <Dropdown.Toggle split variant="outline-secondary">
            <span style={srOnly}>Toggle Dropdown</span>
        </Dropdown.Toggle>
        <Dropdown.Menu>
            <Dropdown.Item>Action</Dropdown.Item>
            <Dropdown.Item>Another action</Dropdown.Item>
            <Dropdown.Item>Something else here</Dropdown.Item>
            <Dropdown.Divider />
            <Dropdown.Item>Separated link</Dropdown.Item>
        </Dropdown.Menu>
    </InputGroup.Append>
</InputGroup>`}</Code>
            <Anchor name="input-group-custom-forms">
                <h2>Custom forms</h2>
            </Anchor>
            <p>
                Input groups include support for custom selects and custom file inputs. Browser default versions of these are not supported.
            </p>
            <Anchor name="input-group-custom-forms-custom-select">
                <h3>Custom select</h3>
            </Anchor>
            <Example>
                <InputGroup style={margin({ side: "b", size: 3 })}>
                    <InputGroup.Prepend>
                        <InputGroup.Text as="label" for="inputGroupSelect01">
                            Options
                        </InputGroup.Text>
                    </InputGroup.Prepend>
                    <Form.Select custom id="inputGroupSelect01">
                        <Form.Option selected>Choose...</Form.Option>
                        <Form.Option value="1">One</Form.Option>
                        <Form.Option value="2">Two</Form.Option>
                        <Form.Option value="3">Three</Form.Option>
                    </Form.Select>
                </InputGroup>

                <InputGroup style={margin({ side: "b", size: 3 })}>
                    <Form.Select custom id="inputGroupSelect02">
                        <Form.Option selected>Choose...</Form.Option>
                        <Form.Option value="1">One</Form.Option>
                        <Form.Option value="2">Two</Form.Option>
                        <Form.Option value="3">Three</Form.Option>
                    </Form.Select>
                    <InputGroup.Append>
                        <InputGroup.Text as="label" for="inputGroupSelect02">
                            Options
                        </InputGroup.Text>
                    </InputGroup.Append>
                </InputGroup>

                <InputGroup style={margin({ side: "b", size: 3 })}>
                    <InputGroup.Prepend>
                        <Button variant="outline-secondary">Button</Button>
                    </InputGroup.Prepend>
                    <Form.Select custom id="inputGroupSelect03" aria-label="Example select with button addon">
                        <Form.Option selected>Choose...</Form.Option>
                        <Form.Option value="1">One</Form.Option>
                        <Form.Option value="2">Two</Form.Option>
                        <Form.Option value="3">Three</Form.Option>
                    </Form.Select>
                </InputGroup>

                <InputGroup>
                    <Form.Select custom id="inputGroupSelect04" aria-label="Example select with button addon">
                        <Form.Option selected>Choose...</Form.Option>
                        <Form.Option value="1">One</Form.Option>
                        <Form.Option value="2">Two</Form.Option>
                        <Form.Option value="3">Three</Form.Option>
                    </Form.Select>
                    <InputGroup.Append>
                        <Button variant="outline-secondary">Button</Button>
                    </InputGroup.Append>
                </InputGroup>
            </Example>
            <Code language="tsx">{`<InputGroup style={margin({ side: "b", size: 3 })}>
    <InputGroup.Prepend>
        <InputGroup.Text as="label" for="inputGroupSelect01">
            Options
        </InputGroup.Text>
    </InputGroup.Prepend>
    <Form.Select custom id="inputGroupSelect01">
        <Form.Option selected>Choose...</Form.Option>
        <Form.Option value="1">One</Form.Option>
        <Form.Option value="2">Two</Form.Option>
        <Form.Option value="3">Three</Form.Option>
    </Form.Select>
</InputGroup>

<InputGroup style={margin({ side: "b", size: 3 })}>
    <Form.Select custom id="inputGroupSelect02">
        <Form.Option selected>Choose...</Form.Option>
        <Form.Option value="1">One</Form.Option>
        <Form.Option value="2">Two</Form.Option>
        <Form.Option value="3">Three</Form.Option>
    </Form.Select>
    <InputGroup.Append>
        <InputGroup.Text as="label" for="inputGroupSelect02">
            Options
        </InputGroup.Text>
    </InputGroup.Append>
</InputGroup>

<InputGroup style={margin({ side: "b", size: 3 })}>
    <InputGroup.Prepend>
        <Button variant="outline-secondary">Button</Button>
    </InputGroup.Prepend>
    <Form.Select custom id="inputGroupSelect03" aria-label="Example select with button addon">
        <Form.Option selected>Choose...</Form.Option>
        <Form.Option value="1">One</Form.Option>
        <Form.Option value="2">Two</Form.Option>
        <Form.Option value="3">Three</Form.Option>
    </Form.Select>
</InputGroup>

<InputGroup>
    <Form.Select custom id="inputGroupSelect04" aria-label="Example select with button addon">
        <Form.Option selected>Choose...</Form.Option>
        <Form.Option value="1">One</Form.Option>
        <Form.Option value="2">Two</Form.Option>
        <Form.Option value="3">Three</Form.Option>
    </Form.Select>
    <InputGroup.Append>
        <Button variant="outline-secondary">Button</Button>
    </InputGroup.Append>
</InputGroup>`}</Code>
            <Anchor name="input-group-custom-forms-custom-file-input">
                <h3>Custom file input</h3>
            </Anchor>
            <Example>
                <InputGroup style={margin({ side: "b", size: 3 })}>
                    <InputGroup.Prepend>
                        <InputGroup.Text id="inputGroupFileAddon01">Upload</InputGroup.Text>
                    </InputGroup.Prepend>
                    <CustomControl type="file">
                        <Form.Input
                            custom
                            type="file"
                            class="custom-file-input"
                            id="inputGroupFile01"
                            aria-describedby="inputGroupFileAddon01"
                        />
                        <Form.Label class="custom-file-label" for="inputGroupFile01">
                            Choose file
                        </Form.Label>
                    </CustomControl>
                </InputGroup>

                <InputGroup style={margin({ side: "b", size: 3 })}>
                    <CustomControl type="file">
                        <Form.Input
                            custom
                            type="file"
                            class="custom-file-input"
                            id="inputGroupFile02"
                            aria-describedby="inputGroupFileAddon02"
                        />
                        <Form.Label class="custom-file-label" for="inputGroupFile02">
                            Choose file
                        </Form.Label>
                    </CustomControl>
                    <InputGroup.Append>
                        <InputGroup.Text as="label" id="inputGroupFileAddon02">
                            Upload
                        </InputGroup.Text>
                    </InputGroup.Append>
                </InputGroup>

                <InputGroup style={margin({ side: "b", size: 3 })}>
                    <InputGroup.Prepend>
                        <Button variant="outline-secondary" id="inputGroupFileAddon03">
                            Button
                        </Button>
                    </InputGroup.Prepend>
                    <CustomControl type="file">
                        <Form.Input
                            custom
                            type="file"
                            class="custom-file-input"
                            id="inputGroupFile03"
                            aria-describedby="inputGroupFileAddon03"
                        />
                        <Form.Label class="custom-file-label" for="inputGroupFile03">
                            Choose file
                        </Form.Label>
                    </CustomControl>
                </InputGroup>

                <InputGroup>
                    <CustomControl type="file">
                        <Form.Input
                            custom
                            type="file"
                            class="custom-file-input"
                            id="inputGroupFile04"
                            aria-describedby="inputGroupFileAddon04"
                        />
                        <Form.Label class="custom-file-label" for="inputGroupFile04">
                            Choose file
                        </Form.Label>
                    </CustomControl>
                    <InputGroup.Append>
                        <Button variant="outline-secondary" id="inputGroupFileAddon04">
                            Button
                        </Button>
                    </InputGroup.Append>
                </InputGroup>
            </Example>
            <Code language="tsx">{`<InputGroup style={margin({ side: "b", size: 3 })}>
    <InputGroup.Prepend>
        <InputGroup.Text id="inputGroupFileAddon01">Upload</InputGroup.Text>
    </InputGroup.Prepend>
    <CustomControl type="file">
        <Form.Input
            custom
            type="file"
            class="custom-file-input"
            id="inputGroupFile01"
            aria-describedby="inputGroupFileAddon01"
        />
        <Form.Label class="custom-file-label" for="inputGroupFile01">
            Choose file
        </Form.Label>
    </CustomControl>
</InputGroup>

<InputGroup style={margin({ side: "b", size: 3 })}>
    <CustomControl type="file">
        <Form.Input
            custom
            type="file"
            class="custom-file-input"
            id="inputGroupFile02"
            aria-describedby="inputGroupFileAddon02"
        />
        <Form.Label class="custom-file-label" for="inputGroupFile02">
            Choose file
        </Form.Label>
    </CustomControl>
    <InputGroup.Append>
        <InputGroup.Text as="label" id="inputGroupFileAddon02">
            Upload
        </InputGroup.Text>
    </InputGroup.Append>
</InputGroup>

<InputGroup style={margin({ side: "b", size: 3 })}>
    <InputGroup.Prepend>
        <Button variant="outline-secondary" id="inputGroupFileAddon03">
            Button
        </Button>
    </InputGroup.Prepend>
    <CustomControl type="file">
        <Form.Input
            custom
            type="file"
            class="custom-file-input"
            id="inputGroupFile03"
            aria-describedby="inputGroupFileAddon03"
        />
        <Form.Label class="custom-file-label" for="inputGroupFile03">
            Choose file
        </Form.Label>
    </CustomControl>
</InputGroup>

<InputGroup>
    <CustomControl type="file">
        <Form.Input
            custom
            type="file"
            class="custom-file-input"
            id="inputGroupFile04"
            aria-describedby="inputGroupFileAddon04"
        />
        <Form.Label class="custom-file-label" for="inputGroupFile04">
            Choose file
        </Form.Label>
    </CustomControl>
    <InputGroup.Append>
        <Button variant="outline-secondary" id="inputGroupFileAddon04">
            Button
        </Button>
    </InputGroup.Append>
</InputGroup>`}</Code>
        </>
    );
}

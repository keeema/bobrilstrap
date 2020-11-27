import * as b from "bobril";
import { IRouteWithNavDefinition } from "../../../../common/routing";
import { Anchor } from "../../../../common/Anchor";
import { Example } from "../../../../common/Example";
import { InputGroup, margin } from "../../../../../index";
import { Code } from "../../../../common/Code";
import { Lead } from "../../../../common/Lead";
import { Form } from "../../../../../src/components/Form";
import { flex } from "../../../../../src/utilities/flex";

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
</InputGroup>`}</Code>
        </>
    );
}

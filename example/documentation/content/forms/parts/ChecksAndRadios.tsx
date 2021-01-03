import * as b from "bobril";
import { IRouteWithNavDefinition } from "../../../../common/routing";
import { Anchor } from "../../../../common/Anchor";
import { Example } from "../../../../common/Example";
import { Button, Form } from "../../../../../index";
import { Code } from "../../../../common/Code";
import { Lead } from "../../../../common/Lead";

export const checksAndRadiosRoute: IRouteWithNavDefinition = {
    url: "checks-and-radios",
    name: "checks-and-radios",
    label: "Checks & Radios",
    handler: () => <ChecksAndRadiosDoc />,
    subs: [
        {
            url: "default",
            name: "checks-and-radios-default",
            label: "Default (stacked)",
            subs: [
                {
                    url: "checks",
                    name: "checks-and-radios-default-checks",
                    label: "Checks",
                    subs: [],
                },
                {
                    url: "radios",
                    name: "checks-and-radios-default-radios",
                    label: "Radios",
                    subs: [],
                },
            ],
        },
        {
            url: "inline",
            name: "checks-and-radios-inline",
            label: "Inline",
            subs: [],
        },
        {
            url: "without-labels",
            name: "checks-and-radios-without-labels",
            label: "Without labels",
            subs: [],
        },
        {
            url: "switches",
            name: "checks-and-radios-switches",
            label: "Switches",
            subs: [],
        },
        {
            url: "toggle-buttons",
            name: "checks-and-radios-toggle-buttons",
            label: "Toggle buttons",
            subs: [
                {
                    url: "checkbox-toggle-buttons",
                    name: "checks-and-radios-toggle-buttons-checkbox-toggle-buttons",
                    label: "Checkbox toggle buttons",
                    subs: [],
                },
                {
                    url: "radio-toggle-buttons",
                    name: "checks-and-radios-toggle-buttons-radio-toggle-buttons",
                    label: "Radio toggle buttons",
                    subs: [],
                },
                {
                    url: "Outline",
                    name: "checks-and-radios-toggle-buttons-outline",
                    label: "Outline",
                    subs: [],
                },
            ],
        },
    ],
};

export function ChecksAndRadiosDoc(): b.IBobrilNode {
    return (
        <>
            <Anchor name="checks-and-radios">
                <h1>{"Checks & Radios"}</h1>
            </Anchor>
            <Lead>
                Create consistent cross-browser and cross-device checkboxes and radios with our completely rewritten checks component.
            </Lead>
            <p>
                Default checkboxes and radios are improved upon with the help of <code>{`<Form.Check>`}</code>, a single component for both
                input types that improves the layout and behavior of their HTML elements. Checkboxes are for selecting one or several
                options in a list, while radios are for selecting one option from many.
            </p>
            <p>
                Disabled checkboxes and radios are supported. The <code>disabled</code> attribute will apply a lighter color to help
                indicate the input’s state.
            </p>
            <p>
                Checkboxes and radio buttons support HTML-based form validation and provide concise, accessible labels. As such, our{" "}
                <code>{`<Form.Input>`}</code>s and <code>{`<Form.Label>`}</code>s are sibling elements as opposed to an{" "}
                <code>{`<Form.Input>`}</code> within a <code>{`<Form.Label>`}</code>. This is slightly more verbose as you must specify{" "}
                <code>id</code> and <code>for</code> attributes to relate the <code>{`<Form.Input>`}</code> and{" "}
                <code>{`<Form.Label>`}</code>.
            </p>
            <Anchor name="checks-and-radios-default">
                <h2>Default (stacked)</h2>
            </Anchor>
            <p>
                By default, any number of checkboxes and radios that are immediate sibling will be vertically stacked and appropriately
                spaced with <code>{`<Form.Check>`}</code>.
            </p>
            <Anchor name="checks-and-radios-default-checks">
                <h3>Checks</h3>
            </Anchor>
            <Example>
                <DefaultCheckboxesExample />
            </Example>
            <Code language="tsx">{`function DefaultCheckboxesExample(): b.IBobrilNode {
    const [checkbox1, setCheckbox1] = b.useState(true);
    return (
        <>
            <Form.Check>
                <Form.Input type="checkbox" id="defaultCheck1" value={checkbox1} onChange={setCheckbox1} />
                <Form.Label form-check for="defaultCheck1">
                    Default checkbox
                </Form.Label>
            </Form.Check>
            <Form.Check>
                <Form.Input type="checkbox" id="defaultCheck2" value={true} disabled />
                <Form.Label form-check for="defaultCheck2">
                    Disabled checkbox
                </Form.Label>
            </Form.Check>
            <Form.Text>Checkbox 1: {JSON.stringify(checkbox1)}</Form.Text>
        </>
    );
}

<DefaultCheckboxesExample />`}</Code>
            <Anchor name="checks-and-radios-default-radios">
                <h3>Radios</h3>
            </Anchor>
            <Example>
                <DefaultRadiosExample />
            </Example>
            <Code language="tsx">{`function DefaultRadiosExample(): b.IBobrilNode {
    const [radio, setRadio] = b.useState(1);
    return (
        <>
            <Form.Check>
                <Form.Input type="radio" name="radio" id="exampleRadios1" value={radio === 1} onClick={() => setRadio(1)} />
                <Form.Label form-check for="exampleRadios1">
                    Default radio
                </Form.Label>
            </Form.Check>
            <Form.Check>
                <Form.Input type="radio" name="radio" id="exampleRadios2" value={radio === 2} onClick={() => setRadio(2)} />
                <Form.Label form-check for="exampleRadios2">
                    Second radio
                </Form.Label>
            </Form.Check>
            <Form.Check>
                <Form.Input type="radio" name="radio" id="exampleRadios3" value={radio === 3} onClick={() => setRadio(3)} disabled />
                <Form.Label form-check for="exampleRadios3">
                    Disabled third radio
                </Form.Label>
            </Form.Check>
            <Form.Text>Radio: {JSON.stringify(radio)}</Form.Text>
        </>
    );
}

<DefaultRadiosExample />`}</Code>
            <Anchor name="checks-and-radios-inline">
                <h2>Inline</h2>
            </Anchor>
            <p>
                Group checkboxes or radios on the same horizontal row by adding <code>inline</code> prop.
            </p>
            <Example>
                <Form.Check inline>
                    <Form.Input type="checkbox" id="inlineCheckbox1" />
                    <Form.Label form-check for="inlineCheckbox1">
                        1
                    </Form.Label>
                </Form.Check>
                <Form.Check inline>
                    <Form.Input type="checkbox" id="inlineCheckbox2" disabled />
                    <Form.Label form-check for="inlineCheckbox2">
                        2
                    </Form.Label>
                </Form.Check>
            </Example>
            <Code language="tsx">{`<Form.Check inline>
    <Form.Input type="checkbox" id="inlineCheckbox1" />
    <Form.Label form-check for="inlineCheckbox1">
        1
    </Form.Label>
</Form.Check>
<Form.Check inline>
    <Form.Input type="checkbox" id="inlineCheckbox2" disabled />
    <Form.Label form-check for="inlineCheckbox2">
        2
    </Form.Label>
</Form.Check>`}</Code>
            <Anchor name="checks-and-radios-without-labels">
                <h2>Without labels</h2>
            </Anchor>
            <p>
                Omit the wrapping <code>{`<Form.Check>`}</code> for checkboxes and radios that have no label text. Remember to still provide
                some form of accessible name for assistive technologies (for instance, using <code>aria-label</code>). See the{" "}
            </p>
            <Example>
                <div>
                    <Form.Input type="checkbox" id="blankCheckbox" aria-label="Blank" />
                </div>
                <div>
                    <Form.Input type="radio" name="blankRadio" id="blankRadio1" aria-label="Blank" />
                </div>
            </Example>
            <Code language="tsx">{`<div>
    <Form.Input type="checkbox" id="blankCheckbox" aria-label="Blank" />
</div>
<div>
    <Form.Input type="radio" name="blankRadio" id="blankRadio1" aria-label="Blank" />
</div>`}</Code>
            <Anchor name="checks-and-radios-switches">
                <h2>Switches</h2>
            </Anchor>
            <p>
                A switch has the markup of a custom checkbox but uses the <code>switch</code> prop to render a toggle switch. Switches also
                support the <code>disabled</code> prop.
            </p>
            <Example>
                <Form.Check switch>
                    <Form.Input type="checkbox" id="flexSwitchCheckDefault" />
                    <Form.Label for="flexSwitchCheckDefault">Default switch checkbox input</Form.Label>
                </Form.Check>
                <Form.Check switch>
                    <Form.Input type="checkbox" id="flexSwitchCheckChecked" checked />
                    <Form.Label for="flexSwitchCheckChecked">Checked switch checkbox input</Form.Label>
                </Form.Check>
                <Form.Check switch>
                    <Form.Input type="checkbox" id="flexSwitchCheckDisabled" disabled />
                    <Form.Label for="flexSwitchCheckDisabled">Disabled switch checkbox input</Form.Label>
                </Form.Check>
                <Form.Check switch>
                    <Form.Input type="checkbox" id="flexSwitchCheckCheckedDisabled" checked disabled />
                    <Form.Label for="flexSwitchCheckCheckedDisabled">Disabled checked switch checkbox input</Form.Label>
                </Form.Check>
            </Example>
            <Code language="tsx">{`<Form.Check switch>
    <Form.Input type="checkbox" id="flexSwitchCheckDefault" />
    <Form.Label for="flexSwitchCheckDefault">Default switch checkbox input</Form.Label>
</Form.Check>
<Form.Check switch>
    <Form.Input type="checkbox" id="flexSwitchCheckChecked" checked />
    <Form.Label for="flexSwitchCheckChecked">Checked switch checkbox input</Form.Label>
</Form.Check>
<Form.Check switch>
    <Form.Input type="checkbox" id="flexSwitchCheckDisabled" disabled />
    <Form.Label for="flexSwitchCheckDisabled">Disabled switch checkbox input</Form.Label>
</Form.Check>
<Form.Check switch>
    <Form.Input type="checkbox" id="flexSwitchCheckCheckedDisabled" checked disabled />
    <Form.Label for="flexSwitchCheckCheckedDisabled">Disabled checked switch checkbox input</Form.Label>
</Form.Check>`}</Code>
            <Anchor name="checks-and-radios-toggle-buttons">
                <h2>Toggle buttons</h2>
            </Anchor>
            <Anchor name="checks-and-radios-toggle-buttons-checkbox-toggle-buttons">
                <h3>Checkbox toggle buttons</h3>
            </Anchor>
            <Example>
                <Form.Input type="checkbox" toggle-button id="btn-check" autocomplete="off" />
                <Button as="label" variant="primary" for="btn-check">
                    Single toggle
                </Button>
            </Example>
            <Code language="tsx">{`<Form.Input type="checkbox" toggle-button id="btn-check" autocomplete="off" />
<Button as="label" variant="primary" for="btn-check">
    Single toggle
</Button>`}</Code>
            <Anchor name="checks-and-radios-toggle-buttons-radio-toggle-buttons">
                <h3>Radio toggle buttons</h3>
            </Anchor>
            <Example>
                <RadioToggleExample />
            </Example>
            <Code language="tsx">{`function RadioToggleExample(): b.IBobrilNode {
    const [radio, setRadio] = b.useState(1);
    return (
        <>
            <Form>
                <Form.Input
                    type="radio"
                    toggle-button
                    name="options"
                    id="option1"
                    autocomplete="off"
                    value={radio === 1}
                    onClick={() => setRadio(1)}
                />
                <Button as="label" variant="secondary" for="option1">
                    First
                </Button>{" "}
                <Form.Input
                    type="radio"
                    toggle-button
                    name="options"
                    id="option2"
                    autocomplete="off"
                    value={radio === 2}
                    onClick={() => setRadio(2)}
                />
                <Button as="label" variant="secondary" for="option2">
                    Second
                </Button>{" "}
                <Form.Input
                    type="radio"
                    toggle-button
                    name="options"
                    id="option3"
                    autocomplete="off"
                    value={radio === 3}
                    onClick={() => setRadio(3)}
                />
                <Button as="label" variant="secondary" for="option3">
                    Third
                </Button>
            </Form>
            <Form.Text>Radio: {JSON.stringify(radio)}</Form.Text>
        </>
    );
}

<RadioToggleExample />`}</Code>
            <Anchor name="checks-and-radios-toggle-buttons-outline">
                <h3>Outline</h3>
            </Anchor>
            <Example>
                <Form.Input type="checkbox" toggle-button id="btn-check-outline" autocomplete="off" />
                <Button as="label" variant="outline-primary" for="btn-check-outline">
                    Single toggle
                </Button>
            </Example>
            <Code language="tsx">{`<Form.Input type="checkbox" toggle-button id="btn-check-outline" autocomplete="off" />
<Button as="label" variant="outline-primary" for="btn-check-outline">
    Single toggle
</Button>`}</Code>
        </>
    );
}

function DefaultCheckboxesExample(): b.IBobrilNode {
    const [checkbox1, setCheckbox1] = b.useState(true);
    return (
        <>
            <Form.Check>
                <Form.Input type="checkbox" id="defaultCheck1" value={checkbox1} onChange={setCheckbox1} />
                <Form.Label form-check for="defaultCheck1">
                    Default checkbox
                </Form.Label>
            </Form.Check>
            <Form.Check>
                <Form.Input type="checkbox" id="defaultCheck2" value={true} disabled />
                <Form.Label form-check for="defaultCheck2">
                    Disabled checkbox
                </Form.Label>
            </Form.Check>
            <Form.Text>Checkbox 1: {JSON.stringify(checkbox1)}</Form.Text>
        </>
    );
}

function DefaultRadiosExample(): b.IBobrilNode {
    const [radio, setRadio] = b.useState(1);
    return (
        <>
            <Form.Check>
                <Form.Input type="radio" name="radio" id="exampleRadios1" value={radio === 1} onClick={() => setRadio(1)} />
                <Form.Label form-check for="exampleRadios1">
                    Default radio
                </Form.Label>
            </Form.Check>
            <Form.Check>
                <Form.Input type="radio" name="radio" id="exampleRadios2" value={radio === 2} onClick={() => setRadio(2)} />
                <Form.Label form-check for="exampleRadios2">
                    Second radio
                </Form.Label>
            </Form.Check>
            <Form.Check>
                <Form.Input type="radio" name="radio" id="exampleRadios3" value={radio === 3} onClick={() => setRadio(3)} disabled />
                <Form.Label form-check for="exampleRadios3">
                    Disabled third radio
                </Form.Label>
            </Form.Check>
            <Form.Text>Radio: {JSON.stringify(radio)}</Form.Text>
        </>
    );
}

function RadioToggleExample(): b.IBobrilNode {
    const [radio, setRadio] = b.useState(1);
    return (
        <>
            <Form>
                <Form.Input
                    type="radio"
                    toggle-button
                    name="options"
                    id="option1"
                    autocomplete="off"
                    value={radio === 1}
                    onClick={() => setRadio(1)}
                />
                <Button as="label" variant="secondary" for="option1">
                    First
                </Button>{" "}
                <Form.Input
                    type="radio"
                    toggle-button
                    name="options"
                    id="option2"
                    autocomplete="off"
                    value={radio === 2}
                    onClick={() => setRadio(2)}
                />
                <Button as="label" variant="secondary" for="option2">
                    Second
                </Button>{" "}
                <Form.Input
                    type="radio"
                    toggle-button
                    name="options"
                    id="option3"
                    autocomplete="off"
                    value={radio === 3}
                    onClick={() => setRadio(3)}
                />
                <Button as="label" variant="secondary" for="option3">
                    Third
                </Button>
            </Form>
            <Form.Text>Radio: {JSON.stringify(radio)}</Form.Text>
        </>
    );
}

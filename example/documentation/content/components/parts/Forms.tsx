import * as b from "bobril";
import { IRouteWithNavDefinition } from "../../../../common/routing";
import { Anchor } from "../../../../common/Anchor";
import { Example } from "../../../../common/Example";
import {
    Button,
    Col,
    Form,
    margin,
    Row,
    textColor,
    position,
    InputGroup,
    padding,
    alignItems,
    srOnly,
    Feedback,
} from "../../../../../index";
import { Code } from "../../../../common/Code";
import { Lead } from "../../../../common/Lead";
import { Callout } from "../../../../common/Callout";

export const formsRoute: IRouteWithNavDefinition = {
    url: "forms",
    name: "forms",
    label: "Forms",
    handler: () => <FormsDoc />,
    subs: [
        {
            url: "overview",
            name: "forms-overview",
            label: "Overview",
            subs: [],
        },
        {
            url: "form-controls",
            name: "forms-form-controls",
            label: "Form controls",
            subs: [
                {
                    url: "sizing",
                    name: "forms-form-controls-sizing",
                    label: "Sizing",
                    subs: [],
                },
                {
                    url: "readonly",
                    name: "forms-form-controls-readonly",
                    label: "Readonly",
                    subs: [],
                },
                {
                    url: "readonly-plain-text",
                    name: "forms-form-controls-readonly-plain-text",
                    label: "Readonly plain text",
                    subs: [],
                },
            ],
        },
        {
            url: "range-inputs",
            name: "forms-range-inputs",
            label: "Range inputs",
            subs: [],
        },
        {
            url: "checkboxes-and-radios",
            name: "forms-checkboxes-and-radios",
            label: "Checkboxes and radios",
            subs: [
                {
                    url: "default-stacked",
                    name: "forms-checkboxes-and-radios-default-stacked",
                    label: "Default (stacked)",
                    subs: [],
                },
                {
                    url: "inline",
                    name: "forms-checkboxes-and-radios-inline",
                    label: "Inline",
                    subs: [],
                },
                {
                    url: "without-labels",
                    name: "forms-checkboxes-and-radios-without-labels",
                    label: "Without labels",
                    subs: [],
                },
            ],
        },
        {
            url: "layout",
            name: "forms-layout",
            label: "Layout",
            subs: [
                {
                    url: "form-groups",
                    name: "forms-layout-form-groups",
                    label: "Form groups",
                    subs: [],
                },
                {
                    url: "form-grid",
                    name: "forms-layout-form-grid",
                    label: "Form grid",
                    subs: [
                        {
                            url: "form-row",
                            name: "forms-layout-form-grid-form-row",
                            label: "Form row",
                            subs: [],
                        },
                        {
                            url: "horizontal-form",
                            name: "forms-layout-form-grid-horizontal-form",
                            label: "Horizontal form",
                            subs: [],
                        },
                        {
                            url: "column-sizing",
                            name: "forms-layout-form-grid-column-sizing",
                            label: "Column sizing",
                            subs: [],
                        },
                        {
                            url: "auto-sizing",
                            name: "forms-layout-form-grid-auto-sizing",
                            label: "Auto-sizing",
                            subs: [],
                        },
                    ],
                },
                {
                    url: "inline-forms",
                    name: "forms-layout-inline-forms",
                    label: "Inline forms",
                    subs: [],
                },
            ],
        },
        {
            url: "help-text",
            name: "forms-help-text",
            label: "Help text",
            subs: [],
        },
        {
            url: "disabled-forms",
            name: "forms-disabled-forms",
            label: "Disabled forms",
            subs: [],
        },
        {
            url: "validations",
            name: "forms-validations",
            label: "Validations",
            subs: [
                {
                    url: "validations-tooltips",
                    name: "forms-validations-tooltips",
                    label: "Tooltips",
                    subs: [],
                },
            ],
        },
    ],
};

export function FormsDoc(): b.IBobrilNode {
    return (
        <>
            <Anchor name="forms">
                <h1>Forms</h1>
            </Anchor>
            <Lead>
                Examples and usage guidelines for form control styles, layout options, and custom components for creating a wide variety of
                forms.
            </Lead>
            <Anchor name="forms-overview">
                <h2>Overview</h2>
            </Anchor>
            <p>
                Be sure to use an appropriate <code>type</code> prop on all inputs (e.g., <code>email</code> for email address or{" "}
                <code>number</code> for numerical information) to take advantage of newer input controls like email verification, number
                selection, and more.
            </p>
            <p>
                Here’s a quick example to demonstrate Bobrilstrap’s form styles and how to simply{" "}
                <strong>
                    provide <code>value</code> by prop and handle changes with <code>onChange</code> callback
                </strong>
                .
            </p>
            <Example>
                <OverviewExample />
            </Example>
            <Code language="tsx">{`function OverviewExample(): b.IBobrilNode {
    const [email, setEmail] = b.useState("");
    const [password, setPassword] = b.useState("");
    const [remember, setRemember] = b.useState(false);

    return (
        <>
            <Form>
                <Form.Group>
                    <Form.Label for="exampleInputEmail1">Email address</Form.Label>
                    <Form.Input type="email" id="exampleInputEmail1" aria-describedby="emailHelp" value={email} onChange={setEmail} />
                    <Form.Text small id="emailHelp" style={textColor("muted")}>
                        We'll never share your email with anyone else.
                    </Form.Text>
                </Form.Group>
                <Form.Group>
                    <Form.Label for="exampleInputPassword1">Password</Form.Label>
                    <Form.Input type="password" id="exampleInputPassword1" value={password} onChange={setPassword} />
                </Form.Group>
                <Form.Group>
                    <Form.Check>
                        <Form.Input type="checkbox" id="exampleCheck1" value={remember} onChange={setRemember} />
                        <Form.Label form-check for="exampleCheck1">
                            Check me out
                        </Form.Label>
                    </Form.Check>
                </Form.Group>
                <Button variant="primary" type="submit">
                    Submit
                </Button>
            </Form>
            <Row>
                <Col>Email: {email}</Col>
                <Col>Password: {password}</Col>
                <Col>Remember me: {JSON.stringify(remember)}</Col>
            </Row>
        </>
    );
}

<OverviewExample />
`}</Code>
            <Anchor name="forms-form-controls">
                <h2>Form controls</h2>
            </Anchor>
            <p>
                Textual form controls—like <code>{`<Form.Input>`}</code>s, <code>{`Form.Select`}</code>s, and{" "}
                <code>{`<Form.Textarea>`}</code>s—are styled are with styles for general appearance, focus state, sizing, and more.
            </p>
            <Example>
                <Form>
                    <Form.Group>
                        <Form.Label for="exampleFormControlInput1">Email address</Form.Label>
                        <Form.Input type="email" id="exampleFormControlInput1" placeholder="name@example.com" />
                    </Form.Group>
                    <Form.Group>
                        <Form.Label for="exampleFormControlSelect1">Example select</Form.Label>
                        <Form.Select id="exampleFormControlSelect1">
                            <Form.Option>1</Form.Option>
                            <Form.Option>2</Form.Option>
                            <Form.Option>3</Form.Option>
                            <Form.Option>4</Form.Option>
                            <Form.Option>5</Form.Option>
                        </Form.Select>
                    </Form.Group>
                    <Form.Group>
                        <Form.Label for="exampleFormControlSelect2">Example select</Form.Label>
                        <Form.Select multiple id="exampleFormControlSelect2">
                            <Form.Option>1</Form.Option>
                            <Form.Option>2</Form.Option>
                            <Form.Option>3</Form.Option>
                            <Form.Option>4</Form.Option>
                            <Form.Option>5</Form.Option>
                        </Form.Select>
                    </Form.Group>
                    <Form.Group>
                        <Form.Label for="exampleFormControlTextarea1">Example textarea</Form.Label>
                        <Form.Textarea id="exampleFormControlTextarea1" rows="3" />
                    </Form.Group>
                </Form>
            </Example>
            <Code language="tsx">{`<Form>
    <Form.Group>
        <Form.Label for="exampleFormControlInput1">Email address</Form.Label>
        <Form.Input type="email" id="exampleFormControlInput1" placeholder="name@example.com" />
    </Form.Group>
    <Form.Group>
        <Form.Label for="exampleFormControlSelect1">Example select</Form.Label>
        <Form.Select id="exampleFormControlSelect1">
            <Form.Option>1</Form.Option>
            <Form.Option>2</Form.Option>
            <Form.Option>3</Form.Option>
            <Form.Option>4</Form.Option>
            <Form.Option>5</Form.Option>
        </Form.Select>
    </Form.Group>
    <Form.Group>
        <Form.Label for="exampleFormControlSelect2">Example select</Form.Label>
        <Form.Select multiple id="exampleFormControlSelect2">
            <Form.Option>1</Form.Option>
            <Form.Option>2</Form.Option>
            <Form.Option>3</Form.Option>
            <Form.Option>4</Form.Option>
            <Form.Option>5</Form.Option>
        </Form.Select>
    </Form.Group>
    <Form.Group>
        <Form.Label for="exampleFormControlTextarea1">Example textarea</Form.Label>
        <Form.Textarea id="exampleFormControlTextarea1" rows="3" />
    </Form.Group>
</Form>`}</Code>
            <p>File inputs:</p>
            <Example>
                <Form>
                    <Form.Group>
                        <Form.Label for="exampleFormControlFile1">Example file input</Form.Label>
                        <Form.Input type="file" id="exampleFormControlFile1" />
                    </Form.Group>
                </Form>
            </Example>
            <Code language="tsx">{`<Form>
    <Form.Group>
        <Form.Label for="exampleFormControlFile1">Example file input</Form.Label>
        <Form.Input type="file" id="exampleFormControlFile1" />
    </Form.Group>
</Form>`}</Code>
            <Anchor name="forms-form-controls-sizing">
                <h3>Sizing</h3>
            </Anchor>
            <p>
                Set <code>size</code> prop.
            </p>
            <Example>
                <Form.Input type="text" size="lg" placeholder="lg" />
                <Form.Input type="text" placeholder="Default input" />
                <Form.Input type="text" size="sm" placeholder="sm" />
            </Example>
            <Code language="tsx">{`<Form.Input type="text" size="lg" placeholder="lg" />
<Form.Input type="text" placeholder="Default input" />
<Form.Input type="text" size="sm" placeholder="sm" />`}</Code>
            <Anchor name="forms-form-controls-readonly">
                <h3>Readonly</h3>
            </Anchor>
            <p>
                Add the <code>readonly</code> boolean prop on an input to prevent modification of the input’s value. Read-only inputs appear
                lighter (just like disabled inputs), but retain the standard cursor.
            </p>
            <Example>
                <Form.Input type="text" placeholder="Readonly input here..." readonly />
            </Example>
            <Code language="tsx">{`<Form.Input type="text" placeholder="Readonly input here..." readonly />`}</Code>
            <Anchor name="forms-form-controls-readonly-plain-text">
                <h3>Readonly plain text</h3>
            </Anchor>
            <p>
                If you want to have <code>readonly</code> elements in your form styled as plain text, use the <code>plain-text</code> prop
                to remove the default form field styling and preserve the correct margin and padding.
            </p>
            <Example>
                <Form>
                    <Form.Group row>
                        <Form.Label col sm={2} for="staticEmail">
                            Email
                        </Form.Label>
                        <Col sm={10}>
                            <Form.Input type="text" readonly plain-text id="staticEmail" value="email@example.com" />
                        </Col>
                    </Form.Group>
                    <Form.Group row>
                        <Form.Label col sm={2} for="inputPassword">
                            Password
                        </Form.Label>
                        <Col sm={10}>
                            <Form.Input type="password" id="inputPassword" />
                        </Col>
                    </Form.Group>
                </Form>
            </Example>
            <Code language="tsx">{`<Form>
    <Form.Group row>
        <Form.Label col sm={2} for="staticEmail">
            Email
        </Form.Label>
        <Col sm={10}>
            <Form.Input type="text" readonly plain-text id="staticEmail" value="email@example.com" />
        </Col>
    </Form.Group>
    <Form.Group row>
        <Form.Label col sm={2} for="inputPassword">
            Password
        </Form.Label>
        <Col sm={10}>
            <Form.Input type="password" id="inputPassword" />
        </Col>
    </Form.Group>
</Form>`}</Code>
            <Anchor name="forms-range-inputs">
                <h2>Range inputs</h2>
            </Anchor>
            <Example>
                <Form>
                    <Form.Group>
                        <Form.Label for="formControlRange">Email</Form.Label>
                        <Form.Input type="range" id="formControlRange" />
                    </Form.Group>
                </Form>
            </Example>
            <Code language="tsx">{`<Form>
    <Form.Group>
        <Form.Label for="formControlRange">Email</Form.Label>
        <Form.Input type="range" id="formControlRange" />
    </Form.Group>
</Form>`}</Code>
            <Anchor name="forms-checkboxes-and-radios">
                <h2>Checkboxes and radios</h2>
            </Anchor>
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
            <Anchor name="forms-checkboxes-and-radios-default-stacked">
                <h3>Default (stacked)</h3>
            </Anchor>
            <p>
                By default, any number of checkboxes and radios that are immediate sibling will be vertically stacked and appropriately
                spaced with <code>{`<Form.Check>`}</code>.
            </p>
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
            <Anchor name="forms-checkboxes-and-radios-inline">
                <h3>Inline</h3>
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
            <Anchor name="forms-layout">
                <h3>Without labels</h3>
            </Anchor>
            <p>
                Add <code>position("static")</code> style to inputs within <code>{`<Form.Check>`}</code> that don’t have any label text.
                Remember to still provide some form of accessible name for assistive technologies (for instance, using{" "}
                <code>aria-label</code>).
            </p>
            <Example>
                <Form.Check>
                    <Form.Input type="checkbox" id="blankCheckbox" style={position("static")} aria-label="Blank" />
                </Form.Check>
                <Form.Check>
                    <Form.Input type="radio" name="blankRadio" id="blankRadio1" style={position("static")} aria-label="Blank" />
                </Form.Check>
            </Example>
            <Code language="tsx">{`<Form.Check>
    <Form.Input type="checkbox" id="blankCheckbox" style={position("static")} aria-label="Blank" />
</Form.Check>
<Form.Check>
    <Form.Input type="radio" name="blankRadio" id="blankRadio1" style={position("static")} aria-label="Blank" />
</Form.Check>`}</Code>
            <Anchor name="forms-layout">
                <h2>Layout</h2>
            </Anchor>
            <p>
                Since Bobrilstrap applies <code>display: block</code> and <code>width: 100%</code> to almost all our form controls, forms
                will by default stack vertically. Additional styles can be used to vary this layout on a per-form basis.
            </p>
            <Anchor name="forms-layout-form-groups">
                <h3>Form groups</h3>
            </Anchor>
            <p>
                The <code>{`<Form.Group>`}</code> component is the easiest way to add some structure to forms. It provides a flexible
                styling that encourages proper grouping of labels, controls, optional help text, and form validation messaging. By default
                it only applies <code>margin-bottom</code>, but it picks up additional styles in <code>inline</code> variant as needed. Use
                it with <code>{`<fieldset>`}</code>s, <code>{`<div>`}</code>s, or nearly any other element.
            </p>
            <Example>
                <Form>
                    <Form.Group>
                        <Form.Label for="formGroupExampleInput">Example label</Form.Label>
                        <Form.Input type="text" id="formGroupExampleInput" placeholder="Example input placeholder" />
                    </Form.Group>
                    <Form.Group>
                        <Form.Label for="formGroupExampleInput2">Another label</Form.Label>
                        <Form.Input type="text" id="formGroupExampleInput2" placeholder="Another input placeholder" />
                    </Form.Group>
                </Form>
            </Example>
            <Code language="tsx">{`<Form>
    <Form.Group>
        <Form.Label for="formGroupExampleInput">Example label</Form.Label>
        <Form.Input type="text" id="formGroupExampleInput" placeholder="Example input placeholder" />
    </Form.Group>
    <Form.Group>
        <Form.Label for="formGroupExampleInput2">Another label</Form.Label>
        <Form.Input type="text" id="formGroupExampleInput2" placeholder="Another input placeholder" />
    </Form.Group>
</Form>`}</Code>
            <Anchor name="forms-layout-form-grid">
                <h3>Form grid</h3>
            </Anchor>
            <p>
                More complex forms can be built using our grid component. Use these for form layouts that require multiple columns, varied
                widths, and additional alignment options.
            </p>
            <Example>
                <Form>
                    <Row>
                        <Col>
                            <Form.Input type="text" placeholder="First name" />
                        </Col>
                        <Col>
                            <Form.Input type="text" placeholder="Last name" />
                        </Col>
                    </Row>
                </Form>
            </Example>
            <Code language="tsx">{`<Form>
    <Row>
        <Col>
            <Form.Input type="text" placeholder="First name" />
        </Col>
        <Col>
            <Form.Input type="text" placeholder="Last name" />
        </Col>
    </Row>
</Form>`}</Code>
            <Anchor name="forms-layout-form-grid-form-row">
                <h4>Form row</h4>
            </Anchor>
            <p>
                You may also swap <code>{`<Row>`}</code> for <code>{`<Form.Row>`}</code>, a variation of our standard grid row that
                overrides the default column gutters for tighter and more compact layouts.
            </p>
            <Example>
                <Form>
                    <Form.Row>
                        <Col>
                            <Form.Input type="text" placeholder="First name" />
                        </Col>
                        <Col>
                            <Form.Input type="text" placeholder="Last name" />
                        </Col>
                    </Form.Row>
                </Form>
            </Example>
            <Code language="tsx">{`<Form>
    <Form.Row>
        <Col>
            <Form.Input type="text" placeholder="First name" />
        </Col>
        <Col>
            <Form.Input type="text" placeholder="Last name" />
        </Col>
    </Form.Row>
</Form>`}</Code>
            <p>More complex layouts can also be created with the grid system.</p>
            <Example>
                <Form>
                    <Form.Row>
                        <Col md={6}>
                            <Form.Group>
                                <Form.Label for="inputEmail4">Email</Form.Label>
                                <Form.Input type="email" id="inputEmail4" />
                            </Form.Group>
                        </Col>
                        <Col md={6}>
                            <Form.Group>
                                <Form.Label for="inputPassword4">Password</Form.Label>
                                <Form.Input type="password" id="inputPassword4" />
                            </Form.Group>
                        </Col>
                    </Form.Row>
                    <Form.Group>
                        <Form.Label for="inputAddress">Address</Form.Label>
                        <Form.Input type="text" id="inputAddress" placeholder="1234 Main St" />
                    </Form.Group>
                    <Form.Group>
                        <Form.Label for="inputAddress2">Address 2</Form.Label>
                        <Form.Input type="text" id="inputAddress2" placeholder="Apartment, studio, or floor" />
                    </Form.Group>
                    <Form.Row>
                        <Col md={6}>
                            <Form.Group>
                                <Form.Label for="inputCity">City</Form.Label>
                                <Form.Input type="text" id="inputCity" />
                            </Form.Group>
                        </Col>
                        <Col md={4}>
                            <Form.Group>
                                <Form.Label for="inputState">State</Form.Label>
                                <Form.Select id="inputState">
                                    <Form.Option selected>Choose...</Form.Option>
                                    <Form.Option>...</Form.Option>
                                </Form.Select>
                            </Form.Group>
                        </Col>
                        <Col md={2}>
                            <Form.Group>
                                <Form.Label for="inputZip">Zip</Form.Label>
                                <Form.Input type="text" id="inputZip" />
                            </Form.Group>
                        </Col>
                    </Form.Row>
                    <Form.Group row>
                        <Form.Check>
                            <Form.Input type="checkbox" id="gridCheck" />
                            <Form.Label check for="gridCheck">
                                Check me out
                            </Form.Label>
                        </Form.Check>
                    </Form.Group>
                    <Button type="submit" variant="primary">
                        Sign in
                    </Button>
                </Form>
            </Example>
            <Code language="tsx">{`<Form>
    <Form.Row>
        <Col md={6}>
            <Form.Group>
                <Form.Label for="inputEmail4">Email</Form.Label>
                <Form.Input type="email" id="inputEmail4" />
            </Form.Group>
        </Col>
        <Col md={6}>
            <Form.Group>
                <Form.Label for="inputPassword4">Password</Form.Label>
                <Form.Input type="password" id="inputPassword4" />
            </Form.Group>
        </Col>
    </Form.Row>
    <Form.Group>
        <Form.Label for="inputAddress">Address</Form.Label>
        <Form.Input type="text" id="inputAddress" placeholder="1234 Main St" />
    </Form.Group>
    <Form.Group>
        <Form.Label for="inputAddress2">Address 2</Form.Label>
        <Form.Input type="text" id="inputAddress2" placeholder="Apartment, studio, or floor" />
    </Form.Group>
    <Form.Row>
        <Col md={6}>
            <Form.Group>
                <Form.Label for="inputCity">City</Form.Label>
                <Form.Input type="text" id="inputCity" />
            </Form.Group>
        </Col>
        <Col md={4}>
            <Form.Group>
                <Form.Label for="inputState">State</Form.Label>
                <Form.Select id="inputState">
                    <Form.Option selected>Choose...</Form.Option>
                    <Form.Option>...</Form.Option>
                </Form.Select>
            </Form.Group>
        </Col>
        <Col md={2}>
            <Form.Group>
                <Form.Label for="inputZip">Zip</Form.Label>
                <Form.Input type="text" id="inputZip" />
            </Form.Group>
        </Col>
    </Form.Row>
    <Form.Group>
        <Form.Check>
            <Form.Input type="checkbox" id="gridCheck" />
            <Form.Label check for="gridCheck">
                Check me out
            </Form.Label>
        </Form.Check>
    </Form.Group>
    <Button type="submit" variant="primary">
        Sign in
    </Button>
</Form>`}</Code>
            <Anchor name="forms-layout-form-grid-horizontal-form">
                <h4>Horizontal form</h4>
            </Anchor>
            <p>
                Create horizontal forms with the grid by adding the <code>row</code> prop to form groups and using the <code>size</code> or{" "}
                <code>*breakpoint*</code> props to specify the width of your labels and controls.
            </p>
            <p>
                At times, you maybe need to use margin or padding utilities to create that perfect alignment you need. For example, we’ve
                removed the <code>padding-top</code> on our stacked radio inputs label to better align the text baseline.
            </p>
            <Example>
                <Form>
                    <Form.Group row>
                        <Form.Label col sm={2} for="inputEmail3">
                            Email
                        </Form.Label>
                        <Col sm={10}>
                            <Form.Input type="email" id="inputEmail3" />
                        </Col>
                    </Form.Group>
                    <Form.Group row>
                        <Form.Label col sm={2} for="inputPassword3">
                            Password
                        </Form.Label>
                        <Col sm={10}>
                            <Form.Input type="password" id="inputPassword3" />
                        </Col>
                    </Form.Group>
                    <Form.Group as="fieldset">
                        <Row>
                            <Form.Label col as="legend" sm={2} style={padding({ side: "t", size: 0 })}>
                                Radios
                            </Form.Label>
                            <Col sm={10}>
                                <Form.Check>
                                    <Form.Input type="radio" name="gridRadios" id="gridRadios1" />
                                    <Form.Label form-check for="gridRadios1">
                                        First radio
                                    </Form.Label>
                                </Form.Check>
                                <Form.Check>
                                    <Form.Input type="radio" name="gridRadios" id="gridRadios2" />
                                    <Form.Label form-check for="gridRadios2">
                                        Second radio
                                    </Form.Label>
                                </Form.Check>
                                <Form.Check>
                                    <Form.Input type="radio" name="gridRadios" id="gridRadios3" disabled />
                                    <Form.Label form-check for="gridRadios3">
                                        Third disabled radio
                                    </Form.Label>
                                </Form.Check>
                            </Col>
                        </Row>
                    </Form.Group>
                    <Form.Group row>
                        <Col sm={2}>Checkbox</Col>
                        <Col sm={10}>
                            <Form.Check>
                                <Form.Input type="checkbox" id="gridCheck1" />
                                <Form.Label check for="gridCheck1">
                                    Example checkbox
                                </Form.Label>
                            </Form.Check>
                        </Col>
                    </Form.Group>
                    <Form.Group row>
                        <Col sm={10}>
                            <Button type="submit" variant="primary">
                                Sign in
                            </Button>
                        </Col>
                    </Form.Group>
                </Form>
            </Example>
            <Code language="tsx">{`<Form>
    <Form.Group row>
        <Form.Label col sm={2} for="inputEmail3">
            Email
        </Form.Label>
        <Col sm={10}>
            <Form.Input type="email" id="inputEmail3" />
        </Col>
    </Form.Group>
    <Form.Group row>
        <Form.Label col sm={2} for="inputPassword3">
            Password
        </Form.Label>
        <Col sm={10}>
            <Form.Input type="password" id="inputPassword3" />
        </Col>
    </Form.Group>
    <Form.Group as="fieldset">
        <Row>
            <Form.Label col as="legend" sm={2} style={padding({ side: "t", size: 0 })}>
                Radios
            </Form.Label>
            <Col sm={10}>
                <Form.Check>
                    <Form.Input type="radio" name="gridRadios" id="gridRadios1" />
                    <Form.Label form-check for="gridRadios1">
                        First radio
                    </Form.Label>
                </Form.Check>
                <Form.Check>
                    <Form.Input type="radio" name="gridRadios" id="gridRadios2" />
                    <Form.Label form-check for="gridRadios2">
                        Second radio
                    </Form.Label>
                </Form.Check>
                <Form.Check>
                    <Form.Input type="radio" name="gridRadios" id="gridRadios3" disabled />
                    <Form.Label form-check for="gridRadios3">
                        Third disabled radio
                    </Form.Label>
                </Form.Check>
            </Col>
        </Row>
    </Form.Group>
    <Form.Group row>
        <Col sm={2}>Checkbox</Col>
        <Col sm={10}>
            <Form.Check>
                <Form.Input type="checkbox" id="gridCheck1" />
                <Form.Label check for="gridCheck1">
                    Example checkbox
                </Form.Label>
            </Form.Check>
        </Col>
    </Form.Group>
    <Form.Group row>
        <Col sm={10}>
            <Button type="submit" variant="primary">
                Sign in
            </Button>
        </Col>
    </Form.Group>
</Form>`}</Code>
            <h5>Horizontal form label sizing</h5>
            <p>
                Be sure to use prop <code>col</code> with value <code>sm</code> or <code>lg</code> to correctly follow the size of form.
            </p>
            <Example>
                <Form>
                    <Form.Group row>
                        <Form.Label for="colFormLabelSm" col="sm" sm={2}>
                            Email
                        </Form.Label>
                        <Col span={10}>
                            <Form.Input type="email" size="sm" id="colFormLabelSm" placeholder="sm" />
                        </Col>
                    </Form.Group>
                    <Form.Group row>
                        <Form.Label for="colFormLabelSm" col sm={2}>
                            Email
                        </Form.Label>
                        <Col span={10}>
                            <Form.Input type="email" id="colFormLabel" placeholder="default" />
                        </Col>
                    </Form.Group>
                    <Form.Group row>
                        <Form.Label for="colFormLabelLg" col="lg" sm={2}>
                            Email
                        </Form.Label>
                        <Col span={10}>
                            <Form.Input type="email" size="lg" id="colFormLabelLg" placeholder="lg" />
                        </Col>
                    </Form.Group>
                </Form>
            </Example>
            <Code language="tsx">{`<Form>
                    <Form.Group row>
                        <Form.Label for="colFormLabelSm" col="sm" sm={2}>
                            Email
                        </Form.Label>
                        <Col span={10}>
                            <Form.Input type="email" size="sm" id="colFormLabelSm" placeholder="sm" />
                        </Col>
                    </Form.Group>
                    <Form.Group row>
                        <Form.Label for="colFormLabelSm" col sm={2}>
                            Email
                        </Form.Label>
                        <Col span={10}>
                            <Form.Input type="email" id="colFormLabel" placeholder="default" />
                        </Col>
                    </Form.Group>
                    <Form.Group row>
                        <Form.Label for="colFormLabelLg" col="lg" sm={2}>
                            Email
                        </Form.Label>
                        <Col span={10}>
                            <Form.Input type="email" size="lg" id="colFormLabelLg" placeholder="lg" />
                        </Col>
                    </Form.Group>
                </Form>`}</Code>
            <Anchor name="forms-layout-form-grid-column-sizing">
                <h4>Column sizing</h4>
            </Anchor>
            <p>
                As shown in the previous examples, our grid system allows you to place any number of columns within a row. They’ll split the
                available width equally between them. You may also pick a subset of your columns to take up more or less space, while the
                remaining columns equally split the rest, with specific column span.
            </p>
            <Example>
                <Form>
                    <Form.Row>
                        <Col span={7}>
                            <Form.Input type="text" placeholder="City" />
                        </Col>
                        <Col>
                            <Form.Input type="text" placeholder="State" />
                        </Col>
                        <Col>
                            <Form.Input type="text" placeholder="Zip" />
                        </Col>
                    </Form.Row>
                </Form>
            </Example>
            <Code language="tsx">{`<Form>
    <Form.Row>
        <Col span={7}>
            <Form.Input type="text" placeholder="City" />
        </Col>
        <Col>
            <Form.Input type="text" placeholder="State" />
        </Col>
        <Col>
            <Form.Input type="text" placeholder="Zip" />
        </Col>
    </Form.Row>
</Form>`}</Code>
            <Anchor name="forms-layout-form-grid-auto-sizing">
                <h4>Auto-sizing</h4>
            </Anchor>
            <p>
                The example below uses a flexbox utility to vertically center the contents and uses <code>span="auto"</code> so that your
                columns only take up as much space as needed. Put another way, the column sizes itself based on the contents.
            </p>
            <Example>
                <Form>
                    <Form.Row style={alignItems("center")}>
                        <Col span="auto">
                            <Form.Label style={srOnly} for="inlineFormInput">
                                Name
                            </Form.Label>
                            <Form.Input type="text" style={margin({ side: "b", size: 2 })} id="inlineFormInput" placeholder="Jane Doe" />
                        </Col>
                        <Col span="auto">
                            <Form.Label style={srOnly} for="inlineFormInputGroup">
                                Username
                            </Form.Label>
                            <InputGroup style={margin({ side: "b", size: 2 })}>
                                <InputGroup.Prepend>
                                    <InputGroup.Text>@</InputGroup.Text>
                                </InputGroup.Prepend>
                                <Form.Input type="text" id="inlineFormInputGroup" placeholder="Username" />
                            </InputGroup>
                        </Col>
                        <Col span="auto">
                            <Form.Check style={margin({ side: "b", size: 2 })}>
                                <Form.Input type="checkbox" id="autoSizingCheck" />
                                <Form.Label form-check for="autoSizingCheck">
                                    Remember me
                                </Form.Label>
                            </Form.Check>
                        </Col>
                        <Col span="auto">
                            <Button type="submit" variant="primary" style={margin({ side: "b", size: 2 })}>
                                Submit
                            </Button>
                        </Col>
                    </Form.Row>
                </Form>
            </Example>
            <Code language="tsx">{`<Form>
    <Form.Row style={alignItems("center")}>
        <Col span="auto">
            <Form.Label style={srOnly} for="inlineFormInput">
                Name
            </Form.Label>
            <Form.Input type="text" style={margin({ side: "b", size: 2 })} id="inlineFormInput" placeholder="Jane Doe" />
        </Col>
        <Col span="auto">
            <Form.Label style={srOnly} for="inlineFormInputGroup">
                Username
            </Form.Label>
            <InputGroup style={margin({ side: "b", size: 2 })}>
                <InputGroup.Prepend>
                    <InputGroup.Text>@</InputGroup.Text>
                </InputGroup.Prepend>
                <Form.Input type="text" id="inlineFormInputGroup" placeholder="Username" />
            </InputGroup>
        </Col>
        <Col span="auto">
            <Form.Check style={margin({ side: "b", size: 2 })}>
                <Form.Input type="checkbox" id="autoSizingCheck" />
                <Form.Label form-check for="autoSizingCheck">
                    Remember me
                </Form.Label>
            </Form.Check>
        </Col>
        <Col span="auto">
            <Button type="submit" variant="primary" style={margin({ side: "b", size: 2 })}>
                Submit
            </Button>
        </Col>
    </Form.Row>
</Form>`}</Code>
            <p>You can then remix that once again with size-specific column props.</p>
            <Example>
                <Form>
                    <Form.Row style={alignItems("center")}>
                        <Col sm={3} style={margin({ side: "y", size: 1 })}>
                            <Form.Label style={srOnly} for="inlineFormInputName">
                                Name
                            </Form.Label>
                            <Form.Input type="text" id="inlineFormInputName" placeholder="Jane Doe" />
                        </Col>
                        <Col sm={3} style={margin({ side: "y", size: 1 })}>
                            <Form.Label style={srOnly} for="inlineFormInputGroupUsername">
                                Username
                            </Form.Label>
                            <InputGroup>
                                <InputGroup.Prepend>
                                    <InputGroup.Text>@</InputGroup.Text>
                                </InputGroup.Prepend>
                                <Form.Input type="text" id="inlineFormInputGroupUsername" placeholder="Username" />
                            </InputGroup>
                        </Col>
                        <Col span="auto" style={margin({ side: "y", size: 1 })}>
                            <Form.Check>
                                <Form.Input type="checkbox" id="autoSizingCheck2" />
                                <Form.Label form-check for="autoSizingCheck2">
                                    Remember me
                                </Form.Label>
                            </Form.Check>
                        </Col>
                        <Col span="auto" style={margin({ side: "y", size: 1 })}>
                            <Button type="submit" variant="primary" style={margin({ side: "b", size: 2 })}>
                                Submit
                            </Button>
                        </Col>
                    </Form.Row>
                </Form>
            </Example>
            <Code language="tsx">{`<Form>
                    <Form.Row style={alignItems("center")}>
                        <Col sm={3} style={margin({ side: "y", size: 1 })}>
                            <Form.Label style={srOnly} for="inlineFormInputName">
                                Name
                            </Form.Label>
                            <Form.Input type="text" id="inlineFormInputName" placeholder="Jane Doe" />
                        </Col>
                        <Col sm={3} style={margin({ side: "y", size: 1 })}>
                            <Form.Label style={srOnly} for="inlineFormInputGroupUsername">
                                Username
                            </Form.Label>
                            <InputGroup>
                                <InputGroup.Prepend>
                                    <InputGroup.Text>@</InputGroup.Text>
                                </InputGroup.Prepend>
                                <Form.Input type="text" id="inlineFormInputGroupUsername" placeholder="Username" />
                            </InputGroup>
                        </Col>
                        <Col span="auto" style={margin({ side: "y", size: 1 })}>
                            <Form.Check>
                                <Form.Input type="checkbox" id="autoSizingCheck2" />
                                <Form.Label form-check for="autoSizingCheck2">
                                    Remember me
                                </Form.Label>
                            </Form.Check>
                        </Col>
                        <Col span="auto" style={margin({ side: "y", size: 1 })}>
                            <Button type="submit" variant="primary" style={margin({ side: "b", size: 2 })}>
                                Submit
                            </Button>
                        </Col>
                    </Form.Row>
                </Form>`}</Code>
            <Anchor name="forms-layout-inline-forms">
                <h3>Inline forms</h3>
            </Anchor>
            <p>
                Use the prop <code>inline</code> to display a series of labels, form controls, and buttons on a single horizontal row. Form
                controls within inline forms vary slightly from their default states.
            </p>
            <ul>
                <li>
                    Controls are <code>display: flex</code>, collapsing any HTML white space and allowing you to provide alignment control
                    with spacing and flexbox utilities.
                </li>
                <li>
                    Controls and input groups receive <code>width: auto</code> to override the default <code>width: 100%</code>.
                </li>
                <li>
                    Controls <strong>only appear inline in viewports that are at least 576px</strong> wide to account for narrow viewports
                    on mobile devices.
                </li>
            </ul>
            <p>
                You may need to manually address the width and alignment of individual form controls with spacing utilities (as shown
                below). Lastly, be sure to always include a <code>{`<Form.Label>`}</code> with each form control, even if you need to hide
                it from non-screenreader visitors with <code>srOnly</code>.
            </p>
            <Example>
                <Form inline>
                    <Form.Label style={srOnly} for="inlineFormInputName2">
                        Name
                    </Form.Label>
                    <Form.Input
                        type="text"
                        style={[margin({ side: "b", size: 2 }), margin({ side: "r", size: 2, breakpoint: "sm" })]}
                        id="inlineFormInputName2"
                        placeholder="Jane Doe"
                    />
                    <Form.Label style={srOnly} for="inlineFormInputGroupUsername2">
                        Username
                    </Form.Label>
                    <InputGroup style={[margin({ side: "b", size: 2 }), margin({ side: "r", size: 2, breakpoint: "sm" })]}>
                        <InputGroup.Prepend>
                            <InputGroup.Text>@</InputGroup.Text>
                        </InputGroup.Prepend>
                        <Form.Input type="text" id="inlineFormInputGroupUsername2" placeholder="Username" />
                    </InputGroup>
                    <Form.Check style={[margin({ side: "b", size: 2 }), margin({ side: "r", size: 2, breakpoint: "sm" })]}>
                        <Form.Input type="checkbox" id="inlineFormCheck" />
                        <Form.Label form-check for="inlineFormCheck">
                            Remember me
                        </Form.Label>
                    </Form.Check>
                    <Button type="submit" variant="primary" style={margin({ side: "b", size: 2 })}>
                        Submit
                    </Button>
                </Form>
            </Example>
            <Code language="tsx">{`<Form inline>
    <Form.Label style={srOnly} for="inlineFormInputName2">
        Name
    </Form.Label>
    <Form.Input
        type="text"
        style={[margin({ side: "b", size: 2 }), margin({ side: "r", size: 2, breakpoint: "sm" })]}
        id="inlineFormInputName2"
        placeholder="Jane Doe"
    />
    <Form.Label style={srOnly} for="inlineFormInputGroupUsername2">
        Username
    </Form.Label>
    <InputGroup style={[margin({ side: "b", size: 2 }), margin({ side: "r", size: 2, breakpoint: "sm" })]}>
        <InputGroup.Prepend>
            <InputGroup.Text>@</InputGroup.Text>
        </InputGroup.Prepend>
        <Form.Input type="text" id="inlineFormInputGroupUsername2" placeholder="Username" />
    </InputGroup>
    <Form.Check style={[margin({ side: "b", size: 2 }), margin({ side: "r", size: 2, breakpoint: "sm" })]}>
        <Form.Input type="checkbox" id="inlineFormCheck" />
        <Form.Label form-check for="inlineFormCheck">
            Remember me
        </Form.Label>
    </Form.Check>
    <Button type="submit" variant="primary" style={margin({ side: "b", size: 2 })}>
        Submit
    </Button>
</Form>`}</Code>
            <Anchor name="forms-help-text">
                <h2>Help text</h2>
            </Anchor>
            <p>
                Block-level help text in forms can be created using <code>{`<Form.Text>`}</code>. Inline help text can be flexibly
                implemented using any inline HTML element and utility like <code>textColor("muted")</code>.
            </p>
            <Callout variant="warning">
                <h5>Associating help text with form controls</h5>
                <p>
                    Help text should be explicitly associated with the form control it relates to using the <code>aria-describedby</code>{" "}
                    attribute. This will ensure that assistive technologies—such as screen readers—will announce this help text when the
                    user focuses or enters the control.
                </p>
            </Callout>
            <Example>
                <Form>
                    <Form.Label for="inputPassword5">Password</Form.Label>
                    <Form.Input type="password" id="inputPassword5" aria-describedby="passwordHelpBlock" />
                    <Form.Text id="passwordHelpBlock" style={textColor("muted")}>
                        Your password must be 8-20 characters long, contain letters and numbers, and must not contain spaces, special
                        characters, or emoji.
                    </Form.Text>
                </Form>
            </Example>
            <Code language="tsx">{`<Form>
    <Form.Label for="inputPassword5">Password</Form.Label>
    <Form.Input type="password" id="inputPassword5" aria-describedby="passwordHelpBlock" />
    <Form.Text id="passwordHelpBlock" style={textColor("muted")}>
        Your password must be 8-20 characters long, contain letters and numbers, and must not contain spaces, special
        characters, or emoji.
    </Form.Text>
</Form>`}</Code>
            <Anchor name="forms-disabled-forms">
                <h2>Disabled forms</h2>
            </Anchor>
            <p>
                Add the <code>disabled</code> boolean prop on an input to prevent user interactions and make it appear lighter.
            </p>
            <Code language="tsx">{`<Form.Input id="disabledInput" type="text" placeholder="Disabled input here..." disabled />`}</Code>
            <Example>
                <Form>
                    <Form.Fieldset disabled>
                        <Form.Group>
                            <Form.Label for="disabledTextInput">Disabled input</Form.Label>
                            <Form.Input type="text" id="disabledTextInput" placeholder="Disabled input" />
                        </Form.Group>
                        <Form.Group>
                            <Form.Label for="disabledSelect">Disabled select menu</Form.Label>
                            <Form.Select id="disabledSelect">
                                <Form.Option>Disabled select</Form.Option>
                            </Form.Select>
                        </Form.Group>
                        <Form.Group>
                            <Form.Check>
                                <Form.Input type="checkbox" id="disabledFieldsetCheck" disabled />
                                <Form.Label form-check for="disabledFieldsetCheck">
                                    Can't check this
                                </Form.Label>
                            </Form.Check>
                        </Form.Group>
                        <Button type="submit" variant="primary">
                            Submit
                        </Button>
                    </Form.Fieldset>
                </Form>
            </Example>
            <Code language="tsx">{`<Form>
    <Form.Fieldset disabled>
        <Form.Group>
            <Form.Label for="disabledTextInput">Disabled input</Form.Label>
            <Form.Input type="text" id="disabledTextInput" placeholder="Disabled input" />
        </Form.Group>
        <Form.Group>
            <Form.Label for="disabledSelect">Disabled select menu</Form.Label>
            <Form.Select id="disabledSelect">
                <Form.Option>Disabled select</Form.Option>
            </Form.Select>
        </Form.Group>
        <Form.Group>
            <Form.Check>
                <Form.Input type="checkbox" id="disabledFieldsetCheck" disabled />
                <Form.Label form-check for="disabledFieldsetCheck">
                    Can't check this
                </Form.Label>
            </Form.Check>
        </Form.Group>
        <Button type="submit" variant="primary">
            Submit
        </Button>
    </Form.Fieldset>
</Form>`}</Code>
            <Callout variant="danger">
                <h5>Cross-browser compatibility</h5>
                <p>
                    While Bootstrap will apply these styles in all browsers, Internet Explorer 11 and below don’t fully support the disabled
                    attribute on a <code>{`<fieldset>`}</code>. Use custom JavaScript to disable the fieldset in these browsers.
                </p>
            </Callout>
            <Anchor name="forms-validations">
                <h2>Validations</h2>
            </Anchor>
            <p>
                Use prop <code>valid</code> on any form control to indicate the validation state. Values:
            </p>
            <ul>
                <li>
                    <code>undefined</code> - not validated
                </li>
                <li>
                    <code>true</code> - valid
                </li>
                <li>
                    <code>false</code> - invalid{" "}
                </li>
            </ul>
            <Example>
                <ValidationExample />
            </Example>
            <Code language="tsx">{`export function ValidationExample(): b.IBobrilNode {
    const [firstName, setFirstName] = b.useState("");
    const [lastName, setLastName] = b.useState("");
    const [city, setCity] = b.useState("");
    const [state, setState] = b.useState("");
    const [zip, setZip] = b.useState("");
    const [confirmed, setConfirmed] = b.useState(false);

    const [firstNameValid, setFirstNameValid] = b.useState<boolean | undefined>(undefined);
    const [lastNameValid, setLastNameValid] = b.useState<boolean | undefined>(undefined);
    const [cityValid, setCityValid] = b.useState<boolean | undefined>(undefined);
    const [stateValid, setStateValid] = b.useState<boolean | undefined>(undefined);
    const [zipValid, setZipValid] = b.useState<boolean | undefined>(undefined);
    const [confirmedValid, setConfirmedValid] = b.useState<boolean | undefined>(undefined);

    return (
        <Form>
            <Form.Row>
                <Col md={6} style={margin({ side: "b", size: 3 })}>
                    <Form.Label for="validationCustom01">First name</Form.Label>
                    <Form.Input
                        type="text"
                        class="form-control"
                        id="validationCustom01"
                        value={firstName}
                        onChange={(val: string) => {
                            setFirstName(val);
                            setFirstNameValid(undefined);
                        }}
                        valid={firstNameValid}
                    />
                    <Feedback.Valid>Looks good!</Feedback.Valid>
                    <Feedback.Invalid>Please provide a first name.</Feedback.Invalid>
                </Col>
                <Col md={6} style={margin({ side: "b", size: 3 })}>
                    <Form.Label for="validationCustom02">Last name</Form.Label>
                    <Form.Input
                        type="text"
                        class="form-control"
                        id="validationCustom02"
                        value={lastName}
                        onChange={(val: string) => {
                            setLastName(val);
                            setLastNameValid(undefined);
                        }}
                        valid={lastNameValid}
                    />
                    <Feedback.Valid>Looks good!</Feedback.Valid>
                    <Feedback.Invalid>Please provide a last name.</Feedback.Invalid>
                </Col>
            </Form.Row>
            <Form.Row>
                <Col md={6} style={margin({ side: "b", size: 3 })}>
                    <Form.Label for="validationCustom03">City</Form.Label>
                    <Form.Input
                        type="text"
                        id="validationCustom03"
                        value={city}
                        onChange={(val: string) => {
                            setCity(val);
                            setCityValid(undefined);
                        }}
                        valid={cityValid}
                    />
                    <Feedback.Valid>Looks good!</Feedback.Valid>
                    <Feedback.Invalid>Please provide a valid city.</Feedback.Invalid>
                </Col>
                <Col md={3} style={margin({ side: "b", size: 3 })}>
                    <Form.Label for="validationCustom04">State</Form.Label>
                    <Form.Select
                        id="validationCustom04"
                        custom
                        value={state}
                        onChange={(val: string) => {
                            setState(val);
                            setStateValid(undefined);
                        }}
                        valid={stateValid}
                    >
                        <Form.Option selected={state === ""} disabled value="">
                            Choose...
                        </Form.Option>
                        <Form.Option selected={state === "Czech Republic"} value="Czech Republic">
                            Czech Republic
                        </Form.Option>
                    </Form.Select>
                    <Feedback.Valid>Looks good!</Feedback.Valid>
                    <Feedback.Invalid>Please select a valid state.</Feedback.Invalid>
                </Col>
                <Col md={3} style={margin({ side: "b", size: 3 })}>
                    <Form.Label for="validationCustom05">Zip</Form.Label>
                    <Form.Input
                        type="text"
                        id="validationCustom05"
                        value={zip}
                        onChange={(val: string) => {
                            setZip(val);
                            setZipValid(undefined);
                        }}
                        valid={zipValid}
                    />
                    <Feedback.Valid>Looks good!</Feedback.Valid>
                    <Feedback.Invalid>Please provide a valid zip.</Feedback.Invalid>
                </Col>
            </Form.Row>
            <Form.Group>
                <Form.Check>
                    <Form.Input
                        type="checkbox"
                        id="invalidCheck"
                        value={confirmed}
                        onChange={(val: boolean) => {
                            setConfirmed(val);
                            setConfirmedValid(undefined);
                        }}
                        valid={confirmedValid}
                    />
                    <Form.Label form-check for="invalidCheck">
                        Agree to terms and conditions
                    </Form.Label>
                    <Feedback.Valid>Looks good!</Feedback.Valid>
                    <Feedback.Invalid>You must agree before submitting.</Feedback.Invalid>
                </Form.Check>
            </Form.Group>
            <Button
                onClick={() => {
                    setFirstNameValid(firstName.length > 0);
                    setLastNameValid(lastName.length > 0);
                    setCityValid(city.length > 0);
                    setStateValid(state.length > 0);
                    setZipValid(zip.length > 0);
                    setConfirmedValid(confirmed);
                }}
            >
                Submit
            </Button>
        </Form>
    );
}

<ValidationExample />`}</Code>
            <Anchor name="forms-validations-tooltips">
                <h3>Tooltips</h3>
            </Anchor>
            <p>
                Change feedback to be displayed as tooltip with <code>tooltip</code> prop.
            </p>
            <Example>
                <Form>
                    <Form.Row>
                        <Col md={6} style={margin({ side: "b", size: 3 })}>
                            <Form.Label for="validationTooltip01">First name</Form.Label>
                            <Form.Input type="text" class="form-control" id="validationTooltip01" value="Mark" valid={true} />
                            <Feedback.Valid tooltip>Looks good!</Feedback.Valid>
                            <Feedback.Invalid tooltip>Please provide a first name.</Feedback.Invalid>
                        </Col>
                        <Col md={6} style={margin({ side: "b", size: 3 })}>
                            <Form.Label for="validationTooltip02">Last name</Form.Label>
                            <Form.Input type="text" class="form-control" id="validationTooltip02" value="" valid={false} />
                            <Feedback.Valid tooltip>Looks good!</Feedback.Valid>
                            <Feedback.Invalid tooltip>Please provide a last name.</Feedback.Invalid>
                        </Col>
                    </Form.Row>
                </Form>
            </Example>
            <Code language="tsx">{`<Form>
    <Form.Row>
        <Col md={6} style={margin({ side: "b", size: 3 })}>
            <Form.Label for="validationTooltip01">First name</Form.Label>
            <Form.Input type="text" class="form-control" id="validationTooltip01" value="Mark" valid={true} />
            <Feedback.Valid tooltip>Looks good!</Feedback.Valid>
            <Feedback.Invalid tooltip>Please provide a first name.</Feedback.Invalid>
        </Col>
        <Col md={6} style={margin({ side: "b", size: 3 })}>
            <Form.Label for="validationTooltip02">Last name</Form.Label>
            <Form.Input type="text" class="form-control" id="validationTooltip02" value="" valid={false} />
            <Feedback.Valid tooltip>Looks good!</Feedback.Valid>
            <Feedback.Invalid tooltip>Please provide a last name.</Feedback.Invalid>
        </Col>
    </Form.Row>
</Form>`}</Code>
            {/* InputGroups workaround
        Custom Formy */}
        </>
    );
}

function OverviewExample(): b.IBobrilNode {
    const [email, setEmail] = b.useState("");
    const [password, setPassword] = b.useState("");
    const [remember, setRemember] = b.useState(false);

    return (
        <>
            <Form>
                <Form.Group>
                    <Form.Label for="exampleInputEmail1">Email address</Form.Label>
                    <Form.Input type="email" id="exampleInputEmail1" aria-describedby="emailHelp" value={email} onChange={setEmail} />
                    <Form.Text small id="emailHelp" style={textColor("muted")}>
                        We'll never share your email with anyone else.
                    </Form.Text>
                </Form.Group>
                <Form.Group>
                    <Form.Label for="exampleInputPassword1">Password</Form.Label>
                    <Form.Input type="password" id="exampleInputPassword1" value={password} onChange={setPassword} />
                </Form.Group>
                <Form.Group>
                    <Form.Check>
                        <Form.Input type="checkbox" id="exampleCheck1" value={remember} onChange={setRemember} />
                        <Form.Label form-check for="exampleCheck1">
                            Check me out
                        </Form.Label>
                    </Form.Check>
                </Form.Group>
                <Button variant="primary" type="submit">
                    Submit
                </Button>
            </Form>
            <Row style={margin({ side: "t", size: 3 })}>
                <Col>Email: {email}</Col>
                <Col>Password: {password}</Col>
                <Col>Remember me: {JSON.stringify(remember)}</Col>
            </Row>
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

export function ValidationExample(): b.IBobrilNode {
    const [firstName, setFirstName] = b.useState("");
    const [lastName, setLastName] = b.useState("");
    const [city, setCity] = b.useState("");
    const [state, setState] = b.useState("");
    const [zip, setZip] = b.useState("");
    const [confirmed, setConfirmed] = b.useState(false);

    const [firstNameValid, setFirstNameValid] = b.useState<boolean | undefined>(undefined);
    const [lastNameValid, setLastNameValid] = b.useState<boolean | undefined>(undefined);
    const [cityValid, setCityValid] = b.useState<boolean | undefined>(undefined);
    const [stateValid, setStateValid] = b.useState<boolean | undefined>(undefined);
    const [zipValid, setZipValid] = b.useState<boolean | undefined>(undefined);
    const [confirmedValid, setConfirmedValid] = b.useState<boolean | undefined>(undefined);

    return (
        <Form>
            <Form.Row>
                <Col md={6} style={margin({ side: "b", size: 3 })}>
                    <Form.Label for="validationCustom01">First name</Form.Label>
                    <Form.Input
                        type="text"
                        class="form-control"
                        id="validationCustom01"
                        value={firstName}
                        onChange={(val: string) => {
                            setFirstName(val);
                            setFirstNameValid(undefined);
                        }}
                        valid={firstNameValid}
                    />
                    <Feedback.Valid>Looks good!</Feedback.Valid>
                    <Feedback.Invalid>Please provide a first name.</Feedback.Invalid>
                </Col>
                <Col md={6} style={margin({ side: "b", size: 3 })}>
                    <Form.Label for="validationCustom02">Last name</Form.Label>
                    <Form.Input
                        type="text"
                        class="form-control"
                        id="validationCustom02"
                        value={lastName}
                        onChange={(val: string) => {
                            setLastName(val);
                            setLastNameValid(undefined);
                        }}
                        valid={lastNameValid}
                    />
                    <Feedback.Valid>Looks good!</Feedback.Valid>
                    <Feedback.Invalid>Please provide a last name.</Feedback.Invalid>
                </Col>
            </Form.Row>
            <Form.Row>
                <Col md={6} style={margin({ side: "b", size: 3 })}>
                    <Form.Label for="validationCustom03">City</Form.Label>
                    <Form.Input
                        type="text"
                        id="validationCustom03"
                        value={city}
                        onChange={(val: string) => {
                            setCity(val);
                            setCityValid(undefined);
                        }}
                        valid={cityValid}
                    />
                    <Feedback.Valid>Looks good!</Feedback.Valid>
                    <Feedback.Invalid>Please provide a valid city.</Feedback.Invalid>
                </Col>
                <Col md={3} style={margin({ side: "b", size: 3 })}>
                    <Form.Label for="validationCustom04">State</Form.Label>
                    <Form.Select
                        id="validationCustom04"
                        custom
                        value={state}
                        onChange={(val: string) => {
                            setState(val);
                            setStateValid(undefined);
                        }}
                        valid={stateValid}
                    >
                        <Form.Option selected={state === ""} disabled value="">
                            Choose...
                        </Form.Option>
                        <Form.Option selected={state === "Czech Republic"} value="Czech Republic">
                            Czech Republic
                        </Form.Option>
                    </Form.Select>
                    <Feedback.Valid>Looks good!</Feedback.Valid>
                    <Feedback.Invalid>Please select a valid state.</Feedback.Invalid>
                </Col>
                <Col md={3} style={margin({ side: "b", size: 3 })}>
                    <Form.Label for="validationCustom05">Zip</Form.Label>
                    <Form.Input
                        type="text"
                        id="validationCustom05"
                        value={zip}
                        onChange={(val: string) => {
                            setZip(val);
                            setZipValid(undefined);
                        }}
                        valid={zipValid}
                    />
                    <Feedback.Valid>Looks good!</Feedback.Valid>
                    <Feedback.Invalid>Please provide a valid zip.</Feedback.Invalid>
                </Col>
            </Form.Row>
            <Form.Group>
                <Form.Check>
                    <Form.Input
                        type="checkbox"
                        id="invalidCheck"
                        value={confirmed}
                        onChange={(val: boolean) => {
                            setConfirmed(val);
                            setConfirmedValid(undefined);
                        }}
                        valid={confirmedValid}
                    />
                    <Form.Label form-check for="invalidCheck">
                        Agree to terms and conditions
                    </Form.Label>
                    <Feedback.Valid>Looks good!</Feedback.Valid>
                    <Feedback.Invalid>You must agree before submitting.</Feedback.Invalid>
                </Form.Check>
            </Form.Group>
            <Button
                onClick={() => {
                    setFirstNameValid(firstName.length > 0);
                    setLastNameValid(lastName.length > 0);
                    setCityValid(city.length > 0);
                    setStateValid(state.length > 0);
                    setZipValid(zip.length > 0);
                    setConfirmedValid(confirmed);
                }}
            >
                Submit
            </Button>
        </Form>
    );
}

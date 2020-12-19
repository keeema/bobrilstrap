import * as b from "bobril";
import { IRouteWithNavDefinition } from "../../../../common/routing";
import { Anchor } from "../../../../common/Anchor";
import { Example } from "../../../../common/Example";
import { alignItems, Button, Col, Form, InputGroup, margin, padding, Row, visuallyHidden } from "../../../../../index";
import { Code } from "../../../../common/Code";
import { Lead } from "../../../../common/Lead";
import { gutter, gutterX, gutterY } from "../../../../../src/utilities/gutters";

export const formLayoutRoute: IRouteWithNavDefinition = {
    url: "form-layout",
    name: "form-layout",
    label: "Layout",
    handler: () => <FormLayoutDoc />,
    subs: [
        {
            url: "form-grid",
            name: "form-layout-form-grid",
            label: "Form grid",
            subs: [],
        },
        {
            url: "gutters",
            name: "form-layout-gutters",
            label: "Gutters",
            subs: [],
        },
        {
            url: "horizontal-form",
            name: "form-layout-horizontal-form",
            label: "Horizontal form",
            subs: [
                {
                    url: "horizontal-form-label-sizing",
                    name: "form-layout-horizontal-form-horizontal-form-label-sizing",
                    label: "Horizontal form label sizing",
                    subs: [],
                },
            ],
        },
        {
            url: "column-sizing",
            name: "form-layout-column-sizing",
            label: "Column sizing",
            subs: [],
        },
        {
            url: "auto-sizing",
            name: "form-layout-auto-sizing",
            label: "Auto sizing",
            subs: [],
        },
    ],
};

export function FormLayoutDoc(): b.IBobrilNode {
    return (
        <>
            <Anchor name="form-layout">
                <h1>Layout</h1>
            </Anchor>
            <Lead>
                Give your forms some structure—from inline to horizontal to custom grid implementations—with our form layout options.
            </Lead>
            <Anchor name="form-layout-form-grid">
                <h2>Form grid</h2>
            </Anchor>
            <p>
                More complex forms can be built using our grid component. Use these for form layouts that require multiple columns, varied
                widths, and additional alignment options.
            </p>
            <Example>
                <Row>
                    <Col>
                        <Form.Input type="text" placeholder="First name" />
                    </Col>
                    <Col>
                        <Form.Input type="text" placeholder="Last name" />
                    </Col>
                </Row>
            </Example>
            <Code language="tsx">{`<Row>
    <Col>
        <Form.Input type="text" placeholder="First name" />
    </Col>
    <Col>
        <Form.Input type="text" placeholder="Last name" />
    </Col>
</Row>`}</Code>
            <Anchor name="form-layout-gutters">
                <h2>Gutters</h2>
            </Anchor>
            <p>
                You may also swap <code>{`<Row>`}</code> for <code>{`<Row style={gutter(3)}>`}</code>, a variation of our standard grid row
                that overrides the default column gutters for tighter and more compact layouts.
            </p>
            <Example>
                <Row style={gutter(3)}>
                    <Col>
                        <Form.Input type="text" placeholder="First name" />
                    </Col>
                    <Col>
                        <Form.Input type="text" placeholder="Last name" />
                    </Col>
                </Row>
            </Example>
            <Code language="tsx">{`<Row style={gutter(3)}>
    <Col>
        <Form.Input type="text" placeholder="First name" />
    </Col>
    <Col>
        <Form.Input type="text" placeholder="Last name" />
    </Col>
</Row>`}</Code>
            <p>More complex layouts can also be created with the grid system.</p>
            <Example>
                <Row as="form" style={gutter(3)}>
                    <Col md={6}>
                        <Form.Label for="inputEmail4">Email</Form.Label>
                        <Form.Input type="email" id="inputEmail4" />
                    </Col>
                    <Col md={6}>
                        <Form.Label for="inputPassword4">Password</Form.Label>
                        <Form.Input type="password" id="inputPassword4" />
                    </Col>
                    <Col span={12}>
                        <Form.Label for="inputAddress">Address</Form.Label>
                        <Form.Input type="text" id="inputAddress" placeholder="1234 Main St" />
                    </Col>
                    <Col span={12}>
                        <Form.Label for="inputAddress2">Address 2</Form.Label>
                        <Form.Input type="text" id="inputAddress2" placeholder="Apartment, studio, or floor" />
                    </Col>
                    <Col md={6}>
                        <Form.Label for="inputCity">City</Form.Label>
                        <Form.Input type="text" id="inputCity" />
                    </Col>
                    <Col md={4}>
                        <Form.Label for="inputState">State</Form.Label>
                        <Form.Select id="inputState">
                            <Form.Option selected>Choose...</Form.Option>
                            <Form.Option>...</Form.Option>
                        </Form.Select>
                    </Col>
                    <Col md={2}>
                        <Form.Label for="inputZip">Zip</Form.Label>
                        <Form.Input type="text" id="inputZip" />
                    </Col>
                    <Col span={12}>
                        <Form.Check>
                            <Form.Input type="checkbox" id="gridCheck" />
                            <Form.Label check for="gridCheck">
                                Check me out
                            </Form.Label>
                        </Form.Check>
                    </Col>
                    <Col span={12}>
                        <Button variant="primary">Sign in</Button>
                    </Col>
                </Row>
            </Example>
            <Code language="tsx">{`<Row as="form" style={gutter(3)}>
    <Col md={6}>
        <Form.Label for="inputEmail4">Email</Form.Label>
        <Form.Input type="email" id="inputEmail4" />
    </Col>
    <Col md={6}>
        <Form.Label for="inputPassword4">Password</Form.Label>
        <Form.Input type="password" id="inputPassword4" />
    </Col>
    <Col span={12}>
        <Form.Label for="inputAddress">Address</Form.Label>
        <Form.Input type="text" id="inputAddress" placeholder="1234 Main St" />
    </Col>
    <Col span={12}>
        <Form.Label for="inputAddress2">Address 2</Form.Label>
        <Form.Input type="text" id="inputAddress2" placeholder="Apartment, studio, or floor" />
    </Col>
    <Col md={6}>
        <Form.Label for="inputCity">City</Form.Label>
        <Form.Input type="text" id="inputCity" />
    </Col>
    <Col md={4}>
        <Form.Label for="inputState">State</Form.Label>
        <Form.Select id="inputState">
            <Form.Option selected>Choose...</Form.Option>
            <Form.Option>...</Form.Option>
        </Form.Select>
    </Col>
    <Col md={2}>
        <Form.Label for="inputZip">Zip</Form.Label>
        <Form.Input type="text" id="inputZip" />
    </Col>
    <Col span={12}>
        <Form.Check>
            <Form.Input type="checkbox" id="gridCheck" />
            <Form.Label check for="gridCheck">
                Check me out
            </Form.Label>
        </Form.Check>
    </Col>
    <Col span={12}>
        <Button variant="primary">Sign in</Button>
    </Col>
</Row>`}</Code>
            <Anchor name="form-layout-horizontal-form">
                <h2>Horizontal form</h2>
            </Anchor>
            <p>
                Create horizontal forms with the grid by adding the <code>{`<Row>`}</code> component to form groups and using the{" "}
                <code>{`<Col>`}</code> component with respective breakpoints to specify the width of your labels and controls. Be sure to
                use <code>{`<Form.Label col>`}</code> component as well so they’re vertically centered with their associated form controls.
            </p>
            <p>At times, you maybe need to use margin or padding utilities to create that perfect alignment you need.</p>
            <Example>
                <Form>
                    <Row style={margin("b", 3)}>
                        <Form.Label col sm={2} for="inputEmail3">
                            Email
                        </Form.Label>
                        <Col sm={10}>
                            <Form.Input type="email" id="inputEmail3" />
                        </Col>
                    </Row>
                    <Row style={margin("b", 3)}>
                        <Form.Label col sm={2} for="inputPassword3">
                            Password
                        </Form.Label>
                        <Col sm={10}>
                            <Form.Input type="password" id="inputPassword3" />
                        </Col>
                    </Row>
                    <Row style={margin("b", 3)} as="fieldset">
                        <Form.Label col sm={2} style={padding("t", 0)}>
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
                    <Row style={margin("b", 3)}>
                        <Col sm={2}>Checkbox</Col>
                        <Col sm={10}>
                            <Form.Check>
                                <Form.Input type="checkbox" id="gridCheck1" />
                                <Form.Label check for="gridCheck1">
                                    Example checkbox
                                </Form.Label>
                            </Form.Check>
                        </Col>
                    </Row>
                    <Row style={margin("b", 3)}>
                        <Col sm={10}>
                            <Button type="submit" variant="primary">
                                Sign in
                            </Button>
                        </Col>
                    </Row>
                </Form>
            </Example>
            <Code language="tsx">{`<Form>
    <Row style={margin("b", 3)}>
        <Form.Label col sm={2} for="inputEmail3">
            Email
        </Form.Label>
        <Col sm={10}>
            <Form.Input type="email" id="inputEmail3" />
        </Col>
    </Row>
    <Row style={margin("b", 3)}>
        <Form.Label col sm={2} for="inputPassword3">
            Password
        </Form.Label>
        <Col sm={10}>
            <Form.Input type="password" id="inputPassword3" />
        </Col>
    </Row>
    <Row style={margin("b", 3)} as="fieldset">
        <Form.Label col sm={2} style={padding("t", 0)}>
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
    <Row style={margin("b", 3)}>
        <Col sm={2}>Checkbox</Col>
        <Col sm={10}>
            <Form.Check>
                <Form.Input type="checkbox" id="gridCheck1" />
                <Form.Label check for="gridCheck1">
                    Example checkbox
                </Form.Label>
            </Form.Check>
        </Col>
    </Row>
    <Row style={margin("b", 3)}>
        <Col sm={10}>
            <Button type="submit" variant="primary">
                Sign in
            </Button>
        </Col>
    </Row>
</Form>`}</Code>
            <Anchor name="form-layout-horizontal-form-horizontal-form-label-sizing">
                <h3>Horizontal form label sizing</h3>
            </Anchor>
            <p>
                Be sure to use prop <code>col</code> with value <code>sm</code> or <code>lg</code> to correctly follow the size of form.
            </p>
            <Example>
                <Form>
                    <Row style={margin("b", 3)}>
                        <Form.Label for="colFormLabelSm" col="sm" sm={2}>
                            Email
                        </Form.Label>
                        <Col sm={10}>
                            <Form.Input type="email" size="sm" id="colFormLabelSm" placeholder="sm" />
                        </Col>
                    </Row>
                    <Row style={margin("b", 3)}>
                        <Form.Label for="colFormLabelSm" col sm={2}>
                            Email
                        </Form.Label>
                        <Col sm={10}>
                            <Form.Input type="email" id="colFormLabel" placeholder="default" />
                        </Col>
                    </Row>
                    <Row style={margin("b", 3)}>
                        <Form.Label for="colFormLabelLg" col="lg" sm={2}>
                            Email
                        </Form.Label>
                        <Col sm={10}>
                            <Form.Input type="email" size="lg" id="colFormLabelLg" placeholder="lg" />
                        </Col>
                    </Row>
                </Form>
            </Example>
            <Code language="tsx">{`<Form>
    <Row style={margin("b", 3)}>
        <Form.Label for="colFormLabelSm" col="sm" sm={2}>
            Email
        </Form.Label>
        <Col sm={10}>
            <Form.Input type="email" size="sm" id="colFormLabelSm" placeholder="sm" />
        </Col>
    </Row>
    <Row style={margin("b", 3)}>
        <Form.Label for="colFormLabelSm" col sm={2}>
            Email
        </Form.Label>
        <Col sm={10}>
            <Form.Input type="email" id="colFormLabel" placeholder="default" />
        </Col>
    </Row>
    <Row style={margin("b", 3)}>
        <Form.Label for="colFormLabelLg" col="lg" sm={2}>
            Email
        </Form.Label>
        <Col sm={10}>
            <Form.Input type="email" size="lg" id="colFormLabelLg" placeholder="lg" />
        </Col>
    </Row>
</Form>`}</Code>
            <Anchor name="form-layout-column-sizing">
                <h2>Column sizing</h2>
            </Anchor>
            <p>
                As shown in the previous examples, our grid system allows you to place any number of columns within a row. They’ll split the
                available width equally between them. You may also pick a subset of your columns to take up more or less space, while the
                remaining columns equally split the rest, with specific column span.
            </p>
            <Example>
                <Form>
                    <Row style={margin("b", 3)}>
                        <Col sm={7}>
                            <Form.Input type="text" placeholder="City" />
                        </Col>
                        <Col sm>
                            <Form.Input type="text" placeholder="State" />
                        </Col>
                        <Col sm>
                            <Form.Input type="text" placeholder="Zip" />
                        </Col>
                    </Row>
                </Form>
            </Example>
            <Code language="tsx">{`<Form>
    <Row style={margin("b", 3)}>
        <Col sm={7}>
            <Form.Input type="text" placeholder="City" />
        </Col>
        <Col sm>
            <Form.Input type="text" placeholder="State" />
        </Col>
        <Col sm>
            <Form.Input type="text" placeholder="Zip" />
        </Col>
    </Row>
</Form>`}</Code>
            <Anchor name="form-layout-auto-sizing">
                <h2>Auto-sizing</h2>
            </Anchor>
            <p>
                The example below uses a flexbox utility to vertically center the contents and uses <code>span="auto"</code> so that your
                columns only take up as much space as needed. Put another way, the column sizes itself based on the contents.
            </p>
            <Example>
                <Form>
                    <Row style={[gutterY(2), gutterX(3), alignItems("center")]}>
                        <Col span="auto">
                            <Form.Label style={visuallyHidden} for="autoSizingInput">
                                Name
                            </Form.Label>
                            <Form.Input type="text" style={margin("b", 2)} id="autoSizingInput" placeholder="Jane Doe" />
                        </Col>
                        <Col span="auto">
                            <Form.Label style={visuallyHidden} for="autoSizingInputGroup">
                                Username
                            </Form.Label>
                            <InputGroup>
                                <InputGroup.Text>@</InputGroup.Text>
                                <Form.Input type="text" id="autoSizingInputGroup" placeholder="Username" />
                            </InputGroup>
                        </Col>
                        <Col span="auto">
                            <Form.Label style={visuallyHidden} for="autoSizingSelect">
                                Preference
                            </Form.Label>
                            <Form.Select id="autoSizingSelect">
                                <Form.Option selected>Choose...</Form.Option>
                                <Form.Option value="1">One</Form.Option>
                                <Form.Option value="2">Two</Form.Option>
                                <Form.Option value="3">Three</Form.Option>
                            </Form.Select>
                        </Col>
                        <Col span="auto">
                            <Form.Check style={margin("b", 2)}>
                                <Form.Input type="checkbox" id="autoSizingCheck" />
                                <Form.Label form-check for="autoSizingCheck">
                                    Remember me
                                </Form.Label>
                            </Form.Check>
                        </Col>
                        <Col span="auto">
                            <Button type="submit" variant="primary" style={margin("b", 2)}>
                                Submit
                            </Button>
                        </Col>
                    </Row>
                </Form>
            </Example>
            <Code language="tsx">{`<Form>
    <Row style={[gutterY(2), gutterX(3), alignItems("center")]}>
        <Col span="auto">
            <Form.Label style={visuallyHidden} for="autoSizingInput">
                Name
            </Form.Label>
            <Form.Input type="text" style={margin("b", 2)} id="autoSizingInput" placeholder="Jane Doe" />
        </Col>
        <Col span="auto">
            <Form.Label style={visuallyHidden} for="autoSizingInputGroup">
                Username
            </Form.Label>
            <InputGroup>
                <InputGroup.Text>@</InputGroup.Text>
                <Form.Input type="text" id="autoSizingInputGroup" placeholder="Username" />
            </InputGroup>
        </Col>
        <Col span="auto">
            <Form.Label style={visuallyHidden} for="autoSizingSelect">
                Preference
            </Form.Label>
            <Form.Select id="autoSizingSelect">
                <Form.Option selected>Choose...</Form.Option>
                <Form.Option value="1">One</Form.Option>
                <Form.Option value="2">Two</Form.Option>
                <Form.Option value="3">Three</Form.Option>
            </Form.Select>
        </Col>
        <Col span="auto">
            <Form.Check style={margin("b", 2)}>
                <Form.Input type="checkbox" id="autoSizingCheck" />
                <Form.Label form-check for="autoSizingCheck">
                    Remember me
                </Form.Label>
            </Form.Check>
        </Col>
        <Col span="auto">
            <Button type="submit" variant="primary" style={margin("b", 2)}>
                Submit
            </Button>
        </Col>
    </Row>
</Form>`}</Code>
            <p>You can then remix that once again with size-specific column props.</p>
            <Example>
                <Form>
                    <Row style={[gutterY(2), gutterX(3), alignItems("center")]}>
                        <Col sm={3}>
                            <Form.Label style={visuallyHidden} for="specificSizingInput">
                                Name
                            </Form.Label>
                            <Form.Input type="text" style={margin("b", 2)} id="specificSizingInput" placeholder="Jane Doe" />
                        </Col>
                        <Col sm={3}>
                            <Form.Label style={visuallyHidden} for="specificSizingInputGroup">
                                Username
                            </Form.Label>
                            <InputGroup>
                                <InputGroup.Text>@</InputGroup.Text>
                                <Form.Input type="text" id="specificSizingInputGroup" placeholder="Username" />
                            </InputGroup>
                        </Col>
                        <Col sm={3}>
                            <Form.Label style={visuallyHidden} for="specificSizingSelect">
                                Preference
                            </Form.Label>
                            <Form.Select id="specificSizingSelect">
                                <Form.Option selected>Choose...</Form.Option>
                                <Form.Option value="1">One</Form.Option>
                                <Form.Option value="2">Two</Form.Option>
                                <Form.Option value="3">Three</Form.Option>
                            </Form.Select>
                        </Col>
                        <Col span="auto">
                            <Form.Check style={margin("b", 2)}>
                                <Form.Input type="checkbox" id="specificSizingCheck" />
                                <Form.Label form-check for="specificSizingCheck">
                                    Remember me
                                </Form.Label>
                            </Form.Check>
                        </Col>
                        <Col span="auto">
                            <Button type="submit" variant="primary" style={margin("b", 2)}>
                                Submit
                            </Button>
                        </Col>
                    </Row>
                </Form>
            </Example>
            <Code language="tsx">{`<Form>
    <Row style={[gutterY(2), gutterX(3), alignItems("center")]}>
        <Col sm={3}>
            <Form.Label style={visuallyHidden} for="specificSizingInput">
                Name
            </Form.Label>
            <Form.Input type="text" style={margin("b", 2)} id="specificSizingInput" placeholder="Jane Doe" />
        </Col>
        <Col sm={3}>
            <Form.Label style={visuallyHidden} for="specificSizingInputGroup">
                Username
            </Form.Label>
            <InputGroup>
                <InputGroup.Text>@</InputGroup.Text>
                <Form.Input type="text" id="specificSizingInputGroup" placeholder="Username" />
            </InputGroup>
        </Col>
        <Col sm={3}>
            <Form.Label style={visuallyHidden} for="specificSizingSelect">
                Preference
            </Form.Label>
            <Form.Select id="specificSizingSelect">
                <Form.Option selected>Choose...</Form.Option>
                <Form.Option value="1">One</Form.Option>
                <Form.Option value="2">Two</Form.Option>
                <Form.Option value="3">Three</Form.Option>
            </Form.Select>
        </Col>
        <Col span="auto">
            <Form.Check style={margin("b", 2)}>
                <Form.Input type="checkbox" id="specificSizingCheck" />
                <Form.Label form-check for="specificSizingCheck">
                    Remember me
                </Form.Label>
            </Form.Check>
        </Col>
        <Col span="auto">
            <Button type="submit" variant="primary" style={margin("b", 2)}>
                Submit
            </Button>
        </Col>
    </Row>
</Form>`}</Code>
            <Anchor name="form-layout-inline-forms">
                <h3>Inline forms</h3>
            </Anchor>
            <p>
                Use the <code>span="auto"</code> props to create horizontal layouts. By adding <code>gutter</code> modifiers, we’ll have
                gutters in horizontal and vertical directions. The <code>alignItems("center")</code> aligns the form elements to the middle,
                making the checkboxes align properly.
            </p>
            <Example>
                <Row as="form" lg="auto" style={[gutter(3), alignItems("center")]}>
                    <Col span={12}>
                        <Form.Label style={visuallyHidden} for="inlineFormInputGroupUsername">
                            Username
                        </Form.Label>
                        <InputGroup>
                            <InputGroup.Text>@</InputGroup.Text>
                            <Form.Input type="text" id="inlineFormInputGroupUsername" placeholder="Username" />
                        </InputGroup>
                    </Col>

                    <Col span={12}>
                        <Form.Label style={visuallyHidden} for="inlineFormSelectPref">
                            Preference
                        </Form.Label>
                        <Form.Select id="inlineFormSelectPref">
                            <Form.Option selected>Choose...</Form.Option>
                            <Form.Option value="1">One</Form.Option>
                            <Form.Option value="2">Two</Form.Option>
                            <Form.Option value="3">Three</Form.Option>
                        </Form.Select>
                    </Col>
                    <Col span={12}>
                        <Form.Check>
                            <Form.Input type="checkbox" id="inlineFormCheck" />
                            <Form.Label form-check for="inlineFormCheck">
                                Remember me
                            </Form.Label>
                        </Form.Check>
                    </Col>
                    <Col span={12}>
                        <Button variant="primary">Submit</Button>
                    </Col>
                </Row>
            </Example>
            <Code language="tsx">{`<Row as="form" lg="auto" style={[gutter(3), alignItems("center")]}>
    <Col span={12}>
        <Form.Label style={visuallyHidden} for="inlineFormInputGroupUsername">
            Username
        </Form.Label>
        <InputGroup>
            <InputGroup.Text>@</InputGroup.Text>
            <Form.Input type="text" id="inlineFormInputGroupUsername" placeholder="Username" />
        </InputGroup>
    </Col>

    <Col span={12}>
        <Form.Label style={visuallyHidden} for="inlineFormSelectPref">
            Preference
        </Form.Label>
        <Form.Select id="inlineFormSelectPref">
            <Form.Option selected>Choose...</Form.Option>
            <Form.Option value="1">One</Form.Option>
            <Form.Option value="2">Two</Form.Option>
            <Form.Option value="3">Three</Form.Option>
        </Form.Select>
    </Col>
    <Col span={12}>
        <Form.Check>
            <Form.Input type="checkbox" id="inlineFormCheck" />
            <Form.Label form-check for="inlineFormCheck">
                Remember me
            </Form.Label>
        </Form.Check>
    </Col>
    <Col span={12}>
        <Button variant="primary">Submit</Button>
    </Col>
</Row>`}</Code>
        </>
    );
}

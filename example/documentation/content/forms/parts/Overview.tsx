import * as b from "bobril";
import { IRouteWithNavDefinition } from "../../../../common/routing";
import { Anchor } from "../../../../common/Anchor";
import { Example } from "../../../../common/Example";
import { Button, Col, Form, margin, Row, textColor } from "../../../../../index";
import { Code } from "../../../../common/Code";
import { Lead } from "../../../../common/Lead";
import { Callout } from "../../../../common/Callout";

export const overviewRoute: IRouteWithNavDefinition = {
    url: "forms-overview-main",
    name: "forms-overview-main",
    label: "Overview",
    handler: () => <FormsDoc />,
    subs: [
        {
            url: "overview",
            name: "forms-overview",
            label: "Overview",
            subs: [],
        },
        {
            url: "form-text",
            name: "forms-form-text",
            label: "Form text",
            subs: [],
        },
        {
            url: "disabled-forms",
            name: "forms-disabled-forms",
            label: "Disabled forms",
            subs: [],
        },
    ],
};

export function FormsDoc(): b.IBobrilNode {
    return (
        <>
            <Anchor name="forms-overview-main">
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
                <div style={margin({ side: "b", size: 3 })}>
                    <Form.Label for="exampleInputEmail1">Email address</Form.Label>
                    <Form.Input type="email" id="exampleInputEmail1" aria-describedby="emailHelp" value={email} onChange={setEmail} />
                    <Form.Text small id="emailHelp" style={textColor("muted")}>
                        We'll never share your email with anyone else.
                    </Form.Text>
                </div>
                <div style={margin({ side: "b", size: 3 })}>
                    <Form.Label for="exampleInputPassword1">Password</Form.Label>
                    <Form.Input type="password" id="exampleInputPassword1" value={password} onChange={setPassword} />
                </div>
                <Form.Check style={margin({ side: "b", size: 3 })}>
                    <Form.Input type="checkbox" id="exampleCheck1" value={remember} onChange={setRemember} />
                    <Form.Label form-check for="exampleCheck1">
                        Check me out
                    </Form.Label>
                </Form.Check>
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

<OverviewExample />
`}</Code>
            <Anchor name="forms-form-text">
                <h2>Form text</h2>
            </Anchor>
            <p>
                Block-level text in forms can be created using <code>{`<Form.Text>`}</code>. Inline text can be flexibly implemented using
                any inline HTML element and utility like <code>textColor("muted")</code>.
            </p>
            <Callout variant="warning">
                <h5>Associating form text with form controls</h5>
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
            <Example>
                <Form.Input id="disabledInput" type="text" placeholder="Disabled input here..." disabled />
            </Example>
            <Code language="tsx">{`<Form.Input id="disabledInput" type="text" placeholder="Disabled input here..." disabled />`}</Code>
            <p>
                Add the <code>disabled</code> attribute to a <code>{`<fieldset>`}</code> to disable all the controls within. Browsers treat
                all native form controls inside a <code>{`<fieldset>`}</code> as disabled, preventing both keyboard and mouse interactions
                on them.
            </p>
            <Example>
                <Form>
                    <Form.Fieldset disabled>
                        <div style={margin({ side: "b", size: 3 })}>
                            <Form.Label for="disabledTextInput">Disabled input</Form.Label>
                            <Form.Input type="text" id="disabledTextInput" placeholder="Disabled input" />
                        </div>
                        <div style={margin({ side: "b", size: 3 })}>
                            <Form.Label for="disabledSelect">Disabled select menu</Form.Label>
                            <Form.Select id="disabledSelect">
                                <Form.Option>Disabled select</Form.Option>
                            </Form.Select>
                        </div>
                        <Form.Check style={margin({ side: "b", size: 3 })}>
                            <Form.Input type="checkbox" id="disabledFieldsetCheck" disabled />
                            <Form.Label form-check for="disabledFieldsetCheck">
                                Can't check this
                            </Form.Label>
                        </Form.Check>
                        <Button type="submit" variant="primary">
                            Submit
                        </Button>
                    </Form.Fieldset>
                </Form>
            </Example>
            <Code language="tsx">{`<Form>
    <Form.Fieldset disabled>
        <div style={margin({ side: "b", size: 3 })}>
            <Form.Label for="disabledTextInput">Disabled input</Form.Label>
            <Form.Input type="text" id="disabledTextInput" placeholder="Disabled input" />
        </div>
        <div style={margin({ side: "b", size: 3 })}>
            <Form.Label for="disabledSelect">Disabled select menu</Form.Label>
            <Form.Select id="disabledSelect">
                <Form.Option>Disabled select</Form.Option>
            </Form.Select>
        </div>
        <Form.Check style={margin({ side: "b", size: 3 })}>
            <Form.Input type="checkbox" id="disabledFieldsetCheck" disabled />
            <Form.Label form-check for="disabledFieldsetCheck">
                Can't check this
            </Form.Label>
        </Form.Check>
        <Button type="submit" variant="primary">
            Submit
        </Button>
    </Form.Fieldset>
</Form>`}</Code>
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
                <div style={margin({ side: "b", size: 3 })}>
                    <Form.Label for="exampleInputEmail1">Email address</Form.Label>
                    <Form.Input type="email" id="exampleInputEmail1" aria-describedby="emailHelp" value={email} onChange={setEmail} />
                    <Form.Text small id="emailHelp" style={textColor("muted")}>
                        We'll never share your email with anyone else.
                    </Form.Text>
                </div>
                <div style={margin({ side: "b", size: 3 })}>
                    <Form.Label for="exampleInputPassword1">Password</Form.Label>
                    <Form.Input type="password" id="exampleInputPassword1" value={password} onChange={setPassword} />
                </div>
                <Form.Check style={margin({ side: "b", size: 3 })}>
                    <Form.Input type="checkbox" id="exampleCheck1" value={remember} onChange={setRemember} />
                    <Form.Label form-check for="exampleCheck1">
                        Check me out
                    </Form.Label>
                </Form.Check>
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

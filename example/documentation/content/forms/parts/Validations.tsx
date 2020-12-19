import * as b from "bobril";
import { IRouteWithNavDefinition } from "../../../../common/routing";
import { Anchor } from "../../../../common/Anchor";
import { Example } from "../../../../common/Example";
import { Button, Col, Form, margin, Row, Feedback, gutter } from "../../../../../index";
import { Code } from "../../../../common/Code";
import { Lead } from "../../../../common/Lead";
import { position } from "../../../../../src/utilities/position";
import { InputGroup } from "../../../../../src/components/InputGroup";

export const validationsRoute: IRouteWithNavDefinition = {
    url: "validations",
    name: "forms-validations",
    label: "Validations",
    handler: () => <ValidationsDoc />,
    subs: [
        {
            url: "example",
            name: "forms-validations-example",
            label: "Example",
            subs: [],
        },
        {
            url: "validations-tooltips",
            name: "forms-validations-tooltips",
            label: "Tooltips",
            subs: [],
        },
        {
            url: "supported-components",
            name: "forms-validations-supported-components",
            label: "Supported components",
            subs: [],
        },
    ],
};

export function ValidationsDoc(): b.IBobrilNode {
    return (
        <>
            <Anchor name="forms-validations">
                <h1>Validations</h1>
            </Anchor>
            <Lead>Provide valuable, actionable feedback to your users.</Lead>
            <Anchor name="forms-validations-example">
                <h1>Example</h1>
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
            <Code language="tsx">{`function ValidationExample(): b.IBobrilNode {
    const [firstName, setFirstName] = b.useState("");
    const [lastName, setLastName] = b.useState("");
    const [userName, setUserName] = b.useState("");
    const [city, setCity] = b.useState("");
    const [state, setState] = b.useState("");
    const [zip, setZip] = b.useState("");
    const [confirmed, setConfirmed] = b.useState(false);

    const [firstNameValid, setFirstNameValid] = b.useState<boolean | undefined>(undefined);
    const [lastNameValid, setLastNameValid] = b.useState<boolean | undefined>(undefined);
    const [userNameValid, setUserNameValid] = b.useState<boolean | undefined>(undefined);
    const [cityValid, setCityValid] = b.useState<boolean | undefined>(undefined);
    const [stateValid, setStateValid] = b.useState<boolean | undefined>(undefined);
    const [zipValid, setZipValid] = b.useState<boolean | undefined>(undefined);
    const [confirmedValid, setConfirmedValid] = b.useState<boolean | undefined>(undefined);

    return (
        <Row as="form" style={gutter(3)}>
            <Col md={4}>
                <Form.Label for="validationCustom01">First name</Form.Label>
                <Form.Input
                    type="text"
                    id="validationCustom01"
                    value={firstName}
                    onChange={(val) => {
                        setFirstName(val);
                        setFirstNameValid(undefined);
                    }}
                    valid={firstNameValid}
                />
                <Feedback.Valid>Looks good!</Feedback.Valid>
                <Feedback.Invalid>Please provide a first name.</Feedback.Invalid>
            </Col>
            <Col md={4}>
                <Form.Label for="validationCustom02">Last name</Form.Label>
                <Form.Input
                    type="text"
                    id="validationCustom02"
                    value={lastName}
                    onChange={(val) => {
                        setLastName(val);
                        setLastNameValid(undefined);
                    }}
                    valid={lastNameValid}
                />
                <Feedback.Valid>Looks good!</Feedback.Valid>
                <Feedback.Invalid>Please provide a last name.</Feedback.Invalid>
            </Col>
            <Col md={4}>
                <Form.Label for="validationDefaultUsername">Username</Form.Label>
                <InputGroup>
                    <InputGroup.Text id="inputGroupPrepend2">@</InputGroup.Text>
                    <Form.Input
                        type="text"
                        id="validationDefaultUsername"
                        value={firstName}
                        onChange={(val) => {
                            setUserName(val);
                            setUserNameValid(undefined);
                        }}
                        valid={userNameValid}
                        aria-describedby="inputGroupPrepend2"
                    />
                </InputGroup>
            </Col>
            <Col md={6}>
                <Form.Label for="validationCustom03">City</Form.Label>
                <Form.Input
                    type="text"
                    id="validationCustom03"
                    value={city}
                    onChange={(val) => {
                        setCity(val);
                        setCityValid(undefined);
                    }}
                    valid={cityValid}
                />
                <Feedback.Valid>Looks good!</Feedback.Valid>
                <Feedback.Invalid>Please provide a valid city.</Feedback.Invalid>
            </Col>
            <Col md={3}>
                <Form.Label for="validationCustom04">State</Form.Label>
                <Form.Select
                    id="validationCustom04"
                    custom
                    value={state}
                    onChange={(val) => {
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
            <Col>
                <Form.Label for="validationCustom05">Zip</Form.Label>
                <Form.Input
                    type="text"
                    id="validationCustom05"
                    value={zip}
                    onChange={(val) => {
                        setZip(val);
                        setZipValid(undefined);
                    }}
                    valid={zipValid}
                />
                <Feedback.Valid>Looks good!</Feedback.Valid>
                <Feedback.Invalid>Please provide a valid zip.</Feedback.Invalid>
            </Col>
            <Col span={12}>
                <Form.Check>
                    <Form.Input
                        type="checkbox"
                        id="invalidCheck"
                        value={confirmed}
                        onChange={(val) => {
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
            </Col>
            <Col span={12}>
                <Button
                    onClick={() => {
                        setFirstNameValid(firstName.length > 0);
                        setLastNameValid(lastName.length > 0);
                        setUserNameValid(userName.length > 0);
                        setCityValid(city.length > 0);
                        setStateValid(state.length > 0);
                        setZipValid(zip.length > 0);
                        setConfirmedValid(confirmed);
                    }}
                >
                    Submit
                </Button>
            </Col>
        </Row>
    );
}

<ValidationExample />`}</Code>
            <Anchor name="forms-validations-tooltips">
                <h2>Tooltips</h2>
            </Anchor>
            <p>
                Change feedback to be displayed as tooltip with <code>tooltip</code> prop.
            </p>
            <p>
                Be sure to have a parent with <code>position("relative")</code> on it for tooltip positioning. In the example below, our
                column styles have this already, but your project may require an alternative setup.
            </p>
            <Example>
                <div style={margin("b", 3)}>
                    <Row as="form" style={gutter(3)}>
                        <Col md={6} style={position("relative")}>
                            <Form.Label for="validationTooltip01">First name</Form.Label>
                            <Form.Input type="text" id="validationTooltip01" value="Mark" valid={true} />
                            <Feedback.Valid tooltip>Looks good!</Feedback.Valid>
                            <Feedback.Invalid tooltip>Please provide a first name.</Feedback.Invalid>
                        </Col>
                        <Col md={6} style={position("relative")}>
                            <Form.Label for="validationTooltip02">Last name</Form.Label>
                            <Form.Input type="text" id="validationTooltip02" value="" valid={false} />
                            <Feedback.Valid tooltip>Looks good!</Feedback.Valid>
                            <Feedback.Invalid tooltip>Please provide a last name.</Feedback.Invalid>
                        </Col>
                    </Row>
                </div>
            </Example>
            <Code language="tsx">{`<Row as="form" style={gutter(3)}>
    <Col md={6} style={position("relative")}>
        <Form.Label for="validationTooltip01">First name</Form.Label>
        <Form.Input type="text" id="validationTooltip01" value="Mark" valid={true} />
        <Feedback.Valid tooltip>Looks good!</Feedback.Valid>
        <Feedback.Invalid tooltip>Please provide a first name.</Feedback.Invalid>
    </Col>
    <Col md={6} style={position("relative")}>
        <Form.Label for="validationTooltip02">Last name</Form.Label>
        <Form.Input type="text" id="validationTooltip02" value="" valid={false} />
        <Feedback.Valid tooltip>Looks good!</Feedback.Valid>
        <Feedback.Invalid tooltip>Please provide a last name.</Feedback.Invalid>
    </Col>
</Row>`}</Code>
            <Anchor name="forms-validations-supported-components">
                <h3>Supported components</h3>
            </Anchor>
            <Example>
                <Form>
                    <div style={margin("b", 3)}>
                        <Form.Label for="validationTextarea">Textarea</Form.Label>
                        <Form.Textarea id="validationTextarea" placeholder="Required example textarea" valid={false} />
                        <Feedback.Invalid>Please enter a message in the textarea.</Feedback.Invalid>
                    </div>

                    <Form.Check style={margin("b", 3)}>
                        <Form.Input type="checkbox" id="validationFormCheck1" valid={false} />
                        <Form.Label for="validationFormCheck1">Check this checkbox</Form.Label>
                        <Feedback.Invalid>Example invalid feedback text</Feedback.Invalid>
                    </Form.Check>

                    <Form.Check>
                        <Form.Input type="radio" id="validationFormCheck2" name="radio-stacked" valid={false} />
                        <Form.Label for="validationFormCheck2">Toggle this radio</Form.Label>
                    </Form.Check>
                    <Form.Check style={margin("b", 3)}>
                        <Form.Input type="radio" id="validationFormCheck3" name="radio-stacked" valid={false} />
                        <Form.Label for="validationFormCheck3">Or toggle this other radio</Form.Label>
                        <Feedback.Invalid>More example invalid feedback text</Feedback.Invalid>
                    </Form.Check>

                    <div style={margin("b", 3)}>
                        <Form.Select valid={false} aria-label="select example">
                            <Form.Option value="">Open this select menu</Form.Option>
                            <Form.Option value="1">One</Form.Option>
                            <Form.Option value="2">Two</Form.Option>
                            <Form.Option value="3">Three</Form.Option>
                        </Form.Select>
                        <Feedback.Invalid>Example invalid select feedback</Feedback.Invalid>
                    </div>

                    <div style={margin("b", 3)}>
                        <Form.Input type="file" aria-label="file example" valid={false} />
                        <Feedback.Invalid>Example invalid form file feedback</Feedback.Invalid>
                    </div>

                    <div style={margin("b", 3)}>
                        <Button variant="primary" type="submit" disabled>
                            Submit form
                        </Button>
                    </div>
                </Form>
            </Example>
            <Code language="tsx">{`<Form>
    <div style={margin("b", 3)}>
        <Form.Label for="validationTextarea">Textarea</Form.Label>
        <Form.Textarea id="validationTextarea" placeholder="Required example textarea" valid={false} />
        <Feedback.Invalid>Please enter a message in the textarea.</Feedback.Invalid>
    </div>

    <Form.Check style={margin("b", 3)}>
        <Form.Input type="checkbox" id="validationFormCheck1" valid={false} />
        <Form.Label for="validationFormCheck1">Check this checkbox</Form.Label>
        <Feedback.Invalid>Example invalid feedback text</Feedback.Invalid>
    </Form.Check>

    <Form.Check>
        <Form.Input type="radio" id="validationFormCheck2" name="radio-stacked" valid={false} />
        <Form.Label for="validationFormCheck2">Toggle this radio</Form.Label>
    </Form.Check>
    <Form.Check style={margin("b", 3)}>
        <Form.Input type="radio" id="validationFormCheck3" name="radio-stacked" valid={false} />
        <Form.Label for="validationFormCheck3">Or toggle this other radio</Form.Label>
        <Feedback.Invalid>More example invalid feedback text</Feedback.Invalid>
    </Form.Check>

    <div style={margin("b", 3)}>
        <Form.Select valid={false} aria-label="select example">
            <Form.Option value="">Open this select menu</Form.Option>
            <Form.Option value="1">One</Form.Option>
            <Form.Option value="2">Two</Form.Option>
            <Form.Option value="3">Three</Form.Option>
        </Form.Select>
        <Feedback.Invalid>Example invalid select feedback</Feedback.Invalid>
    </div>

    <div style={margin("b", 3)}>
        <Form.Input type="file" aria-label="file example" valid={false} />
        <Feedback.Invalid>Example invalid form file feedback</Feedback.Invalid>
    </div>

    <div style={margin("b", 3)}>
        <Button variant="primary" type="submit" disabled>
            Submit form
        </Button>
    </div>
</Form>`}</Code>
        </>
    );
}

function ValidationExample(): b.IBobrilNode {
    const [firstName, setFirstName] = b.useState("");
    const [lastName, setLastName] = b.useState("");
    const [userName, setUserName] = b.useState("");
    const [city, setCity] = b.useState("");
    const [state, setState] = b.useState("");
    const [zip, setZip] = b.useState("");
    const [confirmed, setConfirmed] = b.useState(false);

    const [firstNameValid, setFirstNameValid] = b.useState<boolean | undefined>(undefined);
    const [lastNameValid, setLastNameValid] = b.useState<boolean | undefined>(undefined);
    const [userNameValid, setUserNameValid] = b.useState<boolean | undefined>(undefined);
    const [cityValid, setCityValid] = b.useState<boolean | undefined>(undefined);
    const [stateValid, setStateValid] = b.useState<boolean | undefined>(undefined);
    const [zipValid, setZipValid] = b.useState<boolean | undefined>(undefined);
    const [confirmedValid, setConfirmedValid] = b.useState<boolean | undefined>(undefined);

    return (
        <Row as="form" style={gutter(3)}>
            <Col md={4}>
                <Form.Label for="validationCustom01">First name</Form.Label>
                <Form.Input
                    type="text"
                    id="validationCustom01"
                    value={firstName}
                    onChange={(val) => {
                        setFirstName(val);
                        setFirstNameValid(undefined);
                    }}
                    valid={firstNameValid}
                />
                <Feedback.Valid>Looks good!</Feedback.Valid>
                <Feedback.Invalid>Please provide a first name.</Feedback.Invalid>
            </Col>
            <Col md={4}>
                <Form.Label for="validationCustom02">Last name</Form.Label>
                <Form.Input
                    type="text"
                    id="validationCustom02"
                    value={lastName}
                    onChange={(val) => {
                        setLastName(val);
                        setLastNameValid(undefined);
                    }}
                    valid={lastNameValid}
                />
                <Feedback.Valid>Looks good!</Feedback.Valid>
                <Feedback.Invalid>Please provide a last name.</Feedback.Invalid>
            </Col>
            <Col md={4}>
                <Form.Label for="validationDefaultUsername">Username</Form.Label>
                <InputGroup>
                    <InputGroup.Text id="inputGroupPrepend2">@</InputGroup.Text>
                    <Form.Input
                        type="text"
                        id="validationDefaultUsername"
                        value={firstName}
                        onChange={(val) => {
                            setUserName(val);
                            setUserNameValid(undefined);
                        }}
                        valid={userNameValid}
                        aria-describedby="inputGroupPrepend2"
                    />
                </InputGroup>
            </Col>
            <Col md={6}>
                <Form.Label for="validationCustom03">City</Form.Label>
                <Form.Input
                    type="text"
                    id="validationCustom03"
                    value={city}
                    onChange={(val) => {
                        setCity(val);
                        setCityValid(undefined);
                    }}
                    valid={cityValid}
                />
                <Feedback.Valid>Looks good!</Feedback.Valid>
                <Feedback.Invalid>Please provide a valid city.</Feedback.Invalid>
            </Col>
            <Col md={3}>
                <Form.Label for="validationCustom04">State</Form.Label>
                <Form.Select
                    id="validationCustom04"
                    custom
                    value={state}
                    onChange={(val) => {
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
            <Col>
                <Form.Label for="validationCustom05">Zip</Form.Label>
                <Form.Input
                    type="text"
                    id="validationCustom05"
                    value={zip}
                    onChange={(val) => {
                        setZip(val);
                        setZipValid(undefined);
                    }}
                    valid={zipValid}
                />
                <Feedback.Valid>Looks good!</Feedback.Valid>
                <Feedback.Invalid>Please provide a valid zip.</Feedback.Invalid>
            </Col>
            <Col span={12}>
                <Form.Check>
                    <Form.Input
                        type="checkbox"
                        id="invalidCheck"
                        value={confirmed}
                        onChange={(val) => {
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
            </Col>
            <Col span={12}>
                <Button
                    onClick={() => {
                        setFirstNameValid(firstName.length > 0);
                        setLastNameValid(lastName.length > 0);
                        setUserNameValid(userName.length > 0);
                        setCityValid(city.length > 0);
                        setStateValid(state.length > 0);
                        setZipValid(zip.length > 0);
                        setConfirmedValid(confirmed);
                    }}
                >
                    Submit
                </Button>
            </Col>
        </Row>
    );
}

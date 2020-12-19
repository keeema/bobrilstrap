import * as b from "bobril";
import { IRouteWithNavDefinition } from "../../../../common/routing";
import { Anchor } from "../../../../common/Anchor";
import { Example } from "../../../../common/Example";
import { Col, gutter, Row } from "../../../../../index";
import { Code } from "../../../../common/Code";
import { Lead } from "../../../../common/Lead";
import { Form } from "../../../../../src/components/Form";
import { margin } from "../../../../../src/utilities/spacing";

export const floatingLabelsRoute: IRouteWithNavDefinition = {
    url: "floating-labels",
    name: "floating-labels",
    label: "Floating labels",
    handler: () => <FloatingLabelsDoc />,
    subs: [
        {
            url: "example",
            name: "floating-labels-example",
            label: "Example",
            subs: [],
        },
        {
            url: "textareas",
            name: "floating-labels-textareas",
            label: "Textareas",
            subs: [],
        },
        {
            url: "selects",
            name: "floating-labels-selects",
            label: "Selects",
            subs: [],
        },
        {
            url: "layout",
            name: "floating-labels-layout",
            label: "Layout",
            subs: [],
        },
    ],
};

export function FloatingLabelsDoc(): b.IBobrilNode {
    return (
        <>
            <Anchor name="floating-labels">
                <h1>Floating labels</h1>
            </Anchor>
            <Lead>Create beautifully simple form labels that float over your input fields.</Lead>
            <Anchor name="floating-labels-example">
                <h2>Example</h2>
            </Anchor>
            <p>
                Wrap a pair of <code>{`<Form.Input>`}</code> and <code>{`<Form.Label>`}</code> elements in <code>{`<Form.Floating>`}</code>{" "}
                to enable floating labels with textual form fields. A <code>placeholder</code> is required on each{" "}
                <code>{`<Form.Input>`}</code> as the method of floating labels uses the <code>:placeholder-shown</code> pseudo-element. Also
                note that the <code>{`<Form.Input>`}</code> must come first so we can utilize a sibling selector (e.g., <code>~</code>).
            </p>
            <Example>
                <Form.Floating style={margin("b", 3)}>
                    <Form.Input type="email" id="floatingInput" placeholder="name@example.com" />
                    <Form.Label for="floatingInput">Email address</Form.Label>
                </Form.Floating>
                <Form.Floating>
                    <Form.Input type="password" id="floatingPassword" placeholder="Password" />
                    <Form.Label for="floatingPassword">Password</Form.Label>
                </Form.Floating>
            </Example>
            <Code language="tsx">{`<Form.Floating style={margin("b", 3)}>
    <Form.Input type="email" id="floatingInput" placeholder="name@example.com" />
    <Form.Label for="floatingInput">Email address</Form.Label>
</Form.Floating>
<Form.Floating>
    <Form.Input type="password" id="floatingPassword" placeholder="Password" />
    <Form.Label for="floatingPassword">Password</Form.Label>
</Form.Floating>`}</Code>
            <p>
                When there’s a value already defined, <code>{`<Form.Label>`}</code>s will automatically adjust to their floated position.
            </p>
            <Example>
                <Form.Floating>
                    <Form.Input type="email" id="floatingInputValue" placeholder="name@example.com" value="test@example.com" />
                    <Form.Label for="floatingInputValue">Input with value</Form.Label>
                </Form.Floating>
            </Example>
            <Code language="tsx">
                {`<Form.Floating>
    <Form.Input type="email" id="floatingInputValue" placeholder="name@example.com" value="test@example.com" />
    <Form.Label for="floatingInputValue">Input with value</Form.Label>
</Form.Floating>`}
            </Code>
            <p>Form validation styles also work as expected.</p>
            <Example>
                <Form.Floating>
                    <Form.Input
                        type="email"
                        id="floatingInputInvalid"
                        placeholder="name@example.com"
                        value="test@example.com"
                        valid={false}
                    />
                    <Form.Label for="floatingInputInvalid">Invalid input</Form.Label>
                </Form.Floating>
            </Example>
            <Code language="tsx">
                {`<Form.Floating>
    <Form.Input
        type="email"
        id="floatingInputInvalid"
        placeholder="name@example.com"
        value="test@example.com"
        valid={false}
    />
    <Form.Label for="floatingInputInvalid">Invalid input</Form.Label>
</Form.Floating>`}
            </Code>
            <Anchor name="floating-labels-textareas">
                <h2>Textareas</h2>
            </Anchor>
            <p>
                By default, <code>{`<Form.Textarea>`}</code>s will be the same height as <code>{`<Form.Input>`}</code>s.
            </p>
            <Example>
                <Form.Floating>
                    <Form.Textarea placeholder="Leave a comment here" id="floatingTextarea" />
                    <Form.Label for="floatingTextarea">Comments</Form.Label>
                </Form.Floating>
            </Example>
            <Code language="tsx">
                {`<Form.Floating>
    <Form.Textarea placeholder="Leave a comment here" id="floatingTextarea" />
    <Form.Label for="floatingTextarea">Comments</Form.Label>
</Form.Floating>`}
            </Code>
            <p>
                To set a custom height on your <code>{`<Form.Textarea>`}</code> do not use the rows attribute. Instead, set an explicit
                height (either inline style or predefined style object).
            </p>
            <Example>
                <Form.Floating>
                    <Form.Textarea placeholder="Leave a comment here" id="floatingTextarea2" style={{ height: 100 }} />
                    <Form.Label for="floatingTextarea2">Comments</Form.Label>
                </Form.Floating>
            </Example>
            <Code language="tsx">
                {`<Form.Floating>
    <Form.Textarea placeholder="Leave a comment here" id="floatingTextarea2" style={{ height: 100 }} />
    <Form.Label for="floatingTextarea2">Comments</Form.Label>
</Form.Floating>`}
            </Code>
            <Anchor name="floating-labels-selects">
                <h2>Selects</h2>
            </Anchor>
            <p>
                Other than <code>{`<Form.Input>`}</code>, floating labels are only available on <code>{`<Form.Select>`}</code>. They work in
                the same way, but unlike <code>{`<Form.Input>`}</code>s, they’ll always show the <code>{`<Form.Label>`}</code> in its
                floated state.
            </p>
            <Example>
                <Form.Floating>
                    <Form.Select id="floatingSelect" aria-label="Floating label select example">
                        <Form.Option selected>Open this select menu</Form.Option>
                        <Form.Option value="1">One</Form.Option>
                        <Form.Option value="2">Two</Form.Option>
                        <Form.Option value="3">Three</Form.Option>
                    </Form.Select>
                    <Form.Label for="floatingSelect">Works with selects</Form.Label>
                </Form.Floating>
            </Example>
            <Code language="tsx">
                {`<Form.Floating>
    <Form.Select id="floatingSelect" aria-label="Floating label select example">
        <Form.Option selected>Open this select menu</Form.Option>
        <Form.Option value="1">One</Form.Option>
        <Form.Option value="2">Two</Form.Option>
        <Form.Option value="3">Three</Form.Option>
    </Form.Select>
    <Form.Label for="floatingSelect">Works with selects</Form.Label>
</Form.Floating>`}
            </Code>
            <Anchor name="floating-labels-layout">
                <h2>Layout</h2>
            </Anchor>
            <p>When working with the grid system, be sure to place form elements within column components.</p>
            <Example>
                <Row style={gutter(2)}>
                    <Col md>
                        <Form.Floating>
                            <Form.Input type="email" id="floatingInputGrid" placeholder="name@example.com" value="mdo@example.com" />
                            <Form.Label for="floatingInputGrid">Email address</Form.Label>
                        </Form.Floating>
                    </Col>
                    <Col md>
                        <Form.Floating>
                            <Form.Select id="floatingSelectGrid" aria-label="Floating label select example">
                                <Form.Option selected>Open this select menu</Form.Option>
                                <Form.Option value="1">One</Form.Option>
                                <Form.Option value="2">Two</Form.Option>
                                <Form.Option value="3">Three</Form.Option>
                            </Form.Select>
                            <Form.Label for="floatingSelectGrid">Works with selects</Form.Label>
                        </Form.Floating>
                    </Col>
                </Row>
            </Example>
            <Code language="tsx">
                {`<Row style={gutter(2)}>
    <Col md>
        <Form.Floating>
            <Form.Input type="email" id="floatingInputGrid" placeholder="name@example.com" value="mdo@example.com" />
            <Form.Label for="floatingInputGrid">Email address</Form.Label>
        </Form.Floating>
    </Col>
    <Col md>
        <Form.Floating>
            <Form.Select id="floatingSelectGrid" aria-label="Floating label select example">
                <Form.Option selected>Open this select menu</Form.Option>
                <Form.Option value="1">One</Form.Option>
                <Form.Option value="2">Two</Form.Option>
                <Form.Option value="3">Three</Form.Option>
            </Form.Select>
            <Form.Label for="floatingSelectGrid">Works with selects</Form.Label>
        </Form.Floating>
    </Col>
</Row>`}
            </Code>
        </>
    );
}

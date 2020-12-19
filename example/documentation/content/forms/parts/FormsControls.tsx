import * as b from "bobril";
import { IRouteWithNavDefinition } from "../../../../common/routing";
import { Anchor } from "../../../../common/Anchor";
import { Example } from "../../../../common/Example";
import { Col, Form, margin, Row } from "../../../../../index";
import { Code } from "../../../../common/Code";
import { Lead } from "../../../../common/Lead";

export const formControlsRoute: IRouteWithNavDefinition = {
    url: "form-controls",
    name: "form-controls",
    label: "Form controls",
    handler: () => <FormsDoc />,
    subs: [
        {
            url: "example",
            name: "form-controls-example",
            label: "Example",
            subs: [],
        },
        {
            url: "sizing",
            name: "form-controls-sizing",
            label: "Sizing",
            subs: [],
        },
        {
            url: "readonly",
            name: "form-controls-readonly",
            label: "Readonly",
            subs: [],
        },
        {
            url: "readonly-plain-text",
            name: "form-controls-readonly-plain-text",
            label: "Readonly plain text",
            subs: [],
        },
        {
            url: "file-input",
            name: "form-controls-file-input",
            label: "File input",
            subs: [],
        },
        {
            url: "color",
            name: "form-controls-color",
            label: "Color",
            subs: [],
        },
        {
            url: "datalist",
            name: "form-controls-datalist",
            label: "Datalist",
            subs: [],
        },
    ],
};

export function FormsDoc(): b.IBobrilNode {
    return (
        <>
            <Anchor name="form-controls">
                <h1>Form controls</h1>
            </Anchor>
            <Lead>
                Give textual form controls like <code>{`<Form.Input>`}</code>s, <code>{`<Form.Select>`}</code>s, and{" "}
                <code>{`<Form.Textarea>`}</code>s an upgrade with custom styles, sizing, focus states, and more.
            </Lead>
            <Anchor name="form-controls-example">
                <h2>Form controls</h2>
            </Anchor>
            <Example>
                <Form>
                    <div style={margin("b", 3)}>
                        <Form.Label for="exampleFormControlInput1">Email address</Form.Label>
                        <Form.Input type="email" id="exampleFormControlInput1" placeholder="name@example.com" />
                    </div>
                    <div style={margin("b", 3)}>
                        <Form.Label for="exampleFormControlTextarea1">Example textarea</Form.Label>
                        <Form.Textarea id="exampleFormControlTextarea1" rows="3" />
                    </div>
                </Form>
            </Example>
            <Code language="tsx">{` <Form>
                    <div style={margin("b", 3)}>
                        <Form.Label for="exampleFormControlInput1">Email address</Form.Label>
                        <Form.Input type="email" id="exampleFormControlInput1" placeholder="name@example.com" />
                    </div>
                    <div style={margin("b", 3)}>
                        <Form.Label for="exampleFormControlTextarea1">Example textarea</Form.Label>
                        <Form.Textarea id="exampleFormControlTextarea1" rows="3" />
                    </div>
                </Form>`}</Code>
            <Anchor name="form-controls-sizing">
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
            <Anchor name="form-controls-readonly">
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
            <Anchor name="form-controls-readonly-plain-text">
                <h3>Readonly plain text</h3>
            </Anchor>
            <p>
                If you want to have <code>readonly</code> elements in your form styled as plain text, use the <code>plain-text</code> prop
                to remove the default form field styling and preserve the correct margin and padding.
            </p>
            <Example>
                <Form>
                    <Row style={margin("b", 3)}>
                        <Form.Label col sm={2} for="staticEmail">
                            Email
                        </Form.Label>
                        <Col sm={10}>
                            <Form.Input type="text" readonly plain-text id="staticEmail" value="email@example.com" />
                        </Col>
                    </Row>
                    <Row style={margin("b", 3)}>
                        <Form.Label col sm={2} for="inputPassword">
                            Password
                        </Form.Label>
                        <Col sm={10}>
                            <Form.Input type="password" id="inputPassword" />
                        </Col>
                    </Row>
                </Form>
            </Example>
            <Code language="tsx">{`<Form>
    <Row style={margin("b", 3)}>
        <Form.Label col sm={2} for="staticEmail">
            Email
        </Form.Label>
        <Col sm={10}>
            <Form.Input type="text" readonly plain-text id="staticEmail" value="email@example.com" />
        </Col>
    </Row>
    <Row style={margin("b", 3)}>
        <Form.Label col sm={2} for="inputPassword">
            Password
        </Form.Label>
        <Col sm={10}>
            <Form.Input type="password" id="inputPassword" />
        </Col>
    </Row>
</Form>`}</Code>
            <Anchor name="form-controls-file-input">
                <h3>File input</h3>
            </Anchor>
            <Example>
                <div style={margin("b", 3)}>
                    <Form.Label for="formFile">Default file input example</Form.Label>
                    <Form.Input type="file" id="formFile" />
                </div>
                <div style={margin("b", 3)}>
                    <Form.Label for="formFileMultiple">Multiple files input example</Form.Label>
                    <Form.Input type="file" id="formFileMultiple" multiple />
                </div>
                <div style={margin("b", 3)}>
                    <Form.Label for="formFileDisabled">Disabled file input example</Form.Label>
                    <Form.Input type="file" id="formFileDisabled" disabled />
                </div>
                <div style={margin("b", 3)}>
                    <Form.Label for="formFileSm">Small file input example</Form.Label>
                    <Form.Input size="sm" id="formFileSm" type="file" />
                </div>
                <div>
                    <Form.Label for="formFileLg">Large file input example</Form.Label>
                    <Form.Input size="lg" id="formFileLg" type="file" />
                </div>
            </Example>
            <Code language="tsx">{`<div style={margin("b", 3)}>
    <Form.Label for="formFile">Default file input example</Form.Label>
    <Form.Input type="file" id="formFile" />
</div>
<div style={margin("b", 3)}>
    <Form.Label for="formFileMultiple">Multiple files input example</Form.Label>
    <Form.Input type="file" id="formFileMultiple" multiple />
</div>
<div style={margin("b", 3)}>
    <Form.Label for="formFileDisabled">Disabled file input example</Form.Label>
    <Form.Input type="file" id="formFileDisabled" disabled />
</div>
<div style={margin("b", 3)}>
    <Form.Label for="formFileSm">
        Small file input example
    </Form.Label>
    <Form.Input size="sm" id="formFileSm" type="file" />
</div>
<div>
    <Form.Label for="formFileLg">Large file input example</Form.Label>
    <Form.Input size="lg" id="formFileLg" type="file" />
</div>`}</Code>
            <Anchor name="form-controls-color">
                <h3>Color</h3>
            </Anchor>
            <Example>
                <Form.Label for="exampleColorInput">Color picker</Form.Label>
                <Form.Input type="color" id="exampleColorInput" value="#563d7c" title="Choose your color" />
            </Example>
            <Code language="tsx">{`<Form.Label for="exampleColorInput">Color picker</Form.Label>
<Form.Input type="color" id="exampleColorInput" value="#563d7c" title="Choose your color" />`}</Code>
            <Anchor name="form-controls-datalist">
                <h3>Datalist</h3>
            </Anchor>
            <p>
                Datalists allow you to create a group of <code>{`<Form.Option>`}</code>s that can be accessed (and autocompleted) from
                within an <code>{`<Form.Input>`}</code>. These are similar to <code>{`<Form.Select>`}</code>s, but come with more menu
                styling limitations and differences. While most browsers and operating systems include some support for{" "}
                <code>{`<Form.Datalist>`}</code>s, their styling is inconsistent at best.
            </p>
            <Example>
                <Form.Label for="exampleDataList">Datalist example</Form.Label>
                <Form.Input type="datalist" list="datalistOptions" id="exampleDataList" placeholder="Type to search..." />
                <Form.Datalist id="datalistOptions">
                    <Form.Option value="San Francisco" />
                    <Form.Option value="New York" />
                    <Form.Option value="Seattle" />
                    <Form.Option value="Los Angeles" />
                    <Form.Option value="Chicago" />
                </Form.Datalist>
            </Example>
            <Code language="tsx">{`<Form.Label for="exampleDataList">Datalist example</Form.Label>
<Form.Input type="datalist" list="datalistOptions" id="exampleDataList" placeholder="Type to search..." />
<Form.Datalist id="datalistOptions">
    <Form.Option value="San Francisco" />
    <Form.Option value="New York" />
    <Form.Option value="Seattle" />
    <Form.Option value="Los Angeles" />
    <Form.Option value="Chicago" />
</Form.Datalist>`}</Code>
        </>
    );
}

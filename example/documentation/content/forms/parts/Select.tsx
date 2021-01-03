import * as b from "bobril";
import { IRouteWithNavDefinition } from "../../../../common/routing";
import { Anchor } from "../../../../common/Anchor";
import { Example } from "../../../../common/Example";
import { Form, margin } from "../../../../../index";
import { Code } from "../../../../common/Code";
import { Lead } from "../../../../common/Lead";

export const selectRoute: IRouteWithNavDefinition = {
    url: "select",
    name: "select",
    label: "Select",
    handler: () => <SelectDoc />,
    subs: [
        {
            url: "default",
            name: "select-default",
            label: "Default",
            subs: [],
        },
        {
            url: "sizing",
            name: "select-sizing",
            label: "Sizing",
            subs: [],
        },
        {
            url: "disabled",
            name: "select-disabled",
            label: "Disabled",
            subs: [],
        },
    ],
};

export function SelectDoc(): b.IBobrilNode {
    return (
        <>
            <Anchor name="select">
                <h1>Select</h1>
            </Anchor>
            <Lead>
                Customize the native <code>{`<select>`}</code>s with styles that changes the element’s initial appearance.
            </Lead>
            <Anchor name="select-default">
                <h2>Default</h2>
            </Anchor>
            <Example>
                <Form.Select>
                    <Form.Option selected>Open this select menu</Form.Option>
                    <Form.Option value="1">One</Form.Option>
                    <Form.Option value="2">Two</Form.Option>
                    <Form.Option value="3">Three</Form.Option>
                </Form.Select>
            </Example>
            <Code language="tsx">{`<Form.Select>
    <Form.Option selected>Open this select menu</Form.Option>
    <Form.Option value="1">One</Form.Option>
    <Form.Option value="2">Two</Form.Option>
    <Form.Option value="3">Three</Form.Option>
</Form.Select>`}</Code>
            <Anchor name="select-sizing">
                <h2>Sizing</h2>
            </Anchor>
            <p>You may also choose from small and large custom selects to match our similarly sized text inputs.</p>
            <Example>
                <Form.Select size="lg" style={margin("b", 3)}>
                    <Form.Option selected>Open this select menu</Form.Option>
                    <Form.Option value="1">One</Form.Option>
                    <Form.Option value="2">Two</Form.Option>
                    <Form.Option value="3">Three</Form.Option>
                </Form.Select>
                <Form.Select size="sm">
                    <Form.Option selected>Open this select menu</Form.Option>
                    <Form.Option value="1">One</Form.Option>
                    <Form.Option value="2">Two</Form.Option>
                    <Form.Option value="3">Three</Form.Option>
                </Form.Select>
            </Example>
            <Code language="tsx">{`<Form.Select size="lg" style={margin("b", 3)}>
    <Form.Option selected>Open this select menu</Form.Option>
    <Form.Option value="1">One</Form.Option>
    <Form.Option value="2">Two</Form.Option>
    <Form.Option value="3">Three</Form.Option>
</Form.Select>
<Form.Select size="sm">
    <Form.Option selected>Open this select menu</Form.Option>
    <Form.Option value="1">One</Form.Option>
    <Form.Option value="2">Two</Form.Option>
    <Form.Option value="3">Three</Form.Option>
</Form.Select>`}</Code>
            <p>
                The <code>multiple</code> prop is also supported:
            </p>
            <Example>
                <Form.Select multiple>
                    <Form.Option selected>Open this select menu</Form.Option>
                    <Form.Option value="1">One</Form.Option>
                    <Form.Option value="2">Two</Form.Option>
                    <Form.Option value="3">Three</Form.Option>
                </Form.Select>
            </Example>
            <Code language="tsx">{`<Form.Select multiple>
    <Form.Option selected>Open this select menu</Form.Option>
    <Form.Option value="1">One</Form.Option>
    <Form.Option value="2">Two</Form.Option>
    <Form.Option value="3">Three</Form.Option>
</Form.Select>`}</Code>
            <p>
                To change number of rows use the <code>rows</code> prop. It will be finally converted to native element size attribute (it
                is because the <code>size</code> prop is used as a common sizing prop for all form controls).
            </p>
            <Example>
                <Form.Select rows={2}>
                    <Form.Option selected>Open this select menu</Form.Option>
                    <Form.Option value="1">One</Form.Option>
                    <Form.Option value="2">Two</Form.Option>
                    <Form.Option value="3">Three</Form.Option>
                </Form.Select>
            </Example>
            <Code language="tsx">{`<Form.Select rows={2}>
    <Form.Option selected>Open this select menu</Form.Option>
    <Form.Option value="1">One</Form.Option>
    <Form.Option value="2">Two</Form.Option>
    <Form.Option value="3">Three</Form.Option>
</Form.Select>`}</Code>
            <Anchor name="select-disabled">
                <h2>Disabled</h2>
            </Anchor>
            <Example>
                <Form.Select disabled>
                    <Form.Option selected>Open this select menu</Form.Option>
                    <Form.Option value="1">One</Form.Option>
                    <Form.Option value="2">Two</Form.Option>
                    <Form.Option value="3">Three</Form.Option>
                </Form.Select>
            </Example>
            <Code language="tsx">{`<Form.Select disabled>
    <Form.Option selected>Open this select menu</Form.Option>
    <Form.Option value="1">One</Form.Option>
    <Form.Option value="2">Two</Form.Option>
    <Form.Option value="3">Three</Form.Option>
</Form.Select>`}</Code>
        </>
    );
}

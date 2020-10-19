import * as b from "bobril";
import { IRouteWithNavDefinition } from "../../../../common/routing";
import { Anchor } from "../../../../common/Anchor";
import { Example } from "../../../../common/Example";
import { Alert, AlertVariant, Button } from "../../../../../index";
import { Code } from "../../../../common/Code";
import { margin } from "../../../../../src/utilities/spacing";
import { Lead } from "../../../../common/Lead";

export const alertsRoute: IRouteWithNavDefinition = {
    url: "alerts",
    name: "alerts",
    label: "Alerts",
    handler: () => <Alerts />,
    subs: [
        {
            url: "examples",
            name: "alerts-examples",
            label: "Examples",
            subs: [],
        },
        {
            url: "link-color",
            name: "alerts-link-color",
            label: "Link color",
            subs: [],
        },
        {
            url: "additional-content",
            name: "alerts-additional-content",
            label: "Additional content",
            subs: [],
        },
        {
            url: "dismissing",
            name: "alerts-dismissing",
            label: "Dismissing",
            subs: [
                {
                    url: "reactive",
                    name: "alerts-dismissing-reactive",
                    label: "Reactive",
                    subs: [],
                },
                {
                    url: "native",
                    name: "alerts-dismissing-native",
                    label: "Native",
                    subs: [],
                },
            ],
        },
    ],
};

export function Alerts(): b.IBobrilNode {
    return (
        <>
            <h1>Alerts</h1>
            <Lead>
                Provide contextual feedback messages for typical user actions with the handful of available and flexible alert messages.
            </Lead>
            <Anchor name="alerts-examples">
                <h2>Examples</h2>
            </Anchor>
            <p>Alerts are available for any length of text, as well as an optional dismiss button.</p>
            <Example>
                {(["primary", "secondary", "success", "danger", "warning", "info", "light", "dark"] as AlertVariant[]).map((variant) => (
                    <Alert variant={variant}>A simple {variant} alert — check it out!</Alert>
                ))}
            </Example>
            <Code language="tsx">
                {(["primary", "secondary", "success", "danger", "warning", "info", "light", "dark"] as AlertVariant[]).map(
                    (variant) => `<Alert variant="${variant}">A simple ${variant} alert — check it out!</Alert>\n`
                )}
            </Code>
            <Anchor name="alerts-link-color">
                <h2>Link color</h2>
            </Anchor>
            <p>
                Use the <code>{`<Alert.Link>`}</code> utility component to quickly provide matching colored links within any alert.
            </p>
            <Example>
                <Alert>
                    A simple primary alert with <Alert.Link href="#">an example link</Alert.Link>. Give it a click if you like.
                </Alert>
            </Example>
            <Code language="tsx">
                {`<Alert>
    A simple primary alert with <Alert.Link href="#">an example link</Alert.Link>. Give it a click if you like.
</Alert>`}
            </Code>
            <Anchor name="alerts-additional-content">
                <h2>Additional content</h2>
            </Anchor>
            <p>Alerts can also contain additional HTML elements like headings, paragraphs and dividers.</p>
            <Example>
                <Alert variant="success">
                    <Alert.Heading>Well done!</Alert.Heading>
                    <p>
                        Aww yeah, you successfully read this important alert message. This example text is going to run a bit longer so that
                        you can see how spacing within an alert works with this kind of content.
                    </p>
                    <hr />
                    <p style={margin({ side: "b", size: 0 })}>
                        Whenever you need to, be sure to use margin utilities to keep things nice and tidy.
                    </p>
                </Alert>
            </Example>
            <Code language="tsx">{`<Alert variant="success">
    <Alert.Heading>Well done!</Alert.Heading>
    <p>
        Aww yeah, you successfully read this important alert message. This example text is going to run a bit longer so that
        you can see how spacing within an alert works with this kind of content.
    </p>
    <hr />
    <p style={margin({ side: "b", size: 0 })}>
        Whenever you need to, be sure to use margin utilities to keep things nice and tidy.
    </p>
</Alert>`}</Code>
            <Anchor name="alerts-dismissing">
                <h2>Dismissing</h2>
            </Anchor>
            <p>
                Alerts can be dismissed automatically with animation using native dismissing mechanism or programmatically letting you fully
                control the behavior.
            </p>
            <Anchor name="alerts-dismissing-reactive">
                <h3>Reactive (recommended)</h3>
            </Anchor>
            <p>
                Use <code>bobril hooks</code> or another standard <code>bobril</code> behavior logic to control dismissing.
            </p>
            <Example>
                <AlertDismissibleExample />
            </Example>
            <Code language="tsx">{`function AlertDismissibleExample(): b.IBobrilNode {
    const [show, setShow] = b.useState(true);

    if (show) {
        return (
            <Alert variant="danger">
                Holy guacamole! You should check in on some of those fields below.
                <button type="button" class="close" onClick={() => setShow(false)}>
                    &times;
                </button>
            </Alert>
        );
    }
    return <Button onClick={() => setShow(true)}>Show Alert</Button>;
}`}</Code>
            <Code language="tsx">{`<AlertDismissibleExample />`}</Code>
            <Anchor name="alerts-dismissing-native">
                <h3>Native</h3>
            </Anchor>
            <p>
                Use internal <code>Bootstrap</code> logic.
            </p>
            <Example>
                <Alert
                    variant="warning"
                    dismissible
                    dismiss-animation
                    onDismiss={() => alert("Dismiss")}
                    onDismissed={() => alert("Dismissed")}
                >
                    Holy guacamole! You should check in on some of those fields below.
                </Alert>
            </Example>
            <Code language="tsx">{`<Alert variant="warning" dismissible dismiss-animation onDismiss={() => alert("Dismiss")} onDismissed={() => alert("Dismissed")}>
    Holy guacamole! You should check in on some of those fields below.
</Alert>`}</Code>
        </>
    );
}

function AlertDismissibleExample(): b.IBobrilNode {
    const [show, setShow] = b.useState(true);

    if (show) {
        return (
            <Alert variant="danger">
                Holy guacamole! You should check in on some of those fields below.
                <button type="button" class="close" onClick={() => setShow(false)}>
                    &times;
                </button>
            </Alert>
        );
    }
    return <Button onClick={() => setShow(true)}>Show Alert</Button>;
}

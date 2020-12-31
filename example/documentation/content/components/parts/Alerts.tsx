import * as b from "bobril";
import { IRouteWithNavDefinition } from "../../../../common/routing";
import { Anchor } from "../../../../common/Anchor";
import { Example } from "../../../../common/Example";
import { Alert, CloseButton, AlertVariant, Button, margin, IAlert } from "../../../../../index";
import { Code } from "../../../../common/Code";
import { Lead } from "../../../../common/Lead";
import { OptionsTable, OptionsRow } from "../../../../common/OptionsTable";

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
                    label: "Bootstrap native",
                    subs: [],
                },

                {
                    url: "reactive-native",
                    name: "alerts-dismissing-reactive-native",
                    label: "Reactive and native",
                    subs: [],
                },
            ],
        },
        {
            url: "api",
            name: "alerts-api",
            label: "API",
            subs: [],
        },
    ],
};

export function Alerts(): b.IBobrilNode {
    return (
        <>
            <Anchor name="alerts">
                <h1>Alerts</h1>
            </Anchor>
            <Lead>
                Provide contextual feedback messages for typical user actions with the handful of available and flexible alert messages.
            </Lead>
            <Anchor name="alerts-examples">
                <h2>Examples</h2>
            </Anchor>
            <p>Alerts are available for any length of text, as well as an optional dismiss button.</p>
            <Example>
                {new Array<AlertVariant>("primary", "secondary", "success", "danger", "warning", "info", "light", "dark").map((variant) => (
                    <Alert variant={variant}>A simple {variant} alert — check it out!</Alert>
                ))}
            </Example>
            <Code language="tsx">
                {new Array<AlertVariant>("primary", "secondary", "success", "danger", "warning", "info", "light", "dark").map(
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
                    A simple primary alert with <Alert.Link href="javascript:void(0)">an example link</Alert.Link>. Give it a click if you
                    like.
                </Alert>
            </Example>
            <Code language="tsx">
                {`<Alert>
    A simple primary alert with <Alert.Link href="javascript:void(0)">an example link</Alert.Link>. Give it a click if you like.
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
                    <p style={margin("b", 0)}>Whenever you need to, be sure to use margin utilities to keep things nice and tidy.</p>
                </Alert>
            </Example>
            <Code language="tsx">{`<Alert variant="success">
    <Alert.Heading>Well done!</Alert.Heading>
    <p>
        Aww yeah, you successfully read this important alert message. This example text is going to run a bit longer so that
        you can see how spacing within an alert works with this kind of content.
    </p>
    <hr />
    <p style={margin("b", 0)}>
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
                <h3>Reactive</h3>
            </Anchor>
            <p>
                Use <code>bobril hooks</code> or another standard <code>bobril</code> behavior logic to control dismissing. Animations are
                not supported in this case.
            </p>
            <Example>
                <AlertReactiveExample />
            </Example>
            <Code language="tsx">{`function AlertReactiveExample(): b.IBobrilNode {
    const [show, setShow] = b.useState(true);

    if (show) {
        return (
            <Alert variant="danger" >
                Holy guacamole! You should check in on some of those fields below.
                <CloseButton onClick={() => setShow(false)} />
            </Alert>
        );
    }
    return <Button onClick={() => setShow(true)}>Show Alert</Button>;
}

<AlertReactiveExample />`}</Code>
            <Anchor name="alerts-dismissing-native">
                <h3>Bootstrap native</h3>
            </Anchor>
            <p>
                Use internal <code>Bootstrap</code> logic.
            </p>
            <Example>
                <Alert variant="warning" fade onDismiss={() => alert("Dismiss")} onDismissed={() => alert("Dismissed")}>
                    Holy guacamole! You should check in on some of those fields below.
                    <CloseButton dismiss-alert />
                </Alert>
            </Example>
            <Code language="tsx">{`<Alert variant="warning"  fade onDismiss={() => alert("Dismiss")} onDismissed={() => alert("Dismissed")}>
    Holy guacamole! You should check in on some of those fields below.
    <CloseButton dismiss-alert />
</Alert>`}</Code>
            <Anchor name="alerts-dismissing-reactive-native">
                <h3>Reactive and native</h3>
            </Anchor>
            <p>Better way is to combine reactive behavior with native controller and event callbacks:</p>
            <Example>
                <AlertReactiveNativeExample />
            </Example>
            <Code language="tsx">{`function AlertReactiveNativeExample(): b.IBobrilNode {
    const [show, setShow] = b.useState(true);
    const [alert, setAlert] = b.useState<IAlert>({} as IAlert);

    if (show) {
        return (
            <span>
                <Alert fade variant="danger"  get-instance={(instance) => setAlert(instance)} onDismissed={() => setShow(false)}>
                    Holy guacamole! You should check in on some of those fields below.
                    <CloseButton onClick={() => alert.close()} />
                </Alert>
            </span>
        );
    }
    return <Button onClick={() => setShow(true)}>Show Alert</Button>;
}

<AlertReactiveNativeExample />`}</Code>
            <Anchor name="alerts-api">
                <h2>API</h2>
            </Anchor>
            <p>
                Carousel is controlled by <code>alert controller</code> provided in the callback prop <code>get-instance</code>.
            </p>
            <OptionsTable>
                <OptionsRow>
                    {{
                        name: "fade",
                        type: "boolean",
                        defaultValue: "false",
                        description: "Animates alert dismiss.",
                    }}
                </OptionsRow>
                <OptionsRow>
                    {{
                        name: "variant",
                        type: "string",
                        defaultValue: "none",
                        description: "Alert variant.",
                    }}
                </OptionsRow>
                <OptionsRow>
                    {{
                        name: "get-instance",
                        type: "(alert: IAlert): void",
                        defaultValue: "undefined",
                        description: (
                            <p>
                                This callback is fired when alert is initialized and provides <code>alert</code> as controller instance.
                            </p>
                        ),
                    }}
                </OptionsRow>
                <OptionsRow>
                    {{
                        name: "onDismissed",
                        type: "(): void",
                        defaultValue: "undefined",
                        description: "This callback is fired when the alert has completed its dismissing transition.",
                    }}
                </OptionsRow>
                <OptionsRow>
                    {{
                        name: "onDismiss",
                        type: "(): void",
                        defaultValue: "undefined",
                        description: (
                            <p>
                                This callback fires immediately when the <code>dismiss</code> is invoked.
                            </p>
                        ),
                    }}
                </OptionsRow>
            </OptionsTable>
        </>
    );
}

function AlertReactiveExample(): b.IBobrilNode {
    const [show, setShow] = b.useState(true);

    if (show) {
        return (
            <Alert variant="danger">
                Holy guacamole! You should check in on some of those fields below.
                <CloseButton onClick={() => setShow(false)} />
            </Alert>
        );
    }
    return <Button onClick={() => setShow(true)}>Show Alert</Button>;
}

function AlertReactiveNativeExample(): b.IBobrilNode {
    const [show, setShow] = b.useState(true);
    const [alert, setAlert] = b.useState<IAlert>({} as IAlert);

    if (show) {
        return (
            <span>
                <Alert fade variant="danger" get-instance={(instance) => setAlert(instance)} onDismissed={() => setShow(false)}>
                    Holy guacamole! You should check in on some of those fields below.
                    <CloseButton onClick={() => alert.close()} />
                </Alert>
            </span>
        );
    }
    return <Button onClick={() => setShow(true)}>Show Alert</Button>;
}

import * as b from "bobril";
import * as images from "../../../../images/images";
import { IRouteWithNavDefinition } from "../../../../common/routing";
import { Anchor } from "../../../../common/Anchor";
import { Example } from "../../../../common/Example";
import {
    alignItems,
    backgroundColor,
    Button,
    CloseButton,
    display,
    Form,
    textColor,
    Toast,
    top,
    start,
    bottom,
    end,
    position,
    IToast,
} from "../../../../../index";
import { Code } from "../../../../common/Code";
import { Lead } from "../../../../common/Lead";
import { margin, padding } from "../../../../../src/utilities/spacing";
import { OptionsTable, OptionsRow } from "../../../../common/OptionsTable";

export const bobrilstrapIconStyle = b.styleDef({ width: 21, height: 21, backgroundSize: 21 });

export const toastsRoute: IRouteWithNavDefinition = {
    url: "toasts",
    name: "toasts",
    label: "Toasts",
    handler: () => <ToastsDoc />,
    subs: [
        {
            url: "examples",
            name: "toasts-examples",
            label: "Examples",
            subs: [
                {
                    url: "basic",
                    name: "toasts-examples-basic",
                    label: "Basic",
                    subs: [],
                },
                {
                    url: "translucent",
                    name: "toasts-examples-translucent",
                    label: "Translucent",
                    subs: [],
                },
                {
                    url: "stacking",
                    name: "toasts-examples-stacking",
                    label: "Stacking",
                    subs: [],
                },
                {
                    url: "custom-content",
                    name: "toasts-examples-custom-content",
                    label: "Custom content",
                    subs: [],
                },
                {
                    url: "color-schemes",
                    name: "toasts-examples-color-schemes",
                    label: "Color schemes",
                    subs: [],
                },
            ],
        },
        {
            url: "placement",
            name: "toasts-placement",
            label: "Placement",
            subs: [],
        },
        {
            url: "reactive-and-native-dismissing",
            name: "toasts-reactive-and-native-dismissing",
            label: "Reactive and native dismissing",
            subs: [],
        },
        {
            url: "api",
            name: "toasts-api",
            label: "API",
            subs: [],
        },
    ],
};

export function ToastsDoc(): b.IBobrilNode {
    return (
        <>
            <Anchor name="toasts">
                <h1>Toasts</h1>
            </Anchor>
            <Lead>Push notifications to your visitors with a toast, a lightweight and easily customizable alert message.</Lead>
            <p>
                Toasts are lightweight notifications designed to mimic the push notifications that have been popularized by mobile and
                desktop operating systems. They’re built with flexbox, so they’re easy to align and position.
            </p>
            <Anchor name="toasts-examples">
                <h2>Examples</h2>
            </Anchor>
            <p>Things to know when using the toasts:</p>
            <ul>
                <li>
                    Toasts are opt-in for performance reasons, so <strong>you must initialize them yourself</strong>.
                </li>
                <li>
                    TToasts will automatically hide if you do not specify <code>autohide={`{false}`}</code>.
                </li>
            </ul>
            <Anchor name="toasts-examples-basic">
                <h3>Basic</h3>
            </Anchor>
            <Example>
                <Toast autohide={false} get-instance={(toast) => toast.show()}>
                    <Toast.Header>
                        <div style={[images.bobrilstrap, bobrilstrapIconStyle, margin("e", 2)]}></div>
                        <strong style={margin("e", "auto")}> Bobrilstrap</strong>
                        <small>11 mins ago</small>
                        <CloseButton dismiss="toast" aria-label="Close" />
                    </Toast.Header>
                    <Toast.Body>Hello, world! This is a toast message.</Toast.Body>
                </Toast>
            </Example>
            <Code language="tsx">{`<Toast autohide={false} get-instance={(toast) => toast.show()}>
    <Toast.Header>
        <div style={[images.bobrilstrap, bobrilstrapIconStyle, margin("e", 2)]}></div>
        <strong style={margin("e", "auto")}> Bobrilstrap</strong>
        <small>11 mins ago</small>
        <CloseButton dismiss="toast" aria-label="Close" />
    </Toast.Header>
    <Toast.Body>Hello, world! This is a toast message.</Toast.Body>
</Toast>`}</Code>
            <Anchor name="toasts-examples-translucent">
                <h3>Translucent</h3>
            </Anchor>
            <p>Toasts are slightly translucent, too, so they blend over whatever they might appear over.</p>
            <Example style={backgroundColor("dark")}>
                <Toast autohide={false} get-instance={(toast) => toast.show()}>
                    <Toast.Header>
                        <div style={[images.bobrilstrap, bobrilstrapIconStyle, margin("e", 2)]}></div>
                        <strong style={margin("e", "auto")}> Bobrilstrap</strong>
                        <small style={textColor("muted")}>11 mins ago</small>
                        <CloseButton dismiss="toast" aria-label="Close" />
                    </Toast.Header>
                    <Toast.Body>Hello, world! This is a toast message.</Toast.Body>
                </Toast>
            </Example>
            <Code language="tsx">{`<Toast autohide={false} get-instance={(toast) => toast.show()}>
    <Toast.Header>
        <div style={[images.bobrilstrap, bobrilstrapIconStyle, margin("e", 2)]}></div>
        <strong style={margin("e", "auto")}> Bobrilstrap</strong>
        <small style={textColor("muted")}>11 mins ago</small>
        <CloseButton dismiss="toast" aria-label="Close" />
    </Toast.Header>
    <Toast.Body>Hello, world! This is a toast message.</Toast.Body>
</Toast>`}</Code>
            <Anchor name="toasts-examples-stacking">
                <h3>Stacking</h3>
            </Anchor>
            <p>You can stack toasts by wrapping them in a toast container, which will vertically add some spacing.</p>
            <Example>
                <Toast.Container>
                    <Toast autohide={false} get-instance={(toast) => toast.show()}>
                        <Toast.Header>
                            <div style={[images.bobrilstrap, bobrilstrapIconStyle, margin("e", 2)]}></div>
                            <strong style={margin("e", "auto")}> Bobrilstrap</strong>
                            <small style={textColor("muted")}>just now</small>
                            <CloseButton dismiss="toast" aria-label="Close" />
                        </Toast.Header>
                        <Toast.Body>See? Just like this.</Toast.Body>
                    </Toast>
                    <Toast autohide={false} get-instance={(toast) => toast.show()}>
                        <Toast.Header>
                            <div style={[images.bobrilstrap, bobrilstrapIconStyle, margin("e", 2)]}></div>
                            <strong style={margin("e", "auto")}> Bobrilstrap</strong>
                            <small style={textColor("muted")}>2 seconds ago</small>
                            <CloseButton dismiss="toast" aria-label="Close" />
                        </Toast.Header>
                        <Toast.Body>Heads up, toasts will stack automatically</Toast.Body>
                    </Toast>
                </Toast.Container>
            </Example>
            <Code language="tsx">{`<Toast autohide={false} get-instance={(toast) => toast.show()}>
    <Toast.Header>
        <div style={[images.bobrilstrap, bobrilstrapIconStyle, margin("e", 2)]}></div>
        <strong style={margin("e", "auto")}> Bobrilstrap</strong>
        <small style={textColor("muted")}>11 mins ago</small>
        <CloseButton dismiss="toast" aria-label="Close" />
    </Toast.Header>
    <Toast.Body>Hello, world! This is a toast message.</Toast.Body>
</Toast>`}</Code>
            <Anchor name="toasts-examples-custom-content">
                <h3>Custom content</h3>
            </Anchor>
            <p>Customize your toasts by removing sub-components, tweaking with utilities, or adding your own markup.</p>
            <Example>
                <Toast autohide={false} style={[display("flex"), alignItems("center")]} get-instance={(toast) => toast.show()}>
                    <Toast.Body>See? Just like this.</Toast.Body>
                    <CloseButton dismiss="toast" style={[margin("s", "auto"), margin("e", 2)]} aria-label="Close" />
                </Toast>
            </Example>
            <Code language="tsx">{`<Toast autohide={false} style={[display("flex"), alignItems("center")]} get-instance={(toast) => toast.show()}>
    <Toast.Body>See? Just like this.</Toast.Body>
    <CloseButton dismiss="toast" style={[margin("s", "auto"), margin("e", 2)]} aria-label="Close" />
</Toast>`}</Code>
            <p>Alternatively, you can also add additional controls and components to toasts.</p>
            <Example>
                <Toast autohide={false} style={[display("flex"), alignItems("center")]} get-instance={(toast) => toast.show()}>
                    <Toast.Body>
                        See? Just like this.
                        <div style={[margin("t", 2), padding("t", 2)]}>
                            <Button variant="primary" size="sm">
                                Take action
                            </Button>
                            <Button variant="secondary" size="sm" dismiss="toast" style={margin("s", 2)}>
                                Close
                            </Button>
                        </div>
                    </Toast.Body>
                </Toast>
            </Example>
            <Code language="tsx">{`<Toast autohide={false} style={[display("flex"), alignItems("center")]} get-instance={(toast) => toast.show()}>
    <Toast.Body>
        See? Just like this.
        <div style={[margin("t", 2), padding("t", 2)]}>
            <Button variant="primary" size="sm">
                Take action
            </Button>
            <Button variant="secondary" size="sm" dismiss="toast" style={margin("s", 2)}>
                Close
            </Button>
        </div>
    </Toast.Body>
</Toast>`}</Code>
            <Anchor name="toasts-examples-color-schemes">
                <h3>Color schemes</h3>
            </Anchor>
            <p>Building on the above example, you can create different toast color schemes with our color utilities. </p>
            <Example>
                <Toast
                    autohide={false}
                    style={[textColor("white"), backgroundColor("primary"), display("flex"), alignItems("center")]}
                    get-instance={(toast) => toast.show()}
                >
                    <Toast.Body>See? Just like this.</Toast.Body>
                    <CloseButton white dismiss="toast" style={[margin("s", "auto"), margin("e", 2)]} aria-label="Close" />
                </Toast>
            </Example>
            <Code language="tsx">{`<Toast
    autohide={false}
    style={[textColor("white"), backgroundColor("primary"), display("flex"), alignItems("center")]}
    get-instance={(toast) => toast.show()}
>
    <Toast.Body>See? Just like this.</Toast.Body>
    <CloseButton white dismiss="toast" style={[margin("s", "auto"), margin("e", 2)]} aria-label="Close" />
</Toast>`}</Code>
            <Anchor name="toasts-placement">
                <h2>Placement</h2>
            </Anchor>
            <Example>
                <PlacementExample />
            </Example>
            <Code language="tsx">{`const placements = {
    topLeft: [top(0), start(0)],
    topRight: [top(0), end(0)],
    bottomLeft: [bottom(0), start(0)],
    bottomRight: [bottom(0), end(0)],
};

function PlacementExample(): b.IBobrilNode {
    const [selectedPlacement, setSelectedPlacement] = b.useState<"topLeft" | "topRight" | "bottomLeft" | "bottomRight">("topLeft");

    return (
        <>
            <Form style={margin("b", 3)}>
                <Form.Label for="selectToastPlacement">Toast placement</Form.Label>
                <Form.Select
                    style={margin("t", 2)}
                    id="selectToastPlacement"
                    value={selectedPlacement}
                    onChange={(val) => setSelectedPlacement(val)}
                >
                    <Form.Option value="topLeft">Top left</Form.Option>
                    <Form.Option value="topRight">Top right</Form.Option>
                    <Form.Option value="bottomLeft">Bottom left</Form.Option>
                    <Form.Option value="bottomRight">Bottom right</Form.Option>
                </Form.Select>
            </Form>
            <div style={[position("relative"), padding(5), backgroundColor("dark"), toastExampleBoxStyle]}>
                <Toast.Container style={[position("absolute"), padding(3), ...placements[selectedPlacement]]}>
                    <Toast autohide={false} get-instance={(toast) => toast.show()}>
                        <Toast.Header>
                            <div style={[images.bobrilstrap, bobrilstrapIconStyle, margin("e", 2)]}></div>
                            <strong style={margin("e", "auto")}> Bobrilstrap</strong>
                            <small>11 mins ago</small>
                            <CloseButton dismiss="toast" aria-label="Close" />
                        </Toast.Header>
                        <Toast.Body>Hello, world! This is a toast message.</Toast.Body>
                    </Toast>
                </Toast.Container>
            </div>
        </>
    );
}

<PlacementExample />`}</Code>

            <Anchor name="toasts-reactive-and-native-dismissing">
                <h2>Reactive and native dismissing</h2>
            </Anchor>
            <p></p>
            <Example>
                <ToastReactiveNativeExample />
            </Example>
            <Code language="tsx">{`function ToastReactiveNativeExample(): b.IBobrilNode {
    const [show, setShow] = b.useState(true);
    const [toast, setToast] = b.useState<IToast>({} as IToast);

    if (show) {
        return (
            <span>
                <Toast
                    autohide={false}
                    get-instance={(instance) => (setToast(instance), instance.show())}
                    onDismissed={() => setShow(false)}
                >
                    <Toast.Header>
                        <div style={[images.bobrilstrap, bobrilstrapIconStyle, margin("e", 2)]}></div>
                        <strong style={margin("e", "auto")}> Bobrilstrap</strong>
                        <small>11 mins ago</small>
                        <CloseButton aria-label="Close" onClick={() => toast.hide()} />
                    </Toast.Header>
                    <Toast.Body>Hello, world! This is a toast message.</Toast.Body>
                </Toast>
            </span>
        );
    }
    return <Button onClick={() => setShow(true)}>Show Toast</Button>;

    <ToastReactiveNativeExample />`}</Code>
            <Anchor name="toasts-api">
                <h2>API</h2>
            </Anchor>
            <p>
                Toast is controlled by <code>toast controller</code> provided in the callback prop <code>get-instance</code>.
            </p>
            <OptionsTable>
                <OptionsRow>
                    {{
                        name: "animation",
                        type: "boolean",
                        defaultValue: "true",
                        description: "Apply a CSS fade transition to the toast.",
                    }}
                </OptionsRow>
                <OptionsRow>
                    {{
                        name: "autohide",
                        type: "boolean",
                        defaultValue: "true",
                        description: "Auto hide the toast",
                    }}
                </OptionsRow>
                <OptionsRow>
                    {{
                        name: "delay",
                        type: "number",
                        defaultValue: "5000",
                        description: "Delay hiding the toast (ms)",
                    }}
                </OptionsRow>
                <OptionsRow>
                    {{
                        name: "get-instance",
                        type: "(toast: IToast): void",
                        defaultValue: "undefined",
                        description: (
                            <p>
                                This callback is fired when alert is initialized and provides <code>toast</code> as controller instance.
                            </p>
                        ),
                    }}
                </OptionsRow>
                <OptionsRow>
                    {{
                        name: "onDismissed",
                        type: "(): void",
                        defaultValue: "undefined",
                        description: "This callback is fired when the toast has completed its dismissing transition.",
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
                <OptionsRow>
                    {{
                        name: "onShow",
                        type: "(): void",
                        defaultValue: "undefined",
                        description: "This event fires immediately when the show instance method is called.",
                    }}
                </OptionsRow>
                <OptionsRow>
                    {{
                        name: "onShown",
                        type: "(): void",
                        defaultValue: "undefined",
                        description: "This event is fired when the toast has been made visible to the user.",
                    }}
                </OptionsRow>
            </OptionsTable>
        </>
    );
}

const placements = {
    topLeft: [top(0), start(0)],
    topRight: [top(0), end(0)],
    bottomLeft: [bottom(0), start(0)],
    bottomRight: [bottom(0), end(0)],
};

function PlacementExample(): b.IBobrilNode {
    const [selectedPlacement, setSelectedPlacement] = b.useState<"topLeft" | "topRight" | "bottomLeft" | "bottomRight">("topLeft");

    return (
        <>
            <Form style={margin("b", 3)}>
                <Form.Label for="selectToastPlacement">Toast placement</Form.Label>
                <Form.Select
                    style={margin("t", 2)}
                    id="selectToastPlacement"
                    value={selectedPlacement}
                    onChange={(val) => setSelectedPlacement(val)}
                >
                    <Form.Option value="topLeft">Top left</Form.Option>
                    <Form.Option value="topRight">Top right</Form.Option>
                    <Form.Option value="bottomLeft">Bottom left</Form.Option>
                    <Form.Option value="bottomRight">Bottom right</Form.Option>
                </Form.Select>
            </Form>
            <div style={[position("relative"), padding(5), backgroundColor("dark"), toastExampleBoxStyle]}>
                <Toast.Container style={[position("absolute"), padding(3), ...placements[selectedPlacement]]}>
                    <Toast autohide={false} get-instance={(toast) => toast.show()}>
                        <Toast.Header>
                            <div style={[images.bobrilstrap, bobrilstrapIconStyle, margin("e", 2)]}></div>
                            <strong style={margin("e", "auto")}> Bobrilstrap</strong>
                            <small>11 mins ago</small>
                            <CloseButton dismiss="toast" aria-label="Close" />
                        </Toast.Header>
                        <Toast.Body>Hello, world! This is a toast message.</Toast.Body>
                    </Toast>
                </Toast.Container>
            </div>
        </>
    );
}

const toastExampleBoxStyle = b.styleDef({ minHeight: 240 });

function ToastReactiveNativeExample(): b.IBobrilNode {
    const [show, setShow] = b.useState(true);
    const [toast, setToast] = b.useState<IToast>({} as IToast);

    if (show) {
        return (
            <span>
                <Toast
                    autohide={false}
                    get-instance={(instance) => (setToast(instance), instance.show())}
                    onDismissed={() => setShow(false)}
                >
                    <Toast.Header>
                        <div style={[images.bobrilstrap, bobrilstrapIconStyle, margin("e", 2)]}></div>
                        <strong style={margin("e", "auto")}> Bobrilstrap</strong>
                        <small>11 mins ago</small>
                        <CloseButton aria-label="Close" onClick={() => toast.hide()} />
                    </Toast.Header>
                    <Toast.Body>Hello, world! This is a toast message.</Toast.Body>
                </Toast>
            </span>
        );
    }
    return <Button onClick={() => setShow(true)}>Show Toast</Button>;
}

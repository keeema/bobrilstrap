import * as b from "bobril";
import { IRouteWithNavDefinition } from "../../../../common/routing";
import { Anchor } from "../../../../common/Anchor";
import { Example } from "../../../../common/Example";
import { Button, display, Popover } from "../../../../../index";
import { Code } from "../../../../common/Code";
import { Lead } from "../../../../common/Lead";
import { OptionsRow, OptionsTable } from "../../../../common/OptionsTable";
import { Callout } from "../../../../common/Callout";

export const popoversRoute: IRouteWithNavDefinition = {
    url: "popovers",
    name: "popovers",
    label: "Popovers",
    handler: () => <PopoversDoc />,
    subs: [
        {
            url: "examples",
            name: "popovers-examples",
            label: "Examples",
            subs: [
                {
                    url: "four-directions",
                    name: "popovers-examples-four-directions",
                    label: "Four directions",
                    subs: [],
                },
                {
                    url: "dismiss-on-next-click",
                    name: "popovers-examples-dismiss-on-next-click",
                    label: "Dismiss on next click",
                    subs: [],
                },
                {
                    url: "display-on-hover",
                    name: "popovers-examples-display-on-hover",
                    label: "Display on hover",
                    subs: [],
                },
                {
                    url: "disabled",
                    name: "popovers-examples-disabled",
                    label: "Disabled",
                    subs: [],
                },
            ],
        },
        {
            url: "api",
            name: "popovers-api",
            label: "API",
            subs: [],
        },
    ],
};

export function PopoversDoc(): b.IBobrilNode {
    return (
        <>
            <Anchor name="popovers">
                <h1>Popovers</h1>
            </Anchor>
            <Lead>Documentation and examples for adding popovers, like those found in iOS, to any element on your site.</Lead>
            <Anchor name="popovers-examples">
                <h2>Examples</h2>
            </Anchor>
            <Example>
                <Popover title="Popover title" content="And here's some amazing content. It's very engaging. Right?">
                    <Button variant="danger">Click to toggler popover</Button>
                </Popover>
            </Example>
            <Code language="tsx">{`
<Popover title="Popover title" content="And here's some amazing content. It's very engaging. Right?">
    <Button variant="danger">Click to toggler popover</Button>
</Popover>`}</Code>
            <Anchor name="popovers-examples-four-directions">
                <h3>Four directions</h3>
            </Anchor>
            <p>
                Use <code>placement</code> prop:
            </p>
            <Example>
                {new Array<"top" | "right" | "bottom" | "left">("top", "right", "bottom", "left").map((placement) => (
                    <Popover content="Vivamus sagittis lacus vel augue laoreet rutrum faucibus." placement={placement}>
                        <Button variant="secondary">Popover on {placement}</Button>{" "}
                    </Popover>
                ))}
            </Example>
            <Code language="tsx">
                {new Array<"top" | "right" | "bottom" | "left">("top", "right", "bottom", "left").map(
                    (placement) =>
                        `<Popover content="Vivamus sagittis lacus vel augue laoreet rutrum faucibus." placement="${placement}">
    <Button variant="secondary">Popover on ${placement}</Button>
</Popover>\n\n`
                )}
            </Code>
            <Anchor name="popovers-examples-dismiss-on-next-click">
                <h3>Dismiss on next click</h3>
            </Anchor>
            <p>
                Use the <code>focus</code> trigger to dismiss popovers on the user’s next click of a different element than the toggle
                element.
            </p>
            <Callout variant="danger">
                <h5>Specific markup required for dismiss-on-next-click</h5>
                <p>
                    For proper cross-browser and cross-platform behavior, you must use the <code>{`<Button as="a">`}</code> and you also
                    must include a{" "}
                    <a href="https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/tabindex" target="_blank">
                        <code>tabindex</code>
                    </a>{" "}
                    attribute.
                </p>
            </Callout>
            <Example>
                <Popover trigger="focus" title="Dismissible popover" content="And here's some amazing content. It's very engaging. Right?">
                    <Button as="a" variant="danger" tabindex={0}>
                        Dismissible popover
                    </Button>
                </Popover>
            </Example>
            <Code language="tsx">{`<Popover trigger="focus" title="Dismissible popover" content="And here's some amazing content. It's very engaging. Right?">
    <Button as="a" variant="danger" tabindex={0}>
        Dismissible popover
    </Button>
</Popover>`}</Code>
            <Anchor name="popovers-examples-display-on-hover">
                <h3>Display on hover</h3>
            </Anchor>
            <p>
                Use the <code>hover</code> value:
            </p>
            <Example>
                <Popover trigger="hover" title="Popover title" content="And here's some amazing content. It's very engaging. Right?">
                    <Button variant="primary">Show on hover</Button>
                </Popover>
            </Example>
            <Code language="tsx">{`<Popover trigger="hover" title="Popover title" content="And here's some amazing content. It's very engaging. Right?">
    <Button variant="primary">Show on hover</Button>
</Popover>`}</Code>
            <Anchor name="popovers-examples-disabled">
                <h3>Disabled</h3>
            </Anchor>
            <p>
                Components with the <code>disabled</code> prop aren’t interactive, meaning users cannot hover or click them to trigger a
                popover (or tooltip). As a workaround, you’ll want to trigger the popover from <code>&lt;div&gt;</code> or{" "}
                <code>&lt;span&gt;</code> by <code>as</code> prop and override the <code>pointer-events</code> on the disabled element.
            </p>
            <p>
                For disabled popover triggers, you may also prefer <code>trigger="hover"</code> so that the popover appears as immediate
                visual feedback to your users as they may not expect to <em>click</em> on a disabled element.
            </p>
            <Example>
                <Popover
                    as="span"
                    style={display("inline-block")}
                    title="Popover title"
                    content="And here's some amazing content. It's very engaging. Right?"
                >
                    <Button variant="primary" disabled>
                        Disabled button
                    </Button>
                </Popover>
            </Example>
            <Code language="tsx">{`<Popover
    as="span"
    style={display("inline-block")}
    title="Popover title"
    content="And here's some amazing content. It's very engaging. Right?"
>
    <Button variant="primary" disabled>
        Disabled button
    </Button>
</Popover>`}</Code>
            <Anchor name="popovers-api">
                <h2>API</h2>
            </Anchor>
            <OptionsTable>
                <OptionsRow>
                    {{
                        name: "animation",
                        type: "boolean",
                        defaultValue: "true",
                        description: "Apply a CSS fade transition to the popover",
                    }}
                </OptionsRow>
                <OptionsRow>
                    {{
                        name: "container",
                        type: "string | element | false",
                        defaultValue: "false",
                        description: (
                            <p>
                                Appends the popover to a specific element. Example: <code>container: 'body'</code>. This option is
                                particularly useful in that it allows you to position the popover in the flow of the document near the
                                triggering element -&nbsp;which will prevent the popover from floating away from the triggering element
                                during a window resize.
                            </p>
                        ),
                    }}
                </OptionsRow>
                <OptionsRow>
                    {{
                        name: "content",
                        type: "string | element | function",
                        defaultValue: "''",
                        description: (
                            <>
                                <p>Popover content.</p>
                                <p>
                                    If a function is given, it will be called with its <code>this</code> reference set to the element that
                                    the popover is attached to.
                                </p>
                            </>
                        ),
                    }}
                </OptionsRow>
                <OptionsRow>
                    {{
                        name: "delay",
                        type: "number | object",
                        defaultValue: "0",
                        description: (
                            <>
                                <p>Delay showing and hiding the popover (ms) - does not apply to manual trigger type</p>
                                <p>If a number is supplied, delay is applied to both hide/show</p>
                                <p>
                                    Object structure is: <code>delay: {`{ "show": 500, "hide": 100 }`}</code>
                                </p>
                            </>
                        ),
                    }}
                </OptionsRow>
                <OptionsRow>
                    {{
                        name: "html",
                        type: "boolean",
                        defaultValue: "false",
                        description: (
                            <p>
                                Insert HTML into the popover. If false, <code>innerText</code> property will be used to insert content into
                                the DOM. Use text if you're worried about XSS attacks.
                            </p>
                        ),
                    }}
                </OptionsRow>
                <OptionsRow>
                    {{
                        name: "placement",
                        type: "string | function",
                        defaultValue: "'right'",
                        description: (
                            <>
                                <p>
                                    How to position the popover - auto | top | bottom | left | right.
                                    <br />
                                    When <code>auto</code> is specified, it will dynamically reorient the popover.
                                </p>
                                <p>
                                    When a function is used to determine the placement, it is called with the popover DOM node as its first
                                    argument and the triggering element DOM node as its second. The <code>this</code> context is set to the
                                    popover instance.
                                </p>
                            </>
                        ),
                    }}
                </OptionsRow>
                <OptionsRow>
                    {{
                        name: "selector",
                        type: "string | false",
                        defaultValue: "false",
                        description:
                            "If a selector is provided, popover objects will be delegated to the specified targets. In practice, this is used to enable dynamic HTML content to have popovers added. ",
                    }}
                </OptionsRow>
                <OptionsRow>
                    {{
                        name: "title",
                        type: "string | element | function",
                        defaultValue: "''",
                        description: (
                            <>
                                <p>
                                    Default title value if <code>title</code> attribute isn't present.
                                </p>
                                <p>
                                    If a function is given, it will be called with its <code>this</code> reference set to the element that
                                    the popover is attached to.
                                </p>
                            </>
                        ),
                    }}
                </OptionsRow>
                <OptionsRow>
                    {{
                        name: "trigger",
                        type: "string",
                        defaultValue: "'click'",
                        description: (
                            <p>
                                How popover is triggered - click | hover | focus | manual. You may pass multiple triggers; separate them
                                with a space. <code>manual</code> cannot be combined with any other trigger.
                            </p>
                        ),
                    }}
                </OptionsRow>
                <OptionsRow>
                    {{
                        name: "offset",
                        type: "number | string",
                        defaultValue: "0",
                        description: (
                            <p>
                                Offset of the popover relative to its target. For more information refer to Popper's{" "}
                                <a href="https://popper.js.org/docs/v1/#modifiers..offset.offset">offset docs</a>.
                            </p>
                        ),
                    }}
                </OptionsRow>
                <OptionsRow>
                    {{
                        name: "fallbackPlacement",
                        type: "string | array",
                        defaultValue: "'flip'",
                        description: (
                            <p>
                                Allow to specify which position Popper will use on fallback. For more information refer to Popper's{" "}
                                <a href="https://popper.js.org/docs/v1/#modifiers..flip.behavior">behavior docs</a>
                            </p>
                        ),
                    }}
                </OptionsRow>
                <OptionsRow>
                    {{
                        name: "boundary",
                        type: "string | element",
                        defaultValue: "'scrollParent'",
                        description: (
                            <p>
                                Overflow constraint boundary of the popover. Accepts the values of <code>'viewport'</code>,{" "}
                                <code>'window'</code>, <code>'scrollParent'</code>, or an HTMLElement reference (JavaScript only). For more
                                information refer to Popper's{" "}
                                <a href="https://popper.js.org/docs/v1/#modifiers..preventOverflow.boundariesElement">
                                    preventOverflow docs
                                </a>
                                .
                            </p>
                        ),
                    }}
                </OptionsRow>
                <OptionsRow>
                    {{
                        name: "customClass",
                        type: "string | function",
                        defaultValue: "''",
                        description: (
                            <>
                                <p>
                                    Add classes to the popover when it is shown. Note that these classes will be added in addition to any
                                    classes specified in the template. To add multiple classes, separate them with spaces:{" "}
                                    <code>'class-1 class-2'</code>.
                                </p>
                                <p>You can also pass a function that should return a single string containing additional class names.</p>
                            </>
                        ),
                    }}
                </OptionsRow>
                <OptionsRow>
                    {{
                        name: "sanitize",
                        type: "boolean",
                        defaultValue: "true",
                        description: (
                            <p>
                                Enable or disable the sanitization. If activated <code>'template'</code>, <code>'content'</code> and{" "}
                                <code>'title'</code> options will be sanitized.
                            </p>
                        ),
                    }}
                </OptionsRow>
                <OptionsRow>
                    {{
                        name: "allowList",
                        type: "object",
                        defaultValue: <a href="/docs/5.0/getting-started/javascript/#sanitizer">Default value</a>,
                        description: "Object which contains allowed attributes and tags",
                    }}
                </OptionsRow>
                <OptionsRow>
                    {{
                        name: "sanitizeFn",
                        type: "null | function",
                        defaultValue: "null",
                        description:
                            "Here you can supply your own sanitize function. This can be useful if you prefer to use a dedicated library to perform sanitization.",
                    }}
                </OptionsRow>
                <OptionsRow>
                    {{
                        name: "popperConfig",
                        type: "null | object",
                        defaultValue: "null",
                        description: (
                            <p>
                                To change Bootstrap's default Popper config, see{" "}
                                <a href="https://popper.js.org/docs/v1/#Popper.Defaults">Popper's configuration</a>
                            </p>
                        ),
                    }}
                </OptionsRow>
                <OptionsRow>
                    {{
                        name: "onHide",
                        type: "() => void",
                        defaultValue: "undefined",
                        description: <p>This event is fired immediately when hiding is started.</p>,
                    }}
                </OptionsRow>
                <OptionsRow>
                    {{
                        name: "onHidden",
                        type: "() => void",
                        defaultValue: "undefined",
                        description: (
                            <p>
                                This event is fired when the popover has finished being hidden from the user (will wait for CSS transitions
                                to complete).
                            </p>
                        ),
                    }}
                </OptionsRow>
                <OptionsRow>
                    {{
                        name: "onShow",
                        type: "() => void",
                        defaultValue: "undefined",
                        description: <p>This event fires immediately when the showing is started.</p>,
                    }}
                </OptionsRow>
                <OptionsRow>
                    {{
                        name: "onShown",
                        type: "() => void",
                        defaultValue: "undefined",
                        description: (
                            <p>
                                This event is fired when the popover has been made visible to the user (will wait for CSS transitions to
                                complete).
                            </p>
                        ),
                    }}
                </OptionsRow>
                <OptionsRow>
                    {{
                        name: "onInserted",
                        type: "() => void",
                        defaultValue: "undefined",
                        description: <p>This event is fired after onShow event when the popover template has been added to the DOM.</p>,
                    }}
                </OptionsRow>
                <OptionsRow>
                    {{
                        name: "get-instance",
                        type: "(popover: IPopover) => void",
                        defaultValue: "undefined",
                        description: (
                            <p>
                                This callback is fired when item is initialized and provides <code>tab</code> as controller instance.
                            </p>
                        ),
                    }}
                </OptionsRow>
            </OptionsTable>
        </>
    );
}

import * as b from "bobril";
import { IRouteWithNavDefinition } from "../../../../common/routing";
import { Anchor } from "../../../../common/Anchor";
import { Example } from "../../../../common/Example";
import { Button, display, Tooltip } from "../../../../../index";
import { Code } from "../../../../common/Code";
import { Lead } from "../../../../common/Lead";
import { OptionsRow, OptionsTable } from "../../../../common/OptionsTable";

export const tooltipsRoute: IRouteWithNavDefinition = {
    url: "tooltips",
    name: "tooltips",
    label: "Tooltips",
    handler: () => <TooltipsDoc />,
    subs: [
        {
            url: "examples",
            name: "tooltips-examples",
            label: "Examples",
            subs: [],
        },
        {
            url: "disabled-elements",
            name: "tooltips-disabled-elements",
            label: "Disabled elements",
            subs: [],
        },
        {
            url: "api",
            name: "tooltips-api",
            label: "API",
            subs: [],
        },
    ],
};

export function TooltipsDoc(): b.IBobrilNode {
    return (
        <>
            <Anchor name="tooltips">
                <h1>Tooltips</h1>
            </Anchor>
            <Lead>Documentation and examples for adding custom tooltips.</Lead>
            <Anchor name="tooltips-examples">
                <h2>Examples</h2>
            </Anchor>
            <Example>
                {new Array<"auto" | "top" | "bottom" | "left" | "right">("auto", "top", "bottom", "left", "right").map((placement) => (
                    <Tooltip title={`Tooltip on ${placement}`} placement={placement}>
                        <Button variant="secondary">{`Tooltip on ${placement}`}</Button>{" "}
                    </Tooltip>
                ))}
            </Example>
            <Code language="tsx">
                {new Array<"auto" | "top" | "bottom" | "left" | "right">("auto", "top", "bottom", "left", "right").map(
                    (placement) => `<Tooltip title="Tooltip on ${placement}" placement="${placement}">
    <Button variant="secondary">Tooltip on ${placement}</Button>{" "}
</Tooltip>\n`
                )}
            </Code>
            <Anchor name="tooltips-disabled-elements">
                <h2>Disabled elements</h2>
            </Anchor>
            <p>
                Components with the <code>disabled</code> prop aren’t interactive, meaning users cannot hover or click them to trigger a
                tooltip (or popover). As a workaround, you’ll want to trigger the tooltip from <code>&lt;div&gt;</code> or{" "}
                <code>&lt;span&gt;</code> by <code>as</code> prop and override the <code>pointer-events</code> on the disabled element.
            </p>
            <Example>
                <Tooltip as="span" style={display("inline-block")} tabindex={0} title="Tooltip on disabled element">
                    <Button variant="secondary" disabled>
                        Disabled buttons
                    </Button>
                </Tooltip>
            </Example>
            <Code language="tsx">
                {`<Tooltip as="span" style={display("inline-block")} tabindex={0} title="Tooltip on disabled element">
    <Button variant="secondary" disabled>
        Disabled buttons
    </Button>
</Tooltip>`}
            </Code>
            <Anchor name="tooltips-api">
                <h2>API</h2>
            </Anchor>
            <OptionsTable>
                <OptionsRow>
                    {{
                        name: "animation",
                        type: "boolean",
                        defaultValue: "true",
                        description: "Apply a CSS fade transition to the tooltip",
                    }}
                </OptionsRow>
                <OptionsRow>
                    {{
                        name: "container",
                        type: "string | element | false",
                        defaultValue: "false",
                        description: (
                            <p>
                                Appends the tooltip to a specific element. Example: <code>container: 'body'</code>. This option is
                                particularly useful in that it allows you to position the tooltip in the flow of the document near the
                                triggering element -&nbsp;which will prevent the tooltip from floating away from the triggering element
                                during a window resize.
                            </p>
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
                                <p>Delay showing and hiding the tooltip (ms) - does not apply to manual trigger type</p>
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
                                Insert HTML into the tooltip. If false, <code>innerText</code> property will be used to insert content into
                                the DOM. Use text if you're worried about XSS attacks.
                            </p>
                        ),
                    }}
                </OptionsRow>
                <OptionsRow>
                    {{
                        name: "placement",
                        type: "string | function",
                        defaultValue: "'top'",
                        description: (
                            <>
                                <p>
                                    How to position the tooltip - auto | top | bottom | left | right.
                                    <br />
                                    When <code>auto</code> is specified, it will dynamically reorient the tooltip.
                                </p>
                                <p>
                                    When a function is used to determine the placement, it is called with the tooltip DOM node as its first
                                    argument and the triggering element DOM node as its second. The <code>this</code> context is set to the
                                    tooltip instance.
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
                            "If a selector is provided, tooltip objects will be delegated to the specified targets. In practice, this is used to enable dynamic HTML content to have tooltips added. ",
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
                                    the tooltip is attached to.
                                </p>
                            </>
                        ),
                    }}
                </OptionsRow>
                <OptionsRow>
                    {{
                        name: "trigger",
                        type: "string",
                        defaultValue: "'hover focus'",
                        description: (
                            <>
                                <p>
                                    How tooltip is triggered - click | hover | focus | manual. You may pass multiple triggers; separate them
                                    with a space.
                                </p>
                                <p>
                                    <code>'manual'</code> indicates that the tooltip will be triggered programmatically via the{" "}
                                    <code>tooltip.show()</code>, <code>tooltip.hide()</code> and <code>tooltip.toggle()</code> methods; this
                                    value cannot be combined with any other trigger.
                                </p>
                                <p>
                                    <code>'hover'</code> on its own will result in tooltips that cannot be triggered via the keyboard, and
                                    should only be used if alternative methods for conveying the same information for keyboard users is
                                    present.
                                </p>
                            </>
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
                                Offset of the tooltip relative to its target. For more information refer to Popper's{" "}
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
                        defaultValue: "'clippingParents'",
                        description: (
                            <p>
                                Overflow constraint boundary of the tooltip. By default it's <code>'clippingParents'</code> and can accept
                                an HTMLElement reference (JavaScript only). For more information refer to Popper's{" "}
                                <a href="https://popper.js.org/docs/v2/utils/detect-overflow/#boundary">preventOverflow docs</a>.
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
                                    Add classes to the tooltip when it is shown. Note that these classes will be added in addition to any
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
                                Enable or disable the sanitization. If activated <code>'template'</code> and <code>'title'</code> options
                                will be sanitized.
                            </p>
                        ),
                    }}
                </OptionsRow>
                <OptionsRow>
                    {{
                        name: "allowList",
                        type: "object",
                        defaultValue: <a href="https://getbootstrap.com/docs/5.0/getting-started/javascript/#sanitizer">Default value</a>,
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
                                This event is fired when the tooltip has finished being hidden from the user (will wait for CSS transitions
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
                                This event is fired when the tooltip has been made visible to the user (will wait for CSS transitions to
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
                        description: <p>This event is fired after onShow event when the tooltip template has been added to the DOM.</p>,
                    }}
                </OptionsRow>
                <OptionsRow>
                    {{
                        name: "get-instance",
                        type: "(tooltip: ITooltip) => void",
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

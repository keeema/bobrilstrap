import * as b from "bobril";
import { IRouteWithNavDefinition } from "../../../../common/routing";
import { Anchor } from "../../../../common/Anchor";
import { Example } from "../../../../common/Example";
import {
    alignItems,
    Button,
    clearfix,
    display,
    float,
    justifyContent,
    margin,
    Spinner,
    textAlign,
    textColorScale,
    visuallyHidden,
} from "../../../../../index";
import { Code } from "../../../../common/Code";
import { Lead } from "../../../../common/Lead";

export const spinnersRoute: IRouteWithNavDefinition = {
    url: "spinners",
    name: "spinners",
    label: "Spinners",
    handler: () => <SpinnersDoc />,
    subs: [
        {
            url: "border-spinner",
            name: "spinners-border-spinner",
            label: "Border spinner",
            subs: [
                {
                    url: "colors",
                    name: "spinners-border-spinner-colors",
                    label: "Colors",
                    subs: [],
                },
            ],
        },
        {
            url: "growing-spinner",
            name: "spinners-growing-spinner",
            label: "Growing spinner",
            subs: [],
        },
        {
            url: "alignment",
            name: "spinners-alignment",
            label: "Alignment",
            subs: [
                {
                    url: "margin",
                    name: "spinners-alignment-margin",
                    label: "Margin",
                    subs: [],
                },
                {
                    url: "placement",
                    name: "spinners-alignment-placement",
                    label: "Placement",
                    subs: [
                        {
                            url: "flex",
                            name: "spinners-alignment-placement-flex",
                            label: "Flex",
                            subs: [],
                        },
                        {
                            url: "floats",
                            name: "spinners-alignment-placement-floats",
                            label: "Floats",
                            subs: [],
                        },
                        {
                            url: "text-align",
                            name: "spinners-alignment-placement-text-align",
                            label: "Text align",
                            subs: [],
                        },
                    ],
                },
            ],
        },
        {
            url: "size",
            name: "spinners-size",
            label: "Size",
            subs: [],
        },
        {
            url: "buttons",
            name: "spinners-buttons",
            label: "Buttons",
            subs: [],
        },
    ],
};

export function SpinnersDoc(): b.IBobrilNode {
    return (
        <>
            <Anchor name="spinners">
                <h1>Spinners</h1>
            </Anchor>
            <Lead>
                Indicate the loading state of a component or page with Bootstrap spinners, built entirely with HTML, CSS, and no JavaScript.
            </Lead>
            <Anchor name="spinners-border-spinner">
                <h2>Border spinner</h2>
            </Anchor>
            <p>Use the border spinners for a lightweight loading indicator.</p>
            <Example>
                <Spinner>
                    <span style={visuallyHidden}>Loading...</span>
                </Spinner>
            </Example>
            <Code language="tsx">{`<Spinner>
    <span style={visuallyHidden}>Loading...</span>
</Spinner>`}</Code>
            <Anchor name="spinners-border-spinner-colors">
                <h3>Colors</h3>
            </Anchor>
            <p>
                You can customize the color with <code>variant</code> prop.
            </p>
            <Example>
                {textColorScale.map((color) => (
                    <Spinner variant={color}>
                        <span style={visuallyHidden}>Loading...</span>
                    </Spinner>
                ))}
            </Example>
            <Code language="tsx">
                {textColorScale.map(
                    (color) =>
                        `<Spinner variant="${color}">
    <span style={visuallyHidden}>Loading...</span>
</Spinner>\n`
                )}
            </Code>
            <Anchor name="spinners-growing-spinner">
                <h2>Growing spinner</h2>
            </Anchor>
            <p>
                If you don’t fancy a border spinner, switch to the grow spinner. While it doesn’t technically spin, it does repeatedly grow!
            </p>
            <Example>
                <Spinner animation="grow">
                    <span style={visuallyHidden}>Loading...</span>
                </Spinner>
            </Example>
            <Code language="tsx">{`<Spinner animation="grow">
    <span style={visuallyHidden}>Loading...</span>
</Spinner>`}</Code>
            <p>
                You can also customize the color with <code>variant</code> prop.
            </p>
            <Example>
                {textColorScale.map((color) => (
                    <Spinner variant={color} animation="grow">
                        <span style={visuallyHidden}>Loading...</span>
                    </Spinner>
                ))}
            </Example>
            <Code language="tsx">
                {textColorScale.map(
                    (color) =>
                        `<Spinner variant="${color}" animation="grow">
    <span style={visuallyHidden}>Loading...</span>
</Spinner>\n`
                )}
            </Code>
            <Anchor name="spinners-alignment">
                <h2>Alignment</h2>
            </Anchor>
            <Anchor name="spinners-alignment-margin">
                <h3>Margin</h3>
            </Anchor>
            <Example>
                <Spinner style={margin(5)}>
                    <span style={visuallyHidden}>Loading...</span>
                </Spinner>
            </Example>
            <Code language="tsx">{`<Spinner style={margin(5)}>
    <span style={visuallyHidden}>Loading...</span>
</Spinner>`}</Code>
            <Anchor name="spinners-alignment-placement">
                <h3>Placement</h3>
            </Anchor>
            <Anchor name="spinners-alignment-placement-flex">
                <h3>Flex</h3>
            </Anchor>
            <Example>
                <div style={[display("flex"), justifyContent("center")]}>
                    <Spinner>
                        <span style={visuallyHidden}>Loading...</span>
                    </Spinner>
                </div>
            </Example>
            <Code language="tsx">{`<div style={[display("flex"), justifyContent("center")]}>
    <Spinner>
        <span style={visuallyHidden}>Loading...</span>
    </Spinner>
</div>`}</Code>
            <Example>
                <div style={[display("flex"), alignItems("center")]}>
                    <strong>Loading...</strong>
                    <Spinner style={margin("s", "auto")} aria-hidden />
                </div>
            </Example>
            <Code language="tsx">{`<div style={[display("flex"), justifyContent("center")]}>
    <Spinner>
        <span style={visuallyHidden}>Loading...</span>
    </Spinner>
</div>`}</Code>
            <Anchor name="spinners-alignment-placement-floats">
                <h3>Floats</h3>
            </Anchor>
            <Example>
                <div style={clearfix}>
                    <Spinner style={float("end")}>
                        <span style={visuallyHidden}>Loading...</span>
                    </Spinner>
                </div>
            </Example>
            <Code language="tsx">{`<div style={clearfix}>
    <Spinner style={float("end")}>
        <span style={visuallyHidden}>Loading...</span>
    </Spinner>
</div>`}</Code>
            <Anchor name="spinners-alignment-placement-text-align">
                <h3>Text align</h3>
            </Anchor>
            <Example>
                <div style={textAlign("center")}>
                    <Spinner>
                        <span style={visuallyHidden}>Loading...</span>
                    </Spinner>
                </div>
            </Example>
            <Code language="tsx">{`<div style={clearfix}>
    <Spinner style={float("end")}>
        <span style={visuallyHidden}>Loading...</span>
    </Spinner>
</div>`}</Code>
            <Anchor name="spinners-size">
                <h2>Size</h2>
            </Anchor>
            <p>
                In addition to the standard size, a smaller additional preconfigured size is available by configuring the size property to
                sm.
            </p>
            <Example>
                <Spinner size="sm">
                    <span style={visuallyHidden}>Loading...</span>
                </Spinner>
                <Spinner animation="grow" size="sm">
                    <span style={visuallyHidden}>Loading...</span>
                </Spinner>
            </Example>
            <Code language="tsx">{`<Spinner size="sm">
    <span style={visuallyHidden}>Loading...</span>
</Spinner>
<Spinner animation="grow" size="sm">
    <span style={visuallyHidden}>Loading...</span>
</Spinner>`}</Code>
            <p>Or, use custom predefined or inline styles to change the dimensions as needed.</p>
            <Example>
                <Spinner style={customSize}>
                    <span style={visuallyHidden}>Loading...</span>
                </Spinner>
                <Spinner animation="grow" style={customSize}>
                    <span style={visuallyHidden}>Loading...</span>
                </Spinner>
            </Example>
            <Code language="tsx">{`const customSize = b.styleDef({ width: "3rem", height: "3rem" });

<Spinner style={customSize}>
    <span style={visuallyHidden}>Loading...</span>
</Spinner>
<Spinner animation="grow" style={customSize}>
    <span style={visuallyHidden}>Loading...</span>
</Spinner>`}</Code>
            <Anchor name="spinners-buttons">
                <h2>Buttons</h2>
            </Anchor>
            <p>
                Use spinners within buttons to indicate an action is currently processing or taking place. You may also swap the text out of
                the spinner element and utilize button text as needed.
            </p>
            <Example>
                <Button variant="primary" disabled>
                    <Spinner size="sm" aria-hidden />
                    <span style={visuallyHidden}>Loading...</span>
                </Button>{" "}
                <Button variant="primary" disabled>
                    <Spinner size="sm" aria-hidden /> Loading...
                </Button>
            </Example>
            <Code language="tsx">{`<Button variant="primary" disabled>
    <Spinner size="sm" aria-hidden />
    <span style={visuallyHidden}>Loading...</span>
</Button>{" "}
<Button variant="primary" disabled>
    <Spinner size="sm" aria-hidden /> Loading...
</Button>`}</Code>
            <Example>
                <Button variant="primary" disabled>
                    <Spinner animation="grow" size="sm" aria-hidden />
                    <span style={visuallyHidden}>Loading...</span>
                </Button>{" "}
                <Button variant="primary" disabled>
                    <Spinner animation="grow" size="sm" aria-hidden /> Loading...
                </Button>
            </Example>
            <Code language="tsx">{`<Button variant="primary" disabled>
    <Spinner animation="grow" size="sm" aria-hidden />
    <span style={visuallyHidden}>Loading...</span>
</Button>{" "}
<Button variant="primary" disabled>
    <Spinner animation="grow" size="sm" aria-hidden /> Loading...
</Button>`}</Code>
        </>
    );
}

const customSize = b.styleDef({ width: "3rem", height: "3rem" });

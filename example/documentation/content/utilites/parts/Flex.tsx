import * as b from "bobril";
import { IRouteWithNavDefinition } from "../../../../common/routing";
import { Anchor } from "../../../../common/Anchor";
import { Example } from "../../../../common/Example";
import { backgroundColor, display, flex, margin, padding } from "../../../../../index";
import { Code } from "../../../../common/Code";
import { Lead } from "../../../../common/Lead";
import { gridStyle } from "../../../../common/styles";

export const flexRoute: IRouteWithNavDefinition = {
    url: "flex",
    name: "flex",
    label: "Flex",
    handler: () => <FlexDoc />,
    subs: [
        {
            url: "enable-flex-behaviors",
            name: "flex-enable-flex-behaviors",
            label: "Enable flex behaviors",
            subs: [],
        },
        {
            url: "direction",
            name: "flex-direction",
            label: "Direction",
            subs: [],
        },
    ],
};

export function FlexDoc(): b.IBobrilNode {
    return (
        <>
            <Anchor name="flex">
                <h1>Flex</h1>
            </Anchor>
            <Lead>
                Quickly manage the layout, alignment, and sizing of grid columns, navigation, components, and more with a full suite of
                responsive flexbox utilities. For more complex implementations, custom styles may be necessary.
            </Lead>
            <Anchor name="flex-enable-flex-behaviors">
                <h2>Enable flex behaviors</h2>
            </Anchor>
            <p>
                Apply <code>display</code> utilities to create a flexbox container and transform <strong>direct children elements</strong>{" "}
                into flex items. Flex containers and items are able to be modified further with additional flex properties.
            </p>
            <Example>
                <div style={[display("flex"), padding(2), gridStyle]} class="d-flex p-2 bd-highlight">
                    I'm a flexbox container!
                </div>
            </Example>
            <Code language="tsx">{`<div style={[display("flex"), padding(2), gridStyle]} class="d-flex p-2 bd-highlight">
    I'm a flexbox container!
</div>`}</Code>
            <Example>
                <div style={[display("inline-flex"), padding(2), gridStyle]} class="d-flex p-2 bd-highlight">
                    I'm an inline flexbox container!
                </div>
            </Example>
            <Code language="tsx">{`<div style={[display("inline-flex"), padding(2), gridStyle]} class="d-flex p-2 bd-highlight">
    I'm an inline flexbox container!
</div>`}</Code>
            <Anchor name="flex-direction">
                <h2>Direction</h2>
            </Anchor>
            <p>
                Set the direction of flex items in a flex container with direction utilities. In most cases you can omit the horizontal
                utility here as the browser default is <code>row</code>. However, you may encounter situations where you needed to
                explicitly set this value (like responsive layouts).
            </p>
            <p>
                Use <code>flex("row")</code> to set a horizontal direction (the browser default), or <code>flex("row-reverse")</code> to
                start the horizontal direction from the opposite side.
            </p>
            <Example>
                <div style={[display("flex"), flex("row"), margin("b", 3), backgroundColor("secondary")]}>
                    <div style={[padding(2), gridStyle]}>Flex item 1</div>
                    <div style={[padding(2), gridStyle]}>Flex item 2</div>
                    <div style={[padding(2), gridStyle]}>Flex item 3</div>
                </div>
                <div style={[display("flex"), flex("row-reverse"), backgroundColor("secondary")]}>
                    <div style={[padding(2), gridStyle]}>Flex item 1</div>
                    <div style={[padding(2), gridStyle]}>Flex item 2</div>
                    <div style={[padding(2), gridStyle]}>Flex item 3</div>
                </div>
            </Example>
            <Code language="tsx">
                {`<div style={[display("flex"), flex("row"), margin("b", 3), backgroundColor("secondary")]}>
    <div style={[padding(2), gridStyle]}>Flex item 1</div>
    <div style={[padding(2), gridStyle]}>Flex item 2</div>
    <div style={[padding(2), gridStyle]}>Flex item 3</div>
</div>
<div style={[display("flex"), flex("row-reverse"), backgroundColor("secondary")]}>
    <div style={[padding(2), gridStyle]}>Flex item 1</div>
    <div style={[padding(2), gridStyle]}>Flex item 2</div>
    <div style={[padding(2), gridStyle]}>Flex item 3</div>
</div>`}
            </Code>
            <p>
                Use <code>flex("column")</code> to set a vertical direction, or <code>flex("column-reverse")</code> to start the vertical
                direction from the opposite side.
            </p>
            <p>
                Responsive variations also exist as <code>flex(value, breakpoint)</code>
            </p>
            <Example>
                <div style={[display("flex"), flex("column"), margin("b", 3)]}>
                    <div style={[padding(2), gridStyle]}>Flex item 1</div>
                    <div style={[padding(2), gridStyle]}>Flex item 2</div>
                    <div style={[padding(2), gridStyle]}>Flex item 3</div>
                </div>
                <div style={[display("flex"), flex("column-reverse")]}>
                    <div style={[padding(2), gridStyle]}>Flex item 1</div>
                    <div style={[padding(2), gridStyle]}>Flex item 2</div>
                    <div style={[padding(2), gridStyle]}>Flex item 3</div>
                </div>
            </Example>
            <Code language="tsx">
                {`<div style={[display("flex"), flex("column"), margin("b", 3)]}>
    <div style={[padding(2), gridStyle]}>Flex item 1</div>
    <div style={[padding(2), gridStyle]}>Flex item 2</div>
    <div style={[padding(2), gridStyle]}>Flex item 3</div>
</div>
<div style={[display("flex"), flex("column-reverse")]}>
    <div style={[padding(2), gridStyle]}>Flex item 1</div>
    <div style={[padding(2), gridStyle]}>Flex item 2</div>
    <div style={[padding(2), gridStyle]}>Flex item 3</div>
</div>`}
            </Code>
        </>
    );
}

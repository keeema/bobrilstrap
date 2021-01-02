import * as b from "bobril";
import { IRouteWithNavDefinition } from "../../../../common/routing";
import { Anchor } from "../../../../common/Anchor";
import { Example } from "../../../../common/Example";
import {
    alignContent,
    alignItems,
    alignSelf,
    backgroundColor,
    display,
    flex,
    justifyContent,
    margin,
    order,
    padding,
    width,
} from "../../../../../index";
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
        {
            url: "justify-content",
            name: "flex-justify-content",
            label: "Justify content",
            subs: [],
        },
        {
            url: "align-items",
            name: "flex-align-items",
            label: "Align items",
            subs: [],
        },
        {
            url: "align-self",
            name: "flex-align-self",
            label: "Align self",
            subs: [],
        },
        {
            url: "fill",
            name: "flex-fill",
            label: "Fill",
            subs: [],
        },
        {
            url: "grow-and-shrink",
            name: "flex-grow-and-shrink",
            label: "Grow and shrink",
            subs: [],
        },
        {
            url: "auto-margins",
            name: "flex-auto-margins",
            label: "Auto margins",
            subs: [
                {
                    url: "with-align-items",
                    name: "flex-auto-margins-with-align-items",
                    label: "With align items",
                    subs: [],
                },
            ],
        },
        {
            url: "wrap",
            name: "flex-wrap",
            label: "Wrap",
            subs: [],
        },
        {
            url: "order",
            name: "flex-order",
            label: "Order",
            subs: [],
        },
        {
            url: "align-content",
            name: "flex-align-content",
            label: "Align content",
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
            <Anchor name="flex-justify-content">
                <h2>Justify content</h2>
            </Anchor>
            <p>
                Use <code>justifyContent</code> utilities on flexbox containers to change the alignment of flex items on the main axis (the
                x-axis to start, y-axis if <code>flex-direction: column</code>). Choose from <code>start</code> (browser default),{" "}
                <code>end</code>, <code>center</code>, <code>between</code>, <code>around</code>, or <code>evenly</code>.
            </p>
            <Example>
                <div style={[display("flex"), justifyContent("start"), backgroundColor("secondary")]}>
                    <Items count={3} />
                </div>
                <div style={[display("flex"), justifyContent("end"), backgroundColor("secondary")]}>
                    <Items count={3} />
                </div>
                <div style={[display("flex"), justifyContent("center"), backgroundColor("secondary")]}>
                    <Items count={3} />
                </div>
                <div style={[display("flex"), justifyContent("between"), backgroundColor("secondary")]}>
                    <Items count={3} />
                </div>
                <div style={[display("flex"), justifyContent("around"), backgroundColor("secondary")]}>
                    <Items count={3} />
                </div>
                <div style={[display("flex"), justifyContent("evenly"), backgroundColor("secondary")]}>
                    <Items count={3} />
                </div>
            </Example>
            <p>
                Responsive variations also exist as <code>justifyContent(value, breakpoint)</code>
            </p>
            <Code language="tsx">
                {`<div style={[display("flex"), justifyContent("start"), backgroundColor("secondary")]}>
    <Items count={3} />
</div>
<div style={[display("flex"), justifyContent("end"), backgroundColor("secondary")]}>
    <Items count={3} />
</div>
<div style={[display("flex"), justifyContent("center"), backgroundColor("secondary")]}>
    <Items count={3} />
</div>
<div style={[display("flex"), justifyContent("between"), backgroundColor("secondary")]}>
    <Items count={3} />
</div>
<div style={[display("flex"), justifyContent("around"), backgroundColor("secondary")]}>
    <Items count={3} />
</div>
<div style={[display("flex"), justifyContent("evenly"), backgroundColor("secondary")]}>
    <Items count={3} />
</div>`}
            </Code>
            <Anchor name="flex-align-items">
                <h2>Align items</h2>
            </Anchor>
            <p>
                Use <code>alignItems</code> utilities on flexbox containers to change the alignment of flex items on the cross axis (the
                y-axis to start, x-axis if <code>flex-direction: column</code>). Choose from <code>start</code>, <code>end</code>,{" "}
                <code>center</code>, <code>baseline</code>, or <code>stretch</code> (browser default).
            </p>
            <p>
                Responsive variations also exist as <code>alignItems(value, breakpoint)</code>
            </p>
            <Example>
                <div style={[display("flex"), alignItems("start"), backgroundColor("secondary"), margin("y", 2), h100pxStyle]}>
                    <Items count={3} />
                </div>
                <div style={[display("flex"), alignItems("end"), backgroundColor("secondary"), margin("y", 2), h100pxStyle]}>
                    <Items count={3} />
                </div>
                <div style={[display("flex"), alignItems("center"), backgroundColor("secondary"), margin("y", 2), h100pxStyle]}>
                    <Items count={3} />
                </div>
                <div style={[display("flex"), alignItems("baseline"), backgroundColor("secondary"), margin("y", 2), h100pxStyle]}>
                    <Items count={3} />
                </div>
                <div style={[display("flex"), alignItems("stretch"), backgroundColor("secondary"), margin("y", 2), h100pxStyle]}>
                    <Items count={3} />
                </div>
            </Example>
            <Code language="tsx">
                {`<div style={[display("flex"), alignItems("start"), backgroundColor("secondary"), margin("y", 2), h100pxStyle]}>
    <Items count={3} />
</div>
<div style={[display("flex"), alignItems("end"), backgroundColor("secondary"), margin("y", 2), h100pxStyle]}>
    <Items count={3} />
</div>
<div style={[display("flex"), alignItems("center"), backgroundColor("secondary"), margin("y", 2), h100pxStyle]}>
    <Items count={3} />
</div>
<div style={[display("flex"), alignItems("baseline"), backgroundColor("secondary"), margin("y", 2), h100pxStyle]}>
    <Items count={3} />
</div>
<div style={[display("flex"), alignItems("stretch"), backgroundColor("secondary"), margin("y", 2), h100pxStyle]}>
    <Items count={3} />
</div>`}
            </Code>
            <Anchor name="flex-align-self">
                <h2>Align self</h2>
            </Anchor>
            <p>
                Use <code>alignSelf</code> utilities on flexbox items to individually change their alignment on the cross axis (the y-axis
                to start, x-axis if <code>flex-direction: column</code>). Choose from the same options as <code>align-items</code>:{" "}
                <code>start</code>, <code>end</code>, <code>center</code>, <code>baseline</code>, or <code>stretch</code> (browser default).
            </p>
            <p>
                Responsive variations also exist as <code>alignSelf(value, breakpoint)</code>
            </p>
            <Example>
                <div style={[display("flex"), backgroundColor("secondary"), margin("y", 2), h100pxStyle]}>
                    <div style={[padding(2), gridStyle]}>Flex item 1</div>
                    <div style={[padding(2), alignSelf("start"), gridStyle]}>Aligned flex item 2</div>
                    <div style={[padding(2), gridStyle]}>Flex item 3</div>
                </div>
                <div style={[display("flex"), backgroundColor("secondary"), margin("y", 2), h100pxStyle]}>
                    <div style={[padding(2), gridStyle]}>Flex item 1</div>
                    <div style={[padding(2), alignSelf("end"), gridStyle]}>Aligned flex item 2</div>
                    <div style={[padding(2), gridStyle]}>Flex item 3</div>
                </div>
                <div style={[display("flex"), backgroundColor("secondary"), margin("y", 2), h100pxStyle]}>
                    <div style={[padding(2), gridStyle]}>Flex item 1</div>
                    <div style={[padding(2), alignSelf("center"), gridStyle]}>Aligned flex item 2</div>
                    <div style={[padding(2), gridStyle]}>Flex item 3</div>
                </div>
                <div style={[display("flex"), backgroundColor("secondary"), margin("y", 2), h100pxStyle]}>
                    <div style={[padding(2), gridStyle]}>Flex item 1</div>
                    <div style={[padding(2), alignSelf("baseline"), gridStyle]}>Aligned flex item 2</div>
                    <div style={[padding(2), gridStyle]}>Flex item 3</div>
                </div>
                <div style={[display("flex"), backgroundColor("secondary"), margin("y", 2), h100pxStyle]}>
                    <div style={[padding(2), gridStyle]}>Flex item 1</div>
                    <div style={[padding(2), alignSelf("stretch"), gridStyle]}>Aligned flex item 2</div>
                    <div style={[padding(2), gridStyle]}>Flex item 3</div>
                </div>
            </Example>
            <Code language="tsx">
                {`<div style={[display("flex"), backgroundColor("secondary"), margin("y", 2), h100pxStyle]}>
    <div style={[padding(2), gridStyle]}>Flex item 1</div>
    <div style={[padding(2), alignSelf("start"), gridStyle]}>Aligned flex item 2</div>
    <div style={[padding(2), gridStyle]}>Flex item 3</div>
</div>
<div style={[display("flex"), backgroundColor("secondary"), margin("y", 2), h100pxStyle]}>
    <div style={[padding(2), gridStyle]}>Flex item 1</div>
    <div style={[padding(2), alignSelf("end"), gridStyle]}>Aligned flex item 2</div>
    <div style={[padding(2), gridStyle]}>Flex item 3</div>
</div>
<div style={[display("flex"), backgroundColor("secondary"), margin("y", 2), h100pxStyle]}>
    <div style={[padding(2), gridStyle]}>Flex item 1</div>
    <div style={[padding(2), alignSelf("center"), gridStyle]}>Aligned flex item 2</div>
    <div style={[padding(2), gridStyle]}>Flex item 3</div>
</div>
<div style={[display("flex"), backgroundColor("secondary"), margin("y", 2), h100pxStyle]}>
    <div style={[padding(2), gridStyle]}>Flex item 1</div>
    <div style={[padding(2), alignSelf("baseline"), gridStyle]}>Aligned flex item 2</div>
    <div style={[padding(2), gridStyle]}>Flex item 3</div>
</div>
<div style={[display("flex"), backgroundColor("secondary"), margin("y", 2), h100pxStyle]}>
    <div style={[padding(2), gridStyle]}>Flex item 1</div>
    <div style={[padding(2), alignSelf("stretch"), gridStyle]}>Aligned flex item 2</div>
    <div style={[padding(2), gridStyle]}>Flex item 3</div>
</div>`}
            </Code>
            <Anchor name="flex-fill">
                <h2>Fill</h2>
            </Anchor>
            <p>
                Use the <code>flex("fill")</code> on a series of sibling elements to force them into widths equal to their content (or equal
                widths if their content does not surpass their border-boxes) while taking up all available horizontal space.
            </p>
            <p>
                Responsive variations also exist as <code>flex("fill", breakpoint)</code>
            </p>
            <Example>
                <div style={[display("flex"), backgroundColor("secondary")]}>
                    <div style={[padding(2), flex("fill"), gridStyle]}>Flex item with a lot of content</div>
                    <div style={[padding(2), flex("fill"), gridStyle]}>Flex item</div>
                    <div style={[padding(2), flex("fill"), gridStyle]}>Flex item</div>
                </div>
            </Example>
            <Code language="tsx">
                {`<div style={[display("flex"), backgroundColor("secondary")]}>
    <div style={[padding(2), flex("fill"), gridStyle]}>Flex item with a lot of content</div>
    <div style={[padding(2), flex("fill"), gridStyle]}>Flex item</div>
    <div style={[padding(2), flex("fill"), gridStyle]}>Flex item</div>
</div>`}
            </Code>
            <Anchor name="flex-grow-and-shrink">
                <h2>Grow and shrink</h2>
            </Anchor>
            <p>
                Use <code>flex("grow", *)</code> utilities to toggle a flex item’s ability to grow to fill available space. In the example
                below, the <code>flex("grow", 1)</code> elements uses all available space it can, while allowing the remaining two flex
                items their necessary space.
            </p>
            <p>
                Responsive variations also exist as <code>flex("grow", *, breakpoint)</code>
            </p>
            <Example>
                <div style={[display("flex"), backgroundColor("secondary")]}>
                    <div style={[padding(2), flex("grow", 1), gridStyle]}>Flex item</div>
                    <div style={[padding(2), gridStyle]}>Flex item</div>
                    <div style={[padding(2), gridStyle]}>Flex item</div>
                </div>
            </Example>
            <Code language="tsx">
                {`<div style={[display("flex"), backgroundColor("secondary")]}>
    <div style={[padding(2), flex("grow", 1), gridStyle]}>Flex item</div>
    <div style={[padding(2), gridStyle]}>Flex item</div>
    <div style={[padding(2), gridStyle]}>Flex item</div>
</div>`}
            </Code>
            <p>
                Use <code>flex("shrink", *)</code> utilities to toggle a flex item’s ability to shrink if necessary. In the example below,
                the second flex item with <code>flex("shrink", 1)</code> is forced to wrap its contents to a new line, “shrinking” to allow
                more space for the previous flex item with <code>width(100)</code>.
            </p>
            <p>
                Responsive variations also exist as <code>flex("shrink", *, breakpoint)</code>
            </p>
            <Example>
                <div style={[display("flex"), backgroundColor("secondary")]}>
                    <div style={[padding(2), width(100), gridStyle]}>Flex item</div>
                    <div style={[padding(2), flex("shrink", 1), gridStyle]}>Flex item</div>
                </div>
            </Example>
            <Code language="tsx">
                {`<div style={[display("flex"), backgroundColor("secondary")]}>
    <div style={[padding(2), width(100), gridStyle]}>Flex item</div>
    <div style={[padding(2), flex("shrink", 1), gridStyle]}>Flex item</div>
</div>`}
            </Code>
            <Anchor name="flex-auto-margins">
                <h2>Auto margins</h2>
            </Anchor>
            <p>
                Flexbox can do some pretty awesome things when you mix flex alignments with auto margins. Shown below are three examples of
                controlling flex items via auto margins: default (no auto margin), pushing two items to the right (
                <code>margin("e", "auto")</code>), and pushing two items to the left (<code>margin("s", "auto")</code>).
            </p>
            <Example>
                <div style={[display("flex"), backgroundColor("secondary"), margin("b", 2)]}>
                    <div style={[padding(2), gridStyle]}>Flex item</div>
                    <div style={[padding(2), gridStyle]}>Flex item</div>
                    <div style={[padding(2), gridStyle]}>Flex item</div>
                </div>
                <div style={[display("flex"), backgroundColor("secondary"), margin("b", 2)]}>
                    <div style={[padding(2), margin("e", "auto"), gridStyle]}>Flex item</div>
                    <div style={[padding(2), gridStyle]}>Flex item</div>
                    <div style={[padding(2), gridStyle]}>Flex item</div>
                </div>
                <div style={[display("flex"), backgroundColor("secondary")]}>
                    <div style={[padding(2), gridStyle]}>Flex item</div>
                    <div style={[padding(2), gridStyle]}>Flex item</div>
                    <div style={[padding(2), margin("s", "auto"), gridStyle]}>Flex item</div>
                </div>
            </Example>
            <Code language="tsx">
                {`<div style={[display("flex"), backgroundColor("secondary"), margin("b", 2)]}>
    <div style={[padding(2), gridStyle]}>Flex item</div>
    <div style={[padding(2), gridStyle]}>Flex item</div>
    <div style={[padding(2), gridStyle]}>Flex item</div>
</div>
<div style={[display("flex"), backgroundColor("secondary"), margin("b", 2)]}>
    <div style={[padding(2), margin("e", "auto"), gridStyle]}>Flex item</div>
    <div style={[padding(2), gridStyle]}>Flex item</div>
    <div style={[padding(2), gridStyle]}>Flex item</div>
</div>
<div style={[display("flex"), backgroundColor("secondary")]}>
    <div style={[padding(2), gridStyle]}>Flex item</div>
    <div style={[padding(2), gridStyle]}>Flex item</div>
    <div style={[padding(2), margin("s", "auto"), gridStyle]}>Flex item</div>
</div>`}
            </Code>
            <Anchor name="flex-auto-margins-with-align-items">
                <h3>With align items</h3>
            </Anchor>
            <p>
                Vertically move one flex item to the top or bottom of a container by mixing <code>align-items</code>,{" "}
                <code>flex-direction: column</code>, and <code>margin-top: auto</code> or <code>margin-bottom: auto</code>.
            </p>
            <Example>
                <div
                    style={[
                        display("flex"),
                        alignItems("start"),
                        flex("column"),
                        backgroundColor("secondary"),
                        margin("b", 2),
                        h200pxStyle,
                    ]}
                >
                    <div style={[padding(2), margin("b", "auto"), gridStyle]}>Flex item</div>
                    <div style={[padding(2), gridStyle]}>Flex item</div>
                    <div style={[padding(2), gridStyle]}>Flex item</div>
                </div>
                <div style={[display("flex"), alignItems("end"), flex("column"), backgroundColor("secondary"), h200pxStyle]}>
                    <div style={[padding(2), gridStyle]}>Flex item</div>
                    <div style={[padding(2), gridStyle]}>Flex item</div>
                    <div style={[padding(2), margin("t", "auto"), gridStyle]}>Flex item</div>
                </div>
            </Example>
            <Code language="tsx">
                {`<div style={[display("flex"), alignItems("start"), flex("column"), backgroundColor("secondary"), margin("b", 2), h200pxStyle]}>
                    <div style={[padding(2), margin("b", "auto"), gridStyle]}>Flex item</div>
                    <div style={[padding(2), gridStyle]}>Flex item</div>
                    <div style={[padding(2), gridStyle]}>Flex item</div>
                </div>
                <div style={[display("flex"), alignItems("end"), flex("column"), backgroundColor("secondary"), h200pxStyle]}>
                    <div style={[padding(2), gridStyle]}>Flex item</div>
                    <div style={[padding(2), gridStyle]}>Flex item</div>
                    <div style={[padding(2), margin("t", "auto"), gridStyle]}>Flex item</div>
                </div>`}
            </Code>
            <Anchor name="flex-wrap">
                <h2>Wrap</h2>
            </Anchor>
            <p>
                Change how flex items wrap in a flex container. Choose from no wrapping at all (the browser default) with{" "}
                <code>flex("nowrap")</code>, wrapping with <code>flex("wrap")</code>, or reverse wrapping with{" "}
                <code>flex("wrap-reverse")</code>.
            </p>
            <p>
                Responsive variations also exist as <code>flex(value, breakpoint)</code>
            </p>
            <Example>
                <div style={[display("flex"), flex("nowrap"), backgroundColor("secondary"), width8remStyle]}>
                    <Items transparent count={5} />
                </div>
            </Example>
            <Code language="tsx">
                {`<div style={[display("flex"), flex("nowrap"), backgroundColor("secondary"), width8remStyle]}>
    <Items transparent count={5} />
</div>`}
            </Code>
            <Example>
                <div style={[display("flex"), flex("wrap"), backgroundColor("secondary")]}>
                    <Items count={15} />
                </div>
            </Example>
            <Code language="tsx">
                {`<div style={[display("flex"), flex("wrap"), backgroundColor("secondary")]}>
    <Items count={15} />
</div>`}
            </Code>
            <Example>
                <div style={[display("flex"), flex("wrap-reverse"), backgroundColor("secondary")]}>
                    <Items count={15} />
                </div>
            </Example>
            <Code language="tsx">
                {`<div style={[display("flex"), flex("wrap-reverse"), backgroundColor("secondary")]}>
    <Items count={15} />
</div>`}
            </Code>
            <Anchor name="flex-order">
                <h2>Order</h2>
            </Anchor>
            <p>
                Change the <em>visual</em> order of specific flex items with a handful of <code>order</code> utilities. We only provide
                options for making an item first or last, as well as a reset to use the DOM order. As <code>order</code> takes any integer
                value from 0 to 5, add custom style for any additional values needed.
            </p>

            <p>
                Responsive variations also exist as <code>order(value, breakpoint)</code>
            </p>
            <Example>
                <div style={[display("flex"), flex("nowrap"), backgroundColor("secondary")]}>
                    <div style={[order(3), padding(3), gridStyle]}>First flex item</div>
                    <div style={[order(2), padding(3), gridStyle]}>Second flex item</div>
                    <div style={[order(1), padding(3), gridStyle]}>Third flex item</div>
                </div>
            </Example>
            <Code language="tsx">{`<div style={[display("flex"), flex("nowrap"), backgroundColor("secondary")]}>
    <div style={[order(3), padding(3), gridStyle]}>First flex item</div>
    <div style={[order(2), padding(3), gridStyle]}>Second flex item</div>
    <div style={[order(1), padding(3), gridStyle]}>Third flex item</div>
</div>`}</Code>
            <Anchor name="flex-align-content">
                <h2>Align content</h2>
            </Anchor>
            <p>
                Use <code>alignContent</code> utilities on flexbox containers to align flex items <em>together</em> on the cross axis.
                Choose from <code>start</code> (browser default), <code>end</code>, <code>center</code>, <code>between</code>,{" "}
                <code>around</code>, or <code>stretch</code>. To demonstrate these utilities, we’ve enforced <code>flex-wrap: wrap</code>{" "}
                and increased the number of flex items.
            </p>
            <p>
                <strong>Heads up!</strong> This property has no effect on single rows of flex items.
            </p>

            <p>
                Responsive variations also exist as <code>alignContent(value, breakpoint)</code>
            </p>
            <Example>
                <div style={[display("flex"), flex("wrap"), alignContent("start"), backgroundColor("secondary"), h200pxStyle]}>
                    <Items count={15} />
                </div>
            </Example>
            <Code language="tsx">{`<div style={[display("flex"), flex("wrap"), alignContent("start"), backgroundColor("secondary"), h200pxStyle]}>
    <Items count={15} />
</div>`}</Code>
            <Example>
                <div style={[display("flex"), flex("wrap"), alignContent("end"), backgroundColor("secondary"), h200pxStyle]}>
                    <Items count={15} />
                </div>
            </Example>
            <Code language="tsx">{`<div style={[display("flex"), flex("wrap"), alignContent("end"), backgroundColor("secondary"), h200pxStyle]}>
    <Items count={15} />
</div>`}</Code>
            <Example>
                <div style={[display("flex"), flex("wrap"), alignContent("center"), backgroundColor("secondary"), h200pxStyle]}>
                    <Items count={15} />
                </div>
            </Example>
            <Code language="tsx">{`<div style={[display("flex"), flex("wrap"), alignContent("center"), backgroundColor("secondary"), h200pxStyle]}>
    <Items count={15} />
</div>`}</Code>
            <Example>
                <div style={[display("flex"), flex("wrap"), alignContent("between"), backgroundColor("secondary"), h200pxStyle]}>
                    <Items count={15} />
                </div>
            </Example>
            <Code language="tsx">{`<div style={[display("flex"), flex("wrap"), alignContent("between"), backgroundColor("secondary"), h200pxStyle]}>
    <Items count={15} />
</div>`}</Code>
            <Example>
                <div style={[display("flex"), flex("wrap"), alignContent("around"), backgroundColor("secondary"), h200pxStyle]}>
                    <Items count={15} />
                </div>
            </Example>
            <Code language="tsx">{`<div style={[display("flex"), flex("wrap"), alignContent("around"), backgroundColor("secondary"), h200pxStyle]}>
    <Items count={15} />
</div>`}</Code>
            <Example>
                <div style={[display("flex"), flex("wrap"), alignContent("stretch"), backgroundColor("secondary"), h200pxStyle]}>
                    <Items count={15} />
                </div>
            </Example>
            <Code language="tsx">{`<div style={[display("flex"), flex("wrap"), alignContent("stretch"), backgroundColor("secondary"), h200pxStyle]}>
    <Items count={15} />
</div>`}</Code>
        </>
    );
}

function Items({ count, transparent }: { count: number; transparent?: boolean }): b.IBobrilNode {
    return (
        <>
            {Array.from({ length: count }).map((_val, index) => (
                <div style={[padding(2), gridStyle, transparent && backgroundColor("transparent")]}>Flex item {index + 1}</div>
            ))}
        </>
    );
}

const h100pxStyle = b.styleDef({ height: 100 });
const h200pxStyle = b.styleDef({ height: 200 });
const width8remStyle = b.styleDef({ width: "8rem" });

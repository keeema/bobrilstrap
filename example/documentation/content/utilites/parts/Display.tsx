import * as b from "bobril";
import { IRouteWithNavDefinition } from "../../../../common/routing";
import { Anchor } from "../../../../common/Anchor";
import { Example } from "../../../../common/Example";
import { backgroundColor, display, displayPrint, padding, Table, textColor } from "../../../../../index";
import { Code } from "../../../../common/Code";
import { Lead } from "../../../../common/Lead";

export const displayRoute: IRouteWithNavDefinition = {
    url: "display",
    name: "display",
    label: "Display",
    handler: () => <DisplayDoc />,
    subs: [
        {
            url: "how-it-works",
            name: "display-how-it-works",
            label: "How it works",
            subs: [],
        },
        {
            url: "notation",
            name: "display-notation",
            label: "Notation",
            subs: [],
        },
        {
            url: "examples",
            name: "display-examples",
            label: "Examples",
            subs: [],
        },
        {
            url: "hiding-elements",
            name: "display-hiding-elements",
            label: "Hiding elements",
            subs: [],
        },
        {
            url: "print",
            name: "display-print",
            label: "Display in print",
            subs: [],
        },
    ],
};

export function DisplayDoc(): b.IBobrilNode {
    return (
        <>
            <Anchor name="display">
                <h1>Display</h1>
            </Anchor>
            <Lead>
                Quickly and responsively toggle the display value of components and more with our display utilities. Includes support for
                some of the more common values, as well as some extras for controlling display when printing.
            </Lead>
            <Anchor name="display-how-it-works">
                <h2>How it works</h2>
            </Anchor>
            <p>
                Change the value of the{" "}
                <a href="https://developer.mozilla.org/en-US/docs/Web/CSS/display">
                    <code>display</code> property
                </a>{" "}
                with our responsive display utility. We purposely support only a subset of all possible values for <code>display</code>.
                Styles can be combined for various effects as you need.
            </p>
            <Anchor name="display-notation">
                <h2>Notation</h2>
            </Anchor>
            <p>
                Display utilities that apply to all <a href="/docs/5.0/layout/breakpoints/">breakpoints</a>, from <code>xs</code> to{" "}
                <code>xxl</code>, have no breakpoint abbreviation in them. This is because those styles are applied from{" "}
                <code>min-width: 0;</code> and up, and thus are not bound by a media query. The remaining breakpoints, however, do include a
                breakpoint abbreviation.
            </p>
            <p>As such, the utility is called using the format:</p>
            <ul>
                <li>
                    <code>display(value)</code> for <code>xs</code>
                </li>
                <li>
                    <code>display(value, breakpoint)</code> for <code>sm</code>, <code>md</code>, <code>lg</code>, <code>xl</code>, and{" "}
                    <code>xxl</code>.
                </li>
            </ul>
            <p>
                Where <em>value</em> is one of:
            </p>
            <ul>
                <li>
                    <code>none</code>
                </li>
                <li>
                    <code>inline</code>
                </li>
                <li>
                    <code>inline-block</code>
                </li>
                <li>
                    <code>block</code>
                </li>
                <li>
                    <code>grid</code>
                </li>
                <li>
                    <code>table</code>
                </li>
                <li>
                    <code>table-cell</code>
                </li>
                <li>
                    <code>table-row</code>
                </li>
                <li>
                    <code>flex</code>
                </li>
                <li>
                    <code>inline-flex</code>
                </li>
            </ul>
            <p>
                The media queries affect screen widths with the given breakpoint <em>or larger</em>. For example,{" "}
                <code>display("none", "lg")</code> sets <code>display: none;</code> on <code>lg</code>, <code>xl</code>, and{" "}
                <code>xxl</code> screens.
            </p>
            <Anchor name="display-examples">
                <h2>Examples</h2>
            </Anchor>
            <Example>
                <div style={[display("inline"), padding(2), backgroundColor("primary"), textColor("white")]}>d-inline</div>
                <div style={[display("inline"), padding(2), backgroundColor("dark"), textColor("white")]}>d-inline</div>
            </Example>
            <Code language="tsx">{`<div style={[display("inline"), padding(2), backgroundColor("primary"), textColor("white")]}>d-inline</div>
<div style={[display("inline"), padding(2), backgroundColor("dark"), textColor("white")]}>d-inline</div>`}</Code>
            <Example>
                <div style={[display("block"), padding(2), backgroundColor("primary"), textColor("white")]}>d-inline</div>
                <div style={[display("block"), padding(2), backgroundColor("dark"), textColor("white")]}>d-inline</div>
            </Example>
            <Code language="tsx">{`<div style={[display("block"), padding(2), backgroundColor("primary"), textColor("white")]}>d-inline</div>
<div style={[display("block"), padding(2), backgroundColor("dark"), textColor("white")]}>d-inline</div>`}</Code>
            <Anchor name="display-hiding-elements">
                <h2>Hiding elements</h2>
            </Anchor>
            <p>
                For faster mobile-friendly development, use responsive display utilities for showing and hiding elements by device. Avoid
                creating entirely different versions of the same site, instead hide elements responsively for each screen size.
            </p>
            <p>
                To hide elements simply use the <code>display("none")</code> or one of the{" "}
                <code>display("none", "(sm, md, lg, xl, xxl)")</code> for any responsive screen variation.
            </p>
            <p>
                To show an element only on a given interval of screen sizes you can combine one <code>display("none", *)</code> with a{" "}
                <code>display(*, *)</code>, for example{" "}
                <code>[display("none"), display("block", "md"), display("none", "xl"), display("none", "xxl")]</code> will hide the element
                for all screen sizes except on medium and large devices.
            </p>
            <Table>
                <thead>
                    <tr>
                        <th>Screen size</th>
                        <th>Utility</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Hidden on all</td>
                        <td>
                            <code>display("none")</code>
                        </td>
                    </tr>
                    <tr>
                        <td>Hidden only on xs</td>
                        <td>
                            <code>display("none"), display("block", "sm")</code>
                        </td>
                    </tr>
                    <tr>
                        <td>Hidden only on sm</td>
                        <td>
                            <code>display("none", "sm"), display("block", "md")</code>
                        </td>
                    </tr>
                    <tr>
                        <td>Hidden only on md</td>
                        <td>
                            <code>display("none", "md"), display("block", "lg")</code>
                        </td>
                    </tr>
                    <tr>
                        <td>Hidden only on lg</td>
                        <td>
                            <code>display("none", "lg"), display("block", "xl")</code>
                        </td>
                    </tr>
                    <tr>
                        <td>Hidden only on xl</td>
                        <td>
                            <code>display("none", "xl")</code>
                        </td>
                    </tr>
                    <tr>
                        <td>Hidden only on xxl</td>
                        <td>
                            <code>display("none", "xxl")</code>
                        </td>
                    </tr>
                    <tr>
                        <td>Visible on all</td>
                        <td>
                            <code>display("block")</code>
                        </td>
                    </tr>
                    <tr>
                        <td>Visible only on xs</td>
                        <td>
                            <code>display("block"), display("none", "sm")</code>
                        </td>
                    </tr>
                    <tr>
                        <td>Visible only on sm</td>
                        <td>
                            <code>display("none"), display("block", "sm"), display("none", "md")</code>
                        </td>
                    </tr>
                    <tr>
                        <td>Visible only on md</td>
                        <td>
                            <code>display("none"), display("block", "md"), display("none", "lg")</code>
                        </td>
                    </tr>
                    <tr>
                        <td>Visible only on lg</td>
                        <td>
                            <code>display("none"), display("block", "lg"), display("none", "xl")</code>
                        </td>
                    </tr>
                    <tr>
                        <td>Visible only on xl</td>
                        <td>
                            <code>display("none"), display("block", "xl"), display("none", "xxl")</code>
                        </td>
                    </tr>
                    <tr>
                        <td>Visible only on xxl</td>
                        <td>
                            <code>display("none"), display("block", "xxl")</code>
                        </td>
                    </tr>
                </tbody>
            </Table>
            <Example>
                <div style={display("none", "lg")}>hide on lg and wider screens</div>
                <div style={[display("none"), display("block", "lg")]}>hide on screens smaller than lg</div>
            </Example>
            <Code language="tsx">{`<div style={display("none", "lg")}>hide on lg and wider screens</div>
<div style={[display("none"), display("block", "lg")]}>hide on screens smaller than lg</div>`}</Code>
            <Anchor name="display-print">
                <h2>Display in print</h2>
            </Anchor>
            <p>
                Change the <code>display</code> value of elements when printing with <code>displayPrint</code> utility. Includes support for
                the same <code>display</code> values as our responsive <code>display</code> utility.
            </p>
            <Example>
                <div style={displayPrint("none")}>Screen Only (Hide on print only)</div>
                <div style={[display("none"), displayPrint("block")]}>Print Only (Hide on screen only)</div>
                <div style={[display("none"), display("block", "lg"), displayPrint("block")]}>
                    Hide up to large on screen, but always show on print
                </div>
            </Example>
            <Code language="tsx">{`<div style={displayPrint("none")}>Screen Only (Hide on print only)</div>
<div style={[display("none"), displayPrint("block")]}>Print Only (Hide on screen only)</div>
<div style={[display("none"), display("block", "lg"), displayPrint("block")]}>
    Hide up to large on screen, but always show on print
</div>`}</Code>
        </>
    );
}

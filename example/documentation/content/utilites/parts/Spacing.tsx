import * as b from "bobril";
import { IRouteWithNavDefinition } from "../../../../common/routing";
import { Anchor } from "../../../../common/Anchor";
import { Example } from "../../../../common/Example";
import { border, margin, display, gap, padding, backgroundColor } from "../../../../../index";
import { Code } from "../../../../common/Code";
import { Lead } from "../../../../common/Lead";

export const spacingRoute: IRouteWithNavDefinition = {
    url: "spacing",
    name: "spacing",
    label: "Spacing",
    handler: () => <SpacingDoc />,
    subs: [
        {
            url: "margin-and-padding",
            name: "spacing-margin-and-padding",
            label: "Margin and padding",
            subs: [
                {
                    url: "notation",
                    name: "spacing-margin-and-padding-notation",
                    label: "Notation",
                    subs: [],
                },
                {
                    url: "horizontal-centering",
                    name: "spacing-margin-and-padding-horizontal-centering",
                    label: "Horizontal centering",
                    subs: [],
                },
            ],
        },
        {
            url: "gap",
            name: "spacing-gap",
            label: "Gap",
            subs: [],
        },
    ],
};

export function SpacingDoc(): b.IBobrilNode {
    return (
        <>
            <Anchor name="spacing">
                <h1>Spacing</h1>
            </Anchor>
            <Lead>Wide range of shorthand responsive margin, padding, and gap utilities to modify an element’s appearance.</Lead>
            <Anchor name="spacing-margin-and-padding">
                <h2>Margin and padding</h2>
            </Anchor>
            <p>
                Assign responsive-friendly <code>margin</code> or <code>padding</code> values to a component or a subset of its sides with
                shorthand utilities. Includes support for individual properties, all properties, and vertical and horizontal properties.
                Utilities are built from a default map ranging from <code>.25rem</code> to <code>3rem</code>.
            </p>
            <p>Using the Grid layout? Consider using the gap utility.</p>
            <Anchor name="spacing-margin-and-padding-notation">
                <h3>Notation</h3>
            </Anchor>
            <p>
                Spacing utilities that apply to all breakpoints, from <code>xs</code> to <code>xxl</code>, have no breakpoint abbreviation
                in them. This is because those classes are applied from <code>min-width: 0</code> and up, and thus are not bound by a media
                query. The remaining breakpoints, however, do include a breakpoint abbreviation.
            </p>
            <p>
                The utility functions are named using the format <code>{`{property}("{sides}", {size})`}</code> for <code>xs</code> and{" "}
                <code>{`{property}("{sides}", {size}, {breakpoint})`}</code> for <code>sm</code>, <code>md</code>, <code>lg</code>,{" "}
                <code>xl</code>, and <code>xxl</code>.
            </p>
            <p>
                Where <em>property</em> is one of:
            </p>
            <ul>
                <li>
                    <code>margin</code> - for styles that set <code>margin</code>
                </li>
                <li>
                    <code>padding</code> - for styles that set <code>padding</code>
                </li>
            </ul>
            <p>
                Where <em>sides</em> is one of:
            </p>
            <ul>
                <li>
                    <code>t</code> - for styles that set <code>margin-top</code> or <code>padding-top</code>
                </li>
                <li>
                    <code>b</code> - for styles that set <code>margin-bottom</code> or <code>padding-bottom</code>
                </li>
                <li>
                    <code>s</code> - for styles that set <code>margin-left</code> or <code>padding-left</code> in LTR,{" "}
                    <code>margin-right</code> or <code>padding-right</code> in RTL
                </li>
                <li>
                    <code>e</code> - for styles that set <code>margin-right</code> or <code>padding-right</code> in LTR,{" "}
                    <code>margin-left</code> or <code>padding-left</code> in RTL
                </li>
                <li>
                    <code>x</code> - for styles that set both <code>*-left</code> and <code>*-right</code>
                </li>
                <li>
                    <code>y</code> - for styles that set both <code>*-top</code> and <code>*-bottom</code>
                </li>
                <li>
                    blank - for styles that set a <code>margin</code> or <code>padding</code> on all 4 sides of the element
                </li>
            </ul>
            <p>
                Where <em>size</em> is one of:
            </p>
            <ul>
                <li>
                    <code>0</code> - for styles that eliminate the <code>margin</code> or <code>padding</code> by setting it to{" "}
                    <code>0</code>
                </li>
                <li>
                    <code>1</code> - (by default) for styles that set the <code>margin</code> or <code>padding</code> to{" "}
                    <code>$spacer * .25</code>
                </li>
                <li>
                    <code>2</code> - (by default) for styles that set the <code>margin</code> or <code>padding</code> to{" "}
                    <code>$spacer * .5</code>
                </li>
                <li>
                    <code>3</code> - (by default) for styles that set the <code>margin</code> or <code>padding</code> to{" "}
                    <code>$spacer</code>
                </li>
                <li>
                    <code>4</code> - (by default) for styles that set the <code>margin</code> or <code>padding</code> to{" "}
                    <code>$spacer * 1.5</code>
                </li>
                <li>
                    <code>5</code> - (by default) for styles that set the <code>margin</code> or <code>padding</code> to{" "}
                    <code>$spacer * 3</code>
                </li>
                <li>
                    <code>auto</code> - for styles that set the <code>margin</code> to auto
                </li>
            </ul>
            <Anchor name="spacing-margin-and-padding-horizontal-centering">
                <h3>Horizontal centering</h3>
            </Anchor>
            <p>
                Additionally, spacing also includes an <code>margin("x", "auto")</code> utility for horizontally centering fixed-width block
                level content—that is, content that has <code>display: block</code> and a <code>width</code> set—by setting the horizontal
                margins to <code>auto</code>.
            </p>
            <Example>
                <div style={[margin("x", "auto"), padding(2), backgroundColor("light"), border(), { width: 200 }]}>Centered element</div>
            </Example>
            <Code language="tsx">{`<div style={[margin("x", "auto"), padding(2), backgroundColor("light"), border(), { width: 200 }]}>Centered element</div>`}</Code>
            <Anchor name="spacing-gap">
                <h2>Gap</h2>
            </Anchor>
            <p>
                When using <code>display: grid</code>, you can make use of <code>gap</code> utilities on the parent grid container. This can
                save on having to add margin utilities to individual grid items (children of a <code>display: grid</code> container). Gap
                utilities are responsive by default.
            </p>
            <Example>
                <div style={[display("grid"), gap(3)]}>
                    <div style={[padding(2), backgroundColor("light"), border()]}>Grid item 1</div>
                    <div style={[padding(2), backgroundColor("light"), border()]}>Grid item 2</div>
                    <div style={[padding(2), backgroundColor("light"), border()]}>Grid item 3</div>
                </div>
            </Example>
            <Code language="tsx">{`<div style={[display("grid"), gap(3)]}>
            <div style={[padding(2), backgroundColor("light"), border()]}>Grid item 1</div>
            <div style={[padding(2), backgroundColor("light"), border()]}>Grid item 2</div>
            <div style={[padding(2), backgroundColor("light"), border()]}>Grid item 3</div>
        </div>`}</Code>
            <p>
                Support includes responsive options for all of Bootstrap’s grid breakpoints, as well as six sizes from the map (
                <code>0</code>–<code>5</code>). There is no <code>.gap-auto</code> utility as it’s effectively the same as{" "}
                <code>.gap-0</code>.
            </p>
        </>
    );
}

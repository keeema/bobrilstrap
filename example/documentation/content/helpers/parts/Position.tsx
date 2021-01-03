import * as b from "bobril";
import { IRouteWithNavDefinition } from "../../../../common/routing";
import { Anchor } from "../../../../common/Anchor";
import { breakpoints } from "../../../../../index";
import { Code } from "../../../../common/Code";
import { Lead } from "../../../../common/Lead";

export const positionHelperRoute: IRouteWithNavDefinition = {
    url: "position-helper",
    name: "position-helper",
    label: "Position helper",
    handler: () => <PositionHelperDoc />,
    subs: [
        {
            url: "fixed-top",
            name: "position-helper-fixed-top",
            label: "Fixed top",
            subs: [],
        },
        {
            url: "fixed-bottom",
            name: "position-helper-fixed-bottom",
            label: "Fixed bottom",
            subs: [],
        },
        {
            url: "sticky-top",
            name: "position-helper-sticky-top",
            label: "Sticky top",
            subs: [],
        },
        {
            url: "responsive-sticky-top",
            name: "position-helper-responsive-sticky-top",
            label: "Responsive sticky top",
            subs: [],
        },
    ],
};

export function PositionHelperDoc(): b.IBobrilNode {
    return (
        <>
            <Anchor name="position-helper">
                <h1>Position helper</h1>
            </Anchor>
            <Lead>Use these helpers for quickly configuring the position of an element.</Lead>
            <Anchor name="position-helper-fixed-top">
                <h2>Fixed top</h2>
            </Anchor>
            <p>
                Position an element at the top of the viewport, from edge to edge. Be sure you understand the ramifications of fixed
                position in your project; you may need to add additional styles.
            </p>
            <Code language="tsx">{`<div style={position("fixed-top")}>...</div>`}</Code>
            <Anchor name="position-helper-fixed-bottom">
                <h2>Fixed bottom</h2>
            </Anchor>
            <p>
                Position an element at the bottom of the viewport, from edge to edge. Be sure you understand the ramifications of fixed
                position in your project; you may need to add additional CSS.
            </p>
            <Code language="tsx">{`<div style={position("fixed-bottom")}>...</div>`}</Code>
            <Anchor name="position-helper-sticky-top">
                <h2>Sticky top</h2>
            </Anchor>
            <p>
                Position an element at the top of the viewport, from edge to edge, but only after you scroll past it. It uses CSS’s{" "}
                <code>position: sticky</code>, which isn’t fully supported in all browsers.
            </p>
            <Code language="tsx">{`<div style={position("sticky-top")}>...</div>`}</Code>
            <Anchor name="position-helper-responsive-sticky-top">
                <h2>Responsive sticky top</h2>
            </Anchor>
            <p>Responsive variations also exist.</p>
            <Code language="tsx">
                {breakpoints.map((breakpoint) => `<div style={position("sticky-top", "${breakpoint}")}>...</div>\n`)}
            </Code>
        </>
    );
}

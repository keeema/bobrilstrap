import * as b from "bobril";
import { IRouteWithNavDefinition } from "../../../../common/routing";
import { Anchor } from "../../../../common/Anchor";
import { Example } from "../../../../common/Example";
import { float } from "../../../../../index";
import { Code } from "../../../../common/Code";
import { Lead } from "../../../../common/Lead";

export const floatRoute: IRouteWithNavDefinition = {
    url: "float",
    name: "float",
    label: "Float",
    handler: () => <FloatDoc />,
    subs: [
        {
            url: "overview",
            name: "float-overview",
            label: "Overview",
            subs: [],
        },
        {
            url: "responsive",
            name: "float-responsive",
            label: "Responsive",
            subs: [],
        },
    ],
};

export function FloatDoc(): b.IBobrilNode {
    return (
        <>
            <Anchor name="float">
                <h1>Float</h1>
            </Anchor>
            <Lead>Toggle floats on any element, across any breakpoint, using our responsive float utilities.</Lead>
            <Anchor name="float-overview">
                <h2>Examples</h2>
            </Anchor>
            <p>
                These utility float an element to the left or right, or disable floating, based on the current viewport size using the{" "}
                <a href="https://developer.mozilla.org/en-US/docs/Web/CSS/float">
                    CSS <code>float</code> property
                </a>
                . <code>!important</code> is included to avoid specificity issues. These use the same viewport breakpoints as our grid
                system. Please be aware float utilities have no effect on flex items.
            </p>
            <Example>
                <div style={float("start")}>Float start on all viewport sizes</div>
                <br />
                <div style={float("end")}>Float end on all viewport sizes</div>
                <br />
                <div style={float("none")}>Don't float on all viewport sizes</div>
            </Example>
            <Code language="tsx">{`<div style={float("start")}>Float start on all viewport sizes</div>
<br />
<div style={float("end")}>Float end on all viewport sizes</div>
<br />
<div style={float("none")}>Don't float on all viewport sizes</div>`}</Code>
            <Anchor name="float-responsive">
                <h2>Responsive</h2>
            </Anchor>
            <p>
                Responsive variations also exist for each <code>float</code> value.
            </p>
            <Example>
                <div style={float("start", "sm")}>Float start on viewports sized SM (small) or wider</div>
                <br />
                <div style={float("start", "md")}>Float start on viewports sized MD (medium) or wider</div>
                <br />
                <div style={float("start", "lg")}>Float start on viewports sized LG (large) or wider</div>
                <br />
                <div style={float("start", "xl")}>Float start on viewports sized XL (extra-large) or wider</div>
                <br />
            </Example>
            <Code language="tsx">{`<div style={float("start")}>Float start on all viewport sizes</div>
<br />
<div style={float("end")}>Float end on all viewport sizes</div>
<br />
<div style={float("none")}>Don't float on all viewport sizes</div>`}</Code>
        </>
    );
}

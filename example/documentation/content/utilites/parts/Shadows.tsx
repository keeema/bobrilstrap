import * as b from "bobril";
import { IRouteWithNavDefinition } from "../../../../common/routing";
import { Anchor } from "../../../../common/Anchor";
import { Example } from "../../../../common/Example";
import { backgroundColor, margin, padding, rounded } from "../../../../../index";
import { Code } from "../../../../common/Code";
import { Lead } from "../../../../common/Lead";
import { shadow } from "../../../../../src/utilities/shadow";

export const shadowsRoute: IRouteWithNavDefinition = {
    url: "shadows",
    name: "shadows",
    label: "Shadows",
    handler: () => <ShadowsDoc />,
    subs: [
        {
            url: "examples",
            name: "shadows-examples",
            label: "Examples",
            subs: [],
        },
    ],
};

export function ShadowsDoc(): b.IBobrilNode {
    return (
        <>
            <Anchor name="shadows">
                <h1>Shadows</h1>
            </Anchor>
            <Lead>Add or remove shadows to elements with box-shadow utilities.</Lead>
            <Anchor name="shadows-examples">
                <h2>Examples</h2>
            </Anchor>
            <p>
                While shadows on components are disabled by default in Bootstrap and can be enabled via <code>$enable-shadows</code>, you
                can also quickly add or remove a shadow with our <code>box-shadow</code> utility classes. Includes support for{" "}
                <code>.shadow-none</code> and three default sizes (which have associated variables to match).
            </p>
            <Example>
                <div style={[shadow("none"), padding(3), margin("b", 5), backgroundColor("light"), rounded()]}>No shadow</div>
                <div style={[shadow("sm"), padding(3), margin("b", 5), backgroundColor("white"), rounded()]}>Small shadow</div>
                <div style={[shadow(), padding(3), margin("b", 5), backgroundColor("white"), rounded()]}>Regular shadow</div>
                <div style={[shadow("lg"), padding(3), margin("b", 5), backgroundColor("white"), rounded()]}>Larger shadow</div>
            </Example>
            <Code language="tsx">{`<div style={[shadow("none"), padding(3), margin("b", 5), backgroundColor("light"), rounded()]}>No shadow</div>
<div style={[shadow("sm"), padding(3), margin("b", 5), backgroundColor("white"), rounded()]}>Small shadow</div>
<div style={[shadow(), padding(3), margin("b", 5), backgroundColor("white"), rounded()]}>Regular shadow</div>
<div style={[shadow("lg"), padding(3), margin("b", 5), backgroundColor("white"), rounded()]}>Larger shadow</div>`}</Code>
        </>
    );
}

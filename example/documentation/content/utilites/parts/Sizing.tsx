import * as b from "bobril";
import { IRouteWithNavDefinition } from "../../../../common/routing";
import { Anchor } from "../../../../common/Anchor";
import { Example } from "../../../../common/Example";
import { backgroundColor, display, padding, width, height, margin } from "../../../../../index";
import { Code } from "../../../../common/Code";
import { Lead } from "../../../../common/Lead";

export const sizingRoute: IRouteWithNavDefinition = {
    url: "sizing",
    name: "sizing",
    label: "Sizing",
    handler: () => <SizingDoc />,
    subs: [
        {
            url: "relative-to-parent",
            name: "sizing-relative-to-parent",
            label: "Relative to parent",
            subs: [],
        },
        {
            url: "relative-to-viewport",
            name: "sizing-relative-to-viewport",
            label: "Relative to viewport",
            subs: [],
        },
    ],
};

export function SizingDoc(): b.IBobrilNode {
    return (
        <>
            <Anchor name="sizing">
                <h1>Sizing</h1>
            </Anchor>
            <Lead>Easily make an element as wide or as tall with our width and height utilities.</Lead>
            <Anchor name="sizing-relative-to-parent">
                <h2>Relative to parent</h2>
            </Anchor>
            <p>
                Width and height utilities are generated from the utility API. Includes support for <code>25%</code>, <code>50%</code>,{" "}
                <code>75%</code>, <code>100%</code>, and <code>auto</code> by default.
            </p>
            <Example>
                <div style={[width(25), padding(3), backgroundColor("secondary")]}>Width 25%</div>
                <div style={[width(50), padding(3), backgroundColor("secondary")]}>Width 50%</div>
                <div style={[width(75), padding(3), backgroundColor("secondary")]}>Width 75%</div>
                <div style={[width(100), padding(3), backgroundColor("secondary")]}>Width 100%</div>
                <div style={[width("auto"), padding(3), backgroundColor("secondary")]}>Width auto</div>
            </Example>
            <Code language="tsx">{`<div style={[width(25), padding(3), backgroundColor("secondary")]}>Width 25%</div>
<div style={[width(50), padding(3), backgroundColor("secondary")]}>Width 50%</div>
<div style={[width(75), padding(3), backgroundColor("secondary")]}>Width 75%</div>
<div style={[width(100), padding(3), backgroundColor("secondary")]}>Width 100%</div>
<div style={[width("auto"), padding(3), backgroundColor("secondary")]}>Width auto</div>`}</Code>
            <Example>
                <div style={h100pxStyle}>
                    <div style={[height(25), display("inline-block"), margin("x", 1), w120pxStyle, backgroundColor("secondary")]}>
                        Height 25%
                    </div>
                    <div style={[height(50), display("inline-block"), margin("x", 1), w120pxStyle, backgroundColor("secondary")]}>
                        Height 50%
                    </div>
                    <div style={[height(75), display("inline-block"), margin("x", 1), w120pxStyle, backgroundColor("secondary")]}>
                        Height 75%
                    </div>
                    <div style={[height(100), display("inline-block"), margin("x", 1), w120pxStyle, backgroundColor("secondary")]}>
                        Height 100%
                    </div>
                    <div style={[height("auto"), display("inline-block"), margin("x", 1), w120pxStyle, backgroundColor("secondary")]}>
                        Height auto
                    </div>
                </div>
            </Example>
            <Code language="tsx">{`<div style={[width(25), padding(3), backgroundColor("secondary")]}>Width 25%</div>
<div style={[width(50), padding(3), backgroundColor("secondary")]}>Width 50%</div>
<div style={[width(75), padding(3), backgroundColor("secondary")]}>Width 75%</div>
<div style={[width(100), padding(3), backgroundColor("secondary")]}>Width 100%</div>
<div style={[width("auto"), padding(3), backgroundColor("secondary")]}>Width auto</div>`}</Code>
            <Anchor name="sizing-relative-to-viewport">
                <h2>Relative to viewport</h2>
            </Anchor>
            <p>You can also use utilities to set the width and height relative to the viewport.</p>
            <Code language="tsx">
                {`<div style={widthToViewport(100)}>Width 100vw</div>
<div style={heightToViewport(100)}>Height 100vh</div>`}
            </Code>
        </>
    );
}

const h100pxStyle = b.styleDef({ height: 100 });
const w120pxStyle = b.styleDef({ width: 120 });

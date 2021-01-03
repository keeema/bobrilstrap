import * as b from "bobril";
import { IRouteWithNavDefinition } from "../../../../common/routing";
import { Anchor } from "../../../../common/Anchor";
import { Example } from "../../../../common/Example";
import { ratio, ratioScale } from "../../../../../index";
import { Code } from "../../../../common/Code";
import { Lead } from "../../../../common/Lead";
import { gridStyle } from "../../../../common/styles";

export const ratioRoute: IRouteWithNavDefinition = {
    url: "ratio",
    name: "ratio",
    label: "Ratio",
    handler: () => <RatioDoc />,
    subs: [
        {
            url: "about",
            name: "ratio-about",
            label: "About",
            subs: [],
        },
        {
            url: "example",
            name: "ratio-example",
            label: "Example",
            subs: [],
        },
        {
            url: "aspect-ratios",
            name: "ratio-aspect-ratios",
            label: "Aspect ratios",
            subs: [],
        },
        {
            url: "custom-ratio",
            name: "ratio-custom-ratio",
            label: "Custom ratio",
            subs: [],
        },
    ],
};

export function RatioDoc(): b.IBobrilNode {
    return (
        <>
            <Anchor name="ratio">
                <h1>Ratio</h1>
            </Anchor>
            <Lead>
                Use generated pseudo elements to make an element maintain the aspect ratio of your choosing. Perfect for responsively
                handling video or slideshow embeds based on the width of the parent.
            </Lead>
            <Anchor name="ratio-about">
                <h2>About</h2>
            </Anchor>
            <p>
                Use the ratio helper to manage the aspect ratios of external content like <code>&lt;iframe&gt;</code>s,{" "}
                <code>&lt;embed&gt;</code>s, <code>&lt;video&gt;</code>s, and <code>&lt;object&gt;</code>s. These helpers also can be used
                on any standard HTML child element (e.g., a <code>&lt;div&gt;</code> or <code>&lt;img&gt;</code>). Styles are applied from
                the parent <code>ratio</code> style directly to the child.
            </p>
            <Anchor name="ratio-example">
                <h2>Example</h2>
            </Anchor>
            <p>
                Wrap any embed, like an <code>&lt;iframe&gt;</code>, in a parent element with <code>ratio</code> style and an aspect ratio
                utility. The immediate child element is automatically sized thanks to universal style <code>ratio-*</code>.
            </p>
            <Example>
                <div style={ratio("16x9")}>
                    <iframe src="https://www.youtube.com/embed/zpOULjyy-n8?rel=0" title="YouTube video" allowfullscreen></iframe>
                </div>
            </Example>
            <Code language="tsx">{`<div style={ratio("16x9")}>
    <iframe src="https://www.youtube.com/embed/zpOULjyy-n8?rel=0" title="YouTube video" allowfullscreen></iframe>
</div>`}</Code>
            <Anchor name="ratio-aspect-ratios">
                <h2>Aspect ratios</h2>
            </Anchor>
            <p>Aspect ratios can be customized with modifier utilities. By default the following ratio utilities are provided: </p>
            <Example>
                {ratioScale.map((scale) => (
                    <>
                        <div style={[ratio(scale), gridStyle, ratioBoxStyle]}>
                            <div style={ratioContentStyle}>{scale}</div>
                        </div>{" "}
                    </>
                ))}
            </Example>
            <Code language="tsx">
                {ratioScale.map(
                    (scale) =>
                        `<div style={ratio("${scale}")}>
    <div>${scale}</div>
</div>\n`
                )}
            </Code>
            <Anchor name="ratio-custom-ratio">
                <h2>Custom ratio</h2>
            </Anchor>
            <p>You can override this CSS variable to create custom aspect ratios on the fly with some quick math on your part.</p>
            <Example>
                <div style={[ratio(), customRatioStyle, gridStyle, ratioBoxStyle]}>
                    <div style={ratioContentStyle}>2x1</div>
                </div>
            </Example>
            <Code language="tsx">
                {`const customRatioStyle = b.styleDef({ "--aspect-ratio": "50%" });

<div style={[ratio(), customRatioStyle]}>
    <div>2x1</div>
</div>`}
            </Code>
        </>
    );
}

const customRatioStyle = b.styleDef({ "--aspect-ratio": "50%" });

const ratioContentStyle = b.styleDef({
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
});

const ratioBoxStyle = b.styleDef({ display: "inline-block", width: "10rem" });

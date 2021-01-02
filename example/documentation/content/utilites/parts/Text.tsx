import * as b from "bobril";
import { IRouteWithNavDefinition } from "../../../../common/routing";
import { Anchor } from "../../../../common/Anchor";
import { Example } from "../../../../common/Example";
import {
    backgroundColor,
    Badge,
    border,
    fontSizes,
    text,
    textAlign,
    fontMonospace,
    fontSize,
    fontStyle,
    fontStyles,
    fontWeight,
    fontWeights,
    lineHeight,
    lineHeights,
    textColor,
    textDecoration,
} from "../../../../../index";
import { Code } from "../../../../common/Code";
import { Lead } from "../../../../common/Lead";

export const textRoute: IRouteWithNavDefinition = {
    url: "text",
    name: "text",
    label: "Text",
    handler: () => <TextDoc />,
    subs: [
        {
            url: "text-alignment",
            name: "text-text-alignment",
            label: "Text alignment",
            subs: [],
        },
        {
            url: "text-wrapping-and-overflow",
            name: "text-text-wrapping-and-overflow",
            label: "Text wrapping and overflow",
            subs: [],
        },
        {
            url: "word-break",
            name: "text-word-break",
            label: "Word break",
            subs: [],
        },
        {
            url: "text-transform",
            name: "text-text-transform",
            label: "Text transform",
            subs: [],
        },
        {
            url: "font-size",
            name: "text-font-size",
            label: "Font size",
            subs: [],
        },
        {
            url: "font-weight-and-italics",
            name: "text-font-weight-and-italics",
            label: "Font weight and italics",
            subs: [],
        },
        {
            url: "line-height",
            name: "text-line-height",
            label: "Line height",
            subs: [],
        },
        {
            url: "monospace",
            name: "text-monospace",
            label: "Monospace",
            subs: [],
        },
        {
            url: "reset-color",
            name: "text-reset-color",
            label: "Reset color",
            subs: [],
        },
        {
            url: "text-decoration",
            name: "text-text-decoration",
            label: "Text decoration",
            subs: [],
        },
    ],
};

export function TextDoc(): b.IBobrilNode {
    return (
        <>
            <Anchor name="text">
                <h1>Text</h1>
            </Anchor>
            <Lead>Documentation and examples for common text utilities to control alignment, wrapping, weight, and more.</Lead>
            <Anchor name="text-text-alignment">
                <h2>Text alignment</h2>
            </Anchor>
            <p>
                Easily realign text to components with text alignment classes. For start, end, and center alignment, responsive classes are
                available that use the same viewport width breakpoints as the grid system.
            </p>
            <Example>
                <p style={textAlign("start")}>Start aligned text on all viewport sizes.</p>
                <p style={textAlign("center")}>Center aligned text on all viewport sizes.</p>
                <p style={textAlign("end")}>End aligned text on all viewport sizes.</p>

                <p style={textAlign("end", "sm")}>End aligned text on viewports sized SM (small) or wider.</p>
                <p style={textAlign("end", "md")}>End aligned text on viewports sized MD (medium) or wider.</p>
                <p style={textAlign("end", "lg")}>End aligned text on viewports sized LG (large) or wider.</p>
                <p style={textAlign("end", "xl")}>End aligned text on viewports sized XL (extra-large) or wider.</p>
            </Example>
            <Code language="tsx">{`<p style={textAlign("start")}>Start aligned text on all viewport sizes.</p>
<p style={textAlign("center")}>Center aligned text on all viewport sizes.</p>
<p style={textAlign("end")}>End aligned text on all viewport sizes.</p>

<p style={textAlign("end", "sm")}>End aligned text on viewports sized SM (small) or wider.</p>
<p style={textAlign("end", "md")}>End aligned text on viewports sized MD (medium) or wider.</p>
<p style={textAlign("end", "lg")}>End aligned text on viewports sized LG (large) or wider.</p>
<p style={textAlign("end", "xl")}>End aligned text on viewports sized XL (extra-large) or wider.</p>`}</Code>
            <Anchor name="text-text-wrapping-and-overflow">
                <h2>Text wrapping and overflow</h2>
            </Anchor>
            <Example>
                <Badge variant="primary" style={[text("wrap"), { width: "6rem" }]}>
                    This text should wrap.
                </Badge>
            </Example>
            <Code language="tsx">{`<Badge variant="primary" style={[text("wrap"), { width: "6rem" }]}>
    This text should wrap.
</Badge>`}</Code>
            <Example>
                <div style={[text("nowrap"), backgroundColor("light"), border(), { width: "8rem" }]}>
                    This text should overflow the parent.
                </div>
            </Example>
            <Code language="tsx">{`<div style={[text("nowrap"), backgroundColor("light"), border(), { width: "8rem" }]}>
    This text should overflow the parent.
</div>`}</Code>
            <Anchor name="text-word-break">
                <h2>Word break</h2>
            </Anchor>
            <p>
                Prevent long strings of text from breaking your components' layout by using <code>text("break")</code> to set{" "}
                <code>word-wrap: break-word</code> and <code>word-break: break-word</code>. We use <code>word-wrap</code> instead of the
                more common <code>overflow-wrap</code> for wider browser support, and add the deprecated <code>word-break: break-word</code>{" "}
                to avoid issues with flex containers.
            </p>
            <Example>
                <p style={text("break")}>
                    mmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmm
                </p>
            </Example>
            <Code language="tsx">{`<p style={text("break")}>
    mmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmm
</p>`}</Code>
            <Anchor name="text-text-transform">
                <h2>Text transform</h2>
            </Anchor>
            <p>Transform text in components with text capitalization classes.</p>
            <Example>
                <p style={text("lowercase")}>Lowercased text.</p>
                <p style={text("uppercase")}>Uppercased text.</p>
                <p style={text("capitalize")}>CapiTaliZed text.</p>
            </Example>
            <Code language="tsx">{`<p style={text("lowercase")}>Lowercased text.</p>
<p style={text("uppercase")}>Uppercased text.</p>
<p style={text("capitalize")}>CapiTaliZed text.</p>`}</Code>
            <Anchor name="text-font-size">
                <h2>Font size</h2>
            </Anchor>
            <Example>
                {fontSizes.map((size) => (
                    <p style={fontSize(size)}>font-size {size} text</p>
                ))}
            </Example>
            <Code language="tsx">{fontSizes.map((size) => `<p style={fontSize(${size})}>font-size ${size} text</p>\n`)}</Code>
            <Anchor name="text-font-weight-and-italics">
                <h2>Font weight and italics</h2>
            </Anchor>
            <Example>
                {fontWeights.map((weight) => (
                    <p style={fontWeight(weight)}>{weight} weight</p>
                ))}
                {fontStyles.map((style) => (
                    <p style={fontStyle(style)}>{style} style</p>
                ))}
            </Example>
            <Code language="tsx">
                {[
                    ...fontWeights.map((weight) => `<p style={fontWeight("${weight}")}>${weight} weight</p>\n`),
                    ...fontStyles.map((style) => `<p style={fontStyle("${style}")}>${style} style</p>\n`),
                ]}
            </Code>
            <Anchor name="text-line-height">
                <h2>Line height</h2>
            </Anchor>
            <Example>
                {lineHeights.map((height) => (
                    <p style={lineHeight(height)}>
                        Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor. Donec sed odio dui. Cras mattis pannenkoek
                        purus sit amet fermentum. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Nullam id dolor id
                        nibh ultricies vehicula ut id elit. Cras mattis consectetur purus sit amet fermentum.
                    </p>
                ))}
            </Example>
            <Code language="tsx">
                {lineHeights.map(
                    (height) =>
                        `<p style={lineHeight("${height}")}>
    Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor. Donec sed odio dui. Cras mattis pannenkoek
    purus sit amet fermentum. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Nullam id dolor id
    nibh ultricies vehicula ut id elit. Cras mattis consectetur purus sit amet fermentum.
</p>\n`
                )}
            </Code>
            <Anchor name="text-monospace">
                <h2>Monospace</h2>
            </Anchor>
            <Example>
                <p style={fontMonospace}>This is in monospace</p>
            </Example>
            <Code language="tsx">{`<p style={fontMonospace}>This is in monospace</p>`}</Code>
            <Anchor name="text-reset-color">
                <h2>Reset color</h2>
            </Anchor>
            <p>Reset a text or link’s color.</p>
            <Example>
                <p style={textColor("muted")}>
                    Muted text with a{" "}
                    <a href="javascript:void(0)" style={text("reset")}>
                        reset link
                    </a>
                    .
                </p>
            </Example>
            <Code language="tsx">{`<p style={textColor("muted")}>
    Muted text with a{" "}
    <a href="javascript:void(0)" style={text("reset")}>
        reset link
    </a>
    .
</p>`}</Code>
            <Anchor name="text-text-decoration">
                <h2>Text decoration</h2>
            </Anchor>
            <p>Decorate text in components with text decoration utilities.</p>
            <Example>
                <p style={textDecoration("underline")}>This text has a line underneath it.</p>
                <p style={textDecoration("line-through")}>This text has a line going through it.</p>
                <a href="javascript:void(0)" style={textDecoration("none")}>
                    This link has its text decoration removed
                </a>
            </Example>
            <Code language="tsx">{`<p style={textDecoration("underline")}>This text has a line underneath it.</p>
<p style={textDecoration("line-through")}>This text has a line going through it.</p>
<a href="javascript:void(0)" style={textDecoration("none")}>
    This link has its text decoration removed
</a>`}</Code>
        </>
    );
}

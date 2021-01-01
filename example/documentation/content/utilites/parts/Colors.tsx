import * as b from "bobril";
import { IRouteWithNavDefinition } from "../../../../common/routing";
import { Anchor } from "../../../../common/Anchor";
import { Example } from "../../../../common/Example";
import {
    backgroundColor,
    backgroundColorScale,
    backgroundGradientColor,
    backgroundGradientColorScale,
    padding,
    textColor,
    textColorScale,
} from "../../../../../index";
import { Code } from "../../../../common/Code";
import { Lead } from "../../../../common/Lead";
import { Callout } from "../../../../common/Callout";

export const colorsRoute: IRouteWithNavDefinition = {
    url: "colors",
    name: "colors",
    label: "Colors",
    handler: () => <ColorsDoc />,
    subs: [
        {
            url: "color",
            name: "colors-color",
            label: "Color",
            subs: [],
        },
        {
            url: "background-color",
            name: "colors-background-color",
            label: "Background color",
            subs: [],
        },
        {
            url: "background-gradient",
            name: "colors-background-gradient",
            label: "Background gradient",
            subs: [],
        },
    ],
};

export function ColorsDoc(): b.IBobrilNode {
    return (
        <>
            <Anchor name="colors">
                <h1>Colors</h1>
            </Anchor>
            <Lead>
                Convey meaning through color with a handful of color utility classes. Includes support for styling links with hover states,
                too.
            </Lead>
            <Callout variant="info">
                <h5>Dealing with specificity</h5>
                <p>
                    Sometimes contextual classes cannot be applied due to the specificity of another selector. In some cases, a sufficient
                    workaround is to wrap your element’s content in a <code>&lt;div&gt;</code> with the class.
                </p>
            </Callout>
            <Callout variant="info">
                <h5>Conveying meaning to assistive technologies</h5>
                <p>
                    Conveying meaning to assistive technologies Using color to add meaning only provides a visual indication, which will not
                    be conveyed to users of assistive technologies – such as screen readers. Ensure that information denoted by the color is
                    either obvious from the content itself (e.g. the visible text), or is included through alternative means, such as
                    additional text hidden with the <code>visuallyHidden</code> style.
                </p>
            </Callout>
            <Anchor name="colors-color">
                <h2>Color</h2>
            </Anchor>
            <Example>
                {textColorScale.map((color) => (
                    <p style={[textColor(color), lightColors.indexOf(color) >= 0 && backgroundColor("dark")]}>{color}</p>
                ))}
            </Example>
            <Code language="tsx">
                {textColorScale.map((color) =>
                    lightColors.indexOf(color) >= 0
                        ? `<p style={[textColor("${color}"), backgroundColor("dark")]}>${color}</p>\n`
                        : `<p style={textColor("${color}")}>${color}</p>\n`
                )}
            </Code>
            <Anchor name="colors-background-color">
                <h2>Background color</h2>
            </Anchor>
            <Example>
                {backgroundColorScale.map((color) => (
                    <p style={[backgroundColor(color), padding(3), textColor(lightColors.indexOf(color) >= 0 ? "dark" : "white")]}>
                        {color}
                    </p>
                ))}
            </Example>
            <Code language="tsx">
                {backgroundColorScale.map(
                    (color) =>
                        `<p style={[backgroundColor("${color}"), padding(3), textColor("${
                            lightColors.indexOf(color) >= 0 ? "dark" : "white"
                        }")]}>${color}</p>\n`
                )}
            </Code>
            <Anchor name="colors-background-gradient">
                <h2>Background gradient</h2>
                <p>
                    Add <code>backgroundGradient</code> style or use <code>backgroundGradientColor</code> utility.
                </p>
            </Anchor>
            <Example>
                {backgroundGradientColorScale.map((color) => (
                    <p style={[backgroundGradientColor(color), padding(3), textColor(lightColors.indexOf(color) >= 0 ? "dark" : "white")]}>
                        {color}
                    </p>
                ))}
            </Example>
            <Code language="tsx">
                {backgroundColorScale.map(
                    (color) =>
                        `<p style={[backgroundGradientColor("${color}"), padding(3), textColor("${
                            lightColors.indexOf(color) >= 0 ? "dark" : "white"
                        }")]}>${color}</p>\n`
                )}
            </Code>
        </>
    );
}

const lightColors = ["warning", "info", "light", "white", "white-50"];

import * as b from "bobril";
import { IRouteWithNavDefinition } from "../../../../common/routing";
import { Anchor } from "../../../../common/Anchor";
import { Example } from "../../../../common/Example";
import { border, borderColor, borderColorScale, borderWidths, rounded, roundedScale } from "../../../../../index";
import { Code } from "../../../../common/Code";
import { Lead } from "../../../../common/Lead";
import { placeholderUri } from "../../../../common/placeholderGenerator";
import { margin } from "../../../../../src/utilities/spacing";

export const bordersRoute: IRouteWithNavDefinition = {
    url: "borders",
    name: "borders",
    label: "Borders",
    handler: () => <BordersDoc />,
    subs: [
        {
            url: "border",
            name: "borders-border",
            label: "Border",
            subs: [
                {
                    url: "additive",
                    name: "borders-border-additive",
                    label: "Additive",
                    subs: [],
                },
                {
                    url: "subtractive",
                    name: "borders-border-subtractive",
                    label: "Subtractive",
                    subs: [],
                },
            ],
        },
        {
            url: "color",
            name: "borders-color",
            label: "Border color",
            subs: [],
        },
        {
            url: "width",
            name: "borders-width",
            label: "Border width",
            subs: [],
        },
        {
            url: "radius",
            name: "borders-radius",
            label: "Border radius",
            subs: [],
        },
    ],
};

export function BordersDoc(): b.IBobrilNode {
    return (
        <>
            <Anchor name="borders">
                <h1>Borders</h1>
            </Anchor>
            <Lead>
                Use border utilities to quickly style the border and border-radius of an element. Great for images, buttons, or any other
                element.
            </Lead>
            <Anchor name="borders-border">
                <h2>Border</h2>
            </Anchor>
            <p>Use border utilities to add or remove an element’s borders. Choose from all borders or one at a time.</p>
            <Anchor name="borders-border-additive">
                <h3>Additive</h3>
            </Anchor>
            <Example>
                <span style={[cubeStyle, border()]}></span>
                <span style={[cubeStyle, border("top")]}></span>
                <span style={[cubeStyle, border("end")]}></span>
                <span style={[cubeStyle, border("bottom")]}></span>
                <span style={[cubeStyle, border("start")]}></span>
            </Example>
            <Code language="tsx">{`<span style={border()}></span>
<span style={border("top")}></span>
<span style={border("end")}></span>
<span style={border("bottom")}></span>
<span style={border("start")}></span>`}</Code>
            <Anchor name="borders-border-subtractive">
                <h3>Subtractive</h3>
            </Anchor>
            <Example>
                <span style={[cubeStyle, border(), border(0)]}></span>
                <span style={[cubeStyle, border(), border("top", 0)]}></span>
                <span style={[cubeStyle, border(), border("end", 0)]}></span>
                <span style={[cubeStyle, border(), border("bottom", 0)]}></span>
                <span style={[cubeStyle, border(), border("start", 0)]}></span>
            </Example>
            <Code language="tsx">{`<span style={[border(), border(0)]}></span>
<span style={[border(), border("top", 0)]}></span>
<span style={[border(), border("end", 0)]}></span>
<span style={[border(), border("bottom", 0)]}></span>
<span style={[border(), border("start", 0)]}></span>`}</Code>
            <Anchor name="borders-color">
                <h2>Border color</h2>
            </Anchor>
            <Example>
                {borderColorScale.map((color) => (
                    <span style={[cubeStyle, border(), borderColor(color)]}></span>
                ))}
            </Example>
            <Code language="tsx">{borderColorScale.map((color) => `<span style={[border(), borderColor("${color}"))]}></span>\n`)}</Code>
            <Anchor name="borders-width">
                <h2>Border width</h2>
            </Anchor>
            <Example>
                {borderWidths.map((width) => (
                    <span style={[cubeStyle, border(width)]}></span>
                ))}
            </Example>
            <Code language="tsx">{borderWidths.map((width) => `<span style={[border(${width})]}></span>\n`)}</Code>
            <Anchor name="borders-radius">
                <h2>Border radius</h2>
            </Anchor>
            <Example>
                {[undefined, ...roundedScale].map((value) => (
                    <img src={placeholderUri(value === "pill" ? 150 : 75, "px", 75, "px")} style={[rounded(value), margin(1)]} />
                ))}
            </Example>
            <Code language="tsx">
                {[undefined, ...roundedScale].map(
                    (value) =>
                        `<img src={placeholderUri(${value === "pill" ? 150 : 75}, "px", 75, "px")} style={[rounded(${
                            typeof value === "string" ? `"${value}"` : value ?? ""
                        }), margin(1)]} />\n`
                )}
            </Code>
        </>
    );
}

const cubeStyle = b.styleDef({
    display: "inline-block",
    width: "5rem",
    height: "5rem",
    margin: ".25rem",
    backgroundColor: "#f5f5f5",
});

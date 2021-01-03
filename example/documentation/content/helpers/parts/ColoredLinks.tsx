import * as b from "bobril";
import { IRouteWithNavDefinition } from "../../../../common/routing";
import { Anchor } from "../../../../common/Anchor";
import { Example } from "../../../../common/Example";
import { linkColor, linkColorScale } from "../../../../../index";
import { Code } from "../../../../common/Code";
import { Lead } from "../../../../common/Lead";

export const coloredLinksRoute: IRouteWithNavDefinition = {
    url: "colored-links",
    name: "colored-links",
    label: "Colored links",
    handler: () => <ColoredLinksDoc />,
    subs: [
        {
            url: "examples",
            name: "colored-links-examples",
            label: "Examples",
            subs: [],
        },
    ],
};

export function ColoredLinksDoc(): b.IBobrilNode {
    return (
        <>
            <Anchor name="colored-links">
                <h1>ColoredLinks</h1>
            </Anchor>
            <Lead>Colored links with hover states.</Lead>
            <Anchor name="colored-links-examples">
                <h2>Examples</h2>
            </Anchor>
            <Example>
                {linkColorScale.map((color) => (
                    <>
                        <a href="#" style={linkColor(color)}>
                            {color} link
                        </a>{" "}
                    </>
                ))}
            </Example>
            <Code language="tsx">
                {linkColorScale.map(
                    (color) =>
                        `<a href="#" style={linkColor(${color})}>
    ${color} link
</a>\n`
                )}
            </Code>
        </>
    );
}

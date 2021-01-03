import * as b from "bobril";
import { IRouteWithNavDefinition } from "../../../../common/routing";
import { Anchor } from "../../../../common/Anchor";
import { Example } from "../../../../common/Example";
import { Table, align, verticalAlignments } from "../../../../../index";
import { Code } from "../../../../common/Code";
import { Lead } from "../../../../common/Lead";

export const verticalAlignmentRoute: IRouteWithNavDefinition = {
    url: "vertical-alignment",
    name: "vertical-alignment",
    label: "VerticalAlignment",
    handler: () => <VerticalAlignmentDoc />,
    subs: [],
};

export function VerticalAlignmentDoc(): b.IBobrilNode {
    return (
        <>
            <Anchor name="vertical-alignment">
                <h1>Vertical alignment</h1>
            </Anchor>
            <Lead>Easily change the vertical alignment of inline, inline-block, inline-table, and table cell elements.</Lead>
            <p>
                Change the alignment of elements with the{" "}
                <a href="https://developer.mozilla.org/en-US/docs/Web/CSS/vertical-align">
                    <code>vertical-alignment</code>
                </a>{" "}
                utilities. Please note that vertical-align only affects inline, inline-block, inline-table, and table cell elements.
            </p>
            <p>
                Choose from <code>baseline</code>, <code>top</code>, <code>middle</code>, <code>bottom</code>, <code>text-bottom</code>, and{" "}
                <code>text-top</code> as needed.
            </p>
            <p>
                To vertically center non-inline content (like <code>&lt;div&gt;</code>s and more), use our{" "}
                <a href="/docs/5.0/utilities/flex/#align-items">flex box utilities</a>.
            </p>
            <p>With inline elements:</p>
            <Example>
                {verticalAlignments.map((alignment) => (
                    <span style={align(alignment)}>{alignment}</span>
                ))}
            </Example>
            <Code language="tsx">{verticalAlignments.map((alignment) => `<span style={align("${alignment}")}>${alignment}</span>\n`)}</Code>
            <p>With table cells:</p>
            <Example>
                <Table bordered style={{ height: 100 }}>
                    <tbody>
                        <tr>
                            {verticalAlignments.map((alignment) => (
                                <td style={align(alignment)}>{alignment}</td>
                            ))}
                        </tr>
                    </tbody>
                </Table>
            </Example>
            <Code language="tsx">{`<Table bordered style={{ height: 100 }}>
    <tbody>
        <tr>
${verticalAlignments.map((alignment) => `            <td style={align("${alignment}")}>${alignment}</td>`).join("\n")}
        </tr>
    </tbody>
</Table>`}</Code>
        </>
    );
}

import * as b from "bobril";
import { IRouteWithNavDefinition } from "../../../../common/routing";
import { Anchor } from "../../../../common/Anchor";
import { Example } from "../../../../common/Example";
import { Col, display, Row, textTruncate } from "../../../../../index";
import { Code } from "../../../../common/Code";
import { Lead } from "../../../../common/Lead";

export const textTruncationRoute: IRouteWithNavDefinition = {
    url: "text-truncation",
    name: "text-truncation",
    label: "Text truncation",
    handler: () => <TextTruncationDoc />,
    subs: [],
};

export function TextTruncationDoc(): b.IBobrilNode {
    return (
        <>
            <Anchor name="text-truncation">
                <h1>Text truncation</h1>
            </Anchor>
            <Lead>Truncate long strings of text with an ellipsis.</Lead>
            <p>
                For longer content, you can add a <code>textTruncate</code> style to truncate the text with an ellipsis.{" "}
                <strong>
                    Requires <code>display: inline-block</code> or <code>display: block</code>.
                </strong>
            </p>
            <Example>
                <Row>
                    <Col span={2} style={textTruncate}>
                        Block level: Praeterea iter est quasdam res quas ex communi.
                    </Col>
                </Row>
                <span style={[display("inline-block"), textTruncate, { maxWidth: 150 }]}>
                    Inline level: Praeterea iter est quasdam res quas ex communi.
                </span>
            </Example>
            <Code language="tsx">{`<Row>
    <Col span={2} style={textTruncate}>
        Block level: Praeterea iter est quasdam res quas ex communi.
    </Col>
</Row>
<span style={[display("inline-block"), textTruncate, { maxWidth: 150 }]}>
    Inline level: Praeterea iter est quasdam res quas ex communi.
</span>`}</Code>
        </>
    );
}

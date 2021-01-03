import * as b from "bobril";
import { IRouteWithNavDefinition } from "../../../../common/routing";
import { Anchor } from "../../../../common/Anchor";
import { Example } from "../../../../common/Example";
import { Button, invisible, visible } from "../../../../../index";
import { Code } from "../../../../common/Code";
import { Lead } from "../../../../common/Lead";
import { Callout } from "../../../../common/Callout";

export const visibilityRoute: IRouteWithNavDefinition = {
    url: "visibility",
    name: "visibility",
    label: "Visibility",
    handler: () => <VisibilityDoc />,
    subs: [],
};

export function VisibilityDoc(): b.IBobrilNode {
    return (
        <>
            <Anchor name="visibility">
                <h1>Visibility</h1>
            </Anchor>
            <Lead>Control the visibility of elements, without modifying their display, with visibility utilities.</Lead>
            <p>
                Set the <code>visibility</code> of elements with our visibility utilities. These utility <code>props</code> and{" "}
                <code>styles</code> do not modify the <code>display</code> value at all and do not affect layout – <code>invisible</code>{" "}
                elements still take up space in the page.
            </p>
            <Callout variant="warning">
                <p>
                    Elements with the <code>invisible</code> property or style will be hidden <em>both</em> visually and for assistive
                    technology/screen reader users.
                </p>
            </Callout>
            <Example>
                <div style={visible}>Visible text</div>
                <div style={invisible}>Invisible text</div>
                <Button variant="primary" visible>
                    Visible button
                </Button>
                <Button variant="primary" invisible>
                    Invisible button
                </Button>
            </Example>
            <Code language="tsx">{`<div style={visible}>...</div>
<div style={invisible}>...</div>
<Button variant="primary" visible>
    Visible button
</Button>
<Button variant="primary" invisible>
    Invisible button
</Button>`}</Code>
        </>
    );
}

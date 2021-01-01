import * as b from "bobril";
import { IRouteWithNavDefinition } from "../../../../common/routing";
import { Anchor } from "../../../../common/Anchor";
import { Example } from "../../../../common/Example";
import { backgroundColor, Button, clearfix, float } from "../../../../../index";
import { Code } from "../../../../common/Code";
import { Lead } from "../../../../common/Lead";

export const clearfixRoute: IRouteWithNavDefinition = {
    url: "clearfix",
    name: "clearfix",
    label: "Clearfix",
    handler: () => <ClearfixDoc />,
    subs: [],
};

export function ClearfixDoc(): b.IBobrilNode {
    return (
        <>
            <Anchor name="clearfix">
                <h1>Clearfix</h1>
            </Anchor>
            <Lead>Quickly and easily clear floated content within a container by adding a clearfix utility.</Lead>

            <p>
                Easily clear <code>float</code>s by adding <code>clearfix</code> <strong>to the parent element</strong>.
            </p>
            <p>
                The following example shows how the clearfix can be used. Without the clearfix the wrapping div would not span around the
                buttons which would cause a broken layout.
            </p>
            <Example>
                <div style={[backgroundColor("info"), clearfix]}>
                    <Button variant="secondary" style={float("start")}>
                        Example Button floated left
                    </Button>
                    <Button variant="secondary" style={float("end")}>
                        Example Button floated right
                    </Button>
                </div>
            </Example>
            <Code language="tsx">{`<div style={[backgroundColor("info"), clearfix]}>
    <Button variant="secondary" style={float("start")}>
        Example Button floated left
    </Button>
    <Button variant="secondary" style={float("end")}>
        Example Button floated right
    </Button>
</div>`}</Code>
        </>
    );
}

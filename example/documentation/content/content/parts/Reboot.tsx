import * as b from "bobril";
import { IRouteWithNavDefinition } from "../../../../common/routing";
import { Anchor } from "../../../../common/Anchor";
import { Example } from "../../../../common/Example";
import {} from "../../../../../index";
import { Code } from "../../../../common/Code";
import { Lead } from "../../../../common/Lead";

export const rebootRoute: IRouteWithNavDefinition = {
    url: "reboot",
    name: "reboot",
    label: "Reboot",
    handler: () => <RebootDoc />,
    subs: [
        {
            url: "examples",
            name: "reboot-examples",
            label: "Examples",
            subs: [],
        },
    ],
};

export function RebootDoc(): b.IBobrilNode {
    return (
        <>
            <Anchor name="reboot">
                <h1>Reboot</h1>
            </Anchor>
            <Lead></Lead>
            <Anchor name="reboot-examples">
                <h2>Examples</h2>
            </Anchor>
            <p>Example</p>
            <Example></Example>
            <Code language="tsx">{``}</Code>
        </>
    );
}

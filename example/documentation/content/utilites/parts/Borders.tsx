import * as b from "bobril";
import { IRouteWithNavDefinition } from "../../../../common/routing";
import { Anchor } from "../../../../common/Anchor";
import { Example } from "../../../../common/Example";
import {} from "../../../../../index";
import { Code } from "../../../../common/Code";
import { Lead } from "../../../../common/Lead";

export const bordersRoute: IRouteWithNavDefinition = {
    url: "borders",
    name: "borders",
    label: "Borders",
    handler: () => <BordersDoc />,
    subs: [
        {
            url: "examples",
            name: "borders-examples",
            label: "Examples",
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
            <Lead></Lead>
            <Anchor name="borders-examples">
                <h2>Examples</h2>
            </Anchor>
            <p>Example</p>
            <Example></Example>
            <Code language="tsx">{``}</Code>
        </>
    );
}

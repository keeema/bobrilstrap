import * as b from "bobril";
import { IRouteWithNavDefinition } from "../../../../common/routing";
import { Anchor } from "../../../../common/Anchor";
import { Example } from "../../../../common/Example";
import { Alert, AlertVariant } from "../../../../../index";
import {} from "../../layout/parts/Container";
import { Code } from "../../../../common/Code";

export const alertsRoute: IRouteWithNavDefinition = {
    url: "alerts",
    name: "alerts",
    label: "Alerts",
    handler: () => <Introduction />,
    subs: [
        {
            url: "examples",
            name: "alerts-examples",
            label: "Examples",
            subs: [],
        },
    ],
};

export function Introduction(): b.IBobrilNode {
    return (
        <>
            <h1>Alerts</h1>
            <p>Provide contextual feedback messages for typical user actions with the handful of available and flexible alert messages.</p>
            <Anchor name="alerts-examples">
                <h2>Examples</h2>
            </Anchor>
            <p>Alerts are available for any length of text, as well as an optional dismiss button.</p>
            <Example>
                {(["primary", "secondary", "success", "danger", "warning", "info", "light", "dark"] as AlertVariant[]).map((variant) => (
                    <Alert variant={variant}>A simple {variant} alert — check it out!</Alert>
                ))}
            </Example>
            <Code language="tsx">
                {`{(["primary", "secondary", "success", "danger", "warning", "info", "light", "dark"] as AlertVariant[]).map((variant) => (
    <Alert variant={variant}>A simple {variant} alert — check it out!</Alert>
))}`}
            </Code>
        </>
    );
}

import * as b from "bobril";
import { IRouteWithNavDefinition } from "../../../../common/routing";
import { Anchor } from "../../../../common/Anchor";
import { Example } from "../../../../common/Example";
import { Button } from "../../../../../index";
import { Code } from "../../../../common/Code";
import { Lead } from "../../../../common/Lead";
import { ButtonVariant } from "../../../../../src/components/Button";

export const buttonsRoute: IRouteWithNavDefinition = {
    url: "buttons",
    name: "buttons",
    label: "Buttons",
    handler: () => <Buttons />,
    subs: [
        {
            url: "examples",
            name: "buttons-examples",
            label: "Examples",
            subs: [],
        },
        {
            url: "accessibility",
            name: "buttons-accessibility",
            label: "Accessibility",
            subs: [],
        },
    ],
};

export function Buttons(): b.IBobrilNode {
    return (
        <>
            <h1>Buttons</h1>
            <Lead>
                Use Bootstrap’s custom button styles for actions in forms, dialogs, and more with support for multiple sizes, states, and
                more.
            </Lead>
            <Anchor name="buttons-examples">
                <h2>Examples</h2>
            </Anchor>
            <p>
                Bootstrap includes several predefined button styles, each serving its own semantic purpose, with a few extras thrown in for
                more control.
            </p>
            <Example>
                {(["primary", "secondary", "success", "warning", "danger", "light", "dark", "link"] as ButtonVariant[]).map((variant) => (
                    <>
                        <Button variant={variant}>{variant.toUpperCase()}</Button>{" "}
                    </>
                ))}
            </Example>
            <Code language="tsx">
                {(["primary", "secondary", "success", "warning", "danger", "light", "dark", "link"] as ButtonVariant[]).map(
                    (variant) => `<Button variant="${variant}">${variant.toUpperCase()}</Button>{" "}\n`
                )}
            </Code>
        </>
    );
}

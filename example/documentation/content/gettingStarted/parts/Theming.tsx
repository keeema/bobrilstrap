import * as b from "bobril";
import { IRouteWithNavDefinition } from "../../../../common/routing";
import { Anchor } from "../../../../common/Anchor";
import {} from "../../../../../index";
import { Code } from "../../../../common/Code";
import { Lead } from "../../../../common/Lead";

export const themingRoute: IRouteWithNavDefinition = {
    url: "theming",
    name: "theming",
    label: "Theming",
    handler: () => <ThemingDoc />,
    subs: [],
};

export function ThemingDoc(): b.IBobrilNode {
    return (
        <>
            <Anchor name="theming">
                <h1>Theming</h1>
            </Anchor>
            <Lead></Lead>

            <p>
                To use a custom <code>Bootstrap</code> theme just add/replace the theme file import. Example:
            </p>

            <Code language="tsx">{`import "myThemePackage/bootstrap.min.css";`}</Code>
            <p>
                It can also be accomplished with <code>b.asset</code>.
            </p>
        </>
    );
}

import * as b from "bobril";
import { IRouteWithNavDefinition } from "../../../../common/routing";
import { Anchor } from "../../../../common/Anchor";
import { Example } from "../../../../common/Example";
import { backgroundColor, CloseButton } from "../../../../../index";
import { Code } from "../../../../common/Code";
import { Lead } from "../../../../common/Lead";

export const closeButtonRoute: IRouteWithNavDefinition = {
    url: "close-button",
    name: "close-button",
    label: "Close button",
    handler: () => <CloseButtonDoc />,
    subs: [
        {
            url: "examples",
            name: "close-button-examples",
            label: "Examples",
            subs: [
                {
                    url: "basic",
                    name: "close-button-examples-basic",
                    label: "Basic",
                    subs: [],
                },
                {
                    url: "disabled",
                    name: "close-button-examples-disabled",
                    label: "Disabled",
                    subs: [],
                },
                {
                    url: "white",
                    name: "close-button-examples-white",
                    label: "White",
                    subs: [],
                },
            ],
        },
    ],
};

export function CloseButtonDoc(): b.IBobrilNode {
    return (
        <>
            <Anchor name="close-button">
                <h1>Close button</h1>
            </Anchor>
            <Lead>A generic close button for dismissing content like modals and alerts.</Lead>
            <Anchor name="close-button-examples">
                <h2>Examples</h2>
            </Anchor>
            <Anchor name="close-button-examples-basic">
                <h3>Basic</h3>
            </Anchor>
            <Example>
                <CloseButton aria-label="Close" />
            </Example>
            <Code language="tsx">{`<CloseButton aria-label="Close" />`}</Code>
            <Anchor name="close-button-examples-disabled">
                <h3>Disabled</h3>
            </Anchor>
            <Example>
                <CloseButton disabled aria-label="Close" />
            </Example>
            <Code language="tsx">{`<CloseButton disabled aria-label="Close" />`}</Code>
            <Anchor name="close-button-examples-white">
                <h3>White</h3>
            </Anchor>
            <Example style={backgroundColor("dark")}>
                <CloseButton white aria-label="Close" />
                <CloseButton white disabled aria-label="Close" />
            </Example>
            <Code language="tsx">{`<CloseButton white aria-label="Close" />
<CloseButton white disabled aria-label="Close" />`}</Code>
        </>
    );
}

import * as b from "bobril";
import { IRouteWithNavDefinition } from "../../../../common/routing";
import { Anchor } from "../../../../common/Anchor";
import { Example } from "../../../../common/Example";
import { visuallyHidden, visuallyHiddenFocusable } from "../../../../../index";
import { Code } from "../../../../common/Code";
import { Lead } from "../../../../common/Lead";

export const visuallyHiddenRoute: IRouteWithNavDefinition = {
    url: "visually-hidden",
    name: "visually-hidden",
    label: "Visually hidden",
    handler: () => <VisuallyHiddenDoc />,
    subs: [],
};

export function VisuallyHiddenDoc(): b.IBobrilNode {
    return (
        <>
            <Anchor name="visually-hidden">
                <h1>Visually hidden</h1>
            </Anchor>
            <Lead>Use these helpers to visually hide elements but keep them accessible to assistive technologies.</Lead>
            <p>
                Visually hide an element while still allowing it to be exposed to assistive technologies (such as screen readers) with{" "}
                <code>visuallyHidden</code> style. Use <code>visuallyHiddenFocusable</code> to visually hide an element by default, but to
                display it when it’s focused (e.g. by a keyboard-only user). Can also be used as mixins.
            </p>
            <Example>
                <h2 style={visuallyHidden}>Title for screen readers</h2>
                <a style={visuallyHiddenFocusable} href="javascript:void(0)">
                    Skip to main content
                </a>
            </Example>
            <Code language="tsx">{`<h2 style={visuallyHidden}>Title for screen readers</h2>
<a style={visuallyHiddenFocusable} href="javascript:void(0)">
    Skip to main content
</a>`}</Code>
        </>
    );
}

import * as b from "bobril";
import { IRouteWithNavDefinition } from "../../../../common/routing";
import { Anchor } from "../../../../common/Anchor";
import { Example } from "../../../../common/Example";
import { pointerEvents, userSelect } from "../../../../../index";
import { Code } from "../../../../common/Code";
import { Lead } from "../../../../common/Lead";
import { Callout } from "../../../../common/Callout";

export const interactionsRoute: IRouteWithNavDefinition = {
    url: "interactions",
    name: "interactions",
    label: "Interactions",
    handler: () => <InteractionsDoc />,
    subs: [
        {
            url: "text-selection",
            name: "interactions-text-selection",
            label: "Text selection",
            subs: [],
        },
        {
            url: "pointer-events",
            name: "interactions-pointer-events",
            label: "Pointer events",
            subs: [],
        },
    ],
};

export function InteractionsDoc(): b.IBobrilNode {
    return (
        <>
            <Anchor name="interactions">
                <h1>Interactions</h1>
            </Anchor>
            <Lead>Utilities that change how users interact with contents of a website.</Lead>
            <Anchor name="interactions-text-selection">
                <h2>Text selection</h2>
            </Anchor>
            <p>Change the way in which the content is selected when the user interacts with it.</p>
            <Example>
                <p style={userSelect("all")}>This paragraph will be entirely selected when clicked by the user.</p>
                <p style={userSelect("auto")}>This paragraph has default select behavior.</p>
                <p style={userSelect("none")}>This paragraph will not be selectable when clicked by the user.</p>
            </Example>
            <Code language="tsx">{`<p style={userSelect("all")}>This paragraph will be entirely selected when clicked by the user.</p>
<p style={userSelect("auto")}>This paragraph has default select behavior.</p>
<p style={userSelect("none")}>This paragraph will not be selectable when clicked by the user.</p>`}</Code>
            <Anchor name="interactions-pointer-events">
                <h2>Pointer events</h2>
            </Anchor>
            <Example>
                <p>
                    <a href="javascript:void(0)" style={pointerEvents("none")} tabindex={-1} aria-disabled>
                        This link
                    </a>{" "}
                    can not be clicked.
                </p>
                <p>
                    <a href="javascript:void(0)" style={pointerEvents("auto")}>
                        This link
                    </a>{" "}
                    can be clicked (this is default behavior).
                </p>
                <p style={pointerEvents("none")}>
                    <a href="javascript:void(0)" tabindex={-1} aria-disabled>
                        This link
                    </a>{" "}
                    can not be clicked because the <code>pointer-events</code> property is inherited from its parent. However,{" "}
                    <a href="javascript:void(0)" style={pointerEvents("auto")}>
                        this link
                    </a>{" "}
                    has a <code>pointerEvents("auto")</code> and can be clicked.
                </p>
            </Example>
            <Code language="tsx">{`<p>
    <a href="javascript:void(0)" style={pointerEvents("none")} tabindex={-1} aria-disabled>
        This link
    </a>{" "}
    can not be clicked.
</p>
<p>
    <a href="javascript:void(0)" style={pointerEvents("auto")}>
        This link
    </a>{" "}
    can be clicked (this is default behavior).
</p>
<p style={pointerEvents("none")}>
    <a href="javascript:void(0)" tabindex={-1} aria-disabled>
        This link
    </a>{" "}
    can not be clicked because the <code>pointer-events</code> property is inherited from its parent. However,{" "}
    <a href="javascript:void(0)" style={pointerEvents("auto")}>
        this link
    </a>{" "}
    has a <code>pointerEvents("auto")</code> and can be clicked.
</p>`}</Code>
            <Callout variant="warning">
                <p>
                    The <code>pointerEvents("none")</code> (and the <code>pointer-events</code> CSS property it sets) only prevents
                    interactions with a pointer (mouse, stylus, touch). Links and controls with <code>.pe-none</code> are, by default, still
                    focusable and actionable for keyboard users. To ensure that they are completely neutralized even for keyboard users, you
                    may need to add further attributes such as <code>tabindex="-1"</code> (to prevent them from receiving keyboard focus)
                    and <code>aria-disabled="true"</code> (to convey the fact they are effectively disabled to assistive technologies), and
                    possibly use JavaScript to completely prevent them from being actionable. For form controls, consider using the{" "}
                    <code>disabled</code> HTML attribute instead.
                </p>
            </Callout>
        </>
    );
}

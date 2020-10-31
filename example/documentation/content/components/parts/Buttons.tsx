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
            url: "tags",
            name: "buttons-tags",
            label: "Button tags",
            subs: [],
        },
        {
            url: "outline",
            name: "buttons-outline",
            label: "Outline buttons",
            subs: [],
        },
        {
            url: "sizes",
            name: "buttons-sizes",
            label: "Sizes",
            subs: [],
        },
        {
            url: "active-state",
            name: "buttons-active-state",
            label: "Active state",
            subs: [],
        },
        {
            url: "disabled-state",
            name: "buttons-disabled-state",
            label: "Disabled state",
            subs: [],
        },
    ],
};

export function Buttons(): b.IBobrilNode {
    return (
        <>
            <Anchor name="buttons">
                <h1>Buttons</h1>
            </Anchor>
            <Lead>
                Use Bobrilstrap’s custom button styles for actions in forms, dialogs, and more with support for multiple sizes, states, and
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
            <Anchor name="buttons-tags">
                <h2>Button tags</h2>
            </Anchor>
            <p>
                Normally <code>{`<Button>`}</code> components will render a HTML <code>{`<button>`}</code> element. However you can render
                whatever you'd like, adding a <code>href</code> prop will automatically render an <code>{`<a>`}</code> element. You can use
                the <code>as</code> prop to render whatever your heart desires. Bobrilstrap will take care of the proper ARIA roles for you.
            </p>
            <Example>
                <Button href="javascript:void(0)">Link</Button> <Button type="submit">Button</Button>{" "}
                <Button as="input" type="button" value="Input" /> <Button as="input" type="submit" value="Submit" />{" "}
                <Button as="input" type="reset" value="Reset" />
            </Example>
            <Code language="tsx">
                {`<Button href="javascript:void(0)">Link</Button> <Button type="submit">Button</Button>{' '}
<Button as="input" type="button" value="Input" />{' '}
<Button as="input" type="submit" value="Submit" />{' '}
<Button as="input" type="reset" value="Reset" />`}
            </Code>
            <Anchor name="buttons-outline">
                <h2>Outline buttons</h2>
            </Anchor>
            <p>
                In need of a button, but not the hefty background colors they bring? Replace the default variant prop with the{" "}
                <code>outline-*</code> ones to remove all background images and colors on any button.
            </p>
            <Example>
                {([
                    "outline-primary",
                    "outline-secondary",
                    "outline-success",
                    "outline-warning",
                    "outline-danger",
                    "outline-light",
                    "outline-dark",
                    "outline-link",
                ] as ButtonVariant[]).map((variant) => (
                    <>
                        <Button variant={variant}>{variant.toUpperCase()}</Button>{" "}
                    </>
                ))}
            </Example>
            <Code language="tsx">
                {([
                    "outline-primary",
                    "outline-secondary",
                    "outline-success",
                    "outline-warning",
                    "outline-danger",
                    "outline-light",
                    "outline-dark",
                    "outline-link",
                ] as ButtonVariant[]).map((variant) => `<Button variant="${variant}">${variant.toUpperCase()}</Button>{" "}\n`)}
            </Code>
            <Anchor name="buttons-sizes">
                <h2>Sizes</h2>
            </Anchor>
            <p>
                Fancy larger or smaller buttons? Add <code>size</code> prop with <code>lg</code> or <code>sm</code> for additional sizes.
            </p>
            <Example>
                <Button variant="primary" size="lg">
                    Large button
                </Button>{" "}
                <Button variant="secondary" size="lg">
                    Large button
                </Button>
            </Example>
            <Code language="tsx">{`<Button variant="primary" size="lg">
    Large button
</Button>{" "}
<Button variant="secondary" size="lg">
    Large button
</Button>`}</Code>
            <Example>
                <Button variant="primary" size="sm">
                    Small button
                </Button>{" "}
                <Button variant="secondary" size="sm">
                    Small button
                </Button>
            </Example>
            <Code language="tsx">{`<Button variant="primary" size="sm">
    Small button
</Button>{" "}
<Button variant="secondary" size="sm">
    Small button
</Button>`}</Code>
            <p>
                Create block level buttons—those that span the full width of a parent—by adding <code>block</code>.
            </p>
            <Example>
                <Button variant="primary" size="lg" block>
                    Block level button
                </Button>
                <Button variant="secondary" size="lg" block>
                    Block level button
                </Button>
            </Example>
            <Code language="tsx">{`<Button variant="primary" size="lg" block>
    Block level button
</Button>
<Button variant="secondary" size="lg" block>
    Block level button
</Button>`}</Code>
            <Anchor name="buttons-active-state">
                <h2>Active state</h2>
            </Anchor>
            <p>
                Buttons will appear pressed (with a darker background, darker border, and inset shadow) when active. However, you can still
                force the same active appearance with <code>active</code> prop (and include the <code>aria-pressed</code> prop) should you
                need to replicate the state programmatically.
            </p>
            <Example>
                <Button variant="primary" size="lg" active aria-pressed>
                    Primary button
                </Button>{" "}
                <Button variant="secondary" size="lg" active aria-pressed>
                    Button
                </Button>
            </Example>
            <Code language="tsx">{`<Button variant="primary" size="lg" active aria-pressed>
    Primary button
</Button>{" "}
<Button variant="secondary" size="lg" active aria-pressed>
    Button
</Button>`}</Code>
            <Anchor name="buttons-disabled-state">
                <h2>Disabled state</h2>
            </Anchor>
            <p>
                Make buttons look inactive by adding the disabled boolean prop to any <code>{"<Button>"}</code> component.
            </p>
            <Example>
                <Button variant="primary" size="lg" disabled aria-disabled>
                    Primary button
                </Button>{" "}
                <Button variant="secondary" size="lg" disabled aria-disabled>
                    Button
                </Button>{" "}
                <Button href="javascript:void(0)" variant="secondary" size="lg" disabled aria-disabled>
                    Link
                </Button>
            </Example>
            <Code language="tsx">{`<Button variant="primary" size="lg" disabled aria-disabled>
    Primary button
</Button>{" "}
<Button variant="secondary" size="lg" disabled aria-disabled>
    Button
</Button>{" "}
<Button href="javascript:void(0)" variant="secondary" size="lg" disabled aria-disabled>
    Link
</Button>`}</Code>
        </>
    );
}

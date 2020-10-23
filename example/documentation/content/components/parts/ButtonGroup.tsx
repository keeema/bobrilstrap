import * as b from "bobril";
import { IRouteWithNavDefinition } from "../../../../common/routing";
import { Anchor } from "../../../../common/Anchor";
import { Example } from "../../../../common/Example";
import { Button } from "../../../../../index";
import { Code } from "../../../../common/Code";
import { Lead } from "../../../../common/Lead";
import { margin } from "../../../../../src/utilities/spacing";

export const buttonGroupRoute: IRouteWithNavDefinition = {
    url: "button-group",
    name: "button-group",
    label: "Button group",
    handler: () => <ButtonGroup />,
    subs: [
        {
            url: "examples",
            name: "button-group-examples",
            label: "Examples",
            subs: [],
        },
        {
            url: "toolbar",
            name: "button-group-toolbar",
            label: "Button toolbar",
            subs: [],
        },
    ],
};

export function ButtonGroup(): b.IBobrilNode {
    return (
        <>
            <Anchor name="button-group">
                <h1>Button group</h1>
            </Anchor>
            <Lead>Group a series of buttons together on a single line with the button group, and super-power them with TypeScript.</Lead>
            <Anchor name="button-group-examples">
                <h2>Examples</h2>
            </Anchor>
            <p>
                Wrap a series of <code>{"<Button>"}</code>s in <code>{"<Button.Group>"}</code>
            </p>
            <Example>
                <Button.Group aria-label="Basic example">
                    <Button variant="secondary">Left</Button>
                    <Button variant="secondary">Middle</Button>
                    <Button variant="secondary">Right</Button>
                </Button.Group>
            </Example>
            <Code language="tsx">
                {`<Button.Group>
    <Button variant="secondary">Left</Button>
    <Button variant="secondary">Middle</Button>
    <Button variant="secondary">Right</Button>
</Button.Group>`}
            </Code>
            <p>
                In addition, groups and toolbars should be given an explicit label, as most assistive technologies will otherwise not
                announce them, despite the presence of the correct role attribute. In the examples provided here, we use aria-label, but
                alternatives such as aria-labelledby can also be used.
            </p>
            <Anchor name="button-group-toolbar">
                <h2>Button toolbar</h2>
            </Anchor>
            <p>
                Combine sets of button groups into button toolbars for more complex components. Use utility classes as needed to space out
                groups, buttons, and more.
            </p>
            <Example>
                <Button.Toolbar aria-label="Toolbar with button groups">
                    <Button.Group style={margin({ side: "r", size: 2 })} aria-label="First group">
                        <Button variant="secondary">1</Button>
                        <Button variant="secondary">2</Button>
                        <Button variant="secondary">3</Button>
                        <Button variant="secondary">4</Button>
                    </Button.Group>
                    <Button.Group style={margin({ side: "r", size: 2 })} aria-label="Secondary group">
                        <Button variant="secondary">5</Button>
                        <Button variant="secondary">6</Button>
                        <Button variant="secondary">7</Button>
                    </Button.Group>
                    <Button.Group aria-label="Third group">
                        <Button variant="secondary">8</Button>
                    </Button.Group>
                </Button.Toolbar>
            </Example>
            <Code language="tsx">
                {`<Button.Toolbar aria-label="Toolbar with button groups">
    <Button.Group style={margin({ side: "r", size: 2 })} aria-label="First group">
        <Button variant="secondary">1</Button>
        <Button variant="secondary">2</Button>
        <Button variant="secondary">3</Button>
        <Button variant="secondary">4</Button>
    </Button.Group>
    <Button.Group style={margin({ side: "r", size: 2 })} aria-label="Secondary group">
        <Button variant="secondary">5</Button>
        <Button variant="secondary">6</Button>
        <Button variant="secondary">7</Button>
    </Button.Group>
    <Button.Group aria-label="Third group">
        <Button variant="secondary">8</Button>
    </Button.Group>
</Button.Toolbar>`}
            </Code>
        </>
    );
}

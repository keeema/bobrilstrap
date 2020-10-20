import * as b from "bobril";
import { IRouteWithNavDefinition } from "../../../../common/routing";
import { Anchor } from "../../../../common/Anchor";
import { Example } from "../../../../common/Example";
import { Badge, srOnly, Button, BadgeVariant } from "../../../../../index";
import { Code } from "../../../../common/Code";
import { Lead } from "../../../../common/Lead";

export const badgesRoute: IRouteWithNavDefinition = {
    url: "badges",
    name: "badges",
    label: "Badges",
    handler: () => <Badges />,
    subs: [
        {
            url: "examples",
            name: "badges-examples",
            label: "Examples",
            subs: [],
        },
        {
            url: "contextual-variations",
            name: "badges-examples",
            label: "Contextual variations",
            subs: [],
        },
        {
            url: "pills",
            name: "badges-pills",
            label: "Pills",
            subs: [],
        },
        {
            url: "links",
            name: "badges-links",
            label: "Links",
            subs: [],
        },
    ],
};

export function Badges(): b.IBobrilNode {
    return (
        <>
            <Anchor name="badges">
                <h1>Badges</h1>
            </Anchor>
            <Lead>Documentation and examples for badges, our small count and labeling component.</Lead>
            <Anchor name="badges-examples">
                <h2>Examples</h2>
            </Anchor>
            <p>
                Badges scale to match the size of the immediate parent element by using relative font sizing and <code>em</code> units.
            </p>
            <Example>
                <h1>
                    Example heading <Badge variant="secondary">New</Badge>
                </h1>
                <h2>
                    Example heading <Badge variant="secondary">New</Badge>
                </h2>
                <h3>
                    Example heading <Badge variant="secondary">New</Badge>
                </h3>
                <h4>
                    Example heading <Badge variant="secondary">New</Badge>
                </h4>
                <h5>
                    Example heading <Badge variant="secondary">New</Badge>
                </h5>
                <h6>
                    Example heading <Badge variant="secondary">New</Badge>
                </h6>
            </Example>
            <Code language="tsx">
                {`<h1>
    Example heading <Badge variant="secondary">New</Badge>
</h1>
<h2>
    Example heading <Badge variant="secondary">New</Badge>
</h2>
<h3>
    Example heading <Badge variant="secondary">New</Badge>
</h3>
<h4>
    Example heading <Badge variant="secondary">New</Badge>
</h4>
<h5>
    Example heading <Badge variant="secondary">New</Badge>
</h5>
<h6>
    Example heading <Badge variant="secondary">New</Badge>
</h6>`}
            </Code>
            <p>Badges can be used as part of links or buttons to provide a counter.</p>
            <Example>
                <Button>
                    Notifications <Badge variant="light">4</Badge>
                </Button>
            </Example>
            <Code language="tsx">{`<Button>
    Notifications <Badge variant="light">4</Badge>
</Button>`}</Code>
            <p>
                Note that depending on how they are used, badges may be confusing for users of screen readers and similar assistive
                technologies. While the styling of badges provides a visual cue as to their purpose, these users will simply be presented
                with the content of the badge. Depending on the specific situation, these badges may seem like random additional words or
                numbers at the end of a sentence, link, or button.
            </p>
            <p>
                Unless the context is clear (as with the “Notifications” example, where it is understood that the “4” is the number of
                notifications), consider including additional context with a visually hidden piece of additional text.
            </p>
            <Example>
                <Button>
                    Profile <Badge variant="light">9</Badge>
                    <span style={srOnly}>unread messages</span>
                </Button>
            </Example>
            <Code language="tsx">{`<Button>
    Profile <Badge variant="light">9</Badge>
    <span style={srOnly}>unread messages</span>
</Button>`}</Code>
            <Anchor name="badges-contextual-variations">
                <h2>Contextual variation</h2>
            </Anchor>
            <p>Add any of the below mentioned modifier prop values to change the appearance of a badge.</p>
            <Example>
                {(["primary", "secondary", "success", "danger", "warning", "info", "light", "dark"] as BadgeVariant[]).map((variant) => (
                    <>
                        <Badge variant={variant}>{variant.toUpperCase()}</Badge>{" "}
                    </>
                ))}
            </Example>
            <Code language="tsx">
                {(["primary", "secondary", "success", "danger", "warning", "info", "light", "dark"] as BadgeVariant[]).map(
                    (variant) => `<Badge variant="${variant}">${variant.toUpperCase()}</Badge>{" "}\n`
                )}
            </Code>
            <Anchor name="badges-pills">
                <h2>Pills</h2>
            </Anchor>
            <p>Make badges more rounded</p>
            <Example>
                {(["primary", "secondary", "success", "danger", "warning", "info", "light", "dark"] as BadgeVariant[]).map((variant) => (
                    <>
                        <Badge variant={variant} pill>
                            {variant.toUpperCase()}
                        </Badge>{" "}
                    </>
                ))}
            </Example>
            <Code language="tsx">
                {(["primary", "secondary", "success", "danger", "warning", "info", "light", "dark"] as BadgeVariant[]).map(
                    (variant) => `<Badge variant="${variant}" pill>${variant.toUpperCase()}</Badge>{" "}\n`
                )}
            </Code>
            <Anchor name="badges-links">
                <h2>Links</h2>
            </Anchor>
            <p>
                Usage of href prop automatically sets <code>{`<a>`}</code> element and quickly provides actionable badges with hover and
                focus states.
            </p>
            <Example>
                {(["primary", "secondary", "success", "danger", "warning", "info", "light", "dark"] as BadgeVariant[]).map((variant) => (
                    <>
                        <Badge variant={variant} href="#">
                            {variant.toUpperCase()}
                        </Badge>{" "}
                    </>
                ))}
            </Example>
            <Code language="tsx">
                {(["primary", "secondary", "success", "danger", "warning", "info", "light", "dark"] as BadgeVariant[]).map(
                    (variant) => `<Badge variant="${variant}" href="#">${variant.toUpperCase()}</Badge>{" "}\n`
                )}
            </Code>
        </>
    );
}

import * as b from "bobril";
import { IRouteWithNavDefinition } from "../../../../common/routing";
import { Anchor } from "../../../../common/Anchor";
import { Example } from "../../../../common/Example";
import {
    alignItems,
    Badge,
    breakpoints,
    display,
    justifyContent,
    ListGroup,
    listGroupItemVariants,
    margin,
    textColor,
} from "../../../../../index";
import { Code } from "../../../../common/Code";
import { Lead } from "../../../../common/Lead";
import { Callout } from "../../../../common/Callout";

export const listGroupRoute: IRouteWithNavDefinition = {
    url: "list-group",
    name: "list-group",
    label: "List group",
    handler: () => <ListGroupDoc />,
    subs: [
        {
            url: "basic-examples",
            name: "list-group-basic-example",
            label: "Basic example",
            subs: [],
        },
        {
            url: "links-and-buttons",
            name: "list-group-links-and-buttons",
            label: "Links and buttons",
            subs: [],
        },
        {
            url: "flush",
            name: "list-group-flush",
            label: "Flush",
            subs: [],
        },
        {
            url: "horizontal",
            name: "list-group-horizontal",
            label: "Horizontal",
            subs: [],
        },
        {
            url: "contextual-classes",
            name: "list-group-contextual-classes",
            label: "Contextual classes",
            subs: [],
        },
        {
            url: "with-badges",
            name: "list-group-with-badges",
            label: "With badges",
            subs: [],
        },
        {
            url: "custom-content",
            name: "list-group-custom-content",
            label: "Custom content",
            subs: [],
        },
    ],
};

export function ListGroupDoc(): b.IBobrilNode {
    return (
        <>
            <Anchor name="list-group">
                <h1>List group</h1>
            </Anchor>
            <Lead>
                List groups are a flexible and powerful component for displaying a series of content. Modify and extend them to support just
                about any content within.
            </Lead>
            <Anchor name="list-group-basic-example">
                <h2>Basic example</h2>
            </Anchor>
            <p>
                he most basic list group is an unordered list with list items. Build upon it with the options that follow, or with your own
                styles as needed.
            </p>
            <p>
                Use <code>active</code> or <code>disabled</code> props to control the state of items.
            </p>
            <Example>
                <ListGroup>
                    <ListGroup.Item active>Cras justo odio</ListGroup.Item>
                    <ListGroup.Item>Dapibus ac facilisis in</ListGroup.Item>
                    <ListGroup.Item>Morbi leo risus</ListGroup.Item>
                    <ListGroup.Item>Porta ac consectetur ac</ListGroup.Item>
                    <ListGroup.Item disabled>Vestibulum at eros</ListGroup.Item>
                </ListGroup>
            </Example>
            <Code language="tsx">{`<ListGroup>
    <ListGroup.Item active>Cras justo odio</ListGroup.Item>
    <ListGroup.Item>Dapibus ac facilisis in</ListGroup.Item>
    <ListGroup.Item>Morbi leo risus</ListGroup.Item>
    <ListGroup.Item>Porta ac consectetur ac</ListGroup.Item>
    <ListGroup.Item disabled>Vestibulum at eros</ListGroup.Item>
</ListGroup>`}</Code>
            <Anchor name="list-group-links-and-buttons">
                <h2>Links and buttons</h2>
            </Anchor>
            <p>
                Use <code>actions</code> prop on <code>{`<ListGroup>`}</code> and <code>action</code> prop on{" "}
                <code>{`<ListGroup.Item>`}</code> to create <em>actionable</em> list group with hover, disabled and active states. Such
                action items are <code>{`<a>`}</code> as default but you can override it by <code>as</code> prop.
            </p>
            <Example>
                <ListGroup actions>
                    <ListGroup.Item action active>
                        Cras justo odio
                    </ListGroup.Item>
                    <ListGroup.Item action>Dapibus ac facilisis in</ListGroup.Item>
                    <ListGroup.Item action>Morbi leo risus</ListGroup.Item>
                    <ListGroup.Item action>Porta ac consectetur ac</ListGroup.Item>
                    <ListGroup.Item action disabled>
                        Vestibulum at eros
                    </ListGroup.Item>
                </ListGroup>
            </Example>
            <Code language="tsx">{`<ListGroup actions>
    <ListGroup.Item action active>
        Cras justo odio
    </ListGroup.Item>
    <ListGroup.Item action>Dapibus ac facilisis in</ListGroup.Item>
    <ListGroup.Item action>Morbi leo risus</ListGroup.Item>
    <ListGroup.Item action>Porta ac consectetur ac</ListGroup.Item>
    <ListGroup.Item action disabled>
        Vestibulum at eros
    </ListGroup.Item>
</ListGroup>`}</Code>
            <p>
                Or as <code>button</code>:
            </p>
            <Example>
                <ListGroup actions>
                    <ListGroup.Item as="button" action active>
                        Cras justo odio
                    </ListGroup.Item>
                    <ListGroup.Item as="button" action>
                        Dapibus ac facilisis in
                    </ListGroup.Item>
                    <ListGroup.Item as="button" action>
                        Morbi leo risus
                    </ListGroup.Item>
                    <ListGroup.Item as="button" action>
                        Porta ac consectetur ac
                    </ListGroup.Item>
                    <ListGroup.Item as="button" action disabled>
                        Vestibulum at eros
                    </ListGroup.Item>
                </ListGroup>
            </Example>
            <Code language="tsx">{`<ListGroup actions>
    <ListGroup.Item as="button" action active>
        Cras justo odio
    </ListGroup.Item>
    <ListGroup.Item as="button" action>
        Dapibus ac facilisis in
    </ListGroup.Item>
    <ListGroup.Item as="button" action>
        Morbi leo risus
    </ListGroup.Item>
    <ListGroup.Item as="button" action>
        Porta ac consectetur ac
    </ListGroup.Item>
    <ListGroup.Item as="button" action disabled>
        Vestibulum at eros
    </ListGroup.Item>
</ListGroup>`}</Code>
            <Anchor name="list-group-flush">
                <h2>Flush</h2>
            </Anchor>
            <p>
                Add <code>flush</code> prop to remove some borders and rounded corners to render list group items edge-to-edge in a parent
                container (e.g., cards).
            </p>
            <Example>
                <ListGroup flush>
                    <ListGroup.Item>Cras justo odio</ListGroup.Item>
                    <ListGroup.Item>Dapibus ac facilisis in</ListGroup.Item>
                    <ListGroup.Item>Morbi leo risus</ListGroup.Item>
                    <ListGroup.Item>Porta ac consectetur ac</ListGroup.Item>
                    <ListGroup.Item>Vestibulum at eros</ListGroup.Item>
                </ListGroup>
            </Example>
            <Code language="tsx">{`<ListGroup flush>
    <ListGroup.Item>Cras justo odio</ListGroup.Item>
    <ListGroup.Item>Dapibus ac facilisis in</ListGroup.Item>
    <ListGroup.Item>Morbi leo risus</ListGroup.Item>
    <ListGroup.Item>Porta ac consectetur ac</ListGroup.Item>
    <ListGroup.Item>Vestibulum at eros</ListGroup.Item>
</ListGroup>`}</Code>
            <Anchor name="list-group-horizontal">
                <h2>Horizontal</h2>
            </Anchor>
            <p>
                Add <code>horizontal</code> prop to change the layout of list group items from vertical to horizontal across all
                breakpoints. Alternatively, set its value <code>sm | md | lg | xl</code> to make a list group horizontal starting at that
                breakpoint’s <code>min-width</code>. Currently horizontal list groups cannot be combined with flush list groups.
            </p>
            <Example>
                <ListGroup horizontal>
                    <ListGroup.Item>Cras justo odio</ListGroup.Item>
                    <ListGroup.Item>Dapibus ac facilisis in</ListGroup.Item>
                    <ListGroup.Item>Morbi leo risus</ListGroup.Item>
                </ListGroup>
            </Example>
            <Code language="tsx">{`<ListGroup flush horizontal>
    <ListGroup.Item>Cras justo odio</ListGroup.Item>
    <ListGroup.Item>Dapibus ac facilisis in</ListGroup.Item>
    <ListGroup.Item>Morbi leo risus</ListGroup.Item>
</ListGroup>`}</Code>
            {breakpoints.map((breakpoint) => (
                <>
                    <Example>
                        <ListGroup horizontal={breakpoint}>
                            <ListGroup.Item>Cras justo odio</ListGroup.Item>
                            <ListGroup.Item>Dapibus ac facilisis in</ListGroup.Item>
                            <ListGroup.Item>Morbi leo risus</ListGroup.Item>
                        </ListGroup>
                    </Example>
                    <Code language="tsx">{`<ListGroup horizontal="${breakpoint}">
    <ListGroup.Item>Cras justo odio</ListGroup.Item>
    <ListGroup.Item>Dapibus ac facilisis in</ListGroup.Item>
    <ListGroup.Item>Morbi leo risus</ListGroup.Item>
</ListGroup>`}</Code>
                </>
            ))}
            <Anchor name="list-group-contextual-classes">
                <h2>Contextual classes</h2>
            </Anchor>
            <p>
                Add <code>flush</code> prop to remove some borders and rounded corners to render list group items edge-to-edge in a parent
                container (e.g., cards).
            </p>
            <Example>
                <ListGroup>
                    <ListGroup.Item>Dapibus ac facilisis in</ListGroup.Item>
                    {listGroupItemVariants.map((variant) => (
                        <ListGroup.Item variant={variant}>A simple {variant} list group item</ListGroup.Item>
                    ))}
                </ListGroup>
            </Example>
            <Code language="tsx">{`<ListGroup>
    <ListGroup.Item>Dapibus ac facilisis in</ListGroup.Item>
${listGroupItemVariants
    .map((variant) => `    <ListGroup.Item variant="${variant}">A simple ${variant} list group item</ListGroup.Item>`)
    .join("\n")}
</ListGroup>`}</Code>
            <Callout variant="warning">
                <h5>Conveying meaning to assistive technologies</h5>
                <p>
                    Using color to add meaning only provides a visual indication, which will not be conveyed to users of assistive
                    technologies – such as screen readers. Ensure that information denoted by the color is either obvious from the content
                    itself (e.g. the visible text), or is included through alternative means, such as additional text hidden with the
                    <code>srOnly</code> style.
                </p>
            </Callout>
            <Anchor name="list-group-with-badges">
                <h2>With badges</h2>
            </Anchor>
            <p>Add badges to any list group item to show unread counts, activity, and more.</p>
            <Example>
                <ListGroup>
                    <ListGroup.Item style={[display("flex"), justifyContent("between"), alignItems("center")]}>
                        Cras justo odio
                        <Badge pill variant="primary">
                            14
                        </Badge>
                    </ListGroup.Item>
                    <ListGroup.Item style={[display("flex"), justifyContent("between"), alignItems("center")]}>
                        Dapibus ac facilisis in
                        <Badge pill variant="primary">
                            2
                        </Badge>
                    </ListGroup.Item>
                    <ListGroup.Item style={[display("flex"), justifyContent("between"), alignItems("center")]}>
                        Morbi leo risus
                        <Badge pill variant="primary">
                            1
                        </Badge>
                    </ListGroup.Item>
                </ListGroup>
            </Example>
            <Code language="tsx">{`<ListGroup>
    <ListGroup.Item style={[display("flex"), justifyContent("between"), alignItems("center")]}>
        Cras justo odio
        <Badge pill variant="primary">
            14
        </Badge>
    </ListGroup.Item>
    <ListGroup.Item style={[display("flex"), justifyContent("between"), alignItems("center")]}>
        Dapibus ac facilisis in
        <Badge pill variant="primary">
            2
        </Badge>
    </ListGroup.Item>
    <ListGroup.Item style={[display("flex"), justifyContent("between"), alignItems("center")]}>
        Morbi leo risus
        <Badge pill variant="primary">
            1
        </Badge>
    </ListGroup.Item>
</ListGroup>`}</Code>
            <Anchor name="list-group-custom-content">
                <h2>Custom content</h2>
            </Anchor>
            <p>dd nearly any HTML within, even for linked list groups like the one below.</p>
            <Example>
                <ListGroup>
                    <ListGroup.Item action active>
                        <div style={[display("flex"), justifyContent("between")]}>
                            <h5 style={margin({ side: "b", size: 1 })}>List group item heading</h5>
                            <small>3 days ago</small>
                        </div>
                        <p style={margin({ side: "b", size: 1 })}>
                            Donec id elit non mi porta gravida at eget metus. Maecenas sed diam eget risus varius blandit.
                        </p>
                        <small>Donec id elit non mi porta.</small>
                    </ListGroup.Item>
                    <ListGroup.Item action>
                        <div style={[display("flex"), justifyContent("between")]}>
                            <h5 style={margin({ side: "b", size: 1 })}>List group item heading</h5>
                            <small style={textColor("muted")}>3 days ago</small>
                        </div>
                        <p style={margin({ side: "b", size: 1 })}>
                            Donec id elit non mi porta gravida at eget metus. Maecenas sed diam eget risus varius blandit.
                        </p>
                        <small style={textColor("muted")}>Donec id elit non mi porta.</small>
                    </ListGroup.Item>
                    <ListGroup.Item action>
                        <div style={[display("flex"), justifyContent("between")]}>
                            <h5 style={margin({ side: "b", size: 1 })}>List group item heading</h5>
                            <small style={textColor("muted")}>3 days ago</small>
                        </div>
                        <p style={margin({ side: "b", size: 1 })}>
                            Donec id elit non mi porta gravida at eget metus. Maecenas sed diam eget risus varius blandit.
                        </p>
                        <small style={textColor("muted")}>Donec id elit non mi porta.</small>
                    </ListGroup.Item>
                </ListGroup>
            </Example>
            <Code language="tsx">{`<ListGroup>
    <ListGroup.Item action active>
        <div style={[display("flex"), justifyContent("between")]}>
            <h5 style={margin({ side: "b", size: 1 })}>List group item heading</h5>
            <small>3 days ago</small>
        </div>
        <p style={margin({ side: "b", size: 1 })}>
            Donec id elit non mi porta gravida at eget metus. Maecenas sed diam eget risus varius blandit.
        </p>
        <small>Donec id elit non mi porta.</small>
    </ListGroup.Item>
    <ListGroup.Item action>
        <div style={[display("flex"), justifyContent("between")]}>
            <h5 style={margin({ side: "b", size: 1 })}>List group item heading</h5>
            <small style={textColor("muted")}>3 days ago</small>
        </div>
        <p style={margin({ side: "b", size: 1 })}>
            Donec id elit non mi porta gravida at eget metus. Maecenas sed diam eget risus varius blandit.
        </p>
        <small style={textColor("muted")}>Donec id elit non mi porta.</small>
    </ListGroup.Item>
    <ListGroup.Item action>
        <div style={[display("flex"), justifyContent("between")]}>
            <h5 style={margin({ side: "b", size: 1 })}>List group item heading</h5>
            <small style={textColor("muted")}>3 days ago</small>
        </div>
        <p style={margin({ side: "b", size: 1 })}>
            Donec id elit non mi porta gravida at eget metus. Maecenas sed diam eget risus varius blandit.
        </p>
        <small style={textColor("muted")}>Donec id elit non mi porta.</small>
    </ListGroup.Item>
</ListGroup>`}</Code>
        </>
    );
}

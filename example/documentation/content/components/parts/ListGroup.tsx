import * as b from "bobril";
import { IRouteWithNavDefinition } from "../../../../common/routing";
import { Anchor } from "../../../../common/Anchor";
import { Example } from "../../../../common/Example";
import { ListGroup } from "../../../../../index";
import { Code } from "../../../../common/Code";
import { Lead } from "../../../../common/Lead";

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
        </>
    );
}

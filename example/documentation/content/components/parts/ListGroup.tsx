import * as b from "bobril";
import { IRouteWithNavDefinition } from "../../../../common/routing";
import { Anchor } from "../../../../common/Anchor";
import { Example } from "../../../../common/Example";
import {
    alignItems,
    Badge,
    breakpoints,
    Col,
    display,
    justifyContent,
    ListGroup,
    listGroupItemVariants,
    margin,
    Row,
    TabContent,
    textColor,
    ButtonGroup,
    Button,
} from "../../../../../index";
import { Code } from "../../../../common/Code";
import { Lead } from "../../../../common/Lead";
import { Callout } from "../../../../common/Callout";
import { TabPane } from "../../../../../src/components/TabPane";
import { ITabActions } from "../../../../../src/components/ListGroupItem";
import { OptionsTable, OptionsRow } from "../../../../common/OptionsTable";

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
        {
            url: "tabbable-panes",
            name: "list-group-tabbable-panes",
            label: "Tabbable panes",
            subs: [
                {
                    url: "reactive",
                    name: "list-group-tabbable-panes-reactive",
                    label: "Reactive",
                    subs: [],
                },
                {
                    url: "native",
                    name: "list-group-tabbable-panes-native",
                    label: "Bootstrap native",
                    subs: [
                        {
                            url: "api",
                            name: "list-group-tabbable-panes-native-api",
                            label: "API",
                            subs: [],
                        },
                    ],
                },
            ],
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
            <p>Add nearly any HTML within, even for linked list groups like the one below.</p>
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
            <Anchor name="list-group-tabbable-panes">
                <h2>Tabbable panes</h2>
            </Anchor>
            <p>You can design tabbable panes of local content reactively by hooks, bobx etc. or use the bootstrap native behavior.</p>
            <Anchor name="list-group-tabbable-panes-reactive">
                <h3>Reactive</h3>
            </Anchor>
            <Example>
                <TabsReactiveExample />
            </Example>
            <Code language="tsx">{`function TabsReactiveExample(): b.IBobrilNode {
    const [activeTab, setActiveTab] = b.useState(0);

    return (
        <>
            <Row style={margin({ side: "b", size: 1 })}>
                <Col span={4}>
                    <ListGroup actions tabs id="list-tab">
                        {contents.map((content, index) => (
                            <ListGroup.Item
                                tab
                                active={activeTab === index}
                                id={\`list-\${content.id}-list1\`}
                                onClick={() => setActiveTab(index)}
                            >
                                {content.title}
                            </ListGroup.Item>
                        ))}
                    </ListGroup>
                </Col>
                <Col span={8}>
                    <TabContent id="nav-tab-content-1">
                        <TabPane active aria-labelledby={\`list-\${contents[activeTab].id}-list1\`}>
                            {contents[activeTab].text}
                        </TabPane>
                    </TabContent>
                </Col>
            </Row>
        </>
    );
}

<TabsReactiveExample />`}</Code>
            <Anchor name="list-group-tabbable-panes-native">
                <h3>Bootstrap native</h3>
            </Anchor>
            <p>
                Set prop <code>toggleable</code> prop to switch predefined contents natively by Bootstrap. It is necessary to define all tab
                contents and link them with tabs by <code>id</code>s.
            </p>
            <p>
                Prop <code>active</code> is mandatory on initial tab. Add prop <code>fade</code> to animation to transition.
            </p>
            <Example>
                <Row>
                    <Col span={4}>
                        <ListGroup actions tabs id="list-tab">
                            <ListGroup.Item action tab toggleable active id="list-home-list" href="#list-home" aria-controls="home">
                                Home
                            </ListGroup.Item>
                            <ListGroup.Item action tab toggleable id="list-profile-list" href="#list-profile" aria-controls="profile">
                                Profile
                            </ListGroup.Item>
                            <ListGroup.Item action tab toggleable id="list-messages-list" href="#list-messages" aria-controls="messages">
                                Messages
                            </ListGroup.Item>
                            <ListGroup.Item action tab toggleable id="list-settings-list" href="#list-settings" aria-controls="settings">
                                Settings
                            </ListGroup.Item>
                        </ListGroup>
                    </Col>
                    <Col span={8}>
                        <TabContent id="nav-tab-content-2">
                            <TabPane active fade id="list-home" aria-labelledby="list-home-list">
                                {contents[0].text}
                            </TabPane>
                            <TabPane fade id="list-profile" aria-labelledby="list-profile-list">
                                {contents[1].text}
                            </TabPane>
                            <TabPane fade id="list-messages" aria-labelledby="list-messages-list">
                                {contents[2].text}
                            </TabPane>
                            <TabPane fade id="list-settings" aria-labelledby="list-settings-list">
                                {contents[3].text}
                            </TabPane>
                        </TabContent>
                    </Col>
                </Row>
            </Example>
            <Code language="tsx">{`<Row>
    <Col span={4}>
        <ListGroup actions tabs id="list-tab">
            <ListGroup.Item action tab toggleable active id="list-home-list2" href="#list-home2" aria-controls="home">
                Home
            </ListGroup.Item>
            <ListGroup.Item action tab toggleable id="list-profile-list2" href="#list-profile2" aria-controls="profile">
                Profile
            </ListGroup.Item>
            <ListGroup.Item action tab toggleable id="list-messages-list2" href="#list-messages2" aria-controls="messages">
                Messages
            </ListGroup.Item>
            <ListGroup.Item action tab toggleable id="list-settings-list2" href="#list-settings2" aria-controls="settings">
                Settings
            </ListGroup.Item>
        </ListGroup>
    </Col>
    <Col span={8}>
        <TabContent id="nav-tab-content-2">
            <TabPane active fade id="list-home2" aria-labelledby="list-home-list2">
                ${contents[0].text}
            </TabPane>
            <TabPane fade id="list-profile2" aria-labelledby="list-profile-list2">
                ${contents[1].text}
            </TabPane>
            <TabPane fade id="list-messages2" aria-labelledby="list-messages-list2">
                ${contents[2].text}
            </TabPane>
            <TabPane fade id="list-settings2" aria-labelledby="list-settings-list2">
                ${contents[3].text}
            </TabPane>
        </TabContent>
    </Col>
</Row>`}</Code>

            <p>
                You can also control tab externally by actions returned from <code>onItemCreated</code>:
            </p>
            <Example>
                <TabsNativeExample />
            </Example>
            <Code language="tsx">{`function TabsNativeExample(): b.IBobrilNode {
    const [tabActions] = b.useState<ITabActions[]>(new Array<ITabActions>());

    return (
        <>
            <Row style={margin({ side: "b", size: 1 })}>
                <Col span={4}>
                    <ListGroup actions tabs id="list-tab">
                        <ListGroup.Item
                            action
                            tab
                            toggleable
                            active
                            href="#list-home3"
                            id="list-home-list3"
                            onItemCreated={(actions) => (tabActions[0] = actions)}
                        >
                            Home
                        </ListGroup.Item>
                        <ListGroup.Item
                            action
                            tab
                            toggleable
                            href="#list-profile3"
                            id="list-profile-list3"
                            onItemCreated={(actions) => (tabActions[1] = actions)}
                        >
                            Profile
                        </ListGroup.Item>
                        <ListGroup.Item
                            action
                            tab
                            toggleable
                            href="#list-messages3"
                            id="list-messages-list3"
                            onItemCreated={(actions) => (tabActions[2] = actions)}
                        >
                            Messages
                        </ListGroup.Item>
                        <ListGroup.Item
                            action
                            tab
                            toggleable
                            href="#list-settings3"
                            id="list-settings-list3"
                            onItemCreated={(actions) => (tabActions[3] = actions)}
                        >
                            Settings
                        </ListGroup.Item>
                    </ListGroup>
                </Col>
                <Col span={8}>
                    <TabContent id="nav-tab-content-3">
                        <TabPane active fade id="list-home3" aria-labelledby="list-home-list3">
                            ${contents[0].text}
                        </TabPane>
                        <TabPane fade id="list-profile3" aria-labelledby="list-profile-list3">
                            ${contents[1].text}
                        </TabPane>
                        <TabPane fade id="list-messages3" aria-labelledby="list-messages-list3">
                            ${contents[2].text}
                        </TabPane>
                        <TabPane fade id="list-settings3" aria-labelledby="list-settings-list3">
                            ${contents[3].text}
                        </TabPane>
                    </TabContent>
                </Col>
            </Row>
            <Row>
                <Col>
                    <ButtonGroup>
                        <Button onClick={() => tabActions[0]("show")}>Home</Button>
                        <Button onClick={() => tabActions[1]("show")}>Profile</Button>
                        <Button onClick={() => tabActions[2]("show")}>Messages</Button>
                        <Button onClick={() => tabActions[3]("show")}>Settings</Button>
                    </ButtonGroup>
                </Col>
            </Row>
        </>
    );
}

<TabsNativeExample />`}</Code>
            <Anchor name="list-group-tabbable-panes-native-api">
                <h4>API</h4>
            </Anchor>
            <OptionsTable>
                <OptionsRow>
                    {{
                        name: "toggleable",
                        type: "boolean",
                        defaultValue: "false",
                        description: "Turn bootstrap native toggling on.",
                    }}
                </OptionsRow>
                <OptionsRow>
                    {{
                        name: "fade",
                        type: "boolean",
                        defaultValue: "false",
                        description: "Add fade animation.",
                    }}
                </OptionsRow>
                <OptionsRow>
                    {{
                        name: "onHide",
                        type: "() => void",
                        defaultValue: "undefined",
                        description: <p>This event is fired immediately when hiding is started.</p>,
                    }}
                </OptionsRow>
                <OptionsRow>
                    {{
                        name: "onHiding",
                        type: "() => void",
                        defaultValue: "undefined",
                        description: (
                            <p>
                                This event is fired when a collapse element has been hidden from the user (will wait for CSS transitions to
                                complete).
                            </p>
                        ),
                    }}
                </OptionsRow>
                <OptionsRow>
                    {{
                        name: "onShow",
                        type: "() => void",
                        defaultValue: "undefined",
                        description: <p>This event fires immediately when the showing is started.</p>,
                    }}
                </OptionsRow>
                <OptionsRow>
                    {{
                        name: "onShown",
                        type: "() => void",
                        defaultValue: "undefined",
                        description: (
                            <p>
                                This event is fired when a collapse element has been made visible to the user (will wait for CSS transitions
                                to complete).
                            </p>
                        ),
                    }}
                </OptionsRow>
                <OptionsRow>
                    {{
                        name: "onItemCreated",
                        type: "onItemCreated?: (action: ITabActions, element: JQuery<HTMLElement>) => void",
                        defaultValue: "undefined",
                        description: (
                            <p>
                                This callback is fired when item is initialized and provides <code>action</code> as controller instance.
                            </p>
                        ),
                    }}
                </OptionsRow>
            </OptionsTable>
        </>
    );
}

function TabsReactiveExample(): b.IBobrilNode {
    const [activeTab, setActiveTab] = b.useState(0);

    return (
        <>
            <Row style={margin({ side: "b", size: 1 })}>
                <Col span={4}>
                    <ListGroup actions tabs id="list-tab">
                        {contents.map((content, index) => (
                            <ListGroup.Item
                                tab
                                active={activeTab === index}
                                id={`list-${content.id}-list1`}
                                onClick={() => setActiveTab(index)}
                            >
                                {content.title}
                            </ListGroup.Item>
                        ))}
                    </ListGroup>
                </Col>
                <Col span={8}>
                    <TabContent id="nav-tab-content-1">
                        <TabPane active aria-labelledby={`list-${contents[activeTab].id}-list1`}>
                            {contents[activeTab].text}
                        </TabPane>
                    </TabContent>
                </Col>
            </Row>
        </>
    );
}

function TabsNativeExample(): b.IBobrilNode {
    const [tabActions] = b.useState<ITabActions[]>(new Array<ITabActions>());

    return (
        <>
            <Row style={margin({ side: "b", size: 1 })}>
                <Col span={4}>
                    <ListGroup actions tabs id="list-tab">
                        <ListGroup.Item
                            action
                            tab
                            toggleable
                            active
                            href="#list-home3"
                            id="list-home-list3"
                            onItemCreated={(actions) => (tabActions[0] = actions)}
                        >
                            Home
                        </ListGroup.Item>
                        <ListGroup.Item
                            action
                            tab
                            toggleable
                            href="#list-profile3"
                            id="list-profile-list3"
                            onItemCreated={(actions) => (tabActions[1] = actions)}
                        >
                            Profile
                        </ListGroup.Item>
                        <ListGroup.Item
                            action
                            tab
                            toggleable
                            href="#list-messages3"
                            id="list-messages-list3"
                            onItemCreated={(actions) => (tabActions[2] = actions)}
                        >
                            Messages
                        </ListGroup.Item>
                        <ListGroup.Item
                            action
                            tab
                            toggleable
                            href="#list-settings3"
                            id="list-settings-list3"
                            onItemCreated={(actions) => (tabActions[3] = actions)}
                        >
                            Settings
                        </ListGroup.Item>
                    </ListGroup>
                </Col>
                <Col span={8}>
                    <TabContent id="nav-tab-content-3">
                        <TabPane active fade id="list-home3" aria-labelledby="list-home-list3">
                            {contents[0].text}
                        </TabPane>
                        <TabPane fade id="list-profile3" aria-labelledby="list-profile-list3">
                            {contents[1].text}
                        </TabPane>
                        <TabPane fade id="list-messages3" aria-labelledby="list-messages-list3">
                            {contents[2].text}
                        </TabPane>
                        <TabPane fade id="list-settings3" aria-labelledby="list-settings-list3">
                            {contents[3].text}
                        </TabPane>
                    </TabContent>
                </Col>
            </Row>
            <Row>
                <Col>
                    <ButtonGroup>
                        <Button onClick={() => tabActions[0]("show")}>Home</Button>
                        <Button onClick={() => tabActions[1]("show")}>Profile</Button>
                        <Button onClick={() => tabActions[2]("show")}>Messages</Button>
                        <Button onClick={() => tabActions[3]("show")}>Settings</Button>
                    </ButtonGroup>
                </Col>
            </Row>
        </>
    );
}

const contents = [
    {
        id: "home",
        text:
            "Velit aute mollit ipsum ad dolor consectetur nulla officia culpa adipisicing exercitation fugiat tempor. Voluptate deserunt sit sunt nisi aliqua fugiat proident ea ut. Mollit voluptate reprehenderit occaecat nisi ad non minim tempor sunt voluptate consectetur exercitation id ut nulla. Ea et fugiat aliquip nostrud sunt incididunt consectetur culpa aliquip eiusmod dolor. Anim ad Lorem aliqua in cupidatat nisi enim eu nostrud do aliquip veniam minim.",
        title: "Home",
    },
    {
        id: "profile",
        text:
            "Cupidatat quis ad sint excepteur laborum in esse qui. Et excepteur consectetur ex nisi eu do cillum ad laborum. Mollit et eu officia dolore sunt Lorem culpa qui commodo velit ex amet id ex. Officia anim incididunt laboris deserunt anim aute dolor incididunt veniam aute dolore do exercitation. Dolor nisi culpa ex ad irure in elit eu dolore. Ad laboris ipsum reprehenderit irure non commodo enim culpa commodo veniam incididunt veniam ad.",
        title: "Profile",
    },
    {
        id: "messages",
        text:
            "Ut ut do pariatur aliquip aliqua aliquip exercitation do nostrud commodo reprehenderit aute ipsum voluptate. Irure Lorem et laboris nostrud amet cupidatat cupidatat anim do ut velit mollit consequat enim tempor. Consectetur est minim nostrud nostrud consectetur irure labore voluptate irure. Ipsum id Lorem sit sint voluptate est pariatur eu ad cupidatat et deserunt culpa sit eiusmod deserunt. Consectetur et fugiat anim do eiusmod aliquip nulla laborum elit adipisicing pariatur cillum.",
        title: "Messages",
    },
    {
        id: "settings",
        text:
            "Irure enim occaecat labore sit qui aliquip reprehenderit amet velit. Deserunt ullamco ex elit nostrud ut dolore nisi officia magna sit occaecat laboris sunt dolor. Nisi eu minim cillum occaecat aute est cupidatat aliqua labore aute occaecat ea aliquip sunt amet. Aute mollit dolor ut exercitation irure commodo non amet consectetur quis amet culpa. Quis ullamco nisi amet qui aute irure eu. Magna labore dolor quis ex labore id nostrud deserunt dolor eiusmod eu pariatur culpa mollit in irure.",
        title: "Settings",
    },
];

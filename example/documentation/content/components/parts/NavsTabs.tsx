import * as b from "bobril";
import { IRouteWithNavDefinition } from "../../../../common/routing";
import { Anchor } from "../../../../common/Anchor";
import { Example } from "../../../../common/Example";
import { Dropdown, flex, ITab, Nav, TabContent, TabPane, textAlign, justifyContent, margin } from "../../../../../index";
import { Code } from "../../../../common/Code";
import { Lead } from "../../../../common/Lead";
import { Callout } from "../../../../common/Callout";

export const navsAndTabsRoute: IRouteWithNavDefinition = {
    url: "navs-and-tabs",
    name: "navs-and-tabs",
    label: "Navs & tabs",
    handler: () => <NavsAndTabsDoc />,
    subs: [
        {
            url: "base-nav",
            name: "navs-and-tabs-base-nav",
            label: "Base nav",
            subs: [],
        },
        {
            url: "available-styles",
            name: "navs-and-tabs-available-styles",
            label: "Available styles",
            subs: [
                {
                    url: "horizontal-alignment",
                    name: "navs-and-tabs-available-styles-horizontal-alignment",
                    label: "Available styles",
                    subs: [],
                },
                {
                    url: "vertical",
                    name: "navs-and-tabs-available-styles-vertical",
                    label: "Vertical",
                    subs: [],
                },
                {
                    url: "tabs",
                    name: "navs-and-tabs-available-styles-tabs",
                    label: "Tabs",
                    subs: [],
                },
                {
                    url: "pills",
                    name: "navs-and-tabs-available-styles-pills",
                    label: "Pills",
                    subs: [],
                },
                {
                    url: "fill-and-justify",
                    name: "navs-and-tabs-available-styles-fill-and-justify",
                    label: "Fill and justify",
                    subs: [],
                },
            ],
        },
        {
            url: "working-with-flex",
            name: "navs-and-tabs-working-with-flex",
            label: "Working with flex",
            subs: [],
        },
        {
            url: "regarding-accessibility",
            name: "navs-and-tabs-regarding-accessibility",
            label: "Regarding accessibility",
            subs: [],
        },
        {
            url: "using-dropdowns",
            name: "navs-and-tabs-using-dropdowns",
            label: "Using dropdowns",
            subs: [
                {
                    url: "tabs-with-dropdowns",
                    name: "navs-and-tabs-using-dropdowns-tabs-with-dropdowns",
                    label: "Tabs dropdowns",
                    subs: [],
                },
                {
                    url: "pills-with-dropdowns",
                    name: "navs-and-tabs-using-dropdowns-pills-with-dropdowns",
                    label: "Pills with dropdowns",
                    subs: [],
                },
            ],
        },
        {
            url: "tabbable-panes",
            name: "navs-and-tabs-tabbable-panes",
            label: "Tabbable panes",
            subs: [],
        },
    ],
};

export function NavsAndTabsDoc(): b.IBobrilNode {
    return (
        <>
            <Anchor name="navs-and-tabs">
                <h1>{`Navs & tabs`}</h1>
            </Anchor>
            <Lead>Documentation and examples for how to use included navigation components.</Lead>
            <Anchor name="navs-and-tabs-base-nav">
                <h2>Base nav</h2>
            </Anchor>
            <p>
                Navigation available in Bootstrap share general markup and styles, from the base <code>{`<Nav>`}</code> (or{" "}
                <code>{`<Navbar.Nav>`}</code>) component to the active and disabled states. Swap modifiers to switch between each style.
            </p>
            <p>
                The base <code>{`<Nav>`}</code> component is built with flexbox and provide a strong foundation for building all types of
                navigation components. It includes some style overrides (for working with lists), some link padding for larger hit areas,
                and basic disabled styling.
            </p>
            <Callout variant="info">
                <h5>Conveying meaning to assistive technologies</h5>
                <p>
                    The base <code>{`<Nav>`}</code> component does not include any <code>active</code> state. The following examples include
                    the prop, mainly to demonstrate that this particular prop does not trigger any special styling.
                </p>
                <p>
                    To convey the active state to assistive technologies, use the <code>aria-current</code> prop — using the page value for
                    current page, or <code>true</code> for the current item in a set.
                </p>
            </Callout>
            <Example>
                <Nav>
                    <Nav.Item>
                        <Nav.Link active aria-current href="javascript:void(0)">
                            Active
                        </Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link href="javascript:void(0)">Link</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link href="javascript:void(0)">Link</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link href="javascript:void(0)" disabled>
                            Disabled
                        </Nav.Link>
                    </Nav.Item>
                </Nav>
            </Example>
            <Code language="tsx">{`<Nav>
    <Nav.Item>
        <Nav.Link active aria-current href="javascript:void(0)">
            Active
        </Nav.Link>
    </Nav.Item>
    <Nav.Item>
        <Nav.Link href="javascript:void(0)">Link</Nav.Link>
    </Nav.Item>
    <Nav.Item>
        <Nav.Link href="javascript:void(0)">Link</Nav.Link>
    </Nav.Item>
    <Nav.Item>
        <Nav.Link href="javascript:void(0)" disabled>
            Disabled
        </Nav.Link>
    </Nav.Item>
</Nav>`}</Code>
            <p>
                When using a <code>{`<nav>`}</code>-based navigation, you can safely omit <code>{`<Nav.Item>`}</code> as only{" "}
                <code>{`<Nav.Link>`}</code> is required for styling <code>{`<a>`}</code> elements.
            </p>
            <Example>
                <Nav as="nav">
                    <Nav.Link active aria-current href="javascript:void(0)">
                        Active
                    </Nav.Link>
                    <Nav.Link href="javascript:void(0)">Link</Nav.Link>
                    <Nav.Link href="javascript:void(0)">Link</Nav.Link>
                    <Nav.Link href="javascript:void(0)" disabled>
                        Disabled
                    </Nav.Link>
                </Nav>
            </Example>
            <Code language="tsx">{`<Nav as="nav">
    <Nav.Link active aria-current href="javascript:void(0)">
        Active
    </Nav.Link>
    <Nav.Link href="javascript:void(0)">Link</Nav.Link>
    <Nav.Link href="javascript:void(0)">Link</Nav.Link>
    <Nav.Link href="javascript:void(0)" disabled>
        Disabled
    </Nav.Link>
</Nav>`}</Code>
            <Anchor name="navs-and-tabs-available-styles">
                <h2>Available styles</h2>
            </Anchor>
            <p>
                Change the style of <code>{`<Nav>`}</code>s component with modifiers and utilities. Mix and match as needed, or build your
                own.
            </p>
            <Anchor name="navs-and-tabs-available-styles-horizontal-alignment">
                <h3>Horizontal alignment</h3>
            </Anchor>
            <p>
                Centered with <code>justifyContent("center")</code>:
            </p>
            <Example>
                <Nav style={justifyContent("center")}>
                    <Nav.Item>
                        <Nav.Link active aria-current>
                            Active
                        </Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link>Link</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link>Link</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link disabled>Disabled</Nav.Link>
                    </Nav.Item>
                </Nav>
            </Example>
            <Code language="tsx">{`<Nav style={justifyContent("center")}>
    <Nav.Item>
        <Nav.Link active aria-current>
            Active
        </Nav.Link>
    </Nav.Item>
    <Nav.Item>
        <Nav.Link>Link</Nav.Link>
    </Nav.Item>
    <Nav.Item>
        <Nav.Link>Link</Nav.Link>
    </Nav.Item>
    <Nav.Item>
        <Nav.Link disabled>
            Disabled
        </Nav.Link>
    </Nav.Item>
</Nav>`}</Code>
            <p>Right:</p>
            <Example>
                <Nav style={justifyContent("end")}>
                    <Nav.Item>
                        <Nav.Link active aria-current>
                            Active
                        </Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link>Link</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link>Link</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link disabled>Disabled</Nav.Link>
                    </Nav.Item>
                </Nav>
            </Example>
            <Code language="tsx">{`<Nav style={justifyContent("end")}>
    <Nav.Item>
        <Nav.Link active aria-current>
            Active
        </Nav.Link>
    </Nav.Item>
    <Nav.Item>
        <Nav.Link>Link</Nav.Link>
    </Nav.Item>
    <Nav.Item>
        <Nav.Link>Link</Nav.Link>
    </Nav.Item>
    <Nav.Item>
        <Nav.Link disabled>
            Disabled
        </Nav.Link>
    </Nav.Item>
</Nav>`}</Code>
            <Anchor name="navs-and-tabs-available-styles-vertical">
                <h3>Vertical</h3>
            </Anchor>
            <p>
                Stack your navigation by changing the flex item direction with the <code>flex("column")</code> utility. Need to stack them
                on some viewports but not others? Use the responsive versions (e.g., <code>flex("column", "sm")</code>).
            </p>
            <Example>
                <Nav style={flex("column")}>
                    <Nav.Item>
                        <Nav.Link active aria-current>
                            Active
                        </Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link>Link</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link>Link</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link disabled>Disabled</Nav.Link>
                    </Nav.Item>
                </Nav>
            </Example>
            <Code language="tsx">{`<Nav style={flex("column")}>
    <Nav.Item>
        <Nav.Link active aria-current>
            Active
        </Nav.Link>
    </Nav.Item>
    <Nav.Item>
        <Nav.Link>Link</Nav.Link>
    </Nav.Item>
    <Nav.Item>
        <Nav.Link>Link</Nav.Link>
    </Nav.Item>
    <Nav.Item>
        <Nav.Link disabled>
            Disabled
        </Nav.Link>
    </Nav.Item>
</Nav>`}</Code>
            <Anchor name="navs-and-tabs-available-styles-tabs">
                <h3>Tabs</h3>
            </Anchor>
            <Example>
                <Nav tabs>
                    <Nav.Item>
                        <Nav.Link active aria-current>
                            Active
                        </Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link>Link</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link>Link</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link disabled>Disabled</Nav.Link>
                    </Nav.Item>
                </Nav>
            </Example>
            <Code language="tsx">{`<Nav tabs>
    <Nav.Item>
        <Nav.Link active aria-current>
            Active
        </Nav.Link>
    </Nav.Item>
    <Nav.Item>
        <Nav.Link>Link</Nav.Link>
    </Nav.Item>
    <Nav.Item>
        <Nav.Link>Link</Nav.Link>
    </Nav.Item>
    <Nav.Item>
        <Nav.Link disabled>
            Disabled
        </Nav.Link>
    </Nav.Item>
</Nav>`}</Code>
            <Anchor name="navs-and-tabs-available-styles-pills">
                <h3>Pills</h3>
            </Anchor>
            <Example>
                <Nav pills>
                    <Nav.Item>
                        <Nav.Link active aria-current>
                            Active
                        </Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link>Link</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link>Link</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link disabled>Disabled</Nav.Link>
                    </Nav.Item>
                </Nav>
            </Example>
            <Code language="tsx">{`<Nav pills>
    <Nav.Item>
        <Nav.Link active aria-current>
            Active
        </Nav.Link>
    </Nav.Item>
    <Nav.Item>
        <Nav.Link>Link</Nav.Link>
    </Nav.Item>
    <Nav.Item>
        <Nav.Link>Link</Nav.Link>
    </Nav.Item>
    <Nav.Item>
        <Nav.Link disabled>
            Disabled
        </Nav.Link>
    </Nav.Item>
</Nav>`}</Code>
            <Anchor name="navs-and-tabs-available-styles-fill-and-justify">
                <h3>Fill and justify</h3>
            </Anchor>
            <p>
                Force your <code>{`<Nav>`}</code>’s contents to extend the full available width one of two modifier props. To
                proportionately fill all available space with your <code>{`<Nav.Item>`}</code>s, use <code>fill</code> prop. Notice that all
                horizontal space is occupied, but not every nav item has the same width.
            </p>
            <Example>
                <Nav pills fill>
                    <Nav.Item>
                        <Nav.Link active aria-current>
                            Active
                        </Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link>Link</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link>Link</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link disabled>Disabled</Nav.Link>
                    </Nav.Item>
                </Nav>
            </Example>
            <Code language="tsx">{`<Nav pills fill>
    <Nav.Item>
        <Nav.Link active aria-current>
            Active
        </Nav.Link>
    </Nav.Item>
    <Nav.Item>
        <Nav.Link>Link</Nav.Link>
    </Nav.Item>
    <Nav.Item>
        <Nav.Link>Link</Nav.Link>
    </Nav.Item>
    <Nav.Item>
        <Nav.Link disabled>
            Disabled
        </Nav.Link>
    </Nav.Item>
</Nav>`}</Code>
            <p>
                For equal-width elements, use <code>justified</code> prop. All horizontal space will be occupied by nav links, but unlike
                the <code>fill</code> above, every nav item will be the same width.
            </p>
            <Example>
                <Nav pills justified>
                    <Nav.Item>
                        <Nav.Link active aria-current>
                            Active
                        </Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link>Link</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link>Link</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link disabled>Disabled</Nav.Link>
                    </Nav.Item>
                </Nav>
            </Example>
            <Code language="tsx">{`<Nav pills justified>
    <Nav.Item>
        <Nav.Link active aria-current>
            Active
        </Nav.Link>
    </Nav.Item>
    <Nav.Item>
        <Nav.Link>Link</Nav.Link>
    </Nav.Item>
    <Nav.Item>
        <Nav.Link>Link</Nav.Link>
    </Nav.Item>
    <Nav.Item>
        <Nav.Link disabled>
            Disabled
        </Nav.Link>
    </Nav.Item>
</Nav>`}</Code>
            <Anchor name="navs-and-tabs-working-with-flex">
                <h2>Working with flex utilities</h2>
            </Anchor>
            <p>
                If you need responsive nav variations, consider using a series of flexbox utilities. While more verbose, these utilities
                offer greater customization across responsive breakpoints. In the example below, our nav will be stacked on the lowest
                breakpoint, then adapt to a horizontal layout that fills the available width starting from the small breakpoint.
            </p>
            <Example>
                <Nav pills style={[flex("column"), flex("row", "sm")]}>
                    <Nav.Link style={[flex("fill", "sm"), textAlign("center", "sm")]} active aria-current>
                        Active
                    </Nav.Link>
                    <Nav.Link style={[flex("fill", "sm"), textAlign("center", "sm")]}>Link</Nav.Link>
                    <Nav.Link style={[flex("fill", "sm"), textAlign("center", "sm")]}>Link</Nav.Link>
                    <Nav.Link style={[flex("fill", "sm"), textAlign("center", "sm")]} disabled>
                        Disabled
                    </Nav.Link>
                </Nav>
            </Example>
            <Code language="tsx">{`<Nav pills style={[flex("column"), flex("row", "sm")]}>
    <Nav.Link style={[flex("fill", "sm"), textAlign("center", "sm")]} active aria-current>
        Active
    </Nav.Link>
    <Nav.Link style={[flex("fill", "sm"), textAlign("center", "sm")]}>
        Link
    </Nav.Link>
    <Nav.Link style={[flex("fill", "sm"), textAlign("center", "sm")]}>
        Link
    </Nav.Link>
    <Nav.Link style={[flex("fill", "sm"), textAlign("center", "sm")]} disabled>
        Disabled
    </Nav.Link>
</Nav>`}</Code>
            <Anchor name="navs-and-tabs-regarding-accessibility">
                <h2>Regarding accessibility</h2>
            </Anchor>
            <p>
                If you’re using navs to provide a navigation bar, be sure to add a <code>role="navigation"</code> to the most logical parent
                container of the <code>&lt;ul&gt;</code>, or wrap a <code>&lt;nav&gt;</code> element around the whole navigation. Do not add
                the role to the <code>&lt;ul&gt;</code> itself, as this would prevent it from being announced as an actual list by assistive
                technologies.
            </p>
            <p>
                Note that navigation bars, even if visually styled as tabs with the <code>tabs</code> prop, should <strong>not</strong> be
                given <code>role="tablist"</code>, <code>role="tab"</code> or <code>role="tabpanel"</code> attributes. These are only
                appropriate for dynamic tabbed interfaces, as described in the{" "}
                <a href="https://www.w3.org/TR/wai-aria-practices/#tabpanel">
                    <abbr title="Web Accessibility Initiative">WAI</abbr> <abbr title="Accessible Rich Internet Applications">ARIA</abbr>{" "}
                    Authoring Practices
                </a>
                . See <a href="#javascript-behavior">JavaScript behavior</a> for dynamic tabbed interfaces in this section for an example.
                The <code>aria-current</code> attribute is not necessary on dynamic tabbed interfaces since our JavaScript handles the
                selected state by adding <code>aria-selected="true"</code> on the active tab.
            </p>
            <Anchor name="navs-and-tabs-using-dropdowns">
                <h2>Using dropdowns</h2>
            </Anchor>
            <Anchor name="navs-and-tabs-using-dropdowns-tabs-with-dropdowns">
                <h3>Tabs with dropdowns</h3>
            </Anchor>
            <Example>
                <Nav tabs>
                    <Nav.Item>
                        <Nav.Item>
                            <Nav.Link active aria-current>
                                Active
                            </Nav.Link>
                        </Nav.Item>
                    </Nav.Item>
                    <Dropdown nav-item>
                        <Dropdown.Toggle nav-link>Dropdown</Dropdown.Toggle>
                        <Dropdown.Menu>
                            <Dropdown.Item>Action</Dropdown.Item>
                            <Dropdown.Item>Another action</Dropdown.Item>
                            <Dropdown.Item>Something else here</Dropdown.Item>
                            <Dropdown.Divider />
                            <Dropdown.Item>Separated action</Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown>
                    <Nav.Item>
                        <Nav.Link>Link</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link disabled>Disabled</Nav.Link>
                    </Nav.Item>
                </Nav>
            </Example>
            <Code language="tsx">{`<Nav tabs>
    <Nav.Item>
        <Nav.Item>
            <Nav.Link active aria-current>
                Active
            </Nav.Link>
        </Nav.Item>
    </Nav.Item>
    <Dropdown nav-item>
        <Dropdown.Toggle nav-link>Dropdown</Dropdown.Toggle>
        <Dropdown.Menu>
            <Dropdown.Item>Action</Dropdown.Item>
            <Dropdown.Item>Another action</Dropdown.Item>
            <Dropdown.Item>Something else here</Dropdown.Item>
            <Dropdown.Divider />
            <Dropdown.Item>Separated action</Dropdown.Item>
        </Dropdown.Menu>
    </Dropdown>
    <Nav.Item>
        <Nav.Link>Link</Nav.Link>
    </Nav.Item>
    <Nav.Item>
        <Nav.Link disabled>Disabled</Nav.Link>
    </Nav.Item>
</Nav>`}</Code>
            <Anchor name="navs-and-tabs-using-dropdowns-pills-with-dropdowns">
                <h3>Pills with dropdowns</h3>
            </Anchor>
            <Example>
                <Nav pills>
                    <Nav.Item>
                        <Nav.Item>
                            <Nav.Link active aria-current>
                                Active
                            </Nav.Link>
                        </Nav.Item>
                    </Nav.Item>
                    <Dropdown nav-item>
                        <Dropdown.Toggle nav-link>Dropdown</Dropdown.Toggle>
                        <Dropdown.Menu>
                            <Dropdown.Item>Action</Dropdown.Item>
                            <Dropdown.Item>Another action</Dropdown.Item>
                            <Dropdown.Item>Something else here</Dropdown.Item>
                            <Dropdown.Divider />
                            <Dropdown.Item>Separated action</Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown>
                    <Nav.Item>
                        <Nav.Link>Link</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link disabled>Disabled</Nav.Link>
                    </Nav.Item>
                </Nav>
            </Example>
            <Code language="tsx">{`<Nav pills>
    <Nav.Item>
        <Nav.Item>
            <Nav.Link active aria-current>
                Active
            </Nav.Link>
        </Nav.Item>
    </Nav.Item>
    <Dropdown nav-item>
        <Dropdown.Toggle nav-link>Dropdown</Dropdown.Toggle>
        <Dropdown.Menu>
            <Dropdown.Item>Action</Dropdown.Item>
            <Dropdown.Item>Another action</Dropdown.Item>
            <Dropdown.Item>Something else here</Dropdown.Item>
            <Dropdown.Divider />
            <Dropdown.Item>Separated action</Dropdown.Item>
        </Dropdown.Menu>
    </Dropdown>
    <Nav.Item>
        <Nav.Link>Link</Nav.Link>
    </Nav.Item>
    <Nav.Item>
        <Nav.Link disabled>Disabled</Nav.Link>
    </Nav.Item>
</Nav>`}</Code>
            <Anchor name="navs-and-tabs-tabbable-panes">
                <h2>Tabbable panes</h2>
            </Anchor>
            <p>
                You can create tabbable panes the same way as with <code>{`<ListGroup>`}</code>, see{" "}
                <b.Link name="list-group-tabbable-panes">other examples</b.Link> and the{" "}
                <b.Link name="list-group-tabbable-panes-native-api">API</b.Link> .
            </p>
            <p>Using just native controller:</p>
            <Example>
                <TabsNativeExample />
            </Example>
            <Code language="tsx">{`function TabsNativeExample(): b.IBobrilNode {
    const defaultTab = {} as ITab;
    const [tabs] = b.useState<[ITab, ITab, ITab, ITab]>([defaultTab, defaultTab, defaultTab, defaultTab]);

    return (
        <>
            <Nav tabs id="list-tab" style={margin("b", 3)}>
                <Nav.Item>
                    <Nav.Link tab toggleable active href="#list-home3" id="list-home-list3" get-instance={(tab) => (tabs[0] = tab)}>
                        Home
                    </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link action tab toggleable href="#list-profile3" id="list-profile-list3" get-instance={(tab) => (tabs[1] = tab)}>
                        Profile
                    </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link tab toggleable href="#list-messages3" id="list-messages-list3" get-instance={(tab) => (tabs[2] = tab)}>
                        Messages
                    </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link tab toggleable href="#list-settings3" id="list-settings-list3" get-instance={(tab) => (tabs[3] = tab)}>
                        Settings
                    </Nav.Link>
                </Nav.Item>
            </Nav>
            <TabContent id="nav-tab-content-3">
                <TabPane active fade id="list-home3" aria-labelledby="list-home-list3">
                    <p>{contents[0].text}</p>
                </TabPane>
                <TabPane fade id="list-profile3" aria-labelledby="list-profile-list3">
                    <p>{contents[1].text}</p>
                </TabPane>
                <TabPane fade id="list-messages3" aria-labelledby="list-messages-list3">
                    <p>{contents[2].text}</p>
                </TabPane>
                <TabPane fade id="list-settings3" aria-labelledby="list-settings-list3">
                    <p>{contents[3].text}</p>
                </TabPane>
            </TabContent>
        </>
    );
}


<TabsNativeExample />`}</Code>
        </>
    );
}

function TabsNativeExample(): b.IBobrilNode {
    const defaultTab = {} as ITab;
    const [tabs] = b.useState<[ITab, ITab, ITab, ITab]>([defaultTab, defaultTab, defaultTab, defaultTab]);

    return (
        <>
            <Nav tabs id="list-tab" style={margin("b", 3)}>
                <Nav.Item>
                    <Nav.Link tab toggleable active href="#list-home3" id="list-home-list3" get-instance={(tab) => (tabs[0] = tab)}>
                        Home
                    </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link action tab toggleable href="#list-profile3" id="list-profile-list3" get-instance={(tab) => (tabs[1] = tab)}>
                        Profile
                    </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link tab toggleable href="#list-messages3" id="list-messages-list3" get-instance={(tab) => (tabs[2] = tab)}>
                        Messages
                    </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link tab toggleable href="#list-settings3" id="list-settings-list3" get-instance={(tab) => (tabs[3] = tab)}>
                        Settings
                    </Nav.Link>
                </Nav.Item>
            </Nav>
            <TabContent id="nav-tab-content-3">
                <TabPane active fade id="list-home3" aria-labelledby="list-home-list3">
                    <p>{contents[0].text}</p>
                </TabPane>
                <TabPane fade id="list-profile3" aria-labelledby="list-profile-list3">
                    <p>{contents[1].text}</p>
                </TabPane>
                <TabPane fade id="list-messages3" aria-labelledby="list-messages-list3">
                    <p>{contents[2].text}</p>
                </TabPane>
                <TabPane fade id="list-settings3" aria-labelledby="list-settings-list3">
                    <p>{contents[3].text}</p>
                </TabPane>
            </TabContent>
        </>
    );
}

interface IContent {
    id: string;
    text: string;
    title: string;
}

const contents: [IContent, IContent, IContent, IContent] = [
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

import * as b from "bobril";
import { IRouteWithNavDefinition } from "../../../../common/routing";
import { Anchor } from "../../../../common/Anchor";
import { Example } from "../../../../common/Example";
import {
    backgroundColor,
    Button,
    Container,
    display,
    heading,
    Dropdown,
    Form,
    margin,
    Navbar,
    align,
    InputGroup,
    justifyContent,
} from "../../../../../index";
import { Code } from "../../../../common/Code";
import { Lead } from "../../../../common/Lead";
import * as images from "../../../../images/images";
import { bobrilstrapIconStyle } from "../../../../navigation/BobrilstrapIcon";

export const navbarRoute: IRouteWithNavDefinition = {
    url: "navbar",
    name: "navbar",
    label: "Navbar",
    handler: () => <NavbarDoc />,
    subs: [
        {
            url: "how-it-works",
            name: "navbar-how-it-works",
            label: "How it works",
            subs: [],
        },
        {
            url: "supported-content",
            name: "navbar-supported-content",
            label: "Supported content",
            subs: [
                {
                    url: "supported-content-brand",
                    name: "navbar-supported-content-brand",
                    label: "Brand",
                    subs: [],
                },
                {
                    url: "supported-content-nav",
                    name: "navbar-supported-content-nav",
                    label: "Nav",
                    subs: [],
                },
                {
                    url: "supported-content-forms",
                    name: "navbar-supported-content-forms",
                    label: "Forms",
                    subs: [],
                },
                {
                    url: "supported-content-text",
                    name: "navbar-supported-content-text",
                    label: "Text",
                    subs: [],
                },
            ],
        },
        {
            url: "color-schemes",
            name: "navbar-color-schemes",
            label: "Color schemes",
            subs: [],
        },
        {
            url: "container",
            name: "navbar-container",
            label: "Container",
            subs: [],
        },
        {
            url: "placement",
            name: "navbar-placement",
            label: "Placement",
            subs: [],
        },
        {
            url: "responsive-behavior",
            name: "navbar-responsive-behavior",
            label: "Responsive behavior",
            subs: [
                {
                    url: "toggler",
                    name: "navbar-responsive-behavior-toggler",
                    label: "Toggler",
                    subs: [],
                },
            ],
        },
    ],
};

export function NavbarDoc(): b.IBobrilNode {
    return (
        <>
            <Anchor name="navbar">
                <h1>Navbar</h1>
            </Anchor>
            <Lead>
                Documentation and examples for powerful, responsive navigation header, the navbar. Includes support for branding,
                navigation, and more, including support for our collapse plugin.
            </Lead>
            <Anchor name="navbar-how-it-works">
                <h2>How it works</h2>
            </Anchor>
            <p>Here’s what you need to know before getting started with the navbar:</p>
            <ul>
                <li>
                    Navbars require a wrapping <code>{`<Navbar>`}</code> with <code>expand</code> prop for responsive collapsing and{" "}
                    <code>color-scheme</code> prop.
                </li>
                <li>
                    Navbars and their contents are fluid by default. Change the container to limit their horizontal width in different ways.
                </li>
                <li>Use our spacing and flex utilities for controlling spacing and alignment within navbars.</li>
                <li>Navbars are responsive by default, but you can easily modify them to change that.</li>
                <li>
                    Ensure accessibility by using a default <code>&lt;nav&gt;</code> element or, if using a more generic element such as a{" "}
                    <code>&lt;div&gt;</code>, add a <code>role="navigation"</code> to every navbar to explicitly identify it as a landmark
                    region for users of assistive technologies.
                </li>
                <li>
                    Indicate the current item by using <code>aria-current="page"</code> for the current page or <code>aria-current</code>{" "}
                    for the current item in a set.
                </li>
            </ul>
            <Anchor name="navbar-supported-content">
                <h2>Supported content</h2>
            </Anchor>
            <ul>
                <li>
                    <code>{`<Navbar.Brand>`}</code> for your company, product, or project name.
                </li>
                <li>
                    <code>{`<Navbar.Nav navbar>`}</code> for a full-height and lightweight navigation (including support for dropdowns).
                </li>
                <li>
                    <code>{`<Navbar.Toggler>`}</code> for use with our collapse plugin and other navigation toggling behaviors.
                </li>
                <li>Flex and spacing utilities for any form controls and actions.</li>
                <li>
                    <code>{`<Navbar.Text>`}</code> for adding vertically centered strings of text.
                </li>
                <li>
                    <code>{`<Navbar.Collapse>`}</code> for grouping and hiding navbar contents by a parent breakpoint.
                </li>
            </ul>
            <p>
                Here’s an example of all the sub-components included in a responsive light-themed navbar that automatically collapses at the{" "}
                <code>lg</code> (large) breakpoint.
            </p>
            <Example>
                <NavbarExample />
            </Example>
            <Code language="tsx">{`function NavbarExample(): b.IBobrilNode {
    const [collapsed, setCollapsed] = b.useState(true);

    return (
        <Navbar expand="lg" color-schema="light" style={backgroundColor("light")}>
            <Container fluid>
                <Navbar.Brand href="javascript:void(0)">Navbar</Navbar.Brand>
                <Navbar.Toggler
                    onClick={() => setCollapsed(!collapsed)}
                    aria-controls="navbarSupportedContent"
                    aria-label="Toggle navigation"
                >
                    <Navbar.Toggler.Icon />
                </Navbar.Toggler>
                <Navbar.Collapse collapsed={collapsed} onClick={() => setCollapsed(true)} id="navbarSupportedContent">
                    <Navbar.Nav navbar style={[margin("e", "auto"), margin("b", 2), margin("b", 0, "lg")]}>
                        <Navbar.Nav.Item>
                            <Navbar.Nav.Link active aria-current>Home</Navbar.Nav.Link>
                        </Navbar.Nav.Item>
                        <Navbar.Nav.Item>
                            <Navbar.Nav.Link>Link</Navbar.Nav.Link>
                        </Navbar.Nav.Item>
                        <Dropdown nav-item>
                            <Dropdown.Toggle nav-link id="navbarDropdown">
                                Dropdown
                            </Dropdown.Toggle>
                            <Dropdown.Menu>
                                <Dropdown.Item>Action</Dropdown.Item>
                                <Dropdown.Item>Another action</Dropdown.Item>
                                <Dropdown.Item>Something else here</Dropdown.Item>
                                <Dropdown.Divider />
                                <Dropdown.Item>Separated action</Dropdown.Item>
                            </Dropdown.Menu>
                        </Dropdown>
                        <Navbar.Nav.Item>
                            <Navbar.Nav.Link disabled>Disabled</Navbar.Nav.Link>
                        </Navbar.Nav.Item>
                    </Navbar.Nav>
                    <Form style={display("flex")}>
                        <Form.Input style={margin("e", 2)} type="search" placeholder="Search" aria-label="Search" />
                        <Button variant="outline-success">Search</Button>
                    </Form>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

<NavbarExample />`}</Code>
            <Anchor name="navbar-supported-content-brand">
                <h3>Brand</h3>
            </Anchor>
            <Example>
                {/* As a link */}
                <Navbar color-schema="light" style={backgroundColor("light")}>
                    <Container fluid>
                        <Navbar.Brand href="javascript:void(0)">Navbar</Navbar.Brand>
                    </Container>
                </Navbar>
                <br />
                {/* As a heading */}
                <Navbar color-schema="light" style={backgroundColor("light")}>
                    <Container fluid>
                        <Navbar.Brand as="span" style={[heading(1), margin("b", 0)]}>
                            Navbar
                        </Navbar.Brand>
                    </Container>
                </Navbar>
            </Example>
            <Code language="tsx">{`{/* As a link */}
            <Navbar color-schema="light" style={backgroundColor("light")}>
                <Container fluid>
                    <Navbar.Brand href="javascript:void(0)">Navbar</Navbar.Brand>
                </Container>
            </Navbar>
            
            {/* As a heading */}
            <Navbar color-schema="light" style={backgroundColor("light")}>
                <Container fluid>
                    <Navbar.Brand as="span" style={[heading(1), margin("b", 0)]}>
                        Navbar
                    </Navbar.Brand>
                </Container>
            </Navbar>`}</Code>
            <p>
                Adding images will likely always require custom styles or utilities to properly size. Here are some examples to demonstrate.
            </p>
            <Example>
                <Navbar color-schema="light" style={backgroundColor("light")}>
                    <Container fluid>
                        <Navbar.Brand>
                            <div style={[images.bobrilstrap, bobrilstrapIconStyle]} />
                        </Navbar.Brand>
                    </Container>
                </Navbar>
            </Example>
            <Code language="tsx">{`const bobrilstrapIconStyle = b.styleDef({ width: 32, height: 32, backgroundSize: 32 });

<Navbar color-schema="light" style={backgroundColor("light")}>
    <Container fluid>
        <Navbar.Brand>
            <div style={[images.bobrilstrap, bobrilstrapIconStyle]} />
        </Navbar.Brand>
    </Container>
</Navbar>`}</Code>
            <Example>
                <Navbar color-schema="light" style={backgroundColor("light")}>
                    <Container fluid>
                        <Navbar.Brand>
                            <div style={[images.bobrilstrap, bobrilstrapIconStyle, display("inline-block"), align("top")]} />
                            Bobrilstrap
                        </Navbar.Brand>
                    </Container>
                </Navbar>
            </Example>
            <Code language="tsx">{`<Navbar color-schema="light" style={backgroundColor("light")}>
    <Container fluid>
        <Navbar.Brand>
            <div style={[images.bobrilstrap, bobrilstrapIconStyle, display("inline-block"), align("top")]} />
            Bobrilstrap
        </Navbar.Brand>
    </Container>
</Navbar>`}</Code>
            <Anchor name="navbar-supported-content-nav">
                <h3>Nav</h3>
            </Anchor>
            <p>
                Navbar navigation links build on our <code>{`<Navbar.Nav navbar>`}</code> options with their own modifiers and require the
                use of <code>{`<Navbar.Toggler>`}</code> for proper responsive styling.{" "}
                <strong>Navigation in navbars will also grow to occupy as much horizontal space as possible</strong> to keep your navbar
                contents securely aligned.
            </p>
            <p>
                Active states—with <code>active</code> prop to indicate the current page can be applied directly to{" "}
                <code>{`<Navbar.Nav.Link>`}</code>s or their immediate parent <code>{`<Navbar.Nav.Item>`}</code>s.
            </p>
            <p>
                Please note that you should also add the <code>aria-current</code> attribute on the <code>{`<Nav.Link>`}</code> itself.
            </p>
            <Example>
                <NavExample />
            </Example>
            <Code language="tsx">{`function NavExample(): b.IBobrilNode {
    const [collapsed, setCollapsed] = b.useState(true);

    return (
        <Navbar expand="lg" color-schema="light" style={backgroundColor("light")}>
            <Container fluid>
                <Navbar.Brand href="javascript:void(0)">Navbar</Navbar.Brand>
                <Navbar.Toggler onClick={() => setCollapsed(!collapsed)} aria-controls="navbarNav" aria-label="Toggle navigation">
                    <Navbar.Toggler.Icon />
                </Navbar.Toggler>
                <Navbar.Collapse collapsed={collapsed} onClick={() => setCollapsed(true)} id="navbarNav">
                    <Navbar.Nav navbar>
                        <Navbar.Nav.Item>
                            <Navbar.Nav.Link active aria-current>
                                Home
                            </Navbar.Nav.Link>
                        </Navbar.Nav.Item>
                        <Navbar.Nav.Item>
                            <Navbar.Nav.Link>Features</Navbar.Nav.Link>
                        </Navbar.Nav.Item>
                        <Navbar.Nav.Item>
                            <Navbar.Nav.Link>Pricing</Navbar.Nav.Link>
                        </Navbar.Nav.Item>
                    </Navbar.Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

<NavExample />`}</Code>
            <Anchor name="navbar-supported-content-forms">
                <h3>Forms</h3>
            </Anchor>
            <p>Place various form controls and components within a navbar:</p>
            <Example>
                <Navbar color-schema="light" style={backgroundColor("light")}>
                    <Container fluid>
                        <Form style={display("flex")}>
                            <Form.Input style={margin("e", 2)} type="search" placeholder="Search" aria-label="Search" />
                            <Button variant="outline-success">Search</Button>
                        </Form>
                    </Container>
                </Navbar>
            </Example>
            <Code language="tsx">{`<Navbar color-schema="light" style={backgroundColor("light")}>
    <Container fluid>
        <Form style={display("flex")}>
            <Form.Input style={margin("e", 2)} type="search" placeholder="Search" aria-label="Search" />
            <Button variant="outline-success">Search</Button>
        </Form>
    </Container>
</Navbar>`}</Code>
            <p>
                Immediate child elements of <code>{`<Navbar>`}</code> use flex layout and will default to justify-content: space-between.
                Use additional <code>flex</code> utilities as needed to adjust this behavior.
            </p>
            <Example>
                <Navbar color-schema="light" style={backgroundColor("light")}>
                    <Container fluid>
                        <Navbar.Brand> Navbar </Navbar.Brand>
                        <Form style={display("flex")}>
                            <Form.Input style={margin("e", 2)} type="search" placeholder="Search" aria-label="Search" />
                            <Button variant="outline-success">Search</Button>
                        </Form>
                    </Container>
                </Navbar>
            </Example>
            <Code language="tsx">{`<Navbar color-schema="light" style={backgroundColor("light")}>
    <Container fluid>
        <Navbar.Brand> Navbar </Navbar.Brand>
        <Form style={display("flex")}>
            <Form.Input style={margin("e", 2)} type="search" placeholder="Search" aria-label="Search" />
            <Button variant="outline-success">Search</Button>
        </Form>
    </Container>
</Navbar>`}</Code>
            <p>
                Input groups work, too. If your navbar is an entire form, or mostly a form, you can use the <code>form</code> element as the
                container and save some HTML.
            </p>
            <Example>
                <Navbar color-schema="light" style={backgroundColor("light")}>
                    <Container fluid as="form">
                        <InputGroup>
                            <InputGroup.Text id="basic-addon1">@</InputGroup.Text>
                            <Form.Input type="text" placeholder="Username" aria-label="Username" aria-describedby="basic-addon1" />
                        </InputGroup>
                    </Container>
                </Navbar>
            </Example>
            <Code language="tsx">{`<Navbar color-schema="light" style={backgroundColor("light")}>
    <Container fluid as="form">
        <InputGroup>
            <InputGroup.Text id="basic-addon1">@</InputGroup.Text>
            <Form.Input type="text" placeholder="Username" aria-label="Username" aria-describedby="basic-addon1" />
        </InputGroup>
    </Container>
</Navbar>`}</Code>
            <p>
                Various buttons are supported as part of these navbar forms, too. This is also a great reminder that vertical alignment
                utilities can be used to align different sized elements.
            </p>
            <Example>
                <Navbar color-schema="light" style={backgroundColor("light")}>
                    <Container fluid as="form" style={justifyContent("start")}>
                        <Button variant="outline-success" style={margin("e", 2)}>
                            Main button
                        </Button>
                        <Button variant="outline-secondary" size="sm">
                            Smaller button
                        </Button>
                    </Container>
                </Navbar>
            </Example>
            <Code language="tsx">{`<Navbar color-schema="light" style={backgroundColor("light")}>
    <Container fluid as="form" style={justifyContent("start")}>
        <Button variant="outline-success" style={margin("e", 2)}>
            Main button
        </Button>
        <Button variant="outline-secondary" size="sm">
            Smaller button
        </Button>
    </Container>
</Navbar>`}</Code>
            <Anchor name="navbar-supported-content-text">
                <h3>Text</h3>
            </Anchor>
            <Example>
                <TextExample />
            </Example>
            <Code language="tsx">{`function TextExample(): b.IBobrilNode {
    const [collapsed, setCollapsed] = b.useState(true);

    return (
        <Navbar expand="lg" color-schema="light" style={backgroundColor("light")}>
            <Container fluid>
                <Navbar.Brand href="javascript:void(0)">Navbar</Navbar.Brand>
                <Navbar.Toggler onClick={() => setCollapsed(!collapsed)} aria-controls="navbarText" aria-label="Toggle navigation">
                    <Navbar.Toggler.Icon />
                </Navbar.Toggler>
                <Navbar.Collapse collapsed={collapsed} onClick={() => setCollapsed(true)} id="navbarText">
                    <Navbar.Nav navbar style={[margin("e", "auto"), margin("b", 2), margin("b", 0, "lg")]}>
                        <Navbar.Nav.Item>
                            <Navbar.Nav.Link active aria-current>
                                Home
                            </Navbar.Nav.Link>
                        </Navbar.Nav.Item>
                        <Navbar.Nav.Item>
                            <Navbar.Nav.Link>Features</Navbar.Nav.Link>
                        </Navbar.Nav.Item>
                        <Navbar.Nav.Item>
                            <Navbar.Nav.Link>Pricing</Navbar.Nav.Link>
                        </Navbar.Nav.Item>
                    </Navbar.Nav>
                    <Navbar.Text>Navbar text with an inline element</Navbar.Text>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

<TextExample />`}</Code>
            <Anchor name="navbar-color-schemes">
                <h2>Color schemes</h2>
            </Anchor>
            <p>
                Theming the navbar has never been easier thanks to the combination of <code>color-schema</code> and{" "}
                <code>backgroundColor</code> utility.
            </p>
            <Example>
                <Navbar expand="lg" color-schema="dark" style={backgroundColor("dark")}>
                    <NavbarContent />
                </Navbar>
                <br />
                <Navbar expand="lg" color-schema="dark" style={backgroundColor("primary")}>
                    <NavbarContent />
                </Navbar>
                <br />
                <Navbar expand="lg" color-schema="light" style={{ backgroundColor: "#e3f2fd" }}>
                    <NavbarContent />
                </Navbar>
            </Example>
            <Code language="tsx">{`<Navbar expand="lg" color-schema="dark" style={backgroundColor("dark")}>
    ...
</Navbar>

<Navbar expand="lg" color-schema="dark" style={backgroundColor("primary")}>
    ...
</Navbar>

<Navbar expand="lg" color-schema="light" style={{ backgroundColor: "#e3f2fd" }}>
    ...
</Navbar>`}</Code>
            <Anchor name="navbar-container">
                <h2>Container</h2>
            </Anchor>
            <p>
                Although it’s not required, you can wrap a navbar in a <code>{`<Container>`}</code> to center it on a page–though note that
                an inner container is still required. Or you can add a container inside the <code>{`<Navbar>`}</code>to only center the
                contents of a fixed or static top navbar.
            </p>
            <Example>
                <Container>
                    <Navbar color-schema="light" style={backgroundColor("light")}>
                        <Container fluid>
                            <Navbar.Brand>Navbar</Navbar.Brand>
                        </Container>
                    </Navbar>
                </Container>
            </Example>
            <Code language="tsx">{`<Container>
    <Navbar color-schema="light" style={backgroundColor("light")}>
        <Container fluid>
            <Navbar.Brand>Navbar</Navbar.Brand>
        </Container>
    </Navbar>
</Container>`}</Code>
            <p>Use any of the responsive containers to change how wide the content in your navbar is presented.</p>
            <Example>
                <Navbar color-schema="light" style={backgroundColor("light")}>
                    <Container fluid="sm">
                        <Navbar.Brand>Navbar</Navbar.Brand>
                    </Container>
                </Navbar>
            </Example>
            <Code language="tsx">{`<Navbar color-schema="light" style={backgroundColor("light")}>
    <Container fluid="sm">
        <Navbar.Brand>Navbar</Navbar.Brand>
    </Container>
</Navbar>`}</Code>
            <Anchor name="navbar-placement">
                <h2>Placement</h2>
            </Anchor>
            <p>
                Use position utilities to place navbars in non-static positions. Choose from fixed to the top, fixed to the bottom, or
                stickied to the top (scrolls with the page until it reaches the top, then stays there). Fixed navbars use{" "}
                <code>position: fixed</code>, meaning they’re pulled from the normal flow of the DOM and may require custom styles (e.g.,
                padding-top on the <code>{`<body>`}</code>) to prevent overlap with other elements.
            </p>
            <Code language="tsx">{`<Navbar color-schema="light" style={[backgroundColor("light"), position("fixed-top")]}>
    <Container fluid>
        <Navbar.Brand>Navbar</Navbar.Brand>
    </Container>
</Navbar>`}</Code>
            <Anchor name="navbar-responsive-behavior">
                <h2>Responsive behavior</h2>
            </Anchor>
            <p>
                Navbars can use <code>{`<Navbar.Toggler>`}</code>, <code>{`<Navbar.Collapse>`}</code>, and <code>expand</code> prop to
                determine when their content collapses behind a button. In combination with other utilities, you can easily choose when to
                show or hide particular elements.
            </p>
            <Anchor name="navbar-responsive-behavior-toggler">
                <h3>Toggler</h3>
            </Anchor>
            <p>
                Navbar togglers are left-aligned by default, but should they follow a sibling component like a{" "}
                <code>{`<Navbar.Brand>`}</code>, they’ll automatically be aligned to the far right. Reversing your markup will reverse the
                placement of the toggler. Below are examples of different toggle styles.
            </p>
            <p>
                With no <code>{`<Navbar.Brand>`}</code> shown at the smallest breakpoint:
            </p>
            <Example>
                <NavbarNoBrandExample />
            </Example>
            <Code language="tsx">{`function NavbarNoBrandExample(): b.IBobrilNode {
    const [collapsed, setCollapsed] = b.useState(true);

    return (
        <Navbar expand="lg" color-schema="light" style={backgroundColor("light")}>
            <Container fluid>
                <Navbar.Toggler onClick={() => setCollapsed(!collapsed)} aria-controls="navbarTogglerDemo01" aria-label="Toggle navigation">
                    <Navbar.Toggler.Icon />
                </Navbar.Toggler>
                <Navbar.Collapse collapsed={collapsed} onClick={() => setCollapsed(true)} id="navbarTogglerDemo01">
                    <Navbar.Nav navbar style={[margin("e", "auto"), margin("b", 2), margin("b", 0, "lg")]}>
                        <Navbar.Nav.Item>
                            <Navbar.Nav.Link active aria-current>
                                Home
                            </Navbar.Nav.Link>
                        </Navbar.Nav.Item>
                        <Navbar.Nav.Item>
                            <Navbar.Nav.Link>Link</Navbar.Nav.Link>
                        </Navbar.Nav.Item>
                        <Navbar.Nav.Item>
                            <Navbar.Nav.Link disabled>Disabled</Navbar.Nav.Link>
                        </Navbar.Nav.Item>
                    </Navbar.Nav>
                    <Form style={display("flex")}>
                        <Form.Input style={margin("e", 2)} type="search" placeholder="Search" aria-label="Search" />
                        <Button variant="outline-success">Search</Button>
                    </Form>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

<NavbarNoBrandExample />`}</Code>
            <p>With a brand name shown on the left and toggler on the right:</p>
            <Example>
                <NavbarTogglerRightExample />
            </Example>
            <Code language="tsx">{`function NavbarTogglerRightExample(): b.IBobrilNode {
    const [collapsed, setCollapsed] = b.useState(true);

    return (
        <Navbar expand="lg" color-schema="light" style={backgroundColor("light")}>
            <Container fluid>
                <Navbar.Brand href="javascript:void(0)">Navbar</Navbar.Brand>
                <Navbar.Toggler onClick={() => setCollapsed(!collapsed)} aria-controls="navbarTogglerDemo02" aria-label="Toggle navigation">
                    <Navbar.Toggler.Icon />
                </Navbar.Toggler>
                <Navbar.Collapse collapsed={collapsed} onClick={() => setCollapsed(true)} id="navbarTogglerDemo02">
                    <Navbar.Nav navbar style={[margin("e", "auto"), margin("b", 2), margin("b", 0, "lg")]}>
                        <Navbar.Nav.Item>
                            <Navbar.Nav.Link active aria-current>
                                Home
                            </Navbar.Nav.Link>
                        </Navbar.Nav.Item>
                        <Navbar.Nav.Item>
                            <Navbar.Nav.Link>Link</Navbar.Nav.Link>
                        </Navbar.Nav.Item>
                        <Navbar.Nav.Item>
                            <Navbar.Nav.Link disabled>Disabled</Navbar.Nav.Link>
                        </Navbar.Nav.Item>
                    </Navbar.Nav>
                    <Form style={display("flex")}>
                        <Form.Input style={margin("e", 2)} type="search" placeholder="Search" aria-label="Search" />
                        <Button variant="outline-success">Search</Button>
                    </Form>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

<NavbarTogglerRightExample />`}</Code>
            <p>With a toggler on the left and brand name on the right:</p>
            <Example>
                <NavbarTogglerLeftExample />
            </Example>
            <Code language="tsx">{`function NavbarTogglerLeftExample(): b.IBobrilNode {
    const [collapsed, setCollapsed] = b.useState(true);

    return (
        <Navbar expand="lg" color-schema="light" style={backgroundColor("light")}>
            <Container fluid>
                <Navbar.Toggler onClick={() => setCollapsed(!collapsed)} aria-controls="navbarTogglerDemo03" aria-label="Toggle navigation">
                    <Navbar.Toggler.Icon />
                </Navbar.Toggler>
                <Navbar.Brand href="javascript:void(0)">Navbar</Navbar.Brand>
                <Navbar.Collapse collapsed={collapsed} onClick={() => setCollapsed(true)} id="navbarTogglerDemo03">
                    <Navbar.Nav navbar style={[margin("e", "auto"), margin("b", 2), margin("b", 0, "lg")]}>
                        <Navbar.Nav.Item>
                            <Navbar.Nav.Link active aria-current>
                                Home
                            </Navbar.Nav.Link>
                        </Navbar.Nav.Item>
                        <Navbar.Nav.Item>
                            <Navbar.Nav.Link>Link</Navbar.Nav.Link>
                        </Navbar.Nav.Item>
                        <Navbar.Nav.Item>
                            <Navbar.Nav.Link disabled>Disabled</Navbar.Nav.Link>
                        </Navbar.Nav.Item>
                    </Navbar.Nav>
                    <Form style={display("flex")}>
                        <Form.Input style={margin("e", 2)} type="search" placeholder="Search" aria-label="Search" />
                        <Button variant="outline-success">Search</Button>
                    </Form>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

<NavbarTogglerLeftExample />`}</Code>
        </>
    );
}

function NavbarExample(): b.IBobrilNode {
    const [collapsed, setCollapsed] = b.useState(true);

    return (
        <Navbar expand="lg" color-schema="light" style={backgroundColor("light")}>
            <Container fluid>
                <Navbar.Brand href="javascript:void(0)">Navbar</Navbar.Brand>
                <Navbar.Toggler
                    onClick={() => setCollapsed(!collapsed)}
                    aria-controls="navbarSupportedContent"
                    aria-label="Toggle navigation"
                >
                    <Navbar.Toggler.Icon />
                </Navbar.Toggler>
                <Navbar.Collapse collapsed={collapsed} onClick={() => setCollapsed(true)} id="navbarSupportedContent">
                    <Navbar.Nav navbar style={[margin("e", "auto"), margin("b", 2), margin("b", 0, "lg")]}>
                        <Navbar.Nav.Item>
                            <Navbar.Nav.Link active aria-current>
                                Home
                            </Navbar.Nav.Link>
                        </Navbar.Nav.Item>
                        <Navbar.Nav.Item>
                            <Navbar.Nav.Link>Link</Navbar.Nav.Link>
                        </Navbar.Nav.Item>
                        <Dropdown nav-item>
                            <Dropdown.Toggle nav-link id="navbarDropdown">
                                Dropdown
                            </Dropdown.Toggle>
                            <Dropdown.Menu>
                                <Dropdown.Item>Action</Dropdown.Item>
                                <Dropdown.Item>Another action</Dropdown.Item>
                                <Dropdown.Item>Something else here</Dropdown.Item>
                                <Dropdown.Divider />
                                <Dropdown.Item>Separated action</Dropdown.Item>
                            </Dropdown.Menu>
                        </Dropdown>
                        <Navbar.Nav.Item>
                            <Navbar.Nav.Link disabled>Disabled</Navbar.Nav.Link>
                        </Navbar.Nav.Item>
                    </Navbar.Nav>
                    <Form style={display("flex")}>
                        <Form.Input style={margin("e", 2)} type="search" placeholder="Search" aria-label="Search" />
                        <Button variant="outline-success">Search</Button>
                    </Form>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

function NavExample(): b.IBobrilNode {
    const [collapsed, setCollapsed] = b.useState(true);

    return (
        <Navbar expand="lg" color-schema="light" style={backgroundColor("light")}>
            <Container fluid>
                <Navbar.Brand href="javascript:void(0)">Navbar</Navbar.Brand>
                <Navbar.Toggler onClick={() => setCollapsed(!collapsed)} aria-controls="navbarNav" aria-label="Toggle navigation">
                    <Navbar.Toggler.Icon />
                </Navbar.Toggler>
                <Navbar.Collapse collapsed={collapsed} onClick={() => setCollapsed(true)} id="navbarNav">
                    <Navbar.Nav navbar>
                        <Navbar.Nav.Item>
                            <Navbar.Nav.Link active aria-current>
                                Home
                            </Navbar.Nav.Link>
                        </Navbar.Nav.Item>
                        <Navbar.Nav.Item>
                            <Navbar.Nav.Link>Features</Navbar.Nav.Link>
                        </Navbar.Nav.Item>
                        <Navbar.Nav.Item>
                            <Navbar.Nav.Link>Pricing</Navbar.Nav.Link>
                        </Navbar.Nav.Item>
                    </Navbar.Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

function TextExample(): b.IBobrilNode {
    const [collapsed, setCollapsed] = b.useState(true);

    return (
        <Navbar expand="lg" color-schema="light" style={backgroundColor("light")}>
            <Container fluid>
                <Navbar.Brand href="javascript:void(0)">Navbar</Navbar.Brand>
                <Navbar.Toggler onClick={() => setCollapsed(!collapsed)} aria-controls="navbarText" aria-label="Toggle navigation">
                    <Navbar.Toggler.Icon />
                </Navbar.Toggler>
                <Navbar.Collapse collapsed={collapsed} onClick={() => setCollapsed(true)} id="navbarText">
                    <Navbar.Nav navbar style={[margin("e", "auto"), margin("b", 2), margin("b", 0, "lg")]}>
                        <Navbar.Nav.Item>
                            <Navbar.Nav.Link active aria-current>
                                Home
                            </Navbar.Nav.Link>
                        </Navbar.Nav.Item>
                        <Navbar.Nav.Item>
                            <Navbar.Nav.Link>Features</Navbar.Nav.Link>
                        </Navbar.Nav.Item>
                        <Navbar.Nav.Item>
                            <Navbar.Nav.Link>Pricing</Navbar.Nav.Link>
                        </Navbar.Nav.Item>
                    </Navbar.Nav>
                    <Navbar.Text>Navbar text with an inline element</Navbar.Text>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

function NavbarContent(): b.IBobrilNode {
    const [collapsed, setCollapsed] = b.useState(true);

    return (
        <Container fluid>
            <Navbar.Brand href="javascript:void(0)">Navbar</Navbar.Brand>
            <Navbar.Toggler onClick={() => setCollapsed(!collapsed)} aria-controls="navbarSupportedContent" aria-label="Toggle navigation">
                <Navbar.Toggler.Icon />
            </Navbar.Toggler>
            <Navbar.Collapse collapsed={collapsed} onClick={() => setCollapsed(true)} id="navbarSupportedContent">
                <Navbar.Nav navbar style={[margin("e", "auto"), margin("b", 2), margin("b", 0, "lg")]}>
                    <Navbar.Nav.Item>
                        <Navbar.Nav.Link active aria-current>
                            Home
                        </Navbar.Nav.Link>
                    </Navbar.Nav.Item>
                    <Navbar.Nav.Item>
                        <Navbar.Nav.Link>Link</Navbar.Nav.Link>
                    </Navbar.Nav.Item>
                    <Dropdown nav-item>
                        <Dropdown.Toggle nav-link id="navbarDropdown">
                            Dropdown
                        </Dropdown.Toggle>
                        <Dropdown.Menu>
                            <Dropdown.Item>Action</Dropdown.Item>
                            <Dropdown.Item>Another action</Dropdown.Item>
                            <Dropdown.Item>Something else here</Dropdown.Item>
                            <Dropdown.Divider />
                            <Dropdown.Item>Separated action</Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown>
                    <Navbar.Nav.Item>
                        <Navbar.Nav.Link disabled>Disabled</Navbar.Nav.Link>
                    </Navbar.Nav.Item>
                </Navbar.Nav>
                <Form style={display("flex")}>
                    <Form.Input style={margin("e", 2)} type="search" placeholder="Search" aria-label="Search" />
                    <Button variant="outline-success">Search</Button>
                </Form>
            </Navbar.Collapse>
        </Container>
    );
}

function NavbarNoBrandExample(): b.IBobrilNode {
    const [collapsed, setCollapsed] = b.useState(true);

    return (
        <Navbar expand="lg" color-schema="light" style={backgroundColor("light")}>
            <Container fluid>
                <Navbar.Toggler onClick={() => setCollapsed(!collapsed)} aria-controls="navbarTogglerDemo01" aria-label="Toggle navigation">
                    <Navbar.Toggler.Icon />
                </Navbar.Toggler>
                <Navbar.Collapse collapsed={collapsed} onClick={() => setCollapsed(true)} id="navbarTogglerDemo01">
                    <Navbar.Nav navbar style={[margin("e", "auto"), margin("b", 2), margin("b", 0, "lg")]}>
                        <Navbar.Nav.Item>
                            <Navbar.Nav.Link active aria-current>
                                Home
                            </Navbar.Nav.Link>
                        </Navbar.Nav.Item>
                        <Navbar.Nav.Item>
                            <Navbar.Nav.Link>Link</Navbar.Nav.Link>
                        </Navbar.Nav.Item>
                        <Navbar.Nav.Item>
                            <Navbar.Nav.Link disabled>Disabled</Navbar.Nav.Link>
                        </Navbar.Nav.Item>
                    </Navbar.Nav>
                    <Form style={display("flex")}>
                        <Form.Input style={margin("e", 2)} type="search" placeholder="Search" aria-label="Search" />
                        <Button variant="outline-success">Search</Button>
                    </Form>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

function NavbarTogglerRightExample(): b.IBobrilNode {
    const [collapsed, setCollapsed] = b.useState(true);

    return (
        <Navbar expand="lg" color-schema="light" style={backgroundColor("light")}>
            <Container fluid>
                <Navbar.Brand href="javascript:void(0)">Navbar</Navbar.Brand>
                <Navbar.Toggler onClick={() => setCollapsed(!collapsed)} aria-controls="navbarTogglerDemo02" aria-label="Toggle navigation">
                    <Navbar.Toggler.Icon />
                </Navbar.Toggler>
                <Navbar.Collapse collapsed={collapsed} onClick={() => setCollapsed(true)} id="navbarTogglerDemo02">
                    <Navbar.Nav navbar style={[margin("e", "auto"), margin("b", 2), margin("b", 0, "lg")]}>
                        <Navbar.Nav.Item>
                            <Navbar.Nav.Link active aria-current>
                                Home
                            </Navbar.Nav.Link>
                        </Navbar.Nav.Item>
                        <Navbar.Nav.Item>
                            <Navbar.Nav.Link>Link</Navbar.Nav.Link>
                        </Navbar.Nav.Item>
                        <Navbar.Nav.Item>
                            <Navbar.Nav.Link disabled>Disabled</Navbar.Nav.Link>
                        </Navbar.Nav.Item>
                    </Navbar.Nav>
                    <Form style={display("flex")}>
                        <Form.Input style={margin("e", 2)} type="search" placeholder="Search" aria-label="Search" />
                        <Button variant="outline-success">Search</Button>
                    </Form>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

function NavbarTogglerLeftExample(): b.IBobrilNode {
    const [collapsed, setCollapsed] = b.useState(true);

    return (
        <Navbar expand="lg" color-schema="light" style={backgroundColor("light")}>
            <Container fluid>
                <Navbar.Toggler onClick={() => setCollapsed(!collapsed)} aria-controls="navbarTogglerDemo03" aria-label="Toggle navigation">
                    <Navbar.Toggler.Icon />
                </Navbar.Toggler>
                <Navbar.Brand href="javascript:void(0)">Navbar</Navbar.Brand>
                <Navbar.Collapse collapsed={collapsed} onClick={() => setCollapsed(true)} id="navbarTogglerDemo03">
                    <Navbar.Nav navbar style={[margin("e", "auto"), margin("b", 2), margin("b", 0, "lg")]}>
                        <Navbar.Nav.Item>
                            <Navbar.Nav.Link active aria-current>
                                Home
                            </Navbar.Nav.Link>
                        </Navbar.Nav.Item>
                        <Navbar.Nav.Item>
                            <Navbar.Nav.Link>Link</Navbar.Nav.Link>
                        </Navbar.Nav.Item>
                        <Navbar.Nav.Item>
                            <Navbar.Nav.Link disabled>Disabled</Navbar.Nav.Link>
                        </Navbar.Nav.Item>
                    </Navbar.Nav>
                    <Form style={display("flex")}>
                        <Form.Input style={margin("e", 2)} type="search" placeholder="Search" aria-label="Search" />
                        <Button variant="outline-success">Search</Button>
                    </Form>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

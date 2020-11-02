import * as b from "bobril";
import { IRouteWithNavDefinition } from "../../../../common/routing";
import { Anchor } from "../../../../common/Anchor";
import { Example } from "../../../../common/Example";
import { Lead } from "../../../../common/Lead";
import {
    Blockquote,
    Button,
    Card,
    Col,
    ListGroup,
    margin,
    Nav,
    Row,
    textAlign,
    textColor,
    width,
    backgroundGradientColorScale,
    backgroundColor,
    TextAlign,
    borderColorScale,
    borderColor,
} from "../../../../../index";
import { Code } from "../../../../common/Code";
import { holderImage } from "../../../../common/holder";

export const cardsRoute: IRouteWithNavDefinition = {
    url: "cards",
    name: "cards",
    label: "Cards",
    handler: () => <Cards />,
    subs: [
        {
            url: "about",
            name: "cards-about",
            label: "About",
            subs: [],
        },
        {
            url: "examples",
            name: "cards-examples",
            label: "Examples",
            subs: [],
        },

        {
            url: "content-types",
            name: "cards-content-types",
            label: "Content types",
            subs: [
                {
                    url: "body",
                    name: "cards-content-types-body",
                    label: "Body",
                    subs: [],
                },
                {
                    url: "titles-text-links",
                    name: "cards-content-types-titles-text-links",
                    label: "Titles, text, and links",
                    subs: [],
                },
                {
                    url: "images",
                    name: "cards-content-types-images",
                    label: "Images",
                    subs: [],
                },
                {
                    url: "list-groups",
                    name: "cards-content-types-list-groups",
                    label: "List groups",
                    subs: [],
                },
                {
                    url: "kitchen-sink",
                    name: "cards-content-types-kitchen-sink",
                    label: "Kitchen sink",
                    subs: [],
                },
                {
                    url: "header-footer",
                    name: "cards-content-types-header-footer",
                    label: "Header and footer",
                    subs: [],
                },
            ],
        },
        {
            url: "sizing",
            name: "cards-sizing",
            label: "Sizing",
            subs: [
                {
                    url: "grid",
                    name: "cards-sizing-grid",
                    label: "Using grid",
                    subs: [],
                },
                {
                    url: "sizing-utilities",
                    name: "cards-sizing-utilities",
                    label: "Using utilities",
                    subs: [],
                },
            ],
        },
        {
            url: "text-alignment",
            name: "cards-text-alignment",
            label: "Text alignment",
            subs: [],
        },
        {
            url: "navigation",
            name: "cards-navigation",
            label: "Navigation",
            subs: [],
        },
        {
            url: "images",
            name: "cards-images",
            label: "Images",
            subs: [
                {
                    url: "caps",
                    name: "cards-images-caps",
                    label: "Image caps",
                    subs: [],
                },
                {
                    url: "overlays",
                    name: "cards-images-overlays",
                    label: "Image overlays",
                    subs: [],
                },
            ],
        },
        {
            url: "horizontal",
            name: "cards-horizontal",
            label: "Horizontal",
            subs: [],
        },
        {
            url: "styles",
            name: "cards-styles",
            label: "Card styles",
            subs: [
                {
                    url: "background-and-color",
                    name: "cards-styles-background-and-color",
                    label: "Background and color",
                    subs: [],
                },
                {
                    url: "border",
                    name: "cards-styles-border",
                    label: "Border",
                    subs: [],
                },
            ],
        },
    ],
};

export function Cards(): b.IBobrilNode {
    return (
        <>
            <Anchor name="cards">
                <h1>Cards</h1>
            </Anchor>
            <Lead>Bobrilstrap’s cards provide a flexible and extensible content container with multiple variants and options.</Lead>
            <Anchor name="cards-about">
                <h2>About</h2>
            </Anchor>
            <p>
                A card is a flexible and extensible content container. It includes options for headers and footers, a wide variety of
                content, contextual background colors, and powerful display options.
            </p>
            <Anchor name="cards-examples">
                <h2>Examples</h2>
            </Anchor>
            <p>
                Cards are built with as little markup and styles as possible, but still manage to deliver a ton of control and
                customization. Built with flexbox, they offer easy alignment and mix well with other Bootstrap components.
            </p>
            <p>
                Below is an example of a basic card with mixed content and a fixed width. Cards have no fixed width to start, so they’ll
                naturally fill the full width of its parent element.
            </p>
            <Example>
                <Card style={{ width: "18rem" }}>
                    <Card.Image src={holderImage("100px180")} position="top" />
                    <Card.Body>
                        <Card.Title>Card title</Card.Title>
                        <Card.Text>
                            Some quick example text to build on the card title and make up the bulk of the card's content.
                        </Card.Text>
                        <Button>Go somewhere</Button>
                    </Card.Body>
                </Card>
            </Example>
            <Code language="tsx">
                {`<Card style={{ width: "18rem" }}>
    <Card.Image src="${holderImage("100px180")}" position="top" />
    <Card.Body>
        <Card.Title>Card title</Card.Title>
        <Card.Text>
            Some quick example text to build on the card title and make up the bulk of the card's content.
        </Card.Text>
        <Button>Go somewhere</Button>
    </Card.Body>
</Card>`}
            </Code>
            <Anchor name="cards-content-types">
                <h2>Content types</h2>
            </Anchor>
            <p>
                Cards support a wide variety of content, including images, text, list groups, links, and more. Below are examples of what’s
                supported.
            </p>
            <Anchor name="cards-content-types-body">
                <h3>Body</h3>
            </Anchor>
            <p>
                The building block of a card is the <code>{`<Card.Body>`}</code>. Use it whenever you need a padded section within a card.
            </p>
            <Example>
                <Card style={{ width: "18rem" }}>
                    <Card.Body>This is some text within a card body.</Card.Body>
                </Card>
            </Example>
            <Code language="tsx">{`<Card style={{ width: "18rem" }}>
    <Card.Body>This is some text within a card body.</Card.Body>
</Card>`}</Code>
            <Anchor name="cards-content-types-titles-text-links">
                <h3>Titles, text, and links</h3>
            </Anchor>
            <Example>
                <Card style={{ width: "18rem" }}>
                    <Card.Body>
                        <Card.Title>Card title</Card.Title>
                        <Card.Subtitle style={[textColor("muted"), margin({ side: "b", size: 2 })]}>Card subtitle</Card.Subtitle>
                        <Card.Text>
                            Some quick example text to build on the card title and make up the bulk of the card's content.
                        </Card.Text>
                        <Card.Link href="javascript:void(0)">Card link</Card.Link>
                        <Card.Link href="javascript:void(0)">Another link</Card.Link>
                    </Card.Body>
                </Card>
            </Example>
            <Code language="tsx">{`<Card style={{ width: "18rem" }}>
    <Card.Body>
        <Card.Title>Card title</Card.Title>
        <Card.Subtitle style={[textColor("muted"), margin({ side: "b", size: 2 })]}>Card subtitle</Card.Subtitle>
        <Card.Text>
            Some quick example text to build on the card title and make up the bulk of the card's content.
        </Card.Text>
        <Card.Link href="javascript:void(0)">Card link</Card.Link>
        <Card.Link href="javascript:void(0)">Another link</Card.Link>
    </Card.Body>
</Card>`}</Code>
            <Anchor name="cards-content-types-images">
                <h3>Images</h3>
            </Anchor>
            <Example>
                <Card style={{ width: "18rem" }}>
                    <Card.Image src={holderImage("100px180")} position="top" />
                    <Card.Body>
                        <Card.Text>
                            Some quick example text to build on the card title and make up the bulk of the card's content.
                        </Card.Text>
                    </Card.Body>
                </Card>
            </Example>
            <Code language="tsx">{`<Card style={{ width: "18rem" }}>
    <Card.Image src="${holderImage("100px180")}" position="top" />
    <Card.Body>
        <Card.Text>
            Some quick example text to build on the card title and make up the bulk of the card's content.
        </Card.Text>
    </Card.Body>
</Card>`}</Code>
            <Anchor name="cards-content-types-list-groups">
                <h3>List groups</h3>
            </Anchor>
            <p>Create lists of content in a card with a flush list group.</p>
            <Example>
                <Card style={{ width: "18rem" }}>
                    <ListGroup flush>
                        <Card.Header>Featured</Card.Header>
                        <ListGroup.Item>Cras justo odio</ListGroup.Item>
                        <ListGroup.Item active>Dapibus ac facilisis in</ListGroup.Item>
                        <ListGroup.Item>Vestibulum at eros</ListGroup.Item>
                        <Card.Footer>Card footer</Card.Footer>
                    </ListGroup>
                </Card>
            </Example>
            <Code language="tsx">{`<Card style={{ width: "18rem" }}>
    <ListGroup flush>
        <Card.Header>Featured</Card.Header>
        <ListGroup.Item>Cras justo odio</ListGroup.Item>
        <ListGroup.Item active>Dapibus ac facilisis in</ListGroup.Item>
        <ListGroup.Item>Vestibulum at eros</ListGroup.Item>
        <Card.Footer>Card footer</Card.Footer>
    </ListGroup>
</Card>`}</Code>
            <Anchor name="cards-content-types-kitchen-sink">
                <h3>Kitchen sink</h3>
            </Anchor>
            <p>
                Mix and match multiple content types to create the card you need, or throw everything in there. Shown below are image
                styles, blocks, text styles, and a list group—all wrapped in a fixed-width card.
            </p>
            <Example>
                <Card style={{ width: "18rem" }}>
                    <Card.Image src={holderImage("100px180")} position="top" />
                    <Card.Body>
                        <Card.Title>Card title</Card.Title>
                        <Card.Text>
                            Some quick example text to build on the card title and make up the bulk of the card's content.
                        </Card.Text>
                    </Card.Body>
                    <ListGroup flush>
                        <ListGroup.Item>Cras justo odio</ListGroup.Item>
                        <ListGroup.Item>Dapibus ac facilisis in</ListGroup.Item>
                        <ListGroup.Item>Vestibulum at eros</ListGroup.Item>
                    </ListGroup>
                    <Card.Body>
                        <Card.Link href="javascript:void(0)">Card link</Card.Link>
                        <Card.Link href="javascript:void(0)">Another link</Card.Link>
                    </Card.Body>
                </Card>
            </Example>
            <Code language="tsx">{`<Card style={{ width: "18rem" }}>
    <Card.Image src={imageUri} position="top" />
    <Card.Body>
        <Card.Title>Card title</Card.Title>
        <Card.Text>
            Some quick example text to build on the card title and make up the bulk of the card's content.
        </Card.Text>
    </Card.Body>
    <ListGroup flush>
        <ListGroup.Item>Cras justo odio</ListGroup.Item>
        <ListGroup.Item>Dapibus ac facilisis in</ListGroup.Item>
        <ListGroup.Item>Vestibulum at eros</ListGroup.Item>
    </ListGroup>
    <Card.Body>
        <Card.Link href="javascript:void(0)">Card link</Card.Link>
        <Card.Link href="javascript:void(0)">Another link</Card.Link>
    </Card.Body>
</Card>`}</Code>
            <Anchor name="cards-content-types-header-footer">
                <h3>Header and footer</h3>
            </Anchor>
            <p>Add an optional header and/or footer within a card.</p>
            <Example>
                <Card>
                    <Card.Header>Featured</Card.Header>
                    <Card.Body>
                        <Card.Title>Special title treatment</Card.Title>
                        <Card.Text>With supporting text below as a natural lead-in to additional content.</Card.Text>
                        <Button>Go somewhere</Button>
                    </Card.Body>
                </Card>
            </Example>
            <Code language="tsx">{`<Card>
    <Card.Header>Featured</Card.Header>
    <Card.Body>
        <Card.Title>Special title treatment</Card.Title>
        <Card.Text>With supporting text below as a natural lead-in to additional content.</Card.Text>
        <Button>Go somewhere</Button>
    </Card.Body>
</Card>`}</Code>
            <Example>
                <Card>
                    <Card.Header>Quote</Card.Header>
                    <Card.Body>
                        <Blockquote style={margin({ side: "b", size: 0 })}>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.</p>
                            <Blockquote.Footer>
                                Someone famous in <cite title="Source Title">Source Title</cite>
                            </Blockquote.Footer>
                        </Blockquote>
                    </Card.Body>
                </Card>
            </Example>
            <Code language="tsx">{`<Card>
    <Card.Header>Quote</Card.Header>
    <Card.Body>
        <Blockquote style={margin({ side: "b", size: 0 })}>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.</p>
            <Blockquote.Footer>
                Someone famous in <cite title="Source Title">Source Title</cite>
            </Blockquote.Footer>
        </Blockquote>
    </Card.Body>
</Card>`}</Code>
            <Example>
                <Card style={textAlign("center")}>
                    <Card.Header>Featured</Card.Header>
                    <Card.Body>
                        <Card.Title>Special title treatment</Card.Title>
                        <Card.Text>With supporting text below as a natural lead-in to additional content.</Card.Text>
                        <Button>Go somewhere</Button>
                    </Card.Body>
                    <Card.Footer>2 days ago</Card.Footer>
                </Card>
            </Example>
            <Code language="tsx">{`<Card style={textAlign("center")}>
    <Card.Header>Featured</Card.Header>
    <Card.Body>
        <Card.Title>Special title treatment</Card.Title>
        <Card.Text>With supporting text below as a natural lead-in to additional content.</Card.Text>
        <Button>Go somewhere</Button>
    </Card.Body>
    <Card.Footer>2 days ago</Card.Footer>
</Card>`}</Code>
            <Anchor name="cards-sizing">
                <h2>Sizing</h2>
            </Anchor>
            <p>
                Cards assume no specific width to start, so they’ll be 100% wide unless otherwise stated. You can change this as needed with
                grid or utilities.
            </p>
            <Anchor name="cards-sizing-grid">
                <h3>Using grid</h3>
            </Anchor>
            <Example>
                <Row>
                    <Col sm={6}>
                        <Card>
                            <Card.Body>
                                <Card.Title>Special title treatment</Card.Title>
                                <Card.Text>With supporting text below as a natural lead-in to additional content.</Card.Text>
                                <Button>Go somewhere</Button>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col sm={6}>
                        <Card>
                            <Card.Body>
                                <Card.Title>Special title treatment</Card.Title>
                                <Card.Text>With supporting text below as a natural lead-in to additional content.</Card.Text>
                                <Button>Go somewhere</Button>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Example>
            <Code language="tsx">{`<Row>
    <Col sm={6}>
        <Card>
            <Card.Body>
                <Card.Title>Special title treatment</Card.Title>
                <Card.Text>With supporting text below as a natural lead-in to additional content.</Card.Text>
                <Button>Go somewhere</Button>
            </Card.Body>
        </Card>
    </Col>
    <Col sm={6}>
        <Card>
            <Card.Body>
                <Card.Title>Special title treatment</Card.Title>
                <Card.Text>With supporting text below as a natural lead-in to additional content.</Card.Text>
                <Button>Go somewhere</Button>
            </Card.Body>
        </Card>
    </Col>
</Row>`}</Code>
            <Anchor name="cards-sizing-utilities">
                <h3>Using utilities</h3>
            </Anchor>
            <Example>
                <Card style={width(75)}>
                    <Card.Body>
                        <Card.Title>Special title treatment</Card.Title>
                        <Card.Text>With supporting text below as a natural lead-in to additional content.</Card.Text>
                        <Button>Go somewhere</Button>
                    </Card.Body>
                </Card>
                <Card style={width(50)}>
                    <Card.Body>
                        <Card.Title>Special title treatment</Card.Title>
                        <Card.Text>With supporting text below as a natural lead-in to additional content.</Card.Text>
                        <Button>Go somewhere</Button>
                    </Card.Body>
                </Card>
            </Example>
            <Code language="tsx">{`<Card style={width(75)}>
    <Card.Body>
        <Card.Title>Special title treatment</Card.Title>
        <Card.Text>With supporting text below as a natural lead-in to additional content.</Card.Text>
        <Button>Go somewhere</Button>
    </Card.Body>
</Card>
<Card style={width(50)}>
    <Card.Body>
        <Card.Title>Special title treatment</Card.Title>
        <Card.Text>With supporting text below as a natural lead-in to additional content.</Card.Text>
        <Button>Go somewhere</Button>
    </Card.Body>
</Card>`}</Code>
            <Anchor name="cards-text-alignment">
                <h2>Text alignment</h2>
            </Anchor>
            <p>You can quickly change the text alignment of any card—in its entirety or specific parts.</p>
            <Example>
                {new Array<TextAlign>("left", "center", "right").map((alignment) => (
                    <Card style={[{ width: "18rem" }, textAlign(alignment)]}>
                        <Card.Body>
                            <Card.Title>Special title treatment</Card.Title>
                            <Card.Text>With supporting text below as a natural lead-in to additional content.</Card.Text>
                            <Button>Go somewhere</Button>
                        </Card.Body>
                    </Card>
                ))}
            </Example>
            <Code language="tsx">
                {new Array<TextAlign>("left", "center", "right")
                    .map(
                        (alignment) =>
                            `<Card style={[{ width: "18rem" }, textAlign(${alignment})]}>
    <Card.Body>
        <Card.Title>Special title treatment</Card.Title>
        <Card.Text>With supporting text below as a natural lead-in to additional content.</Card.Text>
        <Button>Go somewhere</Button>
    </Card.Body>
</Card>`
                    )
                    .join("\n")}
            </Code>
            <Anchor name="cards-navigation">
                <h2>Navigation</h2>
            </Anchor>
            <p>Add some navigation to a card’s header (or block).</p>
            <Example>
                <Card style={textAlign("center")}>
                    <Card.Header>
                        <Nav tabs card-header-tabs>
                            <Nav.Item>
                                <Nav.Link href="javascript:void(0)" active>
                                    Active
                                </Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link href="javascript:void(0)">Link</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link href="javascript:void(0)" disabled tabindex={-1} aria-disabled>
                                    Disabled
                                </Nav.Link>
                            </Nav.Item>
                        </Nav>
                    </Card.Header>
                    <Card.Body>
                        <Card.Title>Special title treatment</Card.Title>
                        <Card.Text>With supporting text below as a natural lead-in to additional content.</Card.Text>
                        <Button>Go somewhere</Button>
                    </Card.Body>
                </Card>
            </Example>
            <Code language="tsx">
                {`<Card style={textAlign("center")}>
    <Card.Header>
        <Nav tabs card-header-tabs>
            <Nav.Item>
                <Nav.Link href="javascript:void(0)" active>
                    Active
                </Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link href="javascript:void(0)">Link</Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link href="javascript:void(0)" disabled tabindex={-1} aria-disabled>
                    Disabled
                </Nav.Link>
            </Nav.Item>
        </Nav>
    </Card.Header>
    <Card.Body>
        <Card.Title>Special title treatment</Card.Title>
        <Card.Text>With supporting text below as a natural lead-in to additional content.</Card.Text>
        <Button>Go somewhere</Button>
    </Card.Body>
</Card>`}
            </Code>
            <Example>
                <Card style={textAlign("center")}>
                    <Card.Header>
                        <Nav pills card-header-pills>
                            <Nav.Item>
                                <Nav.Link href="javascript:void(0)" active>
                                    Active
                                </Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link href="javascript:void(0)">Link</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link href="javascript:void(0)" disabled tabindex={-1} aria-disabled>
                                    Disabled
                                </Nav.Link>
                            </Nav.Item>
                        </Nav>
                    </Card.Header>
                    <Card.Body>
                        <Card.Title>Special title treatment</Card.Title>
                        <Card.Text>With supporting text below as a natural lead-in to additional content.</Card.Text>
                        <Button>Go somewhere</Button>
                    </Card.Body>
                </Card>
            </Example>
            <Code language="tsx">
                {`<Card style={textAlign("center")}>
    <Card.Header>
        <Nav pills card-header-pills>
            <Nav.Item>
                <Nav.Link href="javascript:void(0)" active>
                    Active
                </Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link href="javascript:void(0)">Link</Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link href="javascript:void(0)" disabled tabindex={-1} aria-disabled>
                    Disabled
                </Nav.Link>
            </Nav.Item>
        </Nav>
    </Card.Header>
    <Card.Body>
        <Card.Title>Special title treatment</Card.Title>
        <Card.Text>With supporting text below as a natural lead-in to additional content.</Card.Text>
        <Button>Go somewhere</Button>
    </Card.Body>
</Card>`}
            </Code>
            <Anchor name="cards-images">
                <h2>Images</h2>
            </Anchor>
            <p>
                Cards include a few options for working with images. Choose from appending “image caps” at either end of a card, overlaying
                images with card content, or simply embedding the image in a card.
            </p>
            <Anchor name="cards-images-caps">
                <h3>Image caps</h3>
            </Anchor>
            <p>Similar to headers and footers, cards can include top and bottom “image caps”—images at the top or bottom of a card.</p>
            <Example>
                <Card>
                    <Card.Image src={holderImage("100px180")} position="top" />
                    <Card.Body>
                        <Card.Title>Card title</Card.Title>
                        <Card.Text>
                            This is a wider card with supporting text below as a natural lead-in to additional content. This content is a
                            little bit longer.
                        </Card.Text>
                        <Card.Text>
                            <small style={textColor("muted")}>Last updated 3 mins ago</small>
                        </Card.Text>
                    </Card.Body>
                </Card>
            </Example>
            <Code language="tsx">
                {`<Card>
    <Card.Image src="${holderImage("100px180")}" position="top" />
    <Card.Body>
        <Card.Title>Card title</Card.Title>
        <Card.Text>
            This is a wider card with supporting text below as a natural lead-in to additional content. This content is a
            little bit longer.
        </Card.Text>
        <Card.Text>
            <small style={textColor("muted")}>Last updated 3 mins ago</small>
        </Card.Text>
    </Card.Body>
</Card>`}
            </Code>
            <Example>
                <Card>
                    <Card.Body>
                        <Card.Title>Card title</Card.Title>
                        <Card.Text>
                            This is a wider card with supporting text below as a natural lead-in to additional content. This content is a
                            little bit longer.
                        </Card.Text>
                        <Card.Text>
                            <small style={textColor("muted")}>Last updated 3 mins ago</small>
                        </Card.Text>
                    </Card.Body>
                    <Card.Image src={holderImage("100px180")} position="bottom" />
                </Card>
            </Example>
            <Code language="tsx">
                {`<Card>
    <Card.Body>
        <Card.Title>Card title</Card.Title>
        <Card.Text>
            This is a wider card with supporting text below as a natural lead-in to additional content. This content is a
            little bit longer.
        </Card.Text>
        <Card.Text>
            <small style={textColor("muted")}>Last updated 3 mins ago</small>
        </Card.Text>
    </Card.Body>
    <Card.Image src="${holderImage("100px180")}" position="bottom" />
</Card>`}
            </Code>
            <Anchor name="cards-images-overlays">
                <h3>Image overlays</h3>
            </Anchor>
            <p>
                Turn an image into a card background and overlay your card’s text. Depending on the image, you may or may not need
                additional styles or utilities.
            </p>
            <Example>
                <Card style={[backgroundColor("dark"), textColor("white")]}>
                    <Card.Image src={holderImage("100px270")} />
                    <Card.Image.Overlay>
                        <Card.Title>Card title</Card.Title>
                        <Card.Text>
                            This is a wider card with supporting text below as a natural lead-in to additional content. This content is a
                            little bit longer.
                        </Card.Text>
                        <Card.Text>
                            <small>Last updated 3 mins ago</small>
                        </Card.Text>
                    </Card.Image.Overlay>
                </Card>
            </Example>
            <Code language="tsx">
                {`<Card style={[backgroundColor("dark"), textColor("white")]}>
    <Card.Image src="${holderImage("100px270")}" />
    <Card.Image.Overlay>
        <Card.Title>Card title</Card.Title>
        <Card.Text>
            This is a wider card with supporting text below as a natural lead-in to additional content. This content is a
            little bit longer.
        </Card.Text>
        <Card.Text>
            <small>Last updated 3 mins ago</small>
        </Card.Text>
    </Card.Image.Overlay>
</Card>`}
            </Code>
            <Anchor name="cards-horizontal">
                <h2>Horizontal</h2>
            </Anchor>
            <p>Using a combination of grid and utilities, cards can be made horizontal in a mobile-friendly and responsive way.</p>
            <Example>
                <Card style={[margin({ side: "b", size: 3 }), { maxWidth: 540 }]}>
                    <Row no-gutters>
                        <Col md={4}>
                            <Card.Image src={holderImage("100px270")} />
                        </Col>
                        <Col md={8}>
                            <Card.Body>
                                <Card.Title>Card title</Card.Title>
                                <Card.Text>
                                    This is a wider card with supporting text below as a natural lead-in to additional content. This content
                                    is a little bit longer.
                                </Card.Text>
                                <Card.Text>
                                    <small style={textColor("muted")}>Last updated 3 mins ago</small>
                                </Card.Text>
                            </Card.Body>
                        </Col>
                    </Row>
                </Card>
            </Example>
            <Code language="tsx">
                {`<Card style={[margin({ side: "b", size: 3 }), { maxWidth: 540 }]}>
    <Row no-gutters>
        <Col md={4}>
            <Card.Image src={holderImage("100px270")} />
        </Col>
        <Col md={8}>
            <Card.Body>
                <Card.Title>Card title</Card.Title>
                <Card.Text>
                    This is a wider card with supporting text below as a natural lead-in to additional content. This content
                    is a little bit longer.
                </Card.Text>
                <Card.Text>
                    <small style={textColor("muted")}>Last updated 3 mins ago</small>
                </Card.Text>
            </Card.Body>
        </Col>
    </Row>
</Card>`}
            </Code>
            <Anchor name="cards-styles">
                <h2>Cards styles</h2>
            </Anchor>
            <p>Cards include various options for customizing their backgrounds, borders, and color.</p>
            <Anchor name="cards-styles-background-and-color">
                <h3>Background and color</h3>
            </Anchor>
            <Example>
                {backgroundGradientColorScale.map((bgColor) => (
                    <Card
                        style={[
                            textColor(bgColor === "light" ? "dark" : "white"),
                            backgroundColor(bgColor),
                            margin({ side: "b", size: 3 }),
                            { width: "18rem" },
                        ]}
                    >
                        <Card.Header>Header</Card.Header>
                        <Card.Body>
                            <Card.Title>Card title - {bgColor}</Card.Title>
                            <Card.Text>
                                Some quick example text to build on the card title and make up the bulk of the card's content.
                            </Card.Text>
                        </Card.Body>
                    </Card>
                ))}
            </Example>
            <Code language="tsx">
                {backgroundGradientColorScale
                    .map(
                        (bgColor) =>
                            `<Card style={[textColor("${
                                bgColor === "light" ? "dark" : "white"
                            }"), backgroundColor("${bgColor}"), margin({ side: "b", size: 3 }), { width: "18rem" }]}>
    <Card.Header>Header</Card.Header>
    <Card.Body>
        <Card.Title>Card title - ${bgColor}</Card.Title>
        <Card.Text>
            Some quick example text to build on the card title and make up the bulk of the card's content.
        </Card.Text>
    </Card.Body>
</Card>`
                    )
                    .join("\n")}
            </Code>
            <Anchor name="cards-styles-border">
                <h3>Border</h3>
            </Anchor>
            <Example>
                {borderColorScale.map((borderColorItem) => (
                    <Card
                        style={[
                            textColor(["white", "light"].indexOf(borderColorItem) >= 0 ? "dark" : borderColorItem),
                            borderColor(borderColorItem),
                            margin({ side: "b", size: 3 }),
                            { width: "18rem" },
                        ]}
                    >
                        <Card.Header>Header</Card.Header>
                        <Card.Body>
                            <Card.Title>Card title - {borderColorItem}</Card.Title>
                            <Card.Text>
                                Some quick example text to build on the card title and make up the bulk of the card's content.
                            </Card.Text>
                        </Card.Body>
                    </Card>
                ))}
            </Example>
            <Code language="tsx">
                {borderColorScale
                    .map(
                        (borderColorItem) =>
                            `<Card style={[textColor("${
                                ["white", "light"].indexOf(borderColorItem) >= 0 ? "dark" : borderColorItem
                            }"), backgroundColor("${borderColorItem}"), margin({ side: "b", size: 3 }), { width: "18rem" }]}>
    <Card.Header>Header</Card.Header>
    <Card.Body>
        <Card.Title>Card title - ${borderColorItem}</Card.Title>
        <Card.Text>
            Some quick example text to build on the card title and make up the bulk of the card's content.
        </Card.Text>
    </Card.Body>
</Card>`
                    )
                    .join("\n")}
            </Code>
        </>
    );
}

import * as b from "bobril";
import { IRouteWithNavDefinition } from "../../../../common/routing";
import { Anchor } from "../../../../common/Anchor";
import { Example } from "../../../../common/Example";
import { Lead } from "../../../../common/Lead";
import { Blockquote, Button, Card, ListGroup, margin, textAlign, textColor } from "../../../../../index";
import { Code } from "../../../../common/Code";

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
                    <Card.Image src={imageUri} />
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
    <Card.Image src={imageUri} />
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
                    <Card.Image src={imageUri} />
                    <Card.Body>
                        <Card.Text>
                            Some quick example text to build on the card title and make up the bulk of the card's content.
                        </Card.Text>
                    </Card.Body>
                </Card>
            </Example>
            <Code language="tsx">{`<Card style={{ width: "18rem" }}>
    <Card.Image src={imageUri} />
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
                    <Card.Image src={imageUri} />
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
    <Card.Image src={imageUri} />
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
        </>
    );
}

const imageUri =
    "data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%22286%22%20height%3D%22180%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20286%20180%22%20preserveAspectRatio%3D%22none%22%3E%3Cdefs%3E%3Cstyle%20type%3D%22text%2Fcss%22%3E%23holder_1757fa20239%20text%20%7B%20fill%3A%23999%3Bfont-weight%3Anormal%3Bfont-family%3A-apple-system%2CBlinkMacSystemFont%2C%26quot%3BSegoe%20UI%26quot%3B%2CRoboto%2C%26quot%3BHelvetica%20Neue%26quot%3B%2CArial%2C%26quot%3BNoto%20Sans%26quot%3B%2Csans-serif%2C%26quot%3BApple%20Color%20Emoji%26quot%3B%2C%26quot%3BSegoe%20UI%20Emoji%26quot%3B%2C%26quot%3BSegoe%20UI%20Symbol%26quot%3B%2C%26quot%3BNoto%20Color%20Emoji%26quot%3B%2C%20monospace%3Bfont-size%3A14pt%20%7D%20%3C%2Fstyle%3E%3C%2Fdefs%3E%3Cg%20id%3D%22holder_1757fa20239%22%3E%3Crect%20width%3D%22286%22%20height%3D%22180%22%20fill%3D%22%23373940%22%3E%3C%2Frect%3E%3Cg%3E%3Ctext%20x%3D%22105.78125%22%20y%3D%2296.721875%22%3E286x180%3C%2Ftext%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E";

import * as b from "bobril";
import { IRouteWithNavDefinition } from "../../../../common/routing";
import { Anchor } from "../../../../common/Anchor";
import { Example } from "../../../../common/Example";
import {
    backgroundColor,
    Button,
    Card,
    Col,
    display,
    flex,
    gutter,
    margin,
    padding,
    position,
    Row,
    stretchedLink,
    width,
} from "../../../../../index";
import { Code } from "../../../../common/Code";
import { Lead } from "../../../../common/Lead";
import { placeholderUri } from "../../../../common/placeholderGenerator";

export const stretchedLinkRoute: IRouteWithNavDefinition = {
    url: "stretched-link",
    name: "stretched-link",
    label: "Stretched link",
    handler: () => <StretchedLinkDoc />,
    subs: [],
};

export function StretchedLinkDoc(): b.IBobrilNode {
    return (
        <>
            <Anchor name="stretched-link">
                <h1>Stretched link</h1>
            </Anchor>
            <Lead>Make any HTML element or Bootstrap component clickable by “stretching” a nested link via CSS.</Lead>
            <p>
                Add <code>stretchedLink</code> to a link to make its{" "}
                <a href="https://developer.mozilla.org/en-US/docs/Web/CSS/Containing_block">containing block</a> clickable via a{" "}
                <code>::after</code> pseudo element. In most cases, this means that an element with <code>position: relative;</code> that
                contains a link with the <code>stretchedLink</code> style is clickable.
            </p>
            <p>
                Cards have <code>position: relative</code> by default in Bootstrap, so in this case you can safely add the{" "}
                <code>stretchedLink</code> style to a link in the card without any other HTML changes.
            </p>
            <p>
                Multiple links and tap targets are not recommended with stretched links. However, some <code>position</code> and{" "}
                <code>z-index</code> styles can help should this be required.
            </p>
            <Example>
                <Card style={{ width: "18rem" }}>
                    <Card.Image src={placeholderUri(100, "%", 180, "px")} position="top" />
                    <Card.Body>
                        <Card.Title>Card with stretched link</Card.Title>
                        <Card.Text>
                            Some quick example text to build on the card title and make up the bulk of the card's content.
                        </Card.Text>
                        <Button variant="primary" href="javascript:void(0)" style={stretchedLink}>
                            Go somewhere
                        </Button>
                    </Card.Body>
                </Card>
            </Example>
            <Code language="tsx">{`<Card style={{ width: "18rem" }}>
    <Card.Image src={placeholderUri(100, "%", 180, "px")} position="top" />
    <Card.Body>
        <Card.Title>Card with stretched link</Card.Title>
        <Card.Text>
            Some quick example text to build on the card title and make up the bulk of the card's content.
        </Card.Text>
        <Button variant="primary" href="javascript:void(0)" style={stretchedLink}>
            Go somewhere
        </Button>
    </Card.Body>
</Card>`}</Code>
            <p>
                Most custom components do not have <code>position: relative</code> by default, so we need to add the{" "}
                <code>position("relative")</code> here to prevent the link from stretching outside the parent element.
            </p>
            <Example>
                <div style={[display("flex"), position("relative")]}>
                    <img src={placeholderUri(144, "px", 144, "px")} style={[margin("e", 3), flex("shrink", 0)]} alt="..." />
                    <div>
                        <h5 style={margin("t", 0)}>Custom component with stretched link</h5>
                        <p>
                            Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio,
                            vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec
                            lacinia congue felis in faucibus.
                        </p>
                        <a href="javascript:void(0)" style={stretchedLink}>
                            Go somewhere
                        </a>
                    </div>
                </div>
            </Example>
            <Code language="tsx">{`<div style={[display("flex"), position("relative")]}>
    <img src={placeholderUri(144, "px", 144, "px")} style={[margin("e", 3), flex("shrink", 0)]} alt="..." />
    <div>
        <h5 style={margin("t", 0)}>Custom component with stretched link</h5>
        <p>
            Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio,
            vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec
            lacinia congue felis in faucibus.
        </p>
        <a href="javascript:void(0)" style={stretchedLink}>
            Go somewhere
        </a>
    </div>
</div>`}</Code>
            <Example>
                <Row style={[gutter(0), backgroundColor("light"), position("relative")]}>
                    <Col md={6} style={[margin("b", 0, "md"), padding(4, "md")]}>
                        <img src={placeholderUri(300, "px", 200, "px")} style={width(100)} alt="..." />
                    </Col>
                    <Col md={6} style={[padding(4), padding("s", 0, "md")]}>
                        <h5 style={margin("t", 0)}>Columns with stretched link</h5>
                        <p>
                            Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio,
                            vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec
                            lacinia congue felis in faucibus.
                        </p>
                        <a href="javascript:void(0)" style={stretchedLink}>
                            Go somewhere
                        </a>
                    </Col>
                </Row>
            </Example>
            <Code language="tsx">{`<Row style={[gutter(0), backgroundColor("light"), position("relative")]}>
    <Col md={6} style={[margin("b", 0, "md"), padding(4, "md")]}>
        <img src={placeholderUri(300, "px", 200, "px")} style={width(100)} alt="..." />
    </Col>
    <Col md={6} style={[padding(4), padding("s", 0, "md")]}>
        <h5 style={margin("t", 0)}>Columns with stretched link</h5>
        <p>
            Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio,
            vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec
            lacinia congue felis in faucibus.
        </p>
        <a href="javascript:void(0)" style={stretchedLink}>
            Go somewhere
        </a>
    </Col>
</Row>`}</Code>
        </>
    );
}

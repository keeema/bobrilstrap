import * as b from "bobril";
import { IRouteWithNavDefinition } from "../../../common/routing";
import { Anchor } from "../../../common/Anchor";
import { Code } from "../../../common/Code";
import { Lead } from "../../../common/Lead";
import { Example } from "../../../common/Example";
import { Card, Icon, textColor, textAlign, Row, Col } from "../../../../index";
import { toPascalCase } from "../../../../utils/strings";
import { margin } from "../../../../src/utilities/spacing";

export const iconsRoute: IRouteWithNavDefinition = {
    url: "icons",
    name: "icons",
    label: "Icons",
    oneLevel: true,
    handler: () => <Icons />,
    subs: [
        {
            url: "example",
            name: "example",
            label: "Example",
            subs: [],
        },
        {
            url: "styling",
            name: "styling",
            label: "Styling",
            subs: [],
        },
        {
            url: "list",
            name: "list",
            label: "List of icons",
            subs: [],
        },
    ],
};

export function Icons(): b.IBobrilNode {
    return (
        <>
            <Anchor name="introduction">
                <h1>Icons</h1>
            </Anchor>
            <Lead>Learn how to add icons.</Lead>
            <Anchor name="example">
                <h2>Examples</h2>
            </Anchor>
            <p>
                Simply use <code>{`<Icon.IconName />`}</code> to add SVG icon to page.
            </p>
            <Example>
                <Icon.StarFill width="1em" height="1em" viewBox="0 0 16 16" />
            </Example>
            <Code language="tsx">{`<Icon.StarFill width="1em" height="1em" viewBox="0 0 16 16" />`}</Code>
            <Anchor name="styling">
                <h2>Styling</h2>
            </Anchor>
            <p>
                Define the size of image using <code>width</code>, <code>height</code>, <code>viewbox</code> or change the color by standard
                styling. Utility <code>textColor("color")</code> is usable for this purpose.
            </p>
            <Example>
                <Icon.StarFill width="1em" height="1em" viewBox="0 0 16 16" style={textColor("success")} />
            </Example>
            <Code language="tsx">{`<Icon.StarFill width="1em" height="1em" viewBox="0 0 16 16" style={textColor("success")} />`}</Code>
            <Anchor name="list">
                <h2>List of icons</h2>
            </Anchor>
            <Example>
                <Row>
                    {Object.values(Icon).map((IconItem) => (
                        <IconTile name={IconItem.id}>{b.createElement(IconItem, { width: "1em", height: "1em" })}</IconTile>
                    ))}
                </Row>
            </Example>
        </>
    );
}

function IconTile({ children, name }: b.IDataWithChildren & { name: string }): b.IBobrilNode {
    return (
        <Col>
            <Card style={[{ width: "12rem", height: "6rem" }, textAlign("center"), margin({ side: "b", size: 3 })]}>
                <Card.Body>
                    {children}
                    <Card.Text>
                        <small>{toPascalCase(name.substring(17))}</small>
                    </Card.Text>
                </Card.Body>
            </Card>
        </Col>
    );
}

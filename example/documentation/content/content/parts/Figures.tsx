import * as b from "bobril";
import { IRouteWithNavDefinition } from "../../../../common/routing";
import { Anchor } from "../../../../common/Anchor";
import { Example } from "../../../../common/Example";
import { Figure, image, rounded, textAlign } from "../../../../../index";
import { Code } from "../../../../common/Code";
import { Lead } from "../../../../common/Lead";
import { placeholderUri } from "../../../../common/placeholderGenerator";

export const figuresRoute: IRouteWithNavDefinition = {
    url: "figures",
    name: "figures",
    label: "Figures",
    handler: () => <FiguresDoc />,
    subs: [],
};

export function FiguresDoc(): b.IBobrilNode {
    return (
        <>
            <Anchor name="figures">
                <h1>Figures</h1>
            </Anchor>
            <Lead>Documentation and examples for displaying related images and text with the figure component.</Lead>
            <p>
                Anytime you need to display a piece of content—like an image with an optional caption, consider using a{" "}
                <code>{`<Figure>`}</code>.
            </p>
            <p>
                Use the included <code>{`<Figure>`}</code>, <code>image("figure")</code> and <code>{`<Figure.Caption>`}</code> to provide
                some baseline styles for the HTML5 <code>&lt;figure&gt;</code> and <code>&lt;figcaption&gt;</code> elements. Images in
                figures have no explicit size, so be sure to add the <code>image("fluid")</code> to your <code>&lt;img&gt;</code> to make it
                responsive.
            </p>
            <Example>
                <Figure>
                    <img src={placeholderUri(400, "px", 300, "px")} style={[image("figure"), image("fluid"), rounded()]} alt="..." />
                    <Figure.Caption>A caption for the above image.</Figure.Caption>
                </Figure>
            </Example>
            <Code language="tsx">{`<Figure>
    <img src={placeholderUri(400, "px", 300, "px")} style={[image("figure"), image("fluid"), rounded()]} alt="..." />
    <Figure.Caption>A caption for the above image.</Figure.Caption>
</Figure>`}</Code>
            <p>Aligning the figure’s caption is easy with our text utilities.</p>
            <Example>
                <Figure>
                    <img src={placeholderUri(400, "px", 300, "px")} style={[image("figure"), image("fluid"), rounded()]} alt="..." />
                    <Figure.Caption style={textAlign("end")}>A caption for the above image.</Figure.Caption>
                </Figure>
            </Example>
            <Code language="tsx">{`<Figure>
    <img src={placeholderUri(400, "px", 300, "px")} style={[image("figure"), image("fluid"), rounded()]} alt="..." />
    <Figure.Caption style={textAlign("end")>A caption for the above image.</Figure.Caption>
</Figure>`}</Code>
        </>
    );
}

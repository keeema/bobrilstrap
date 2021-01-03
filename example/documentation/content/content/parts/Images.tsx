import * as b from "bobril";
import { IRouteWithNavDefinition } from "../../../../common/routing";
import { Anchor } from "../../../../common/Anchor";
import { Example } from "../../../../common/Example";
import { display, float, image, margin, rounded } from "../../../../../index";
import { Code } from "../../../../common/Code";
import { Lead } from "../../../../common/Lead";
import { placeholderUri } from "../../../../common/placeholderGenerator";

export const imagesRoute: IRouteWithNavDefinition = {
    url: "images",
    name: "images",
    label: "Images",
    handler: () => <ImagesDoc />,
    subs: [
        {
            url: "responsive-images",
            name: "images-responsive-images",
            label: "Responsive images",
            subs: [],
        },
        {
            url: "image-thumbnails",
            name: "images-image-thumbnails",
            label: "Image thumbnails",
            subs: [],
        },
        {
            url: "aligning-images",
            name: "images-aligning-images",
            label: "Aligning images",
            subs: [],
        },
    ],
};

export function ImagesDoc(): b.IBobrilNode {
    return (
        <>
            <Anchor name="images">
                <h1>Images</h1>
            </Anchor>
            <Lead>
                Documentation and examples for opting images into responsive behavior (so they never become larger than their parent
                elements) and add lightweight styles to them.
            </Lead>
            <Anchor name="images-responsive-images">
                <h2>Responsive images</h2>
            </Anchor>
            <p>
                Images are made responsive with <code>image("fluid")</code>. This applies <code>max-width: 100%;</code> and{" "}
                <code>height: auto;</code> to the image so that it scales with the parent element.
            </p>
            <Example>
                <img src={placeholderUri(1024, "px", 250, "px")} style={image("fluid")} />
            </Example>
            <Code language="tsx">{`<img src={placeholderUri(1024, "px", 250, "px")} style={image("fluid")} />`}</Code>
            <Anchor name="images-image-thumbnails">
                <h2>Image thumbnails</h2>
            </Anchor>
            <p>
                you can use <code>image("thumbnail")</code> to give an image a rounded 1px border appearance.
            </p>
            <Example>
                <img src={placeholderUri(200, "px", 200, "px")} style={image("thumbnail")} />
            </Example>
            <Code language="tsx">{`<img src={placeholderUri(200, "px", 200, "px")} style={image("thumbnail")} />`}</Code>
            <Anchor name="images-aligning-images">
                <h2>Aligning images</h2>
            </Anchor>
            <Example>
                <img src={placeholderUri(200, "px", 200, "px")} style={[rounded(), float("start")]} />
                <img src={placeholderUri(200, "px", 200, "px")} style={[rounded(), float("end")]} />
            </Example>
            <Code language="tsx">{`<img src={placeholderUri(200, "px", 200, "px")} style={[rounded(), float("start")]} />
<img src={placeholderUri(200, "px", 200, "px")} style={[rounded(), float("end")]} />`}</Code>
            <Example>
                <img src={placeholderUri(200, "px", 200, "px")} style={[rounded(), margin("x", "auto"), display("block")]} />
            </Example>
            <Code language="tsx">{`<img src={placeholderUri(200, "px", 200, "px")} style={[rounded(), margin("x", "auto"), display("block")]} />`}</Code>
        </>
    );
}

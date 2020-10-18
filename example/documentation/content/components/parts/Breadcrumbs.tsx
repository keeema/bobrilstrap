import * as b from "bobril";
import { IRouteWithNavDefinition } from "../../../../common/routing";
import { Anchor } from "../../../../common/Anchor";
import { Example } from "../../../../common/Example";
import { Breadcrumb } from "../../../../../index";
import { Code } from "../../../../common/Code";
import { Lead } from "../../../../common/Lead";

export const breadcrumbsRoute: IRouteWithNavDefinition = {
    url: "breadcrumbs",
    name: "breadcrumbs",
    label: "Breadcrumbs",
    handler: () => <Breadcrumbs />,
    subs: [
        {
            url: "examples",
            name: "breadcrumbs-examples",
            label: "Examples",
            subs: [],
        },
        {
            url: "accessibility",
            name: "breadcrumbs-accessibility",
            label: "Accessibility",
            subs: [],
        },
    ],
};

export function Breadcrumbs(): b.IBobrilNode {
    return (
        <>
            <h1>Breadcrumbs</h1>
            <Lead>Indicate the current page’s location within a navigational hierarchy that automatically adds separators.</Lead>
            <Anchor name="breadcrumbs-examples">
                <h2>Examples</h2>
            </Anchor>
            <Example>
                <nav aria-label="breadcrumb">
                    <Breadcrumb>
                        <Breadcrumb.Item>
                            <a href="#">Home</a>
                        </Breadcrumb.Item>
                        <Breadcrumb.Item>
                            <a href="#">Library</a>
                        </Breadcrumb.Item>
                        <Breadcrumb.Item active aria-current="page">
                            Data
                        </Breadcrumb.Item>
                    </Breadcrumb>
                </nav>
            </Example>
            <Code language="tsx">
                {`<nav aria-label="breadcrumb">
    <Breadcrumb>
        <Breadcrumb.Item>
            <a href="#">Home</a>
        </Breadcrumb.Item>
        <Breadcrumb.Item>
            <a href="#">Library</a>
        </Breadcrumb.Item>
        <Breadcrumb.Item active aria-current="page">
            Data
        </Breadcrumb.Item>
    </Breadcrumb>
</nav>`}
            </Code>
            <Anchor name="breadcrumbs-accessibility">
                <h2>Accessibility</h2>
                <p>
                    Since breadcrumbs provide a navigation, it’s a good idea to add a meaningful label such as{" "}
                    <code>aria-label="breadcrumb"</code> to describe the type of navigation provided in the <code>{`<nav>`}</code> element,
                    as well as applying an <code>aria-current="page"</code> to the last item of the set to indicate that it represents the
                    current page.
                </p>
                <p>
                    For more information, see the{" "}
                    <a href="https://www.w3.org/TR/wai-aria-practices/#breadcrumb">
                        WAI-ARIA Authoring Practices for the breadcrumb pattern
                    </a>
                    .
                </p>
            </Anchor>
        </>
    );
}

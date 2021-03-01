import * as b from "bobril";
import { IRouteWithNavDefinition } from "../../../../common/routing";
import { Anchor } from "../../../../common/Anchor";
import { Code } from "../../../../common/Code";
import { Lead } from "../../../../common/Lead";
import { Example } from "../../../../common/Example";
import { Button } from "../../../../../index";

export const introductionRoute: IRouteWithNavDefinition = {
    url: "introduction",
    name: "introduction",
    label: "Introduction",
    handler: () => <Introduction />,
    subs: [
        {
            url: "installation",
            name: "installation",
            label: "Installation",
            subs: [],
        },
        {
            url: "importing-packages",
            name: "importing-packages",
            label: "Importing Packages and Components",
            subs: [],
        },
        {
            url: "responsive-meta-tag",
            name: "responsive-meta-tag",
            label: "Responsive meta tag",
            subs: [],
        },
    ],
};

export function Introduction(): b.IBobrilNode {
    return (
        <>
            <Anchor name="introduction">
                <h1>Introduction</h1>
            </Anchor>
            <Lead>Learn how to create application with Bobrilstrap.</Lead>
            <p>
                New in Bobril? See the{" "}
                <a href="https://bobril.com/" target="_blank">
                    documentation page
                </a>
                .
            </p>
            <Anchor name="installation">
                <h2>Installation</h2>
            </Anchor>
            <p>Bobrilstrap is ready as an npm package. To create new project, start by npm project initialization?</p>
            <Code language="bash">{`npm init`}</Code>
            <p>Then install bobril, bobrilstrap and bootstrap 5.</p>
            <Code language="bash">{`npm i bobril bobrilstrap bootstrap@5.0.0-beta2 --save`}</Code>
            <Anchor name="importing-packages">
                <h2>Importing Packages and Components</h2>
            </Anchor>
            <p>
                Simply create <em>index.tsx</em>, import bobril, bobrilstrap, bootstrap CSS and use TSX components. Then run bobril-build by{" "}
                <code>bb</code> command.
            </p>
            <Example>
                <Button variant="primary" onClick={() => alert("Clicked")}>
                    Click
                </Button>
            </Example>
            <Code language="tsx">{`import * as b from "bobril";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button } from "bobrilstrap";

function App(): b.IBobrilNode {
  return (
    <>
      <Button variant="primary" onClick={() => alert("Clicked")}>
        Click
      </Button>
    </>
  );
}

b.init(() => <App />)`}</Code>
            <Anchor name="responsive-meta-tag">
                <h2>Responsive meta tag</h2>
            </Anchor>
            <p>
                Bobrilstrap and Bootstrap are developed mobile first, a strategy in which we optimize code for mobile devices first and then
                scale up components as necessary. To ensure proper rendering and touch zooming for all devices, add the responsive viewport
                meta tag to your <code>{`<head>`}</code> by simple <code>bobril</code> configuration change in <em>package.json:</em>
            </p>
            <Code language="json">{`"bobril": {
    "head": "<meta name=\\"viewport\\" content=\\"width=device-width, initial-scale=1, shrink-to-fit=no\\">"
}`}</Code>
        </>
    );
}

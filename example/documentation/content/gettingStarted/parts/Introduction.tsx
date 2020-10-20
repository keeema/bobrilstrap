import * as b from "bobril";
import { IRouteWithNavDefinition } from "../../../../common/routing";
import { Anchor } from "../../../../common/Anchor";
import { Code } from "../../../../common/Code";
import { Lead } from "../../../../common/Lead";

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
    ],
};

export function Introduction(): b.IBobrilNode {
    return (
        <>
            <Anchor name="introduction">
                <h1>Introduction</h1>
            </Anchor>
            <Lead>Learn how to create application with Bobrilstrap.</Lead>
            <Anchor name="installation">
                <h2>Installation</h2>
            </Anchor>
            <p>Bobrilstrap is ready as an npm package. To create new project, start by npm project initialization?</p>
            <Code language="bash">{`npm init`}</Code>
            <p>Then install bobril and bobrilstrap.</p>
            <Code language="bash">{`npm i bobril bobrilstrap --save`}</Code>
            <Anchor name="importing-packages">
                <h2>Importing Packages and Components</h2>
            </Anchor>
            <p>Simply import bobril, bobrilstrap, bootstrap CSS and use TSX components.</p>
            <Code language="tsx">{`import * as b from "bobril";
import "bootstrap";
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

b.init(()=><App />)`}</Code>
        </>
    );
}

import * as b from "bobril";
import { IRouteWithNavDefinition } from "../../../../common/routing";
import { LoremIpsum } from "../../../../common/loremIpsim";
import { Anchor } from "../../../../common/anchor";

export const introductionRoute: IRouteWithNavDefinition = {
    url: "introduction",
    name: "introduction",
    label: "Introduction",
    handler: () => <Introduction />,
    subs: [
        {
            url: "quick-start",
            name: "quick-start",
            label: "Quick start",
            subs: [
                {
                    url: "test-1",
                    name: "test-1",
                    label: "Test 1",
                    subs: [],
                },
                {
                    url: "test-2",
                    name: "test-2",
                    label: "Test 2",
                    subs: [],
                },
            ],
        },
        {
            url: "theming",
            name: "theming",
            label: "Theming",
            subs: [],
        },
    ],
};

export function Introduction(): b.IBobrilNode {
    return (
        <>
            <h1>Introduction</h1>
            <LoremIpsum />
            <Anchor name="quick-start">
                <h2>Quick Start</h2>
            </Anchor>
            <pre>
                <code class="language-tsx">{`import * as b from "bobril";
interface IHelloData {
  name: string;
  children: b.IBobrilChildren;
}
class Hello extends b.Component<IHelloData> {
  render(): b.IBobrilChildren {
    return (
      <>
        <h1>Hello {this.data.name}</h1>
        {this.data.children}
      </>
    );
  }
}
b.init(() => (
  <Hello name="Developer">
    <p>
      This is your first <strong>bobril</strong> application.
    </p>
  </Hello>
));
`}</code>
            </pre>
            <LoremIpsum />
            <LoremIpsum />
            <Anchor name="test-1">
                <h2>Test 1</h2>
            </Anchor>
            <LoremIpsum />
            <LoremIpsum />
            <Anchor name="test-2">
                <h2>Test 2</h2>
            </Anchor>
            <LoremIpsum />
        </>
    );
}

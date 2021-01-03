import * as b from "bobril";
import { IRouteWithNavDefinition } from "../../../../common/routing";
import { Anchor } from "../../../../common/Anchor";
import { Example } from "../../../../common/Example";
import { margin, Progress, BackgroundGradientColor, backgroundColor } from "../../../../../index";
import { Code } from "../../../../common/Code";
import { Lead } from "../../../../common/Lead";

export const progressRoute: IRouteWithNavDefinition = {
    url: "progress",
    name: "progress",
    label: "Progress",
    handler: () => <ProgressDoc />,
    subs: [
        {
            url: "example",
            name: "progress-example",
            label: "Example",
            subs: [],
        },
        {
            url: "labels",
            name: "progress-labels",
            label: "Labels",
            subs: [],
        },
        {
            url: "height",
            name: "progress-height",
            label: "Height",
            subs: [],
        },
        {
            url: "backgrounds",
            name: "progress-backgrounds",
            label: "Backgrounds",
            subs: [],
        },
        {
            url: "multiple-bars",
            name: "progress-multiple-bars",
            label: "Multiple bars",
            subs: [],
        },
        {
            url: "striped",
            name: "progress-striped",
            label: "Striped",
            subs: [],
        },
        {
            url: "animated-stripes",
            name: "progress-animated-stripes",
            label: "Animated stripes",
            subs: [],
        },
    ],
};

export function ProgressDoc(): b.IBobrilNode {
    return (
        <>
            <Anchor name="progress">
                <h1>Progress</h1>
            </Anchor>
            <Lead>
                Documentation and examples for using custom progress bars featuring support for stacked bars, animated backgrounds, and text
                labels.
            </Lead>
            <Anchor name="progress-example">
                <h2>Example</h2>
            </Anchor>
            <Example>
                {bars
                    .filter((bar) => bar.value !== 15)
                    .map((bar) => (
                        <div style={margin("b", 3)}>
                            <Progress>
                                <Progress.Bar now={bar.value} />
                            </Progress>
                        </div>
                    ))}
            </Example>
            <Code language="tsx">
                {bars
                    .filter((bar) => bar.value !== 15)
                    .map(
                        (bar) => `<Progress>
    <Progress.Bar now={${bar.value}} />
</Progress>\n`
                    )}
            </Code>
            <Anchor name="progress-labels">
                <h2>Labels</h2>
            </Anchor>
            <p>Add labels to your progress bars by placing text within </p>
            <Example>
                <Progress>
                    <Progress.Bar now={25}>25%</Progress.Bar>
                </Progress>
            </Example>
            <Code language="tsx">
                {`<Progress>
    <Progress.Bar now={25}>25%</Progress.Bar>
</Progress>`}
            </Code>
            <Anchor name="progress-height">
                <h2>Height</h2>
            </Anchor>
            <p>
                Define height simply with inline or predefined <code>style</code>.
            </p>
            <Example>
                <Progress style={height1}>
                    <Progress.Bar now={25} />
                </Progress>
            </Example>
            <Code language="tsx">
                {`const height1 = b.styleDef({ height: 1 });
                
<Progress style={height1}>
    <Progress.Bar now={25} />
</Progress>`}
            </Code>
            <Example>
                <Progress style={height20}>
                    <Progress.Bar now={25} />
                </Progress>
            </Example>
            <Code language="tsx">
                {`const height20 = b.styleDef({ height: 20 });
                
<Progress style={height20}>
    <Progress.Bar now={25} />
</Progress>`}
            </Code>
            <Anchor name="progress-backgrounds">
                <h2>Backgrounds</h2>
            </Anchor>
            <p>Use background utilities to change the appearance of individual progress bars.</p>
            <Example>
                {bars
                    .filter((bar) => bar.value > 15)
                    .map((bar) => (
                        <div style={margin("b", 3)}>
                            <Progress>
                                <Progress.Bar now={bar.value} style={bar.bg && backgroundColor(bar.bg)} />
                            </Progress>
                        </div>
                    ))}
            </Example>
            <Code language="tsx">
                {bars
                    .filter((bar) => bar.value > 15)
                    .map(
                        (bar) => `<Progress>
    <Progress.Bar now={${bar.value}}${bar.bg ? ` style={backgroundColor("${bar.bg}")}` : ""}  />
</Progress>\n`
                    )}
            </Code>
            <Anchor name="progress-multiple-bars">
                <h2>Multiple bars</h2>
            </Anchor>
            <p>Include multiple progress bars in a progress component if you need.</p>
            <Example>
                <Progress>
                    <Progress.Bar now={15} />
                    <Progress.Bar now={30} style={backgroundColor("success")} />
                    <Progress.Bar now={20} style={backgroundColor("info")} />
                </Progress>
            </Example>
            <Code language="tsx">
                {`<Progress>
    <Progress.Bar now={15} />
    <Progress.Bar now={30} style={backgroundColor("success")} />
    <Progress.Bar now={20} style={backgroundColor("info")} />
</Progress>`}
            </Code>
            <Anchor name="progress-striped">
                <h2>Striped</h2>
            </Anchor>
            <p>
                Add <code>striped</code> prop to apply a stripe via CSS gradient over the progress bar’s background color.
            </p>
            <Example>
                {bars
                    .filter((bar) => bar.value > 0)
                    .map((bar) => (
                        <div style={margin("b", 3)}>
                            <Progress>
                                <Progress.Bar striped now={bar.value} style={bar.bg && backgroundColor(bar.bg)} />
                            </Progress>
                        </div>
                    ))}
            </Example>
            <Code language="tsx">
                {bars
                    .filter((bar) => bar.value > 15)
                    .map(
                        (bar) => `<Progress>
    <Progress.Bar striped now={${bar.value}}${bar.bg ? ` style={backgroundColor("${bar.bg}")}` : ""}  />
</Progress>\n`
                    )}
            </Code>
            <Anchor name="progress-animated-stripes">
                <h2>Animated stripes</h2>
            </Anchor>
            <p>
                The striped gradient can also be animated. Add <code>animated</code> prop to animate the stripes right to left via CSS3
                animations.
            </p>
            <Example>
                {bars
                    .filter((bar) => bar.value > 0)
                    .map((bar) => (
                        <div style={margin("b", 3)}>
                            <Progress>
                                <Progress.Bar animated striped now={bar.value} style={bar.bg && backgroundColor(bar.bg)} />
                            </Progress>
                        </div>
                    ))}
            </Example>
            <Code language="tsx">
                {bars
                    .filter((bar) => bar.value > 0)
                    .map(
                        (bar) => `<Progress>
    <Progress.Bar animated striped now={${bar.value}}${bar.bg ? ` style={backgroundColor("${bar.bg}")}` : ""}  />
</Progress>\n`
                    )}
            </Code>
        </>
    );
}

const height1 = b.styleDef({ height: 1 });
const height20 = b.styleDef({ height: 20 });

const bars: { value: number; bg?: BackgroundGradientColor }[] = [
    { value: 0, bg: undefined },
    { value: 15, bg: undefined },
    { value: 25, bg: "success" },
    { value: 50, bg: "info" },
    { value: 75, bg: "warning" },
    { value: 100, bg: "danger" },
];

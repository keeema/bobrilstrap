import * as b from "bobril";
import { IRouteWithNavDefinition } from "../../../../common/routing";
import { Anchor } from "../../../../common/Anchor";
import { Example } from "../../../../common/Example";
import { backgroundColor, display, flex, margin, overflow, padding } from "../../../../../index";
import { Code } from "../../../../common/Code";
import { Lead } from "../../../../common/Lead";

export const overflowRoute: IRouteWithNavDefinition = {
    url: "overflow",
    name: "overflow",
    label: "Overflow",
    handler: () => <OverflowDoc />,
    subs: [],
};

export function OverflowDoc(): b.IBobrilNode {
    return (
        <>
            <Anchor name="overflow">
                <h1>Overflow</h1>
            </Anchor>
            <Lead>Use these shorthand utilities for quickly configuring how content overflows an element.</Lead>
            <p>
                Adjust the <code>overflow</code> property on the fly with four default values and classes. These classes are not responsive
                by default.
            </p>
            <Example>
                <div style={[display("flex"), flex("row")]}>
                    <div
                        style={[
                            overflow("auto"),
                            padding(3),
                            margin("b", 3),
                            margin("b", 0, "md"),
                            margin("e", 3, "md"),
                            backgroundColor("light"),
                            exampleBoxStyle,
                        ]}
                    >
                        This is an example of using <code>overflow("auto")</code> on an element with set width and height dimensions. By
                        design, this content will vertically scroll.
                    </div>
                    <div
                        style={[
                            overflow("hidden"),
                            padding(3),
                            margin("b", 3),
                            margin("b", 0, "md"),
                            margin("e", 3, "md"),
                            backgroundColor("light"),
                            exampleBoxStyle,
                        ]}
                    >
                        This is an example of using <code>overflow("hidden")</code> on an element with set width and height dimensions.
                    </div>
                    <div
                        style={[
                            overflow("visible"),
                            padding(3),
                            margin("b", 3),
                            margin("b", 0, "md"),
                            margin("e", 3, "md"),
                            backgroundColor("light"),
                            exampleBoxStyle,
                        ]}
                    >
                        This is an example of using <code>overflow("visible")</code> on an element with set width and height dimensions.
                    </div>
                    <div style={[overflow("scroll"), padding(3), backgroundColor("light"), exampleBoxStyle]}>
                        This is an example of using <code>overflow("scroll")</code> on an element with set width and height dimensions.
                    </div>
                </div>
            </Example>
            <Code language="tsx">{`<div style={[display("flex"), flex("row")]}>
    <div style={[overflow("auto"), padding(3), margin("b", 3), margin("b", 0, "md"), margin("e", 3 ,"md"), backgroundColor("light"), exampleBoxStyle]}>
        This is an example of using <code>overflow("auto")</code> on an element with set width and height dimensions. By design,
        this content will vertically scroll.
    </div>
    <div style={[overflow("hidden"), padding(3), margin("b", 3), margin("b", 0, "md"), margin("e", 3 ,"md"), backgroundColor("light"), exampleBoxStyle]}>
        This is an example of using <code>overflow("hidden")</code> on an element with set width and height dimensions.
    </div>
    <div style={[overflow("visible"), padding(3), margin("b", 3), margin("b", 0, "md"), margin("e", 3 ,"md"), backgroundColor("light"), exampleBoxStyle]}>
        This is an example of using <code>overflow("visible")</code> on an element with set width and height dimensions.
    </div>
    <div style={[overflow("scroll"), padding(3), backgroundColor("light"), exampleBoxStyle]}>
        This is an example of using <code>overflow("scroll")</code> on an element with set width and height dimensions.
    </div>
</div>`}</Code>
        </>
    );
}

const exampleBoxStyle = b.styleDef({ maxWidth: 260, maxHeight: 100 });

import * as b from "bobril";
import { IRouteWithNavDefinition } from "../../../../common/routing";
import { Anchor } from "../../../../common/Anchor";
import { Example } from "../../../../common/Example";
import {
    position,
    positionHelpers,
    top,
    end,
    bottom,
    start,
    backgroundColor,
    translateMiddle,
    justifyContent,
    Button,
    visuallyHidden,
    Icon,
    textColor,
    Badge,
    border,
    borderColor,
    rounded,
    Progress,
} from "../../../../../index";
import { Code } from "../../../../common/Code";
import { Lead } from "../../../../common/Lead";
import { display } from "../../../../../src/utilities/display";
import { margin, padding } from "../../../../../src/utilities/spacing";

export const positionRoute: IRouteWithNavDefinition = {
    url: "position-utility",
    name: "position-utility",
    label: "Position",
    handler: () => <PositionDoc />,
    subs: [
        {
            url: "values",
            name: "position-utility-values",
            label: "Position values",
            subs: [],
        },
        {
            url: "arrange-elements",
            name: "position-utility-arrange-elements",
            label: "Arrange elements",
            subs: [],
        },
        {
            url: "center-elements",
            name: "position-utility-center-elements",
            label: "Center elements",
            subs: [],
        },
        {
            url: "examples",
            name: "position-utility-examples",
            label: "Examples",
            subs: [],
        },
    ],
};

export function PositionDoc(): b.IBobrilNode {
    return (
        <>
            <Anchor name="position-utility">
                <h1>Position</h1>
            </Anchor>
            <Lead>Use these shorthand utilities for quickly configuring the position of an element.</Lead>
            <Anchor name="position-utility-values">
                <h2>Position values</h2>
            </Anchor>
            <p>Quick positioning classes are available, though they are not responsive.</p>
            <Code language="tsx">{positionHelpers.map((pos) => `<div style={position("${pos}"}>...</div>\n`)}</Code>
            <Anchor name="position-utility-arrange-elements">
                <h2>Arrange elements</h2>
            </Anchor>
            <p>
                Arrange elements easily with the edge positioning utilities. The format is <code>{`{property}({position})`}</code>.
            </p>
            <p>
                Where <em>property</em> is one of:
            </p>
            <ul>
                <li>
                    <code>top</code> - for the vertical <code>top</code> position
                </li>
                <li>
                    <code>start</code> - for the horizontal <code>left</code> position (in LTR)
                </li>
                <li>
                    <code>bottom</code> - for the vertical <code>bottom</code> position
                </li>
                <li>
                    <code>end</code> - for the horizontal <code>right</code> position (in LTR)
                </li>
            </ul>
            <p>
                Where <em>position</em> is one of:
            </p>
            <ul>
                <li>
                    <code>0</code> - for <code>0</code> edge position
                </li>
                <li>
                    <code>50</code> - for <code>50%</code> edge position
                </li>
                <li>
                    <code>100</code> - for <code>100%</code> edge position
                </li>
            </ul>
            <p>
                (You can add more position values by adding entries to the <code>$position-values</code> Sass map variable.)
            </p>
            <Example>
                <div style={[position("relative"), backgroundColor("secondary"), h200pxStyle]}>
                    <div style={[position("absolute"), top(0), start(0), exampleBoxStyle]}></div>
                    <div style={[position("absolute"), top(0), end(0), exampleBoxStyle]}></div>
                    <div style={[position("absolute"), top(50), start(50), exampleBoxStyle]}></div>
                    <div style={[position("absolute"), bottom(50), end(50), exampleBoxStyle]}></div>
                    <div style={[position("absolute"), bottom(0), start(0), exampleBoxStyle]}></div>
                    <div style={[position("absolute"), bottom(0), end(0), exampleBoxStyle]}></div>
                </div>
            </Example>
            <Code language="tsx">{`<div style={[position("relative"), backgroundColor("secondary"), h200pxStyle]}>
    <div style={[position("absolute"), top(0), start(0), exampleBoxStyle]}></div>
    <div style={[position("absolute"), top(0), end(0), exampleBoxStyle]}></div>
    <div style={[position("absolute"), top(50), start(50), exampleBoxStyle]}></div>
    <div style={[position("absolute"), bottom(50), end(50), exampleBoxStyle]}></div>
    <div style={[position("absolute"), bottom(0), start(0), exampleBoxStyle]}></div>
    <div style={[position("absolute"), bottom(0), end(0), exampleBoxStyle]}></div>
</div>`}</Code>
            <Anchor name="position-utility-center-elements">
                <h2>Center elements</h2>
            </Anchor>
            <p>
                This class applies the transformations <code>translateX(-50%)</code> and <code>translateY(-50%)</code> to the element which,
                in combination with the edge positioning utilities, allows you to absolute center an element.
            </p>
            <p>
                In addition, you can also center the elements with the transform utility class <code>translateMiddle</code>.
            </p>
            <Example>
                <div style={[position("relative"), backgroundColor("secondary"), h200pxStyle]}>
                    <div style={[position("absolute"), top(0), start(0), translateMiddle(), exampleBoxStyle]}></div>
                    <div style={[position("absolute"), top(0), start(50), translateMiddle(), exampleBoxStyle]}></div>
                    <div style={[position("absolute"), top(0), start(100), translateMiddle(), exampleBoxStyle]}></div>
                    <div style={[position("absolute"), top(50), start(0), translateMiddle(), exampleBoxStyle]}></div>
                    <div style={[position("absolute"), top(50), start(50), translateMiddle(), exampleBoxStyle]}></div>
                    <div style={[position("absolute"), top(50), start(100), translateMiddle(), exampleBoxStyle]}></div>
                    <div style={[position("absolute"), top(100), start(0), translateMiddle(), exampleBoxStyle]}></div>
                    <div style={[position("absolute"), top(100), start(50), translateMiddle(), exampleBoxStyle]}></div>
                    <div style={[position("absolute"), top(100), start(100), translateMiddle(), exampleBoxStyle]}></div>
                </div>
            </Example>
            <Code language="tsx">{`<div style={[position("relative"), backgroundColor("secondary"), h200pxStyle]}>
    <div style={[position("absolute"), top(0), start(0), translateMiddle(), exampleBoxStyle]}></div>
    <div style={[position("absolute"), top(0), start(50), translateMiddle(), exampleBoxStyle]}></div>
    <div style={[position("absolute"), top(0), start(100), translateMiddle(), exampleBoxStyle]}></div>
    <div style={[position("absolute"), top(50), start(0), translateMiddle(), exampleBoxStyle]}></div>
    <div style={[position("absolute"), top(50), start(50), translateMiddle(), exampleBoxStyle]}></div>
    <div style={[position("absolute"), top(50), start(100), translateMiddle(), exampleBoxStyle]}></div>
    <div style={[position("absolute"), top(100), start(0), translateMiddle(), exampleBoxStyle]}></div>
    <div style={[position("absolute"), top(100), start(50), translateMiddle(), exampleBoxStyle]}></div>
    <div style={[position("absolute"), top(100), start(100), translateMiddle(), exampleBoxStyle]}></div>
</div>`}</Code>
            <p>
                By adding <code>translateMiddle("x")</code> <code>translateMiddle("y")</code>, elements can be positioned only in horizontal
                or vertical direction.
            </p>
            <Example>
                <div style={[position("relative"), backgroundColor("secondary"), h200pxStyle]}>
                    <div style={[position("absolute"), top(0), start(0), exampleBoxStyle]}></div>
                    <div style={[position("absolute"), top(0), start(50), translateMiddle("x"), exampleBoxStyle]}></div>
                    <div style={[position("absolute"), top(0), end(0), exampleBoxStyle]}></div>
                    <div style={[position("absolute"), top(50), start(0), translateMiddle("y"), exampleBoxStyle]}></div>
                    <div style={[position("absolute"), top(50), start(50), translateMiddle(), exampleBoxStyle]}></div>
                    <div style={[position("absolute"), top(50), end(0), translateMiddle("y"), exampleBoxStyle]}></div>
                    <div style={[position("absolute"), bottom(0), start(0), exampleBoxStyle]}></div>
                    <div style={[position("absolute"), bottom(0), start(50), translateMiddle("x"), exampleBoxStyle]}></div>
                    <div style={[position("absolute"), bottom(0), end(0), exampleBoxStyle]}></div>
                </div>
            </Example>
            <Code language="tsx">{`<div style={[position("relative"), backgroundColor("secondary"), h200pxStyle]}>
    <div style={[position("absolute"), top(0), start(0), exampleBoxStyle]}></div>
    <div style={[position("absolute"), top(0), start(50), translateMiddle("x"), exampleBoxStyle]}></div>
    <div style={[position("absolute"), top(0), end(0), exampleBoxStyle]}></div>
    <div style={[position("absolute"), top(50), start(0), translateMiddle("y"), exampleBoxStyle]}></div>
    <div style={[position("absolute"), top(50), start(50), translateMiddle(), exampleBoxStyle]}></div>
    <div style={[position("absolute"), top(50), end(0), translateMiddle("y"), exampleBoxStyle]}></div>
    <div style={[position("absolute"), bottom(0), start(0), exampleBoxStyle]}></div>
    <div style={[position("absolute"), bottom(0), start(50), translateMiddle("x"), exampleBoxStyle]}></div>
    <div style={[position("absolute"), bottom(0), end(0), exampleBoxStyle]}></div>
</div>`}</Code>
            <Anchor name="position-utility-examples">
                <h2>Examples</h2>
            </Anchor>
            <p>Here are some real life examples:</p>
            <Example>
                <div style={[display("flex"), justifyContent("around")]}>
                    <Button variant="primary" style={position("relative")}>
                        Mails{" "}
                        <Badge pill style={[position("absolute"), top(0), start(100), translateMiddle(), backgroundColor("secondary")]}>
                            +99 <span style={visuallyHidden}>unread messages</span>
                        </Badge>
                    </Button>

                    <Button variant="dark" style={position("relative")}>
                        Marker{" "}
                        <Icon.CaretDownFill
                            width="1em"
                            height="1em"
                            style={[position("absolute"), top(100), start(50), translateMiddle(), margin("t", 1), textColor("dark")]}
                        />
                    </Button>

                    <Button variant="dark" style={position("relative")}>
                        Alerts{" "}
                        <Badge
                            style={[
                                position("absolute"),
                                top(0),
                                start(100),
                                translateMiddle(),
                                border(),
                                borderColor("light"),
                                rounded("circle"),
                                backgroundColor("danger"),
                                padding(2),
                            ]}
                        >
                            <span style={visuallyHidden}>unread messages</span>
                        </Badge>
                    </Button>
                </div>
            </Example>
            <Code language="tsx">{`<div style={[display("flex"), justifyContent("around")]}>
    <Button variant="primary" style={position("relative")}>
        Mails{" "}
        <Badge pill style={[position("absolute"), top(0), start(100), translateMiddle(), backgroundColor("secondary")]}>
            +99 <span style={visuallyHidden}>unread messages</span>
        </Badge>
    </Button>

    <Button variant="dark" style={position("relative")}>
        Marker{" "}
        <Icon.CaretDownFill
            width="1em"
            height="1em"
            style={[position("absolute"), top(100), start(50), translateMiddle(), margin("t", 1), textColor("dark")]}
        />
    </Button>

    <Button variant="dark" style={position("relative")}>
        Alerts{" "}
        <Badge
            style={[
                position("absolute"),
                top(0),
                start(100),
                translateMiddle(),
                border(),
                borderColor("light"),
                rounded("circle"),
                backgroundColor("danger"),
                padding(2),
            ]}
        >
            <span style={visuallyHidden}>unread messages</span>
        </Badge>
    </Button>
</div>`}</Code>
            <Example>
                <div style={[position("relative"), margin(4)]}>
                    <Progress style={{ height: 1 }}>
                        <Progress.Bar now={50} />
                    </Progress>
                    <Button
                        size="sm"
                        variant="primary"
                        style={[
                            position("absolute"),
                            top(0),
                            start(0),
                            translateMiddle(),
                            rounded("pill"),
                            { width: "2rem", height: "2rem" },
                        ]}
                    >
                        1
                    </Button>
                    <Button
                        size="sm"
                        variant="primary"
                        style={[
                            position("absolute"),
                            top(0),
                            start(50),
                            translateMiddle(),
                            rounded("pill"),
                            { width: "2rem", height: "2rem" },
                        ]}
                    >
                        2
                    </Button>
                    <Button
                        size="sm"
                        variant="secondary"
                        style={[
                            position("absolute"),
                            top(0),
                            start(100),
                            translateMiddle(),
                            rounded("pill"),
                            { width: "2rem", height: "2rem" },
                        ]}
                    >
                        3
                    </Button>
                </div>
            </Example>
            <Code language="tsx">{`<div style={[position("relative"), margin(4)]}>
    <Progress style={{ height: 1 }}>
        <Progress.Bar now={50} />
    </Progress>
    <Button size="sm" variant="primary" style={[position("absolute"), top(0), start(0), translateMiddle(), rounded("pill"), { width: "2rem", height: "2rem" }]}>
        1
    </Button>
    <Button size="sm" variant="primary" style={[position("absolute"), top(0), start(50), translateMiddle(), rounded("pill"), { width: "2rem", height: "2rem" }]}>
        2
    </Button>
    <Button size="sm" variant="secondary" style={[position("absolute"), top(0), start(100), translateMiddle(), rounded("pill"), { width: "2rem", height: "2rem" }]}>
        3
    </Button>
</div>`}</Code>
        </>
    );
}

const exampleBoxStyle = b.styleDef({ width: "2em", height: "2em", backgroundColor: "#212529", borderRadius: ".25rem" });
const h200pxStyle = b.styleDef({ height: 200 });

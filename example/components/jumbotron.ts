import * as b from "bobril";
import * as bs from "../../index";
import { styles } from "../bsexample/css";
import { pre, langJs } from "../prettify/pre";
import { section } from "../common/section";

export const jumbotron = b.createVirtualComponent({
    render(_ctx: b.IBobrilCtx, me: b.IBobrilNode) {
        me.children = section(
            {
                header: "Jumbotron",
                id: "jumbotron",
                lead: [],
            },
            [example()]
        );
    },
});

function example(): b.IBobrilChildren {
    return [
        bs.P({}, `A lightweight, flexible component that can optionally extend the entire viewport to showcase key content on your site.`),
        bs.E({ style: styles.bsExample }, [
            bs.Jumbotron({}, [
                bs.H1({}, "Hello, world!"),
                bs.P(
                    {},
                    "This is a simple hero unit, a simple jumbotron-style component for " +
                        "calling extra attention to featured content or information."
                ),
                bs.P(
                    {},
                    bs.Button({
                        label: "Learn more",
                        tag: bs.ButtonTag.A,
                        size: bs.Size.Lg,
                        option: bs.ButtonOption.Primary,
                    })
                ),
            ]),
        ]),
        bs.Figure(
            { style: styles.highlight },
            pre(
                {},
                bs.Code({ style: langJs }, [
                    `bs.Jumbotron({}, [`,
                    bs.E({ tag: "br" }),
                    `    bs.H1({}, 'Hello, world!'),`,
                    bs.E({ tag: "br" }),
                    `    bs.P({}, '...')`,
                    bs.E({ tag: "br" }),
                    `    bs.P({}, bs.Button({ label: 'Learn more', tag: bs.ButtonTag.A, size: bs.Size.Lg, option: bs.ButtonOption.Primary }))`,
                    bs.E({ tag: "br" }),
                    `])`,
                ])
            )
        ),
        bs.P({}, [
            `To make the jumbotron full width, and without rounded corners, place it outside all `,
            bs.Code({}, "bs.Container"),
            `s and instead add a `,
            bs.Code({}, "bs.Container"),
            ` within.`,
        ]),
        bs.Figure(
            { style: styles.highlight },
            pre(
                {},
                bs.Code({ style: langJs }, [
                    `bs.Jumbotron({}, [`,
                    bs.E({ tag: "br" }),
                    `    bs.Container({}, [`,
                    bs.E({ tag: "br" }),
                    `        ...`,
                    bs.E({ tag: "br" }),
                    `    ])`,
                    bs.E({ tag: "br" }),
                    `])`,
                ])
            )
        ),
    ];
}

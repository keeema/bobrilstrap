import * as b from "bobril";
import * as bs from "../../index";
import { styles } from "../bsexample/css";
import { pre, langJs } from "../prettify/pre";
import { section } from "../common/section";

export const badges = b.createVirtualComponent({
    render(_ctx: b.IBobrilCtx, me: b.IBobrilNode) {
        me.children = section(
            {
                header: "Badges",
                id: "badges",
                lead: [`Easily highlight new or unread items by `, bs.Code({}, "bs.Badge"), ` or to links, Bootstrap navs, and more.`],
            },
            [example()]
        );
    },
});

function example(): b.IBobrilChildren {
    return [
        bs.E({ style: styles.bsExample }, [
            bs.A({ href: "javascript: void(0)" }, ["Inbox", " ", bs.Badge({}, "42")]),
            bs.E({ tag: "br" }),
            bs.E({ tag: "br" }),
            bs.Button({ option: bs.ButtonOption.Primary }, ["Messages", " ", bs.Badge({}, "4")]),
        ]),
        bs.Figure(
            { style: styles.highlight },
            pre(
                {},
                bs.Code({ style: langJs }, [
                    `bs.A({ href: '...' }, ['Inbox', ' ', bs.Badge({}, '42')])`,
                    bs.E({ tag: "br" }),
                    bs.E({ tag: "br" }),
                    `bs.Button({ option: bs.ButtonOption.Primary }, ['Messages', ' ', bs.Badge({}, '4')])`,
                ])
            )
        ),
        bs.H4({ id: "self-collapsing" }, "Self collapsing"),
        bs.P({}, [
            `When there are no new or unread items (children of `,
            bs.Code({}, "bs.Badge({}, ...)"),
            ` are empty), 
            badges will simply collapse (via CSS's `,
            bs.Code({}, ":empty"),
            ` selector) provided no content exists within.`,
        ]),
        bs.H4({ id: "adapts-to-active-nav-states" }, "Adapts to active nav states"),
        bs.P({}, [`Built-in styles are included for placing badges in active states in pill navigations.`]),
        bs.E({ style: styles.bsExample }, [
            bs.Pills({}, [
                bs.Pill({ active: true }, bs.A({ href: "javascript: void(0)" }, ["Home", " ", bs.Badge({}, "42")])),
                bs.Pill({}, bs.A({ href: "javascript: void(0)" }, "Profile")),
                bs.Pill({}, bs.A({ href: "javascript: void(0)" }, ["Messages ", " ", bs.Badge({}, "3")])),
            ]),
        ]),
        bs.Figure(
            { style: styles.highlight },
            pre(
                {},
                bs.Code({ style: langJs }, [
                    `bs.Pills({}, [`,
                    bs.E({ tag: "br" }),
                    `    bs.Pill({ active: true }, bs.A({ href: '...' }, ['Home', ' ', bs.Badge({}, '42')])),`,
                    bs.E({ tag: "br" }),
                    `    bs.Pill({}, bs.A({ href: '...' }, 'Profile')),`,
                    bs.E({ tag: "br" }),
                    `    bs.Pill({}, bs.A({ href: '...' }, ['Messages ', ' ', bs.Badge({}, '3')]))`,
                    bs.E({ tag: "br" }),
                    `])`,
                ])
            )
        ),
    ];
}

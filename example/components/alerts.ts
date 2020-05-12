import * as b from "bobril";
import * as bs from "../../index";
import { styles } from "../bsexample/css";
import { pre, langJs } from "../prettify/pre";
import { section } from "../common/section";

export const alerts = b.createVirtualComponent({
    render(_ctx: b.IBobrilCtx, me: b.IBobrilNode) {
        me.children = section(
            {
                header: "Alerts",
                id: "alerts",
                lead: [
                    `Provide contextual feedback messages for typical user actions with the handful of 
                    available and flexible alert messages.`,
                ],
            },
            [example(), dismissableAlerts(), alertLinks()]
        );
    },
});

function example(): b.IBobrilChildren {
    return [
        b.anchor(bs.H2({ attrs: { id: "alerts-examples" } }, "Examples")),
        bs.P({}, [
            `Wrap any text and an optional dismiss button in `,
            bs.Code({}, "bs.Alert"),
            ` and one of the four contexts (e.g. `,
            bs.Code({}, "bs.AlertContext.Success"),
            ` for basic alert messages.`,
        ]),
        bs.E(
            {
                style: [styles.bsCallout, styles.bsCalloutInfo],
                attrs: { id: "callout-alerts-no-default" },
            },
            [
                bs.H4({}, `No default style`),
                bs.P({}, [
                    `Alerts don't have default classes, only base and modifier classes. A default gray alert doesn't make too much sense, 
                so you're required to specify a type via contextual class. Choose from success, info, warning, or danger.`,
                ]),
            ]
        ),
        bs.E({ style: styles.bsExample }, [
            bs.Alert({ context: bs.AlertContext.Success }, [
                bs.Strong({}, "Well done!"),
                " ",
                "You successfully read this important alert message.",
            ]),
            bs.Alert({ context: bs.AlertContext.Info }, [
                bs.Strong({}, "Heads up!!"),
                " ",
                "This alert needs your attention, but it's not super important.",
            ]),
            bs.Alert({ context: bs.AlertContext.Warning }, [
                bs.Strong({}, "Warning!"),
                " ",
                "Better check yourself, you're not looking too good.",
            ]),
            bs.Alert({ context: bs.AlertContext.Danger }, [
                bs.Strong({}, "Oh snap!"),
                " ",
                "Change a few things up and try submitting again.",
            ]),
        ]),
        bs.Figure(
            { style: styles.highlight },
            pre(
                {},
                bs.Code({ style: langJs }, [
                    `bs.Alert({ context: bs.AlertContext.Success }, ...)`,
                    bs.E({ tag: "br" }),
                    `bs.Alert({ context: bs.AlertContext.Info }, ...)`,
                    bs.E({ tag: "br" }),
                    `bs.Alert({ context: bs.AlertContext.Warning }, ...)`,
                    bs.E({ tag: "br" }),
                    `bs.Alert({ context: bs.AlertContext.Danger }, ...)`,
                ])
            )
        ),
    ];
}

function dismissableAlerts(): b.IBobrilChildren {
    return [
        b.anchor(bs.H2({ attrs: { id: "alerts-dismissible" } }, "Dismissible alerts")),
        bs.P({}, [
            `Build on any alert by setting optional `,
            bs.Code({}, "dismissButton"),
            ` property. You can overrider the default cross with own `,
            bs.Code({}, "children"),
            ` of `,
            bs.Code({}, "dismissButton"),
            `.`,
        ]),
        bs.E({ style: styles.bsExample }, [
            bs.Alert(
                {
                    context: bs.AlertContext.Warning,
                    dismissButton: { aria: { label: "Close" } },
                    onClosed: () => alert("Closed"),
                },
                [bs.Strong({}, "Warning!"), " ", "Better check yourself, you're not looking too good."]
            ),
        ]),
        bs.Figure(
            { style: styles.highlight },
            pre(
                {},
                bs.Code({ style: langJs }, [
                    `bs.Alert(`,
                    bs.E({ tag: "br" }),
                    `    {`,
                    bs.E({ tag: "br" }),
                    `        context: bs.AlertContext.Warning,`,
                    bs.E({ tag: "br" }),
                    `        dismissButton: { aria: { label: 'Close' } },`,
                    bs.E({ tag: "br" }),
                    `        onClosed: () => alert('Closed')`,
                    bs.E({ tag: "br" }),
                    `    },`,
                    bs.E({ tag: "br" }),
                    `    ...`,
                    bs.E({ tag: "br" }),
                    `)`,
                ])
            )
        ),
    ];
}

function alertLinks(): b.IBobrilChildren {
    return [
        b.anchor(bs.H2({ attrs: { id: "alerts-links" } }, "Links in alerts")),
        bs.P({}, [
            `Use the `,
            bs.Code({}, "bs.alertStyles.alertLink"),
            `style to quickly provide matching colored links within any alert.`,
        ]),
        bs.E({ style: styles.bsExample }, [
            bs.Alert({ context: bs.AlertContext.Success }, [
                bs.Strong({}, "Well done!"),
                " ",
                "You successfully read this ",
                bs.A({ style: bs.alertStyles.alertLink, href: "javascript:void(0)" }, "important alert message."),
            ]),
            bs.Alert({ context: bs.AlertContext.Info }, [
                bs.Strong({}, "Heads up!!"),
                " ",
                "This ",
                bs.A({ style: bs.alertStyles.alertLink, href: "javascript:void(0)" }, "alert needs your attention"),
                ", but it's not super important.",
            ]),
            bs.Alert({ context: bs.AlertContext.Warning }, [
                bs.Strong({}, "Warning!"),
                " ",
                "Better check yourself, you're ",
                bs.A({ style: bs.alertStyles.alertLink, href: "javascript:void(0)" }, "not looking too good."),
            ]),
            bs.Alert({ context: bs.AlertContext.Danger }, [
                bs.Strong({}, "Oh snap!"),
                " ",
                bs.A({ style: bs.alertStyles.alertLink, href: "javascript:void(0)" }, "Change a few things up"),
                " and try submitting again.",
            ]),
        ]),
        bs.Figure(
            { style: styles.highlight },
            pre(
                {},
                bs.Code({ style: langJs }, [
                    `bs.Alert({ context: bs.AlertContext.Warning }, [`,
                    bs.E({ tag: "br" }),
                    `    bs.A({ style: bs.alertStyles.alertLink, href: '...' }, '...')`,
                    bs.E({ tag: "br" }),
                    `]),`,
                ])
            )
        ),
    ];
}

import * as b from "bobril";
import * as bs from "../../index";
import { styles } from "../bsexample/css";
import { pre, langJs } from "../prettify/pre";
import { section } from "../common/section";

export const progress = b.createVirtualComponent({
    render(_ctx: b.IBobrilCtx, me: b.IBobrilNode) {
        me.children = section(
            {
                header: "Progress bars",
                id: "progress",
                lead: [`Provide up-to-date feedback on the progress of a workflow or action with simple yet flexible progress bars.`]
            },
            [info(), example(), withLabel(), contextualAlternatives(), striped(), animated(), stacked()]
        );
    }
});

function info() {
    return [
        bs.E(
            {
                style: [styles.bsCallout, styles.bsCalloutDanger],
                attrs: { id: "callout-progress-animation-css3" }
            },
            [
                bs.H4({}, [`Cross-browser compatibility`]),
                bs.P({}, [
                    `Progress bars use CSS3 transitions and animations to achieve some of their effects. These features are not supported 
                in Internet Explorer 9 and below or older versions of Firefox. Opera 12 does not support animations.`
                ])
            ]
        )
    ];
}

function example(): b.IBobrilChildren {
    return [
        b.anchor(bs.H2({ attrs: { id: "progress-basic" } }, "Basic example")),
        bs.P({}, [`Default progress bar. You can compose it from separate components.`]),
        bs.E({ style: styles.bsExample }, [
            bs.Progress({}, [
                bs.ProgressBar({
                    value: 60,
                    srOnlyText: "60% Complete",
                    aria: { valuenow: 60, valuemax: 0, valuemin: 100 }
                })
            ])
        ]),
        bs.Figure(
            { style: styles.highlight },
            pre(
                {},
                bs.Code({ style: langJs }, [
                    `bs.Progress({}, [`,
                    bs.E({ tag: "br" }),
                    `    bs.ProgressBar({`,
                    bs.E({ tag: "br" }),
                    `        value: 60, srOnlyText: '60% Complete', aria: { volumenow: 60, volumemax: 0, volumemin: 100 }`,
                    bs.E({ tag: "br" }),
                    `    })`,
                    bs.E({ tag: "br" }),
                    `])`
                ])
            )
        ),
        bs.P({}, [
            `Or you can use the prepared input data property `,
            bs.Code({}, "bars"),
            ` filled with  `,
            bs.Code({}, "bs.IProgressBarData[]"),
            `. The result is same.`
        ]),
        bs.E({ style: styles.bsExample }, [
            bs.Progress({
                bars: [
                    {
                        value: 60,
                        srOnlyText: "60% Complete",
                        aria: { valuenow: 60, valuemax: 0, valuemin: 100 }
                    }
                ]
            })
        ]),
        bs.Figure(
            { style: styles.highlight },
            pre(
                {},
                bs.Code({ style: langJs }, [
                    `bs.Progress({`,
                    bs.E({ tag: "br" }),
                    `    bars: [`,
                    bs.E({ tag: "br" }),
                    `        { value: 60, srOnlyText: '60% Complete', aria: { volumenow: 60, volumemax: 0, volumemin: 100 } }`,
                    bs.E({ tag: "br" }),
                    `    ]`,
                    bs.E({ tag: "br" }),
                    `})`
                ])
            )
        )
    ];
}

function withLabel(): b.IBobrilChildren {
    return [
        b.anchor(bs.H2({ attrs: { id: "progress-label" } }, "With label")),
        bs.P({}, [`Use children instead of `, bs.Code({}, "srOnlyText"), `to show a visible percentage.`]),
        bs.E({ style: styles.bsExample }, [
            bs.Progress({}, [bs.ProgressBar({ value: 60, aria: { valuenow: 60, valuemax: 0, valuemin: 100 } }, "60%")])
        ]),
        bs.Figure(
            { style: styles.highlight },
            pre(
                {},
                bs.Code({ style: langJs }, [
                    `bs.Progress({}, [`,
                    bs.E({ tag: "br" }),
                    `    bs.ProgressBar({ value: 60, aria: { volumenow: 60, volumemax: 0, volumemin: 100 } }, '60%')`,
                    bs.E({ tag: "br" }),
                    `])`
                ])
            )
        ),
        bs.P({}, [
            `To ensure that the label text remains legible even for low percentages, consider setting a `,
            bs.Code({}, "minwidth"),
            ` input data property.`
        ]),
        bs.E({ style: styles.bsExample }, [
            bs.Progress({}, [
                bs.ProgressBar(
                    {
                        value: 0,
                        aria: { valuenow: 60, valuemax: 0, valuemin: 100 },
                        minWidth: "2em"
                    },
                    "0%"
                )
            ]),
            bs.Progress({}, [
                bs.ProgressBar(
                    {
                        value: 2,
                        aria: { valuenow: 60, valuemax: 0, valuemin: 100 },
                        minWidth: "2em"
                    },
                    "2%"
                )
            ])
        ]),
        bs.Figure(
            { style: styles.highlight },
            pre(
                {},
                bs.Code({ style: langJs }, [
                    `bs.Progress({}, [`,
                    bs.E({ tag: "br" }),
                    `     bs.ProgressBar(`,
                    bs.E({ tag: "br" }),
                    `         { value: 0, aria: { volumenow: 60, volumemax: 0, volumemin: 100 }, minWidth: '2em' }, '0%')`,
                    bs.E({ tag: "br" }),
                    `])`,
                    bs.E({ tag: "br" }),
                    `bs.Progress({}, [`,
                    bs.E({ tag: "br" }),
                    `     bs.ProgressBar(`,
                    bs.E({ tag: "br" }),
                    `         { value: 2, aria: { volumenow: 60, volumemax: 0, volumemin: 100 }, minWidth: '2em' }, '2%')`,
                    bs.E({ tag: "br" }),
                    `])`
                ])
            )
        )
    ];
}

function contextualAlternatives(): b.IBobrilChildren {
    return [
        b.anchor(bs.H2({ attrs: { id: "progress-alternatives" } }, "Contextual alternatives")),
        bs.P({}, [`Progress bars use some of the same button and alert classes for consistent styles.`]),
        bs.E({ style: styles.bsExample }, [
            bs.Progress({}, [
                bs.ProgressBar({
                    value: 40,
                    srOnlyText: "40% Complete (success)",
                    context: bs.ProgressBarContext.Success,
                    aria: { valuenow: 40, valuemax: 0, valuemin: 100 }
                })
            ]),
            bs.Progress({}, [
                bs.ProgressBar({
                    value: 20,
                    srOnlyText: "20% Complete",
                    context: bs.ProgressBarContext.Info,
                    aria: { valuenow: 20, valuemax: 0, valuemin: 100 }
                })
            ]),
            bs.Progress({}, [
                bs.ProgressBar({
                    value: 60,
                    srOnlyText: "60% Complete (warning)",
                    context: bs.ProgressBarContext.Warning,
                    aria: { valuenow: 60, valuemax: 0, valuemin: 100 }
                })
            ]),
            bs.Progress({}, [
                bs.ProgressBar({
                    value: 80,
                    srOnlyText: "80% Complete (danger)",
                    context: bs.ProgressBarContext.Danger,
                    aria: { valuenow: 80, valuemax: 0, valuemin: 100 }
                })
            ])
        ]),
        bs.Figure(
            { style: styles.highlight },
            pre(
                {},
                bs.Code({ style: langJs }, [
                    `bs.Progress({}, [`,
                    bs.E({ tag: "br" }),
                    `    bs.ProgressBar({`,
                    bs.E({ tag: "br" }),
                    `        value: 40,`,
                    bs.E({ tag: "br" }),
                    `        srOnlyText: '40% Complete (success)',`,
                    bs.E({ tag: "br" }),
                    `        context: bs.ProgressBarContext.Success,`,
                    bs.E({ tag: "br" }),
                    `        aria: { volumenow: 40, volumemax: 0, volumemin: 100 }`,
                    bs.E({ tag: "br" }),
                    `    })`,
                    bs.E({ tag: "br" }),
                    `]),`,
                    bs.E({ tag: "br" }),
                    `bs.Progress({}, [`,
                    bs.E({ tag: "br" }),
                    `    bs.ProgressBar({`,
                    bs.E({ tag: "br" }),
                    `        value: 20,`,
                    bs.E({ tag: "br" }),
                    `        srOnlyText: '20% Complete',`,
                    bs.E({ tag: "br" }),
                    `        context: bs.ProgressBarContext.Info,`,
                    bs.E({ tag: "br" }),
                    `        aria: { volumenow: 20, volumemax: 0, volumemin: 100 }`,
                    bs.E({ tag: "br" }),
                    `    })`,
                    bs.E({ tag: "br" }),
                    `]),`,
                    bs.E({ tag: "br" }),
                    `bs.Progress({}, [`,
                    bs.E({ tag: "br" }),
                    `    bs.ProgressBar({`,
                    bs.E({ tag: "br" }),
                    `        value: 60,`,
                    bs.E({ tag: "br" }),
                    `        srOnlyText: '60% Complete (warning)',`,
                    bs.E({ tag: "br" }),
                    `        context: bs.ProgressBarContext.Warning,`,
                    bs.E({ tag: "br" }),
                    `        aria: { volumenow: 60, volumemax: 0, volumemin: 100 }`,
                    bs.E({ tag: "br" }),
                    `    })`,
                    bs.E({ tag: "br" }),
                    `]),`,
                    bs.E({ tag: "br" }),
                    `bs.Progress({}, [`,
                    bs.E({ tag: "br" }),
                    `    bs.ProgressBar({`,
                    bs.E({ tag: "br" }),
                    `        value: 80,`,
                    bs.E({ tag: "br" }),
                    `        srOnlyText: '80% Complete (danger)',`,
                    bs.E({ tag: "br" }),
                    `        context: bs.ProgressBarContext.Danger,`,
                    bs.E({ tag: "br" }),
                    `        aria: { volumenow: 80, volumemax: 0, volumemin: 100 }`,
                    bs.E({ tag: "br" }),
                    `    })`,
                    bs.E({ tag: "br" }),
                    `])`,
                    bs.E({ tag: "br" })
                ])
            )
        )
    ];
}

function striped(): b.IBobrilChildren {
    return [
        b.anchor(bs.H2({ attrs: { id: "progress-striped" } }, "Striped")),
        bs.P({}, [`Uses a gradient to create a striped effect. Not available in IE9 and below.`]),
        bs.E({ style: styles.bsExample }, [
            bs.Progress({}, [
                bs.ProgressBar({
                    value: 40,
                    striped: true,
                    srOnlyText: "40% Complete (success)",
                    context: bs.ProgressBarContext.Success,
                    aria: { valuenow: 40, valuemax: 0, valuemin: 100 }
                })
            ]),
            bs.Progress({}, [
                bs.ProgressBar({
                    value: 20,
                    striped: true,
                    srOnlyText: "20% Complete",
                    context: bs.ProgressBarContext.Info,
                    aria: { valuenow: 20, valuemax: 0, valuemin: 100 }
                })
            ]),
            bs.Progress({}, [
                bs.ProgressBar({
                    value: 60,
                    striped: true,
                    srOnlyText: "60% Complete (warning)",
                    context: bs.ProgressBarContext.Warning,
                    aria: { valuenow: 60, valuemax: 0, valuemin: 100 }
                })
            ]),
            bs.Progress({}, [
                bs.ProgressBar({
                    value: 80,
                    striped: true,
                    srOnlyText: "80% Complete (danger)",
                    context: bs.ProgressBarContext.Danger,
                    aria: { valuenow: 80, valuemax: 0, valuemin: 100 }
                })
            ])
        ]),
        bs.Figure(
            { style: styles.highlight },
            pre(
                {},
                bs.Code({ style: langJs }, [
                    `bs.Progress({}, [`,
                    bs.E({ tag: "br" }),
                    `    bs.ProgressBar({`,
                    bs.E({ tag: "br" }),
                    `        value: 40,`,
                    bs.E({ tag: "br" }),
                    `        striped: true,`,
                    bs.E({ tag: "br" }),
                    `        srOnlyText: '40% Complete (success)',`,
                    bs.E({ tag: "br" }),
                    `        context: bs.ProgressBarContext.Success,`,
                    bs.E({ tag: "br" }),
                    `        aria: { volumenow: 40, volumemax: 0, volumemin: 100 }`,
                    bs.E({ tag: "br" }),
                    `    })`,
                    bs.E({ tag: "br" }),
                    `]),`,
                    bs.E({ tag: "br" }),
                    `bs.Progress({}, [`,
                    bs.E({ tag: "br" }),
                    `    bs.ProgressBar({`,
                    bs.E({ tag: "br" }),
                    `        value: 20,`,
                    bs.E({ tag: "br" }),
                    `        striped: true,`,
                    bs.E({ tag: "br" }),
                    `        srOnlyText: '20% Complete',`,
                    bs.E({ tag: "br" }),
                    `        context: bs.ProgressBarContext.Info,`,
                    bs.E({ tag: "br" }),
                    `        aria: { volumenow: 20, volumemax: 0, volumemin: 100 }`,
                    bs.E({ tag: "br" }),
                    `    })`,
                    bs.E({ tag: "br" }),
                    `]),`,
                    bs.E({ tag: "br" }),
                    `bs.Progress({}, [`,
                    bs.E({ tag: "br" }),
                    `    bs.ProgressBar({`,
                    bs.E({ tag: "br" }),
                    `        value: 60,`,
                    bs.E({ tag: "br" }),
                    `        srOnlyText: '60% Complete (warning)',`,
                    bs.E({ tag: "br" }),
                    `        context: bs.ProgressBarContext.Warning,`,
                    bs.E({ tag: "br" }),
                    `        aria: { volumenow: 60, volumemax: 0, volumemin: 100 }`,
                    bs.E({ tag: "br" }),
                    `    })`,
                    bs.E({ tag: "br" }),
                    `]),`,
                    bs.E({ tag: "br" }),
                    `bs.Progress({}, [`,
                    bs.E({ tag: "br" }),
                    `    bs.ProgressBar({`,
                    bs.E({ tag: "br" }),
                    `        value: 80,`,
                    bs.E({ tag: "br" }),
                    `        striped: true,`,
                    bs.E({ tag: "br" }),
                    `        srOnlyText: '80% Complete (danger)',`,
                    bs.E({ tag: "br" }),
                    `        context: bs.ProgressBarContext.Danger,`,
                    bs.E({ tag: "br" }),
                    `        aria: { volumenow: 80, volumemax: 0, volumemin: 100 }`,
                    bs.E({ tag: "br" }),
                    `    })`,
                    bs.E({ tag: "br" }),
                    `])`,
                    bs.E({ tag: "br" })
                ])
            )
        )
    ];
}

let animation = false;
function animated(): b.IBobrilChildren {
    return [
        b.anchor(bs.H2({ attrs: { id: "progress-animated" } }, "Animated")),
        bs.P({}, [
            `Set `,
            bs.Code({}, "active"),
            ` and `,
            bs.Code({}, "striped"),
            ` input data properties to to animate the stripes right to left. Not available in IE9 and below.`
        ]),
        bs.E({ style: styles.bsExample }, [
            bs.Progress({}, [
                bs.ProgressBar({
                    value: 45,
                    striped: true,
                    active: animation,
                    srOnlyText: "45% Complete",
                    aria: { valuenow: 45, valuemax: 0, valuemin: 100 }
                })
            ]),
            bs.Button({
                label: "Toggle animation",
                style: styles.bsDocsActivateAnimatedProgressbar,
                onClick: () => {
                    animation = !animation;
                    b.invalidate();
                }
            })
        ]),
        bs.Figure(
            { style: styles.highlight },
            pre(
                {},
                bs.Code({ style: langJs }, [
                    `bs.Progress({}, [`,
                    bs.E({ tag: "br" }),
                    `    bs.ProgressBar({`,
                    bs.E({ tag: "br" }),
                    `        value: 45,`,
                    bs.E({ tag: "br" }),
                    `        striped: true,`,
                    bs.E({ tag: "br" }),
                    `        active: true,`,
                    bs.E({ tag: "br" }),
                    `        srOnlyText: '45% Complete',`,
                    bs.E({ tag: "br" }),
                    `        aria: { valuenow: 45, valuemax: 0, valuemin: 100 }`,
                    bs.E({ tag: "br" }),
                    `    })`,
                    bs.E({ tag: "br" }),
                    `])`
                ])
            )
        )
    ];
}

function stacked(): b.IBobrilChildren {
    return [
        b.anchor(bs.H2({ attrs: { id: "progress-stacked" } }, "Stacked")),
        bs.P({}, [`Place multiple bars into the same `, bs.Code({}, "bs.Progress"), ` to stack them.`]),
        bs.E({ style: styles.bsExample }, [
            bs.Progress({
                bars: [
                    {
                        value: 35,
                        srOnlyText: "35% Complete (success)",
                        context: bs.ProgressBarContext.Success
                    },
                    {
                        value: 20,
                        srOnlyText: "20% Complete (warning)",
                        context: bs.ProgressBarContext.Warning
                    },
                    {
                        value: 10,
                        srOnlyText: "10% Complete (danger)",
                        context: bs.ProgressBarContext.Danger
                    }
                ]
            })
        ]),
        bs.Figure(
            { style: styles.highlight },
            pre(
                {},
                bs.Code({ style: langJs }, [
                    `bs.Progress({`,
                    bs.E({ tag: "br" }),
                    `    bars: [`,
                    bs.E({ tag: "br" }),
                    `        { value: 35, srOnlyText: '35% Complete (success)', context: bs.ProgressBarContext.Success },`,
                    bs.E({ tag: "br" }),
                    `        { value: 20, srOnlyText: '20% Complete (warning)', context: bs.ProgressBarContext.Warning },`,
                    bs.E({ tag: "br" }),
                    `        { value: 10, srOnlyText: '10% Complete (danger)', context: bs.ProgressBarContext.Danger }`,
                    bs.E({ tag: "br" }),
                    `    ]`,
                    bs.E({ tag: "br" }),
                    `})`
                ])
            )
        )
    ];
}

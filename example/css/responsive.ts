import * as b from "bobril";
import * as bs from "../../index";
import { styles } from "../bsexample/css";
import { section } from "../common/section";

export const responsive = b.createVirtualComponent({
    render(_ctx: b.IBobrilCtx, me: b.IBobrilNode) {
        me.children = section(
            {
                header: "Responsive utilities",
                id: "responsive-utilities",
                lead: `For faster mobile-friendly development, use these utility styles for showing and hiding content by device via 
                media query. Also included are utility styles for toggling content when printed.`,
                description: `Try to use these on a limited basis and avoid creating entirely different versions of the same site. 
                Instead, use them to complement each device's presentation.`,
            },
            [availableStyles(), printStyles(), testCases()]
        );
    },
});

function availableStyles(): b.IBobrilChildren {
    return [
        b.anchor(bs.H2({ attrs: { id: "responsive-utilities-styles" } }, "Available styles")),
        bs.P({}, [`Use a single or combination of the available styles for toggling content across viewport breakpoints.`]),
        bs.ResponsiveTable({
            table: {
                bordered: true,
                striped: true,
                style: styles.responsiveUtilities,
                head: {
                    row: {
                        headers: [
                            {},
                            {
                                children: [" Extra small devices ", bs.Small({}, "Phones (<768px)")],
                            },
                            {
                                children: [" Small devices ", bs.Small({}, "Tablets (≥768px)")],
                            },
                            {
                                children: [" Medium devices ", bs.Small({}, "Desktops (≥992px)")],
                            },
                            {
                                children: [" Large devices ", bs.Small({}, "Desktops (≥1200px)")],
                            },
                        ],
                    },
                },
                body: {
                    rows: [
                        {
                            headers: [{ children: bs.Code({}, "bs.visibleStyles(bs.Device.Xs)(...)") }],
                            columns: [
                                { children: "Visibile", style: styles.isVisible },
                                { children: "Hidden", style: styles.isHidden },
                                { children: "Hidden", style: styles.isHidden },
                                { children: "Hidden", style: styles.isHidden },
                            ],
                        },
                        {
                            headers: [{ children: bs.Code({}, "bs.visibleStyles(bs.Device.Sm)(...)") }],
                            columns: [
                                { children: "Hidden", style: styles.isHidden },
                                { children: "Visibile", style: styles.isVisible },
                                { children: "Hidden", style: styles.isHidden },
                                { children: "Hidden", style: styles.isHidden },
                            ],
                        },
                        {
                            headers: [{ children: bs.Code({}, "bs.visibleStyles(bs.Device.Md)(...)") }],
                            columns: [
                                { children: "Hidden", style: styles.isHidden },
                                { children: "Hidden", style: styles.isHidden },
                                { children: "Visibile", style: styles.isVisible },
                                { children: "Hidden", style: styles.isHidden },
                            ],
                        },
                        {
                            headers: [{ children: bs.Code({}, "bs.visibleStyles(bs.Device.Lg)(...)") }],
                            columns: [
                                { children: "Hidden", style: styles.isHidden },
                                { children: "Hidden", style: styles.isHidden },
                                { children: "Hidden", style: styles.isHidden },
                                { children: "Visibile", style: styles.isVisible },
                            ],
                        },
                        {
                            headers: [{ children: bs.Code({}, "bs.hiddenStyles(bs.Device.Xs)") }],
                            columns: [
                                { children: "Hidden", style: styles.isHidden },
                                { children: "Visibile", style: styles.isVisible },
                                { children: "Visibile", style: styles.isVisible },
                                { children: "Visibile", style: styles.isVisible },
                            ],
                        },
                        {
                            headers: [{ children: bs.Code({}, "bs.hiddenStyles(bs.Device.Sm)") }],
                            columns: [
                                { children: "Visibile", style: styles.isVisible },
                                { children: "Hidden", style: styles.isHidden },
                                { children: "Visibile", style: styles.isVisible },
                                { children: "Visibile", style: styles.isVisible },
                            ],
                        },
                        {
                            headers: [{ children: bs.Code({}, "bs.hiddenStyles(bs.Device.Md)") }],
                            columns: [
                                { children: "Visibile", style: styles.isVisible },
                                { children: "Visibile", style: styles.isVisible },
                                { children: "Hidden", style: styles.isHidden },
                                { children: "Visibile", style: styles.isVisible },
                            ],
                        },
                        {
                            headers: [{ children: bs.Code({}, "bs.hiddenStyles(bs.Device.Lg)") }],
                            columns: [
                                { children: "Visibile", style: styles.isVisible },
                                { children: "Visibile", style: styles.isVisible },
                                { children: "Visibile", style: styles.isVisible },
                                { children: "Hidden", style: styles.isHidden },
                            ],
                        },
                    ],
                },
            },
        }),
        bs.ResponsiveTable({
            table: {
                bordered: true,
                striped: true,
                head: {
                    row: {
                        headers: ["Group of classes", { children: ["CSS ", bs.Code({}, "display")] }],
                    },
                },
                body: {
                    rows: [
                        {
                            headers: [
                                {
                                    children: bs.Code({}, "bs.visibleStyles(...)(bs.Display.Block)"),
                                },
                            ],
                            columns: [{ children: bs.Code({}, "display: block;") }],
                        },
                        {
                            headers: [
                                {
                                    children: bs.Code({}, "bs.visibleStyles(...)(bs.Display.Inline)"),
                                },
                            ],
                            columns: [{ children: bs.Code({}, "display: block;") }],
                        },
                        {
                            headers: [
                                {
                                    children: bs.Code({}, "bs.visibleStyles(...)(bs.Display.InlineBlock)"),
                                },
                            ],
                            columns: [{ children: bs.Code({}, "display: inline-block;") }],
                        },
                    ],
                },
            },
        }),
        bs.P({}, [
            `So, for extra small (xs) screens for example, the available `,
            bs.Code({}, "bs.visibleStyles(...)(...)"),
            ` styles are: `,
            bs.Code({}, "bs.visibleStyles(bs.Device.Xs)(bs.Display.Block)"),
            `, `,
            bs.Code({}, "bs.visibleStyles(bs.Device.Xs)(bs.Display.Inline)"),
            ` and `,
            bs.Code({}, "bs.visibleStyles(bs.Device.Xs)(bs.Display.InlineBlock)"),
            `.`,
        ]),
    ];
}

function printStyles(): b.IBobrilChildren {
    return [
        b.anchor(bs.H2({ attrs: { id: "responsive-utilities-print" } }, "Print styles")),
        bs.P({}, [`Similar to the regular responsive styles, use these for toggling content for print.`]),
        bs.ResponsiveTable({
            table: {
                bordered: true,
                striped: true,
                style: styles.responsiveUtilities,
                head: {
                    row: {
                        headers: ["Styles", "Browser", "Print"],
                    },
                },
                body: {
                    rows: [
                        {
                            headers: [
                                {
                                    children: [
                                        bs.Code({}, "bs.visibleStyles(bs.Device.Print)(bs.Display.Block)"),
                                        bs.E({ tag: "br" }),
                                        bs.Code({}, "bs.visibleStyles(bs.Device.Print)(bs.Display.Inline)"),
                                        bs.E({ tag: "br" }),
                                        bs.Code({}, "bs.visibleStyles(bs.Device.Print)(bs.Display.InlineBlock)"),
                                    ],
                                },
                            ],
                            columns: [
                                { children: "Hidden", style: styles.isHidden },
                                { children: "Visibile", style: styles.isVisible },
                            ],
                        },
                        {
                            headers: [{ children: bs.Code({}, "bs.hiddenStyles(bs.Device.Print)") }],
                            columns: [
                                { children: "Visibile", style: styles.isVisible },
                                { children: "Hidden", style: styles.isHidden },
                            ],
                        },
                    ],
                },
            },
        }),
    ];
}

function testCases(): b.IBobrilChildren {
    return [
        b.anchor(bs.H2({ attrs: { id: "responsive-utilities-tests" } }, "Test cases")),
        bs.P({}, [`Resize your browser or load on different devices to test the responsive utility styles.`]),
        bs.H3({ attrs: { id: "visible-on" } }, "Visible on..."),
        bs.P({}, [`Green checkmarks indicate the element `, bs.Strong({}, "is visible"), ` in your current viewport.`]),
        bs.Row({ style: [styles.responsiveUtilitiesTest, styles.visibleOn] }, [
            bs.Col(
                {
                    cols: [
                        { size: bs.Size.Xs, span: 6 },
                        { size: bs.Size.Sm, span: 3 },
                    ],
                },
                [
                    bs.Span({ style: bs.hiddenStyles(bs.Device.Xs) }, "Extra small"),
                    bs.Span({ style: bs.visibleStyles(bs.Device.Xs)(bs.Display.Block) }, "✔ Visible on x-small"),
                ]
            ),
            bs.Col(
                {
                    cols: [
                        { size: bs.Size.Xs, span: 6 },
                        { size: bs.Size.Sm, span: 3 },
                    ],
                },
                [
                    bs.Span({ style: bs.hiddenStyles(bs.Device.Sm) }, "Small"),
                    bs.Span({ style: bs.visibleStyles(bs.Device.Sm)(bs.Display.Block) }, "✔ Visible on small"),
                ]
            ),
            bs.E({
                style: [bs.helpers.clearfix, bs.visibleStyles(bs.Device.Xs)(bs.Display.Block)],
            }),
            bs.Col(
                {
                    cols: [
                        { size: bs.Size.Xs, span: 6 },
                        { size: bs.Size.Sm, span: 3 },
                    ],
                },
                [
                    bs.Span({ style: bs.hiddenStyles(bs.Device.Md) }, "Medium"),
                    bs.Span({ style: bs.visibleStyles(bs.Device.Md)(bs.Display.Block) }, "✔ Visible on medium"),
                ]
            ),
            bs.Col(
                {
                    cols: [
                        { size: bs.Size.Xs, span: 6 },
                        { size: bs.Size.Sm, span: 3 },
                    ],
                },
                [
                    bs.Span({ style: bs.hiddenStyles(bs.Device.Lg) }, "Large"),
                    bs.Span({ style: bs.visibleStyles(bs.Device.Lg)(bs.Display.Block) }, "✔ Visible on large"),
                ]
            ),
        ]),
        bs.Row({ style: [styles.responsiveUtilitiesTest, styles.visibleOn] }, [
            bs.Col({ size: bs.Size.Xs, span: 6 }, [
                bs.Span(
                    {
                        style: [bs.hiddenStyles(bs.Device.Xs), bs.hiddenStyles(bs.Device.Sm)],
                    },
                    "Extra small and small"
                ),
                bs.Span(
                    {
                        style: [bs.visibleStyles(bs.Device.Xs)(bs.Display.Block), bs.visibleStyles(bs.Device.Sm)(bs.Display.Block)],
                    },
                    "✔ Visible on x-small and small"
                ),
            ]),
            bs.Col({ size: bs.Size.Xs, span: 6 }, [
                bs.Span(
                    {
                        style: [bs.hiddenStyles(bs.Device.Md), bs.hiddenStyles(bs.Device.Lg)],
                    },
                    "Medium and large"
                ),
                bs.Span(
                    {
                        style: [bs.visibleStyles(bs.Device.Md)(bs.Display.Block), bs.visibleStyles(bs.Device.Lg)(bs.Display.Block)],
                    },
                    "✔ Visible on medium and large"
                ),
            ]),
            bs.E({
                style: [bs.helpers.clearfix, bs.visibleStyles(bs.Device.Xs)(bs.Display.Block)],
            }),
            bs.Col({ size: bs.Size.Xs, span: 6 }, [
                bs.Span(
                    {
                        style: [bs.hiddenStyles(bs.Device.Xs), bs.hiddenStyles(bs.Device.Md)],
                    },
                    "Extra small and medium"
                ),
                bs.Span(
                    {
                        style: [bs.visibleStyles(bs.Device.Xs)(bs.Display.Block), bs.visibleStyles(bs.Device.Md)(bs.Display.Block)],
                    },
                    "✔ Visible on x-small and medium"
                ),
            ]),
            bs.Col({ size: bs.Size.Xs, span: 6 }, [
                bs.Span(
                    {
                        style: [bs.hiddenStyles(bs.Device.Sm), bs.hiddenStyles(bs.Device.Lg)],
                    },
                    "Small and large"
                ),
                bs.Span(
                    {
                        style: [bs.visibleStyles(bs.Device.Sm)(bs.Display.Block), bs.visibleStyles(bs.Device.Lg)(bs.Display.Block)],
                    },
                    "✔ Visible on small and large"
                ),
            ]),
            bs.E({
                style: [bs.helpers.clearfix, bs.visibleStyles(bs.Device.Xs)(bs.Display.Block)],
            }),
            bs.Col({ size: bs.Size.Xs, span: 6 }, [
                bs.Span(
                    {
                        style: [bs.hiddenStyles(bs.Device.Xs), bs.hiddenStyles(bs.Device.Lg)],
                    },
                    "Extra small and large"
                ),
                bs.Span(
                    {
                        style: [bs.visibleStyles(bs.Device.Xs)(bs.Display.Block), bs.visibleStyles(bs.Device.Lg)(bs.Display.Block)],
                    },
                    "✔ Visible on x-small and large"
                ),
            ]),
            bs.Col({ size: bs.Size.Xs, span: 6 }, [
                bs.Span(
                    {
                        style: [bs.hiddenStyles(bs.Device.Sm), bs.hiddenStyles(bs.Device.Md)],
                    },
                    "Small and medium"
                ),
                bs.Span(
                    {
                        style: [bs.visibleStyles(bs.Device.Sm)(bs.Display.Block), bs.visibleStyles(bs.Device.Md)(bs.Display.Block)],
                    },
                    "✔ Visible on small and medium"
                ),
            ]),
        ]),
        bs.H3({ attrs: { id: "hidden-on" } }, "Hidden on..."),
        bs.P({}, [`Here, green checkmarks also indicate the element `, bs.Strong({}, "is hidden "), ` in your current viewport.`]),
        bs.Row({ style: [styles.responsiveUtilitiesTest, styles.visibleOn] }, [
            bs.Col(
                {
                    cols: [
                        { size: bs.Size.Xs, span: 6 },
                        { size: bs.Size.Sm, span: 3 },
                    ],
                },
                [
                    bs.Span({ style: bs.hiddenStyles(bs.Device.Xs) }, "Extra small"),
                    bs.Span({ style: bs.visibleStyles(bs.Device.Xs)(bs.Display.Block) }, "✔ Hidden on x-small"),
                ]
            ),
            bs.Col(
                {
                    cols: [
                        { size: bs.Size.Xs, span: 6 },
                        { size: bs.Size.Sm, span: 3 },
                    ],
                },
                [
                    bs.Span({ style: bs.hiddenStyles(bs.Device.Sm) }, "Small"),
                    bs.Span({ style: bs.visibleStyles(bs.Device.Sm)(bs.Display.Block) }, "✔ Hidden on small"),
                ]
            ),
            bs.E({
                style: [bs.helpers.clearfix, bs.visibleStyles(bs.Device.Xs)(bs.Display.Block)],
            }),
            bs.Col(
                {
                    cols: [
                        { size: bs.Size.Xs, span: 6 },
                        { size: bs.Size.Sm, span: 3 },
                    ],
                },
                [
                    bs.Span({ style: bs.hiddenStyles(bs.Device.Md) }, "Medium"),
                    bs.Span({ style: bs.visibleStyles(bs.Device.Md)(bs.Display.Block) }, "✔ Hidden on medium"),
                ]
            ),
            bs.Col(
                {
                    cols: [
                        { size: bs.Size.Xs, span: 6 },
                        { size: bs.Size.Sm, span: 3 },
                    ],
                },
                [
                    bs.Span({ style: bs.hiddenStyles(bs.Device.Lg) }, "Large"),
                    bs.Span({ style: bs.visibleStyles(bs.Device.Lg)(bs.Display.Block) }, "✔ Hidden on large"),
                ]
            ),
        ]),
        bs.Row({ style: [styles.responsiveUtilitiesTest, styles.visibleOn] }, [
            bs.Col({ size: bs.Size.Xs, span: 6 }, [
                bs.Span(
                    {
                        style: [bs.hiddenStyles(bs.Device.Xs), bs.hiddenStyles(bs.Device.Sm)],
                    },
                    "Extra small and small"
                ),
                bs.Span(
                    {
                        style: [bs.visibleStyles(bs.Device.Xs)(bs.Display.Block), bs.visibleStyles(bs.Device.Sm)(bs.Display.Block)],
                    },
                    "✔ Hidden on x-small and small"
                ),
            ]),
            bs.Col({ size: bs.Size.Xs, span: 6 }, [
                bs.Span(
                    {
                        style: [bs.hiddenStyles(bs.Device.Md), bs.hiddenStyles(bs.Device.Lg)],
                    },
                    "Medium and large"
                ),
                bs.Span(
                    {
                        style: [bs.visibleStyles(bs.Device.Md)(bs.Display.Block), bs.visibleStyles(bs.Device.Lg)(bs.Display.Block)],
                    },
                    "✔ Hidden on medium and large"
                ),
            ]),
            bs.E({
                style: [bs.helpers.clearfix, bs.visibleStyles(bs.Device.Xs)(bs.Display.Block)],
            }),
            bs.Col({ size: bs.Size.Xs, span: 6 }, [
                bs.Span(
                    {
                        style: [bs.hiddenStyles(bs.Device.Xs), bs.hiddenStyles(bs.Device.Md)],
                    },
                    "Extra small and medium"
                ),
                bs.Span(
                    {
                        style: [bs.visibleStyles(bs.Device.Xs)(bs.Display.Block), bs.visibleStyles(bs.Device.Md)(bs.Display.Block)],
                    },
                    "✔ Hidden on x-small and medium"
                ),
            ]),
            bs.Col({ size: bs.Size.Xs, span: 6 }, [
                bs.Span(
                    {
                        style: [bs.hiddenStyles(bs.Device.Sm), bs.hiddenStyles(bs.Device.Lg)],
                    },
                    "Small and large"
                ),
                bs.Span(
                    {
                        style: [bs.visibleStyles(bs.Device.Sm)(bs.Display.Block), bs.visibleStyles(bs.Device.Lg)(bs.Display.Block)],
                    },
                    "✔ Hidden on small and large"
                ),
            ]),
            bs.E({
                style: [bs.helpers.clearfix, bs.visibleStyles(bs.Device.Xs)(bs.Display.Block)],
            }),
            bs.Col({ size: bs.Size.Xs, span: 6 }, [
                bs.Span(
                    {
                        style: [bs.hiddenStyles(bs.Device.Xs), bs.hiddenStyles(bs.Device.Lg)],
                    },
                    "Extra small and large"
                ),
                bs.Span(
                    {
                        style: [bs.visibleStyles(bs.Device.Xs)(bs.Display.Block), bs.visibleStyles(bs.Device.Lg)(bs.Display.Block)],
                    },
                    "✔ Hidden on x-small and large"
                ),
            ]),
            bs.Col({ size: bs.Size.Xs, span: 6 }, [
                bs.Span(
                    {
                        style: [bs.hiddenStyles(bs.Device.Sm), bs.hiddenStyles(bs.Device.Md)],
                    },
                    "Small and medium"
                ),
                bs.Span(
                    {
                        style: [bs.visibleStyles(bs.Device.Sm)(bs.Display.Block), bs.visibleStyles(bs.Device.Md)(bs.Display.Block)],
                    },
                    "✔ Hidden on small and medium"
                ),
            ]),
        ]),
    ];
}

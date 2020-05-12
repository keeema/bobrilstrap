import * as b from "bobril";
import * as bs from "../../index";
import { styles } from "../bsexample/css";
import { pre, langJs } from "../prettify/pre";
import { section } from "../common/section";

export const tooltips = b.createVirtualComponent({
    render(_ctx: b.IBobrilCtx, me: b.IBobrilNode) {
        me.children = section(
            {
                header: "Tooltip",
                id: "tooltip",
                lead: [],
            },
            [example()]
        );
    },
});

function example(): b.IBobrilChildren {
    return [
        bs.P({}, [
            `Wrap nodes into `,
            bs.Code({}, "bs.Tooltip"),
            ` to get additional information in tooltip. 
            You can define the `,
            bs.Code({}, "title"),
            `, `,
            bs.Code({}, "placement"),
            `, `,
            bs.Code({}, "trigger"),
            ` or turn `,
            bs.Code({}, "animation"),
            ` on/off by input data properties. If the title is 
            not static, it should be defined as a function.`,
        ]),
        bs.E({ style: [styles.bsExample, styles.tooltipDemo] }, [
            b.styledDiv(
                [
                    bs.Tooltip({ title: "Tooltip on left", placement: bs.TooltipPlacement.Left }, bs.Button({ label: "Tooltip on left" })),
                    " ",
                    bs.Tooltip({ title: "Tooltip on top", placement: bs.TooltipPlacement.Top }, bs.Button({ label: "Tooltip on top" })),
                    " ",
                    bs.Tooltip(
                        {
                            title: "Tooltip on bottom",
                            placement: bs.TooltipPlacement.Bottom,
                        },
                        bs.Button({ label: "Tooltip on bottom" })
                    ),
                    " ",
                    bs.Tooltip(
                        {
                            title: "Tooltip on right",
                            placement: bs.TooltipPlacement.Right,
                            trigger: [bs.TooltipTrigger.Hover],
                        },
                        bs.Button({ label: "Tooltip on right" })
                    ),
                ],
                styles.bsExampleTooltips
            ),
        ]),
        bs.Figure(
            { style: styles.highlight },
            pre(
                {},
                bs.Code({ style: langJs }, [
                    `bs.Tooltip(`,
                    bs.E({ tag: "br" }),
                    `    { title: 'Tooltip on left', placement: bs.TooltipPlacement.Left },`,
                    bs.E({ tag: "br" }),
                    `    bs.Button({ label: 'Tooltip on left' })`,
                    bs.E({ tag: "br" }),
                    `), ' ',`,
                    bs.E({ tag: "br" }),
                    `bs.Tooltip(`,
                    bs.E({ tag: "br" }),
                    `    { title: 'Tooltip on top', placement: bs.TooltipPlacement.Top },`,
                    bs.E({ tag: "br" }),
                    `    bs.Button({ label: 'Tooltip on top' })`,
                    bs.E({ tag: "br" }),
                    `), ' ',`,
                    bs.E({ tag: "br" }),
                    `bs.Tooltip(`,
                    bs.E({ tag: "br" }),
                    `    { title: 'Tooltip on bottom', placement: bs.TooltipPlacement.Bottom },`,
                    bs.E({ tag: "br" }),
                    `    bs.Button({ label: 'Tooltip on bottom' })`,
                    bs.E({ tag: "br" }),
                    `), ' ',`,
                    bs.E({ tag: "br" }),
                    `bs.Tooltip(`,
                    bs.E({ tag: "br" }),
                    `    { title: 'Tooltip on right', placement: bs.TooltipPlacement.Right, trigger: [bs.TooltipTrigger.Hover] },`,
                    bs.E({ tag: "br" }),
                    `    bs.Button({ label: 'Tooltip on right' })`,
                    bs.E({ tag: "br" }),
                    `)`,
                ])
            )
        ),
    ];
}

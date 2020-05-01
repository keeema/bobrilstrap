import * as b from "bobril";
import * as bs from "../../index";
import { styles } from "../bsexample/css";
import { pre, langJs } from "../prettify/pre";
import { section } from "../common/section";

export const popovers = b.createVirtualComponent({
    render(_ctx: b.IBobrilCtx, me: b.IBobrilNode) {
        me.children = section(
            {
                header: "Popover",
                id: "popover",
                lead: []
            },
            [example()]
        );
    }
});

function example(): b.IBobrilChildren {
    return [
        bs.P({}, [
            `Wrap nodes into `,
            bs.Code({}, "bs.Popover"),
            ` to get additional information in popover. 
            You can define the `,
            bs.Code({}, "title"),
            `, `,
            bs.Code({}, "title"),
            `, `,
            bs.Code({}, "placement"),
            `, `,
            bs.Code({}, "trigger"),
            ` or turn `,
            bs.Code({}, "animation"),
            ` on/off by input data properties. If the title or content are not static, they should be defined as a function.`
        ]),
        bs.E({ style: [styles.bsExample, styles.tooltipDemo] }, [
            b.styledDiv(
                [
                    bs.Popover(
                        {
                            title: "Popover title",
                            content: "And here's some amazing content. It's very engaging. Right?",
                            placement: bs.PopoverPlacement.Right
                        },
                        bs.Button({ label: "Click to toggle popover" })
                    )
                ],
                styles.bsExampleTooltips
            )
        ]),
        bs.Figure(
            { style: styles.highlight },
            pre(
                {},
                bs.Code({ style: langJs }, [
                    `bs.Popover(`,
                    bs.E({ tag: "br" }),
                    `    {`,
                    bs.E({ tag: "br" }),
                    `        title: 'Popover title',`,
                    bs.E({ tag: "br" }),
                    `        content: 'And here\\'s some amazing content. It\\'s very engaging. Right?',`,
                    bs.E({ tag: "br" }),
                    `        placement: bs.PopoverPlacement.Left`,
                    bs.E({ tag: "br" }),
                    `   },`,
                    bs.E({ tag: "br" }),
                    `    bs.Button({ label: 'Click to toggle popover' })`,
                    bs.E({ tag: "br" }),
                    `)`
                ])
            )
        )
    ];
}

import * as b from "bobril";
import * as bs from "../../index";
import { styles } from "../bsexample/css";
import { pre, langJs } from "../prettify/pre";
import { section } from "../common/section";

export const labels = b.createVirtualComponent({
    render(_ctx: b.IBobrilCtx, me: b.IBobrilNode) {
        me.children = section(
            {
                header: "Labels",
                id: "labels",
                lead: []
            },
            [example(), availableVariations()]
        );
    }
});

function example(): b.IBobrilChildren {
    return [
        bs.H2({ attrs: { id: "labels-example" } }, "Example"),
        bs.E({ style: styles.bsExample }, [
            bs.H1({}, ["Example heading ", bs.Span({ labelContext: bs.SpanLabelContext.Default }, "New")]),
            bs.H2({}, ["Example heading ", bs.Span({ labelContext: bs.SpanLabelContext.Default }, "New")]),
            bs.H3({}, ["Example heading ", bs.Span({ labelContext: bs.SpanLabelContext.Default }, "New")]),
            bs.H4({}, ["Example heading ", bs.Span({ labelContext: bs.SpanLabelContext.Default }, "New")]),
            bs.H5({}, ["Example heading ", bs.Span({ labelContext: bs.SpanLabelContext.Default }, "New")]),
            bs.H6({}, ["Example heading ", bs.Span({ labelContext: bs.SpanLabelContext.Default }, "New")])
        ]),
        bs.Figure(
            { style: styles.highlight },
            pre(
                {},
                bs.Code({ style: langJs }, [
                    `bs.H3({}, ['Example heading ', bs.Span({ labelContext: bs.SpanLabelContext.Default }, 'New')])`
                ])
            )
        )
    ];
}

function availableVariations(): b.IBobrilChildren {
    return [
        bs.H2({ attrs: { id: "available-variations" } }, "Available variations"),
        bs.P({}, [
            `Set the `,
            bs.Code({}, "labelContext"),
            ` input data property of `,
            bs.Code({}, "bs.Span"),
            ` to change the appearance of a label.`
        ]),
        bs.E({ style: styles.bsExample }, [
            bs.Span({ labelContext: bs.SpanLabelContext.Default }, "Default"),
            " ",
            bs.Span({ labelContext: bs.SpanLabelContext.Primary }, "Primary"),
            " ",
            bs.Span({ labelContext: bs.SpanLabelContext.Success }, "Success"),
            " ",
            bs.Span({ labelContext: bs.SpanLabelContext.Info }, "Info"),
            " ",
            bs.Span({ labelContext: bs.SpanLabelContext.Warning }, "Warning"),
            " ",
            bs.Span({ labelContext: bs.SpanLabelContext.Danger }, "Danger")
        ]),
        bs.Figure(
            { style: styles.highlight },
            pre(
                {},
                bs.Code({ style: langJs }, [
                    `bs.Span({ labelContext: bs.SpanLabelContext.Default }, 'Default'), ' ',`,
                    bs.E({ tag: "br" }),
                    `bs.Span({ labelContext: bs.SpanLabelContext.Primary }, 'Primary'), ' ',`,
                    bs.E({ tag: "br" }),
                    `bs.Span({ labelContext: bs.SpanLabelContext.Success }, 'Success'), ' ',`,
                    bs.E({ tag: "br" }),
                    `bs.Span({ labelContext: bs.SpanLabelContext.Info }, 'Info'), ' ',`,
                    bs.E({ tag: "br" }),
                    `bs.Span({ labelContext: bs.SpanLabelContext.Warning }, 'Warning'), ' ',`,
                    bs.E({ tag: "br" }),
                    `bs.Span({ labelContext: bs.SpanLabelContext.Danger }, 'Danger')`
                ])
            )
        )
    ];
}

import * as b from "bobril";
import * as bs from "../../index";
import { styles } from "../bsexample/css";
import { pre, langJs } from "../prettify/pre";
import { section } from "../common/section";

export const PageHeader = b.createVirtualComponent({
    render(_ctx: b.IBobrilCtx, me: b.IBobrilNode) {
        me.children = section(
            {
                header: "Page header",
                id: "page-header",
                lead: []
            },
            [example()]
        );
    }
});

function example(): b.IBobrilChildren {
    return [
        bs.P({}, `A lightweight, flexible component that can optionally extend the entire viewport to showcase key content on your site.`),
        bs.E({ style: styles.bsExample }, [bs.PageHeader({}, bs.H1({}, ["Example page header", " ", bs.Small({}, "Subtext for header")]))]),
        bs.Figure(
            { style: styles.highlight },
            pre(
                {},
                bs.Code({ style: langJs }, [
                    `bs.PageHeader({}, bs.H1({}, ['Example page header', ' ', bs.Small({}, 'Subtext for header')]))`
                ])
            )
        )
    ];
}

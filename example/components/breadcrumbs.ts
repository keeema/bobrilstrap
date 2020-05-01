import * as b from "bobril";
import * as bs from "../../index";
import { styles } from "../bsexample/css";
import { pre, langJs } from "../prettify/pre";
import { section } from "../common/section";

export const breadcrumbs = b.createVirtualComponent({
    render(_ctx: b.IBobrilCtx, me: b.IBobrilNode) {
        me.children = section(
            {
                header: "Breadcrumbs",
                id: "breadcrumbs",
                lead: [`Indicate the current page's location within a navigational hierarchy.`]
            },
            [info()]
        );
    }
});

function info(): b.IBobrilChildren {
    return [
        bs.P({}, [`Separators are automatically added in CSS through `, bs.Code({}, ":before"), ` and `, bs.Code({}, "content"), `.`]),
        bs.E({ style: styles.bsExample }, [
            bs.Breadcrumb({}, bs.BreadcrumbItem({ active: true }, "Home")),
            bs.Breadcrumb({}, [
                bs.BreadcrumbItem({}, bs.A({ href: "javascript:void(0)" }, "Home")),
                bs.BreadcrumbItem({ active: true }, "Library")
            ]),
            bs.Breadcrumb({}, [
                bs.BreadcrumbItem({}, bs.A({ href: "javascript:void(0)" }, "Home")),
                bs.BreadcrumbItem({}, bs.A({ href: "javascript:void(0)" }, "Library")),
                bs.BreadcrumbItem({ active: true }, "Data")
            ])
        ]),
        bs.Figure(
            { style: styles.highlight },
            pre(
                {},
                bs.Code({ style: langJs }, [
                    `bs.Breadcrumb({}, [`,
                    bs.E({ tag: "br" }),
                    `    bs.BreadcrumbItem({}, bs.A({ href: '...' }, 'Home')),`,
                    bs.E({ tag: "br" }),
                    `    bs.BreadcrumbItem({}, bs.A({ href: '...' }, 'Library')),`,
                    bs.E({ tag: "br" }),
                    `    bs.BreadcrumbItem({ active: true }, 'Data')`,
                    bs.E({ tag: "br" }),
                    `])`
                ])
            )
        )
    ];
}

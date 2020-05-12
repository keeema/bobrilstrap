import * as b from "bobril";
import * as bs from "../../index";
import { styles } from "../bsexample/css";
import { pre, langJs } from "../prettify/pre";
import { section } from "../common/section";

export const panels = b.createVirtualComponent({
    render(_ctx: b.IBobrilCtx, me: b.IBobrilNode) {
        me.children = section(
            {
                header: "Panels",
                id: "panels",
                lead: [
                    `While not always necessary, sometimes you need to put your DOM in a box. For those situations, 
                try the panel component.`,
                ],
            },
            [basic(), heading(), footer(), context(), tables(), listGroups()]
        );
    },
});

function basic(): b.IBobrilChildren {
    return [
        b.anchor(bs.H2({ attrs: { id: "panels-basic" } }, "Basic example")),
        bs.E({ style: styles.bsExample }, [bs.Panel({}, [bs.PanelBody({}, "Basic panel example")])]),
        bs.Figure(
            { style: styles.highlight },
            pre(
                {},
                bs.Code({ style: langJs }, [
                    `bs.Panel({}, [`,
                    bs.E({ tag: "br" }),
                    `    bs.PanelBody({}, 'Basic panel example')`,
                    bs.E({ tag: "br" }),
                    `])`,
                ])
            )
        ),
    ];
}

function heading(): b.IBobrilChildren {
    return [
        b.anchor(bs.H2({ attrs: { id: "panels-heading" } }, "Panel with heading")),
        bs.E({ style: styles.bsExample }, [
            bs.Panel({}, [bs.PanelHeading({}, "Panel heading without title"), bs.PanelBody({}, "Panel content")]),
            bs.Panel({}, [bs.PanelHeading({}, bs.PanelTitle3({}, "Panel title")), bs.PanelBody({}, "Panel content")]),
        ]),
        bs.Figure(
            { style: styles.highlight },
            pre(
                {},
                bs.Code({ style: langJs }, [
                    `bs.Panel({}, [`,
                    bs.E({ tag: "br" }),
                    `    bs.PanelHeading({}, 'Panel heading without title'),`,
                    bs.E({ tag: "br" }),
                    `    bs.PanelBody({}, 'Panel content')`,
                    bs.E({ tag: "br" }),
                    `])`,
                    bs.E({ tag: "br" }),
                    bs.E({ tag: "br" }),
                    `bs.Panel({}, [`,
                    bs.E({ tag: "br" }),
                    `    bs.PanelHeading({}, bs.PanelTitle3({}, 'Panel title')),`,
                    bs.E({ tag: "br" }),
                    `    bs.PanelBody({}, 'Panel content')`,
                    bs.E({ tag: "br" }),
                    `])`,
                ])
            )
        ),
    ];
}

function footer(): b.IBobrilChildren {
    return [
        b.anchor(bs.H2({ attrs: { id: "panels-footer" } }, "Panel with footer")),
        bs.P({}, [
            `Wrap buttons or secondary text in `,
            bs.Code({}, "bs.PanelFooter"),
            `. Note that panel footers `,
            bs.Strong({}, "do not"),
            ` inherit colors and borders when using contextual 
            variations as they are not meant to be in the foreground.`,
        ]),
        bs.E({ style: styles.bsExample }, [bs.Panel({}, [bs.PanelBody({}, "Panel content"), bs.PanelFooter({}, "Panel footer")])]),
        bs.Figure(
            { style: styles.highlight },
            pre(
                {},
                bs.Code({ style: langJs }, [
                    `bs.Panel({}, [`,
                    bs.E({ tag: "br" }),
                    `    bs.PanelBody({}, 'Panel content'),`,
                    bs.E({ tag: "br" }),
                    `    bs.PanelFooter({}, 'Panel footer')`,
                    bs.E({ tag: "br" }),
                    `])`,
                ])
            )
        ),
    ];
}

function context(): b.IBobrilChildren {
    return [
        b.anchor(bs.H2({ attrs: { id: "panels-alternatives" } }, "Contextual alternatives")),
        bs.P({}, [
            `Like other components, easily make a panel more meaningful to a particular context by 
            setting any of the contextual types.`,
        ]),
        bs.E({ style: styles.bsExample }, [
            bs.Panel({ context: bs.PanelContext.Primary }, [
                bs.PanelHeading({}, bs.PanelTitle3({}, "Panel title")),
                bs.PanelBody({}, "Panel content"),
            ]),
            bs.Panel({ context: bs.PanelContext.Success }, [
                bs.PanelHeading({}, bs.PanelTitle3({}, "Panel title")),
                bs.PanelBody({}, "Panel content"),
            ]),
            bs.Panel({ context: bs.PanelContext.Info }, [
                bs.PanelHeading({}, bs.PanelTitle3({}, "Panel title")),
                bs.PanelBody({}, "Panel content"),
            ]),
            bs.Panel({ context: bs.PanelContext.Warning }, [
                bs.PanelHeading({}, bs.PanelTitle3({}, "Panel title")),
                bs.PanelBody({}, "Panel content"),
            ]),
            bs.Panel({ context: bs.PanelContext.Danger }, [
                bs.PanelHeading({}, bs.PanelTitle3({}, "Panel title")),
                bs.PanelBody({}, "Panel content"),
            ]),
        ]),
        bs.Figure(
            { style: styles.highlight },
            pre(
                {},
                bs.Code({ style: langJs }, [
                    `bs.Panel({ context: bs.PanelContext.Primary }, [ ... ])`,
                    bs.E({ tag: "br" }),
                    `bs.Panel({ context: bs.PanelContext.Success }, [ ... ])`,
                    bs.E({ tag: "br" }),
                    `bs.Panel({ context: bs.PanelContext.Info }, [ ... ])`,
                    bs.E({ tag: "br" }),
                    `bs.Panel({ context: bs.PanelContext.Warning }, [ ... ])`,
                    bs.E({ tag: "br" }),
                    `bs.Panel({ context: bs.PanelContext.Danger }, [ ... ])`,
                ])
            )
        ),
    ];
}

function tables(): b.IBobrilChildren {
    return [
        b.anchor(bs.H2({ attrs: { id: "panels-tables" } }, "With tables")),
        bs.E({ style: styles.bsExample }, [
            bs.Panel({}, [
                bs.PanelHeading({}, "Panel heading"),
                bs.PanelBody(
                    {},
                    `Some default panel content here. Nulla vitae elit libero, a pharetra augue. Aenean lacinia bibendum 
                nulla sed consectetur. Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum. Nullam id dolor 
                id nibh ultricies vehicula ut id elit.`
                ),
                bs.Table({
                    head: {
                        row: { headers: ["#", "First Name", "Last Name", "Username"] },
                    },
                    body: {
                        rows: [
                            { columns: ["1", "Mark", "Otto", "@mdo"] },
                            { columns: ["2", "Jacob", "Thornton", "@fat"] },
                            { columns: ["3", "Larry", "the Bird", "@twitter"] },
                        ],
                    },
                }),
            ]),
        ]),
        bs.Figure(
            { style: styles.highlight },
            pre(
                {},
                bs.Code({ style: langJs }, [
                    `bs.Panel({}, [`,
                    bs.E({ tag: "br" }),
                    `    bs.PanelHeading({}, 'Panel heading'),`,
                    bs.E({ tag: "br" }),
                    `    bs.PanelBody({}, '...'),`,
                    bs.E({ tag: "br" }),
                    `    bs.Table({}, ...)`,
                    bs.E({ tag: "br" }),
                    `])`,
                ])
            )
        ),
    ];
}

function listGroups(): b.IBobrilChildren {
    return [
        b.anchor(bs.H2({ attrs: { id: "panels-list-group" } }, "With list groups")),
        bs.E({ style: styles.bsExample }, [
            bs.Panel({}, [
                bs.PanelHeading({}, "Panel heading"),
                bs.PanelBody(
                    {},
                    `Some default panel content here. Nulla vitae elit libero, a pharetra augue. Aenean lacinia bibendum 
                nulla sed consectetur. Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum. Nullam id dolor 
                id nibh ultricies vehicula ut id elit.`
                ),
                bs.ListGroup({}, [
                    bs.ListGroupItem({}, "Cras justo odio"),
                    bs.ListGroupItem({}, "Dapibus ac facilisis in"),
                    bs.ListGroupItem({}, "Morbi leo risus"),
                    bs.ListGroupItem({}, "Porta ac consectetur ac"),
                    bs.ListGroupItem({}, "Vestibulum at eros"),
                ]),
            ]),
        ]),
        bs.Figure(
            { style: styles.highlight },
            pre(
                {},
                bs.Code({ style: langJs }, [
                    `bs.Panel({}, [`,
                    bs.E({ tag: "br" }),
                    `    bs.PanelHeading({}, 'Panel heading'),`,
                    bs.E({ tag: "br" }),
                    `    bs.PanelBody({}, '...'),`,
                    bs.E({ tag: "br" }),
                    `    bs.ListGroup({}, ...)`,
                    bs.E({ tag: "br" }),
                    `])`,
                ])
            )
        ),
    ];
}

import * as b from "bobril";
import * as bs from "../../index";
import { styles } from "../bsexample/css";
import { pre, langJs } from "../prettify/pre";
import { section } from "../common/section";

export const listGroup = b.createVirtualComponent({
    render(_ctx: b.IBobrilCtx, me: b.IBobrilNode) {
        me.children = section(
            {
                header: "List group",
                id: "list-group",
                lead: [
                    `List groups are a flexible and powerful component for displaying not only simple lists of elements, 
                but complex ones with custom content.`
                ]
            },
            [basicExample(), badges(), links(), buttons(), disabled(), context(), customContent()]
        );
    }
});

function basicExample(): b.IBobrilChildren {
    return [
        b.anchor(bs.H2({ attrs: { id: "list-group-basic" } }, "Basic example")),
        bs.E({ style: styles.bsExample }, [
            bs.ListGroup({}, [
                bs.ListGroupItem({}, "Cras justo odio"),
                bs.ListGroupItem({}, "Dapibus ac facilisis in"),
                bs.ListGroupItem({}, "Morbi leo risus"),
                bs.ListGroupItem({}, "Porta ac consectetur ac"),
                bs.ListGroupItem({}, "Vestibulum at eros")
            ])
        ]),
        bs.Figure(
            { style: styles.highlight },
            pre(
                {},
                bs.Code({ style: langJs }, [
                    `bs.ListGroup({}, [`,
                    bs.E({ tag: "br" }),
                    `    bs.ListGroupItem({}, 'Cras justo odio'),`,
                    bs.E({ tag: "br" }),
                    `    bs.ListGroupItem({}, 'Dapibus ac facilisis in'),`,
                    bs.E({ tag: "br" }),
                    `    bs.ListGroupItem({}, 'Morbi leo risus'),`,
                    bs.E({ tag: "br" }),
                    `    bs.ListGroupItem({}, 'Porta ac consectetur ac'),`,
                    bs.E({ tag: "br" }),
                    `    bs.ListGroupItem({}, 'Vestibulum at eros')`,
                    bs.E({ tag: "br" }),
                    `])`
                ])
            )
        )
    ];
}

function badges(): b.IBobrilChildren {
    return [
        b.anchor(bs.H2({ attrs: { id: "list-group-badges" } }, "Badges")),
        bs.P({}, [`Add the badges component to any list group item and it will automatically be positioned on the right.`]),
        bs.E({ style: styles.bsExample }, [
            bs.ListGroup({}, [
                bs.ListGroupItem({}, [bs.Badge({}, "42"), "Cras justo odio"]),
                bs.ListGroupItem({}, [bs.Badge({}, "2"), "Dapibus ac facilisis in"]),
                bs.ListGroupItem({}, [bs.Badge({}, "1"), "Morbi leo risus"])
            ])
        ]),
        bs.Figure(
            { style: styles.highlight },
            pre(
                {},
                bs.Code({ style: langJs }, [
                    `bs.ListGroup({}, [`,
                    bs.E({ tag: "br" }),
                    `    bs.ListGroupItem({}, [bs.Badge({}, '42'), 'Cras justo odio']),`,
                    bs.E({ tag: "br" }),
                    `    bs.ListGroupItem({}, [bs.Badge({}, '2'), 'Dapibus ac facilisis in']),`,
                    bs.E({ tag: "br" }),
                    `    bs.ListGroupItem({}, [bs.Badge({}, '1'), 'Morbi leo risus'])`,
                    bs.E({ tag: "br" }),
                    `])`
                ])
            )
        )
    ];
}

function links(): b.IBobrilChildren {
    return [
        b.anchor(bs.H2({ attrs: { id: "list-group-linked" } }, "Linked items")),
        bs.P({}, [
            `Linkify list group items by using `,
            bs.Code({}, "bs.ListGroupItemLink"),
            ` instead of `,
            bs.Code({}, "bs.ListGroupItem"),
            ` (that also means a parent `,
            bs.Code({}, "bs.ListGroup({ linkified: true }, ...)"),
            `).`
        ]),
        bs.E({ style: styles.bsExample }, [
            bs.ListGroup({ linkified: true }, [
                bs.ListGroupItemLink({ href: "javascript:void(0)", active: true }, "Cras justo odio"),
                bs.ListGroupItemLink({ href: "javascript:void(0)" }, "Dapibus ac facilisis in"),
                bs.ListGroupItemLink({ href: "javascript:void(0)" }, "Morbi leo risus"),
                bs.ListGroupItemLink({ href: "javascript:void(0)" }, "Porta ac consectetur ac"),
                bs.ListGroupItemLink({ href: "javascript:void(0)" }, "Vestibulum at eros")
            ])
        ]),
        bs.Figure(
            { style: styles.highlight },
            pre(
                {},
                bs.Code({ style: langJs }, [
                    `bs.ListGroup({ linkified: true }, [`,
                    bs.E({ tag: "br" }),
                    `    bs.ListGroupItemLink({ href: '...', active: true }, 'Cras justo odio'),`,
                    bs.E({ tag: "br" }),
                    `    bs.ListGroupItemLink({ href: '...' }, 'Dapibus ac facilisis in'),`,
                    bs.E({ tag: "br" }),
                    `    bs.ListGroupItemLink({ href: '...' }, 'Morbi leo risus'),`,
                    bs.E({ tag: "br" }),
                    `    bs.ListGroupItemLink({ href: '...' }, 'Porta ac consectetur ac'),`,
                    bs.E({ tag: "br" }),
                    `    bs.ListGroupItemLink({ href: '...' }, 'Vestibulum at eros')`,
                    bs.E({ tag: "br" }),
                    `])`
                ])
            )
        )
    ];
}

function buttons(): b.IBobrilChildren {
    return [
        b.anchor(bs.H2({ attrs: { id: "list-group-basic" } }, "Button items")),
        bs.P({}, `List group items may be buttons instead of list items.`),
        bs.E({ style: styles.bsExample }, [
            bs.ListGroup({}, [
                bs.Button({
                    variant: bs.ButtonVariant.ListGroup,
                    label: "Cras justo odio"
                }),
                bs.Button({
                    variant: bs.ButtonVariant.ListGroup,
                    label: "Dapibus ac facilisis in"
                }),
                bs.Button({
                    variant: bs.ButtonVariant.ListGroup,
                    label: "Morbi leo risus"
                }),
                bs.Button({
                    variant: bs.ButtonVariant.ListGroup,
                    label: "Porta ac consectetur ac"
                }),
                bs.Button({
                    variant: bs.ButtonVariant.ListGroup,
                    label: "Vestibulum at eros"
                })
            ])
        ]),
        bs.Figure(
            { style: styles.highlight },
            pre(
                {},
                bs.Code({ style: langJs }, [
                    `bs.ListGroup({}, [`,
                    bs.E({ tag: "br" }),
                    `    bs.Button({ variant: bs.ButtonVariant.ListGroup, label: 'Cras justo odio' }),`,
                    bs.E({ tag: "br" }),
                    `    bs.Button({ variant: bs.ButtonVariant.ListGroup, label: 'Dapibus ac facilisis in' }),`,
                    bs.E({ tag: "br" }),
                    `    bs.Button({ variant: bs.ButtonVariant.ListGroup, label: 'Morbi leo risus' }),`,
                    bs.E({ tag: "br" }),
                    `    bs.Button({ variant: bs.ButtonVariant.ListGroup, label: 'Porta ac consectetur ac' })`,
                    bs.E({ tag: "br" }),
                    `    bs.Button({ variant: bs.ButtonVariant.ListGroup, label: 'Vestibulum at eros' })`,
                    bs.E({ tag: "br" }),
                    `])`
                ])
            )
        )
    ];
}

function disabled(): b.IBobrilChildren {
    return [
        b.anchor(bs.H2({ attrs: { id: "list-group-disabled" } }, "Disabled items")),
        bs.P({}, [`Set `, bs.Code({}, "disabled"), ` input data property to gray it out to appear disabled.`]),
        bs.E({ style: styles.bsExample }, [
            bs.ListGroup({ linkified: true }, [
                bs.ListGroupItemLink({ href: "javascript:void(0)", disabled: true }, "Cras justo odio"),
                bs.ListGroupItemLink({ href: "javascript:void(0)" }, "Dapibus ac facilisis in"),
                bs.ListGroupItemLink({ href: "javascript:void(0)" }, "Morbi leo risus"),
                bs.ListGroupItemLink({ href: "javascript:void(0)" }, "Porta ac consectetur ac"),
                bs.ListGroupItemLink({ href: "javascript:void(0)" }, "Vestibulum at eros")
            ])
        ]),
        bs.Figure(
            { style: styles.highlight },
            pre(
                {},
                bs.Code({ style: langJs }, [
                    `bs.ListGroup({ linkified: true }, [`,
                    bs.E({ tag: "br" }),
                    `    bs.ListGroupItemLink({ href: '...', disabled: true }, 'Cras justo odio'),`,
                    bs.E({ tag: "br" }),
                    `    bs.ListGroupItemLink({ href: '...' }, 'Dapibus ac facilisis in'),`,
                    bs.E({ tag: "br" }),
                    `    bs.ListGroupItemLink({ href: '...' }, 'Morbi leo risus'),`,
                    bs.E({ tag: "br" }),
                    `    bs.ListGroupItemLink({ href: '...' }, 'Porta ac consectetur ac'),`,
                    bs.E({ tag: "br" }),
                    `    bs.ListGroupItemLink({ href: '...' }, 'Vestibulum at eros')`,
                    bs.E({ tag: "br" }),
                    `])`
                ])
            )
        )
    ];
}

function context(): b.IBobrilChildren {
    return [
        b.anchor(bs.H2({ attrs: { id: "list-group-contextual-classes" } }, "Contextual classes")),
        bs.E({ style: styles.bsExample }, [
            bs.Row({}, [
                bs.Col({ size: bs.Size.Sm, span: 6 }, [
                    bs.ListGroup({}, [
                        bs.ListGroupItem({ context: bs.ListGroupItemContext.Success }, "Cras justo odio"),
                        bs.ListGroupItem({ context: bs.ListGroupItemContext.Info }, "Dapibus ac facilisis in"),
                        bs.ListGroupItem({ context: bs.ListGroupItemContext.Warning }, "Morbi leo risus"),
                        bs.ListGroupItem({ context: bs.ListGroupItemContext.Danger }, "Porta ac consectetur ac")
                    ])
                ]),
                bs.Col({ size: bs.Size.Sm, span: 6 }, [
                    bs.ListGroup({ linkified: true }, [
                        bs.ListGroupItemLink(
                            {
                                context: bs.ListGroupItemContext.Success,
                                href: "javascript:void(0)"
                            },
                            "Cras justo odio"
                        ),
                        bs.ListGroupItemLink(
                            {
                                context: bs.ListGroupItemContext.Info,
                                href: "javascript:void(0)"
                            },
                            "Dapibus ac facilisis in"
                        ),
                        bs.ListGroupItemLink(
                            {
                                context: bs.ListGroupItemContext.Warning,
                                href: "javascript:void(0)"
                            },
                            "Morbi leo risus"
                        ),
                        bs.ListGroupItemLink(
                            {
                                context: bs.ListGroupItemContext.Danger,
                                href: "javascript:void(0)"
                            },
                            "Porta ac consectetur"
                        )
                    ])
                ])
            ])
        ]),
        bs.Figure(
            { style: styles.highlight },
            pre(
                {},
                bs.Code({ style: langJs }, [
                    `bs.ListGroup({}, [`,
                    bs.E({ tag: "br" }),
                    `    bs.ListGroupItem({ context: bs.ListGroupItemContext.Success }, 'Cras justo odio'),`,
                    bs.E({ tag: "br" }),
                    `    bs.ListGroupItem({ context: bs.ListGroupItemContext.Info }, 'Dapibus ac facilisis in'),`,
                    bs.E({ tag: "br" }),
                    `    bs.ListGroupItem({}, 'Morbi leo risus'),`,
                    bs.E({ tag: "br" }),
                    `    bs.ListGroupItem({}, 'Porta ac consectetur ac')`,
                    bs.E({ tag: "br" }),
                    `])`,
                    bs.E({ tag: "br" }),
                    `bs.ListGroup({ linkified: true }, [`,
                    bs.E({ tag: "br" }),
                    `    bs.ListGroupItemLink({ context: bs.ListGroupItemContext.Success, href: '...' }, 'Cras justo odio'),`,
                    bs.E({ tag: "br" }),
                    `    bs.ListGroupItemLink({ context: bs.ListGroupItemContext.Info, href: '...' }, 'Dapibus ac facilisis in'),`,
                    bs.E({ tag: "br" }),
                    `    bs.ListGroupItemLink({ context: bs.ListGroupItemContext.Warning, href: '...' }, 'Morbi leo risus'),`,
                    bs.E({ tag: "br" }),
                    `    bs.ListGroupItemLink({ context: bs.ListGroupItemContext.Danger, href: '...' }, 'Porta ac consectetur')`,
                    bs.E({ tag: "br" }),
                    `])`
                ])
            )
        )
    ];
}

function customContent(): b.IBobrilChildren {
    return [
        b.anchor(bs.H2({ attrs: { id: "list-group-custom-content" } }, "Custom content")),
        bs.E({ style: styles.bsExample }, [
            bs.ListGroup({ linkified: true }, [
                bs.ListGroupItemLink({ href: "javascript:void(0)", active: true }, [
                    bs.ListGroupItemHeading4({}, "List group item heading"),
                    bs.ListGroupItemText(
                        {},
                        `Donec id elit non mi porta gravida at eget metus. 
                    Maecenas sed diam eget risus varius blandit.`
                    )
                ]),
                bs.ListGroupItemLink({ href: "javascript:void(0)" }, [
                    bs.ListGroupItemHeading4({}, "List group item heading"),
                    bs.ListGroupItemText(
                        {},
                        `Donec id elit non mi porta gravida at eget metus. 
                    Maecenas sed diam eget risus varius blandit.`
                    )
                ]),
                bs.ListGroupItemLink({ href: "javascript:void(0)" }, [
                    bs.ListGroupItemHeading4({}, "List group item heading"),
                    bs.ListGroupItemText(
                        {},
                        `Donec id elit non mi porta gravida at eget metus. 
                    Maecenas sed diam eget risus varius blandit.`
                    )
                ])
            ])
        ]),
        bs.Figure(
            { style: styles.highlight },
            pre(
                {},
                bs.Code({ style: langJs }, [
                    `bs.ListGroup({ linkified: true }, [`,
                    bs.E({ tag: "br" }),
                    `    bs.ListGroupItemLink({ href: '...', disabled: true }, [`,
                    bs.E({ tag: "br" }),
                    `        bs.ListGroupItemHeading4({}, 'List group item heading'),`,
                    bs.E({ tag: "br" }),
                    `        bs.ListGroupItemText({}, '...')`,
                    bs.E({ tag: "br" }),
                    `    ])`,
                    bs.E({ tag: "br" }),
                    `])`
                ])
            )
        )
    ];
}

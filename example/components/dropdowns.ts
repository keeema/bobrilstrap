import * as b from "bobril";
import * as bs from "../../index";
import { styles } from "../bsexample/css";
import { pre, langJs } from "../prettify/pre";
import { section } from "../common/section";

export const dropdowns = b.createVirtualComponent({
    render(_ctx: b.IBobrilCtx, me: b.IBobrilNode) {
        me.children = section(
            {
                header: "Dropdowns",
                id: "dropdowns",
                lead: `Toggleable, contextual menu for displaying lists of links.`,
            },
            [example(), alignment(), headers(), divider(), disabled()]
        );
    },
});

function example(): b.IBobrilChildren {
    return [
        b.anchor(bs.H2({ attrs: { id: "dropdowns-example" } }, "Example")),
        bs.P({}, [
            `Wrap the dropdown's trigger and the dropdown menu within`,
            bs.Code({}, "bs.Dropdown"),
            `, or another element that declares `,
            bs.Code({}, "position: relative;"),
            `. Then add the menu.`,
        ]),
        bs.E({ style: styles.bsExample }, [
            bs.Dropdown(
                {
                    button: { label: "Dropdown", id: "dropdownMenu1" },
                    style: bs.helpers.clearfix,
                },
                bs.DropdownMenu({ aria: { labelledby: "dropdownMenu1" } }, [
                    bs.DropdownItem({}, bs.A({ href: "javascript:void(0)" }, "Action")),
                    bs.DropdownItem({}, bs.A({ href: "javascript:void(0)" }, "Another action")),
                    bs.DropdownItem({}, bs.A({ href: "javascript:void(0)" }, "Something else here")),
                    bs.DropdownItem({ separator: true }),
                    bs.DropdownItem({}, bs.A({ href: "javascript:void(0)" }, "Separated link")),
                ])
            ),
        ]),
        bs.Figure(
            { style: styles.highlight },
            pre(
                {},
                bs.Code({ style: langJs }, [
                    `bs.Dropdown(`,
                    bs.E({ tag: "br" }),
                    `    { button: { label: 'Dropdown', id: 'dropdownMenu1' } },`,
                    bs.E({ tag: "br" }),
                    `    bs.DropdownMenu({ aria: { labelledby: 'dropdownMenu1'}}, [`,
                    bs.E({ tag: "br" }),
                    `        bs.DropdownItem({}, bs.A({ href: '...' }, 'Action')),`,
                    bs.E({ tag: "br" }),
                    `        bs.DropdownItem({}, bs.A({ href: '...' }, 'Another action')),`,
                    bs.E({ tag: "br" }),
                    `        bs.DropdownItem({}, bs.A({ href: '...' }, 'Something else here')),`,
                    bs.E({ tag: "br" }),
                    `        bs.DropdownItem({ separator: true}),`,
                    bs.E({ tag: "br" }),
                    `        bs.DropdownItem({}, bs.A({ href: '...' }, 'Separated link')),`,
                    bs.E({ tag: "br" }),
                    `    ])`,
                    bs.E({ tag: "br" }),
                    `)`,
                ])
            )
        ),
        bs.P({}, [
            `Dropdown menus can be changed to expand upwards (instead of downwards) by setting `,
            bs.Code({}, "up"),
            ` input data property or by using `,
            bs.Code({}, "dropdownStyles.dropup"),
            ` instead of `,
            bs.Code({}, "dropdownStyles.dropdown"),
            `.`,
        ]),
        bs.E({ style: styles.bsExample }, [
            bs.Dropdown(
                {
                    up: true,
                    button: { label: "Dropup", id: "dropdownMenu1" },
                    style: bs.helpers.clearfix,
                },
                bs.DropdownMenu({ aria: { labelledby: "dropdownMenu1" } }, [
                    bs.DropdownItem({}, bs.A({ href: "javascript:void(0)" }, "Action")),
                    bs.DropdownItem({}, bs.A({ href: "javascript:void(0)" }, "Another action")),
                    bs.DropdownItem({}, bs.A({ href: "javascript:void(0)" }, "Something else here")),
                    bs.DropdownItem({ separator: true }),
                    bs.DropdownItem({}, bs.A({ href: "javascript:void(0)" }, "Separated link")),
                ])
            ),
        ]),
        bs.Figure(
            { style: styles.highlight },
            pre(
                {},
                bs.Code({ style: langJs }, [
                    `bs.Dropdown(`,
                    bs.E({ tag: "br" }),
                    `    {`,
                    bs.E({ tag: "br" }),
                    `        button: { label: 'Dropup', id: 'dropdownMenu1' },`,
                    bs.E({ tag: "br" }),
                    `        up: true,`,
                    bs.E({ tag: "br" }),
                    `    },`,
                    bs.E({ tag: "br" }),
                    `    bs.DropdownMenu({ aria: { labelledby: 'dropdownMenu1'}}, [`,
                    bs.E({ tag: "br" }),
                    `        bs.DropdownItem({}, bs.A({ href: '...' }, 'Action')),`,
                    bs.E({ tag: "br" }),
                    `        bs.DropdownItem({}, bs.A({ href: '...' }, 'Another action')),`,
                    bs.E({ tag: "br" }),
                    `        bs.DropdownItem({}, bs.A({ href: '...' }, 'Something else here')),`,
                    bs.E({ tag: "br" }),
                    `        bs.DropdownItem({ separator: true}),`,
                    bs.E({ tag: "br" }),
                    `        bs.DropdownItem({}, bs.A({ href: '...' }, 'Separated link')),`,
                    bs.E({ tag: "br" }),
                    `    ])`,
                    bs.E({ tag: "br" }),
                    `)`,
                ])
            )
        ),
    ];
}

function alignment(): b.IBobrilChildren {
    return [
        b.anchor(bs.H2({ attrs: { id: "dropdowns-alignment" } }, "Alignment")),
        bs.P({}, [
            `By default, a dropdown menu is automatically positioned 100% from the top and along the left side of its parent. Set the`,
            bs.Code({}, "right"),
            ` dropdown menu component input data property to right align the dropdown menu.`,
        ]),
        bs.E(
            {
                style: [styles.bsCallout, styles.bsCalloutDanger],
                attrs: { id: "callout-dropdown-positioning" },
            },
            [
                bs.H4({}, `May require additional positioning`),
                bs.P({}, [
                    `Dropdowns are automatically positioned via CSS within the normal flow of the document. This means dropdowns may be cropped 
                by parents with certain `,
                    bs.Code({}, "overflow"),
                    ` properties or appear out of bounds of the viewport. Address these issues on your own as they arise.`,
                ]),
            ]
        ),
        bs.Figure(
            { style: styles.highlight },
            pre(
                {},
                bs.Code({ style: langJs }, [
                    `bs.DropdownMenu({ right: true, aria: { labelledby: 'dLabel' } }, [`,
                    bs.E({ tag: "br" }),
                    `    ...`,
                    bs.E({ tag: "br" }),
                    `])`,
                ])
            )
        ),
    ];
}

function headers(): b.IBobrilChildren {
    return [
        b.anchor(bs.H2({ attrs: { id: "dropdowns-headers" } }, "Headers")),
        bs.P({}, [`Add a header to label sections of actions in any dropdown menu.`]),
        bs.E({ style: styles.bsExample }, [
            bs.Dropdown(
                {
                    button: { label: "Dropdown", id: "dropdownMenu3" },
                    style: bs.helpers.clearfix,
                },
                bs.DropdownMenu({ aria: { labelledby: "dropdownMenu3" } }, [
                    bs.DropdownItem({ header: true }, "Dropdown header"),
                    bs.DropdownItem({}, bs.A({ href: "javascript:void(0)" }, "Action")),
                    bs.DropdownItem({}, bs.A({ href: "javascript:void(0)" }, "Another action")),
                    bs.DropdownItem({}, bs.A({ href: "javascript:void(0)" }, "Something else here")),
                    bs.DropdownItem({ header: true }, "Dropdown header"),
                    bs.DropdownItem({}, bs.A({ href: "javascript:void(0)" }, "Separated link")),
                ])
            ),
        ]),
        bs.Figure(
            { style: styles.highlight },
            pre(
                {},
                bs.Code({ style: langJs }, [
                    `bs.DropdownMenu({ aria: { labelledby: 'dropdownMenu3' }}, [`,
                    bs.E({ tag: "br" }),
                    `    ...`,
                    bs.E({ tag: "br" }),
                    `    bs.DropdownItem({ header: true }, 'Dropdown header'),`,
                    bs.E({ tag: "br" }),
                    `    ...`,
                    bs.E({ tag: "br" }),
                    `])`,
                ])
            )
        ),
    ];
}

function divider(): b.IBobrilChildren {
    return [
        b.anchor(bs.H2({ attrs: { id: "dropdowns-divider" } }, "Divider")),
        bs.P({}, [`Add a divider to separate series of links in a dropdown menu.`]),
        bs.E({ style: styles.bsExample }, [
            bs.Dropdown(
                {
                    button: { label: "Dropdown", id: "dropdownMenuDivider" },
                    style: bs.helpers.clearfix,
                },
                bs.DropdownMenu({ aria: { labelledby: "dropdownMenuDivider" } }, [
                    bs.DropdownItem({}, bs.A({ href: "javascript:void(0)" }, "Action")),
                    bs.DropdownItem({}, bs.A({ href: "javascript:void(0)" }, "Another action")),
                    bs.DropdownItem({}, bs.A({ href: "javascript:void(0)" }, "Something else here")),
                    bs.DropdownItem({ separator: true }),
                    bs.DropdownItem({}, bs.A({ href: "javascript:void(0)" }, "Separated link")),
                ])
            ),
        ]),
        bs.Figure(
            { style: styles.highlight },
            pre(
                {},
                bs.Code({ style: langJs }, [
                    `bs.DropdownMenu({ aria: { labelledby: 'dropdownMenuDivider' }}, [`,
                    bs.E({ tag: "br" }),
                    `    ...`,
                    bs.E({ tag: "br" }),
                    `    bs.DropdownItem({ separator: true }),`,
                    bs.E({ tag: "br" }),
                    `    ...`,
                    bs.E({ tag: "br" }),
                    `])`,
                ])
            )
        ),
    ];
}

function disabled(): b.IBobrilChildren {
    return [
        b.anchor(bs.H2({ attrs: { id: "dropdowns-disabled" } }, "Disabled menu items")),
        bs.P({}, [
            `Set a `,
            bs.Code({}, "disabled"),
            ` input data property on a `,
            bs.Code({}, "bs.DropdownItem"),
            ` component in the dropdown to disable the link.`,
        ]),
        bs.E({ style: styles.bsExample }, [
            bs.Dropdown(
                {
                    button: { label: "Dropdown", id: "dropdownMenu4" },
                    style: bs.helpers.clearfix,
                },
                bs.DropdownMenu({ aria: { labelledby: "dropdownMenu4" } }, [
                    bs.DropdownItem({}, bs.A({ href: "javascript:void(0)" }, "Regular link")),
                    bs.DropdownItem({ disabled: true }, bs.A({ href: "javascript:void(0)" }, "Disabled link")),
                    bs.DropdownItem({}, bs.A({ href: "javascript:void(0)" }, "Another link")),
                ])
            ),
        ]),
        bs.Figure(
            { style: styles.highlight },
            pre(
                {},
                bs.Code({ style: langJs }, [
                    `bs.DropdownMenu({ aria: { labelledby: 'dropdownMenu4' }}, [`,
                    bs.E({ tag: "br" }),
                    `    bs.DropdownItem({}, bs.A({ href: '...' }, 'Regular link')),`,
                    bs.E({ tag: "br" }),
                    `    bs.DropdownItem({ disabled: true }, bs.A({ href: '...' }, 'Disabled link')),`,
                    bs.E({ tag: "br" }),
                    `    bs.DropdownItem({}, bs.A({ href: '...' }, 'Another link'))`,
                    bs.E({ tag: "br" }),
                    `])`,
                ])
            )
        ),
    ];
}

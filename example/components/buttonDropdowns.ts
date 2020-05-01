import * as b from "bobril";
import * as bs from "../../index";
import { styles } from "../bsexample/css";
import { pre, langJs } from "../prettify/pre";
import { section } from "../common/section";

export const buttonDropdowns = b.createVirtualComponent({
    render(_ctx: b.IBobrilCtx, me: b.IBobrilNode) {
        me.children = section(
            {
                header: "Button dropdowns",
                id: "btn-dropdowns",
                lead: [
                    ` Use a `,
                    bs.Code({}, "bs.ButtonGroup"),
                    ` input data property of `,
                    bs.Code({}, "bs.Dropdown"),
                    ` to wrap button in `,
                    bs.Code({}, "bs.ButtonGroup"),
                    ` component. It accepts simple `,
                    bs.Code({}, "boolean"),
                    ` or complex `,
                    bs.Code({}, "IButtonGroup"),
                    `.`
                ]
            },
            [handlingSpecificStructure(), singleButtonDropdowns(), splitButtonDropdowns(), sizing(), dropupVariations()]
        );
    }
});

function handlingSpecificStructure(): b.IBobrilChildren {
    return bs.E(
        {
            style: [styles.bsCallout, styles.bsCalloutDanger],
            attrs: { id: "callout-btn-dropdowns-special-cases" }
        },
        [
            bs.H4({}, `Handling specific dropdown structure`),
            bs.P({}, [
                `If you need some special dropdown structure, you can compose it directly with components `,
                bs.Code({}, "bs.Button"),
                `, `,
                bs.Code({}, "bs.Span"),
                `, `,
                bs.Code({}, "bs.Ul"),
                `, `,
                bs.Code({}, "bs.Li"),
                ` etc. . `,
                `In such case follow the structure rules in original `,
                bs.A(
                    {
                        href: "https://getbootstrap.com/components/#btn-dropdowns",
                        target: bs.Target.Blank
                    },
                    "Bootstrap dropdown manual"
                ),
                `.`
            ])
        ]
    );
}

function singleButtonDropdowns(): b.IBobrilChildren {
    return [
        b.anchor(bs.H2({ attrs: { id: "btn-dropdowns-single" } }, "Single button dropdowns")),
        bs.P({}, [
            `Turn a button into a dropdown toggle with some basic markup changes. Use a `,
            bs.Code({}, "bs.ButtonGroup"),
            ` data property to wrap button in `,
            bs.Code({}, "bs.ButtonGroup"),
            ` component.`
        ]),
        bs.E({ style: styles.bsExample }, [
            getSingleButtonDropdown("Default", bs.ButtonOption.Default),
            " ",
            getSingleButtonDropdown("Primary", bs.ButtonOption.Primary),
            " ",
            getSingleButtonDropdown("Success", bs.ButtonOption.Success),
            " ",
            getSingleButtonDropdown("Info", bs.ButtonOption.Info),
            " ",
            getSingleButtonDropdown("Warning", bs.ButtonOption.Warning),
            " ",
            getSingleButtonDropdown("Danger", bs.ButtonOption.Danger)
        ]),
        bs.Figure(
            { style: styles.highlight },
            pre(
                {},
                bs.Code({ style: langJs }, [
                    `bs.Dropdown(`,
                    bs.E({ tag: "br" }),
                    `    { `,
                    bs.E({ tag: "br" }),
                    `        buttonGroup: true,`,
                    bs.E({ tag: "br" }),
                    `        button: { label: 'Default', option: bs.ButtonOption.Default }`,
                    bs.E({ tag: "br" }),
                    `    },`,
                    bs.E({ tag: "br" }),
                    `    bs.DropdownMenu({ }, [`,
                    bs.E({ tag: "br" }),
                    `        bs.DropdownItem({}, bs.A({ href: '...' }, 'Action')),      `,
                    bs.E({ tag: "br" }),
                    `        bs.DropdownItem({}, bs.A({ href: '...' }, 'Another action')),`,
                    bs.E({ tag: "br" }),
                    `        bs.DropdownItem({}, bs.A({ href: '...' }, 'Something else here')),`,
                    bs.E({ tag: "br" }),
                    `        bs.DropdownItem({ separator: true }),`,
                    bs.E({ tag: "br" }),
                    `        bs.DropdownItem({}, bs.A({ href: '...' }, 'Separated link'))`,
                    bs.E({ tag: "br" }),
                    `    ])`,
                    bs.E({ tag: "br" }),
                    `)`
                ])
            )
        )
    ];
}

function getSingleButtonDropdown(
    label: string,
    option: bs.ButtonOption,
    size: bs.Size = bs.Size.Md,
    up: boolean = false
): b.IBobrilChildren {
    return bs.Dropdown(
        {
            buttonGroup: true,
            button: { label, option, size },
            up
        },
        bs.DropdownMenu({}, [
            bs.DropdownItem({}, bs.A({ href: "javascript:void(0)" }, "Action")),
            bs.DropdownItem({}, bs.A({ href: "javascript:void(0)" }, "Another action")),
            bs.DropdownItem({}, bs.A({ href: "javascript:void(0)" }, "Something else here")),
            bs.DropdownItem({ separator: true }),
            bs.DropdownItem({}, bs.A({ href: "javascript:void(0)" }, "Separated link"))
        ])
    );
}

function splitButtonDropdowns(): b.IBobrilChildren {
    return [
        b.anchor(bs.H2({ attrs: { id: "btn-dropdowns-split" } }, "Split button dropdowns")),
        bs.P({}, [
            `Similarly, create split button dropdowns with the same markup changes, only with `,
            bs.Code({}, "splitted"),
            ` property set to `,
            bs.Code({}, "true"),
            `.`
        ]),
        bs.E({ style: styles.bsExample }, [
            getSplitButtonDropdown("Default"),
            " ",
            getSplitButtonDropdown("Primary", bs.ButtonOption.Primary),
            " ",
            getSplitButtonDropdown("Success", bs.ButtonOption.Success),
            " ",
            getSplitButtonDropdown("Info", bs.ButtonOption.Info),
            " ",
            getSplitButtonDropdown("Warning", bs.ButtonOption.Warning),
            " ",
            getSplitButtonDropdown("Danger", bs.ButtonOption.Danger)
        ]),
        bs.Figure(
            { style: styles.highlight },
            pre(
                {},
                bs.Code({ style: langJs }, [
                    `bs.Dropdown(`,
                    bs.E({ tag: "br" }),
                    `    { `,
                    bs.E({ tag: "br" }),
                    `        buttonGroup: true,`,
                    bs.E({ tag: "br" }),
                    `        button: { label: 'Default', option: bs.ButtonOption.Default, onClick: () => alert('Clicked!') },`,
                    bs.E({ tag: "br" }),
                    `        splitted: true,`,
                    bs.E({ tag: "br" }),
                    `        splittedSrOnlyText: 'Toggle Dropdown' `,
                    bs.E({ tag: "br" }),
                    `    },`,
                    bs.E({ tag: "br" }),
                    `    bs.DropdownMenu({ }, [`,
                    bs.E({ tag: "br" }),
                    `        bs.DropdownItem({}, bs.A({ href: '...' }, 'Action')),      `,
                    bs.E({ tag: "br" }),
                    `        bs.DropdownItem({}, bs.A({ href: '...' }, 'Another action')),`,
                    bs.E({ tag: "br" }),
                    `        bs.DropdownItem({}, bs.A({ href: '...' }, 'Something else here')),`,
                    bs.E({ tag: "br" }),
                    `        bs.DropdownItem({ separator: true }),`,
                    bs.E({ tag: "br" }),
                    `        bs.DropdownItem({}, bs.A({ href: '...' }, 'Separated link'))`,
                    bs.E({ tag: "br" }),
                    `    ])`,
                    bs.E({ tag: "br" }),
                    `)`
                ])
            )
        )
    ];
}

function getSplitButtonDropdown(label: string, option: bs.ButtonOption = bs.ButtonOption.Default): b.IBobrilChildren {
    return bs.Dropdown(
        {
            buttonGroup: true,
            button: { label, option, onClick: () => alert("Clicked!") },
            splitted: true,
            splittedSrOnlyText: "Toggle Dropdown"
        },
        bs.DropdownMenu({}, [
            bs.DropdownItem({}, bs.A({ href: "javascript:void(0)" }, "Action")),
            bs.DropdownItem({}, bs.A({ href: "javascript:void(0)" }, "Another action")),
            bs.DropdownItem({}, bs.A({ href: "javascript:void(0)" }, "Something else here")),
            bs.DropdownItem({ separator: true }),
            bs.DropdownItem({}, bs.A({ href: "javascript:void(0)" }, "Separated link"))
        ])
    );
}

function sizing(): b.IBobrilChildren {
    return [
        b.anchor(bs.H2({ attrs: { id: "btn-dropdowns-sizing" } }, "Sizing")),
        bs.P({}, `Button dropdowns work with buttons of all sizes.`),
        bs.E({ style: styles.bsExample }, [
            getSingleButtonDropdown("Large", bs.ButtonOption.Default, bs.Size.Lg),
            " ",
            getSingleButtonDropdown("Medium", bs.ButtonOption.Default, bs.Size.Md),
            " ",
            getSingleButtonDropdown("Small", bs.ButtonOption.Default, bs.Size.Sm),
            " ",
            getSingleButtonDropdown("Extra small", bs.ButtonOption.Default, bs.Size.Xs),
            " "
        ]),
        bs.Figure(
            { style: styles.highlight },
            pre(
                {},
                bs.Code({ style: langJs }, [
                    `bs.Dropdown(`,
                    bs.E({ tag: "br" }),
                    `    { `,
                    bs.E({ tag: "br" }),
                    `        buttonGroup: true,`,
                    bs.E({ tag: "br" }),
                    `        button: { label: 'Default', option: bs.ButtonOption.Default, size: bs.Size.Lg }`,
                    bs.E({ tag: "br" }),
                    `    },`,
                    bs.E({ tag: "br" }),
                    `    bs.DropdownMenu({ }, [`,
                    bs.E({ tag: "br" }),
                    `        bs.DropdownItem({}, bs.A({ href: '...' }, 'Action')),      `,
                    bs.E({ tag: "br" }),
                    `        bs.DropdownItem({}, bs.A({ href: '...' }, 'Another action')),`,
                    bs.E({ tag: "br" }),
                    `        bs.DropdownItem({}, bs.A({ href: '...' }, 'Something else here')),`,
                    bs.E({ tag: "br" }),
                    `        bs.DropdownItem({ separator: true }),`,
                    bs.E({ tag: "br" }),
                    `        bs.DropdownItem({}, bs.A({ href: '...' }, 'Separated link'))`,
                    bs.E({ tag: "br" }),
                    `    ])`,
                    bs.E({ tag: "br" }),
                    `)`
                ])
            )
        )
    ];
}

function dropupVariations(): b.IBobrilChildren {
    return [
        b.anchor(bs.H2({ attrs: { id: "btn-dropdowns-dropup" } }, "Dropup variation")),
        bs.P({}, [`Trigger dropdown menus above elements by setting `, bs.Code({}, "up"), ` property.`]),
        bs.E({ style: styles.bsExample }, [
            getSingleButtonDropdown("Dropup", bs.ButtonOption.Default, bs.Size.Md, true),
            " ",
            getSingleButtonDropdown("Right dropup", bs.ButtonOption.Primary, bs.Size.Md, true),
            " "
        ]),
        bs.Figure(
            { style: styles.highlight },
            pre(
                {},
                bs.Code({ style: langJs }, [
                    `bs.Dropdown(`,
                    bs.E({ tag: "br" }),
                    `    { `,
                    bs.E({ tag: "br" }),
                    `        buttonGroup: true,`,
                    bs.E({ tag: "br" }),
                    `        button: { label: 'Default', option: bs.ButtonOption.Default },`,
                    bs.E({ tag: "br" }),
                    `        up: true`,
                    bs.E({ tag: "br" }),
                    `    },`,
                    bs.E({ tag: "br" }),
                    `    bs.DropdownMenu({ }, [`,
                    bs.E({ tag: "br" }),
                    `        bs.DropdownItem({}, bs.A({ href: '...' }, 'Action')),      `,
                    bs.E({ tag: "br" }),
                    `        bs.DropdownItem({}, bs.A({ href: '...' }, 'Another action')),`,
                    bs.E({ tag: "br" }),
                    `        bs.DropdownItem({}, bs.A({ href: '...' }, 'Something else here')),`,
                    bs.E({ tag: "br" }),
                    `        bs.DropdownItem({ separator: true }),`,
                    bs.E({ tag: "br" }),
                    `        bs.DropdownItem({}, bs.A({ href: '...' }, 'Separated link'))`,
                    bs.E({ tag: "br" }),
                    `    ])`,
                    bs.E({ tag: "br" }),
                    `)`
                ])
            )
        )
    ];
}

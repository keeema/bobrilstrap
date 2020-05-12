import * as b from "bobril";
import * as bs from "../../index";
import { styles } from "../bsexample/css";
import { pre, langJs } from "../prettify/pre";
import { section } from "../common/section";

export const inputGroups = b.createVirtualComponent({
    render(_ctx: b.IBobrilCtx, me: b.IBobrilNode) {
        me.children = section(
            {
                header: "Input groups",
                id: "input-groups",
                lead: [
                    `Extend form controls by adding text or buttons before, after, or on both sides of any text-based `,
                    bs.Code({}, "<input>"),
                    `. Use `,
                    bs.Code({}, "bs.InputGroup"),
                    ` with an `,
                    bs.Code({}, "bs.InputGroupAddon"),
                    ` or `,
                    bs.Code({}, "bs.InputGroupBtn"),
                    ` component to prepend or append elements to a single .form-control.`,
                ],
            },
            [
                info(),
                basicExample(),
                sizing(),
                checkboxesRadioboxes(),
                buttonAddons(),
                buttonWithDropdowns(),
                segmentedButtons(),
                multipleButtons(),
            ]
        );
    },
});

function info(): b.IBobrilChildren {
    return [
        bs.E(
            {
                style: [styles.bsCallout, styles.bsCalloutDanger],
                attrs: { id: "callout-inputgroup-text-input-only" },
            },
            [
                bs.H4({}, [`Textual `, bs.Code({}, "<input>"), `s only`]),
                bs.P({}, [`Avoid using `, bs.Code({}, "<select>"), ` elements here as they cannot be fully styled in WebKit browsers.`]),
                bs.P({}, [
                    `Avoid using `,
                    bs.Code({}, "<textarea>"),
                    ` elements here as their `,
                    bs.Code({}, "rows"),
                    ` attribute will not be respected in some cases.`,
                ]),
            ]
        ),
        bs.E(
            {
                style: [styles.bsCallout, styles.bsCalloutDanger],
                attrs: { id: "callout-inputgroup-dont-mix" },
            },
            [
                bs.H4({}, [`Don't mix with other components`]),
                bs.P(
                    {},
                    `Do not mix form groups or grid column classes directly with input groups. Instead, nest the 
            input group inside of the form group or grid-related element.`
                ),
            ]
        ),
        bs.E(
            {
                style: [styles.bsCallout, styles.bsCalloutDanger],
                attrs: { id: "callout-inputgroup-form-labels" },
            },
            [
                bs.H4({}, [`Textual `, bs.Code({}, "<input>"), `s only`]),
                bs.P(
                    {},
                    `Screen readers will have trouble with your forms if you don't include a label for every input. For 
            these input groups, ensure that any additional label or functionality is conveyed to assistive technologies.`
                ),
                bs.P({}, [
                    `The exact technique to be used (visible `,
                    bs.Code({}, " label"),
                    ` node, `,
                    bs.Code({}, " label"),
                    ` nodes hidden using the `,
                    bs.Code({}, "srOnly"),
                    ` property, or use of the `,
                    bs.Code({}, " aria.label"),
                    `, `,
                    bs.Code({}, "aria.labelledby"),
                    `, `,
                    bs.Code({}, "aria.describedby"),
                    `, `,
                    bs.Code({}, "title"),
                    ` or `,
                    bs.Code({}, "placeholder"),
                    ` attribute) and what additional information will need to be conveyed will vary 
                depending on the exact type of interface widget you're implementing. The examples in this section provide 
                a few suggested, case-specific approaches.`,
                ]),
            ]
        ),
    ];
}

function basicExample(): b.IBobrilChildren {
    return [
        b.anchor(bs.H2({ attrs: { id: "input-groups-basic" } }, "Basic example")),
        bs.P({}, [`Place one add-on or button on either side of an input. You may also place one on both sides of an input.`]),
        bs.P(
            {},
            bs.Strong({ style: bs.helpers.text.danger }, [
                `Bootstrap does not support multiple add-ons (`,
                bs.Code({}, "bs.InputGroupAddon"),
                ` or `,
                bs.Code({}, "bs.InputGroupBtn"),
                `) on a single side.`,
            ])
        ),
        bs.P({}, bs.Strong({ style: bs.helpers.text.danger }, `We do not support multiple form-controls in a single input group.`)),
        bs.E({ style: styles.bsExample }, [
            bs.InputGroup({}, [
                bs.InputGroupAddon({ id: "basic-addon1" }, "@"),
                bs.InputText({
                    placeholder: "Username",
                    aria: { describedby: "basic-addon1" },
                }),
            ]),
            bs.E({ tag: "br" }),
            bs.InputGroup({}, [
                bs.InputText({
                    placeholder: `Recipient's username`,
                    aria: { describedby: "basic-addon2" },
                }),
                bs.InputGroupAddon({ id: "basic-addon2" }, "@example.com"),
            ]),
            bs.E({ tag: "br" }),
            bs.InputGroup({}, [
                bs.InputGroupAddon({}, "$"),
                bs.InputText({ placeholder: "Amount (to the nearest dollar)" }),
                bs.InputGroupAddon({}, ".00"),
            ]),
            bs.E({ tag: "br" }),
            bs.Label({}, "Your vanity URL"),
            bs.InputGroup({}, [
                bs.InputGroupAddon({ id: "basic-addon3" }, "https://example.com/users/"),
                bs.InputText({ id: "basic-url", aria: { describedby: "basic-addon3" } }),
            ]),
        ]),
        bs.Figure(
            { style: styles.highlight },
            pre(
                {},
                bs.Code({ style: langJs }, [
                    `bs.InputGroup({}, [`,
                    bs.E({ tag: "br" }),
                    `    bs.InputGroupAddon({ id: 'basic-addon1' }, '@'),`,
                    bs.E({ tag: "br" }),
                    `    bs.InputText({ placeholder: 'Username', aria: { describedby: 'basic-addon1' } })`,
                    bs.E({ tag: "br" }),
                    `]),`,
                    bs.E({ tag: "br" }),
                    `bs.InputGroup({}, [`,
                    bs.E({ tag: "br" }),
                    `    bs.InputText({ placeholder: 'Recipient\\'s username', aria: { describedby: 'basic-addon2' } }),`,
                    bs.E({ tag: "br" }),
                    `    bs.InputGroupAddon({ id: 'basic-addon2' }, '@example.com')`,
                    bs.E({ tag: "br" }),
                    `]),`,
                    bs.E({ tag: "br" }),
                    `bs.InputGroup({}, [`,
                    bs.E({ tag: "br" }),
                    `    bs.InputGroupAddon({}, '$'),`,
                    bs.E({ tag: "br" }),
                    `    bs.InputText({ placeholder: 'Amount (to the nearest dollar)' }),`,
                    bs.E({ tag: "br" }),
                    `    bs.InputGroupAddon({}, '.00')`,
                    bs.E({ tag: "br" }),
                    `]),`,
                    bs.E({ tag: "br" }),
                    `bs.Label({}, 'Your vanity URL'),`,
                    bs.E({ tag: "br" }),
                    `bs.InputGroup({}, [`,
                    bs.E({ tag: "br" }),
                    `    bs.InputGroupAddon({ id: 'basic-addon3' }, 'https://example.com/users/'),`,
                    bs.E({ tag: "br" }),
                    `    bs.InputText({ id: 'basic-url', aria: { describedby: 'basic-addon3' } })`,
                    bs.E({ tag: "br" }),
                    `])`,
                ])
            )
        ),
    ];
}

function sizing(): b.IBobrilChildren {
    return [
        b.anchor(bs.H2({ attrs: { id: "input-groups-sizing" } }, "Sizing")),
        bs.P({}, [
            `Set the relative form sizing by the `,
            bs.Code({}, "size"),
            ` property of the `,
            bs.Code({}, "bs.InputGroup"),
            ` component itself and contents within will automatically resize—no need for repeating the form control
             size classes on each element.`,
        ]),
        bs.E({ style: styles.bsExample }, [
            bs.InputGroup({ size: bs.InputGroupSize.Lg }, [
                bs.InputGroupAddon({ id: "sizing-addon1" }, "@"),
                bs.InputText({
                    placeholder: "Username",
                    aria: { describedby: "sizing-addon1" },
                }),
            ]),
            bs.E({ tag: "br" }),

            bs.InputGroup({}, [
                bs.InputGroupAddon({ id: "sizing-addon2" }, "@"),
                bs.InputText({
                    placeholder: "Username",
                    aria: { describedby: "sizing-addon2" },
                }),
            ]),
            bs.E({ tag: "br" }),
            bs.InputGroup({ size: bs.InputGroupSize.Sm }, [
                bs.InputGroupAddon({ id: "sizing-addon3" }, "@"),
                bs.InputText({
                    placeholder: "Username",
                    aria: { describedby: "sizing-addon3" },
                }),
            ]),
        ]),
        bs.Figure(
            { style: styles.highlight },
            pre(
                {},
                bs.Code({ style: langJs }, [
                    `bs.InputGroup({ size: bs.InputGroupSize.Lg }, [`,
                    bs.E({ tag: "br" }),
                    `    bs.InputGroupAddon({ id: 'sizing-addon1' }, '@'),`,
                    bs.E({ tag: "br" }),
                    `    bs.InputText({ placeholder: 'Username', aria: { describedby: 'sizing-addon1' } })`,
                    bs.E({ tag: "br" }),
                    `]),`,
                    bs.E({ tag: "br" }),
                    `bs.InputGroup({}, [`,
                    bs.E({ tag: "br" }),
                    `    bs.InputGroupAddon({ id: 'sizing-addon2' }, '@'),`,
                    bs.E({ tag: "br" }),
                    `    bs.InputText({ placeholder: 'Username', aria: { describedby: 'sizing-addon2' } })`,
                    bs.E({ tag: "br" }),
                    `]),`,
                    bs.E({ tag: "br" }),
                    `bs.InputGroup({ size: bs.InputGroupSize.Sm }, [`,
                    bs.E({ tag: "br" }),
                    `    bs.InputGroupAddon({ id: 'sizing-addon3' }, '@'),`,
                    bs.E({ tag: "br" }),
                    `    bs.InputText({ placeholder: 'Username', aria: { describedby: 'sizing-addon3' } })`,
                    bs.E({ tag: "br" }),
                    `])`,
                    bs.E({ tag: "br" }),
                ])
            )
        ),
    ];
}

function checkboxesRadioboxes(): b.IBobrilChildren {
    return [
        b.anchor(bs.H2({ attrs: { id: "input-groups-checkboxes-radios" } }, "Checkboxes and radio addons")),
        bs.P({}, `Place any checkbox or radio option within an input group's addon instead of text.`),
        bs.E({ style: styles.bsExample }, [
            bs.Row({}, [
                bs.Col(
                    { size: bs.Size.Lg, span: 6 },
                    bs.InputGroup({}, [
                        bs.InputGroupAddon({}, bs.InputCheckbox({ aria: { label: "..." } })),
                        bs.InputText({ aria: { label: "..." } }),
                    ])
                ),
                bs.Col(
                    { size: bs.Size.Lg, span: 6 },
                    bs.InputGroup({}, [
                        bs.InputGroupAddon(
                            {},
                            bs.InputRadio({
                                name: "radio1",
                                value: "value1",
                                aria: { label: "..." },
                            })
                        ),
                        bs.InputText({ aria: { label: "..." } }),
                    ])
                ),
            ]),
        ]),
        bs.Figure(
            { style: styles.highlight },
            pre(
                {},
                bs.Code({ style: langJs }, [
                    `bs.Row({}, [`,
                    bs.E({ tag: "br" }),
                    `    bs.Col({ size: bs.Size.Lg, span: 6 },`,
                    bs.E({ tag: "br" }),
                    `        bs.InputGroup({}, [`,
                    bs.E({ tag: "br" }),
                    `            bs.InputGroupAddon({}, bs.InputCheckbox({ aria: { label: '...' } })),`,
                    bs.E({ tag: "br" }),
                    `            bs.InputText({ aria: { label: '...' } })`,
                    bs.E({ tag: "br" }),
                    `    ),`,
                    bs.E({ tag: "br" }),
                    `    bs.Col({ size: bs.Size.Lg, span: 6 },`,
                    bs.E({ tag: "br" }),
                    `        bs.InputGroup({}, [`,
                    bs.E({ tag: "br" }),
                    `            bs.InputGroupAddon({}, bs.InputRadio({ name: 'radio1', value: 'value1', aria: { label: '...' } })),`,
                    bs.E({ tag: "br" }),
                    `            bs.InputText({ aria: { label: '...' } })`,
                    bs.E({ tag: "br" }),
                    `        ])`,
                    bs.E({ tag: "br" }),
                    `    )`,
                    bs.E({ tag: "br" }),
                    `])`,
                ])
            )
        ),
    ];
}

function buttonAddons(): b.IBobrilChildren {
    return [
        b.anchor(bs.H2({ attrs: { id: "input-groups-buttons" } }, "Button addons")),
        bs.P({}, [
            `Buttons in input groups are a bit different and require one extra level of nesting. Instead of `,
            bs.Code({}, "bs.InputGroupAddon"),
            `, you'll need to use `,
            bs.Code({}, "bs.InputGroupBtn"),
            ` to wrap the buttons. This is required due to default browser styles that cannot be overridden.`,
        ]),
        bs.E({ style: styles.bsExample }, [
            bs.Row({}, [
                bs.Col(
                    { size: bs.Size.Lg, span: 6 },
                    bs.InputGroup({}, [
                        bs.InputGroupBtn({}, bs.Button({ label: "Go!" })),
                        bs.InputText({
                            placeholder: "Search for...",
                            aria: { label: "..." },
                        }),
                    ])
                ),
                bs.Col(
                    { size: bs.Size.Lg, span: 6 },
                    bs.InputGroup({}, [
                        bs.InputText({
                            placeholder: "Search for...",
                            aria: { label: "..." },
                        }),
                        bs.InputGroupBtn({}, bs.Button({ label: "Go!" })),
                    ])
                ),
            ]),
        ]),
        bs.Figure(
            { style: styles.highlight },
            pre(
                {},
                bs.Code({ style: langJs }, [
                    `bs.Row({}, [`,
                    bs.E({ tag: "br" }),
                    `    bs.Col({ size: bs.Size.Lg, span: 6 },`,
                    bs.E({ tag: "br" }),
                    `        bs.InputGroup({}, [`,
                    bs.E({ tag: "br" }),
                    `            bs.InputGroupBtn({}, bs.Button({ label: 'Go!' })),`,
                    bs.E({ tag: "br" }),
                    `            bs.InputText({ placeholder: 'Search for...', aria: { label: '...' } })`,
                    bs.E({ tag: "br" }),
                    `        ])`,
                    bs.E({ tag: "br" }),
                    `    ),`,
                    bs.E({ tag: "br" }),
                    `    bs.Col({ size: bs.Size.Lg, span: 6 },`,
                    bs.E({ tag: "br" }),
                    `        bs.InputGroup({}, [`,
                    bs.E({ tag: "br" }),
                    `            bs.InputText({ placeholder: 'Search for...', aria: { label: '...' } }),`,
                    bs.E({ tag: "br" }),
                    `            bs.InputGroupBtn({}, bs.Button({ label: 'Go!' })),`,
                    bs.E({ tag: "br" }),
                    `        ])`,
                    bs.E({ tag: "br" }),
                    `    )`,
                    bs.E({ tag: "br" }),
                    `])`,
                ])
            )
        ),
    ];
}

function buttonWithDropdowns(): b.IBobrilChildren {
    return [
        b.anchor(bs.H2({ attrs: { id: "input-groups-buttons-dropdowns" } }, "Buttons with dropdowns")),
        bs.P({}, [
            `As in previous cases - you can use the prepared helper `,
            bs.Code({}, "bs.Dropdown"),
            ` or compose from specific input components.`,
        ]),
        bs.E({ style: styles.bsExample }, [
            bs.Row({}, [
                bs.Col(
                    { size: bs.Size.Lg, span: 6 },
                    bs.InputGroup({}, [
                        bs.Dropdown(
                            { inputGroupBtn: true, button: { label: "Action" } },
                            bs.DropdownMenu({}, [
                                bs.DropdownItem({}, bs.A({ href: "javascript:void(0)" }, "Action")),
                                bs.DropdownItem({}, bs.A({ href: "javascript:void(0)" }, "Another action")),
                                bs.DropdownItem({}, bs.A({ href: "javascript:void(0)" }, "Something else here")),
                                bs.DropdownItem({ separator: true }),
                                bs.DropdownItem({}, bs.A({ href: "javascript:void(0)" }, "Separated link")),
                            ])
                        ),
                        bs.InputText({}),
                    ])
                ),
                bs.Col(
                    { size: bs.Size.Lg, span: 6 },
                    bs.InputGroup({}, [
                        bs.InputText({}),
                        bs.Dropdown(
                            { inputGroupBtn: true, button: { label: "Action" } },
                            bs.DropdownMenu({}, [
                                bs.DropdownItem({}, bs.A({ href: "javascript:void(0)" }, "Action")),
                                bs.DropdownItem({}, bs.A({ href: "javascript:void(0)" }, "Another action")),
                                bs.DropdownItem({}, bs.A({ href: "javascript:void(0)" }, "Something else here")),
                                bs.DropdownItem({ separator: true }),
                                bs.DropdownItem({}, bs.A({ href: "javascript:void(0)" }, "Separated link")),
                            ])
                        ),
                    ])
                ),
            ]),
        ]),
        bs.Figure(
            { style: styles.highlight },
            pre(
                {},
                bs.Code({ style: langJs }, [
                    `bs.Row({}, [`,
                    bs.E({ tag: "br" }),
                    `   bs.Col({ size: bs.Size.Lg, span: 6 },`,
                    bs.E({ tag: "br" }),
                    `       bs.InputGroup({}, [`,
                    bs.E({ tag: "br" }),
                    `           bs.Dropdown(`,
                    bs.E({ tag: "br" }),
                    `                { inputGroupBtn: true, button: { label: 'Action' } },`,
                    bs.E({ tag: "br" }),
                    `                bs.DropdownMenu({}, [`,
                    bs.E({ tag: "br" }),
                    `                    bs.DropdownItem({}, bs.A({ href: '...' }, 'Action')),`,
                    bs.E({ tag: "br" }),
                    `                    bs.DropdownItem({}, bs.A({ href: '...' }, 'Another action')),`,
                    bs.E({ tag: "br" }),
                    `                    bs.DropdownItem({}, bs.A({ href: '...' }, 'Something else here')),`,
                    bs.E({ tag: "br" }),
                    `                    bs.DropdownItem({ separator: true }),`,
                    bs.E({ tag: "br" }),
                    `                    bs.DropdownItem({}, bs.A({ href: '...' }, 'Separated link'))`,
                    bs.E({ tag: "br" }),
                    `                ])`,
                    bs.E({ tag: "br" }),
                    `            ),`,
                    bs.E({ tag: "br" }),
                    `            bs.InputText({})`,
                    bs.E({ tag: "br" }),
                    `    ),`,
                    bs.E({ tag: "br" }),
                    `    bs.Col({ size: bs.Size.Lg, span: 6 },`,
                    bs.E({ tag: "br" }),
                    `       bs.InputGroup({}, [`,
                    bs.E({ tag: "br" }),
                    `           bs.InputText({}),`,
                    bs.E({ tag: "br" }),
                    `           bs.Dropdown(`,
                    bs.E({ tag: "br" }),
                    `                { inputGroupBtn: true, button: { label: 'Action' } },`,
                    bs.E({ tag: "br" }),
                    `                bs.DropdownMenu({}, [`,
                    bs.E({ tag: "br" }),
                    `                    bs.DropdownItem({}, bs.A({ href: '...' }, 'Action')),`,
                    bs.E({ tag: "br" }),
                    `                    bs.DropdownItem({}, bs.A({ href: '...' }, 'Another action')),`,
                    bs.E({ tag: "br" }),
                    `                    bs.DropdownItem({}, bs.A({ href: '...' }, 'Something else here')),`,
                    bs.E({ tag: "br" }),
                    `                    bs.DropdownItem({ separator: true }),`,
                    bs.E({ tag: "br" }),
                    `                    bs.DropdownItem({}, bs.A({ href: '...' }, 'Separated link'))`,
                    bs.E({ tag: "br" }),
                    `                ])`,
                    bs.E({ tag: "br" }),
                    `            )`,
                    bs.E({ tag: "br" }),
                    `        ])`,
                    bs.E({ tag: "br" }),
                    `    )`,
                    bs.E({ tag: "br" }),
                    `])`,
                ])
            )
        ),
    ];
}

function segmentedButtons(): b.IBobrilChildren {
    return [
        b.anchor(bs.H2({ attrs: { id: "input-groups-buttons-segmented" } }, "Segmented buttons")),
        bs.P({}, [
            `As in previous cases - you can use the prepared helper `,
            bs.Code({}, "bs.Dropdown"),
            ` or compose from specific input components.`,
        ]),
        bs.E({ style: styles.bsExample }, [
            bs.Row({}, [
                bs.Col(
                    { size: bs.Size.Lg, span: 6 },
                    bs.InputGroup({}, [
                        bs.Dropdown(
                            {
                                button: { label: "Action" },
                                inputGroupBtn: true,
                                splitted: true,
                            },
                            bs.DropdownMenu({}, [
                                bs.DropdownItem({}, bs.A({ href: "javascript:void(0)" }, "Action")),
                                bs.DropdownItem({}, bs.A({ href: "javascript:void(0)" }, "Another action")),
                                bs.DropdownItem({}, bs.A({ href: "javascript:void(0)" }, "Something else here")),
                                bs.DropdownItem({ separator: true }),
                                bs.DropdownItem({}, bs.A({ href: "javascript:void(0)" }, "Separated link")),
                            ])
                        ),
                        bs.InputText({}),
                    ])
                ),
                bs.Col(
                    { size: bs.Size.Lg, span: 6 },
                    bs.InputGroup({}, [
                        bs.InputText({}),
                        bs.Dropdown(
                            {
                                button: { label: "Action" },
                                inputGroupBtn: true,
                                splitted: true,
                            },
                            bs.DropdownMenu({}, [
                                bs.DropdownItem({}, bs.A({ href: "javascript:void(0)" }, "Action")),
                                bs.DropdownItem({}, bs.A({ href: "javascript:void(0)" }, "Another action")),
                                bs.DropdownItem({}, bs.A({ href: "javascript:void(0)" }, "Something else here")),
                                bs.DropdownItem({ separator: true }),
                                bs.DropdownItem({}, bs.A({ href: "javascript:void(0)" }, "Separated link")),
                            ])
                        ),
                    ])
                ),
            ]),
        ]),
        bs.Figure(
            { style: styles.highlight },
            pre(
                {},
                bs.Code({ style: langJs }, [
                    `bs.Row({}, [`,
                    bs.E({ tag: "br" }),
                    `   bs.Col({ size: bs.Size.Lg, span: 6 },`,
                    bs.E({ tag: "br" }),
                    `       bs.InputGroup({}, [`,
                    bs.E({ tag: "br" }),
                    `           bs.Dropdown(`,
                    bs.E({ tag: "br" }),
                    `                {`,
                    bs.E({ tag: "br" }),
                    `                    button: { label: 'Action' },`,
                    bs.E({ tag: "br" }),
                    `                    inputGroupBtn: true,`,
                    bs.E({ tag: "br" }),
                    `                    splitted: true,`,
                    bs.E({ tag: "br" }),
                    `                },`,
                    bs.E({ tag: "br" }),
                    `                bs.DropdownMenu({}, [`,
                    bs.E({ tag: "br" }),
                    `                    bs.DropdownItem({}, bs.A({ href: '...' }, 'Action')),`,
                    bs.E({ tag: "br" }),
                    `                    bs.DropdownItem({}, bs.A({ href: '...' }, 'Another action')),`,
                    bs.E({ tag: "br" }),
                    `                    bs.DropdownItem({}, bs.A({ href: '...' }, 'Something else here')),`,
                    bs.E({ tag: "br" }),
                    `                    bs.DropdownItem({ separator: true }),`,
                    bs.E({ tag: "br" }),
                    `                    bs.DropdownItem({}, bs.A({ href: '...' }, 'Separated link'))`,
                    bs.E({ tag: "br" }),
                    `                ])`,
                    bs.E({ tag: "br" }),
                    `            ),`,
                    bs.E({ tag: "br" }),
                    `            bs.InputText({})`,
                    bs.E({ tag: "br" }),
                    `    ),`,
                    bs.E({ tag: "br" }),
                    `    bs.Col({ size: bs.Size.Lg, span: 6 },`,
                    bs.E({ tag: "br" }),
                    `       bs.InputGroup({}, [`,
                    bs.E({ tag: "br" }),
                    `           bs.InputText({}),`,
                    bs.E({ tag: "br" }),
                    `           bs.Dropdown(`,
                    bs.E({ tag: "br" }),
                    `                {`,
                    bs.E({ tag: "br" }),
                    `                    button: { label: 'Action' },`,
                    bs.E({ tag: "br" }),
                    `                    inputGroupBtn: true,`,
                    bs.E({ tag: "br" }),
                    `                    splitted: true,`,
                    bs.E({ tag: "br" }),
                    `                },`,
                    bs.E({ tag: "br" }),
                    `                bs.DropdownMenu({}, [`,
                    bs.E({ tag: "br" }),
                    `                    bs.DropdownItem({}, bs.A({ href: '...' }, 'Action')),`,
                    bs.E({ tag: "br" }),
                    `                    bs.DropdownItem({}, bs.A({ href: '...' }, 'Another action')),`,
                    bs.E({ tag: "br" }),
                    `                    bs.DropdownItem({}, bs.A({ href: '...' }, 'Something else here')),`,
                    bs.E({ tag: "br" }),
                    `                    bs.DropdownItem({ separator: true }),`,
                    bs.E({ tag: "br" }),
                    `                    bs.DropdownItem({}, bs.A({ href: '...' }, 'Separated link'))`,
                    bs.E({ tag: "br" }),
                    `                ])`,
                    bs.E({ tag: "br" }),
                    `            )`,
                    bs.E({ tag: "br" }),
                    `        ])`,
                    bs.E({ tag: "br" }),
                    `    )`,
                    bs.E({ tag: "br" }),
                    `])`,
                ])
            )
        ),
    ];
}

function multipleButtons(): b.IBobrilChildren {
    return [
        b.anchor(bs.H2({ attrs: { id: "input-groups-buttons-multiple" } }, "Multiple buttons")),
        bs.P({}, [
            `While you can only have one add-on per side, you can have multiple buttons inside a single `,
            bs.Code({}, "bs.InputGroupBtn"),
            `.`,
        ]),
        bs.E({ style: styles.bsExample }, [
            bs.Row({}, [
                bs.Col(
                    { size: bs.Size.Lg, span: 6 },
                    bs.InputGroup({}, [
                        bs.InputGroupBtn({}, [
                            bs.Button({ aria: { label: "Bold" } }, bs.Glyphicon({ icon: bs.GlyphIcon.Bold })),
                            bs.Button({ aria: { label: "Italic" } }, bs.Glyphicon({ icon: bs.GlyphIcon.Italic })),
                        ]),
                        bs.InputText({
                            placeholder: "Search for...",
                            aria: { label: "..." },
                        }),
                    ])
                ),
                bs.Col(
                    { size: bs.Size.Lg, span: 6 },
                    bs.InputGroup({}, [
                        bs.InputText({
                            placeholder: "Search for...",
                            aria: { label: "..." },
                        }),
                        bs.InputGroupBtn({}, [
                            bs.Button({ aria: { label: "Bold" } }, bs.Glyphicon({ icon: bs.GlyphIcon.Bold })),
                            bs.Button({ aria: { label: "Italic" } }, bs.Glyphicon({ icon: bs.GlyphIcon.Italic })),
                        ]),
                    ])
                ),
            ]),
        ]),
        bs.Figure(
            { style: styles.highlight },
            pre(
                {},
                bs.Code({ style: langJs }, [
                    `bs.Row({}, [`,
                    bs.E({ tag: "br" }),
                    `    bs.Col({ size: bs.Size.Lg, span: 6 },`,
                    bs.E({ tag: "br" }),
                    `        bs.InputGroup({}, [`,
                    bs.E({ tag: "br" }),
                    `            bs.InputGroupBtn({}, [`,
                    bs.E({ tag: "br" }),
                    `                bs.Button({ aria: { label: 'Bold' } }, bs.Glyphicon({ icon: bs.GlyphIcon.Bold }))`,
                    bs.E({ tag: "br" }),
                    `                bs.Button({ aria: { label: 'Italic' } }, bs.Glyphicon({ icon: bs.GlyphIcon.Italic }))`,
                    bs.E({ tag: "br" }),
                    `            ]),`,
                    bs.E({ tag: "br" }),
                    `            bs.InputText({ placeholder: 'Search for...', aria: { label: '...' } })`,
                    bs.E({ tag: "br" }),
                    `        ])`,
                    bs.E({ tag: "br" }),
                    `    ),`,
                    bs.E({ tag: "br" }),
                    `    bs.Col({ size: bs.Size.Lg, span: 6 },`,
                    bs.E({ tag: "br" }),
                    `        bs.InputGroup({}, [`,
                    bs.E({ tag: "br" }),
                    `            bs.InputText({ placeholder: 'Search for...', aria: { label: '...' } }),`,
                    bs.E({ tag: "br" }),
                    `            bs.InputGroupBtn({}, [`,
                    bs.E({ tag: "br" }),
                    `                bs.Button({ aria: { label: 'Bold' } }, bs.Glyphicon({ icon: bs.GlyphIcon.Bold }))`,
                    bs.E({ tag: "br" }),
                    `                bs.Button({ aria: { label: 'Italic' } }, bs.Glyphicon({ icon: bs.GlyphIcon.Italic }))`,
                    bs.E({ tag: "br" }),
                    `            ])`,
                    bs.E({ tag: "br" }),
                    `        ])`,
                    bs.E({ tag: "br" }),
                    `    )`,
                    bs.E({ tag: "br" }),
                    `])`,
                ])
            )
        ),
    ];
}

import * as b from "bobril";
import * as bs from "../../index";
import { styles } from "../bsexample/css";
import { pre, langJs } from "../prettify/pre";
import { section } from "../common/section";

export const forms = b.createVirtualComponent({
    render(_ctx: b.IBobrilCtx, me: b.IBobrilNode) {
        me.children = section(
            {
                header: "Forms",
                id: "forms",
            },
            [
                basicExample(),
                inlineForm(),
                horizontalForm(),
                supportedControls(),
                staticControl(),
                formsControlFocus(),
                formsControlDisabled(),
                formsControlReadonly(),
                formsHelpText(),
                validationStates(),
                controlSizing(),
            ]
        );
    },
});

const items = ["Audi", "BMW", "Bugatti", "Ferrari", "Ford", "Lamborghini", "Mercedes Benz", "Porsche", "Rolls-Royce", "Volkswagen"];

function basicExample(): b.IBobrilChildren {
    return [
        b.anchor(bs.H2({ attrs: { id: "basic-forms" } }, "Basic example")),
        bs.P({}, [
            `Individual form controls automatically receive some global styling. All textual `,
            bs.Code({}, "<input>"),
            `, `,
            bs.Code({}, "<textarea>"),
            `, and `,
            bs.Code({}, "<select>"),
            ` elements with `,
            bs.Code({}, "formControl"),
            ` are set to `,
            bs.Code({}, "width: 100%;"),
            ` by default. Wrap labels and controls in `,
            bs.Code({}, "bs.FormGroup"),
            ` for optimum spacing.`,
        ]),
        bs.E({ style: styles.bsExample }, [
            bs.Form({}, [
                bs.FormGroup({}, [
                    bs.Label({ for: "exampleInputEmail1" }, "Email address"),
                    bs.InputText({
                        id: "exampleInputEmail1",
                        type: bs.InputTextType.Email,
                        placeholder: "Email",
                    }),
                ]),
                bs.FormGroup({}, [
                    bs.Label({ for: "exampleInputPassword1" }, "Password"),
                    bs.InputText({
                        id: "exampleInputPassword1",
                        type: bs.InputTextType.Password,
                        placeholder: "Password",
                    }),
                ]),
                bs.FormGroup({}, [
                    bs.Label({ for: "exampleInputTypeahead1" }, "Typeahead"),
                    bs.InputText({
                        id: "exampleInputTypeahead1",
                        type: bs.InputTextType.Text,
                        placeholder: "Write to search",
                        typeaheadOptions: { source: items },
                    }),
                ]),
                bs.FormGroup({}, [
                    bs.Label({ for: "exampleInputFile" }, "File input"),
                    bs.E({
                        tag: "input",
                        attrs: { type: "file", id: "exampleInputFile" },
                    }),
                    bs.HelpText({}, "Example block-level help text here."),
                ]),
                bs.Checkbox({ label: { title: "Check me out" }, inputCheckbox: {} }),
                bs.Button({ label: "Submit", onClick: () => alert("Clicked!") }),
            ]),
        ]),
        bs.Figure(
            { style: styles.highlight },
            pre(
                {},
                bs.Code({ style: langJs }, [
                    `// At not-rendered place`,
                    bs.E({ tag: "br" }),
                    `const items = ['Audi', 'BMW', 'Bugatti', 'Ferrari', 'Ford', 'Lamborghini', 'Mercedes Benz', 
            'Porsche', 'Rolls-Royce', 'Volkswagen'];`,
                    bs.E({ tag: "br" }),
                    ``,
                    bs.E({ tag: "br" }),
                    `// At rendered place`,
                    bs.E({ tag: "br" }),
                    `bs.Form({}, [`,
                    bs.E({ tag: "br" }),
                    `    bs.FormGroup({}, [`,
                    bs.E({ tag: "br" }),
                    `        bs.Label({ for: 'exampleInputEmail1' }, 'Email address'),`,
                    bs.E({ tag: "br" }),
                    `        bs.InputText({ id: 'exampleInputEmail1', type: bs.InputTextType.Email, placeholder: 'Email' })`,
                    bs.E({ tag: "br" }),
                    `    ]),`,
                    bs.E({ tag: "br" }),
                    `    bs.FormGroup({}, [`,
                    bs.E({ tag: "br" }),
                    `        bs.Label({ for: 'exampleInputPassword1' }, 'Password'),`,
                    bs.E({ tag: "br" }),
                    `        bs.InputText({ id: 'exampleInputPassword1', type: bs.InputTextType.Password, placeholder: 'Password' })`,
                    bs.E({ tag: "br" }),
                    `    ]),`,
                    bs.E({ tag: "br" }),
                    `    bs.FormGroup({}, [`,
                    bs.E({ tag: "br" }),
                    `        bs.Label({ for: 'exampleInputTypeahead1' }, 'Typeahead'),`,
                    bs.E({ tag: "br" }),
                    `        bs.InputText({`,
                    bs.E({ tag: "br" }),
                    `            id: 'exampleInputTypeahead1',`,
                    bs.E({ tag: "br" }),
                    `            type: bs.InputTextType.Text,`,
                    bs.E({ tag: "br" }),
                    `            placeholder: 'Write to search',`,
                    bs.E({ tag: "br" }),
                    `            typeaheadOptions: { source: items }`,
                    bs.E({ tag: "br" }),
                    `        })`,
                    bs.E({ tag: "br" }),
                    `    ]),`,
                    bs.E({ tag: "br" }),
                    `    bs.FormGroup({}, [`,
                    bs.E({ tag: "br" }),
                    `        bs.Label({ for: 'exampleInputFile' }, 'File input'),`,
                    bs.E({ tag: "br" }),
                    `        bs.E({ tag: 'input', attrs: { type: 'file', id: 'exampleInputFile' } }),`,
                    bs.E({ tag: "br" }),
                    `        bs.HelpText({}, 'Example block-level help text here.')`,
                    bs.E({ tag: "br" }),
                    `    ]),`,
                    bs.E({ tag: "br" }),
                    `    bs.Checkbox({ label: { title: 'Check me out' }, inputCheckbox: {} }),`,
                    bs.E({ tag: "br" }),
                    `    bs.Button({ label: 'Submit', onClick: () => alert('Clicked!') })`,
                    bs.E({ tag: "br" }),
                    `])`,
                    bs.E({ tag: "br" }),
                ])
            )
        ),
        bs.E(
            {
                style: [styles.bsCallout, styles.bsCalloutDanger],
                attrs: { id: "callout-formgroup-inputgroup" },
            },
            [
                bs.H4({}, `Don't mix form groups with input groups`),
                bs.P({}, `Do not mix form groups directly with input groups. Instead, nest the input group inside of the form group.`),
            ]
        ),
    ];
}

function inlineForm(): b.IBobrilChildren {
    return [
        b.anchor(bs.H2({ attrs: { id: "forms-inline" } }, "Inline form")),
        bs.P({}, [
            `Set `,
            bs.Code({}, "inline"),
            ` input data property to your form for left-aligned and inline-block controls.`,
            bs.Strong({}, `This only applies to forms within viewports that are at least 768px wide.`),
        ]),
        bs.E(
            {
                style: [styles.bsCallout, styles.bsCalloutDanger],
                attrs: { id: "callout-inline-form-width" },
            },
            [
                bs.H4({}, `May require custom widths`),
                bs.P({}, [
                    `Inputs and selects have `,
                    bs.Code({}, "width: 100%;"),
                    ` applied by default in Bootstrap. Within inline forms, we reset
                that to `,
                    bs.Code({}, "width: auto;"),
                    ` so multiple controls can reside on the same line. Depending on your layout, 
                additional custom widths may be required.`,
                ]),
            ]
        ),
        bs.E(
            {
                style: [styles.bsCallout, styles.bsCalloutDanger],
                attrs: { id: "callout-inline-form-labels" },
            },
            [
                bs.H4({}, `Always add labels`),
                bs.P({}, [
                    `Screen readers will have trouble with your forms if you don't include a label for every input. For these inline forms, 
                you can hide the labels using the `,
                    bs.Code({}, "srOnly"),
                    ` label input data property. There are further alternative methods of providing a label for assistive technologies, 
                such as the `,
                    bs.Code({}, "aria.label"),
                    `, `,
                    bs.Code({}, "aria.labelledby"),
                    ` or `,
                    bs.Code({}, "title"),
                    ` input data property.  If none of these is set, screen readers may resort to using the `,
                    bs.Code({}, "placeholder"),
                    ` attribute defined by `,
                    bs.Code({}, "placeholder"),
                    ` input data property, if present, but note that use of `,
                    bs.Code({}, "placeholder"),
                    ` as a replacement for other labelling methods is not advised.`,
                ]),
            ]
        ),
        bs.E({ style: styles.bsExample }, [
            bs.Form({ inline: true }, [
                bs.FormGroup({}, [
                    bs.Label({ for: "exampleInputName2" }, "Name"),
                    " ",
                    bs.InputText({ id: "exampleInputName2", placeholder: "Jane Doe" }),
                ]),
                " ",
                bs.FormGroup({}, [
                    bs.Label({ for: "exampleInputEmail2" }, "Email"),
                    " ",
                    bs.InputText({
                        id: "exampleInputEmail2",
                        type: bs.InputTextType.Email,
                        placeholder: "jane.doe@example.com",
                    }),
                ]),
                " ",
                bs.Button({
                    label: "Send invitation",
                    onClick: () => alert("Clicked!"),
                }),
            ]),
        ]),
        bs.Figure(
            { style: styles.highlight },
            pre(
                {},
                bs.Code({ style: langJs }, [
                    `bs.Form({ inline: true }, [`,
                    bs.E({ tag: "br" }),
                    `    bs.FormGroup({}, [`,
                    bs.E({ tag: "br" }),
                    `        bs.Label({ for: 'exampleInputName2' }, 'Name'), ' ',`,
                    bs.E({ tag: "br" }),
                    `        bs.InputText({ id: 'exampleInputName2', placeholder: 'Jane Doe' })`,
                    bs.E({ tag: "br" }),
                    `    ]), ' ',`,
                    bs.E({ tag: "br" }),
                    `    bs.FormGroup({}, [`,
                    bs.E({ tag: "br" }),
                    `        bs.Label({ for: 'exampleInputEmail2' }, 'Email'), ' ',`,
                    bs.E({ tag: "br" }),
                    `        bs.InputText({`,
                    bs.E({ tag: "br" }),
                    `            id: 'exampleInputEmail2',`,
                    bs.E({ tag: "br" }),
                    `            type: bs.InputTextType.Email,`,
                    bs.E({ tag: "br" }),
                    `            placeholder: 'jane.doe@example.com'`,
                    bs.E({ tag: "br" }),
                    `        })`,
                    bs.E({ tag: "br" }),
                    `    ]), ' ',`,
                    bs.E({ tag: "br" }),
                    `    bs.Button({ label: 'Send invitation', onClick: () => alert('Clicked!') })`,
                    bs.E({ tag: "br" }),
                    `])`,
                ])
            )
        ),
        bs.E({ style: styles.bsExample }, [
            bs.Form({ inline: true }, [
                bs.FormGroup({}, [
                    bs.Label({ for: "exampleInputEmail3", srOnly: true }, "Email address"),
                    bs.InputText({
                        id: "exampleInputEmail3",
                        type: bs.InputTextType.Email,
                        placeholder: "Email",
                    }),
                ]),
                " ",
                bs.FormGroup({}, [
                    bs.Label({ for: "exampleInputPassword3", srOnly: true }, "Password"),
                    bs.InputText({
                        id: "exampleInputPassword3",
                        type: bs.InputTextType.Password,
                        placeholder: "Password",
                    }),
                ]),
                " ",
                bs.Checkbox({ label: { title: "Remember me" }, inputCheckbox: {} }),
                " ",
                bs.Button({ label: "Sign in", onClick: () => alert("Clicked!") }),
            ]),
        ]),
        bs.Figure(
            { style: styles.highlight },
            pre(
                {},
                bs.Code({ style: langJs }, [
                    `bs.Form({ inline: true }, [`,
                    bs.E({ tag: "br" }),
                    `    bs.FormGroup({}, [`,
                    bs.E({ tag: "br" }),
                    `        bs.Label({ for: 'exampleInputEmail3', srOnly: true }, 'Email address'),`,
                    bs.E({ tag: "br" }),
                    `        bs.InputText({`,
                    bs.E({ tag: "br" }),
                    `            id: 'exampleInputEmail3',`,
                    bs.E({ tag: "br" }),
                    `            type: bs.InputTextType.Email,`,
                    bs.E({ tag: "br" }),
                    `            placeholder: 'Email'`,
                    bs.E({ tag: "br" }),
                    `        })`,
                    bs.E({ tag: "br" }),
                    `    ]), ' ',`,
                    bs.E({ tag: "br" }),
                    `    bs.FormGroup({}, [`,
                    bs.E({ tag: "br" }),
                    `        bs.Label({ for: 'exampleInputPassword3', srOnly: true }, 'Password'),`,
                    bs.E({ tag: "br" }),
                    `        bs.InputText({`,
                    bs.E({ tag: "br" }),
                    `            id: 'exampleInputPassword3',`,
                    bs.E({ tag: "br" }),
                    `            type: bs.InputTextType.Password,`,
                    bs.E({ tag: "br" }),
                    `            placeholder: 'Password'`,
                    bs.E({ tag: "br" }),
                    `        })`,
                    bs.E({ tag: "br" }),
                    `    ]), ' ',`,
                    bs.E({ tag: "br" }),
                    `    bs.Checkbox({ label: { title: 'Remember me' }, inputCheckbox: {} }), ' ',`,
                    bs.E({ tag: "br" }),
                    `    bs.Button({ label: 'Sign in', onClick: () => alert('Clicked!') })`,
                    bs.E({ tag: "br" }),
                    `])`,
                ])
            )
        ),
        bs.E({ style: styles.bsExample }, [
            bs.Form({ inline: true }, [
                bs.FormGroup({}, [
                    bs.Label({ for: "exampleInputAmount", srOnly: true }, "Amount (in dollars)"),
                    bs.InputGroup({}, [
                        bs.InputGroupAddon({}, "$"),
                        bs.InputText({
                            id: "exampleInputAmount",
                            type: bs.InputTextType.Number,
                            placeholder: "Amount",
                        }),
                        bs.InputGroupAddon({}, ".00"),
                    ]),
                ]),
                " ",
                bs.Button({
                    label: "Transfer cash",
                    option: bs.ButtonOption.Primary,
                    onClick: () => alert("Clicked!"),
                }),
            ]),
        ]),
        bs.Figure(
            { style: styles.highlight },
            pre(
                {},
                bs.Code({ style: langJs }, [
                    `bs.Form({ inline: true }, [`,
                    bs.E({ tag: "br" }),
                    `    bs.FormGroup({}, [`,
                    bs.E({ tag: "br" }),
                    `        bs.Label({ for: 'exampleInputAmount', srOnly: true }, 'Amount (in dollars)'),`,
                    bs.E({ tag: "br" }),
                    `        bs.InputGroup({}, [`,
                    bs.E({ tag: "br" }),
                    `            bs.InputGroupAddon({}, '$'),`,
                    bs.E({ tag: "br" }),
                    `            bs.InputText({ id: 'exampleInputAmount', type: bs.InputTextType.Number, placeholder: 'Amount' }),`,
                    bs.E({ tag: "br" }),
                    `            bs.InputGroupAddon({}, '.00')`,
                    bs.E({ tag: "br" }),
                    `        ])     `,
                    bs.E({ tag: "br" }),
                    `    ]), ' ',`,
                    bs.E({ tag: "br" }),
                    `    bs.Button({ label: 'Transfer cash', option: bs.ButtonOption.Primary, onClick: () => alert('Clicked!') })`,
                    bs.E({ tag: "br" }),
                    `])`,
                ])
            )
        ),
    ];
}

function horizontalForm(): b.IBobrilChildren {
    return [
        b.anchor(bs.H2({ attrs: { id: "forms-horizontal" } }, "Horizontal form")),
        bs.P({}, [
            `Use Bobrilstrap's predefined grid styles and components to align labels and groups of form controls 
            in a horizontal layout by adding `,
            bs.Code({}, "horizontal"),
            ` form input data property. Doing so changes `,
            bs.Code({}, "bs.FormGroup"),
            `s to behave as grid rows, so no need for `,
            bs.Code({}, "bs.Row"),
            `.`,
        ]),
        bs.E({ style: styles.bsExample }, [
            bs.Form({ horizontal: true }, [
                bs.FormGroup({}, [
                    bs.Label(
                        {
                            controlLabel: true,
                            for: "inputEmail3",
                            style: bs.colStyles(bs.Size.Sm)(2),
                        },
                        "Email"
                    ),
                    bs.Col(
                        { size: bs.Size.Sm, span: 10 },
                        bs.InputText({
                            id: "inputEmail3",
                            type: bs.InputTextType.Email,
                            placeholder: "Email",
                        })
                    ),
                ]),
                bs.FormGroup({}, [
                    bs.Label(
                        {
                            controlLabel: true,
                            for: "inputPassword3",
                            style: bs.colStyles(bs.Size.Sm)(2),
                        },
                        "Password"
                    ),
                    bs.Col(
                        { size: bs.Size.Sm, span: 10 },
                        bs.InputText({
                            id: "inputPassword3",
                            type: bs.InputTextType.Password,
                            placeholder: "Password",
                        })
                    ),
                ]),
                bs.FormGroup({}, [
                    bs.Col(
                        {
                            size: bs.Size.Sm,
                            span: 10,
                            offsets: [{ size: bs.Size.Sm, span: 2 }],
                        },
                        bs.Checkbox({ label: { title: "Remember me" } })
                    ),
                ]),
                bs.FormGroup({}, [
                    bs.Col(
                        {
                            size: bs.Size.Sm,
                            span: 10,
                            offsets: [{ size: bs.Size.Sm, span: 2 }],
                        },
                        bs.Button({ label: "Sign in", onClick: () => alert("Clicked!") })
                    ),
                ]),
            ]),
        ]),
        bs.Figure(
            { style: styles.highlight },
            pre(
                {},
                bs.Code({ style: langJs }, [
                    `bs.Form({ horizontal: true }, [`,
                    bs.E({ tag: "br" }),
                    `    bs.FormGroup({}, [`,
                    bs.E({ tag: "br" }),
                    `        bs.Label({ controlLabel: true, for: 'inputEmail3', style: bs.colStyles(bs.Size.Sm)(2) }, 'Email'),`,
                    bs.E({ tag: "br" }),
                    `        bs.Col({ size: bs.Size.Sm, span: 10 },`,
                    bs.E({ tag: "br" }),
                    `            bs.InputText({ id: 'inputEmail3', type: bs.InputTextType.Email, placeholder: 'Email' }))`,
                    bs.E({ tag: "br" }),
                    `    ]),`,
                    bs.E({ tag: "br" }),
                    `    bs.FormGroup({}, [`,
                    bs.E({ tag: "br" }),
                    `        bs.Label({ controlLabel: true, for: 'inputPassword3', style: bs.colStyles(bs.Size.Sm)(2) }, 'Password'),`,
                    bs.E({ tag: "br" }),
                    `        bs.Col({ size: bs.Size.Sm, span: 10 },`,
                    bs.E({ tag: "br" }),
                    `            bs.InputText({ id: 'inputPassword3', type: bs.InputTextType.Password, placeholder: 'Password' }))`,
                    bs.E({ tag: "br" }),
                    `    ]),`,
                    bs.E({ tag: "br" }),
                    `    bs.FormGroup({}, [`,
                    bs.E({ tag: "br" }),
                    `        bs.Col({ size: bs.Size.Sm, span: 10, offsets: [{ size: bs.Size.Sm, span: 2 }] },`,
                    bs.E({ tag: "br" }),
                    `             bs.Checkbox({ label: { title: 'Remember me' } }))`,
                    bs.E({ tag: "br" }),
                    `    ]),`,
                    bs.E({ tag: "br" }),
                    `    bs.FormGroup({}, [`,
                    bs.E({ tag: "br" }),
                    `        bs.Col({ size: bs.Size.Sm, span: 10, offsets: [{ size: bs.Size.Sm, span: 2 }] },`,
                    bs.E({ tag: "br" }),
                    `            bs.Button({ label: 'Sign in', onClick: () => alert('Clicked!') })`,
                    bs.E({ tag: "br" }),
                    `        )`,
                    bs.E({ tag: "br" }),
                    `    ])`,
                    bs.E({ tag: "br" }),
                    `])`,
                ])
            )
        ),
    ];
}

function supportedControls(): b.IBobrilChildren {
    return [
        b.anchor(bs.H2({ attrs: { id: "forms-controls" } }, "Supported controls")),
        bs.P({}, [
            `Most common form control, text-based input fields (`,
            bs.Code({}, "bs.InputText"),
            ` component). Includes support for all HTML5 types: `,
            bs.Code({}, "text"),
            `, `,
            bs.Code({}, "password"),
            `, `,
            bs.Code({}, "datetime"),
            `, `,
            bs.Code({}, "datetime-local"),
            `, `,
            bs.Code({}, "date"),
            `, `,
            bs.Code({}, "month"),
            `, `,
            bs.Code({}, "time"),
            `, `,
            bs.Code({}, "week"),
            `, `,
            bs.Code({}, "number"),
            `, `,
            bs.Code({}, "email"),
            `, `,
            bs.Code({}, "url"),
            `, `,
            bs.Code({}, "search"),
            `, `,
            bs.Code({}, "tel"),
            ` and `,
            bs.Code({}, "color"),
            `.`,
        ]),
        bs.E(
            {
                style: [styles.bsCallout, styles.bsCalloutDanger],
                attrs: { id: "callout-input-needs-type" },
            },
            [
                bs.H4({}, `Type declaration required`),
                bs.P({}, [
                    `Inputs type should be defined by the `,
                    bs.Code({}, "type"),
                    ` input data property or the `,
                    bs.Code({}, "bs.InputTextType.Text"),
                    ` will be used as the default one.`,
                ]),
            ]
        ),
        bs.E({ style: styles.bsExample }, [
            bs.Form({}, [
                bs.FormGroup({}, bs.InputText({ placeholder: "Text input" })),
                bs.FormGroup(
                    {},
                    bs.InputText({
                        type: bs.InputTextType.Number,
                        placeholder: "Number input",
                    })
                ),
            ]),
        ]),
        bs.Figure(
            { style: styles.highlight },
            pre(
                {},
                bs.Code({ style: langJs }, [
                    `bs.InputText({ placeholder: 'Text input' })`,
                    bs.E({ tag: "br" }),
                    `bs.InputText({ type: bs.InputTextType.Number, placeholder: 'Number input' })`,
                ])
            )
        ),
        bs.E(
            {
                style: [styles.bsCallout, styles.bsCalloutInfo],
                attrs: { id: "callout-xref-input-group" },
            },
            [
                bs.H4({}, `Input groups`),
                bs.P({}, [
                    `To add integrated text or buttons before and/or after any text-based `,
                    bs.Code({}, "<input>"),
                    `, check out the input `,
                    bs.Code({}, "bs.InputGroup"),
                    `.`,
                ]),
            ]
        ),
        bs.H3({ attrs: { id: "textarea" } }, "Textarea"),
        bs.P({}, [`Form control which supports multiple lines of text. Change `, bs.Code({}, "rows"), ` attribute as necessary.`]),
        bs.E({ style: styles.bsExample }, [bs.FormGroup({}, bs.Textarea({ rows: 3 }))]),
        bs.Figure({ style: styles.highlight }, pre({}, bs.Code({ style: langJs }, [`bs.Textarea({ rows: 3 })`]))),
        bs.H3({ attrs: { id: "checkboxes-and-radios" } }, "Checkboxes and radios"),
        bs.P({}, `Checkboxes are for selecting one or several options in a list, while radios are for selecting one option from many.`),
        bs.H4({ attrs: { id: "default-stacked" } }, "Default (stacked)"),
        bs.E({ style: styles.bsExample }, [
            bs.Form({}, [
                bs.Checkbox({
                    label: {
                        title: "Option one is this and that—be sure to include why it's great",
                    },
                }),
                bs.Checkbox({
                    label: { title: "Option two is disabled" },
                    inputCheckbox: { disabled: true },
                }),
                bs.E({ tag: "br" }),
                bs.Radio({
                    label: {
                        title: "Option one is this and that—be sure to include why it's great",
                    },
                    inputRadio: {
                        id: "optionsRadios1",
                        value: "option1",
                        name: "optionsRadios",
                    },
                }),
                bs.Radio({
                    label: {
                        title: "Option two can be something else and selecting it will deselect option one",
                    },
                    inputRadio: {
                        id: "optionsRadios2",
                        value: "option2",
                        name: "optionsRadios",
                    },
                }),
                bs.Radio({
                    label: { title: "Option three is disabled" },
                    inputRadio: {
                        id: "optionsRadios3",
                        value: "option3",
                        name: "optionsRadios",
                        disabled: true,
                    },
                }),
            ]),
        ]),
        bs.Figure(
            { style: styles.highlight },
            pre(
                {},
                bs.Code({ style: langJs }, [
                    `bs.Checkbox({`,
                    bs.E({ tag: "br" }),
                    `    label: { title: 'Option one is this and that—be sure to include why it\\'s great' }`,
                    bs.E({ tag: "br" }),
                    `}),`,
                    bs.E({ tag: "br" }),
                    `bs.Checkbox({`,
                    bs.E({ tag: "br" }),
                    `    label: { title: 'Option two is disabled' },`,
                    bs.E({ tag: "br" }),
                    `    inputCheckbox: { disabled: true }`,
                    bs.E({ tag: "br" }),
                    `}),`,
                    bs.E({ tag: "br" }),
                    `bs.Radio({`,
                    bs.E({ tag: "br" }),
                    `    label: { title: 'Option one is this and that—be sure to include why it\\'s great' },`,
                    bs.E({ tag: "br" }),
                    `    inputRadio: { id: 'optionsRadios1', value: 'option1', name: 'optionsRadios' }`,
                    bs.E({ tag: "br" }),
                    `}),`,
                    bs.E({ tag: "br" }),
                    `bs.Radio({`,
                    bs.E({ tag: "br" }),
                    `    label: { title: 'Option two can be something else and selecting it will deselect option one' },`,
                    bs.E({ tag: "br" }),
                    `    inputRadio: { id: 'optionsRadios2', value: 'option2', name: 'optionsRadios' }`,
                    bs.E({ tag: "br" }),
                    `}),`,
                    bs.E({ tag: "br" }),
                    `bs.Radio({`,
                    bs.E({ tag: "br" }),
                    `    label: { title: 'Option three is disabled' },`,
                    bs.E({ tag: "br" }),
                    `    inputRadio: { id: 'optionsRadios3', value: 'option3', name: 'optionsRadios', disabled: true }`,
                    bs.E({ tag: "br" }),
                    `})`,
                ])
            )
        ),
        bs.H4({ attrs: { id: "inline-checkboxes-and-radios" } }, "Inline checkboxes and radios"),
        bs.P({}, [
            `Use the `,
            bs.Code({}, "inline"),
            ` input data property on a series of checkboxes or radios for controls that appear on the same line.`,
        ]),
        bs.E({ style: styles.bsExample }, [
            bs.Form({}, [
                bs.Checkbox({
                    inline: true,
                    label: { title: "1" },
                    inputCheckbox: { id: "inlineCheckbox1" },
                }),
                bs.Checkbox({
                    inline: true,
                    label: { title: "2" },
                    inputCheckbox: { id: "inlineCheckbox2" },
                }),
                bs.Checkbox({
                    inline: true,
                    label: { title: "3" },
                    inputCheckbox: { id: "inlineCheckbox3" },
                }),
            ]),
            bs.E({ tag: "br" }),
            bs.Form({}, [
                bs.Radio({
                    inline: true,
                    label: { title: "1" },
                    inputRadio: {
                        id: "inlineRadio1",
                        value: "option1",
                        name: "inlineRadioOptions",
                    },
                }),
                bs.Radio({
                    inline: true,
                    label: { title: "2" },
                    inputRadio: {
                        id: "inlineRadio2",
                        value: "option2",
                        name: "inlineRadioOptions",
                    },
                }),
                bs.Radio({
                    inline: true,
                    label: { title: "3" },
                    inputRadio: {
                        id: "inlineRadio3",
                        value: "option3",
                        name: "inlineRadioOptions",
                    },
                }),
            ]),
        ]),
        bs.Figure(
            { style: styles.highlight },
            pre(
                {},
                bs.Code({ style: langJs }, [
                    `bs.Checkbox({ inline: true, label: { title: '1' }, inputCheckbox: { id: 'inlineCheckbox1' } }),`,
                    bs.E({ tag: "br" }),
                    `bs.Checkbox({ inline: true, label: { title: '2' }, inputCheckbox: { id: 'inlineCheckbox2' } }),`,
                    bs.E({ tag: "br" }),
                    `bs.Checkbox({ inline: true, label: { title: '3' }, inputCheckbox: { id: 'inlineCheckbox3' } }),`,
                    bs.E({ tag: "br" }),
                    `bs.Radio({`,
                    bs.E({ tag: "br" }),
                    `    inline: true,`,
                    bs.E({ tag: "br" }),
                    `    label: { title: '1' },`,
                    bs.E({ tag: "br" }),
                    `    inputRadio: { id: 'inlineRadio1', value: 'option1', name: 'inlineRadioOptions' }`,
                    bs.E({ tag: "br" }),
                    `}),`,
                    bs.E({ tag: "br" }),
                    `bs.Radio({`,
                    bs.E({ tag: "br" }),
                    `    inline: true,`,
                    bs.E({ tag: "br" }),
                    `    label: { title: '2' },`,
                    bs.E({ tag: "br" }),
                    `    inputRadio: { id: 'inlineRadio2', value: 'option2', name: 'inlineRadioOptions' }`,
                    bs.E({ tag: "br" }),
                    `}),`,
                    bs.E({ tag: "br" }),
                    `bs.Radio({`,
                    bs.E({ tag: "br" }),
                    `    inline: true,`,
                    bs.E({ tag: "br" }),
                    `    label: { title: '3' },`,
                    bs.E({ tag: "br" }),
                    `    inputRadio: { id: 'inlineRadio3', value: 'option3', name: 'inlineRadioOptions' }`,
                    bs.E({ tag: "br" }),
                    `})`,
                ])
            )
        ),
        bs.H4({ attrs: { id: "checkboxes-and-radios-without-la" } }, "Checkboxes and radios without label text"),
        bs.P({}, [
            `Should you have no label definition, the input is positioned as you'd expect.`,
            bs.Strong({}, `Currently only works on non-inline checkboxes and radios. `),
            `Remember to still provide some form of label for assistive technologies (for instance, using `,
            bs.Code({}, "aria.label"),
            ,
            `).`,
        ]),
        bs.E({ style: styles.bsExample }, [
            bs.Form({}, [
                bs.Checkbox({
                    inputCheckbox: { id: "blankCheckbox", aria: { label: "..." } },
                }),
                bs.Radio({
                    inputRadio: {
                        id: "blankRadio1",
                        value: "option1",
                        name: "blankRadio",
                        aria: { label: "..." },
                    },
                }),
            ]),
        ]),
        bs.Figure(
            { style: styles.highlight },
            pre(
                {},
                bs.Code({ style: langJs }, [
                    `bs.Checkbox({ inputCheckbox: { id: 'blankCheckbox', aria: { label: '...' } } }),`,
                    bs.E({ tag: "br" }),
                    `bs.Radio({ inputRadio: { id: 'blankRadio1', value: 'option1', name: 'blankRadio', aria: { label: '...' } } })`,
                ])
            )
        ),
        bs.H4({ attrs: { id: "selects" } }, "Selects"),
        bs.P({}, [
            `Note that many native select menus—namely in Safari and Chrome—have rounded corners that cannot be modified via `,
            bs.Code({}, "border-radius"),
            ` properties.`,
        ]),
        bs.E({ style: styles.bsExample }, [
            bs.Form({}, [
                bs.Select({
                    options: [{ value: "1" }, { value: "2" }, { value: "3" }, { value: "4" }, { value: "5" }],
                }),
            ]),
        ]),
        bs.Figure(
            { style: styles.highlight },
            pre(
                {},
                bs.Code({ style: langJs }, [
                    `bs.Select({`,
                    bs.E({ tag: "br" }),
                    `    options: [{ value: '1' }, { value: '2' }, { value: '3' }, { value: '4' }, { value: '5' }]`,
                    bs.E({ tag: "br" }),
                    `})`,
                ])
            )
        ),
        bs.P({}, [
            `For `,
            bs.Code({}, "select"),
            ` components with the `,
            bs.Code({}, "multiple"),
            ` input data property set to `,
            bs.Code({}, "true"),
            `, multiple options are shown by default.`,
        ]),
        bs.E({ style: styles.bsExample }, [
            bs.Form({}, [
                bs.Select({
                    multiple: true,
                    options: [{ value: "1" }, { value: "2" }, { value: "3" }, { value: "4" }, { value: "5" }],
                }),
            ]),
        ]),
        bs.Figure(
            { style: styles.highlight },
            pre(
                {},
                bs.Code({ style: langJs }, [
                    `bs.Select({`,
                    bs.E({ tag: "br" }),
                    `    multiple: true,`,
                    bs.E({ tag: "br" }),
                    `    options: [{ value: '1' }, { value: '2' }, { value: '3' }, { value: '4' }, { value: '5' }]`,
                    bs.E({ tag: "br" }),
                    `})`,
                ])
            )
        ),
    ];
}

function staticControl(): b.IBobrilChildren {
    return [
        b.anchor(bs.H2({ attrs: { id: "forms-controls-static" } }, "Static control")),
        bs.P({}, [
            `When you need to place plain text next to a form label within a form, use the `,
            bs.Code({}, "formControlStatic"),
            ` input data property of `,
            bs.Code({}, "bs.Paragraph"),
            `.`,
        ]),
        bs.E({ style: styles.bsExample }, [
            bs.Form({ horizontal: true }, [
                bs.FormGroup({}, [
                    bs.Label({ controlLabel: true, style: bs.colStyles(bs.Size.Sm)(2) }, "Email"),
                    bs.Col({ size: bs.Size.Sm, span: 10 }, bs.P({ formControlStatic: true }, "email@example.com")),
                ]),
                bs.FormGroup({}, [
                    bs.Label(
                        {
                            controlLabel: true,
                            for: "inputPassword",
                            style: bs.colStyles(bs.Size.Sm)(2),
                        },
                        "Password"
                    ),
                    bs.Col(
                        { size: bs.Size.Sm, span: 10 },
                        bs.InputText({
                            id: "inputPassword",
                            type: bs.InputTextType.Password,
                            placeholder: "Password",
                        })
                    ),
                ]),
            ]),
        ]),
        bs.Figure(
            { style: styles.highlight },
            pre(
                {},
                bs.Code({ style: langJs }, [
                    `bs.Form({ horizontal: true }, [`,
                    bs.E({ tag: "br" }),
                    `    bs.FormGroup({}, [`,
                    bs.E({ tag: "br" }),
                    `        bs.Label({ controlLabel: true, style: bs.colStyles(bs.Size.Sm)(2) }, 'Email'),`,
                    bs.E({ tag: "br" }),
                    `        bs.Col({ size: bs.Size.sm, span: 10 },`,
                    bs.E({ tag: "br" }),
                    `            bs.P({ formControlStatic: true }, 'email@example.com'))`,
                    bs.E({ tag: "br" }),
                    `    ]),`,
                    bs.E({ tag: "br" }),
                    `    bs.FormGroup({}, [`,
                    bs.E({ tag: "br" }),
                    `        bs.Label({ controlLabel: true, for: 'inputPassword', style: bs.colStyles(bs.Size.Sm)(2) }, 'Password'),`,
                    bs.E({ tag: "br" }),
                    `        bs.Col({ size: bs.Size.Sm, span: 10 },`,
                    bs.E({ tag: "br" }),
                    `            bs.InputText({ id: 'inputPassword', type: bs.InputTextType.Password, placeholder: 'Password' }))`,
                    bs.E({ tag: "br" }),
                    `    ])`,
                    bs.E({ tag: "br" }),
                    `])`,
                ])
            )
        ),
    ];
}

function formsControlFocus(): b.IBobrilChildren {
    return [
        b.anchor(bs.H2({ attrs: { id: "forms-control-focus" } }, "Focus state")),
        bs.P({}, [
            `Bootstrap removes the default `,
            bs.Code({}, "outline"),
            ` styles on some form controls and apply a `,
            bs.Code({}, "box-shadow"),
            ` in its place for `,
            bs.Code({}, ":focus"),
            `.`,
        ]),
        bs.E({ style: styles.bsExample }, [
            bs.Form({}, [
                bs.InputText({
                    id: "focusedInput",
                    placeholder: "Demonstrative focus state",
                }),
            ]),
        ]),
        bs.E(
            {
                style: [styles.bsCallout, styles.bsCalloutInfo],
                attrs: { id: "callout-focus-demo" },
            },
            [
                bs.H4({}, [`Demo `, bs.Code({}, ":focus"), `state`]),
                bs.P({}, [
                    `The above example input uses custom styles in our documentation to demonstrate the `,
                    bs.Code({}, ":focus"),
                    ` state on a `,
                    bs.Code({}, ".form-control"),
                    `.`,
                ]),
            ]
        ),
    ];
}

function formsControlDisabled(): b.IBobrilChildren {
    return [
        b.anchor(bs.H2({ attrs: { id: "forms-control-disabled" } }, "Disabled state")),
        bs.P({}, [
            `Set the `,
            bs.Code({}, "disabled"),
            ` input comonent data property to prevent user interactions. Disabled inputs appear lighter 
            and add a `,
            bs.Code({}, "not-allowed"),
            ` cursor.`,
        ]),
        bs.E({ style: styles.bsExample }, [
            bs.Form({}, [
                bs.InputText({
                    id: "disabledInput",
                    placeholder: "Disabled input here...",
                    disabled: true,
                }),
            ]),
        ]),
        bs.Figure(
            { style: styles.highlight },
            pre(
                {},
                bs.Code({ style: langJs }, [
                    `bs.Form({}, [`,
                    bs.E({ tag: "br" }),
                    `    bs.InputText({ id: 'disabledInput', placeholder: 'Disabled input here...', disabled: true })`,
                    bs.E({ tag: "br" }),
                    `])`,
                ])
            )
        ),
    ];
}

function formsControlReadonly(): b.IBobrilChildren {
    return [
        b.anchor(bs.H2({ attrs: { id: "forms-control-readonly" } }, "Readonly state")),
        bs.P({}, [
            `Set the `,
            bs.Code({}, "readonly "),
            ` input comonent data property to prevent modification of the input's value. Read-only 
            inputs appear lighter (just like disabled inputs), but retain the standard cursor.`,
        ]),
        bs.E({ style: styles.bsExample }, [bs.Form({}, [bs.InputText({ placeholder: "Readonly input here…", readonly: true })])]),
        bs.Figure(
            { style: styles.highlight },
            pre(
                {},
                bs.Code({ style: langJs }, [
                    `bs.Form({}, [`,
                    bs.E({ tag: "br" }),
                    `     bs.InputText({ placeholder: 'Readonly input here…', readonly: true })`,
                    bs.E({ tag: "br" }),
                    `])`,
                ])
            )
        ),
    ];
}

function formsHelpText(): b.IBobrilChildren {
    return [
        b.anchor(bs.H2({ attrs: { id: "forms-help-text" } }, "Help text")),
        bs.P({}, `Block level help text for form controls..`),
        bs.E(
            {
                style: [styles.bsCallout, styles.bsCalloutInfo],
                attrs: { id: "callout-help-text-accessibility" },
            },
            [
                bs.H4({}, `Associating help text with form controls`),
                bs.P({}, [
                    `Help text should be explicitly associated with the form control it relates to using the `,
                    bs.Code({}, "aria.describedby"),
                    ` input data property. This will ensure that assistive technologies – such as screen readers 
                – will announce this help text when the user focuses or enters the control.`,
                ]),
            ]
        ),
        bs.E({ style: styles.bsExample }, [
            bs.Form({}, [
                bs.FormGroup({}, [
                    bs.Label({ for: "inputHelpBlock", title: "Input with help text" }),
                    bs.InputText({
                        id: "inputHelpBlock",
                        aria: { describedby: "helpBlock" },
                    }),
                ]),
                bs.HelpText({ id: "helpBlock" }, "A block of help text that breaks onto a new line and may extend beyond one line."),
            ]),
        ]),
        bs.Figure(
            { style: styles.highlight },
            pre(
                {},
                bs.Code({ style: langJs }, [
                    `bs.Form({}, [`,
                    bs.E({ tag: "br" }),
                    `     bs.FormGroup({}, [`,
                    bs.E({ tag: "br" }),
                    `         bs.Label({ for: 'inputHelpBlock', title: 'Input with help text' }),`,
                    bs.E({ tag: "br" }),
                    `         bs.InputText({ id: 'inputHelpBlock', aria: { describedby: 'helpBlock' } })`,
                    bs.E({ tag: "br" }),
                    `     ]),`,
                    bs.E({ tag: "br" }),
                    `     bs.HelpText(`,
                    bs.E({ tag: "br" }),
                    `         { id: 'helpBlock' },`,
                    bs.E({ tag: "br" }),
                    `         'A block of help text that breaks onto a new line and may extend beyond one line.'`,
                    bs.E({ tag: "br" }),
                    `     )`,
                    bs.E({ tag: "br" }),
                    `])`,
                ])
            )
        ),
    ];
}

function validationStates(): b.IBobrilChildren {
    return [
        b.anchor(bs.H2({ attrs: { id: "forms-control-validation" } }, "Validation states")),
        bs.P({}, [
            `Bootstrap includes validation styles for error, warning, and success states on form controls. To use, set `,
            bs.Code({}, "validationState"),
            ` input data property to the `,
            bs.Code({}, "bs.FormGroup"),
            ` node. Any node with defined`,
            bs.Code({}, "controlLabel"),
            ` or `,
            bs.Code({}, "formControl"),
            ` style (implicitly by the property or by the style) and `,
            bs.Code({}, "bs.HelpText"),
            `s within that `,
            bs.Code({}, "bs.FormGroup"),
            ` will receive the validation styles.`,
        ]),
        bs.E(
            {
                style: [styles.bsCallout, styles.bsCalloutDanger],
                attrs: { id: "callout-form-validation-state-accessibility" },
            },
            [
                bs.H4({}, `Conveying validation state to assistive technologies and colorblind users`),
                bs.P(
                    {},
                    `Using these validation styles to denote the state of a form control only provides a visual, color-based indication, 
            which will not be conveyed to users of assistive technologies - such as screen readers - or to colorblind users.`
                ),
                bs.P({}, [
                    `Ensure that an alternative indication of state is also provided. For instance, you can include a hint about state in the 
                form control's <label> text itself (as is the case in the following code example), include a Glyphicon (with appropriate 
                alternative text using the `,
                    bs.Code({}, "srOnly"),
                    ` input date property or style), or by providing an additional help text 
                block. Specifically for assistive technologies, invalid form controls can also be assigned an `,
                    bs.Code({}, "aria.invalid"),
                    `input date property.`,
                ]),
            ]
        ),
        bs.E({ style: styles.bsExample }, [
            bs.Form({}, [
                bs.FormGroup({ validationState: bs.ValidationState.Success }, [
                    bs.Label({
                        for: "inputSuccess1",
                        title: "Input with success",
                        controlLabel: true,
                    }),
                    bs.InputText({
                        id: "inputSuccess1",
                        aria: { describedby: "helpBlock2" },
                    }),
                    bs.HelpText({ id: "helpBlock2" }, "A block of help text that breaks onto a new line and may extend beyond one line."),
                ]),
                bs.FormGroup({ validationState: bs.ValidationState.Warning }, [
                    bs.Label({
                        for: "inputWarning1",
                        title: "Input with warning",
                        controlLabel: true,
                    }),
                    bs.InputText({ id: "inputWarning1" }),
                ]),
                bs.FormGroup({ validationState: bs.ValidationState.Error }, [
                    bs.Label({
                        for: "inputError1",
                        title: "Input with error",
                        controlLabel: true,
                    }),
                    bs.InputText({ id: "inputError1" }),
                ]),
                bs.E({ style: bs.validationStyles.hasSuccess }, [
                    bs.Checkbox({
                        label: { title: "Checkbox with success" },
                        inputCheckbox: { id: "checkboxSuccess" },
                    }),
                ]),
                bs.E({ style: bs.validationStyles.hasWarning }, [
                    bs.Checkbox({
                        label: { title: "Checkbox with warning" },
                        inputCheckbox: { id: "checkboxWarning" },
                    }),
                ]),
                bs.E({ style: bs.validationStyles.hasError }, [
                    bs.Checkbox({
                        label: { title: "Checkbox with error" },
                        inputCheckbox: { id: "checkboxError" },
                    }),
                ]),
            ]),
        ]),
        bs.Figure(
            { style: styles.highlight },
            pre(
                {},
                bs.Code({ style: langJs }, [
                    `bs.Form({}, [`,
                    bs.E({ tag: "br" }),
                    `    bs.FormGroup({ validationState: bs.ValidationState.Success }, [`,
                    bs.E({ tag: "br" }),
                    `        bs.Label({ for: 'inputSuccess1', title: 'Input with success', controlLabel: true }),`,
                    bs.E({ tag: "br" }),
                    `        bs.InputText({ id: 'inputSuccess1', aria: { describedby: 'helpBlock2' } }),`,
                    bs.E({ tag: "br" }),
                    `        bs.HelpText(`,
                    bs.E({ tag: "br" }),
                    `            { id: 'helpBlock2' },`,
                    bs.E({ tag: "br" }),
                    `            'A block of help text that breaks onto a new line and may extend beyond one line.'`,
                    bs.E({ tag: "br" }),
                    `        )`,
                    bs.E({ tag: "br" }),
                    `    ]),`,
                    bs.E({ tag: "br" }),
                    `    bs.FormGroup({ validationState: bs.ValidationState.Warning }, [`,
                    bs.E({ tag: "br" }),
                    `        bs.Label({ for: 'inputWarning1', title: 'Input with warning', controlLabel: true }),`,
                    bs.E({ tag: "br" }),
                    `        bs.InputText({ id: 'inputWarning1' })`,
                    bs.E({ tag: "br" }),
                    `    ]),`,
                    bs.E({ tag: "br" }),
                    `    bs.FormGroup({ validationState: bs.ValidationState.Error }, [`,
                    bs.E({ tag: "br" }),
                    `        bs.Label({ for: 'inputError1', title: 'Input with error', controlLabel: true }),`,
                    bs.E({ tag: "br" }),
                    `        bs.InputText({ id: 'inputError1' })`,
                    bs.E({ tag: "br" }),
                    `    ]),`,
                    bs.E({ tag: "br" }),
                    `    bs.E({ style: bs.validationStyles.hasSuccess }, [`,
                    bs.E({ tag: "br" }),
                    `        bs.Checkbox({`,
                    bs.E({ tag: "br" }),
                    `            label: { title: 'Checkbox with success' },`,
                    bs.E({ tag: "br" }),
                    `            inputCheckbox: { id: 'checkboxSuccess' }`,
                    bs.E({ tag: "br" }),
                    `        })`,
                    bs.E({ tag: "br" }),
                    `    ]),`,
                    bs.E({ tag: "br" }),
                    `    bs.E({ style: bs.validationStyles.hasWarning }, [`,
                    bs.E({ tag: "br" }),
                    `        bs.Checkbox({`,
                    bs.E({ tag: "br" }),
                    `            label: { title: 'Checkbox with warning' },`,
                    bs.E({ tag: "br" }),
                    `            inputCheckbox: { id: 'checkboxWarning' }`,
                    bs.E({ tag: "br" }),
                    `        })`,
                    bs.E({ tag: "br" }),
                    `    ]),`,
                    bs.E({ tag: "br" }),
                    `    bs.E({ style: bs.validationStyles.hasError }, [`,
                    bs.E({ tag: "br" }),
                    `        bs.Checkbox({`,
                    bs.E({ tag: "br" }),
                    `            label: { title: 'Checkbox with error' },`,
                    bs.E({ tag: "br" }),
                    `            inputCheckbox: { id: 'checkboxError' }`,
                    bs.E({ tag: "br" }),
                    `        })`,
                    bs.E({ tag: "br" }),
                    `    ])`,
                    bs.E({ tag: "br" }),
                    `])`,
                ])
            )
        ),
    ];
}

function controlSizing(): b.IBobrilChildren {
    return [
        b.anchor(bs.H2({ attrs: { id: "forms-control-sizes" } }, "Control sizing")),
        bs.P({}, [
            `Set heights using `,
            bs.Code({}, "size"),
            ` input data property and set widths using grid column component `,
            bs.Code({}, "bs.Col"),
            ` or by `,
            bs.Code({}, "bs.colStyles"),
            `.`,
        ]),
        bs.H3({}, "Height sizing"),
        bs.P({}, `Create taller or shorter form controls that match button sizes.`),
        bs.E({ style: [styles.bsExample, styles.bsExampleControlSizing] }, [
            bs.Form({}, [
                bs.E({ style: styles.controls }, [
                    bs.InputText({
                        size: bs.InputTextSize.Lg,
                        placeholder: "bs.InputTextSize.Lg",
                    }),
                    bs.InputText({ placeholder: "default" }),
                    bs.InputText({
                        size: bs.InputTextSize.Sm,
                        placeholder: "bs.InputTextSize.Sm",
                    }),
                    bs.Select({
                        size: bs.SelectSize.Lg,
                        options: [{ value: "bs.SelectSize.Lg" }],
                    }),
                    bs.Select({ options: [{ value: "default" }] }),
                    bs.Select({
                        size: bs.SelectSize.Sm,
                        options: [{ value: "bs.SelectSize.Sm" }],
                    }),
                ]),
            ]),
        ]),
        bs.Figure(
            { style: styles.highlight },
            pre(
                {},
                bs.Code({ style: langJs }, [
                    `bs.InputText({ size: bs.InputTextSize.Lg, placeholder: 'bs.InputTextSize.Lg' }),`,
                    bs.E({ tag: "br" }),
                    `bs.InputText({ placeholder: 'default' }),`,
                    bs.E({ tag: "br" }),
                    `bs.InputText({ size: bs.InputTextSize.Sm, placeholder: 'bs.InputTextSize.Sm' }),`,
                    bs.E({ tag: "br" }),
                    bs.E({ tag: "br" }),
                    `bs.Select({ size: bs.SelectSize.Lg, options: [{ value: 'bs.SelectSize.Lg' }] }),`,
                    bs.E({ tag: "br" }),
                    `bs.Select({ options: [{ value: 'default' }] }),`,
                    bs.E({ tag: "br" }),
                    `bs.Select({ size: bs.SelectSize.Sm, options: [{ value: 'bs.SelectSize.Sm' }] })`,
                ])
            )
        ),
        bs.H3({}, "Horizontal form group sizes"),
        bs.P({}, [
            `Quickly size labels and form controls within horizontal form by adding setting `,
            bs.Code({}, "size"),
            ` input data property.`,
        ]),
        bs.E({ style: styles.bsExample }, [
            bs.Form({ horizontal: true }, [
                bs.FormGroup({ size: bs.FormGroupSize.Lg }, [
                    bs.Label({
                        title: "Large label",
                        for: "formGroupInputLarge",
                        controlLabel: true,
                        style: bs.colStyles(bs.Size.Sm)(2),
                    }),
                    bs.Col(
                        { size: bs.Size.Sm, span: 10 },
                        bs.InputText({
                            id: "formGroupInputLarge",
                            placeholder: "Large input",
                        })
                    ),
                ]),
                bs.FormGroup({ size: bs.FormGroupSize.Sm }, [
                    bs.Label({
                        title: "Small label",
                        for: "formGroupInputSmall",
                        controlLabel: true,
                        style: bs.colStyles(bs.Size.Sm)(2),
                    }),
                    bs.Col(
                        { size: bs.Size.Sm, span: 10 },
                        bs.InputText({
                            id: "formGroupInputSmall",
                            placeholder: "Small input",
                        })
                    ),
                ]),
            ]),
        ]),
        bs.Figure(
            { style: styles.highlight },
            pre(
                {},
                bs.Code({ style: langJs }, [
                    `bs.Form({ horizontal: true }, [`,
                    bs.E({ tag: "br" }),
                    `    bs.FormGroup({ size: bs.FormGroupSize.Lg }, [`,
                    bs.E({ tag: "br" }),
                    `        bs.Label({`,
                    bs.E({ tag: "br" }),
                    `            title: 'Large label',`,
                    bs.E({ tag: "br" }),
                    `            for: 'formGroupInputLarge',`,
                    bs.E({ tag: "br" }),
                    `            controlLabel: true,`,
                    bs.E({ tag: "br" }),
                    `            style: bs.colStyles(bs.Size.Sm)(2)`,
                    bs.E({ tag: "br" }),
                    `        }),`,
                    bs.E({ tag: "br" }),
                    `        bs.Col({ size: bs.Size.Sm, span: 10 },`,
                    bs.E({ tag: "br" }),
                    `            bs.InputText({ id: 'formGroupInputLarge', placeholder: 'Large input' }))`,
                    bs.E({ tag: "br" }),
                    `    ]),`,
                    bs.E({ tag: "br" }),
                    `    bs.FormGroup({ size: bs.FormGroupSize.Sm }, [`,
                    bs.E({ tag: "br" }),
                    `        bs.Label({`,
                    bs.E({ tag: "br" }),
                    `            title: 'Large label',`,
                    bs.E({ tag: "br" }),
                    `            for: 'formGroupInputSmall',`,
                    bs.E({ tag: "br" }),
                    `            controlLabel: true,`,
                    bs.E({ tag: "br" }),
                    `            style: bs.colStyles(bs.Size.Sm)(2)`,
                    bs.E({ tag: "br" }),
                    `        }),`,
                    bs.E({ tag: "br" }),
                    `        bs.Col({ size: bs.Size.Sm, span: 10 },`,
                    bs.E({ tag: "br" }),
                    `            bs.InputText({ id: 'formGroupInputSmall', placeholder: 'Small input' }))`,
                    bs.E({ tag: "br" }),
                    `    ])`,
                    bs.E({ tag: "br" }),
                    `])`,
                ])
            )
        ),
        bs.H3({}, "Column sizing"),
        bs.P({}, `Wrap inputs in grid columns, or any custom parent element, to easily enforce desired widths.`),
        bs.E({ style: styles.bsExample }, [
            bs.Form({}, [
                bs.Row({}, [
                    bs.Col({ size: bs.Size.Xs, span: 2 }, bs.InputText({ placeholder: "bs.Size.Xs, 2" })),
                    bs.Col({ size: bs.Size.Xs, span: 4 }, bs.InputText({ placeholder: "bs.Size.Xs, 3" })),
                    bs.Col({ size: bs.Size.Xs, span: 3 }, bs.InputText({ placeholder: "bs.Size.Xs, 4" })),
                ]),
            ]),
        ]),
        bs.Figure(
            { style: styles.highlight },
            pre(
                {},
                bs.Code({ style: langJs }, [
                    `bs.Form({}, [`,
                    bs.E({ tag: "br" }),
                    `    bs.Row({}, [`,
                    bs.E({ tag: "br" }),
                    `        bs.Col({ size: bs.Size.Xs, span: 2 },`,
                    bs.E({ tag: "br" }),
                    `            bs.InputText({ placeholder: 'bs.Size.Xs, 2' })),`,
                    bs.E({ tag: "br" }),
                    `        bs.Col({ size: bs.Size.Xs, span: 4 },`,
                    bs.E({ tag: "br" }),
                    `            bs.InputText({ placeholder: 'bs.Size.Xs, 3' })),`,
                    bs.E({ tag: "br" }),
                    `        bs.Col({ size: bs.Size.Xs, span: 3 },`,
                    bs.E({ tag: "br" }),
                    `            bs.InputText({ placeholder: 'bs.Size.Xs, 4' }))`,
                    bs.E({ tag: "br" }),
                    `    ])`,
                    bs.E({ tag: "br" }),
                    `])`,
                ])
            )
        ),
    ];
}

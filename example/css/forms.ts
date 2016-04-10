import * as b from 'bobril';
import { a, e, p, h2, h3, h4, code, figure, span, form, formGroup, inputText, label, InputTextType, helpText, checkbox,
    button, ButtonOption, radio, strong, inputGroup, inputGroupAddon, col, colStyles, Size, select, textarea, ValidationState,
    validationStyles, InputTextSize, SelectSize, FormGroupSize, row
} from '../../index';
import { styles } from '../bsexample/css';
import pre, { langJs } from '../prettify/pre';
import section from '../common/section';

export default b.createVirtualComponent({
    render(ctx: b.IBobrilCtx, me: b.IBobrilNode) {
        me.children = section(
            {
                header: 'Forms',
                id: 'forms'
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
                controlSizing()
            ]);
    }
})

function basicExample(): b.IBobrilChildren {
    return [
        h2({ attrs: { id: 'basic-forms' } }, 'Basic example'),
        p({}, [
            `Individual form controls automatically receive some global styling. All textual `,
            code({}, '<input>'), `, `, code({}, '<textarea>'), `, and `, code({}, '<select>'), ` elements with `, code({}, 'formControl'),
            ` are set to `, code({}, 'width: 100%;'), ` by default. Wrap labels and controls in `, code({}, 'formGroup({}, ...)'),
            ` for optimum spacing.`,
        ]),
        e({ style: styles.bsExample }, [
            form({}, [
                formGroup({}, [
                    label({ for: 'exampleInputEmail1' }, 'Email address'),
                    inputText({ id: 'exampleInputEmail1', type: InputTextType.Email, placeholder: 'Email' })
                ]),
                formGroup({}, [
                    label({ for: 'exampleInputPassword1' }, 'Password'),
                    inputText({ id: 'exampleInputPassword1', type: InputTextType.Password, placeholder: 'Password' })
                ]),
                formGroup({}, [
                    label({ for: 'exampleInputFile' }, 'File input'),
                    e({ tag: 'input', attrs: { type: 'file', id: 'exampleInputFile' } }),
                    helpText({}, 'Example block-level help text here.')
                ]),
                checkbox({ label: { title: 'Check me out' }, inputCheckbox: {} }),
                button({ label: 'Submit', onClick: () => alert('Clicked!') })
            ])
        ]),
        figure({ style: styles.highlight }, pre({}, code({ style: langJs }, [
            `form({}, [`, e({ tag: 'br' }),
            `    formGroup({}, [`, e({ tag: 'br' }),
            `        label({ for: 'exampleInputEmail1' }, 'Email address'),`, e({ tag: 'br' }),
            `        inputText({ id: 'exampleInputEmail1', type: InputTextType.Email, placeholder: 'Email' })`, e({ tag: 'br' }),
            `    ]),`, e({ tag: 'br' }),
            `    formGroup({}, [`, e({ tag: 'br' }),
            `        label({ for: 'exampleInputPassword1' }, 'Password'),`, e({ tag: 'br' }),
            `        inputText({ id: 'exampleInputPassword1', type: InputTextType.Password, placeholder: 'Password' })`, e({ tag: 'br' }),
            `    ]),`, e({ tag: 'br' }),
            `    formGroup({}, [`, e({ tag: 'br' }),
            `        label({ for: 'exampleInputFile' }, 'File input'),`, e({ tag: 'br' }),
            `        e({ tag: 'input', attrs: { type: 'file', id: 'exampleInputFile' } }),`, e({ tag: 'br' }),
            `        helpText({}, 'Example block-level help text here.')`, e({ tag: 'br' }),
            `    ]),`, e({ tag: 'br' }),
            `    checkbox({ label: { title: 'Check me out' }, inputCheckbox: {} }),`, e({ tag: 'br' }),
            `    button({ label: 'Submit', onClick: () => alert('Clicked!') })`, e({ tag: 'br' }),
            `])`, e({ tag: 'br' }),
        ]))),
        e({ style: [styles.bsCallout, styles.bsCalloutDanger], attrs: { id: 'callout-formgroup-inputgroup' } }, [
            h4({}, `Don't mix form groups with input groups`),
            p({}, `Do not mix form groups directly with input groups. Instead, nest the input group inside of the form group.`)
        ]),
    ];
}

function inlineForm(): b.IBobrilChildren {
    return [
        h2({ attrs: { id: 'forms-inline' } }, 'Inline form'),
        p({}, [
            `Set `, code({}, 'inline'), ` input data property to your form for left-aligned and inline-block controls.`,
            strong({}, `This only applies to forms within viewports that are at least 768px wide.`)
        ]),
        e({ style: [styles.bsCallout, styles.bsCalloutDanger], attrs: { id: 'callout-inline-form-width' } }, [
            h4({}, `May require custom widths`),
            p({}, [
                `Inputs and selects have `, code({}, 'width: 100%;'), ` applied by default in Bootstrap. Within inline forms, we reset
                that to `, code({}, 'width: auto;'), ` so multiple controls can reside on the same line. Depending on your layout, 
                additional custom widths may be required.`
            ])
        ]),
        e({ style: [styles.bsCallout, styles.bsCalloutDanger], attrs: { id: 'callout-inline-form-labels' } }, [
            h4({}, `Always add labels`),
            p({}, [
                `Screen readers will have trouble with your forms if you don't include a label for every input. For these inline forms, 
                you can hide the labels using the `,
                code({}, 'srOnly'),
                ` label input data property. There are further alternative methods of providing a label for assistive technologies, 
                such as the `,
                code({}, 'aria.label'), `, `,
                code({}, 'aria.labelledBy'), ` or `,
                code({}, 'title'),
                ` input data property.  If none of these is set, screen readers may resort to using the `,
                code({}, 'placeholder'), ` attribute defined by `, code({}, 'placeholder'),
                ` input data property, if present, but note that use of `, code({}, 'placeholder'),
                ` as a replacement for other labelling methods is not advised.`
            ])
        ]),
        e({ style: styles.bsExample }, [
            form({ inline: true }, [
                formGroup({}, [
                    label({ for: 'exampleInputName2' }, 'Name'), ' ',
                    inputText({ id: 'exampleInputName2', placeholder: 'Jane Doe' })
                ]), ' ',
                formGroup({}, [
                    label({ for: 'exampleInputEmail2' }, 'Email'), ' ',
                    inputText({
                        id: 'exampleInputEmail2',
                        type: InputTextType.Email,
                        placeholder: 'jane.doe@example.com'
                    })
                ]), ' ',
                button({ label: 'Send invitation', onClick: () => alert('Clicked!') })
            ])
        ]),
        figure({ style: styles.highlight }, pre({}, code({ style: langJs }, [
            `form({ inline: true }, [`, e({ tag: 'br' }),
            `    formGroup({}, [`, e({ tag: 'br' }),
            `        label({ for: 'exampleInputName2' }, 'Name'), ' ',`, e({ tag: 'br' }),
            `        inputText({ id: 'exampleInputName2', placeholder: 'Jane Doe' })`, e({ tag: 'br' }),
            `    ]), ' ',`, e({ tag: 'br' }),
            `    formGroup({}, [`, e({ tag: 'br' }),
            `        label({ for: 'exampleInputEmail2' }, 'Email'), ' ',`, e({ tag: 'br' }),
            `        inputText({`, e({ tag: 'br' }),
            `            id: 'exampleInputEmail2',`, e({ tag: 'br' }),
            `            type: InputTextType.Email,`, e({ tag: 'br' }),
            `            placeholder: 'jane.doe@example.com'`, e({ tag: 'br' }),
            `        })`,
            e({ tag: 'br' }),
            `    ]), ' ',`, e({ tag: 'br' }),
            `    button({ label: 'Send invitation', onClick: () => alert('Clicked!') })`, e({ tag: 'br' }),
            `])`
        ]))),
        e({ style: styles.bsExample }, [
            form({ inline: true }, [
                formGroup({}, [
                    label({ for: 'exampleInputEmail3', srOnly: true }, 'Email address'),
                    inputText({
                        id: 'exampleInputEmail3',
                        type: InputTextType.Email,
                        placeholder: 'Email'
                    })
                ]), ' ',
                formGroup({}, [
                    label({ for: 'exampleInputPassword3', srOnly: true }, 'Password'),
                    inputText({
                        id: 'exampleInputPassword3',
                        type: InputTextType.Password,
                        placeholder: 'Password'
                    })
                ]), ' ',
                checkbox({ label: { title: 'Remember me' }, inputCheckbox: {} }), ' ',
                button({ label: 'Sign in', onClick: () => alert('Clicked!') })
            ])
        ]),
        figure({ style: styles.highlight }, pre({}, code({ style: langJs }, [
            `form({ inline: true }, [`, e({ tag: 'br' }),
            `    formGroup({}, [`, e({ tag: 'br' }),
            `        label({ for: 'exampleInputEmail3', srOnly: true }, 'Email address'),`, e({ tag: 'br' }),
            `        inputText({`, e({ tag: 'br' }),
            `            id: 'exampleInputEmail3',`, e({ tag: 'br' }),
            `            type: InputTextType.Email,`, e({ tag: 'br' }),
            `            placeholder: 'Email'`, e({ tag: 'br' }),
            `        })`, e({ tag: 'br' }),
            `    ]), ' ',`, e({ tag: 'br' }),
            `    formGroup({}, [`, e({ tag: 'br' }),
            `        label({ for: 'exampleInputPassword3', srOnly: true }, 'Password'),`, e({ tag: 'br' }),
            `        inputText({`, e({ tag: 'br' }),
            `            id: 'exampleInputPassword3',`, e({ tag: 'br' }),
            `            type: InputTextType.Password,`, e({ tag: 'br' }),
            `            placeholder: 'Password'`, e({ tag: 'br' }),
            `        })`, e({ tag: 'br' }),
            `    ]), ' ',`, e({ tag: 'br' }),
            `    checkbox({ label: { title: 'Remember me' }, inputCheckbox: {} }), ' ',`, e({ tag: 'br' }),
            `    button({ label: 'Sign in', onClick: () => alert('Clicked!') })`, e({ tag: 'br' }),
            `])`
        ]))),
        e({ style: styles.bsExample }, [
            form({ inline: true }, [
                formGroup({}, [
                    label({ for: 'exampleInputAmount', srOnly: true }, 'Amount (in dollars)'),
                    inputGroup({}, [
                        inputGroupAddon({}, '$'),
                        inputText({ id: 'exampleInputAmount', type: InputTextType.Number, placeholder: 'Amount' }),
                        inputGroupAddon({}, '.00')
                    ])
                ]), ' ',
                button({ label: 'Transfer cash', option: ButtonOption.Primary, onClick: () => alert('Clicked!') })
            ])
        ]),
        figure({ style: styles.highlight }, pre({}, code({ style: langJs }, [
            `form({ inline: true }, [`, e({ tag: 'br' }),
            `    formGroup({}, [`, e({ tag: 'br' }),
            `        label({ for: 'exampleInputAmount', srOnly: true }, 'Amount (in dollars)'),`, e({ tag: 'br' }),
            `        inputGroup({}, [`, e({ tag: 'br' }),
            `            inputGroupAddon({}, '$'),`, e({ tag: 'br' }),
            `            inputText({ id: 'exampleInputAmount', type: InputTextType.Number, placeholder: 'Amount' }),`, e({ tag: 'br' }),
            `            inputGroupAddon({}, '.00')`, e({ tag: 'br' }),
            `        ])     `, e({ tag: 'br' }),
            `    ]), ' ',`, e({ tag: 'br' }),
            `    button({ label: 'Transfer cash', option: ButtonOption.Primary, onClick: () => alert('Clicked!') })`, e({ tag: 'br' }),
            `])`
        ])))
    ];
}

function horizontalForm(): b.IBobrilChildren {
    return [
        h2({ attrs: { id: 'forms-horizontal' } }, 'Horizontal form'),
        p({}, [
            `Use Bobrilstrap's predefined grid styles and components to align labels and groups of form controls 
            in a horizontal layout by adding `, code({}, 'horizontal'),
            ` form input data property. Doing so changes `, code({}, 'formGroup({}, ...)'), `s to behave as grid rows, so no need for `,
            code({}, 'row({}, ...)'), `.`

        ]),
        e({ style: styles.bsExample }, [
            form({ horizontal: true }, [
                formGroup({}, [
                    label({ controlLabel: true, for: 'inputEmail3', style: colStyles(Size.Sm)(2) }, 'Email'),
                    col({ size: Size.Sm, count: 10 },
                        inputText({ id: 'inputEmail3', type: InputTextType.Email, placeholder: 'Email' }))
                ]),
                formGroup({}, [
                    label({ controlLabel: true, for: 'inputPassword3', style: colStyles(Size.Sm)(2) }, 'Password'),
                    col({ size: Size.Sm, count: 10 },
                        inputText({ id: 'inputPassword3', type: InputTextType.Password, placeholder: 'Password' }))
                ]),
                formGroup({}, [
                    col({ size: Size.Sm, count: 10, offsets: [{ size: Size.Sm, count: 2 }] },
                        checkbox({ label: { title: 'Remember me' } }))
                ]),
                formGroup({}, [
                    col({ size: Size.Sm, count: 10, offsets: [{ size: Size.Sm, count: 2 }] },
                        button({ label: 'Sign in', onClick: () => alert('Clicked!') })
                    )
                ])
            ])
        ]),
        figure({ style: styles.highlight }, pre({}, code({ style: langJs }, [
            `form({ horizontal: true }, [`, e({ tag: 'br' }),
            `    formGroup({}, [`, e({ tag: 'br' }),
            `        label({ controlLabel: true, for: 'inputEmail3', style: colStyles(Size.Sm)(2) }, 'Email'),`, e({ tag: 'br' }),
            `        col({ size: Size.Sm, count: 10 },`, e({ tag: 'br' }),
            `            inputText({ id: 'inputEmail3', type: InputTextType.Email, placeholder: 'Email' }))`, e({ tag: 'br' }),
            `    ]),`, e({ tag: 'br' }),
            `    formGroup({}, [`, e({ tag: 'br' }),
            `        label({ controlLabel: true, for: 'inputPassword3', style: colStyles(Size.Sm)(2) }, 'Password'),`, e({ tag: 'br' }),
            `        col({ size: Size.Sm, count: 10 },`, e({ tag: 'br' }),
            `            inputText({ id: 'inputPassword3', type: InputTextType.Password, placeholder: 'Password' }))`, e({ tag: 'br' }),
            `    ]),`, e({ tag: 'br' }),
            `    formGroup({}, [`, e({ tag: 'br' }),
            `        col({ size: Size.Sm, count: 10, offsets: [{ size: Size.Sm, count: 2 }] },`, e({ tag: 'br' }),
            `             checkbox({ label: { title: 'Remember me' } }))`, e({ tag: 'br' }),
            `    ]),`, e({ tag: 'br' }),
            `    formGroup({}, [`, e({ tag: 'br' }),
            `        col({ size: Size.Sm, count: 10, offsets: [{ size: Size.Sm, count: 2 }] },`, e({ tag: 'br' }),
            `            button({ label: 'Sign in', onClick: () => alert('Clicked!') })`, e({ tag: 'br' }),
            `        )`, e({ tag: 'br' }),
            `    ])`, e({ tag: 'br' }),
            `])`
        ]))),
    ];
}

function supportedControls(): b.IBobrilChildren {
    return [
        h2({ attrs: { id: 'forms-controls' } }, 'Supported controls'),
        p({}, [
            `Most common form control, text-based input fields (`,
            code({}, 'inputText({}, ...)'),
            ` component). Includes support for all HTML5 types: `,
            code({}, 'text'), `, `,
            code({}, 'password'), `, `,
            code({}, 'datetime'), `, `,
            code({}, 'datetime-local'), `, `,
            code({}, 'date'), `, `,
            code({}, 'month'), `, `,
            code({}, 'time'), `, `,
            code({}, 'week'), `, `,
            code({}, 'number'), `, `,
            code({}, 'email'), `, `,
            code({}, 'url'), `, `,
            code({}, 'search'), `, `,
            code({}, 'tel'), ` and `,
            code({}, 'color'), `.`

        ]),
        e({ style: [styles.bsCallout, styles.bsCalloutDanger], attrs: { id: 'callout-input-needs-type' } }, [
            h4({}, `Type declaration required`),
            p({}, [
                `Inputs type should be defined by the `, code({}, 'type'), ` input data property or the `, code({}, 'InputTextType.Text'),
                ` will be used as the default one.`
            ])
        ]),
        e({ style: styles.bsExample }, [
            form({}, [
                formGroup({}, inputText({ placeholder: 'Text input' })),
                formGroup({}, inputText({ type: InputTextType.Number, placeholder: 'Number input' }))
            ])
        ]),
        figure({ style: styles.highlight }, pre({}, code({ style: langJs }, [
            `inputText({ placeholder: 'Text input' })`, e({ tag: 'br' }),
            `inputText({ type: InputTextType.Number, placeholder: 'Number input' })`
        ]))),
        e({ style: [styles.bsCallout, styles.bsCalloutInfo], attrs: { id: 'callout-xref-input-group' } }, [
            h4({}, `Input groups`),
            p({}, [
                `To add integrated text or buttons before and/or after any text-based `, code({}, '<input>'),
                `, check out the input `, code({}, 'inputGroup({}, ...)'), `.`
            ])
        ]),
        h3({ attrs: { id: 'textarea' } }, 'Textarea'),
        p({}, [
            `Form control which supports multiple lines of text. Change `, code({}, 'rows'), ` attribute as necessary.`
        ]),
        e({ style: styles.bsExample }, [
            formGroup({}, textarea({ rows: 3 }))
        ]),
        figure({ style: styles.highlight }, pre({}, code({ style: langJs }, [
            `textarea({ rows: 3 })`
        ]))),
        h3({ attrs: { id: 'checkboxes-and-radios' } }, 'Checkboxes and radios'),
        p({}, `Checkboxes are for selecting one or several options in a list, while radios are for selecting one option from many.`),
        h4({ attrs: { id: 'default-stacked' } }, 'Default (stacked)'),
        e({ style: styles.bsExample }, [
            form({}, [
                checkbox({
                    label: { title: 'Option one is this and that—be sure to include why it\'s great' }
                }),
                checkbox({
                    label: { title: 'Option two is disabled' },
                    inputCheckbox: { disabled: true }
                }),
                e({ tag: 'br' }),
                radio({
                    label: { title: 'Option one is this and that—be sure to include why it\'s great' },
                    inputRadio: { id: 'optionsRadios1', value: 'option1', name: 'optionsRadios' }
                }),
                radio({
                    label: { title: 'Option two can be something else and selecting it will deselect option one' },
                    inputRadio: { id: 'optionsRadios2', value: 'option2', name: 'optionsRadios' }
                }),
                radio({
                    label: { title: 'Option three is disabled' },
                    inputRadio: { id: 'optionsRadios3', value: 'option3', name: 'optionsRadios', disabled: true }
                })
            ])
        ]),
        figure({ style: styles.highlight }, pre({}, code({ style: langJs }, [
            `checkbox({`, e({ tag: 'br' }),
            `    label: { title: 'Option one is this and that—be sure to include why it\\'s great' }`, e({ tag: 'br' }),
            `}),`, e({ tag: 'br' }),
            `checkbox({`, e({ tag: 'br' }),
            `    label: { title: 'Option two is disabled' },`, e({ tag: 'br' }),
            `    inputCheckbox: { disabled: true }`, e({ tag: 'br' }),
            `}),`, e({ tag: 'br' }),
            `radio({`, e({ tag: 'br' }),
            `    label: { title: 'Option one is this and that—be sure to include why it\\'s great' },`, e({ tag: 'br' }),
            `    inputRadio: { id: 'optionsRadios1', value: 'option1', name: 'optionsRadios' }`, e({ tag: 'br' }),
            `}),`, e({ tag: 'br' }),
            `radio({`, e({ tag: 'br' }),
            `    label: { title: 'Option two can be something else and selecting it will deselect option one' },`, e({ tag: 'br' }),
            `    inputRadio: { id: 'optionsRadios2', value: 'option2', name: 'optionsRadios' }`, e({ tag: 'br' }),
            `}),`, e({ tag: 'br' }),
            `radio({`, e({ tag: 'br' }),
            `    label: { title: 'Option three is disabled' },`, e({ tag: 'br' }),
            `    inputRadio: { id: 'optionsRadios3', value: 'option3', name: 'optionsRadios', disabled: true }`, e({ tag: 'br' }),
            `})`
        ]))),
        h4({ attrs: { id: 'inline-checkboxes-and-radios' } }, 'Inline checkboxes and radios'),
        p({}, [
            `Use the `, code({}, 'inline'),
            ` input data property on a series of checkboxes or radios for controls that appear on the same line.`
        ]),
        e({ style: styles.bsExample }, [
            form({}, [
                checkbox({ inline: true, label: { title: '1' }, inputCheckbox: { id: 'inlineCheckbox1' } }),
                checkbox({ inline: true, label: { title: '2' }, inputCheckbox: { id: 'inlineCheckbox2' } }),
                checkbox({ inline: true, label: { title: '3' }, inputCheckbox: { id: 'inlineCheckbox3' } })
            ]),
            e({ tag: 'br' }),
            form({}, [
                radio({
                    inline: true,
                    label: { title: '1' },
                    inputRadio: { id: 'inlineRadio1', value: 'option1', name: 'inlineRadioOptions' }
                }),
                radio({
                    inline: true,
                    label: { title: '2' },
                    inputRadio: { id: 'inlineRadio2', value: 'option2', name: 'inlineRadioOptions' }
                }),
                radio({
                    inline: true,
                    label: { title: '3' },
                    inputRadio: { id: 'inlineRadio3', value: 'option3', name: 'inlineRadioOptions' }
                })
            ])
        ]),
        figure({ style: styles.highlight }, pre({}, code({ style: langJs }, [
            `checkbox({ inline: true, label: { title: '1' }, inputCheckbox: { id: 'inlineCheckbox1' } }),`, e({ tag: 'br' }),
            `checkbox({ inline: true, label: { title: '2' }, inputCheckbox: { id: 'inlineCheckbox2' } }),`, e({ tag: 'br' }),
            `checkbox({ inline: true, label: { title: '3' }, inputCheckbox: { id: 'inlineCheckbox3' } }),`, e({ tag: 'br' }),
            `radio({`, e({ tag: 'br' }),
            `    inline: true,`, e({ tag: 'br' }),
            `    label: { title: '1' },`, e({ tag: 'br' }),
            `    inputRadio: { id: 'inlineRadio1', value: 'option1', name: 'inlineRadioOptions' }`, e({ tag: 'br' }),
            `}),`, e({ tag: 'br' }),
            `radio({`, e({ tag: 'br' }),
            `    inline: true,`, e({ tag: 'br' }),
            `    label: { title: '2' },`, e({ tag: 'br' }),
            `    inputRadio: { id: 'inlineRadio2', value: 'option2', name: 'inlineRadioOptions' }`, e({ tag: 'br' }),
            `}),`, e({ tag: 'br' }),
            `radio({`, e({ tag: 'br' }),
            `    inline: true,`, e({ tag: 'br' }),
            `    label: { title: '3' },`, e({ tag: 'br' }),
            `    inputRadio: { id: 'inlineRadio3', value: 'option3', name: 'inlineRadioOptions' }`, e({ tag: 'br' }),
            `})`
        ]))),
        h4({ attrs: { id: 'checkboxes-and-radios-without-la' } }, 'Checkboxes and radios without label text'),
        p({}, [
            `Should you have no label definition, the input is positioned as you'd expect.`,
            strong({}, `Currently only works on non-inline checkboxes and radios. `),
            `Remember to still provide some form of label for assistive technologies (for instance, using `,
            code({}, 'aria.label'), , `).`
        ]),
        e({ style: styles.bsExample }, [
            form({}, [
                checkbox({ inputCheckbox: { id: 'blankCheckbox', aria: { label: '...' } } }),
                radio({ inputRadio: { id: 'blankRadio1', value: 'option1', name: 'blankRadio', aria: { label: '...' } } })
            ])
        ]),
        figure({ style: styles.highlight }, pre({}, code({ style: langJs }, [
            `checkbox({ inputCheckbox: { id: 'blankCheckbox', aria: { label: '...' } } }),`, e({ tag: 'br' }),
            `radio({ inputRadio: { id: 'blankRadio1', value: 'option1', name: 'blankRadio', aria: { label: '...' } } })`
        ]))),
        h4({ attrs: { id: 'selects' } }, 'Selects'),
        p({}, [
            `Note that many native select menus—namely in Safari and Chrome—have rounded corners that cannot be modified via `,
            code({}, 'border-radius'), ` properties.`
        ]),
        e({ style: styles.bsExample }, [
            form({}, [
                select({
                    options: [{ value: '1' }, { value: '2' }, { value: '3' }, { value: '4' }, { value: '5' }]
                })
            ])
        ]),
        figure({ style: styles.highlight }, pre({}, code({ style: langJs }, [
            `select({`, e({ tag: 'br' }),
            `    options: [{ value: '1' }, { value: '2' }, { value: '3' }, { value: '4' }, { value: '5' }]`, e({ tag: 'br' }),
            `})`
        ]))),
        p({}, [
            `For `, code({}, 'select'), ` components with the `, code({}, 'multiple'), ` input data property set to `,
            code({}, 'true'), `, multiple options are shown by default.`
        ]),
        e({ style: styles.bsExample }, [
            form({}, [
                select({
                    multiple: true,
                    options: [{ value: '1' }, { value: '2' }, { value: '3' }, { value: '4' }, { value: '5' }]
                })
            ])
        ]),
        figure({ style: styles.highlight }, pre({}, code({ style: langJs }, [
            `select({`, e({ tag: 'br' }),
            `    multiple: true,`, e({ tag: 'br' }),
            `    options: [{ value: '1' }, { value: '2' }, { value: '3' }, { value: '4' }, { value: '5' }]`, e({ tag: 'br' }),
            `})`
        ])))
    ];
}

function staticControl(): b.IBobrilChildren {
    return [
        h2({ attrs: { id: 'forms-controls-static' } }, 'Static control'),
        p({}, [
            `When you need to place plain text next to a form label within a form, use the `,
            code({}, 'formControlStatic'), ` input data property of `, code({}, 'paragraph'), `.`
        ]),
        e({ style: styles.bsExample }, [
            form({ horizontal: true }, [
                formGroup({}, [
                    label({ controlLabel: true, style: colStyles(Size.Sm)(2) }, 'Email'),
                    col({ size: Size.Sm, count: 10 },
                        p({ formControlStatic: true }, 'email@example.com'))
                ]),
                formGroup({}, [
                    label({ controlLabel: true, for: 'inputPassword', style: colStyles(Size.Sm)(2) }, 'Password'),
                    col({ size: Size.Sm, count: 10 },
                        inputText({ id: 'inputPassword', type: InputTextType.Password, placeholder: 'Password' }))
                ])
            ])
        ]),
        figure({ style: styles.highlight }, pre({}, code({ style: langJs }, [
            `form({ horizontal: true }, [`, e({ tag: 'br' }),
            `    formGroup({}, [`, e({ tag: 'br' }),
            `        label({ controlLabel: true, style: colStyles(Size.Sm)(2) }, 'Email'),`, e({ tag: 'br' }),
            `        col({ size: Size.sm, count: 10 },`, e({ tag: 'br' }),
            `            p({ formControlStatic: true }, 'email@example.com'))`, e({ tag: 'br' }),
            `    ]),`, e({ tag: 'br' }),
            `    formGroup({}, [`, e({ tag: 'br' }),
            `        label({ controlLabel: true, for: 'inputPassword', style: colStyles(Size.Sm)(2) }, 'Password'),`, e({ tag: 'br' }),
            `        col({ size: Size.Sm, count: 10 },`, e({ tag: 'br' }),
            `            inputText({ id: 'inputPassword', type: InputTextType.Password, placeholder: 'Password' }))`, e({ tag: 'br' }),
            `    ])`, e({ tag: 'br' }),
            `])`
        ])))
    ];
}

function formsControlFocus(): b.IBobrilChildren {
    return [
        h2({ attrs: { id: 'forms-control-focus' } }, 'Focus state'),
        p({}, [
            `Bootstrap removes the default `, code({}, 'outline'), ` styles on some form controls and apply a `,
            code({}, 'box-shadow'), ` in its place for `, code({}, ':focus'), `.`
        ]),
        e({ style: styles.bsExample }, [
            form({}, [
                inputText({ id: 'focusedInput', placeholder: 'Demonstrative focus state' })
            ])
        ]),
        e({ style: [styles.bsCallout, styles.bsCalloutInfo], attrs: { id: 'callout-focus-demo' } }, [
            h4({}, [`Demo `, code({}, ':focus'), `state`]),
            p({}, [
                `The above example input uses custom styles in our documentation to demonstrate the `, code({}, ':focus'),
                ` state on a `, code({}, '.form-control'), `.`
            ])
        ])
    ];
}

function formsControlDisabled(): b.IBobrilChildren {
    return [
        h2({ attrs: { id: 'forms-control-disabled' } }, 'Disabled state'),
        p({}, [
            `Set the `, code({}, 'disabled'), ` input comonent data property to prevent user interactions. Disabled inputs appear lighter 
            and add a `, code({}, 'not-allowed'), ` cursor.`
        ]),
        e({ style: styles.bsExample }, [
            form({}, [
                inputText({ id: 'disabledInput', placeholder: 'Disabled input here...', disabled: true })
            ])
        ]),
        figure({ style: styles.highlight }, pre({}, code({ style: langJs }, [
            `form({}, [`, e({ tag: 'br' }),
            `    inputText({ id: 'disabledInput', placeholder: 'Disabled input here...', disabled: true })`, e({ tag: 'br' }),
            `])`
        ])))
    ];
}

function formsControlReadonly(): b.IBobrilChildren {
    return [
        h2({ attrs: { id: 'forms-control-readonly' } }, 'Readonly state'),
        p({}, [
            `Set the `, code({}, 'readonly '), ` input comonent data property to prevent modification of the input's value. Read-only 
            inputs appear lighter (just like disabled inputs), but retain the standard cursor.`
        ]),
        e({ style: styles.bsExample }, [
            form({}, [
                inputText({ placeholder: 'Readonly input here…', readonly: true })
            ])
        ]),
        figure({ style: styles.highlight }, pre({}, code({ style: langJs }, [
            `form({}, [`, e({ tag: 'br' }),
            `     inputText({ placeholder: 'Readonly input here…', readonly: true })`, e({ tag: 'br' }),
            `])`
        ])))
    ];
}

function formsHelpText(): b.IBobrilChildren {
    return [
        h2({ attrs: { id: 'forms-help-text' } }, 'Help text'),
        p({}, `Block level help text for form controls..`),
        e({ style: [styles.bsCallout, styles.bsCalloutInfo], attrs: { id: 'callout-help-text-accessibility' } }, [
            h4({}, `Associating help text with form controls`),
            p({}, [
                `Help text should be explicitly associated with the form control it relates to using the `,
                code({}, 'aria.describedBy'), ` input data property. This will ensure that assistive technologies – such as screen readers 
                – will announce this help text when the user focuses or enters the control.`
            ])
        ]),
        e({ style: styles.bsExample }, [
            form({}, [
                formGroup({}, [
                    label({ for: 'inputHelpBlock', title: 'Input with help text' }),
                    inputText({ id: 'inputHelpBlock', aria: { describedBy: 'helpBlock' } })
                ]),
                helpText(
                    { id: 'helpBlock' },
                    'A block of help text that breaks onto a new line and may extend beyond one line.'
                )
            ])
        ]),
        figure({ style: styles.highlight }, pre({}, code({ style: langJs }, [
            `form({}, [`, e({ tag: 'br' }),
            `     formGroup({}, [`, e({ tag: 'br' }),
            `         label({ for: 'inputHelpBlock', title: 'Input with help text' }),`, e({ tag: 'br' }),
            `         inputText({ id: 'inputHelpBlock', aria: { describedBy: 'helpBlock' } })`, e({ tag: 'br' }),
            `     ]),`, e({ tag: 'br' }),
            `     helpText(`, e({ tag: 'br' }),
            `         { id: 'helpBlock' },`, e({ tag: 'br' }),
            `         'A block of help text that breaks onto a new line and may extend beyond one line.'`, e({ tag: 'br' }),
            `     )`, e({ tag: 'br' }),
            `])`
        ])))
    ];
}

function validationStates(): b.IBobrilChildren {
    return [
        h2({ attrs: { id: 'forms-control-validation' } }, 'Validation states'),
        p({}, [
            `Bootstrap includes validation styles for error, warning, and success states on form controls. To use, set `,
            code({}, 'validationState'), ` input data property to the `, code({}, 'formGroup'), ` node. Any node with defined`,
            code({}, 'controlLabel'), ` or `, code({}, 'formControl'), ` style (implicitly by the property or by the style) and `,
            code({}, 'helpText'), `s within that `, code({}, 'formGroup'), ` will receive the validation styles.`
        ]),
        e({ style: [styles.bsCallout, styles.bsCalloutDanger], attrs: { id: 'callout-form-validation-state-accessibility' } }, [
            h4({}, `Conveying validation state to assistive technologies and colorblind users`),
            p({}, `Using these validation styles to denote the state of a form control only provides a visual, color-based indication, 
            which will not be conveyed to users of assistive technologies - such as screen readers - or to colorblind users.`),
            p({}, [
                `Ensure that an alternative indication of state is also provided. For instance, you can include a hint about state in the 
                form control's <label> text itself (as is the case in the following code example), include a Glyphicon (with appropriate 
                alternative text using the `, code({}, 'srOnly'), ` input date property or style), or by providing an additional help text 
                block. Specifically for assistive technologies, invalid form controls can also be assigned an `,
                code({}, 'aria.invalid'), `input date property.`
            ])
        ]),
        e({ style: styles.bsExample }, [
            form({}, [
                formGroup({ validationState: ValidationState.Success }, [
                    label({ for: 'inputSuccess1', title: 'Input with success', controlLabel: true }),
                    inputText({ id: 'inputSuccess1', aria: { describedBy: 'helpBlock2' } }),
                    helpText(
                        { id: 'helpBlock2' },
                        'A block of help text that breaks onto a new line and may extend beyond one line.'
                    )
                ]),
                formGroup({ validationState: ValidationState.Warning }, [
                    label({ for: 'inputWarning1', title: 'Input with warning', controlLabel: true }),
                    inputText({ id: 'inputWarning1' })
                ]),
                formGroup({ validationState: ValidationState.Error }, [
                    label({ for: 'inputError1', title: 'Input with error', controlLabel: true }),
                    inputText({ id: 'inputError1' })
                ]),
                e({ style: validationStyles.hasSuccess }, [
                    checkbox({
                        label: { title: 'Checkbox with success' },
                        inputCheckbox: { id: 'checkboxSuccess' }
                    })
                ]),
                e({ style: validationStyles.hasWarning }, [
                    checkbox({
                        label: { title: 'Checkbox with warning' },
                        inputCheckbox: { id: 'checkboxWarning' }
                    })
                ]),
                e({ style: validationStyles.hasError }, [
                    checkbox({
                        label: { title: 'Checkbox with error' },
                        inputCheckbox: { id: 'checkboxError' }
                    })
                ])
            ])
        ]),
        figure({ style: styles.highlight }, pre({}, code({ style: langJs }, [
            `form({}, [`, e({ tag: 'br' }),
            `    formGroup({ validationState: ValidationState.Success }, [`, e({ tag: 'br' }),
            `        label({ for: 'inputSuccess1', title: 'Input with success', controlLabel: true }),`, e({ tag: 'br' }),
            `        inputText({ id: 'inputSuccess1', aria: { describedBy: 'helpBlock2' } }),`, e({ tag: 'br' }),
            `        helpText(`, e({ tag: 'br' }),
            `            { id: 'helpBlock2' },`, e({ tag: 'br' }),
            `            'A block of help text that breaks onto a new line and may extend beyond one line.'`, e({ tag: 'br' }),
            `        )`, e({ tag: 'br' }),
            `    ]),`, e({ tag: 'br' }),
            `    formGroup({ validationState: ValidationState.Warning }, [`, e({ tag: 'br' }),
            `        label({ for: 'inputWarning1', title: 'Input with warning', controlLabel: true }),`, e({ tag: 'br' }),
            `        inputText({ id: 'inputWarning1' })`, e({ tag: 'br' }),
            `    ]),`, e({ tag: 'br' }),
            `    formGroup({ validationState: ValidationState.Error }, [`, e({ tag: 'br' }),
            `        label({ for: 'inputError1', title: 'Input with error', controlLabel: true }),`, e({ tag: 'br' }),
            `        inputText({ id: 'inputError1' })`, e({ tag: 'br' }),
            `    ]),`, e({ tag: 'br' }),
            `    e({ style: validationStyles.hasSuccess }, [`, e({ tag: 'br' }),
            `        checkbox({`, e({ tag: 'br' }),
            `            label: { title: 'Checkbox with success' },`, e({ tag: 'br' }),
            `            inputCheckbox: { id: 'checkboxSuccess' }`, e({ tag: 'br' }),
            `        })`, e({ tag: 'br' }),
            `    ]),`, e({ tag: 'br' }),
            `    e({ style: validationStyles.hasWarning }, [`, e({ tag: 'br' }),
            `        checkbox({`, e({ tag: 'br' }),
            `            label: { title: 'Checkbox with warning' },`, e({ tag: 'br' }),
            `            inputCheckbox: { id: 'checkboxWarning' }`, e({ tag: 'br' }),
            `        })`, e({ tag: 'br' }),
            `    ]),`, e({ tag: 'br' }),
            `    e({ style: validationStyles.hasError }, [`, e({ tag: 'br' }),
            `        checkbox({`, e({ tag: 'br' }),
            `            label: { title: 'Checkbox with error' },`, e({ tag: 'br' }),
            `            inputCheckbox: { id: 'checkboxError' }`, e({ tag: 'br' }),
            `        })`, e({ tag: 'br' }),
            `    ])`, e({ tag: 'br' }),
            `])`
        ])))
    ];
}

function controlSizing(): b.IBobrilChildren {
    return [
        h2({ attrs: { id: 'forms-control-sizes' } }, 'Control sizing'),
        p({}, [
            `Set heights using `, code({}, 'size'), ` input data property and set widths using grid column component `,
            code({}, 'col'), ` or by `, code({}, 'colStyles'), `.`
        ]),
        h3({}, 'Height sizing'),
        p({}, `Create taller or shorter form controls that match button sizes.`),
        e({ style: [styles.bsExample, styles.bsExampleControlSizing] }, [
            form({}, [
                e({ style: styles.controls }, [
                    inputText({ size: InputTextSize.Lg, placeholder: 'InputTextSize.Lg' }),
                    inputText({ placeholder: 'default' }),
                    inputText({ size: InputTextSize.Sm, placeholder: 'InputTextSize.Sm' }),
                    select({ size: SelectSize.Lg, options: [{ value: 'SelectSize.Lg' }] }),
                    select({ options: [{ value: 'default' }] }),
                    select({ size: SelectSize.Sm, options: [{ value: 'SelectSize.Sm' }] })
                ])
            ])
        ]),
        figure({ style: styles.highlight }, pre({}, code({ style: langJs }, [
            `inputText({ size: InputTextSize.Lg, placeholder: 'InputTextSize.Lg' }),`, e({ tag: 'br' }),
            `inputText({ placeholder: 'default' }),`, e({ tag: 'br' }),
            `inputText({ size: InputTextSize.Sm, placeholder: 'InputTextSize.Sm' }),`, e({ tag: 'br' }), e({ tag: 'br' }),
            `select({ size: SelectSize.Lg, options: [{ value: 'SelectSize.Lg' }] }),`, e({ tag: 'br' }),
            `select({ options: [{ value: 'default' }] }),`, e({ tag: 'br' }),
            `select({ size: SelectSize.Sm, options: [{ value: 'SelectSize.Sm' }] })`
        ]))),
        h3({}, 'Horizontal form group sizes'),
        p({}, [
            `Quickly size labels and form controls within horizontal form by adding setting `,
            code({}, 'size'), ` input data property.`
        ]),
        e({ style: styles.bsExample }, [
            form({ horizontal: true }, [
                formGroup({ size: FormGroupSize.Lg }, [
                    label({
                        title: 'Large label',
                        for: 'formGroupInputLarge',
                        controlLabel: true,
                        style: colStyles(Size.Sm)(2)
                    }),
                    col({ size: Size.Sm, count: 10 },
                        inputText({ id: 'formGroupInputLarge', placeholder: 'Large input' }))
                ]),
                formGroup({ size: FormGroupSize.Sm }, [
                    label({
                        title: 'Small label', for: 'formGroupInputSmall', controlLabel: true, style: colStyles(Size.Sm)(2)
                    }),
                    col({ size: Size.Sm, count: 10 },
                        inputText({ id: 'formGroupInputSmall', placeholder: 'Small input' }))
                ])
            ])
        ]),
        figure({ style: styles.highlight }, pre({}, code({ style: langJs }, [
            `form({ horizontal: true }, [`, e({ tag: 'br' }),
            `    formGroup({ size: FormGroupSize.Lg }, [`, e({ tag: 'br' }),
            `        label({`, e({ tag: 'br' }),
            `            title: 'Large label',`, e({ tag: 'br' }),
            `            for: 'formGroupInputLarge',`, e({ tag: 'br' }),
            `            controlLabel: true,`, e({ tag: 'br' }),
            `            style: colStyles(Size.Sm)(2)`, e({ tag: 'br' }),
            `        }),`, e({ tag: 'br' }),
            `        col({ size: Size.Sm, count: 10 },`, e({ tag: 'br' }),
            `            inputText({ id: 'formGroupInputLarge', placeholder: 'Large input' }))`, e({ tag: 'br' }),
            `    ]),`, e({ tag: 'br' }),
            `    formGroup({ size: FormGroupSize.Sm }, [`, e({ tag: 'br' }),
            `        label({`, e({ tag: 'br' }),
            `            title: 'Large label',`, e({ tag: 'br' }),
            `            for: 'formGroupInputSmall',`, e({ tag: 'br' }),
            `            controlLabel: true,`, e({ tag: 'br' }),
            `            style: colStyles(Size.Sm)(2)`, e({ tag: 'br' }),
            `        }),`, e({ tag: 'br' }),
            `        col({ size: Size.Sm, count: 10 },`, e({ tag: 'br' }),
            `            inputText({ id: 'formGroupInputSmall', placeholder: 'Small input' }))`, e({ tag: 'br' }),
            `    ])`, e({ tag: 'br' }),
            `])`
        ]))),
        h3({}, 'Column sizing'),
        p({}, `Wrap inputs in grid columns, or any custom parent element, to easily enforce desired widths.`),
        e({ style: styles.bsExample }, [
            form({}, [
                row({}, [
                    col({ size: Size.Xs, count: 2 },
                        inputText({ placeholder: 'Size.Xs, 2' })),
                    col({ size: Size.Xs, count: 4 },
                        inputText({ placeholder: 'Size.Xs, 3' })),
                    col({ size: Size.Xs, count: 3 },
                        inputText({ placeholder: 'Size.Xs, 4' }))
                ])
            ])
        ]),
        figure({ style: styles.highlight }, pre({}, code({ style: langJs }, [
            `form({}, [`, e({ tag: 'br' }),
            `    row({}, [`, e({ tag: 'br' }),
            `        col({ size: Size.Xs, count: 2 },`, e({ tag: 'br' }),
            `            inputText({ placeholder: 'Size.Xs, 2' })),`, e({ tag: 'br' }),
            `        col({ size: Size.Xs, count: 4 },`, e({ tag: 'br' }),
            `            inputText({ placeholder: 'Size.Xs, 3' })),`, e({ tag: 'br' }),
            `        col({ size: Size.Xs, count: 3 },`, e({ tag: 'br' }),
            `            inputText({ placeholder: 'Size.Xs, 4' }))`, e({ tag: 'br' }),
            `    ])`, e({ tag: 'br' }),
            `])`
        ])))
    ];
}

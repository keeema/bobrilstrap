import * as b from 'bobril';
import { a, e, p, h2, h3, h4, code, figure, span, form, formGroup, inputText, label, InputTextType, helpText, checkbox,
    button, ButtonOption, radio, strong, inputGroup, inputGroupAddon, col, colStyles, Size, select, textarea } from '../../index';
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
                supportedControls()
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
        e({ styles: styles.bsExample }, [
            form({}, [
                formGroup({}, [
                    label({ for: 'exampleInputEmail1' }, 'Email address'),
                    inputText({ id: 'exampleInputEmail1', type: InputTextType.email, placeholder: 'Email' })
                ]),
                formGroup({}, [
                    label({ for: 'exampleInputPassword1' }, 'Password'),
                    inputText({ id: 'exampleInputPassword1', type: InputTextType.password, placeholder: 'Password' })
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
        figure({ styles: styles.highlight }, pre({}, code({ styles: langJs }, [
            `form({}, [`, e({ tag: 'br' }),
            `    formGroup({}, [`, e({ tag: 'br' }),
            `        label({ for: 'exampleInputEmail1' }, 'Email address'),`, e({ tag: 'br' }),
            `        inputText({ id: 'exampleInputEmail1', type: InputTextType.email, placeholder: 'Email' })`, e({ tag: 'br' }),
            `    ]),`, e({ tag: 'br' }),
            `    formGroup({}, [`, e({ tag: 'br' }),
            `        label({ for: 'exampleInputPassword1' }, 'Password'),`, e({ tag: 'br' }),
            `        inputText({ id: 'exampleInputPassword1', type: InputTextType.password, placeholder: 'Password' })`, e({ tag: 'br' }),
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
        e({ styles: [styles.bsCallout, styles.bsCalloutDanger], attrs: { id: 'callout-formgroup-inputgroup' } }, [
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
        e({ styles: [styles.bsCallout, styles.bsCalloutDanger], attrs: { id: 'callout-inline-form-width' } }, [
            h4({}, `May require custom widths`),
            p({}, [
                `Inputs and selects have `, code({}, 'width: 100%;'), ` applied by default in Bootstrap. Within inline forms, we reset
                that to `, code({}, 'width: auto;'), ` so multiple controls can reside on the same line. Depending on your layout, 
                additional custom widths may be required.`
            ])
        ]),
        e({ styles: [styles.bsCallout, styles.bsCalloutDanger], attrs: { id: 'callout-inline-form-labels' } }, [
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
        e({ styles: styles.bsExample }, [
            form({ inline: true }, [
                formGroup({}, [
                    label({ for: 'exampleInputName2' }, 'Name'),
                    inputText({ id: 'exampleInputName2', placeholder: 'Jane Doe' })
                ]),
                formGroup({}, [
                    label({ for: 'exampleInputEmail2' }, 'Email'),
                    inputText({ id: 'exampleInputEmail2', type: InputTextType.email, placeholder: 'jane.doe@example.com' })
                ]),
                button({ label: 'Send invitation', onClick: () => alert('Clicked!') })
            ])
        ]),
        figure({ styles: styles.highlight }, pre({}, code({ styles: langJs }, [
            `form({ inline: true }, [`, e({ tag: 'br' }),
            `    formGroup({}, [`, e({ tag: 'br' }),
            `        label({ for: 'exampleInputName2' }, 'Name'),`, e({ tag: 'br' }),
            `        inputText({ id: 'exampleInputName2', placeholder: 'Jane Doe' })`, e({ tag: 'br' }),
            `    ]),`, e({ tag: 'br' }),
            `    formGroup({}, [`, e({ tag: 'br' }),
            `        label({ for: 'exampleInputEmail2' }, 'Email'),`, e({ tag: 'br' }),
            `        inputText({ id: 'exampleInputEmail2', type: InputTextType.email, placeholder: 'jane.doe@example.com' })`,
            e({ tag: 'br' }),
            `    ]),`, e({ tag: 'br' }),
            `    button({ label: 'Send invitation', onClick: () => alert('Clicked!') })`, e({ tag: 'br' }),
            `])`
        ]))),
        e({ styles: styles.bsExample }, [
            form({ inline: true }, [
                formGroup({}, [
                    label({ for: 'exampleInputEmail3', srOnly: true }, 'Email address'),
                    inputText({ id: 'exampleInputEmail3', type: InputTextType.email, placeholder: 'Email' })
                ]),
                formGroup({}, [
                    label({ for: 'Email' }, 'Email'),
                    inputText({ id: 'Email', type: InputTextType.password, placeholder: 'Password' })
                ]),
                checkbox({ label: { title: 'Remember me' }, inputCheckbox: {} }),
                button({ label: 'Sign in', onClick: () => alert('Clicked!') })
            ])
        ]),
        figure({ styles: styles.highlight }, pre({}, code({ styles: langJs }, [
            `form({ inline: true }, [`, e({ tag: 'br' }),
            `    formGroup({}, [`, e({ tag: 'br' }),
            `        label({ for: 'exampleInputEmail3', srOnly: true }, 'Email address'),`, e({ tag: 'br' }),
            `        inputText({ id: 'exampleInputEmail3', type: InputTextType.email, placeholder: 'Email' })`, e({ tag: 'br' }),
            `    ]),`, e({ tag: 'br' }),
            `    formGroup({}, [`, e({ tag: 'br' }),
            `        label({ for: 'Email' }, 'Email'),`, e({ tag: 'br' }),
            `        inputText({ id: 'Email', type: InputTextType.password, placeholder: 'Password' })`,
            e({ tag: 'br' }),
            `        checkbox({ label: { title: 'Remember me' }, inputCheckbox: {} }),`, e({ tag: 'br' }),
            `    ]),`, e({ tag: 'br' }),
            `    button({ label: 'Sign in', onClick: () => alert('Clicked!') })`, e({ tag: 'br' }),
            `])`
        ]))),
        e({ styles: styles.bsExample }, [
            form({ inline: true }, [
                formGroup({}, [
                    label({ for: 'exampleInputAmount', srOnly: true }, 'Amount (in dollars)'),
                    inputGroup({}, [
                        inputGroupAddon({}, '$'),
                        inputText({ id: 'exampleInputAmount', type: InputTextType.number, placeholder: 'Amount' }),
                        inputGroupAddon({}, '.00')
                    ])
                ]),
                button({ label: 'Transfer cash', option: ButtonOption.primary, onClick: () => alert('Clicked!') })
            ])
        ]),
        figure({ styles: styles.highlight }, pre({}, code({ styles: langJs }, [
            `form({ inline: true }, [`, e({ tag: 'br' }),
            `    formGroup({}, [`, e({ tag: 'br' }),
            `        label({ for: 'exampleInputAmount', srOnly: true }, 'Amount (in dollars)'),`, e({ tag: 'br' }),
            `        inputGroup({}, [`, e({ tag: 'br' }),
            `            inputGroupAddon({}, '$'),`, e({ tag: 'br' }),
            `            inputText({ id: 'exampleInputAmount', type: InputTextType.number, placeholder: 'Amount' }),`, e({ tag: 'br' }),
            `            inputGroupAddon({}, '.00')`, e({ tag: 'br' }),
            `        ])     `, e({ tag: 'br' }),
            `    ]),`, e({ tag: 'br' }),
            `    button({ label: 'Sign in', onClick: () => alert('Clicked!') })`, e({ tag: 'br' }),
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
            ` form input data property. Doing so changes `, code({}, 'formGroups({}, ...)'), `s to behave as grid rows, so no need for `,
            code({}, 'row({}, ...)'), `.`

        ]),
        e({ styles: styles.bsExample }, [
            form({ horizontal: true }, [
                formGroup({}, [
                    label({ controlLabel: true, for: 'inputEmail3', styles: colStyles[Size.sm][2] }, 'Email'),
                    col({ size: Size.sm, count: 10 },
                        inputText({ id: 'inputEmail3', type: InputTextType.email, placeholder: 'Email' }))
                ]),
                formGroup({}, [
                    label({ controlLabel: true, for: 'inputPassword3', styles: colStyles[Size.sm][2] }, 'Password'),
                    col({ size: Size.sm, count: 10 },
                        inputText({ id: 'inputPassword3', type: InputTextType.email, placeholder: 'Password' }))
                ]),
                formGroup({}, [
                    col({ size: Size.sm, count: 10, offsets: [{ size: Size.sm, count: 2 }] },
                        checkbox({ label: { title: 'Remember me' } }))
                ]),
                formGroup({}, [
                    col({ size: Size.sm, count: 10, offsets: [{ size: Size.sm, count: 2 }] },
                        button({ label: 'Sign in', onClick: () => alert('Clicked!') })
                    )
                ])
            ])
        ]),
        figure({ styles: styles.highlight }, pre({}, code({ styles: langJs }, [
            `form({ horizontal: true }, [`, e({ tag: 'br' }),
            `    formGroup({}, [`, e({ tag: 'br' }),
            `        label({ controlLabel: true, for: 'inputEmail3', styles: colStyles[Size.sm][2] }, 'Email'),`, e({ tag: 'br' }),
            `        col({ size: Size.sm, count: 10 },`, e({ tag: 'br' }),
            `            inputText({ id: 'inputEmail3', type: InputTextType.email, placeholder: 'Email' }))`, e({ tag: 'br' }),
            `    ]),`, e({ tag: 'br' }),
            `    formGroup({}, [`, e({ tag: 'br' }),
            `        label({ controlLabel: true, for: 'inputPassword3', styles: colStyles[Size.sm][2] }, 'Password'),`, e({ tag: 'br' }),
            `        col({ size: Size.sm, count: 10 },`, e({ tag: 'br' }),
            `            inputText({ id: 'inputPassword3', type: InputTextType.email, placeholder: 'Password' }))`, e({ tag: 'br' }),
            `    ]),`, e({ tag: 'br' }),
            `    formGroup({}, [`, e({ tag: 'br' }),
            `        col({ size: Size.sm, count: 10, offsets: [{ size: Size.sm, count: 2 }] },`, e({ tag: 'br' }),
            `             checkbox({ label: { title: 'Remember me' } }))`, e({ tag: 'br' }),
            `    ]),`, e({ tag: 'br' }),
            `    formGroup({}, [`, e({ tag: 'br' }),
            `        col({ size: Size.sm, count: 10, offsets: [{ size: Size.sm, count: 2 }] },`, e({ tag: 'br' }),
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
        e({ styles: [styles.bsCallout, styles.bsCalloutDanger], attrs: { id: 'callout-input-needs-type' } }, [
            h4({}, `Type declaration required`),
            p({}, [
                `Inputs type should be defined by the `, code({}, 'type'), ` input data property or the `, code({}, 'InputTextType.text'),
                ` will be used as the default one.`
            ])
        ]),
        e({ styles: styles.bsExample }, [
            form({}, [
                formGroup({}, inputText({ placeholder: 'Text input' })),
                formGroup({}, inputText({ type: InputTextType.number, placeholder: 'Number input' }))
            ])
        ]),
        figure({ styles: styles.highlight }, pre({}, code({ styles: langJs }, [
            `inputText({ placeholder: 'Text input' })`, e({ tag: 'br' }),
            `inputText({ type: InputTextType.number, placeholder: 'Number input' })`
        ]))),
        e({ styles: [styles.bsCallout, styles.bsCalloutInfo], attrs: { id: 'callout-xref-input-group' } }, [
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
        e({ styles: styles.bsExample }, [
            formGroup({}, textarea({ rows: 3 }))
        ]),
        figure({ styles: styles.highlight }, pre({}, code({ styles: langJs }, [
            `textarea({ rows: 3 })`
        ]))),
        h3({ attrs: { id: 'checkboxes-and-radios' } }, 'Checkboxes and radios'),
        p({}, `Checkboxes are for selecting one or several options in a list, while radios are for selecting one option from many.`),
        h4({ attrs: { id: 'default-stacked' } }, 'Default (stacked)'),
        e({ styles: styles.bsExample }, [
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
        figure({ styles: styles.highlight }, pre({}, code({ styles: langJs }, [
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
        e({ styles: styles.bsExample }, [
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
        figure({ styles: styles.highlight }, pre({}, code({ styles: langJs }, [
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
        e({ styles: styles.bsExample }, [
            form({}, [
                checkbox({ inputCheckbox: { id: 'blankCheckbox', aria: { label: '...' } } }),
                radio({ inputRadio: { id: 'blankRadio1', value: 'option1', name: 'blankRadio', aria: { label: '...' } } })
            ])
        ]),
        figure({ styles: styles.highlight }, pre({}, code({ styles: langJs }, [
            `checkbox({ inputCheckbox: { id: 'blankCheckbox', aria: { label: '...' } } }),`, e({ tag: 'br' }),
            `radio({ inputRadio: { id: 'blankRadio1', value: 'option1', name: 'blankRadio', aria: { label: '...' } } })`
        ]))),
        h4({ attrs: { id: 'selects' } }, 'Selects'),
        p({}, [
            `Note that many native select menus—namely in Safari and Chrome—have rounded corners that cannot be modified via `,
            code({}, 'border-radius'), ` properties.`
        ]),
        e({ styles: styles.bsExample }, [
            form({}, [
                select({
                    options: [{ value: '1' }, { value: '2' }, { value: '3' }, { value: '4' }, { value: '5' }]
                })
            ])
        ]),
        figure({ styles: styles.highlight }, pre({}, code({ styles: langJs }, [
            `select({`, e({ tag: 'br' }),
            `    options: [{ value: '1' }, { value: '2' }, { value: '3' }, { value: '4' }, { value: '5' }]`, e({ tag: 'br' }),
            `})`
        ]))),
        p({}, [
            `For `, code({}, 'select'), ` components with the `, code({}, 'multiple'), ` input data property set to `,
            code({}, 'true'), `, multiple options are shown by default.`
        ]),
        e({ styles: styles.bsExample }, [
            form({}, [
                select({
                    multiple: true,
                    options: [{ value: '1' }, { value: '2' }, { value: '3' }, { value: '4' }, { value: '5' }]
                })
            ])
        ]),
        figure({ styles: styles.highlight }, pre({}, code({ styles: langJs }, [
            `select({`, e({ tag: 'br' }),
            `    multiple: true,`, e({ tag: 'br' }),
            `    options: [{ value: '1' }, { value: '2' }, { value: '3' }, { value: '4' }, { value: '5' }]`, e({ tag: 'br' }),
            `})`
        ])))
    ];
}
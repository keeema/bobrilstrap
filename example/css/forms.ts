import * as b from 'bobril';
import * as bs from '../../index';
import { styles } from '../bsexample/css';
import { pre, langJs } from '../prettify/pre';
import { section } from '../common/section';

export const forms = b.createVirtualComponent({
    render(_ctx: b.IBobrilCtx, me: b.IBobrilNode) {
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
});

function basicExample(): b.IBobrilChildren {
    return [
        b.anchor(bs.h2({ attrs: { id: 'basic-forms' } }, 'Basic example')),
        bs.p({}, [
            `Individual form controls automatically receive some global styling. All textual `,
            bs.code({}, '<input>'), `, `, bs.code({}, '<textarea>'), `, and `, bs.code({}, '<select>'), ` elements with `,
            bs.code({}, 'formControl'),
            ` are set to `, bs.code({}, 'width: 100%;'), ` by default. Wrap labels and controls in `, bs.code({}, 'bs.formGroup'),
            ` for optimum spacing.`
        ]),
        bs.e({ style: styles.bsExample }, [
            bs.form({}, [
                bs.formGroup({}, [
                    bs.label({ for: 'exampleInputEmail1' }, 'Email address'),
                    bs.inputText({ id: 'exampleInputEmail1', type: bs.InputTextType.Email, placeholder: 'Email' })
                ]),
                bs.formGroup({}, [
                    bs.label({ for: 'exampleInputPassword1' }, 'Password'),
                    bs.inputText({ id: 'exampleInputPassword1', type: bs.InputTextType.Password, placeholder: 'Password' })
                ]),
                bs.formGroup({}, [
                    bs.label({ for: 'exampleInputFile' }, 'File input'),
                    bs.e({ tag: 'input', attrs: { type: 'file', id: 'exampleInputFile' } }),
                    bs.helpText({}, 'Example block-level help text here.')
                ]),
                bs.checkbox({ label: { title: 'Check me out' }, inputCheckbox: {} }),
                bs.button({ label: 'Submit', onClick: () => alert('Clicked!') })
            ])
        ]),
        bs.figure({ style: styles.highlight }, pre({}, bs.code({ style: langJs }, [
            `bs.form({}, [`, bs.e({ tag: 'br' }),
            `    bs.formGroup({}, [`, bs.e({ tag: 'br' }),
            `        bs.label({ for: 'exampleInputEmail1' }, 'Email address'),`, bs.e({ tag: 'br' }),
            `        bs.inputText({ id: 'exampleInputEmail1', type: bs.InputTextType.Email, placeholder: 'Email' })`, bs.e({ tag: 'br' }),
            `    ]),`, bs.e({ tag: 'br' }),
            `    bs.formGroup({}, [`, bs.e({ tag: 'br' }),
            `        bs.label({ for: 'exampleInputPassword1' }, 'Password'),`, bs.e({ tag: 'br' }),
            `        bs.inputText({ id: 'exampleInputPassword1', type: bs.InputTextType.Password, placeholder: 'Password' })`,
            bs.e({ tag: 'br' }),
            `    ]),`, bs.e({ tag: 'br' }),
            `    bs.formGroup({}, [`, bs.e({ tag: 'br' }),
            `        bs.label({ for: 'exampleInputFile' }, 'File input'),`, bs.e({ tag: 'br' }),
            `        bs.e({ tag: 'input', attrs: { type: 'file', id: 'exampleInputFile' } }),`, bs.e({ tag: 'br' }),
            `        bs.helpText({}, 'Example block-level help text here.')`, bs.e({ tag: 'br' }),
            `    ]),`, bs.e({ tag: 'br' }),
            `    bs.checkbox({ label: { title: 'Check me out' }, inputCheckbox: {} }),`, bs.e({ tag: 'br' }),
            `    bs.button({ label: 'Submit', onClick: () => alert('Clicked!') })`, bs.e({ tag: 'br' }),
            `])`, bs.e({ tag: 'br' })
        ]))),
        bs.e({ style: [styles.bsCallout, styles.bsCalloutDanger], attrs: { id: 'callout-formgroup-inputgroup' } }, [
            bs.h4({}, `Don't mix form groups with input groups`),
            bs.p({}, `Do not mix form groups directly with input groups. Instead, nest the input group inside of the form group.`)
        ])
    ];
}

function inlineForm(): b.IBobrilChildren {
    return [
        b.anchor(bs.h2({ attrs: { id: 'forms-inline' } }, 'Inline form')),
        bs.p({}, [
            `Set `, bs.code({}, 'inline'), ` input data property to your form for left-aligned and inline-block controls.`,
            bs.strong({}, `This only applies to forms within viewports that are at least 768px wide.`)
        ]),
        bs.e({ style: [styles.bsCallout, styles.bsCalloutDanger], attrs: { id: 'callout-inline-form-width' } }, [
            bs.h4({}, `May require custom widths`),
            bs.p({}, [
                `Inputs and selects have `, bs.code({}, 'width: 100%;'), ` applied by default in Bootstrap. Within inline forms, we reset
                that to `, bs.code({}, 'width: auto;'), ` so multiple controls can reside on the same line. Depending on your layout, 
                additional custom widths may be required.`
            ])
        ]),
        bs.e({ style: [styles.bsCallout, styles.bsCalloutDanger], attrs: { id: 'callout-inline-form-labels' } }, [
            bs.h4({}, `Always add labels`),
            bs.p({}, [
                `Screen readers will have trouble with your forms if you don't include a label for every input. For these inline forms, 
                you can hide the labels using the `,
                bs.code({}, 'srOnly'),
                ` label input data property. There are further alternative methods of providing a label for assistive technologies, 
                such as the `,
                bs.code({}, 'aria.label'), `, `,
                bs.code({}, 'aria.labelledBy'), ` or `,
                bs.code({}, 'title'),
                ` input data property.  If none of these is set, screen readers may resort to using the `,
                bs.code({}, 'placeholder'), ` attribute defined by `, bs.code({}, 'placeholder'),
                ` input data property, if present, but note that use of `, bs.code({}, 'placeholder'),
                ` as a replacement for other labelling methods is not advised.`
            ])
        ]),
        bs.e({ style: styles.bsExample }, [
            bs.form({ inline: true }, [
                bs.formGroup({}, [
                    bs.label({ for: 'exampleInputName2' }, 'Name'), ' ',
                    bs.inputText({ id: 'exampleInputName2', placeholder: 'Jane Doe' })
                ]), ' ',
                bs.formGroup({}, [
                    bs.label({ for: 'exampleInputEmail2' }, 'Email'), ' ',
                    bs.inputText({
                        id: 'exampleInputEmail2',
                        type: bs.InputTextType.Email,
                        placeholder: 'jane.doe@example.com'
                    })
                ]), ' ',
                bs.button({ label: 'Send invitation', onClick: () => alert('Clicked!') })
            ])
        ]),
        bs.figure({ style: styles.highlight }, pre({}, bs.code({ style: langJs }, [
            `bs.form({ inline: true }, [`, bs.e({ tag: 'br' }),
            `    bs.formGroup({}, [`, bs.e({ tag: 'br' }),
            `        bs.label({ for: 'exampleInputName2' }, 'Name'), ' ',`, bs.e({ tag: 'br' }),
            `        bs.inputText({ id: 'exampleInputName2', placeholder: 'Jane Doe' })`, bs.e({ tag: 'br' }),
            `    ]), ' ',`, bs.e({ tag: 'br' }),
            `    bs.formGroup({}, [`, bs.e({ tag: 'br' }),
            `        bs.label({ for: 'exampleInputEmail2' }, 'Email'), ' ',`, bs.e({ tag: 'br' }),
            `        bs.inputText({`, bs.e({ tag: 'br' }),
            `            id: 'exampleInputEmail2',`, bs.e({ tag: 'br' }),
            `            type: bs.InputTextType.Email,`, bs.e({ tag: 'br' }),
            `            placeholder: 'jane.doe@example.com'`, bs.e({ tag: 'br' }),
            `        })`,
            bs.e({ tag: 'br' }),
            `    ]), ' ',`, bs.e({ tag: 'br' }),
            `    bs.button({ label: 'Send invitation', onClick: () => alert('Clicked!') })`, bs.e({ tag: 'br' }),
            `])`
        ]))),
        bs.e({ style: styles.bsExample }, [
            bs.form({ inline: true }, [
                bs.formGroup({}, [
                    bs.label({ for: 'exampleInputEmail3', srOnly: true }, 'Email address'),
                    bs.inputText({
                        id: 'exampleInputEmail3',
                        type: bs.InputTextType.Email,
                        placeholder: 'Email'
                    })
                ]), ' ',
                bs.formGroup({}, [
                    bs.label({ for: 'exampleInputPassword3', srOnly: true }, 'Password'),
                    bs.inputText({
                        id: 'exampleInputPassword3',
                        type: bs.InputTextType.Password,
                        placeholder: 'Password'
                    })
                ]), ' ',
                bs.checkbox({ label: { title: 'Remember me' }, inputCheckbox: {} }), ' ',
                bs.button({ label: 'Sign in', onClick: () => alert('Clicked!') })
            ])
        ]),
        bs.figure({ style: styles.highlight }, pre({}, bs.code({ style: langJs }, [
            `bs.form({ inline: true }, [`, bs.e({ tag: 'br' }),
            `    bs.formGroup({}, [`, bs.e({ tag: 'br' }),
            `        bs.label({ for: 'exampleInputEmail3', srOnly: true }, 'Email address'),`, bs.e({ tag: 'br' }),
            `        bs.inputText({`, bs.e({ tag: 'br' }),
            `            id: 'exampleInputEmail3',`, bs.e({ tag: 'br' }),
            `            type: bs.InputTextType.Email,`, bs.e({ tag: 'br' }),
            `            placeholder: 'Email'`, bs.e({ tag: 'br' }),
            `        })`, bs.e({ tag: 'br' }),
            `    ]), ' ',`, bs.e({ tag: 'br' }),
            `    bs.formGroup({}, [`, bs.e({ tag: 'br' }),
            `        bs.label({ for: 'exampleInputPassword3', srOnly: true }, 'Password'),`, bs.e({ tag: 'br' }),
            `        bs.inputText({`, bs.e({ tag: 'br' }),
            `            id: 'exampleInputPassword3',`, bs.e({ tag: 'br' }),
            `            type: bs.InputTextType.Password,`, bs.e({ tag: 'br' }),
            `            placeholder: 'Password'`, bs.e({ tag: 'br' }),
            `        })`, bs.e({ tag: 'br' }),
            `    ]), ' ',`, bs.e({ tag: 'br' }),
            `    bs.checkbox({ label: { title: 'Remember me' }, inputCheckbox: {} }), ' ',`, bs.e({ tag: 'br' }),
            `    bs.button({ label: 'Sign in', onClick: () => alert('Clicked!') })`, bs.e({ tag: 'br' }),
            `])`
        ]))),
        bs.e({ style: styles.bsExample }, [
            bs.form({ inline: true }, [
                bs.formGroup({}, [
                    bs.label({ for: 'exampleInputAmount', srOnly: true }, 'Amount (in dollars)'),
                    bs.inputGroup({}, [
                        bs.inputGroupAddon({}, '$'),
                        bs.inputText({ id: 'exampleInputAmount', type: bs.InputTextType.Number, placeholder: 'Amount' }),
                        bs.inputGroupAddon({}, '.00')
                    ])
                ]), ' ',
                bs.button({ label: 'Transfer cash', option: bs.ButtonOption.Primary, onClick: () => alert('Clicked!') })
            ])
        ]),
        bs.figure({ style: styles.highlight }, pre({}, bs.code({ style: langJs }, [
            `bs.form({ inline: true }, [`, bs.e({ tag: 'br' }),
            `    bs.formGroup({}, [`, bs.e({ tag: 'br' }),
            `        bs.label({ for: 'exampleInputAmount', srOnly: true }, 'Amount (in dollars)'),`, bs.e({ tag: 'br' }),
            `        bs.inputGroup({}, [`, bs.e({ tag: 'br' }),
            `            bs.inputGroupAddon({}, '$'),`, bs.e({ tag: 'br' }),
            `            bs.inputText({ id: 'exampleInputAmount', type: bs.InputTextType.Number, placeholder: 'Amount' }),`,
            bs.e({ tag: 'br' }),
            `            bs.inputGroupAddon({}, '.00')`, bs.e({ tag: 'br' }),
            `        ])     `, bs.e({ tag: 'br' }),
            `    ]), ' ',`, bs.e({ tag: 'br' }),
            `    bs.button({ label: 'Transfer cash', option: bs.ButtonOption.Primary, onClick: () => alert('Clicked!') })`,
            bs.e({ tag: 'br' }),
            `])`
        ])))
    ];
}

function horizontalForm(): b.IBobrilChildren {
    return [
        b.anchor(bs.h2({ attrs: { id: 'forms-horizontal' } }, 'Horizontal form')),
        bs.p({}, [
            `Use Bobrilstrap's predefined grid styles and components to align labels and groups of form controls 
            in a horizontal layout by adding `, bs.code({}, 'horizontal'),
            ` form input data property. Doing so changes `, bs.code({}, 'bs.formGroup'), `s to behave as grid rows, so no need for `,
            bs.code({}, 'bs.row'), `.`

        ]),
        bs.e({ style: styles.bsExample }, [
            bs.form({ horizontal: true }, [
                bs.formGroup({}, [
                    bs.label({ controlLabel: true, for: 'inputEmail3', style: bs.colStyles(bs.Size.Sm)(2) }, 'Email'),
                    bs.col(
                        { size: bs.Size.Sm, span: 10 },
                        bs.inputText({ id: 'inputEmail3', type: bs.InputTextType.Email, placeholder: 'Email' }))
                ]),
                bs.formGroup({}, [
                    bs.label({ controlLabel: true, for: 'inputPassword3', style: bs.colStyles(bs.Size.Sm)(2) }, 'Password'),
                    bs.col(
                        { size: bs.Size.Sm, span: 10 },
                        bs.inputText({ id: 'inputPassword3', type: bs.InputTextType.Password, placeholder: 'Password' }))
                ]),
                bs.formGroup({}, [
                    bs.col(
                        { size: bs.Size.Sm, span: 10, offsets: [{ size: bs.Size.Sm, span: 2 }] },
                        bs.checkbox({ label: { title: 'Remember me' } }))
                ]),
                bs.formGroup({}, [
                    bs.col(
                        { size: bs.Size.Sm, span: 10, offsets: [{ size: bs.Size.Sm, span: 2 }] },
                        bs.button({ label: 'Sign in', onClick: () => alert('Clicked!') })
                    )
                ])
            ])
        ]),
        bs.figure({ style: styles.highlight }, pre({}, bs.code({ style: langJs }, [
            `bs.form({ horizontal: true }, [`, bs.e({ tag: 'br' }),
            `    bs.formGroup({}, [`, bs.e({ tag: 'br' }),
            `        bs.label({ controlLabel: true, for: 'inputEmail3', style: bs.colStyles(bs.Size.Sm)(2) }, 'Email'),`,
            bs.e({ tag: 'br' }),
            `        bs.col({ size: bs.Size.Sm, span: 10 },`, bs.e({ tag: 'br' }),
            `            bs.inputText({ id: 'inputEmail3', type: bs.InputTextType.Email, placeholder: 'Email' }))`, bs.e({ tag: 'br' }),
            `    ]),`, bs.e({ tag: 'br' }),
            `    bs.formGroup({}, [`, bs.e({ tag: 'br' }),
            `        bs.label({ controlLabel: true, for: 'inputPassword3', style: bs.colStyles(bs.Size.Sm)(2) }, 'Password'),`,
            bs.e({ tag: 'br' }),
            `        bs.col({ size: bs.Size.Sm, span: 10 },`, bs.e({ tag: 'br' }),
            `            bs.inputText({ id: 'inputPassword3', type: bs.InputTextType.Password, placeholder: 'Password' }))`,
            bs.e({ tag: 'br' }),
            `    ]),`, bs.e({ tag: 'br' }),
            `    bs.formGroup({}, [`, bs.e({ tag: 'br' }),
            `        bs.col({ size: bs.Size.Sm, span: 10, offsets: [{ size: bs.Size.Sm, span: 2 }] },`, bs.e({ tag: 'br' }),
            `             bs.checkbox({ label: { title: 'Remember me' } }))`, bs.e({ tag: 'br' }),
            `    ]),`, bs.e({ tag: 'br' }),
            `    bs.formGroup({}, [`, bs.e({ tag: 'br' }),
            `        bs.col({ size: bs.Size.Sm, span: 10, offsets: [{ size: bs.Size.Sm, span: 2 }] },`, bs.e({ tag: 'br' }),
            `            bs.button({ label: 'Sign in', onClick: () => alert('Clicked!') })`, bs.e({ tag: 'br' }),
            `        )`, bs.e({ tag: 'br' }),
            `    ])`, bs.e({ tag: 'br' }),
            `])`
        ])))
    ];
}

function supportedControls(): b.IBobrilChildren {
    return [
        b.anchor(bs.h2({ attrs: { id: 'forms-controls' } }, 'Supported controls')),
        bs.p({}, [
            `Most common form control, text-based input fields (`,
            bs.code({}, 'bs.inputText'),
            ` component). Includes support for all HTML5 types: `,
            bs.code({}, 'text'), `, `,
            bs.code({}, 'password'), `, `,
            bs.code({}, 'datetime'), `, `,
            bs.code({}, 'datetime-local'), `, `,
            bs.code({}, 'date'), `, `,
            bs.code({}, 'month'), `, `,
            bs.code({}, 'time'), `, `,
            bs.code({}, 'week'), `, `,
            bs.code({}, 'number'), `, `,
            bs.code({}, 'email'), `, `,
            bs.code({}, 'url'), `, `,
            bs.code({}, 'search'), `, `,
            bs.code({}, 'tel'), ` and `,
            bs.code({}, 'color'), `.`

        ]),
        bs.e({ style: [styles.bsCallout, styles.bsCalloutDanger], attrs: { id: 'callout-input-needs-type' } }, [
            bs.h4({}, `Type declaration required`),
            bs.p({}, [
                `Inputs type should be defined by the `, bs.code({}, 'type'), ` input data property or the `,
                bs.code({}, 'bs.InputTextType.Text'), ` will be used as the default one.`
            ])
        ]),
        bs.e({ style: styles.bsExample }, [
            bs.form({}, [
                bs.formGroup({}, bs.inputText({ placeholder: 'Text input' })),
                bs.formGroup({}, bs.inputText({ type: bs.InputTextType.Number, placeholder: 'Number input' }))
            ])
        ]),
        bs.figure({ style: styles.highlight }, pre({}, bs.code({ style: langJs }, [
            `bs.inputText({ placeholder: 'Text input' })`, bs.e({ tag: 'br' }),
            `bs.inputText({ type: bs.InputTextType.Number, placeholder: 'Number input' })`
        ]))),
        bs.e({ style: [styles.bsCallout, styles.bsCalloutInfo], attrs: { id: 'callout-xref-input-group' } }, [
            bs.h4({}, `Input groups`),
            bs.p({}, [
                `To add integrated text or buttons before and/or after any text-based `, bs.code({}, '<input>'),
                `, check out the input `, bs.code({}, 'bs.inputGroup'), `.`
            ])
        ]),
        bs.h3({ attrs: { id: 'textarea' } }, 'Textarea'),
        bs.p({}, [
            `Form control which supports multiple lines of text. Change `, bs.code({}, 'rows'), ` attribute as necessary.`
        ]),
        bs.e({ style: styles.bsExample }, [
            bs.formGroup({}, bs.textarea({ rows: 3 }))
        ]),
        bs.figure({ style: styles.highlight }, pre({}, bs.code({ style: langJs }, [
            `bs.textarea({ rows: 3 })`
        ]))),
        bs.h3({ attrs: { id: 'checkboxes-and-radios' } }, 'Checkboxes and radios'),
        bs.p({}, `Checkboxes are for selecting one or several options in a list, while radios are for selecting one option from many.`),
        bs.h4({ attrs: { id: 'default-stacked' } }, 'Default (stacked)'),
        bs.e({ style: styles.bsExample }, [
            bs.form({}, [
                bs.checkbox({
                    label: { title: 'Option one is this and that—be sure to include why it\'s great' }
                }),
                bs.checkbox({
                    label: { title: 'Option two is disabled' },
                    inputCheckbox: { disabled: true }
                }),
                bs.e({ tag: 'br' }),
                bs.radio({
                    label: { title: 'Option one is this and that—be sure to include why it\'s great' },
                    inputRadio: { id: 'optionsRadios1', value: 'option1', name: 'optionsRadios' }
                }),
                bs.radio({
                    label: { title: 'Option two can be something else and selecting it will deselect option one' },
                    inputRadio: { id: 'optionsRadios2', value: 'option2', name: 'optionsRadios' }
                }),
                bs.radio({
                    label: { title: 'Option three is disabled' },
                    inputRadio: { id: 'optionsRadios3', value: 'option3', name: 'optionsRadios', disabled: true }
                })
            ])
        ]),
        bs.figure({ style: styles.highlight }, pre({}, bs.code({ style: langJs }, [
            `bs.checkbox({`, bs.e({ tag: 'br' }),
            `    label: { title: 'Option one is this and that—be sure to include why it\\'s great' }`, bs.e({ tag: 'br' }),
            `}),`, bs.e({ tag: 'br' }),
            `bs.checkbox({`, bs.e({ tag: 'br' }),
            `    label: { title: 'Option two is disabled' },`, bs.e({ tag: 'br' }),
            `    inputCheckbox: { disabled: true }`, bs.e({ tag: 'br' }),
            `}),`, bs.e({ tag: 'br' }),
            `bs.radio({`, bs.e({ tag: 'br' }),
            `    label: { title: 'Option one is this and that—be sure to include why it\\'s great' },`, bs.e({ tag: 'br' }),
            `    inputRadio: { id: 'optionsRadios1', value: 'option1', name: 'optionsRadios' }`, bs.e({ tag: 'br' }),
            `}),`, bs.e({ tag: 'br' }),
            `bs.radio({`, bs.e({ tag: 'br' }),
            `    label: { title: 'Option two can be something else and selecting it will deselect option one' },`, bs.e({ tag: 'br' }),
            `    inputRadio: { id: 'optionsRadios2', value: 'option2', name: 'optionsRadios' }`, bs.e({ tag: 'br' }),
            `}),`, bs.e({ tag: 'br' }),
            `bs.radio({`, bs.e({ tag: 'br' }),
            `    label: { title: 'Option three is disabled' },`, bs.e({ tag: 'br' }),
            `    inputRadio: { id: 'optionsRadios3', value: 'option3', name: 'optionsRadios', disabled: true }`, bs.e({ tag: 'br' }),
            `})`
        ]))),
        bs.h4({ attrs: { id: 'inline-checkboxes-and-radios' } }, 'Inline checkboxes and radios'),
        bs.p({}, [
            `Use the `, bs.code({}, 'inline'),
            ` input data property on a series of checkboxes or radios for controls that appear on the same line.`
        ]),
        bs.e({ style: styles.bsExample }, [
            bs.form({}, [
                bs.checkbox({ inline: true, label: { title: '1' }, inputCheckbox: { id: 'inlineCheckbox1' } }),
                bs.checkbox({ inline: true, label: { title: '2' }, inputCheckbox: { id: 'inlineCheckbox2' } }),
                bs.checkbox({ inline: true, label: { title: '3' }, inputCheckbox: { id: 'inlineCheckbox3' } })
            ]),
            bs.e({ tag: 'br' }),
            bs.form({}, [
                bs.radio({
                    inline: true,
                    label: { title: '1' },
                    inputRadio: { id: 'inlineRadio1', value: 'option1', name: 'inlineRadioOptions' }
                }),
                bs.radio({
                    inline: true,
                    label: { title: '2' },
                    inputRadio: { id: 'inlineRadio2', value: 'option2', name: 'inlineRadioOptions' }
                }),
                bs.radio({
                    inline: true,
                    label: { title: '3' },
                    inputRadio: { id: 'inlineRadio3', value: 'option3', name: 'inlineRadioOptions' }
                })
            ])
        ]),
        bs.figure({ style: styles.highlight }, pre({}, bs.code({ style: langJs }, [
            `bs.checkbox({ inline: true, label: { title: '1' }, inputCheckbox: { id: 'inlineCheckbox1' } }),`, bs.e({ tag: 'br' }),
            `bs.checkbox({ inline: true, label: { title: '2' }, inputCheckbox: { id: 'inlineCheckbox2' } }),`, bs.e({ tag: 'br' }),
            `bs.checkbox({ inline: true, label: { title: '3' }, inputCheckbox: { id: 'inlineCheckbox3' } }),`, bs.e({ tag: 'br' }),
            `bs.radio({`, bs.e({ tag: 'br' }),
            `    inline: true,`, bs.e({ tag: 'br' }),
            `    label: { title: '1' },`, bs.e({ tag: 'br' }),
            `    inputRadio: { id: 'inlineRadio1', value: 'option1', name: 'inlineRadioOptions' }`, bs.e({ tag: 'br' }),
            `}),`, bs.e({ tag: 'br' }),
            `bs.radio({`, bs.e({ tag: 'br' }),
            `    inline: true,`, bs.e({ tag: 'br' }),
            `    label: { title: '2' },`, bs.e({ tag: 'br' }),
            `    inputRadio: { id: 'inlineRadio2', value: 'option2', name: 'inlineRadioOptions' }`, bs.e({ tag: 'br' }),
            `}),`, bs.e({ tag: 'br' }),
            `bs.radio({`, bs.e({ tag: 'br' }),
            `    inline: true,`, bs.e({ tag: 'br' }),
            `    label: { title: '3' },`, bs.e({ tag: 'br' }),
            `    inputRadio: { id: 'inlineRadio3', value: 'option3', name: 'inlineRadioOptions' }`, bs.e({ tag: 'br' }),
            `})`
        ]))),
        bs.h4({ attrs: { id: 'checkboxes-and-radios-without-la' } }, 'Checkboxes and radios without label text'),
        bs.p({}, [
            `Should you have no label definition, the input is positioned as you'd expect.`,
            bs.strong({}, `Currently only works on non-inline checkboxes and radios. `),
            `Remember to still provide some form of label for assistive technologies (for instance, using `,
            bs.code({}, 'aria.label'), , `).`
        ]),
        bs.e({ style: styles.bsExample }, [
            bs.form({}, [
                bs.checkbox({ inputCheckbox: { id: 'blankCheckbox', aria: { label: '...' } } }),
                bs.radio({ inputRadio: { id: 'blankRadio1', value: 'option1', name: 'blankRadio', aria: { label: '...' } } })
            ])
        ]),
        bs.figure({ style: styles.highlight }, pre({}, bs.code({ style: langJs }, [
            `bs.checkbox({ inputCheckbox: { id: 'blankCheckbox', aria: { label: '...' } } }),`, bs.e({ tag: 'br' }),
            `bs.radio({ inputRadio: { id: 'blankRadio1', value: 'option1', name: 'blankRadio', aria: { label: '...' } } })`
        ]))),
        bs.h4({ attrs: { id: 'selects' } }, 'Selects'),
        bs.p({}, [
            `Note that many native select menus—namely in Safari and Chrome—have rounded corners that cannot be modified via `,
            bs.code({}, 'border-radius'), ` properties.`
        ]),
        bs.e({ style: styles.bsExample }, [
            bs.form({}, [
                bs.select({
                    options: [{ value: '1' }, { value: '2' }, { value: '3' }, { value: '4' }, { value: '5' }]
                })
            ])
        ]),
        bs.figure({ style: styles.highlight }, pre({}, bs.code({ style: langJs }, [
            `bs.select({`, bs.e({ tag: 'br' }),
            `    options: [{ value: '1' }, { value: '2' }, { value: '3' }, { value: '4' }, { value: '5' }]`, bs.e({ tag: 'br' }),
            `})`
        ]))),
        bs.p({}, [
            `For `, bs.code({}, 'select'), ` components with the `, bs.code({}, 'multiple'), ` input data property set to `,
            bs.code({}, 'true'), `, multiple options are shown by default.`
        ]),
        bs.e({ style: styles.bsExample }, [
            bs.form({}, [
                bs.select({
                    multiple: true,
                    options: [{ value: '1' }, { value: '2' }, { value: '3' }, { value: '4' }, { value: '5' }]
                })
            ])
        ]),
        bs.figure({ style: styles.highlight }, pre({}, bs.code({ style: langJs }, [
            `bs.select({`, bs.e({ tag: 'br' }),
            `    multiple: true,`, bs.e({ tag: 'br' }),
            `    options: [{ value: '1' }, { value: '2' }, { value: '3' }, { value: '4' }, { value: '5' }]`, bs.e({ tag: 'br' }),
            `})`
        ])))
    ];
}

function staticControl(): b.IBobrilChildren {
    return [
        b.anchor(bs.h2({ attrs: { id: 'forms-controls-static' } }, 'Static control')),
        bs.p({}, [
            `When you need to place plain text next to a form label within a form, use the `,
            bs.code({}, 'formControlStatic'), ` input data property of `, bs.code({}, 'bs.paragraph'), `.`
        ]),
        bs.e({ style: styles.bsExample }, [
            bs.form({ horizontal: true }, [
                bs.formGroup({}, [
                    bs.label({ controlLabel: true, style: bs.colStyles(bs.Size.Sm)(2) }, 'Email'),
                    bs.col(
                        { size: bs.Size.Sm, span: 10 },
                        bs.p({ formControlStatic: true }, 'email@example.com'))
                ]),
                bs.formGroup({}, [
                    bs.label({ controlLabel: true, for: 'inputPassword', style: bs.colStyles(bs.Size.Sm)(2) }, 'Password'),
                    bs.col(
                        { size: bs.Size.Sm, span: 10 },
                        bs.inputText({ id: 'inputPassword', type: bs.InputTextType.Password, placeholder: 'Password' }))
                ])
            ])
        ]),
        bs.figure({ style: styles.highlight }, pre({}, bs.code({ style: langJs }, [
            `bs.form({ horizontal: true }, [`, bs.e({ tag: 'br' }),
            `    bs.formGroup({}, [`, bs.e({ tag: 'br' }),
            `        bs.label({ controlLabel: true, style: bs.colStyles(bs.Size.Sm)(2) }, 'Email'),`, bs.e({ tag: 'br' }),
            `        bs.col({ size: bs.Size.sm, span: 10 },`, bs.e({ tag: 'br' }),
            `            bs.p({ formControlStatic: true }, 'email@example.com'))`, bs.e({ tag: 'br' }),
            `    ]),`, bs.e({ tag: 'br' }),
            `    bs.formGroup({}, [`, bs.e({ tag: 'br' }),
            `        bs.label({ controlLabel: true, for: 'inputPassword', style: bs.colStyles(bs.Size.Sm)(2) }, 'Password'),`,
            bs.e({ tag: 'br' }),
            `        bs.col({ size: bs.Size.Sm, span: 10 },`, bs.e({ tag: 'br' }),
            `            bs.inputText({ id: 'inputPassword', type: bs.InputTextType.Password, placeholder: 'Password' }))`,
            bs.e({ tag: 'br' }),
            `    ])`, bs.e({ tag: 'br' }),
            `])`
        ])))
    ];
}

function formsControlFocus(): b.IBobrilChildren {
    return [
        b.anchor(bs.h2({ attrs: { id: 'forms-control-focus' } }, 'Focus state')),
        bs.p({}, [
            `Bootstrap removes the default `, bs.code({}, 'outline'), ` styles on some form controls and apply a `,
            bs.code({}, 'box-shadow'), ` in its place for `, bs.code({}, ':focus'), `.`
        ]),
        bs.e({ style: styles.bsExample }, [
            bs.form({}, [
                bs.inputText({ id: 'focusedInput', placeholder: 'Demonstrative focus state' })
            ])
        ]),
        bs.e({ style: [styles.bsCallout, styles.bsCalloutInfo], attrs: { id: 'callout-focus-demo' } }, [
            bs.h4({}, [`Demo `, bs.code({}, ':focus'), `state`]),
            bs.p({}, [
                `The above example input uses custom styles in our documentation to demonstrate the `, bs.code({}, ':focus'),
                ` state on a `, bs.code({}, '.form-control'), `.`
            ])
        ])
    ];
}

function formsControlDisabled(): b.IBobrilChildren {
    return [
        b.anchor(bs.h2({ attrs: { id: 'forms-control-disabled' } }, 'Disabled state')),
        bs.p({}, [
            `Set the `, bs.code({}, 'disabled'),
            ` input comonent data property to prevent user interactions. Disabled inputs appear lighter 
            and add a `, bs.code({}, 'not-allowed'), ` cursor.`
        ]),
        bs.e({ style: styles.bsExample }, [
            bs.form({}, [
                bs.inputText({ id: 'disabledInput', placeholder: 'Disabled input here...', disabled: true })
            ])
        ]),
        bs.figure({ style: styles.highlight }, pre({}, bs.code({ style: langJs }, [
            `bs.form({}, [`, bs.e({ tag: 'br' }),
            `    bs.inputText({ id: 'disabledInput', placeholder: 'Disabled input here...', disabled: true })`, bs.e({ tag: 'br' }),
            `])`
        ])))
    ];
}

function formsControlReadonly(): b.IBobrilChildren {
    return [
        b.anchor(bs.h2({ attrs: { id: 'forms-control-readonly' } }, 'Readonly state')),
        bs.p({}, [
            `Set the `, bs.code({}, 'readonly '), ` input comonent data property to prevent modification of the input's value. Read-only 
            inputs appear lighter (just like disabled inputs), but retain the standard cursor.`
        ]),
        bs.e({ style: styles.bsExample }, [
            bs.form({}, [
                bs.inputText({ placeholder: 'Readonly input here…', readonly: true })
            ])
        ]),
        bs.figure({ style: styles.highlight }, pre({}, bs.code({ style: langJs }, [
            `bs.form({}, [`, bs.e({ tag: 'br' }),
            `     bs.inputText({ placeholder: 'Readonly input here…', readonly: true })`, bs.e({ tag: 'br' }),
            `])`
        ])))
    ];
}

function formsHelpText(): b.IBobrilChildren {
    return [
        b.anchor(bs.h2({ attrs: { id: 'forms-help-text' } }, 'Help text')),
        bs.p({}, `Block level help text for form controls..`),
        bs.e({ style: [styles.bsCallout, styles.bsCalloutInfo], attrs: { id: 'callout-help-text-accessibility' } }, [
            bs.h4({}, `Associating help text with form controls`),
            bs.p({}, [
                `Help text should be explicitly associated with the form control it relates to using the `,
                bs.code({}, 'aria.describedBy'),
                ` input data property. This will ensure that assistive technologies – such as screen readers 
                – will announce this help text when the user focuses or enters the control.`
            ])
        ]),
        bs.e({ style: styles.bsExample }, [
            bs.form({}, [
                bs.formGroup({}, [
                    bs.label({ for: 'inputHelpBlock', title: 'Input with help text' }),
                    bs.inputText({ id: 'inputHelpBlock', aria: { describedBy: 'helpBlock' } })
                ]),
                bs.helpText(
                    { id: 'helpBlock' },
                    'A block of help text that breaks onto a new line and may extend beyond one line.'
                )
            ])
        ]),
        bs.figure({ style: styles.highlight }, pre({}, bs.code({ style: langJs }, [
            `bs.form({}, [`, bs.e({ tag: 'br' }),
            `     bs.formGroup({}, [`, bs.e({ tag: 'br' }),
            `         bs.label({ for: 'inputHelpBlock', title: 'Input with help text' }),`, bs.e({ tag: 'br' }),
            `         bs.inputText({ id: 'inputHelpBlock', aria: { describedBy: 'helpBlock' } })`, bs.e({ tag: 'br' }),
            `     ]),`, bs.e({ tag: 'br' }),
            `     bs.helpText(`, bs.e({ tag: 'br' }),
            `         { id: 'helpBlock' },`, bs.e({ tag: 'br' }),
            `         'A block of help text that breaks onto a new line and may extend beyond one line.'`, bs.e({ tag: 'br' }),
            `     )`, bs.e({ tag: 'br' }),
            `])`
        ])))
    ];
}

function validationStates(): b.IBobrilChildren {
    return [
        b.anchor(bs.h2({ attrs: { id: 'forms-control-validation' } }, 'Validation states')),
        bs.p({}, [
            `Bootstrap includes validation styles for error, warning, and success states on form controls. To use, set `,
            bs.code({}, 'validationState'), ` input data property to the `, bs.code({}, 'bs.formGroup'), ` node. Any node with defined`,
            bs.code({}, 'controlLabel'), ` or `, bs.code({}, 'formControl'), ` style (implicitly by the property or by the style) and `,
            bs.code({}, 'bs.helpText'), `s within that `, bs.code({}, 'bs.formGroup'), ` will receive the validation styles.`
        ]),
        bs.e({ style: [styles.bsCallout, styles.bsCalloutDanger], attrs: { id: 'callout-form-validation-state-accessibility' } }, [
            bs.h4({}, `Conveying validation state to assistive technologies and colorblind users`),
            bs.p({}, `Using these validation styles to denote the state of a form control only provides a visual, color-based indication, 
            which will not be conveyed to users of assistive technologies - such as screen readers - or to colorblind users.`),
            bs.p({}, [
                `Ensure that an alternative indication of state is also provided. For instance, you can include a hint about state in the 
                form control's <label> text itself (as is the case in the following code example), include a Glyphicon (with appropriate 
                alternative text using the `,
                bs.code({}, 'srOnly'), ` input date property or style), or by providing an additional help text 
                block. Specifically for assistive technologies, invalid form controls can also be assigned an `,
                bs.code({}, 'aria.invalid'), `input date property.`
            ])
        ]),
        bs.e({ style: styles.bsExample }, [
            bs.form({}, [
                bs.formGroup({ validationState: bs.ValidationState.Success }, [
                    bs.label({ for: 'inputSuccess1', title: 'Input with success', controlLabel: true }),
                    bs.inputText({ id: 'inputSuccess1', aria: { describedBy: 'helpBlock2' } }),
                    bs.helpText(
                        { id: 'helpBlock2' },
                        'A block of help text that breaks onto a new line and may extend beyond one line.'
                    )
                ]),
                bs.formGroup({ validationState: bs.ValidationState.Warning }, [
                    bs.label({ for: 'inputWarning1', title: 'Input with warning', controlLabel: true }),
                    bs.inputText({ id: 'inputWarning1' })
                ]),
                bs.formGroup({ validationState: bs.ValidationState.Error }, [
                    bs.label({ for: 'inputError1', title: 'Input with error', controlLabel: true }),
                    bs.inputText({ id: 'inputError1' })
                ]),
                bs.e({ style: bs.validationStyles.hasSuccess }, [
                    bs.checkbox({
                        label: { title: 'Checkbox with success' },
                        inputCheckbox: { id: 'checkboxSuccess' }
                    })
                ]),
                bs.e({ style: bs.validationStyles.hasWarning }, [
                    bs.checkbox({
                        label: { title: 'Checkbox with warning' },
                        inputCheckbox: { id: 'checkboxWarning' }
                    })
                ]),
                bs.e({ style: bs.validationStyles.hasError }, [
                    bs.checkbox({
                        label: { title: 'Checkbox with error' },
                        inputCheckbox: { id: 'checkboxError' }
                    })
                ])
            ])
        ]),
        bs.figure({ style: styles.highlight }, pre({}, bs.code({ style: langJs }, [
            `bs.form({}, [`, bs.e({ tag: 'br' }),
            `    bs.formGroup({ validationState: bs.ValidationState.Success }, [`, bs.e({ tag: 'br' }),
            `        bs.label({ for: 'inputSuccess1', title: 'Input with success', controlLabel: true }),`, bs.e({ tag: 'br' }),
            `        bs.inputText({ id: 'inputSuccess1', aria: { describedBy: 'helpBlock2' } }),`, bs.e({ tag: 'br' }),
            `        bs.helpText(`, bs.e({ tag: 'br' }),
            `            { id: 'helpBlock2' },`, bs.e({ tag: 'br' }),
            `            'A block of help text that breaks onto a new line and may extend beyond one line.'`, bs.e({ tag: 'br' }),
            `        )`, bs.e({ tag: 'br' }),
            `    ]),`, bs.e({ tag: 'br' }),
            `    bs.formGroup({ validationState: bs.ValidationState.Warning }, [`, bs.e({ tag: 'br' }),
            `        bs.label({ for: 'inputWarning1', title: 'Input with warning', controlLabel: true }),`, bs.e({ tag: 'br' }),
            `        bs.inputText({ id: 'inputWarning1' })`, bs.e({ tag: 'br' }),
            `    ]),`, bs.e({ tag: 'br' }),
            `    bs.formGroup({ validationState: bs.ValidationState.Error }, [`, bs.e({ tag: 'br' }),
            `        bs.label({ for: 'inputError1', title: 'Input with error', controlLabel: true }),`, bs.e({ tag: 'br' }),
            `        bs.inputText({ id: 'inputError1' })`, bs.e({ tag: 'br' }),
            `    ]),`, bs.e({ tag: 'br' }),
            `    bs.e({ style: bs.validationStyles.hasSuccess }, [`, bs.e({ tag: 'br' }),
            `        bs.checkbox({`, bs.e({ tag: 'br' }),
            `            label: { title: 'Checkbox with success' },`, bs.e({ tag: 'br' }),
            `            inputCheckbox: { id: 'checkboxSuccess' }`, bs.e({ tag: 'br' }),
            `        })`, bs.e({ tag: 'br' }),
            `    ]),`, bs.e({ tag: 'br' }),
            `    bs.e({ style: bs.validationStyles.hasWarning }, [`, bs.e({ tag: 'br' }),
            `        bs.checkbox({`, bs.e({ tag: 'br' }),
            `            label: { title: 'Checkbox with warning' },`, bs.e({ tag: 'br' }),
            `            inputCheckbox: { id: 'checkboxWarning' }`, bs.e({ tag: 'br' }),
            `        })`, bs.e({ tag: 'br' }),
            `    ]),`, bs.e({ tag: 'br' }),
            `    bs.e({ style: bs.validationStyles.hasError }, [`, bs.e({ tag: 'br' }),
            `        bs.checkbox({`, bs.e({ tag: 'br' }),
            `            label: { title: 'Checkbox with error' },`, bs.e({ tag: 'br' }),
            `            inputCheckbox: { id: 'checkboxError' }`, bs.e({ tag: 'br' }),
            `        })`, bs.e({ tag: 'br' }),
            `    ])`, bs.e({ tag: 'br' }),
            `])`
        ])))
    ];
}

function controlSizing(): b.IBobrilChildren {
    return [
        b.anchor(bs.h2({ attrs: { id: 'forms-control-sizes' } }, 'Control sizing')),
        bs.p({}, [
            `Set heights using `, bs.code({}, 'size'), ` input data property and set widths using grid column component `,
            bs.code({}, 'bs.col'), ` or by `, bs.code({}, 'bs.colStyles'), `.`
        ]),
        bs.h3({}, 'Height sizing'),
        bs.p({}, `Create taller or shorter form controls that match button sizes.`),
        bs.e({ style: [styles.bsExample, styles.bsExampleControlSizing] }, [
            bs.form({}, [
                bs.e({ style: styles.controls }, [
                    bs.inputText({ size: bs.InputTextSize.Lg, placeholder: 'bs.InputTextSize.Lg' }),
                    bs.inputText({ placeholder: 'default' }),
                    bs.inputText({ size: bs.InputTextSize.Sm, placeholder: 'bs.InputTextSize.Sm' }),
                    bs.select({ size: bs.SelectSize.Lg, options: [{ value: 'bs.SelectSize.Lg' }] }),
                    bs.select({ options: [{ value: 'default' }] }),
                    bs.select({ size: bs.SelectSize.Sm, options: [{ value: 'bs.SelectSize.Sm' }] })
                ])
            ])
        ]),
        bs.figure({ style: styles.highlight }, pre({}, bs.code({ style: langJs }, [
            `bs.inputText({ size: bs.InputTextSize.Lg, placeholder: 'bs.InputTextSize.Lg' }),`, bs.e({ tag: 'br' }),
            `bs.inputText({ placeholder: 'default' }),`, bs.e({ tag: 'br' }),
            `bs.inputText({ size: bs.InputTextSize.Sm, placeholder: 'bs.InputTextSize.Sm' }),`, bs.e({ tag: 'br' }), bs.e({ tag: 'br' }),
            `bs.select({ size: bs.SelectSize.Lg, options: [{ value: 'bs.SelectSize.Lg' }] }),`, bs.e({ tag: 'br' }),
            `bs.select({ options: [{ value: 'default' }] }),`, bs.e({ tag: 'br' }),
            `bs.select({ size: bs.SelectSize.Sm, options: [{ value: 'bs.SelectSize.Sm' }] })`
        ]))),
        bs.h3({}, 'Horizontal form group sizes'),
        bs.p({}, [
            `Quickly size labels and form controls within horizontal form by adding setting `,
            bs.code({}, 'size'), ` input data property.`
        ]),
        bs.e({ style: styles.bsExample }, [
            bs.form({ horizontal: true }, [
                bs.formGroup({ size: bs.FormGroupSize.Lg }, [
                    bs.label({
                        title: 'Large label',
                        for: 'formGroupInputLarge',
                        controlLabel: true,
                        style: bs.colStyles(bs.Size.Sm)(2)
                    }),
                    bs.col(
                        { size: bs.Size.Sm, span: 10 },
                        bs.inputText({ id: 'formGroupInputLarge', placeholder: 'Large input' }))
                ]),
                bs.formGroup({ size: bs.FormGroupSize.Sm }, [
                    bs.label({
                        title: 'Small label', for: 'formGroupInputSmall', controlLabel: true, style: bs.colStyles(bs.Size.Sm)(2)
                    }),
                    bs.col(
                        { size: bs.Size.Sm, span: 10 },
                        bs.inputText({ id: 'formGroupInputSmall', placeholder: 'Small input' }))
                ])
            ])
        ]),
        bs.figure({ style: styles.highlight }, pre({}, bs.code({ style: langJs }, [
            `bs.form({ horizontal: true }, [`, bs.e({ tag: 'br' }),
            `    bs.formGroup({ size: bs.FormGroupSize.Lg }, [`, bs.e({ tag: 'br' }),
            `        bs.label({`, bs.e({ tag: 'br' }),
            `            title: 'Large label',`, bs.e({ tag: 'br' }),
            `            for: 'formGroupInputLarge',`, bs.e({ tag: 'br' }),
            `            controlLabel: true,`, bs.e({ tag: 'br' }),
            `            style: bs.colStyles(bs.Size.Sm)(2)`, bs.e({ tag: 'br' }),
            `        }),`, bs.e({ tag: 'br' }),
            `        bs.col({ size: bs.Size.Sm, span: 10 },`, bs.e({ tag: 'br' }),
            `            bs.inputText({ id: 'formGroupInputLarge', placeholder: 'Large input' }))`, bs.e({ tag: 'br' }),
            `    ]),`, bs.e({ tag: 'br' }),
            `    bs.formGroup({ size: bs.FormGroupSize.Sm }, [`, bs.e({ tag: 'br' }),
            `        bs.label({`, bs.e({ tag: 'br' }),
            `            title: 'Large label',`, bs.e({ tag: 'br' }),
            `            for: 'formGroupInputSmall',`, bs.e({ tag: 'br' }),
            `            controlLabel: true,`, bs.e({ tag: 'br' }),
            `            style: bs.colStyles(bs.Size.Sm)(2)`, bs.e({ tag: 'br' }),
            `        }),`, bs.e({ tag: 'br' }),
            `        bs.col({ size: bs.Size.Sm, span: 10 },`, bs.e({ tag: 'br' }),
            `            bs.inputText({ id: 'formGroupInputSmall', placeholder: 'Small input' }))`, bs.e({ tag: 'br' }),
            `    ])`, bs.e({ tag: 'br' }),
            `])`
        ]))),
        bs.h3({}, 'Column sizing'),
        bs.p({}, `Wrap inputs in grid columns, or any custom parent element, to easily enforce desired widths.`),
        bs.e({ style: styles.bsExample }, [
            bs.form({}, [
                bs.row({}, [
                    bs.col(
                        { size: bs.Size.Xs, span: 2 },
                        bs.inputText({ placeholder: 'bs.Size.Xs, 2' })),
                    bs.col(
                        { size: bs.Size.Xs, span: 4 },
                        bs.inputText({ placeholder: 'bs.Size.Xs, 3' })),
                    bs.col(
                        { size: bs.Size.Xs, span: 3 },
                        bs.inputText({ placeholder: 'bs.Size.Xs, 4' }))
                ])
            ])
        ]),
        bs.figure({ style: styles.highlight }, pre({}, bs.code({ style: langJs }, [
            `bs.form({}, [`, bs.e({ tag: 'br' }),
            `    bs.row({}, [`, bs.e({ tag: 'br' }),
            `        bs.col({ size: bs.Size.Xs, span: 2 },`, bs.e({ tag: 'br' }),
            `            bs.inputText({ placeholder: 'bs.Size.Xs, 2' })),`, bs.e({ tag: 'br' }),
            `        bs.col({ size: bs.Size.Xs, span: 4 },`, bs.e({ tag: 'br' }),
            `            bs.inputText({ placeholder: 'bs.Size.Xs, 3' })),`, bs.e({ tag: 'br' }),
            `        bs.col({ size: bs.Size.Xs, span: 3 },`, bs.e({ tag: 'br' }),
            `            bs.inputText({ placeholder: 'bs.Size.Xs, 4' }))`, bs.e({ tag: 'br' }),
            `    ])`, bs.e({ tag: 'br' }),
            `])`
        ])))
    ];
}

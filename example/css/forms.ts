import * as b from 'bobril';
import { a, e, p, h2, h3, h4, code, figure, span, form, formGroup, inputText, label, InputTextType, helpText, checkbox,
    button, ButtonOption, radio, strong, inputGroup, inputGroupAddon } from '../../index';
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
                inlineForm()
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
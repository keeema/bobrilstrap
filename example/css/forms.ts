import * as b from 'bobril';
import { a, e, p, h2, h3, h4, code, figure, span, form, formGroup, inputText, label, InputTextType, helpText, checkbox,
    button, ButtonOption, radio } from '../../index';
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

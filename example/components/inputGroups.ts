import * as b from 'bobril';
import { a, e, p, h2, h4, code, figure, inputGroup, helpers, inputGroupAddon, inputGroupBtn, dropdownMenu,
    dropdownItem, dropdown, strong, inputText, label } from '../../index';
import { styles } from '../bsexample/css';
import { pre, langJs } from '../prettify/pre';
import { section } from '../common/section';

export const inputGroups = b.createVirtualComponent({
    render(ctx: b.IBobrilCtx, me: b.IBobrilNode) {
        me.children = section(
            {
                header: 'Input groups',
                id: 'input-groups',
                lead: [
                    `Extend form controls by adding text or buttons before, after, or on both sides of any text-based `,
                    code({}, '<input>'), `. Use `, code({}, 'inputGroup'), ` with an `, code({}, 'inputGroupAddon'),
                    ` or `, code({}, 'inputGroupBtn'), ` component to prepend or append elements to a single .form-control.`
                ]
            },
            [
                info(),
                basicExample()
            ]);
    }
});

function info(): b.IBobrilChildren {
    return [
        e({ style: [styles.bsCallout, styles.bsCalloutDanger], attrs: { id: 'callout-inputgroup-text-input-only' } }, [
            h4({}, [`Textual `, code({}, '<input>'), `s only`]),
            p({}, [`Avoid using `, code({}, '<select>'), ` elements here as they cannot be fully styled in WebKit browsers.`]),
            p({}, [
                `Avoid using `, code({}, '<textarea>'), ` elements here as their `, code({}, 'rows'),
                ` attribute will not be respected in some cases.`
            ])
        ]),
        e({ style: [styles.bsCallout, styles.bsCalloutDanger], attrs: { id: 'callout-inputgroup-dont-mix' } }, [
            h4({}, [`Don't mix with other components`]),
            p({}, `Do not mix form groups or grid column classes directly with input groups. Instead, nest the 
            input group inside of the form group or grid-related element.`)
        ]),
        e({ style: [styles.bsCallout, styles.bsCalloutDanger], attrs: { id: 'callout-inputgroup-form-labels' } }, [
            h4({}, [`Textual `, code({}, '<input>'), `s only`]),
            p({}, `Screen readers will have trouble with your forms if you don't include a label for every input. For 
            these input groups, ensure that any additional label or functionality is conveyed to assistive technologies.`),
            p({}, [
                `The exact technique to be used (visible `, code({}, ' label'), ` node, `, code({}, ' label'),
                ` nodes hidden using the `, code({}, 'srOnly'), ` property, or use of the `, code({}, ' aria.label'),
                `, `, code({}, 'aria.labelledBy'), `, `, code({}, 'aria.describedBy'), `, `, code({}, 'title'), ` or `,
                code({}, 'placeholder'), ` attribute) and what additional information will need to be conveyed will vary 
                depending on the exact type of interface widget you're implementing. The examples in this section provide 
                a few suggested, case-specific approaches.`
            ])
        ])
    ];
}

function basicExample(): b.IBobrilChildren {
    return [
        h2({ attrs: { id: 'input-groups-basic' } }, 'Basic example'),
        p({}, [`Place one add-on or button on either side of an input. You may also place one on both sides of an input.`]),
        p({}, strong({ style: helpers.text.danger }, [
            `Bootstrap does not support multiple add-ons (`, code({}, 'inputGroupAddon'), ` or `, code({}, 'inputGroupBtn'),
            `) on a single side.`
        ])),
        p({}, strong({ style: helpers.text.danger }, `We do not support multiple form-controls in a single input group.`)),
        e({ style: styles.bsExample }, [
            inputGroup({}, [
                inputGroupAddon({ id: 'basic-addon1' }, '@'),
                inputText({ placeholder: 'Username', aria: { describedBy: 'basic-addon1' } })
            ]),
            e({ tag: 'br' }),
            inputGroup({}, [
                inputText({ placeholder: `Recipient's username`, aria: { describedBy: 'basic-addon2' } }),
                inputGroupAddon({ id: 'basic-addon2' }, '@example.com')
            ]),
            e({ tag: 'br' }),
            inputGroup({}, [
                inputGroupAddon({}, '$'),
                inputText({ placeholder: 'Amount (to the nearest dollar)' }),
                inputGroupAddon({}, '.00')
            ]),
            e({ tag: 'br' }),
            label({}, 'Your vanity URL'),
            inputGroup({}, [
                inputGroupAddon({ id: 'basic-addon3' }, 'https://example.com/users/'),
                inputText({ id: 'basic-url', aria: { describedBy: 'basic-addon3' } })
            ])
        ]),
        figure({ style: styles.highlight }, pre({}, code({ style: langJs }, [
            `inputGroup({}, [`, e({ tag: 'br' }),
            `    inputGroupAddon({ id: 'basic-addon1' }, '@'),`, e({ tag: 'br' }),
            `    inputText({ placeholder: 'Username', aria: { describedBy: 'basic-addon1' } })`, e({ tag: 'br' }),
            `]),`, e({ tag: 'br' }),
            `inputGroup({}, [`, e({ tag: 'br' }),
            `    inputText({ placeholder: 'Recipient\\'s username', aria: { describedBy: 'basic-addon2' } }),`, e({ tag: 'br' }),
            `    inputGroupAddon({ id: 'basic-addon2' }, '@example.com')`, e({ tag: 'br' }),
            `]),`, e({ tag: 'br' }),
            `inputGroup({}, [`, e({ tag: 'br' }),
            `    inputGroupAddon({}, '$'),`, e({ tag: 'br' }),
            `    inputText({ placeholder: 'Amount (to the nearest dollar)' }),`, e({ tag: 'br' }),
            `    inputGroupAddon({}, '.00')`, e({ tag: 'br' }),
            `]),`, e({ tag: 'br' }),
            `label({}, 'Your vanity URL'),`, e({ tag: 'br' }),
            `inputGroup({}, [`, e({ tag: 'br' }),
            `    inputGroupAddon({ id: 'basic-addon3' }, 'https://example.com/users/'),`, e({ tag: 'br' }),
            `    inputText({ id: 'basic-url', aria: { describedBy: 'basic-addon3' } })`, e({ tag: 'br' }),
            `])`
        ])))
    ];
}
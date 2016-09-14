import * as b from 'bobril';
import { a, e, p, h2, h4, code, figure, inputGroup, helpers, inputGroupAddon, inputGroupBtn, button, dropdownMenu,
    dropdownItem, dropdown, strong, inputText, label, InputGroupSize, row, col, Size, inputCheckbox, inputRadio,
    glyphicon, GlyphIcon } from '../../index';
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
                basicExample(),
                sizing(),
                checkboxesRadioboxes(),
                buttonAddons(),
                buttonWithDropdowns(),
                segmentedButtons(),
                multipleButtons()
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

function sizing(): b.IBobrilChildren {
    return [
        h2({ attrs: { id: 'input-groups-sizing' } }, 'Sizing'),
        p({}, [
            `Set the relative form sizing by the `, code({}, 'size'), ` property of the `, code({}, 'inputGroup'),
            ` component itself and contents within will automatically resize—no need for repeating the form control
             size classes on each element.`
        ]),
        e({ style: styles.bsExample }, [
            inputGroup({ size: InputGroupSize.Lg }, [
                inputGroupAddon({ id: 'sizing-addon1' }, '@'),
                inputText({ placeholder: 'Username', aria: { describedBy: 'sizing-addon1' } })
            ]),
            e({ tag: 'br' }),

            inputGroup({}, [
                inputGroupAddon({ id: 'sizing-addon2' }, '@'),
                inputText({ placeholder: 'Username', aria: { describedBy: 'sizing-addon2' } })
            ]),
            e({ tag: 'br' }),
            inputGroup({ size: InputGroupSize.Sm }, [
                inputGroupAddon({ id: 'sizing-addon3' }, '@'),
                inputText({ placeholder: 'Username', aria: { describedBy: 'sizing-addon3' } })
            ])
        ]),
        figure({ style: styles.highlight }, pre({}, code({ style: langJs }, [
            `inputGroup({ size: InputGroupSize.Lg }, [`, e({ tag: 'br' }),
            `    inputGroupAddon({ id: 'sizing-addon1' }, '@'),`, e({ tag: 'br' }),
            `    inputText({ placeholder: 'Username', aria: { describedBy: 'sizing-addon1' } })`, e({ tag: 'br' }),
            `]),`, e({ tag: 'br' }),
            `inputGroup({}, [`, e({ tag: 'br' }),
            `    inputGroupAddon({ id: 'sizing-addon2' }, '@'),`, e({ tag: 'br' }),
            `    inputText({ placeholder: 'Username', aria: { describedBy: 'sizing-addon2' } })`, e({ tag: 'br' }),
            `]),`, e({ tag: 'br' }),
            `inputGroup({ size: InputGroupSize.Sm }, [`, e({ tag: 'br' }),
            `    inputGroupAddon({ id: 'sizing-addon3' }, '@'),`, e({ tag: 'br' }),
            `    inputText({ placeholder: 'Username', aria: { describedBy: 'sizing-addon3' } })`, e({ tag: 'br' }),
            `])`, e({ tag: 'br' })
        ])))
    ];
}

function checkboxesRadioboxes(): b.IBobrilChildren {
    return [
        h2({ attrs: { id: 'input-groups-checkboxes-radios' } }, 'Checkboxes and radio addons'),
        p({}, `Place any checkbox or radio option within an input group's addon instead of text.`),
        e({ style: styles.bsExample }, [
            row({}, [
                col({ size: Size.Lg, span: 6 },
                    inputGroup({}, [
                        inputGroupAddon({}, inputCheckbox({ aria: { label: '...' } })),
                        inputText({ aria: { label: '...' } })
                    ])
                ),
                col({ size: Size.Lg, span: 6 },
                    inputGroup({}, [
                        inputGroupAddon({}, inputRadio({ name: 'radio1', value: 'value1', aria: { label: '...' } })),
                        inputText({ aria: { label: '...' } })
                    ])
                )
            ])
        ]),
        figure({ style: styles.highlight }, pre({}, code({ style: langJs }, [
            `row({}, [`, e({ tag: 'br' }),
            `    col({ size: Size.Lg, span: 6 },`, e({ tag: 'br' }),
            `        inputGroup({}, [`, e({ tag: 'br' }),
            `            inputGroupAddon({}, inputCheckbox({ aria: { label: '...' } })),`, e({ tag: 'br' }),
            `            inputText({ aria: { label: '...' } })`, e({ tag: 'br' }),
            `    ),`, e({ tag: 'br' }),
            `    col({ size: Size.Lg, span: 6 },`, e({ tag: 'br' }),
            `        inputGroup({}, [`, e({ tag: 'br' }),
            `            inputGroupAddon({}, inputRadio({ name: 'radio1', value: 'value1', aria: { label: '...' } })),`, e({ tag: 'br' }),
            `            inputText({ aria: { label: '...' } })`, e({ tag: 'br' }),
            `        ])`, e({ tag: 'br' }),
            `    )`, e({ tag: 'br' }),
            `])`
        ])))
    ];
}

function buttonAddons(): b.IBobrilChildren {
    return [
        h2({ attrs: { id: 'input-groups-buttons' } }, 'Button addons'),
        p({}, [
            `Buttons in input groups are a bit different and require one extra level of nesting. Instead of `,
            code({}, 'inputGroupAddon'), `, you'll need to use `, code({}, ' inputGroupBtn'),
            ` to wrap the buttons. This is required due to default browser styles that cannot be overridden.`
        ]),
        e({ style: styles.bsExample }, [
            row({}, [
                col({ size: Size.Lg, span: 6 },
                    inputGroup({}, [
                        inputGroupBtn({}, button({ label: 'Go!' })),
                        inputText({ placeholder: 'Search for...', aria: { label: '...' } })
                    ])
                ),
                col({ size: Size.Lg, span: 6 },
                    inputGroup({}, [
                        inputText({ placeholder: 'Search for...', aria: { label: '...' } }),
                        inputGroupBtn({}, button({ label: 'Go!' }))
                    ])
                )
            ])
        ]),
        figure({ style: styles.highlight }, pre({}, code({ style: langJs }, [
            `row({}, [`, e({ tag: 'br' }),
            `    col({ size: Size.Lg, span: 6 },`, e({ tag: 'br' }),
            `        inputGroup({}, [`, e({ tag: 'br' }),
            `            inputGroupBtn({}, button({ label: 'Go!' })),`, e({ tag: 'br' }),
            `            inputText({ placeholder: 'Search for...', aria: { label: '...' } })`, e({ tag: 'br' }),
            `        ])`, e({ tag: 'br' }),
            `    ),`, e({ tag: 'br' }),
            `    col({ size: Size.Lg, span: 6 },`, e({ tag: 'br' }),
            `        inputGroup({}, [`, e({ tag: 'br' }),
            `            inputText({ placeholder: 'Search for...', aria: { label: '...' } }),`, e({ tag: 'br' }),
            `            inputGroupBtn({}, button({ label: 'Go!' })),`, e({ tag: 'br' }),
            `        ])`, e({ tag: 'br' }),
            `    )`, e({ tag: 'br' }),
            `])`
        ])))
    ];
}

function buttonWithDropdowns(): b.IBobrilChildren {
    return [
        h2({ attrs: { id: 'input-groups-buttons-dropdowns' } }, 'Buttons with dropdowns'),
        p({}, [
            `As in previous cases - you can use the prepared helper `, code({}, 'dropdown'),
            ` or compose from specific input components.`
        ]),
        e({ style: styles.bsExample }, [
            row({}, [
                col({ size: Size.Lg, span: 6 },
                    inputGroup({}, [
                        dropdown(
                            { inputGroupBtn: true, button: { label: 'Action' } },
                            dropdownMenu({}, [
                                dropdownItem({}, a({ href: 'javascript:void(0)' }, 'Action')),
                                dropdownItem({}, a({ href: 'javascript:void(0)' }, 'Another action')),
                                dropdownItem({}, a({ href: 'javascript:void(0)' }, 'Something else here')),
                                dropdownItem({ separator: true }),
                                dropdownItem({}, a({ href: 'javascript:void(0)' }, 'Separated link'))
                            ])
                        ),
                        inputText({})
                    ])
                ),
                col({ size: Size.Lg, span: 6 },
                    inputGroup({}, [
                        inputText({}),
                        dropdown(
                            { inputGroupBtn: true, button: { label: 'Action' } },
                            dropdownMenu({}, [
                                dropdownItem({}, a({ href: 'javascript:void(0)' }, 'Action')),
                                dropdownItem({}, a({ href: 'javascript:void(0)' }, 'Another action')),
                                dropdownItem({}, a({ href: 'javascript:void(0)' }, 'Something else here')),
                                dropdownItem({ separator: true }),
                                dropdownItem({}, a({ href: 'javascript:void(0)' }, 'Separated link'))
                            ])
                        )
                    ])
                )
            ])
        ]),
        figure({ style: styles.highlight }, pre({}, code({ style: langJs }, [
            `row({}, [`, e({ tag: 'br' }),
            `   col({ size: Size.Lg, span: 6 },`, e({ tag: 'br' }),
            `       inputGroup({}, [`, e({ tag: 'br' }),
            `           dropdown(`, e({ tag: 'br' }),
            `                { inputGroupBtn: true, button: { label: 'Action' } },`, e({ tag: 'br' }),
            `                dropdownMenu({}, [`, e({ tag: 'br' }),
            `                    dropdownItem({}, a({ href: '...' }, 'Action')),`, e({ tag: 'br' }),
            `                    dropdownItem({}, a({ href: '...' }, 'Another action')),`, e({ tag: 'br' }),
            `                    dropdownItem({}, a({ href: '...' }, 'Something else here')),`, e({ tag: 'br' }),
            `                    dropdownItem({ separator: true }),`, e({ tag: 'br' }),
            `                    dropdownItem({}, a({ href: '...' }, 'Separated link'))`, e({ tag: 'br' }),
            `                ])`, e({ tag: 'br' }),
            `            ),`, e({ tag: 'br' }),
            `            inputText({})`, e({ tag: 'br' }),
            `    ),`, e({ tag: 'br' }),
            `    col({ size: Size.Lg, span: 6 },`, e({ tag: 'br' }),
            `       inputGroup({}, [`, e({ tag: 'br' }),
            `           inputText({}),`, e({ tag: 'br' }),
            `           dropdown(`, e({ tag: 'br' }),
            `                { inputGroupBtn: true, button: { label: 'Action' } },`, e({ tag: 'br' }),
            `                dropdownMenu({}, [`, e({ tag: 'br' }),
            `                    dropdownItem({}, a({ href: '...' }, 'Action')),`, e({ tag: 'br' }),
            `                    dropdownItem({}, a({ href: '...' }, 'Another action')),`, e({ tag: 'br' }),
            `                    dropdownItem({}, a({ href: '...' }, 'Something else here')),`, e({ tag: 'br' }),
            `                    dropdownItem({ separator: true }),`, e({ tag: 'br' }),
            `                    dropdownItem({}, a({ href: '...' }, 'Separated link'))`, e({ tag: 'br' }),
            `                ])`, e({ tag: 'br' }),
            `            )`, e({ tag: 'br' }),
            `        ])`, e({ tag: 'br' }),
            `    )`, e({ tag: 'br' }),
            `])`
        ])))
    ];
}

function segmentedButtons(): b.IBobrilChildren {
    return [
        h2({ attrs: { id: 'input-groups-buttons-segmented' } }, 'Segmented buttons'),
        p({}, [
            `As in previous cases - you can use the prepared helper `, code({}, 'dropdown'),
            ` or compose from specific input components.`
        ]),
        e({ style: styles.bsExample }, [
            row({}, [
                col({ size: Size.Lg, span: 6 },
                    inputGroup({}, [
                        dropdown(
                            { button: { label: 'Action' }, inputGroupBtn: true, splitted: true },
                            dropdownMenu({}, [
                                dropdownItem({}, a({ href: 'javascript:void(0)' }, 'Action')),
                                dropdownItem({}, a({ href: 'javascript:void(0)' }, 'Another action')),
                                dropdownItem({}, a({ href: 'javascript:void(0)' }, 'Something else here')),
                                dropdownItem({ separator: true }),
                                dropdownItem({}, a({ href: 'javascript:void(0)' }, 'Separated link'))
                            ])
                        ),
                        inputText({})
                    ])
                ),
                col({ size: Size.Lg, span: 6 },
                    inputGroup({}, [
                        inputText({}),
                        dropdown(
                            { button: { label: 'Action' }, inputGroupBtn: true, splitted: true },
                            dropdownMenu({}, [
                                dropdownItem({}, a({ href: 'javascript:void(0)' }, 'Action')),
                                dropdownItem({}, a({ href: 'javascript:void(0)' }, 'Another action')),
                                dropdownItem({}, a({ href: 'javascript:void(0)' }, 'Something else here')),
                                dropdownItem({ separator: true }),
                                dropdownItem({}, a({ href: 'javascript:void(0)' }, 'Separated link'))
                            ])
                        )
                    ])
                )
            ])
        ]),
        figure({ style: styles.highlight }, pre({}, code({ style: langJs }, [
            `row({}, [`, e({ tag: 'br' }),
            `   col({ size: Size.Lg, span: 6 },`, e({ tag: 'br' }),
            `       inputGroup({}, [`, e({ tag: 'br' }),
            `           dropdown(`, e({ tag: 'br' }),
            `                {`, e({ tag: 'br' }),
            `                    button: { label: 'Action' },`, e({ tag: 'br' }),
            `                    inputGroupBtn: true,`, e({ tag: 'br' }),
            `                    splitted: true,`, e({ tag: 'br' }),
            `                },`, e({ tag: 'br' }),
            `                dropdownMenu({}, [`, e({ tag: 'br' }),
            `                    dropdownItem({}, a({ href: '...' }, 'Action')),`, e({ tag: 'br' }),
            `                    dropdownItem({}, a({ href: '...' }, 'Another action')),`, e({ tag: 'br' }),
            `                    dropdownItem({}, a({ href: '...' }, 'Something else here')),`, e({ tag: 'br' }),
            `                    dropdownItem({ separator: true }),`, e({ tag: 'br' }),
            `                    dropdownItem({}, a({ href: '...' }, 'Separated link'))`, e({ tag: 'br' }),
            `                ])`, e({ tag: 'br' }),
            `            ),`, e({ tag: 'br' }),
            `            inputText({})`, e({ tag: 'br' }),
            `    ),`, e({ tag: 'br' }),
            `    col({ size: Size.Lg, span: 6 },`, e({ tag: 'br' }),
            `       inputGroup({}, [`, e({ tag: 'br' }),
            `           inputText({}),`, e({ tag: 'br' }),
            `           dropdown(`, e({ tag: 'br' }),
            `                {`, e({ tag: 'br' }),
            `                    button: { label: 'Action' },`, e({ tag: 'br' }),
            `                    inputGroupBtn: true,`, e({ tag: 'br' }),
            `                    splitted: true,`, e({ tag: 'br' }),
            `                },`, e({ tag: 'br' }),
            `                dropdownMenu({}, [`, e({ tag: 'br' }),
            `                    dropdownItem({}, a({ href: '...' }, 'Action')),`, e({ tag: 'br' }),
            `                    dropdownItem({}, a({ href: '...' }, 'Another action')),`, e({ tag: 'br' }),
            `                    dropdownItem({}, a({ href: '...' }, 'Something else here')),`, e({ tag: 'br' }),
            `                    dropdownItem({ separator: true }),`, e({ tag: 'br' }),
            `                    dropdownItem({}, a({ href: '...' }, 'Separated link'))`, e({ tag: 'br' }),
            `                ])`, e({ tag: 'br' }),
            `            )`, e({ tag: 'br' }),
            `        ])`, e({ tag: 'br' }),
            `    )`, e({ tag: 'br' }),
            `])`
        ])))
    ];
}

function multipleButtons(): b.IBobrilChildren {
    return [
        h2({ attrs: { id: 'input-groups-buttons-multiple' } }, 'Multiple buttons'),
        p({}, [
            `While you can only have one add-on per side, you can have multiple buttons inside a single `, code({}, 'inputGroupBtn'), `.`
        ]),
        e({ style: styles.bsExample }, [
            row({}, [
                col({ size: Size.Lg, span: 6 },
                    inputGroup({}, [
                        inputGroupBtn({}, [
                            button({ aria: { label: 'Bold' } }, glyphicon({ icon: GlyphIcon.Bold })),
                            button({ aria: { label: 'Italic' } }, glyphicon({ icon: GlyphIcon.Italic }))
                        ]),
                        inputText({ placeholder: 'Search for...', aria: { label: '...' } })
                    ])
                ),
                col({ size: Size.Lg, span: 6 },
                    inputGroup({}, [
                        inputText({ placeholder: 'Search for...', aria: { label: '...' } }),
                        inputGroupBtn({}, [
                            button({ aria: { label: 'Bold' } }, glyphicon({ icon: GlyphIcon.Bold })),
                            button({ aria: { label: 'Italic' } }, glyphicon({ icon: GlyphIcon.Italic }))
                        ])
                    ])
                )
            ])
        ]),
        figure({ style: styles.highlight }, pre({}, code({ style: langJs }, [
            `row({}, [`, e({ tag: 'br' }),
            `    col({ size: Size.Lg, span: 6 },`, e({ tag: 'br' }),
            `        inputGroup({}, [`, e({ tag: 'br' }),
            `            inputGroupBtn({}, [`, e({ tag: 'br' }),
            `                button({ aria: { label: 'Bold' } }, glyphicon({ icon: GlyphIcon.Bold }))`, e({ tag: 'br' }),
            `                button({ aria: { label: 'Italic' } }, glyphicon({ icon: GlyphIcon.Italic }))`, e({ tag: 'br' }),
            `            ]),`, e({ tag: 'br' }),
            `            inputText({ placeholder: 'Search for...', aria: { label: '...' } })`, e({ tag: 'br' }),
            `        ])`, e({ tag: 'br' }),
            `    ),`, e({ tag: 'br' }),
            `    col({ size: Size.Lg, span: 6 },`, e({ tag: 'br' }),
            `        inputGroup({}, [`, e({ tag: 'br' }),
            `            inputText({ placeholder: 'Search for...', aria: { label: '...' } }),`, e({ tag: 'br' }),
            `            inputGroupBtn({}, [`, e({ tag: 'br' }),
            `                button({ aria: { label: 'Bold' } }, glyphicon({ icon: GlyphIcon.Bold }))`, e({ tag: 'br' }),
            `                button({ aria: { label: 'Italic' } }, glyphicon({ icon: GlyphIcon.Italic }))`, e({ tag: 'br' }),
            `            ])`, e({ tag: 'br' }),
            `        ])`, e({ tag: 'br' }),
            `    )`, e({ tag: 'br' }),
            `])`
        ])))
    ];
}
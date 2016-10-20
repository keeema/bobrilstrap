import * as b from 'bobril';
import * as bs from '../../index';
import { styles } from '../bsexample/css';
import { pre, langJs } from '../prettify/pre';
import { section } from '../common/section';

export const inputGroups = b.createVirtualComponent({
    render(_ctx: b.IBobrilCtx, me: b.IBobrilNode) {
        me.children = section(
            {
                header: 'Input groups',
                id: 'input-groups',
                lead: [
                    `Extend form controls by adding text or buttons before, after, or on both sides of any text-based `,
                    bs.code({}, '<input>'), `. Use `, bs.code({}, 'bs.inputGroup'), ` with an `, bs.code({}, 'bs.inputGroupAddon'),
                    ` or `, bs.code({}, 'bs.inputGroupBtn'), ` component to prepend or append elements to a single .form-control.`
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
        bs.e({ style: [styles.bsCallout, styles.bsCalloutDanger], attrs: { id: 'callout-inputgroup-text-input-only' } }, [
            bs.h4({}, [`Textual `, bs.code({}, '<input>'), `s only`]),
            bs.p({}, [`Avoid using `, bs.code({}, '<select>'), ` elements here as they cannot be fully styled in WebKit browsers.`]),
            bs.p({}, [
                `Avoid using `, bs.code({}, '<textarea>'), ` elements here as their `, bs.code({}, 'rows'),
                ` attribute will not be respected in some cases.`
            ])
        ]),
        bs.e({ style: [styles.bsCallout, styles.bsCalloutDanger], attrs: { id: 'callout-inputgroup-dont-mix' } }, [
            bs.h4({}, [`Don't mix with other components`]),
            bs.p({}, `Do not mix form groups or grid column classes directly with input groups. Instead, nest the 
            input group inside of the form group or grid-related element.`)
        ]),
        bs.e({ style: [styles.bsCallout, styles.bsCalloutDanger], attrs: { id: 'callout-inputgroup-form-labels' } }, [
            bs.h4({}, [`Textual `, bs.code({}, '<input>'), `s only`]),
            bs.p({}, `Screen readers will have trouble with your forms if you don't include a label for every input. For 
            these input groups, ensure that any additional label or functionality is conveyed to assistive technologies.`),
            bs.p({}, [
                `The exact technique to be used (visible `, bs.code({}, ' label'), ` node, `, bs.code({}, ' label'),
                ` nodes hidden using the `, bs.code({}, 'srOnly'), ` property, or use of the `, bs.code({}, ' aria.label'),
                `, `, bs.code({}, 'aria.labelledby'), `, `, bs.code({}, 'aria.describedby'), `, `, bs.code({}, 'title'), ` or `,
                bs.code({}, 'placeholder'), ` attribute) and what additional information will need to be conveyed will vary 
                depending on the exact type of interface widget you're implementing. The examples in this section provide 
                a few suggested, case-specific approaches.`
            ])
        ])
    ];
}

function basicExample(): b.IBobrilChildren {
    return [
        b.anchor(bs.h2({ attrs: { id: 'input-groups-basic' } }, 'Basic example')),
        bs.p({}, [`Place one add-on or button on either side of an input. You may also place one on both sides of an input.`]),
        bs.p({}, bs.strong({ style: bs.helpers.text.danger }, [
            `Bootstrap does not support multiple add-ons (`, bs.code({}, 'bs.inputGroupAddon'), ` or `, bs.code({}, 'bs.inputGroupBtn'),
            `) on a single side.`
        ])),
        bs.p({}, bs.strong({ style: bs.helpers.text.danger }, `We do not support multiple form-controls in a single input group.`)),
        bs.e({ style: styles.bsExample }, [
            bs.inputGroup({}, [
                bs.inputGroupAddon({ id: 'basic-addon1' }, '@'),
                bs.inputText({ placeholder: 'Username', aria: { describedby: 'basic-addon1' } })
            ]),
            bs.e({ tag: 'br' }),
            bs.inputGroup({}, [
                bs.inputText({ placeholder: `Recipient's username`, aria: { describedby: 'basic-addon2' } }),
                bs.inputGroupAddon({ id: 'basic-addon2' }, '@example.com')
            ]),
            bs.e({ tag: 'br' }),
            bs.inputGroup({}, [
                bs.inputGroupAddon({}, '$'),
                bs.inputText({ placeholder: 'Amount (to the nearest dollar)' }),
                bs.inputGroupAddon({}, '.00')
            ]),
            bs.e({ tag: 'br' }),
            bs.label({}, 'Your vanity URL'),
            bs.inputGroup({}, [
                bs.inputGroupAddon({ id: 'basic-addon3' }, 'https://example.com/users/'),
                bs.inputText({ id: 'basic-url', aria: { describedby: 'basic-addon3' } })
            ])
        ]),
        bs.figure({ style: styles.highlight }, pre({}, bs.code({ style: langJs }, [
            `bs.inputGroup({}, [`, bs.e({ tag: 'br' }),
            `    bs.inputGroupAddon({ id: 'basic-addon1' }, '@'),`, bs.e({ tag: 'br' }),
            `    bs.inputText({ placeholder: 'Username', aria: { describedby: 'basic-addon1' } })`, bs.e({ tag: 'br' }),
            `]),`, bs.e({ tag: 'br' }),
            `bs.inputGroup({}, [`, bs.e({ tag: 'br' }),
            `    bs.inputText({ placeholder: 'Recipient\\'s username', aria: { describedby: 'basic-addon2' } }),`, bs.e({ tag: 'br' }),
            `    bs.inputGroupAddon({ id: 'basic-addon2' }, '@example.com')`, bs.e({ tag: 'br' }),
            `]),`, bs.e({ tag: 'br' }),
            `bs.inputGroup({}, [`, bs.e({ tag: 'br' }),
            `    bs.inputGroupAddon({}, '$'),`, bs.e({ tag: 'br' }),
            `    bs.inputText({ placeholder: 'Amount (to the nearest dollar)' }),`, bs.e({ tag: 'br' }),
            `    bs.inputGroupAddon({}, '.00')`, bs.e({ tag: 'br' }),
            `]),`, bs.e({ tag: 'br' }),
            `bs.label({}, 'Your vanity URL'),`, bs.e({ tag: 'br' }),
            `bs.inputGroup({}, [`, bs.e({ tag: 'br' }),
            `    bs.inputGroupAddon({ id: 'basic-addon3' }, 'https://example.com/users/'),`, bs.e({ tag: 'br' }),
            `    bs.inputText({ id: 'basic-url', aria: { describedby: 'basic-addon3' } })`, bs.e({ tag: 'br' }),
            `])`
        ])))
    ];
}

function sizing(): b.IBobrilChildren {
    return [
        b.anchor(bs.h2({ attrs: { id: 'input-groups-sizing' } }, 'Sizing')),
        bs.p({}, [
            `Set the relative form sizing by the `, bs.code({}, 'size'), ` property of the `, bs.code({}, 'bs.inputGroup'),
            ` component itself and contents within will automatically resize—no need for repeating the form control
             size classes on each element.`
        ]),
        bs.e({ style: styles.bsExample }, [
            bs.inputGroup({ size: bs.InputGroupSize.Lg }, [
                bs.inputGroupAddon({ id: 'sizing-addon1' }, '@'),
                bs.inputText({ placeholder: 'Username', aria: { describedby: 'sizing-addon1' } })
            ]),
            bs.e({ tag: 'br' }),

            bs.inputGroup({}, [
                bs.inputGroupAddon({ id: 'sizing-addon2' }, '@'),
                bs.inputText({ placeholder: 'Username', aria: { describedby: 'sizing-addon2' } })
            ]),
            bs.e({ tag: 'br' }),
            bs.inputGroup({ size: bs.InputGroupSize.Sm }, [
                bs.inputGroupAddon({ id: 'sizing-addon3' }, '@'),
                bs.inputText({ placeholder: 'Username', aria: { describedby: 'sizing-addon3' } })
            ])
        ]),
        bs.figure({ style: styles.highlight }, pre({}, bs.code({ style: langJs }, [
            `bs.inputGroup({ size: bs.InputGroupSize.Lg }, [`, bs.e({ tag: 'br' }),
            `    bs.inputGroupAddon({ id: 'sizing-addon1' }, '@'),`, bs.e({ tag: 'br' }),
            `    bs.inputText({ placeholder: 'Username', aria: { describedby: 'sizing-addon1' } })`, bs.e({ tag: 'br' }),
            `]),`, bs.e({ tag: 'br' }),
            `bs.inputGroup({}, [`, bs.e({ tag: 'br' }),
            `    bs.inputGroupAddon({ id: 'sizing-addon2' }, '@'),`, bs.e({ tag: 'br' }),
            `    bs.inputText({ placeholder: 'Username', aria: { describedby: 'sizing-addon2' } })`, bs.e({ tag: 'br' }),
            `]),`, bs.e({ tag: 'br' }),
            `bs.inputGroup({ size: bs.InputGroupSize.Sm }, [`, bs.e({ tag: 'br' }),
            `    bs.inputGroupAddon({ id: 'sizing-addon3' }, '@'),`, bs.e({ tag: 'br' }),
            `    bs.inputText({ placeholder: 'Username', aria: { describedby: 'sizing-addon3' } })`, bs.e({ tag: 'br' }),
            `])`, bs.e({ tag: 'br' })
        ])))
    ];
}

function checkboxesRadioboxes(): b.IBobrilChildren {
    return [
        b.anchor(bs.h2({ attrs: { id: 'input-groups-checkboxes-radios' } }, 'Checkboxes and radio addons')),
        bs.p({}, `Place any checkbox or radio option within an input group's addon instead of text.`),
        bs.e({ style: styles.bsExample }, [
            bs.row({}, [
                bs.col(
                    { size: bs.Size.Lg, span: 6 },
                    bs.inputGroup({}, [
                        bs.inputGroupAddon({}, bs.inputCheckbox({ aria: { label: '...' } })),
                        bs.inputText({ aria: { label: '...' } })
                    ])
                ),
                bs.col(
                    { size: bs.Size.Lg, span: 6 },
                    bs.inputGroup({}, [
                        bs.inputGroupAddon({}, bs.inputRadio({ name: 'radio1', value: 'value1', aria: { label: '...' } })),
                        bs.inputText({ aria: { label: '...' } })
                    ])
                )
            ])
        ]),
        bs.figure({ style: styles.highlight }, pre({}, bs.code({ style: langJs }, [
            `bs.row({}, [`, bs.e({ tag: 'br' }),
            `    bs.col({ size: bs.Size.Lg, span: 6 },`, bs.e({ tag: 'br' }),
            `        bs.inputGroup({}, [`, bs.e({ tag: 'br' }),
            `            bs.inputGroupAddon({}, bs.inputCheckbox({ aria: { label: '...' } })),`, bs.e({ tag: 'br' }),
            `            bs.inputText({ aria: { label: '...' } })`, bs.e({ tag: 'br' }),
            `    ),`, bs.e({ tag: 'br' }),
            `    bs.col({ size: bs.Size.Lg, span: 6 },`, bs.e({ tag: 'br' }),
            `        bs.inputGroup({}, [`, bs.e({ tag: 'br' }),
            `            bs.inputGroupAddon({}, bs.inputRadio({ name: 'radio1', value: 'value1', aria: { label: '...' } })),`,
            bs.e({ tag: 'br' }),
            `            bs.inputText({ aria: { label: '...' } })`, bs.e({ tag: 'br' }),
            `        ])`, bs.e({ tag: 'br' }),
            `    )`, bs.e({ tag: 'br' }),
            `])`
        ])))
    ];
}

function buttonAddons(): b.IBobrilChildren {
    return [
        b.anchor(bs.h2({ attrs: { id: 'input-groups-buttons' } }, 'Button addons')),
        bs.p({}, [
            `Buttons in input groups are a bit different and require one extra level of nesting. Instead of `,
            bs.code({}, 'bs.inputGroupAddon'), `, you'll need to use `, bs.code({}, 'bs.inputGroupBtn'),
            ` to wrap the buttons. This is required due to default browser styles that cannot be overridden.`
        ]),
        bs.e({ style: styles.bsExample }, [
            bs.row({}, [
                bs.col(
                    { size: bs.Size.Lg, span: 6 },
                    bs.inputGroup({}, [
                        bs.inputGroupBtn({}, bs.button({ label: 'Go!' })),
                        bs.inputText({ placeholder: 'Search for...', aria: { label: '...' } })
                    ])
                ),
                bs.col(
                    { size: bs.Size.Lg, span: 6 },
                    bs.inputGroup({}, [
                        bs.inputText({ placeholder: 'Search for...', aria: { label: '...' } }),
                        bs.inputGroupBtn({}, bs.button({ label: 'Go!' }))
                    ])
                )
            ])
        ]),
        bs.figure({ style: styles.highlight }, pre({}, bs.code({ style: langJs }, [
            `bs.row({}, [`, bs.e({ tag: 'br' }),
            `    bs.col({ size: bs.Size.Lg, span: 6 },`, bs.e({ tag: 'br' }),
            `        bs.inputGroup({}, [`, bs.e({ tag: 'br' }),
            `            bs.inputGroupBtn({}, bs.button({ label: 'Go!' })),`, bs.e({ tag: 'br' }),
            `            bs.inputText({ placeholder: 'Search for...', aria: { label: '...' } })`, bs.e({ tag: 'br' }),
            `        ])`, bs.e({ tag: 'br' }),
            `    ),`, bs.e({ tag: 'br' }),
            `    bs.col({ size: bs.Size.Lg, span: 6 },`, bs.e({ tag: 'br' }),
            `        bs.inputGroup({}, [`, bs.e({ tag: 'br' }),
            `            bs.inputText({ placeholder: 'Search for...', aria: { label: '...' } }),`, bs.e({ tag: 'br' }),
            `            bs.inputGroupBtn({}, bs.button({ label: 'Go!' })),`, bs.e({ tag: 'br' }),
            `        ])`, bs.e({ tag: 'br' }),
            `    )`, bs.e({ tag: 'br' }),
            `])`
        ])))
    ];
}

function buttonWithDropdowns(): b.IBobrilChildren {
    return [
        b.anchor(bs.h2({ attrs: { id: 'input-groups-buttons-dropdowns' } }, 'Buttons with dropdowns')),
        bs.p({}, [
            `As in previous cases - you can use the prepared helper `, bs.code({}, 'bs.dropdown'),
            ` or compose from specific input components.`
        ]),
        bs.e({ style: styles.bsExample }, [
            bs.row({}, [
                bs.col(
                    { size: bs.Size.Lg, span: 6 },
                    bs.inputGroup({}, [
                        bs.dropdown(
                            { inputGroupBtn: true, button: { label: 'Action' } },
                            bs.dropdownMenu({}, [
                                bs.dropdownItem({}, bs.a({ href: 'javascript:void(0)' }, 'Action')),
                                bs.dropdownItem({}, bs.a({ href: 'javascript:void(0)' }, 'Another action')),
                                bs.dropdownItem({}, bs.a({ href: 'javascript:void(0)' }, 'Something else here')),
                                bs.dropdownItem({ separator: true }),
                                bs.dropdownItem({}, bs.a({ href: 'javascript:void(0)' }, 'Separated link'))
                            ])
                        ),
                        bs.inputText({})
                    ])
                ),
                bs.col(
                    { size: bs.Size.Lg, span: 6 },
                    bs.inputGroup({}, [
                        bs.inputText({}),
                        bs.dropdown(
                            { inputGroupBtn: true, button: { label: 'Action' } },
                            bs.dropdownMenu({}, [
                                bs.dropdownItem({}, bs.a({ href: 'javascript:void(0)' }, 'Action')),
                                bs.dropdownItem({}, bs.a({ href: 'javascript:void(0)' }, 'Another action')),
                                bs.dropdownItem({}, bs.a({ href: 'javascript:void(0)' }, 'Something else here')),
                                bs.dropdownItem({ separator: true }),
                                bs.dropdownItem({}, bs.a({ href: 'javascript:void(0)' }, 'Separated link'))
                            ])
                        )
                    ])
                )
            ])
        ]),
        bs.figure({ style: styles.highlight }, pre({}, bs.code({ style: langJs }, [
            `bs.row({}, [`, bs.e({ tag: 'br' }),
            `   bs.col({ size: bs.Size.Lg, span: 6 },`, bs.e({ tag: 'br' }),
            `       bs.inputGroup({}, [`, bs.e({ tag: 'br' }),
            `           bs.dropdown(`, bs.e({ tag: 'br' }),
            `                { inputGroupBtn: true, button: { label: 'Action' } },`, bs.e({ tag: 'br' }),
            `                bs.dropdownMenu({}, [`, bs.e({ tag: 'br' }),
            `                    bs.dropdownItem({}, bs.a({ href: '...' }, 'Action')),`, bs.e({ tag: 'br' }),
            `                    bs.dropdownItem({}, bs.a({ href: '...' }, 'Another action')),`, bs.e({ tag: 'br' }),
            `                    bs.dropdownItem({}, bs.a({ href: '...' }, 'Something else here')),`, bs.e({ tag: 'br' }),
            `                    bs.dropdownItem({ separator: true }),`, bs.e({ tag: 'br' }),
            `                    bs.dropdownItem({}, bs.a({ href: '...' }, 'Separated link'))`, bs.e({ tag: 'br' }),
            `                ])`, bs.e({ tag: 'br' }),
            `            ),`, bs.e({ tag: 'br' }),
            `            bs.inputText({})`, bs.e({ tag: 'br' }),
            `    ),`, bs.e({ tag: 'br' }),
            `    bs.col({ size: bs.Size.Lg, span: 6 },`, bs.e({ tag: 'br' }),
            `       bs.inputGroup({}, [`, bs.e({ tag: 'br' }),
            `           bs.inputText({}),`, bs.e({ tag: 'br' }),
            `           bs.dropdown(`, bs.e({ tag: 'br' }),
            `                { inputGroupBtn: true, button: { label: 'Action' } },`, bs.e({ tag: 'br' }),
            `                bs.dropdownMenu({}, [`, bs.e({ tag: 'br' }),
            `                    bs.dropdownItem({}, bs.a({ href: '...' }, 'Action')),`, bs.e({ tag: 'br' }),
            `                    bs.dropdownItem({}, bs.a({ href: '...' }, 'Another action')),`, bs.e({ tag: 'br' }),
            `                    bs.dropdownItem({}, bs.a({ href: '...' }, 'Something else here')),`, bs.e({ tag: 'br' }),
            `                    bs.dropdownItem({ separator: true }),`, bs.e({ tag: 'br' }),
            `                    bs.dropdownItem({}, bs.a({ href: '...' }, 'Separated link'))`, bs.e({ tag: 'br' }),
            `                ])`, bs.e({ tag: 'br' }),
            `            )`, bs.e({ tag: 'br' }),
            `        ])`, bs.e({ tag: 'br' }),
            `    )`, bs.e({ tag: 'br' }),
            `])`
        ])))
    ];
}

function segmentedButtons(): b.IBobrilChildren {
    return [
        b.anchor(bs.h2({ attrs: { id: 'input-groups-buttons-segmented' } }, 'Segmented buttons')),
        bs.p({}, [
            `As in previous cases - you can use the prepared helper `, bs.code({}, 'bs.dropdown'),
            ` or compose from specific input components.`
        ]),
        bs.e({ style: styles.bsExample }, [
            bs.row({}, [
                bs.col(
                    { size: bs.Size.Lg, span: 6 },
                    bs.inputGroup({}, [
                        bs.dropdown(
                            { button: { label: 'Action' }, inputGroupBtn: true, splitted: true },
                            bs.dropdownMenu({}, [
                                bs.dropdownItem({}, bs.a({ href: 'javascript:void(0)' }, 'Action')),
                                bs.dropdownItem({}, bs.a({ href: 'javascript:void(0)' }, 'Another action')),
                                bs.dropdownItem({}, bs.a({ href: 'javascript:void(0)' }, 'Something else here')),
                                bs.dropdownItem({ separator: true }),
                                bs.dropdownItem({}, bs.a({ href: 'javascript:void(0)' }, 'Separated link'))
                            ])
                        ),
                        bs.inputText({})
                    ])
                ),
                bs.col(
                    { size: bs.Size.Lg, span: 6 },
                    bs.inputGroup({}, [
                        bs.inputText({}),
                        bs.dropdown(
                            { button: { label: 'Action' }, inputGroupBtn: true, splitted: true },
                            bs.dropdownMenu({}, [
                                bs.dropdownItem({}, bs.a({ href: 'javascript:void(0)' }, 'Action')),
                                bs.dropdownItem({}, bs.a({ href: 'javascript:void(0)' }, 'Another action')),
                                bs.dropdownItem({}, bs.a({ href: 'javascript:void(0)' }, 'Something else here')),
                                bs.dropdownItem({ separator: true }),
                                bs.dropdownItem({}, bs.a({ href: 'javascript:void(0)' }, 'Separated link'))
                            ])
                        )
                    ])
                )
            ])
        ]),
        bs.figure({ style: styles.highlight }, pre({}, bs.code({ style: langJs }, [
            `bs.row({}, [`, bs.e({ tag: 'br' }),
            `   bs.col({ size: bs.Size.Lg, span: 6 },`, bs.e({ tag: 'br' }),
            `       bs.inputGroup({}, [`, bs.e({ tag: 'br' }),
            `           bs.dropdown(`, bs.e({ tag: 'br' }),
            `                {`, bs.e({ tag: 'br' }),
            `                    button: { label: 'Action' },`, bs.e({ tag: 'br' }),
            `                    inputGroupBtn: true,`, bs.e({ tag: 'br' }),
            `                    splitted: true,`, bs.e({ tag: 'br' }),
            `                },`, bs.e({ tag: 'br' }),
            `                bs.dropdownMenu({}, [`, bs.e({ tag: 'br' }),
            `                    bs.dropdownItem({}, bs.a({ href: '...' }, 'Action')),`, bs.e({ tag: 'br' }),
            `                    bs.dropdownItem({}, bs.a({ href: '...' }, 'Another action')),`, bs.e({ tag: 'br' }),
            `                    bs.dropdownItem({}, bs.a({ href: '...' }, 'Something else here')),`, bs.e({ tag: 'br' }),
            `                    bs.dropdownItem({ separator: true }),`, bs.e({ tag: 'br' }),
            `                    bs.dropdownItem({}, bs.a({ href: '...' }, 'Separated link'))`, bs.e({ tag: 'br' }),
            `                ])`, bs.e({ tag: 'br' }),
            `            ),`, bs.e({ tag: 'br' }),
            `            bs.inputText({})`, bs.e({ tag: 'br' }),
            `    ),`, bs.e({ tag: 'br' }),
            `    bs.col({ size: bs.Size.Lg, span: 6 },`, bs.e({ tag: 'br' }),
            `       bs.inputGroup({}, [`, bs.e({ tag: 'br' }),
            `           bs.inputText({}),`, bs.e({ tag: 'br' }),
            `           bs.dropdown(`, bs.e({ tag: 'br' }),
            `                {`, bs.e({ tag: 'br' }),
            `                    button: { label: 'Action' },`, bs.e({ tag: 'br' }),
            `                    inputGroupBtn: true,`, bs.e({ tag: 'br' }),
            `                    splitted: true,`, bs.e({ tag: 'br' }),
            `                },`, bs.e({ tag: 'br' }),
            `                bs.dropdownMenu({}, [`, bs.e({ tag: 'br' }),
            `                    bs.dropdownItem({}, bs.a({ href: '...' }, 'Action')),`, bs.e({ tag: 'br' }),
            `                    bs.dropdownItem({}, bs.a({ href: '...' }, 'Another action')),`, bs.e({ tag: 'br' }),
            `                    bs.dropdownItem({}, bs.a({ href: '...' }, 'Something else here')),`, bs.e({ tag: 'br' }),
            `                    bs.dropdownItem({ separator: true }),`, bs.e({ tag: 'br' }),
            `                    bs.dropdownItem({}, bs.a({ href: '...' }, 'Separated link'))`, bs.e({ tag: 'br' }),
            `                ])`, bs.e({ tag: 'br' }),
            `            )`, bs.e({ tag: 'br' }),
            `        ])`, bs.e({ tag: 'br' }),
            `    )`, bs.e({ tag: 'br' }),
            `])`
        ])))
    ];
}

function multipleButtons(): b.IBobrilChildren {
    return [
        b.anchor(bs.h2({ attrs: { id: 'input-groups-buttons-multiple' } }, 'Multiple buttons')),
        bs.p({}, [
            `While you can only have one add-on per side, you can have multiple buttons inside a single `,
            bs.code({}, 'bs.inputGroupBtn'), `.`
        ]),
        bs.e({ style: styles.bsExample }, [
            bs.row({}, [
                bs.col(
                    { size: bs.Size.Lg, span: 6 },
                    bs.inputGroup({}, [
                        bs.inputGroupBtn({}, [
                            bs.button({ aria: { label: 'Bold' } }, bs.glyphicon({ icon: bs.GlyphIcon.Bold })),
                            bs.button({ aria: { label: 'Italic' } }, bs.glyphicon({ icon: bs.GlyphIcon.Italic }))
                        ]),
                        bs.inputText({ placeholder: 'Search for...', aria: { label: '...' } })
                    ])
                ),
                bs.col(
                    { size: bs.Size.Lg, span: 6 },
                    bs.inputGroup({}, [
                        bs.inputText({ placeholder: 'Search for...', aria: { label: '...' } }),
                        bs.inputGroupBtn({}, [
                            bs.button({ aria: { label: 'Bold' } }, bs.glyphicon({ icon: bs.GlyphIcon.Bold })),
                            bs.button({ aria: { label: 'Italic' } }, bs.glyphicon({ icon: bs.GlyphIcon.Italic }))
                        ])
                    ])
                )
            ])
        ]),
        bs.figure({ style: styles.highlight }, pre({}, bs.code({ style: langJs }, [
            `bs.row({}, [`, bs.e({ tag: 'br' }),
            `    bs.col({ size: bs.Size.Lg, span: 6 },`, bs.e({ tag: 'br' }),
            `        bs.inputGroup({}, [`, bs.e({ tag: 'br' }),
            `            bs.inputGroupBtn({}, [`, bs.e({ tag: 'br' }),
            `                bs.button({ aria: { label: 'Bold' } }, bs.glyphicon({ icon: bs.GlyphIcon.Bold }))`, bs.e({ tag: 'br' }),
            `                bs.button({ aria: { label: 'Italic' } }, bs.glyphicon({ icon: bs.GlyphIcon.Italic }))`, bs.e({ tag: 'br' }),
            `            ]),`, bs.e({ tag: 'br' }),
            `            bs.inputText({ placeholder: 'Search for...', aria: { label: '...' } })`, bs.e({ tag: 'br' }),
            `        ])`, bs.e({ tag: 'br' }),
            `    ),`, bs.e({ tag: 'br' }),
            `    bs.col({ size: bs.Size.Lg, span: 6 },`, bs.e({ tag: 'br' }),
            `        bs.inputGroup({}, [`, bs.e({ tag: 'br' }),
            `            bs.inputText({ placeholder: 'Search for...', aria: { label: '...' } }),`, bs.e({ tag: 'br' }),
            `            bs.inputGroupBtn({}, [`, bs.e({ tag: 'br' }),
            `                bs.button({ aria: { label: 'Bold' } }, bs.glyphicon({ icon: bs.GlyphIcon.Bold }))`, bs.e({ tag: 'br' }),
            `                bs.button({ aria: { label: 'Italic' } }, bs.glyphicon({ icon: bs.GlyphIcon.Italic }))`, bs.e({ tag: 'br' }),
            `            ])`, bs.e({ tag: 'br' }),
            `        ])`, bs.e({ tag: 'br' }),
            `    )`, bs.e({ tag: 'br' }),
            `])`
        ])))
    ];
}
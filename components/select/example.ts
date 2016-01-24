import * as b from 'bobril';
import core from 'bobrilstrap-core';
import elem from 'bobrilstrap-element';
import row from 'bobrilstrap-row';
import container from 'bobrilstrap-container';
import select from './index';

let value = 'second';
let valueMultiple = ['second'];
let title = 'Test radio';
let onChange = (newVal: string) => { value = newVal; b.invalidate(); };
let onChangeMultiple = (newVal: string[]) => { valueMultiple = newVal; b.invalidate(); };

b.init(() => {
    console.log(value);
    return [
        core({}),
        container({}, [
            row({}, [
                select({
                    value,
                    onChange,
                    options: [
                        { value: 'first', title: 'first value' },
                        { value: 'second', title: 'second value' },
                        { value: 'third', title: 'third value', disabled: true }
                    ]
                })
            ]),
            row({}, elem({}, value)),
            row({}, [
                select({
                    value,
                    onChange,
                    disabled: true,
                    options: [
                        { value: 'first', title: 'first value' },
                        { value: 'second', title: 'second value' },
                        { value: 'third', title: 'third value', disabled: true }
                    ]
                })
            ]),
            row({}, elem({}, value)),
            row({}, [
                select({
                    value: valueMultiple,
                    onChange: onChangeMultiple,
                    multiple: true,
                    size: 3,
                    options: [
                        { value: 'first', title: 'first value' },
                        { value: 'second', title: 'second value' },
                        { value: 'third', title: 'third value', disabled: true }
                    ]
                })

            ]),
            row({}, elem({}, valueMultiple.join()))
        ])
    ];
});
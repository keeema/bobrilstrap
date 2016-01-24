import * as b from 'bobril';
import core from 'bobrilstrap-core';
import elem from 'bobrilstrap-element';
import row from 'bobrilstrap-row';
import container from 'bobrilstrap-container';
import radio from './index';

let checkedValue = 'first';
let title = 'Test radio';
let onChecked = (newVal: string) => { checkedValue = newVal; b.invalidate(); };

b.init(() => {
    console.log(checkedValue);
    return [
        core({}),
        container({}, [
            row({}, [
                radio({ value: 'first', name: 'radioOptions', checkedValue, title, onChecked }),
                radio({ value: 'second', name: 'radioOptions', checkedValue, title, onChecked }),
                radio({ value: 'third', name: 'radioOptions', checkedValue, title, onChecked, disabled: true }),
            ]),
            row({}, elem({}, checkedValue))
        ])
    ];
});
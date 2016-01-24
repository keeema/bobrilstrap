import * as b from 'bobril';
import elem from 'bobrilstrap-element';
import core from 'bobrilstrap-core';
import row from 'bobrilstrap-row';
import container from 'bobrilstrap-container';
import checkbox from './index';

let checkedValue = 'first';
let onChecked = (value: string) => { checkedValue = value; b.invalidate(); };

b.init(() => {
    return [
        core({}),
        container({}, [
            row({}, [
                checkbox({ value: 'first', name: 'my-group1', checkedValue, onChecked, id: 'my-radio1' }),
                checkbox({ value: 'second', name: 'my-group1', checkedValue, onChecked, id: 'my-radio2' })
            ]),
            row({}, [
                elem({}, checkedValue)
            ]),
            row({}, [
                checkbox({ value: 'first', name: 'my-group2', checkedValue, onChecked, id: 'my-radio3' }),
                checkbox({ value: 'second', name: 'my-group2', checkedValue, onChecked, id: 'my-radio4' })
            ]),
            row({}, [
                elem({}, checkedValue)
            ]),
        ])
    ];
});
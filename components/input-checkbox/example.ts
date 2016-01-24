import * as b from 'bobril';
import core from 'bobrilstrap-core';
import elem from 'bobrilstrap-element';
import row from 'bobrilstrap-row';
import container from 'bobrilstrap-container';
import checkbox from './index';

let checked = true;
let onChange = (newVal: boolean) => { checked = newVal; b.invalidate(); };

b.init(() => {
    return [
        core({}),
        container({}, [
            row({}, checkbox({ checked, onChange, id: 'my-checkbox' })),
            row({}, elem({}, checked.toString())),
        ])
    ];
});
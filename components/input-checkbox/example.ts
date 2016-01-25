import * as b from 'bobril';
import * as bsCore from 'bobrilstrap-core';
import elem from 'bobrilstrap-element';
import row from 'bobrilstrap-row';
import container from 'bobrilstrap-container';
import checkbox from './index';

bsCore.init();

let checked = true;
let onChange = (newVal: boolean) => { checked = newVal; b.invalidate(); };

b.init(() => {
    return [
        container({}, [
            row({}, checkbox({ checked, onChange, id: 'my-checkbox' })),
            row({}, elem({}, checked.toString())),
        ])
    ];
});
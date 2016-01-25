import * as b from 'bobril';
import * as bsCore from 'bobrilstrap-core';
import elem from 'bobrilstrap-element';
import row from 'bobrilstrap-row';
import container from 'bobrilstrap-container';
import checkbox from './index';

bsCore.init();

let checked = true;
let title = 'Test checkbox';
let onChange = (newVal: boolean) => { checked = newVal; b.invalidate(); };

b.init(() => {
    console.log(checked);
    return [
        container({}, [
            row({}, [
                checkbox({ checked, title, onChange }),
                checkbox({ checked, title, onChange, disabled: true }),
                checkbox({ checked, title, onChange, inline: true }),
                checkbox({ checked, title, onChange, inline: true })
            ]),
            row({}, elem({}, checked.toString()))
        ])
    ];
});
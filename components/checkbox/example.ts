import * as b from 'bobril';
import core from 'bobrilstrap-core';
import elem from 'bobrilstrap-element';
import row from 'bobrilstrap-row';
import container from 'bobrilstrap-container';
import checkbox from './index';

let checked = true;
let title = 'Test checkbox';
let onChange = (newVal: boolean) => { checked = newVal; b.invalidate(); };

b.init(() => {
    console.log(checked);
    return [
        core({}),
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
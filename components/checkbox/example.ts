import * as b from 'bobril';
import core from 'bobrilstrap-core';
import container from 'bobrilstrap-container';
import checkbox from './index';

let value = true;
let title = 'Test checkbox';
let onChange = (newVal: boolean) => { value = newVal; b.invalidate(); };

b.init(() => {
    console.log(value);
    return [
        core({}),
        container({}, [
            checkbox({ value, title, onChange }),
            checkbox({ value, title, onChange, disabled: true }),
            checkbox({ value, title, onChange, inline: true }),
            checkbox({ value, title, onChange, inline: true })
        ])
    ];
});
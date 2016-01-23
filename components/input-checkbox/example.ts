import * as b from 'bobril';
import core from 'bobrilstrap-core';
import container from 'bobrilstrap-container';
import checkbox from './index';

let value = true;
let onChange = (newVal: boolean) => { value = newVal; b.invalidate(); };

b.init(() => {
    return [
        core({}),
        container({}, [
            checkbox({ value, onChange })
        ])
    ];
});
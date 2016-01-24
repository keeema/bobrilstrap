import * as b from 'bobril';
import core from 'bobrilstrap-core';
import elem from 'bobrilstrap-element';
import row from 'bobrilstrap-row';
import container from 'bobrilstrap-container';
import inputText, { Type } from './index';
import col, { colStyles, Size } from 'bobrilstrap-col';

let value = '';
let placeholder = 'Write a value...';
let onChange = (newVal: string) => { value = newVal; b.invalidate(); };

b.init(() => {
    console.log(value);
    return [
        core({}),
        container({}, [
            row({}, col({ size: Size.md, count: 6 }, [
                inputText({ value: value.toString(), id: 'my-text1', onChange, placeholder })
            ])),
            row({}, elem({}, value.toString())),
        ])
    ];
});

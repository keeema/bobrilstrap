import * as b from 'bobril';
import * as bsCore from 'bobrilstrap-core';
import elem from 'bobrilstrap-element';
import row from 'bobrilstrap-row';
import container from 'bobrilstrap-container';
import textarea from './index';
import col, { colStyles, Size } from 'bobrilstrap-col';

bsCore.init();

let value = '';
let placeholder = 'Write a text...';
let onChange = (newVal: string) => { value = newVal; b.invalidate(); };

b.init(() => {
    console.log(value);
    return [
        container({}, [
            row({}, col({ size: Size.md, count: 6 }, [
                textarea({ value: value, id: 'my-text1', onChange, rows: 5, placeholder })
            ])),
            row({}, elem({}, value.toString())),
            row({}, col({ size: Size.md, count: 6 }, [
                textarea({ value: value, id: 'my-text2', onChange, rows: 5, placeholder, fixedSize: true })
            ])),
            row({}, elem({}, value.toString()))
        ])
    ];
});

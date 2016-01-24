import * as b from 'bobril';
import core from 'bobrilstrap-core';
import elem from 'bobrilstrap-element';
import row from 'bobrilstrap-row';
import container from 'bobrilstrap-container';
import textarea from './index';
import col, { colStyles, Size } from 'bobrilstrap-col';

let value = '';
let onChange = (newVal: string) => { value = newVal; b.invalidate(); };

b.init(() => {
    console.log(value);
    return [
        core({}),
        container({}, [
            row({}, col({ size: Size.md, count: 6 }, [
                textarea({ value: value, id: 'my-text1', onChange, rows: 5 })
            ])),
            row({}, elem({}, value.toString())),
              row({}, col({ size: Size.md, count: 6 }, [
                textarea({ value: value, id: 'my-text1', onChange, rows: 5, fixedSize: true })
            ])),
            row({}, elem({}, value.toString()))
        ])
    ];
});

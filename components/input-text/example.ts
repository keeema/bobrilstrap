import * as b from 'bobril';
import core from 'bobrilstrap-core';
import elem from 'bobrilstrap-element';
import row from 'bobrilstrap-row';
import container from 'bobrilstrap-container';
import inputText, { Type, Size as TextSize } from './index';
import col, { colStyles, Size as ColSize} from 'bobrilstrap-col';

let value = '';
let placeholder = 'Write a value...';
let onChange = (newVal: string) => { value = newVal; b.invalidate(); };

b.init(() => {
    console.log(value);
    return [
        core({}),
        container({}, [
            row({}, col({ size: ColSize.md, count: 6 }, [
                inputText({ value: value.toString(), id: 'my-text1', onChange, placeholder, size: TextSize.lg })
            ])),
            row({}, col({ size: ColSize.md, count: 6 }, [
                inputText({ value: value.toString(), id: 'my-text2', onChange, placeholder })
            ])),
            row({}, col({ size: ColSize.md, count: 6 }, [
                inputText({ value: value.toString(), id: 'my-text3', onChange, placeholder, size: TextSize.sm })
            ])),
            row({}, elem({}, value.toString())),
        ])
    ];
});

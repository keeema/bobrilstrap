import * as b from 'bobril';
import core from 'bobrilstrap-core';
import container from 'bobrilstrap-container';
import row from 'bobrilstrap-row';
import col, { Size } from './index';

let style = b.styleDef({ backgroundColor: '#000', color: '#fff' });
b.init(() => [
    core({}),
    container({}, [
        // Simple definition
        row({}, [
            col({ size: Size.sm, count: 1, styles: style }, '.col-sm-1'),
        ]),
        row({}, [
            col({ size: Size.sm, count: 2, styles: style }, '.col-sm-2')
        ]),
        row({}, [
            col({ size: Size.sm, count: 3, styles: style }, '.col-sm-3')
        ]),
        
        // Complex
        row({}, [            
            col({ cols: { size: Size.sm, count: 3 }, offsets: { size: Size.sm, count: 1 }, styles: style }, '.col-sm-3 .col-sm-offset-1')
        ]),
        row({}, [
            col({ cols: { size: Size.sm, count: 3 }, offsets: { size: Size.sm, count: 2 }, styles: style }, '.col-sm-3 .col-sm-offset-2')
        ]),
        row({}, [
            col({ cols: { size: Size.sm, count: 3 }, offsets: { size: Size.sm, count: 3 }, styles: style }, '.col-sm-3 .col-sm-offset-3')
        ])
    ]),
]);

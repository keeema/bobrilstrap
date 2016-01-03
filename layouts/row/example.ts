import * as b from 'bobril';
import core from 'bobrilstrap-core';
import container from 'bobrilstrap-container';
import row from './index';

b.init(() => [
    core({}),
    container({}, [
        row({}, 'First row'),
        row({}, 'Second row')
    ])
]);

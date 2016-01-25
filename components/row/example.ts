import * as b from 'bobril';
import * as bsCore from 'bobrilstrap-core';
import container from 'bobrilstrap-container';
import row from './index';

bsCore.init();

b.init(() => [
    container({}, [
        row({}, 'First row'),
        row({}, 'Second row')
    ])
]);

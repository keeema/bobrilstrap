import * as b from 'bobril';
import * as bsCore from 'bobrilstrap-core';
import container from './index';

bsCore.init();

b.init(() => [
    container({}, 'Some content'),
    container({ fluid: true }, 'Some content in fullwidth'),
]);

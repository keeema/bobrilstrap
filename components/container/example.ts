import * as b from 'bobril';
import core from 'bobrilstrap-core';
import container from './index';

b.init(() => [
    core({}),
    container({}, 'Some content'),
    container({ fluid: true }, 'Some content in fullwidth'),
]);

import * as b from 'bobril';
import core from 'bobrilstrap-core';
import container from 'bobrilstrap-container';
import label from './index';

b.init(() => [
    core({}),
    container({}, [
        label({}, 'My label')
    ])
]);

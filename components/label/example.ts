import * as b from 'bobril';
import * as bsCore from 'bobrilstrap-core';
import container from 'bobrilstrap-container';
import label from './index';

bsCore.init();

b.init(() => [
    container({}, [
        label({}, 'My label')
    ])
]);

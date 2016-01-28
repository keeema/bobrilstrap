import * as b from 'bobril';
import * as bsCore from 'bobrilstrap-core';
import container from 'bobrilstrap-container';
import p from './index';

bsCore.init();

b.init(() => [
    container({}, [
        p({}, 'My paragraph')
    ])
]);

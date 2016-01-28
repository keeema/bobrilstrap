import * as b from 'bobril';
import * as bsCore from 'bobrilstrap-core';
import container from 'bobrilstrap-container';
import span from './index';

bsCore.init();

b.init(() => [
    container({}, [
        span({}, 'My span')
    ])
]);

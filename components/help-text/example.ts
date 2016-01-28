import * as b from 'bobril';
import * as bsCore from 'bobrilstrap-core';
import container from 'bobrilstrap-container';
import label from 'bobrilstrap-label';
import inputText from 'bobrilstrap-input-text';
import helpText from './index';

bsCore.init();

b.init(() => [
    container({}, [
        label({ for: 'inputHelpBlock' }, 'Input with help text'),
        inputText({ id: 'inputHelpBlock', value: '' }),
        helpText({}, 'A block of help text that breaks onto a new line and may extend beyond one line.')
    ])
]);

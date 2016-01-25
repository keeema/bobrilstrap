import * as b from 'bobril';
import * as bsCore from 'bobrilstrap-core';
import elem from 'bobrilstrap-element';
import row from 'bobrilstrap-row';
import container from 'bobrilstrap-container';
import glyphIcon, { Icon } from './index';

bsCore.init();

b.init(() => {
    return [
        container({}, [
            Object.keys(Icon).
                map(iconName => row({}, glyphIcon({ icon: Icon[iconName] })))
        ])
    ];
});

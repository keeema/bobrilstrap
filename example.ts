import * as b from 'bobril';
import { masterPage } from './example/masterPage';
import { bobrilstrapPage } from './example/bobrilstrap/page';
import { css } from './example/css/page';
import { components } from './example/components/page';
import { javaScript } from './example/javaScript/page';
import { init as bsExampleInit } from './example/bsexample/css';
import { init as bobrilstrapInit } from './index';

bobrilstrapInit();
bsExampleInit();

b.routes(b.route({ handler: masterPage }, [
    b.route({ url: 'css', name: 'css', handler: css }),
    b.route({ url: 'bobrilstrap', name: 'bobrilstrap', handler: bobrilstrapPage }),
    b.route({ url: 'components', name: 'components', handler: components }),
    b.route({ url: 'javascript', name: 'javascript', handler: javaScript }),
    b.routeDefault({ name: 'bobrilstrap', handler: bobrilstrapPage })
]));
import * as b from 'bobril';
import bobrilstrapInit from './index';
import masterPage from './example/masterPage';
import bobrilstrapPage from './example/bobrilstrap/page';
import cssPage from './example/css/page';
import componentsPage from './example/components/page';
import javaScriptPage from './example/javaScript/page';
import { init as bsExampleInit } from './example/bsexample/css';

bobrilstrapInit();
bsExampleInit();

b.routes(b.route({ handler: masterPage }, [
    b.route({ url: 'css', name: 'css', handler: cssPage }),
    b.route({ url: 'bobrilstrap', name: 'bobrilstrap', handler: bobrilstrapPage }),
    b.route({ url: 'components', name: 'components', handler: componentsPage }),
    b.route({ url: 'javascript', name: 'javascript', handler: javaScriptPage }),
    b.routeDefault({ name: 'bobrilstrap', handler: bobrilstrapPage })
]));
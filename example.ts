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
    b.route({ url: 'components', name: 'components', handler: components }, [
        b.route({ url: 'glyphicons', name: 'glyphicons', handler: undefined }),
        b.route({ url: 'glyphicons-glyphs', name: 'glyphicons-glyphs', handler: undefined }),
        b.route({ url: 'glyphicons-how-to-use', name: 'glyphicons-how-to-use', handler: undefined }),
        b.route({ url: 'glyphicons-examples', name: 'glyphicons-examples', handler: undefined }),
        b.route({ url: 'dropdowns', name: 'dropdowns', handler: undefined }),
        b.route({ url: 'dropdowns-example', name: 'dropdowns-example', handler: undefined }),
        b.route({ url: 'dropdowns-alignment', name: 'dropdowns-alignment', handler: undefined }),
        b.route({ url: 'dropdowns-headers', name: 'dropdowns-headers', handler: undefined }),
        b.route({ url: 'dropdowns-divider', name: 'dropdowns-divider', handler: undefined }),
        b.route({ url: 'dropdowns-disabled', name: 'dropdowns-disabled', handler: undefined }),
        b.route({ url: 'btn-groups', name: 'btn-groups', handler: undefined }),
        b.route({ url: 'btn-groups-single', name: 'btn-groups-single', handler: undefined }),
        b.route({ url: 'btn-groups-toolbar', name: 'btn-groups-toolbar', handler: undefined }),
        b.route({ url: 'btn-groups-sizing', name: 'btn-groups-sizing', handler: undefined }),
        b.route({ url: 'btn-groups-nested', name: 'btn-groups-nested', handler: undefined }),
        b.route({ url: 'btn-groups-vertical', name: 'btn-groups-vertical', handler: undefined }),
        b.route({ url: 'btn-groups-justified', name: 'btn-groups-justified', handler: undefined }),
        b.route({ url: 'btn-dropdowns', name: 'btn-dropdowns', handler: undefined }),
        b.route({ url: 'btn-dropdowns-single', name: 'btn-dropdowns-single', handler: undefined }),
        b.route({ url: 'btn-dropdowns-split', name: 'btn-dropdowns-split', handler: undefined }),
        b.route({ url: 'btn-dropdowns-sizing', name: 'btn-dropdowns-sizing', handler: undefined }),
        b.route({ url: 'btn-dropdowns-dropup', name: 'btn-dropdowns-dropup', handler: undefined }),
        b.route({ url: 'input-groups', name: 'input-groups', handler: undefined }),
        b.route({ url: 'input-groups-basic', name: 'input-groups-basic', handler: undefined }),
        b.route({ url: 'input-groups-sizing', name: 'input-groups-sizing', handler: undefined }),
        b.route({ url: 'input-groups-checkboxes-radios', name: 'input-groups-checkboxes-radios', handler: undefined }),
        b.route({ url: 'input-groups-buttons', name: 'input-groups-buttons', handler: undefined }),
        b.route({ url: 'input-groups-buttons-dropdowns', name: 'input-groups-buttons-dropdowns', handler: undefined }),
        b.route({ url: 'input-groups-buttons-segmented', name: 'input-groups-buttons-segmented', handler: undefined }),
        b.route({ url: 'input-groups-buttons-multiple', name: 'input-groups-buttons-multiple', handler: undefined }),
        b.route({ url: 'nav', name: 'nav', handler: undefined }),
        b.route({ url: 'nav-tabs', name: 'nav-tabs', handler: undefined }),
        b.route({ url: 'nav-pills', name: 'nav-pills', handler: undefined }),
        b.route({ url: 'nav-justified', name: 'nav-justified', handler: undefined }),
        b.route({ url: 'nav-disabled-links', name: 'nav-disabled-links', handler: undefined }),
        b.route({ url: 'nav-dropdowns', name: 'nav-dropdowns', handler: undefined })
    ]),
    b.route({ url: 'javascript', name: 'javascript', handler: javaScript }),
    b.routeDefault({ name: 'bobrilstrap', handler: bobrilstrapPage })
]));
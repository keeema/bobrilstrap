import * as b from 'bobril';
import * as bse from './example/bsexample/css';
import * as bs from './index';
import { masterPage } from './example/masterPage';
import { bobrilstrapPage } from './example/bobrilstrap/page';
import { css } from './example/css/page';
import { components } from './example/components/page';
import { javaScript } from './example/javaScript/page';

bs.init();
bse.init();

b.routes(b.route({ handler: masterPage }, [
    b.route({ url: 'css', name: 'css', handler: css }),
    b.route({ url: 'bobrilstrap', name: 'bobrilstrap', handler: bobrilstrapPage }),
    b.route({ url: 'components', name: 'components', handler: components }, [
        b.route({ url: 'glyphicons', name: 'glyphicons', handler: false }),
        b.route({ url: 'glyphicons-glyphs', name: 'glyphicons-glyphs', handler: false }),
        b.route({ url: 'glyphicons-how-to-use', name: 'glyphicons-how-to-use', handler: false }),
        b.route({ url: 'glyphicons-examples', name: 'glyphicons-examples', handler: false }),
        b.route({ url: 'dropdowns', name: 'dropdowns', handler: false }),
        b.route({ url: 'dropdowns-example', name: 'dropdowns-example', handler: false }),
        b.route({ url: 'dropdowns-alignment', name: 'dropdowns-alignment', handler: false }),
        b.route({ url: 'dropdowns-headers', name: 'dropdowns-headers', handler: false }),
        b.route({ url: 'dropdowns-divider', name: 'dropdowns-divider', handler: false }),
        b.route({ url: 'dropdowns-disabled', name: 'dropdowns-disabled', handler: false }),
        b.route({ url: 'btn-groups', name: 'btn-groups', handler: false }),
        b.route({ url: 'btn-groups-single', name: 'btn-groups-single', handler: false }),
        b.route({ url: 'btn-groups-toolbar', name: 'btn-groups-toolbar', handler: false }),
        b.route({ url: 'btn-groups-sizing', name: 'btn-groups-sizing', handler: false }),
        b.route({ url: 'btn-groups-nested', name: 'btn-groups-nested', handler: false }),
        b.route({ url: 'btn-groups-vertical', name: 'btn-groups-vertical', handler: false }),
        b.route({ url: 'btn-groups-justified', name: 'btn-groups-justified', handler: false }),
        b.route({ url: 'btn-dropdowns', name: 'btn-dropdowns', handler: false }),
        b.route({ url: 'btn-dropdowns-single', name: 'btn-dropdowns-single', handler: false }),
        b.route({ url: 'btn-dropdowns-split', name: 'btn-dropdowns-split', handler: false }),
        b.route({ url: 'btn-dropdowns-sizing', name: 'btn-dropdowns-sizing', handler: false }),
        b.route({ url: 'btn-dropdowns-dropup', name: 'btn-dropdowns-dropup', handler: false }),
        b.route({ url: 'input-groups', name: 'input-groups', handler: false }),
        b.route({ url: 'input-groups-basic', name: 'input-groups-basic', handler: false }),
        b.route({ url: 'input-groups-sizing', name: 'input-groups-sizing', handler: false }),
        b.route({ url: 'input-groups-checkboxes-radios', name: 'input-groups-checkboxes-radios', handler: false }),
        b.route({ url: 'input-groups-buttons', name: 'input-groups-buttons', handler: false }),
        b.route({ url: 'input-groups-buttons-dropdowns', name: 'input-groups-buttons-dropdowns', handler: false }),
        b.route({ url: 'input-groups-buttons-segmented', name: 'input-groups-buttons-segmented', handler: false }),
        b.route({ url: 'input-groups-buttons-multiple', name: 'input-groups-buttons-multiple', handler: false }),
        b.route({ url: 'nav', name: 'nav', handler: false }),
        b.route({ url: 'nav-tabs', name: 'nav-tabs', handler: false }),
        b.route({ url: 'nav-pills', name: 'nav-pills', handler: false }),
        b.route({ url: 'nav-justified', name: 'nav-justified', handler: false }),
        b.route({ url: 'nav-disabled-links', name: 'nav-disabled-links', handler: false }),
        b.route({ url: 'nav-dropdowns', name: 'nav-dropdowns', handler: false })
    ]),
    b.route({ url: 'javascript', name: 'javascript', handler: javaScript }),
    b.routeDefault({ name: 'bobrilstrap', handler: bobrilstrapPage })
]));